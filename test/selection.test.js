'use strict';
/* SelectionService + StudyState semantics: event propagation, capability
 * matching, context preservation, pin/follow. Runs the real src/ modules. */
const { test } = require('node:test');
const assert = require('node:assert');
const H = require('./helpers.js');

const SEL = H.SEL;
const APP = H.APP;

test('service: subscribers receive every emitted context', () => {
  const service = SEL.createService();
  const got = [];
  service.subscribe((ctx) => got.push(ctx));
  const ctx = H.verseCtx(16);
  service.emit(ctx);
  assert.strictEqual(got.length, 1);
  assert.strictEqual(got[0], ctx);
});

test('state: service.emit drives the same dispatch as state.emit (§17)', () => {
  // The production path: dom.js emits through the central SelectionService,
  // and createState(service) must be subscribed so that emission reaches the
  // panes. Before this wiring existed, service.emit() left current null and
  // no pane ever updated.
  const service = SEL.createService();
  const state = APP.createState(service);
  const received = {};
  Object.keys(APP.render.panes).forEach((id) => { received[id] = []; });
  Object.keys(APP.render.panes).forEach((id) => {
    state.registerPane(APP.render.panes[id], (view) => received[id].push(view));
  });
  service.emit(H.verseCtx(16));
  assert.strictEqual(state.currentContext().reference.verseStart, 16, 'state did not track a service emission');
  assert.strictEqual(H.lastView(received, 'commentary').context.reference.verseStart, 16, 'commentary did not receive the service emission');
  assert.strictEqual(H.lastView(received, 'xref').context.reference.verseStart, 16);
  assert.strictEqual(H.lastView(received, 'word'), null);
});

test('service: unsubscribe stops delivery', () => {
  const service = SEL.createService();
  const got = [];
  const off = service.subscribe((ctx) => got.push(ctx));
  off();
  service.emit(H.verseCtx(16));
  assert.strictEqual(got.length, 0);
});

test('service: context factory fills the full §2 shape', () => {
  const ctx = SEL.context('word', { strongsId: 'G5457', reference: H.ref(16) });
  assert.strictEqual(ctx.type, 'word');
  assert.strictEqual(ctx.strongsId, 'G5457');
  assert.strictEqual(ctx.reference.book, 'MAT');
  assert.strictEqual(ctx.lemmaId, null);
  assert.strictEqual(ctx.placeId, null);
  assert.strictEqual(ctx.personId, null);
  assert.strictEqual(ctx.sourceModule, 'PCE-KJV');
  assert.strictEqual(typeof ctx.timestamp, 'number');
  assert.strictEqual(ctx.selectedText, '');
});

test('state: verse selection updates only the panes that accept it (§16)', () => {
  const h = H.makeHarness();
  h.state.emit(H.verseCtx(16));
  assert.strictEqual(H.lastView(h.received, 'commentary').context.type, 'verse');
  assert.strictEqual(H.lastView(h.received, 'xref').context.type, 'verse');
  assert.strictEqual(H.lastView(h.received, 'word'), null);
  assert.strictEqual(H.lastView(h.received, 'atlas'), null);
});

test('state: word selection preserves the containing verse as context (§14)', () => {
  const h = H.makeHarness();
  h.state.emit(H.wordCtx('G5457', 16));
  const w = H.lastView(h.received, 'word');
  assert.strictEqual(w.context.strongsId, 'G5457');
  assert.strictEqual(w.context.reference.verseStart, 16);
  // verse-accepting panes keep their previous content rather than clearing
  assert.strictEqual(H.lastView(h.received, 'commentary'), null);
});

test('state: place selection preserves the containing verse as context (§14)', () => {
  const h = H.makeHarness();
  h.state.emit(H.placeCtx('capernaum', 13));
  const a = H.lastView(h.received, 'atlas');
  assert.strictEqual(a.context.placeId, 'capernaum');
  assert.strictEqual(a.context.reference.verseStart, 13);
});

test('state: pin freezes a pane, stale is visible, unpin resumes (§39)', () => {
  const h = H.makeHarness();
  const problems = H.runScenario(h.state, h.received);
  assert.deepStrictEqual(problems, []);
});

test('state: an identical re-selection does not re-notify a pane (§22)', () => {
  const h = H.makeHarness();
  h.state.emit(H.verseCtx(16));
  const calls = h.received.commentary.length;
  h.state.emit(H.verseCtx(16));
  assert.strictEqual(h.received.commentary.length, calls, 'no redundant pane updates');
  assert.strictEqual(h.received.xref.length, calls);
});

test('state: changing only the stale flag still notifies the pinned pane', () => {
  const h = H.makeHarness();
  h.state.emit(H.verseCtx(16));
  h.state.pin('commentary');
  const calls = h.received.commentary.length;
  h.state.emit(H.verseCtx(17));
  assert.strictEqual(h.received.commentary.length, calls + 1, 'pinned pane got a stale-flag view');
  assert.strictEqual(h.received.commentary[calls].stale, true);
});

test('state: does not mutate emitted contexts', () => {
  const h = H.makeHarness();
  const ctx = H.verseCtx(16);
  const snapshot = JSON.stringify(ctx);
  h.state.emit(ctx);
  h.state.pin('commentary');
  h.state.emit(H.verseCtx(17));
  h.state.unpin('commentary');
  assert.strictEqual(JSON.stringify(ctx), snapshot);
});

test('state: onChange observers are notified on emit, pin, and unpin', () => {
  const h = H.makeHarness();
  let calls = 0;
  h.state.onChange(() => calls++);
  h.state.emit(H.verseCtx(16));
  h.state.pin('commentary');
  h.state.unpin('commentary');
  assert.strictEqual(calls, 3);
});

test('state: pin snapshots the context the pane is actually showing', () => {
  const h = H.makeHarness();
  h.state.emit(H.verseCtx(16));
  h.state.emit(H.verseCtx(17));
  h.state.pin('commentary');
  assert.strictEqual(h.state.paneView('commentary').context.reference.verseStart, 17);
});

test('panes: every pane declares the capability types it understands', () => {
  assert.deepStrictEqual(APP.render.panes.commentary.accepts, ['verse', 'passage']);
  assert.deepStrictEqual(APP.render.panes.xref.accepts, ['verse', 'passage']);
  assert.deepStrictEqual(APP.render.panes.word.accepts, ['word', 'strongs']);
  assert.deepStrictEqual(APP.render.panes.atlas.accepts, ['place']);
});
