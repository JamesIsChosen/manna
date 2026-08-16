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

/* A real browser is a hard prerequisite for this file: its entire purpose is to
 * exercise the artifact in an actual engine, so silently skipping when no binary
 * is present would turn a green run into "checked nothing". Fail instead — a
 * skipped test is not a passed test. */
function requireBrowser() {
  if (!browserPath) {
    throw new Error('no Chromium-family browser found (set MANNA_BROWSER to the binary, or install Chrome/Chromium/Edge)');
  }
}

test('browser: artifact boots and renders #app with the fixture verses', async () => {
  requireBrowser();
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

/* Regression for the "reader footer unreachable" bug: a fixed bottom nav was
 * overlaying interactive controls, and the reader's footer PREV/NEXT buttons
 * sat below the viewport with no scroll room to reach them. The general form
 * of the failure is: some visible button's bounding rect falls outside the
 * viewport, or is overlapped by the fixed nav. Run on desktop (nav hidden by
 * design) and phone (nav shown, reader must reserve clearance). */
async function runNavReachabilityCheck(viewport, mobile, label) {
  const { proc, profile } = launch(browserPath);
  try {
    const port = await waitForPort(proc, profile, 15000);
    const cdp = await connect(await getPageWsUrl(port));
    await cdp.send('Page.enable');
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: viewport[0], height: viewport[1], deviceScaleFactor: 1, mobile: mobile
    });
    if (mobile) {
      await cdp.send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
      await cdp.send('Emulation.setUserAgentOverride', {
        userAgent: 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
      });
    }
    await cdp.send('Page.navigate', { url: pathToFileURL(ARTIFACT).href });
    await poll(cdp, 'document.getElementById("app") && document.getElementById("app").children.length > 0',
      (v) => v === true, 10000, label + ' boot');
    await evaluate(cdp, 'document.querySelector(\'[data-nav="reader"]\').click()');
    await poll(cdp, 'document.querySelectorAll(".reader-footer .nav-btn").length >= 2',
      (v) => v === true, 10000, label + ' reader footer');

    // Scroll to the very bottom — that is where a fixed nav would cover the
    // last content, and where a missing bottom clearance is exposed.
    await evaluate(cdp,
      'window.scrollTo(0, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight))');
    await sleep(250);

    const violations = await evaluate(cdp, `(function () {
      var vh = window.innerHeight, vw = window.innerWidth;
      var nav = document.querySelector('.bottomnav');
      var navCs = nav ? getComputedStyle(nav) : null;
      var navVisible = navCs && navCs.display !== 'none';
      var navRect = navVisible ? nav.getBoundingClientRect() : null;
      var bad = [];
      [].forEach.call(document.querySelectorAll('button'), function (b) {
        if (b.closest('.bottomnav')) return;               // the nav's own buttons
        var cs = getComputedStyle(b);
        if (cs.display === 'none' || cs.visibility === 'hidden') return;
        var r = b.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) return;       // not rendered
        var label = (b.textContent || '').trim().replace(/\\s+/g, ' ').slice(0, 26) || (b.className || '').slice(0, 26);
        // Horizontal clip: no horizontal scroll is intended.
        if (r.left < -0.5 || r.right > vw + 0.5) bad.push('hclip:' + label);
        // Below the fold at maximum scroll — unreachable.
        if (r.top >= 0 && r.bottom > vh + 0.5) bad.push('below-fold:' + label);
        if (navRect) {
          var overlap = !(r.right <= navRect.left || r.left >= navRect.right ||
                          r.bottom <= navRect.top || r.top >= navRect.bottom);
          if (overlap) bad.push('nav-overlap:' + label);
        }
      });
      return bad;
    })()`);

    assert.deepStrictEqual(violations, [], label + ' has unreachable/overlapped buttons: ' + JSON.stringify(violations));
    cdp.close();
  } finally {
    proc.kill();
    await new Promise((r) => proc.once('exit', r)).catch(() => {});
    await sleep(200);
    try { fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }); } catch (e) { /* ignore */ }
  }
}

test('browser: no button is clipped by the viewport or overlapped by the fixed nav', async () => {
  requireBrowser();
  await runNavReachabilityCheck([1280, 1032], false, 'desktop');
  await runNavReachabilityCheck([360, 800], true, 'phone');
});

/* Regression for criterion 9 (R2-F3): the phone workflow must be driven by
 * real touch input, not direct .click(). This walks the full P0.1 phone path —
 * navigation, verse selection, commentary/xref, word study, atlas, and
 * pin/follow — sending genuine touchStart/touchEnd through the CDP input
 * protocol and asserting the visible result at each step, with a
 * horizontal-overflow guard throughout. */
async function hasSel(cdp, selector) {
  return evaluate(cdp, '!!document.querySelector(' + JSON.stringify(selector) + ')');
}

