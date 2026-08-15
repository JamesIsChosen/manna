'use strict';
/* Reproducibility probe — builds from two different source directories and
 * compares the output byte-for-byte (roadmap criterion 14).
 *
 * Builds under .tmp/repro-a and .tmp/repro-b from copies of the source tree,
 * then compares every file in the two dist directories. Exits non-zero when
 * outputs differ; prints the record of any nondeterministic field. */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const cp = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const COPY_DIRS = ['src', 'scripts', 'fixtures'];
const COPY_FILES = ['package.json', 'package-lock.json'];

function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  fs.readdirSync(src, { withFileTypes: true }).forEach(function (entry) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  });
}

function buildIn(dir) {
  const res = cp.spawnSync(process.execPath, [path.join(dir, 'scripts', 'build.js')], { cwd: dir, stdio: 'inherit' });
  if (res.status !== 0) {
    console.error('repro: build failed in ' + dir);
    process.exit(1);
  }
  const out = path.join(dir, 'dist');
  const hashes = {};
  fs.readdirSync(out).sort().forEach(function (f) {
    hashes[f] = crypto.createHash('sha256').update(fs.readFileSync(path.join(out, f))).digest('hex');
  });
  return hashes;
}

const a = path.join(ROOT, '.tmp', 'repro-a');
const b = path.join(ROOT, '.tmp', 'repro-b');
fs.rmSync(a, { recursive: true, force: true });
fs.rmSync(b, { recursive: true, force: true });

COPY_DIRS.forEach(function (d) {
  copyDir(path.join(ROOT, d), path.join(a, d));
  copyDir(path.join(ROOT, d), path.join(b, d));
});
COPY_FILES.forEach(function (f) {
  fs.copyFileSync(path.join(ROOT, f), path.join(a, f));
  fs.copyFileSync(path.join(ROOT, f), path.join(b, f));
});

const ha = buildIn(a);
const hb = buildIn(b);

let identical = true;
const allFiles = new Set(Object.keys(ha).concat(Object.keys(hb)));
allFiles.forEach(function (f) {
  const same = ha[f] === hb[f];
  if (!same) identical = false;
  console.log((same ? 'same  ' : 'DIFF  ') + f + '  ' + (ha[f] || '-') + (same ? '' : '  vs  ' + (hb[f] || '-')));
});

if (!identical) {
  console.error('repro: FAIL — outputs differ between source directories');
  process.exit(1);
}
console.log('repro: PASS — byte-identical output from two source directories');
