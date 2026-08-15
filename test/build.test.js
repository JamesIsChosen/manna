'use strict';
/* Build + artifact verification: deterministic single-file build, golden
 * content, manifest consistency, and the two-source-directory reproducibility
 * probe (criterion 14). */
const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const buildMod = require('../scripts/build.js');
const lint = require('../scripts/lint.js');
const H = require('./helpers.js');

const ROOT = path.resolve(__dirname, '..');
const TMP = path.join(ROOT, '.tmp', 'test-dist');

function buildTo(outDir) {
  return buildMod.build({ root: ROOT, outDir: outDir });
}
function sha256(text) {
  return crypto.createHash('sha256').update(text, 'utf8').digest('hex');
}
function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  fs.readdirSync(src, { withFileTypes: true }).forEach((entry) => {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  });
}

const ARTIFACT = path.join(TMP, 'manna.html');

test('build: produces manna.html, BUILD-MANIFEST.json, and manna.html.sha256', () => {
  fs.rmSync(TMP, { recursive: true, force: true });
  const manifest = buildTo(TMP);
  for (const f of ['manna.html', 'BUILD-MANIFEST.json', 'manna.html.sha256']) {
    assert.ok(fs.existsSync(path.join(TMP, f)), f + ' missing');
  }
  assert.ok(manifest.sizeBytes > 0);
  assert.match(fs.readFileSync(path.join(TMP, 'manna.html.sha256'), 'utf8'), /^[0-9a-f]{64}  manna\.html\n$/);
});

test('artifact: is one HTML file with no sibling runtime references', () => {
  const html = fs.readFileSync(ARTIFACT, 'utf8');
  for (const pattern of [
    /<script[^>]+\bsrc=/i, /<link[^>]+\brel=("|')?stylesheet/i, /<img[^>]+\bsrc=/i,
    /@import/i, /url\(/i
  ]) {
    assert.ok(!pattern.test(html), 'artifact contains ' + pattern);
  }
});

test('artifact: contains no network references (criterion 11)', () => {
  const html = fs.readFileSync(ARTIFACT, 'utf8');
  for (const pattern of [/https?:\/\//i, /fetch\s*\(/i, /XMLHttpRequest/i, /WebSocket/i]) {
    assert.ok(!pattern.test(html), 'artifact contains ' + pattern);
  }
  assert.ok(html.includes("connect-src 'none'"), 'CSP network guard present');
});

test('artifact: contains no absolute developer paths (criterion 10)', () => {
  for (const f of fs.readdirSync(TMP)) {
    const text = fs.readFileSync(path.join(TMP, f), 'utf8');
    assert.ok(!/[a-zA-Z]:[\\/]/.test(text), f + ' contains a drive-letter path');
    assert.ok(!/\/home\/[^/]+/.test(text), f + ' contains a POSIX home path');
    assert.ok(!/\/Users\/[^/]+/.test(text), f + ' contains a macOS home path');
  }
});

test('artifact: fixture verses render — all six, tokens, supplied word, WoC', () => {
  const html = fs.readFileSync(ARTIFACT, 'utf8');
  H.Manna.fixtures.verses.verses.forEach((verse) => {
    assert.ok(html.includes(verse.text), 'verse ' + verse.n + ' text missing from artifact');
  });
  const count = (needle) => html.split(needle).length - 1;
  // The reader DOM is built at runtime by dom.js from the embedded fixture
  // model (the build has no DOM), so the artifact must carry the tagged model
  // itself and the renderer that marks it. The markup those pieces produce is
  // covered by test/render.test.js.
  assert.strictEqual(count("strongsId: 'G5457'"), 2, 'both light tokens tagged in the embedded model');
  assert.strictEqual(count("strongsId: 'G932'"), 1, 'kingdom tagged in the embedded model');
  assert.strictEqual(count("placeId: 'galilee'"), 2, 'Galilee tagged in v12 and v15');
  assert.strictEqual(count("placeId: 'nazareth'"), 1);
  assert.strictEqual(count("placeId: 'capernaum'"), 1);
  assert.ok(html.includes('supplied: [{ start: 49, end: 51 }]'),
    'supplied-word range survives in the embedded model, not stripped at build (criterion 15)');
  assert.ok(html.includes('class: \'sup\''), 'renderer marks supplied words as distinct (criterion 15)');
  assert.ok(!html.includes('[by]'), 'supplied-word brackets must not be rendered');
  assert.ok(html.includes('✝WoC'), 'Words of Christ marker present');
  assert.ok(html.includes('TRANSLATOR-SUPPLIED WORD'), 'legend explains the supplied word');
});

test('artifact: required UI is present', () => {
  const html = fs.readFileSync(ARTIFACT, 'utf8');
  for (const needle of ['STUDY DESK', 'CONTROLLER', 'HOME', 'READER', 'DIAGNOSTICS', 'FOLLOW', 'PIN',
    'PINNED · HELD AT', 'RESUME FOLLOW', 'EDITORIAL NOTE — NOT SCRIPTURE', 'schematic — bundled vector atlas goes here']) {
    assert.ok(html.includes(needle), 'artifact missing "' + needle + '"');
  }
});

test('manifest: consistent with the artifact', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(TMP, 'BUILD-MANIFEST.json'), 'utf8'));
  const html = fs.readFileSync(ARTIFACT, 'utf8');
  assert.strictEqual(manifest.sha256, sha256(html));
  assert.strictEqual(manifest.sizeBytes, Buffer.byteLength(html, 'utf8'));
  assert.strictEqual(manifest.appVersion, JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8')).version);
  assert.match(manifest.buildId, /^[0-9a-f]{64}$/);
});

test('manifest: sha256Embedded reproduces under the documented blanking rule', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(TMP, 'BUILD-MANIFEST.json'), 'utf8'));
  const html = fs.readFileSync(ARTIFACT, 'utf8');
  const blanked = html.replace('"' + manifest.sha256Embedded + '"', '"' + buildMod.PLACEHOLDER + '"');
  assert.strictEqual(sha256(blanked), manifest.sha256Embedded);
});