async function textOf(cdp, selector) {
  return evaluate(cdp, '(function(){ var el = document.querySelector(' + JSON.stringify(selector) + '); return el ? el.textContent.trim() : ""; })()');
}

async function waitFor(cdp, fn, timeout, what) {
  const start = Date.now();
  let last;
  while (Date.now() - start < timeout) {
    last = await fn(cdp);
    if (last) return last;
    await sleep(100);
  }
  throw new Error('timed out waiting for ' + what + '; last=' + JSON.stringify(last));
}

async function dispatchTap(cdp, x, y) {
  await cdp.send('Input.dispatchTouchEvent', {
    type: 'touchStart',
    touchPoints: [{ x: x, y: y, id: 0, radiusX: 1, radiusY: 1, force: 1 }]
  });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
}

async function tapEl(cdp, selector, index) {
  index = index || 0;
  await evaluate(cdp, '(function(){ var el = document.querySelectorAll(' + JSON.stringify(selector) + ')[' + index + ']; if (el) el.scrollIntoView({ block: "center", inline: "nearest" }); })()');
  await sleep(150);
  const pt = await evaluate(cdp, '(function(){ var el = document.querySelectorAll(' + JSON.stringify(selector) + ')[' + index + ']; if (!el) return null; var r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; })()');
  if (!pt) throw new Error('tap target not found: ' + selector + ' [' + index + ']');
  await dispatchTap(cdp, pt.x, pt.y);
  await sleep(180);
}

async function noHOverflow(cdp, label) {
  const gap = await evaluate(cdp, 'document.documentElement.scrollWidth - window.innerWidth');
  assert.ok(gap <= 0.5, label + ': horizontal overflow by ' + gap + 'px');
}

async function runPhoneTapWorkflow() {
  const { proc, profile } = launch(browserPath);
  try {
    const port = await waitForPort(proc, profile, 15000);
    const cdp = await connect(await getPageWsUrl(port));
    await cdp.send('Page.enable');
    await cdp.send('Emulation.setDeviceMetricsOverride', { width: 360, height: 800, deviceScaleFactor: 1, mobile: true });
    await cdp.send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
    await cdp.send('Emulation.setUserAgentOverride', { userAgent: 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36' });
    await cdp.send('Page.navigate', { url: pathToFileURL(ARTIFACT).href });
    await poll(cdp, 'document.getElementById("app") && document.getElementById("app").children.length > 0', (v) => v === true, 10000, 'phone boot');

    // 1. Primary navigation: READER.
    await tapEl(cdp, '.bottomnav [data-nav="reader"]');
    await waitFor(cdp, (c) => hasSel(c, '.reader-screen'), 5000, 'reader screen');
    await noHOverflow(cdp, 'after reader nav');

    // 2. Reader navigation: NEXT then PREV.
    await tapEl(cdp, '.reader-footer .nav-btn', 1);
    await waitFor(cdp, (c) => hasSel(c, '.verse.selected[data-verse="17"]'), 5000, 'next verse selected');
    await tapEl(cdp, '.reader-footer .nav-btn', 0);
    await waitFor(cdp, (c) => hasSel(c, '.verse.selected[data-verse="16"]'), 5000, 'prev verse selected');

    // 3. Primary navigation: STUDY DESK (phone tier renders the drawer).
    await tapEl(cdp, '.bottomnav [data-nav="desk"]');
    await waitFor(cdp, (c) => hasSel(c, '#drawer'), 5000, 'desk phone drawer');
    await noHOverflow(cdp, 'after desk nav');

    // 4. Select verse 16, then open the drawer and confirm Commentary.
    await tapEl(cdp, '.verse[data-verse="16"]');
    await tapEl(cdp, '.drawer .grab');
    await waitFor(cdp, async (c) => (await evaluate(c, 'document.getElementById("drawer").classList.contains("open")')) === true, 5000, 'drawer open');
    await waitFor(cdp, async (c) => (await textOf(c, '.mpanel-body .pane-ref')) === 'MATTHEW 4:16', 5000, 'commentary shows 4:16');

    // 5. Cross References update.
    await tapEl(cdp, '.drawer .tab[data-mpane="xref"]');
    await waitFor(cdp, (c) => hasSel(c, '.mpanel-body .xrow'), 5000, 'xref rows');

    // 6. Word study: tap "light" (G5457) in v16; drawer auto-opens to WORD.
    await tapEl(cdp, '.drawer .grab');
    await tapEl(cdp, '.tok.word[data-strongs="G5457"]', 0);
    await waitFor(cdp, (c) => hasSel(c, '.mpanel-body .word-body'), 5000, 'word study pane');
    await waitFor(cdp, async (c) => (await textOf(c, '.mpanel-body .chip')) === 'G5457', 5000, "Strong's G5457");

    // 7. Atlas: tap "Capernaum" in v13; drawer auto-opens to ATLAS.
    await tapEl(cdp, '.drawer .grab');
    await tapEl(cdp, '.tok.place[data-place="capernaum"]');
    await waitFor(cdp, async (c) => (await textOf(c, '.mpanel-body .place-name')) === 'CAPERNAUM', 5000, 'atlas Capernaum');

    // 8. Pin Commentary (switch to COMM, then PIN).
    await tapEl(cdp, '.drawer .tab[data-mpane="commentary"]');
    await waitFor(cdp, async (c) => (await textOf(c, '.mpanel-body .pane-ref')) === 'MATTHEW 4:16', 5000, 'commentary 4:16 pre-pin');
    await tapEl(cdp, '.drawer .fprow [data-fp="pin"]');
    await waitFor(cdp, async (c) => !(await evaluate(c, 'document.querySelector(".drawer .pinbar").hidden')), 5000, 'pinbar visible');
    const pinbar = await textOf(cdp, '.drawer .pinbar');
    assert.ok(/PINNED/.test(pinbar), 'pinbar does not say PINNED: ' + pinbar);

    // 9. Select verse 17 while pinned — commentary must stay held at 4:16.
    await tapEl(cdp, '.drawer .grab');
    await tapEl(cdp, '.verse[data-verse="17"]');
    await tapEl(cdp, '.drawer .grab');
    await waitFor(cdp, async (c) => (await textOf(c, '.mpanel-body .pane-ref')) === 'MATTHEW 4:16', 5000, 'commentary held at 4:16');
    await waitFor(cdp, async (c) => !(await evaluate(c, 'document.querySelector(".drawer .pinbar").hidden')), 5000, 'pinbar still visible');

    // 10. Unpin — commentary resumes following.
    await tapEl(cdp, '.drawer .fprow [data-fp="follow"]');
    await waitFor(cdp, async (c) => (await evaluate(c, 'document.querySelector(".drawer .pinbar").hidden')) === true, 5000, 'pinbar hidden');
    await waitFor(cdp, async (c) => (await textOf(c, '.mpanel-body .pane-ref')) === 'MATTHEW 4:17', 5000, 'commentary resumed 4:17');

    await noHOverflow(cdp, 'after full workflow');

    cdp.close();
  } finally {
    proc.kill();
    await new Promise((r) => proc.once('exit', r)).catch(() => {});
    await sleep(200);
    try { fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }); } catch (e) { /* ignore */ }
  }
}

