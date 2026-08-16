'use strict';
/* Vendor verification — every file in vendor/ must be recorded with its
 * upstream SHA-256 in docs/05-development/dependencies.md; any unrecorded
 * file fails closed. P0.1 vendors nothing, so an empty vendor/ passes. */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const VENDOR = path.join(ROOT, 'vendor');
const DEPS_DOC = path.join(ROOT, 'docs', '05-development', 'dependencies.md');

function walk(dir, out) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (entry) {
    if (entry.name.startsWith('.') || entry.name === 'README.md') return;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else out.push(p);
  });
  return out;
}

const recorded = new Set();
if (fs.existsSync(DEPS_DOC)) {
  const doc = fs.readFileSync(DEPS_DOC, 'utf8');
  doc.split('\n').forEach(function (line) {
    const m = line.match(/^\|\s*[^|]+\|\s*[^|]+\|\s*([0-9a-fA-F]{64})\s*\|/);
    if (m) recorded.add(m[1].toLowerCase());
  });
}

const files = walk(VENDOR, []);
const unrecorded = files.filter(function (f) {
  const sha = crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
  return !recorded.has(sha);
});

if (unrecorded.length) {
  console.error('verify-vendor: FAIL — files in vendor/ not recorded in docs/05-development/dependencies.md:');
  unrecorded.forEach(function (f) { console.error('  ' + path.relative(ROOT, f)); });
  process.exit(1);
}
console.log('verify-vendor: ok — no unrecorded vendored files');