test('artifact: passes the lint checks end to end', () => {
  const result = lint.checkBuild(TMP);
  assert.deepStrictEqual(result.errors, []);
});

test('build: deterministic — two builds are byte-identical', () => {
  const outB = path.join(TMP, 'second');
  fs.rmSync(outB, { recursive: true, force: true });
  buildTo(outB);
  const a = fs.readFileSync(ARTIFACT, 'utf8');
  const b = fs.readFileSync(path.join(outB, 'manna.html'), 'utf8');
  assert.strictEqual(sha256(b), sha256(a));
  assert.deepStrictEqual(
    JSON.parse(fs.readFileSync(path.join(TMP, 'BUILD-MANIFEST.json'), 'utf8')),
    JSON.parse(fs.readFileSync(path.join(outB, 'BUILD-MANIFEST.json'), 'utf8')));
});

test('build: reproducible from a different source directory (criterion 14)', () => {
  const otherRoot = path.join(TMP, 'src-copy');
  fs.rmSync(otherRoot, { recursive: true, force: true });
  copyDir(path.join(ROOT, 'src'), path.join(otherRoot, 'src'));
  copyDir(path.join(ROOT, 'scripts'), path.join(otherRoot, 'scripts'));
  fs.copyFileSync(path.join(ROOT, 'package.json'), path.join(otherRoot, 'package.json'));
  const manifest2 = buildMod.build({ root: otherRoot, outDir: path.join(otherRoot, 'dist') });
  const html1 = fs.readFileSync(ARTIFACT, 'utf8');
  const html2 = fs.readFileSync(path.join(otherRoot, 'dist', 'manna.html'), 'utf8');
  assert.strictEqual(sha256(html2), sha256(html1), 'output differs between source directories');
  assert.strictEqual(manifest2.buildId, JSON.parse(fs.readFileSync(path.join(TMP, 'BUILD-MANIFEST.json'), 'utf8')).buildId);
});