test('browser: phone tap workflow drives every required interaction by touch', async () => {
  requireBrowser();
  await runPhoneTapWorkflow();
});

/* Criterion 2 (R2-F2): copying ONLY manna.html into an empty directory and
 * opening it must yield the full harness. This performs the verbatim action —
 * build, copy the single artifact into a fresh empty dir, assert the dir holds
 * nothing else, boot from that copy via file://, and confirm a core selection
 * interaction works. */
test('browser: clean-directory — manna.html alone in an empty dir boots the harness', async () => {
  requireBrowser();
  const cleanDir = path.join(ROOT, '.tmp', 'clean-dir-test');
  fs.rmSync(cleanDir, { recursive: true, force: true });
  fs.mkdirSync(cleanDir, { recursive: true });
  fs.copyFileSync(ARTIFACT, path.join(cleanDir, 'manna.html'));

  const listing = fs.readdirSync(cleanDir).sort();
  assert.deepStrictEqual(listing, ['manna.html'], 'clean dir must contain only manna.html, got: ' + JSON.stringify(listing));

  const { proc, profile } = launch(browserPath);
  try {
    const port = await waitForPort(proc, profile, 15000);
    const cdp = await connect(await getPageWsUrl(port));
    await cdp.send('Page.enable');
    await cdp.send('Page.navigate', { url: pathToFileURL(path.join(cleanDir, 'manna.html')).href });

    const childCount = await poll(cdp, 'document.getElementById("app") ? document.getElementById("app").children.length : -1', (n) => n > 0, 10000, '#app to render from clean dir');
    assert.ok(childCount > 0, '#app has no rendered children from the clean-dir copy');

    await evaluate(cdp, 'document.querySelector(\'[data-nav="reader"]\').click()');
    await poll(cdp, 'document.body.textContent.includes("The people which sat in darkness saw great light")', (v) => v === true, 10000, 'verse 16 text in clean-dir reader');

    // Core interaction: select verse 17 and confirm the active selection moved.
    await evaluate(cdp, 'document.querySelector(\'.verse[data-verse="17"]\').click()');
    await poll(cdp, '(document.querySelector(".badge-active") || {}).textContent.includes("MATTHEW 4:17")', (v) => v === true, 10000, 'verse 17 selection from clean-dir copy');

    cdp.close();
  } finally {
    proc.kill();
    await new Promise((r) => proc.once('exit', r)).catch(() => {});
    await sleep(200);
    try { fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }); } catch (e) { /* ignore */ }
    try { fs.rmSync(cleanDir, { recursive: true, force: true }); } catch (e) { /* ignore */ }
  }
});
