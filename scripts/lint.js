'use strict';
/* Artifact lint — every check must fail closed with a non-zero exit.
 *
 * Without arguments: checks dist/manna.html when present (CI runs lint before
 * the first build ever ran, so a missing dist is a note, not a failure).
 * With --artifact <path>: the file must exist and pass, or the exit is 1 —
 * this is the fail-closed mode the failure tests drive.
 *
 * Checks:
 *  - single runtime file: no sibling script/style/image references
 *  - no network: no absolute URLs, protocol-relative refs, fetch, XHR
 *  - no developer paths: no drive-letter or home-directory patterns
 *  - manifest/artifact consistency when dist/BUILD-MANIFEST.json exists */
const fs = require('fs');
const path = require('path');

const PATH_PATTERNS = [
  { re: /[a-zA-Z]:[\\/]/, what: 'drive-letter absolute path' },
  { re: /\/home\/[^/]+/, what: 'POSIX home path' },
  { re: /\/Users\/[^/]+/, what: 'macOS home path' }
];

const NETWORK_PATTERNS = [
  { re: /https?:\/\//i, what: 'absolute URL' },
  { re: /(?:src|href)="\/\//i, what: 'protocol-relative reference' },
  { re: /fetch\s*\(/i, what: 'fetch() call' },
  { re: /XMLHttpRequest/i, what: 'XMLHttpRequest' },
  { re: /WebSocket/i, what: 'WebSocket' }
];

const EXTERNAL_REF_PATTERNS = [
  { re: /<script[^>]+\bsrc=/i, what: 'external <script src>' },
  { re: /<link[^>]+\brel=("|')?stylesheet/i, what: 'external stylesheet <link>' },
  { re: /<img[^>]+\bsrc=/i, what: 'external <img src>' },
  { re: /@import/i, what: 'CSS @import' },
  { re: /url\(/i, what: 'CSS url() reference' }
];

function checkText(text, label) {
  const errors = [];
  PATH_PATTERNS.forEach(function (p) {
    if (p.re.test(text)) errors.push(label + ': ' + p.what);
  });
  NETWORK_PATTERNS.forEach(function (p) {
    if (p.re.test(text)) errors.push(label + ': ' + p.what);
  });
  EXTERNAL_REF_PATTERNS.forEach(function (p) {
    if (p.re.test(text)) errors.push(label + ': ' + p.what);
  });
  return errors;
}

function checkArtifact(html) {
  return { ok: checkText(html, 'manna.html').length === 0, errors: checkText(html, 'manna.html') };
}

function checkBuild(distDir) {
  const errors = [];
  const artifactPath = path.join(distDir, 'manna.html');
  const manifestPath = path.join(distDir, 'BUILD-MANIFEST.json');

  if (!fs.existsSync(artifactPath)) {
    errors.push('missing artifact: ' + artifactPath);
    return { ok: false, errors: errors };
  }
  const html = fs.readFileSync(artifactPath, 'utf8');
  errors.push.apply(errors, checkText(html, 'manna.html'));

  if (fs.existsSync(manifestPath)) {
    let manifest;
    try {
      manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    } catch (e) {
      errors.push('BUILD-MANIFEST.json is not valid JSON');
      manifest = null;
    }
    if (manifest) {
      errors.push.apply(errors, checkText(JSON.stringify(manifest), 'BUILD-MANIFEST.json'));
      const crypto = require('crypto');
      const sha = crypto.createHash('sha256').update(html, 'utf8').digest('hex');
      if (manifest.sha256 !== sha) {
        errors.push('BUILD-MANIFEST.json sha256 does not match the artifact');
      }
    }
  }
  return { ok: errors.length === 0, errors: errors };
}

if (require.main === module) {
  const args = process.argv.slice(2);
  let result;
  if (args[0] === '--artifact') {
    const p = args[1];
    if (!p) {
      console.error('lint: --artifact requires a path');
      process.exit(1);
    }
    if (!fs.existsSync(p)) {
      console.error('lint: artifact not found: ' + p);
      process.exit(1);
    }
    result = checkArtifact(fs.readFileSync(p, 'utf8'));
  } else {
    const distDir = path.resolve(__dirname, '..', 'dist');
    if (!fs.existsSync(path.join(distDir, 'manna.html'))) {
      console.log('lint: no artifact in dist/ yet — nothing to check');
      process.exit(0);
    }
    result = checkBuild(distDir);
  }

  if (result.ok) {
    console.log('lint: ok');
    process.exit(0);
  }
  result.errors.forEach(function (e) { console.error('lint: ' + e); });
  process.exit(1);
}

module.exports = { checkArtifact: checkArtifact, checkBuild: checkBuild };
