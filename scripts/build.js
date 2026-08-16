'use strict';
/* Deterministic build — produces dist/manna.html from src/.
 *
 * Determinism rules:
 *  - no wall-clock timestamps anywhere in the output;
 *  - no absolute source paths (the Build ID is a hash of relative paths +
 *    contents, and the manifest records no paths);
 *  - fixed, explicit source order (JS_FILES), never directory iteration;
 *  - the artifact's own SHA-256 is a self-referential digest: a file cannot
 *    contain its own SHA-256, so the embedded digest (sha256Embedded) is
 *    computed over the artifact with the digest field blanked, and the digest
 *    of the final bytes (sha256) is recorded in the manifest.
 *
 * The root is resolved from __dirname, never process.cwd(), so builds from
 * any working directory (and the reproducibility probe) are identical. */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');

const JS_FILES = [
  'src/fixtures/verses.js',
  'src/fixtures/commentary.js',
  'src/fixtures/crossrefs.js',
  'src/fixtures/words.js',
  'src/fixtures/places.js',
  'src/selection/selection-service.js',
  'src/app/state.js',
  'src/app/render.js',
  'src/platform/diagnostics.js',
  'src/app/dom.js',
  'src/app/boot.js'
];

// Every file that influences manna.html must be in the build-input set, or
// the buildId will not change when the artifact does. index.html, styles.css,
// and icons.svg are assembled into the artifact (assemble() reads them) and so
// belong here alongside the JS modules.
const INPUT_FILES = [
  'package.json',
  'scripts/build.js',
  'src/index.html',
  'src/ui/styles.css',
  'src/ui/icons.svg'
].concat(JS_FILES);
const DIGEST_FIELD = 'sha256Embedded';
const PLACEHOLDER = '0'.repeat(64);

function readInputs(root) {
  return INPUT_FILES.map(function (f) {
    return { rel: f.split(path.sep).join('/'), abs: path.join(root, f.split('/').join(path.sep)) };
  });
}

function buildIdFor(inputs) {
  const h = crypto.createHash('sha256');
  inputs.forEach(function (inp) {
    h.update(inp.rel);
    h.update('\0');
    h.update(fs.readFileSync(inp.abs));
  });
  return h.digest('hex');
}

function assemble(root, meta) {
  let html = fs.readFileSync(path.join(root, 'src', 'index.html'), 'utf8');
  const css = fs.readFileSync(path.join(root, 'src', 'ui', 'styles.css'), 'utf8');
  const icons = fs.readFileSync(path.join(root, 'src', 'ui', 'icons.svg'), 'utf8');
  const js = JS_FILES.map(function (f) {
    return fs.readFileSync(path.join(root, f.split('/').join(path.sep)), 'utf8');
  }).join('\n');

  html = html.replace('<!-- MANNA:CSS -->', '<style>\n' + css + '\n</style>');
  html = html.replace('<!-- MANNA:ICONS -->', icons);
  html = html.replace('<!-- MANNA:JS -->', '<script>\n' + js + '\n</script>');

  const metaObject = { appVersion: meta.appVersion, buildId: meta.buildId, sourceFiles: meta.sourceFiles };
  metaObject[DIGEST_FIELD] = PLACEHOLDER;
  const metaScript = '<script>window.MANNA_META = ' + JSON.stringify(metaObject) + ';</script>';
  html = html.replace('<!-- MANNA:META -->', metaScript);

  // Digest of the artifact with its digest field blanked — this is what the
  // diagnostics show and the manifest records as sha256Embedded.
  const shaEmbedded = crypto.createHash('sha256').update(html, 'utf8').digest('hex');
  html = html.replace('"' + DIGEST_FIELD + '":"' + PLACEHOLDER + '"', '"' + DIGEST_FIELD + '":"' + shaEmbedded + '"');
  return { html: html, shaEmbedded: shaEmbedded };
}

function build(opts) {
  opts = opts || {};
  const root = opts.root || ROOT;
  const outDir = opts.outDir || path.join(root, 'dist');

  const inputs = readInputs(root);
  const appVersion = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).version;
  const meta = { appVersion: appVersion, buildId: buildIdFor(inputs), sourceFiles: inputs.length };
  const { html, shaEmbedded } = assemble(root, meta);

  fs.mkdirSync(outDir, { recursive: true });
  const artifact = path.join(outDir, 'manna.html');
  fs.writeFileSync(artifact, html, 'utf8');

  const sha = crypto.createHash('sha256').update(html, 'utf8').digest('hex');
  fs.writeFileSync(path.join(outDir, 'manna.html.sha256'), sha + '  manna.html\n');

  const manifest = {
    appVersion: meta.appVersion,
    buildId: meta.buildId,
    sourceFiles: meta.sourceFiles,
    sha256: sha,
    sha256Embedded: shaEmbedded,
    sizeBytes: Buffer.byteLength(html, 'utf8'),
    generator: 'scripts/build.js'
  };
  fs.writeFileSync(path.join(outDir, 'BUILD-MANIFEST.json'), JSON.stringify(manifest, null, 2) + '\n');
  return manifest;
}

if (require.main === module) {
  const manifest = build();
  console.log('build ok: manna.html (' + manifest.sizeBytes + ' bytes)');
  console.log('  buildId:        ' + manifest.buildId);
  console.log('  sha256:         ' + manifest.sha256);
  console.log('  sha256Embedded: ' + manifest.sha256Embedded);
}

module.exports = { build: build, JS_FILES: JS_FILES, DIGEST_FIELD: DIGEST_FIELD, PLACEHOLDER: PLACEHOLDER };
