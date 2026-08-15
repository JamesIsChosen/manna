'use strict';
/* Deliberate failure fixtures (§58): the verification system must fail closed
 * with a non-zero exit when an external script, an external stylesheet, an
 * HTTP-fetched fixture, a missing artifact, broken SelectionService
 * propagation, or a pinned pane that follows is introduced. */
const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const lint = require('../scripts/lint.js');
const buildMod = require('../scripts/build.js');

const ROOT = path.resolve(__dirname, '..');
const TMP = path.join(ROOT, '.tmp', 'failure');
const LINT_CLI = path.join(ROOT, 'scripts', 'lint.js');
const PROBE_CLI = path.join(ROOT, 'scripts', 'probe-selection.js');
// Self-contained: the suite builds its own baseline artifact (CI runs tests
// before the first build ever produced dist/).
buildMod.build({ root: ROOT, outDir: path.join(TMP, 'dist') });
const GOOD_HTML = fs.readFileSync(path.join(TMP, 'dist', 'manna.html'), 'utf8');

function runLint(artifactPath) {
  return spawnSync(process.execPath, [LINT_CLI, '--artifact', artifactPath], { encoding: 'utf8' });
}

function writeBroken(html, name) {
  const p = path.join(TMP, name);
  fs.writeFileSync(p, html, 'utf8');
  return p;
}

test('failure: external required JavaScript fails lint with exit != 0', () => {
  const broken = GOOD_HTML.replace('</body>', '<script src="app.js"></script></body>');
  const p = writeBroken(broken, 'external-js.html');
  const res = runLint(p);
  assert.notStrictEqual(res.status, 0);
  assert.ok(res.stderr.includes('external <script src>'));
});

test('failure: external required stylesheet fails lint with exit != 0', () => {
  const broken = GOOD_HTML.replace('</head>', '<link rel="stylesheet" href="app.css"></head>');
  const p = writeBroken(broken, 'external-css.html');
  const res = runLint(p);
  assert.notStrictEqual(res.status, 0);
  assert.ok(res.stderr.includes('external stylesheet'));
});

test('failure: fixture fetched over HTTP fails lint with exit != 0', () => {
  const broken = GOOD_HTML.replace('</script>', 'fetch("https://example.com/fixture.json");</script>');
  const p = writeBroken(broken, 'http-fixture.html');
  const res = runLint(p);
  assert.notStrictEqual(res.status, 0);
  assert.ok(res.stderr.includes('fetch() call'));
  assert.ok(res.stderr.includes('absolute URL'));
});

test('failure: missing artifact fails lint with exit != 0', () => {
  const res = runLint(path.join(TMP, 'does-not-exist.html'));
  assert.notStrictEqual(res.status, 0);
  assert.ok(res.stderr.includes('artifact not found'));
});

test('failure: broken selection propagation is caught by the probe', () => {
  const res = spawnSync(process.execPath, [PROBE_CLI, '--sabotage', 'commentary-never-registered'], { encoding: 'utf8' });
  assert.notStrictEqual(res.status, 0, 'probe must fail closed with a non-zero exit');
  assert.ok(res.stderr.includes('commentary'));
});

test('failure: a pinned pane that follows is caught by the probe', () => {
  const res = spawnSync(process.execPath, [PROBE_CLI, '--sabotage', 'no-pin'], { encoding: 'utf8' });
  assert.notStrictEqual(res.status, 0, 'probe must fail closed with a non-zero exit');
  assert.ok(res.stderr.includes('pin'));
});
