'use strict';
/* Real-browser smoke test — the one check the Node-only suite structurally
 * cannot make. It builds the artifact, boots it in a headless Chromium-family
 * browser (Edge/Chrome/Chromium) over the DevTools Protocol, and asserts that
 * the entry point actually ran: #app has rendered children, and the fixture
 * verses are present in the live DOM.
 *
 * Why this exists: an earlier artifact passed 46 Node tests while rendering a
 * blank page, because every module was defined but boot() was never invoked.
 * No amount of source parsing or module unit-testing sees that — only a real
 * browser engine executing the inlined <script> does.
 *
 * Zero runtime dependencies: it uses Node's built-in WebSocket + fetch to
 * speak CDP to a browser binary discovered from a known path list (or the
 * MANNA_BROWSER env var). */
const { test } = require('node:test');
const assert = require('node:assert');
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const ROOT = path.resolve(__dirname, '..');
const TMP = path.join(ROOT, '.tmp', 'browser-test');
const buildMod = require('../scripts/build.js');

// Build the artifact into a temp dir (CI runs `npm test` before `npm run build`,
// so we cannot assume dist/ exists — same reasoning as failure.test.js).
fs.rmSync(TMP, { recursive: true, force: true });
buildMod.build({ root: ROOT, outDir: path.join(TMP, 'dist') });
const ARTIFACT = path.join(TMP, 'dist', 'manna.html');

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

function findBrowser() {
  const candidates = [
    process.env.MANNA_BROWSER,
    // Windows
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    // macOS
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    // Linux
    '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/microsoft-edge'
  ].filter(Boolean);
  for (const p of candidates) if (fs.existsSync(p)) return p;
  const names = process.platform === 'win32'
    ? ['msedge.exe', 'chrome.exe', 'chromium.exe']
    : ['google-chrome', 'chromium', 'chromium-browser', 'microsoft-edge'];
  for (const name of names) {
    for (const dir of (process.env.PATH || '').split(path.delimiter)) {
      if (!dir) continue;
      const p = path.join(dir, name);
      if (fs.existsSync(p)) return p;
    }
  }
  return null;
}

function launch(browserPath) {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'manna-browser-'));
  const proc = spawn(browserPath, [
    '--headless=new', '--disable-gpu', '--no-sandbox',
    '--remote-debugging-port=0', '--user-data-dir=' + profile,
    'about:blank'
  ], { stdio: 'ignore' });
  return { proc, profile };
}

async function waitForPort(proc, profile, timeoutMs) {
  const file = path.join(profile, 'DevToolsActivePort');
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (proc.exitCode !== null) throw new Error('browser exited early (code ' + proc.exitCode + ')');
    if (fs.existsSync(file)) {
      const text = fs.readFileSync(file, 'utf8').trim().split('\n');
      return parseInt(text[0], 10);
    }
    await sleep(100);
  }
  throw new Error('browser did not expose DevToolsActivePort within ' + timeoutMs + 'ms');
}

async function getPageWsUrl(port) {
  const start = Date.now();
  while (Date.now() - start < 10000) {
    try {
      const res = await fetch('http://127.0.0.1:' + port + '/json/list');
      const targets = await res.json();
      const page = targets.find((t) => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch (e) { /* not ready yet */ }
    await sleep(100);
  }
  throw new Error('no page target found on the DevTools endpoint');
}

function connect(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    let nextId = 0;
    const pending = new Map();
    ws.addEventListener('message', (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && pending.has(msg.id)) {
        const { res, rej } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) rej(new Error(msg.error.message));
        else res(msg.result);
      }
    });
    ws.addEventListener('open', () => resolve({
      send(method, params) {
        const id = ++nextId;
        return new Promise((res, rej) => {
          pending.set(id, { res, rej });
          ws.send(JSON.stringify({ id, method, params: params || {} }));
        });
      },
      close() { ws.close(); }
    }));
    ws.addEventListener('error', () => reject(new Error('CDP WebSocket error')));
  });
}

async function evaluate(cdp, expression) {
  const r = await cdp.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (r.exceptionDetails) throw new Error('evaluate threw: ' + JSON.stringify(r.exceptionDetails));
  return r.result.value;
}

async function poll(cdp, expression, predicate, timeoutMs, what) {
  const start = Date.now();
  let last;
  while (Date.now() - start < timeoutMs) {
    last = await evaluate(cdp, expression);
    if (predicate(last)) return last;
    await sleep(100);
  }
  throw new Error('timed out waiting for ' + what + '; last value: ' + JSON.stringify(last));
}

const browserPath = findBrowser();

test('browser: artifact boots and renders #app with the fixture verses', {
  skip: browserPath ? false : 'no Chromium-family browser found (set MANNA_BROWSER to the binary)'
}, async () => {
  const { proc, profile } = launch(browserPath);
  try {
    const port = await waitForPort(proc, profile, 15000);
    const wsUrl = await getPageWsUrl(port);
    const cdp = await connect(wsUrl);
    await cdp.send('Page.enable');
    await cdp.send('Page.navigate', { url: pathToFileURL(ARTIFACT).href });

    // The entry point must have populated #app.
    const childCount = await poll(cdp,
      'document.getElementById("app") ? document.getElementById("app").children.length : -1',
      (n) => n > 0, 10000, '#app to render');
    assert.ok(childCount > 0, '#app has no rendered children — the entry point did not boot');

    // Navigate to the reader and confirm the fixture verses are in the live DOM.
    await evaluate(cdp, 'document.querySelector(\'[data-nav="reader"]\').click()');
    await poll(cdp,
      'document.body.textContent.includes("kingdom of heaven is at hand")',
      (v) => v === true, 10000, 'verse 17 to render in the reader');

    const verse16 = await evaluate(cdp,
      'document.body.textContent.includes("The people which sat in darkness saw great light")');
    assert.ok(verse16, 'verse 16 text not rendered in the reader');

    // The study-word tokens must be real buttons in the rendered DOM.
    const tokenButtons = await evaluate(cdp, 'document.querySelectorAll(".tok.word").length');
    assert.ok(tokenButtons > 0, 'study-word token buttons not rendered');

    cdp.close();
  } finally {
    proc.kill();
    // Wait for the browser to release its profile lock, then clean up. The
    // temp dir is inside os.tmpdir() and is removed by the OS on reboot if
    // this ever fails, so the delete is best-effort.
    await new Promise((r) => proc.once('exit', r)).catch(() => {});
    await sleep(200);
    try { fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }); } catch (e) { /* ignore */ }
  }
});
