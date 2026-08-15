'use strict';
/* The selection probe — the canonical acceptance scenario run against the
 * real SelectionService + StudyState, wired exactly as the browser wires them
 * (boot.js: createService -> createState(service) -> dom.boot).
 *
 * Two roles:
 *   1. Module: exports the shared harness (makeHarness/runScenario + context
 *      builders) used by test/helpers.js and the selection/render tests.
 *   2. Fail-closed CLI (criterion 11): `node scripts/probe-selection.js` runs a
 *      clean scenario and exits 0; `--sabotage <mode>` injects a deliberate
 *      break and the probe MUST exit non-zero when it detects that break — the
 *      failure tests assert that non-zero exit, mirroring lint.js --artifact.
 */
require('../src/fixtures/verses.js');
require('../src/fixtures/commentary.js');
require('../src/fixtures/crossrefs.js');
require('../src/fixtures/words.js');
require('../src/fixtures/places.js');
require('../src/selection/selection-service.js');
require('../src/app/state.js');
require('../src/app/render.js');

const Manna = global.Manna;
const SEL = Manna.selection;
const APP = Manna.app;

function ref(n) { return { book: 'MAT', chapter: 4, verseStart: n, verseEnd: n }; }
function verseCtx(n) {
  return SEL.context('verse', { reference: ref(n), sourceModule: 'PCE-KJV' });
}
function wordCtx(strongsId, n) {
  return SEL.context('word', { reference: ref(n), strongsId: strongsId, lemmaId: 'φῶς', selectedText: 'light' });
}
function placeCtx(placeId, n) {
  return SEL.context('place', { reference: ref(n), placeId: placeId, selectedText: 'Capernaum' });
}

/* sabotage: 'commentary-never-registered' breaks propagation for one pane
 * (as if its subscription were never wired); 'no-pin' breaks the pin
 * implementation so a "pinned" pane keeps following. Both must make the
 * probe fail — that is the fail-closed demonstration. */
function makeHarness(sabotage) {
  const service = SEL.createService();
  const state = APP.createState(service);
  const received = {};
  Object.keys(APP.render.panes).forEach((id) => { received[id] = []; });
  Object.keys(APP.render.panes).forEach((id) => {
    if (sabotage === 'commentary-never-registered' && id === 'commentary') return;
    state.registerPane(APP.render.panes[id], (view) => received[id].push(view));
  });
  if (sabotage === 'no-pin') state.pin = function () {};
  return { service: service, state: state, received: received };
}

function lastView(received, id) {
  const list = received[id];
  return list.length ? list[list.length - 1] : null;
}

function shownVerse(view) {
  return view && view.context && view.context.reference ? view.context.reference.verseStart : null;
}

/* The canonical scenario, mirroring the acceptance criteria:
 *   verse 16 -> pin commentary -> verse 17 (xref follows, commentary held)
 *   -> word selection (context preserved) -> place selection -> unpin
 *   -> verse 15 (commentary resumes following).
 * Returns an array of problems; empty means every check passed. */
function runScenario(state, received) {
  const problems = [];
  const last = (id) => lastView(received, id);

  state.emit(verseCtx(16));
  if (shownVerse(last('commentary')) !== 16) problems.push('commentary did not follow verse 16');
  if (shownVerse(last('xref')) !== 16) problems.push('xref did not follow verse 16');
  if (last('word') !== null) problems.push('word pane followed a verse selection');
  if (last('atlas') !== null) problems.push('atlas pane followed a verse selection');

  state.pin('commentary');
  if (!state.isPinned('commentary')) problems.push('pin did not stick');
  var commentView = last('commentary');
  if (!commentView) problems.push('commentary has no view to pin');
  else if (commentView.pinned !== true) problems.push('pane view does not report pinned');

  state.emit(verseCtx(17));
  if (shownVerse(last('xref')) !== 17) problems.push('xref did not follow verse 17');
  if (shownVerse(last('commentary')) !== 16) problems.push('pinned commentary followed verse 17');
  var pinnedView = state.paneView('commentary');
  if (!pinnedView) problems.push('pinned commentary has no view');
  else if (!pinnedView.stale) problems.push('pinned commentary is not marked stale');

  state.emit(wordCtx('G5457', 16));
  if (!last('word') || last('word').context.strongsId !== 'G5457') problems.push('word pane did not follow the word selection');
  if (last('word').context.reference.verseStart !== 16) problems.push('word selection lost its containing verse context');
  if (shownVerse(last('commentary')) !== 16) problems.push('pinned commentary moved on word selection');

  state.emit(placeCtx('capernaum', 13));
  if (!last('atlas') || last('atlas').context.placeId !== 'capernaum') problems.push('atlas did not follow the place selection');
  if (last('atlas').context.reference.verseStart !== 13) problems.push('place selection lost its containing verse context');

  state.unpin('commentary');
  if (state.isPinned('commentary')) problems.push('unpin did not release the pin');
  state.emit(verseCtx(15));
  if (shownVerse(last('commentary')) !== 15) problems.push('commentary did not resume following after unpin');

  return problems;
}

module.exports = {
  Manna: Manna,
  SEL: SEL,
  APP: APP,
  ref: ref,
  verseCtx: verseCtx,
  wordCtx: wordCtx,
  placeCtx: placeCtx,
  makeHarness: makeHarness,
  lastView: lastView,
  runScenario: runScenario
};

if (require.main === module) {
  const args = process.argv.slice(2);
  const idx = args.indexOf('--sabotage');
  const sabotage = idx !== -1 ? args[idx + 1] : null;
  const h = makeHarness(sabotage || undefined);
  const problems = runScenario(h.state, h.received);

  if (problems.length === 0) {
    if (sabotage) {
      console.error('probe-selection: FAIL — sabotage "' + sabotage + '" was not detected');
      process.exit(1);
    }
    console.log('probe-selection: ok');
    process.exit(0);
  }
  problems.forEach((p) => console.error('probe-selection: ' + p));
  process.exit(1);
}
