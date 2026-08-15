/* StudyState — the study desk's single source of truth.
 *
 * Holds the current SelectionContext, the per-pane pin table, and each pane's
 * displayed view (context + pinned + stale). On every selection it dispatches
 * to the panes that accept that selection type and tells each pane only when
 * its view actually changed — no pane tree rebuilds without cause (§22).
 *
 * Pin semantics (§9-§11): a pinned pane stops following new selections and
 * holds the context it displayed when pinned; it never silently stops
 * following — `stale` reports that the current selection has moved on.
 *
 * This module is DOM-free and runs identically in the browser and in Node
 * tests. */
(function (g) {
  'use strict';
  var APP = (g.Manna = g.Manna || {}).app = g.Manna.app || {};

  function sameContext(a, b) {
    if (a === b) return true;
    if (!a || !b) return false;
    if (a.type !== b.type) return false;
    if (a.strongsId !== b.strongsId || a.placeId !== b.placeId) return false;
    var ra = a.reference, rb = b.reference;
    if (!ra || !rb) return ra === rb;
    return ra.book === rb.book && ra.chapter === rb.chapter &&
      ra.verseStart === rb.verseStart && ra.verseEnd === rb.verseEnd;
  }

  function sameView(a, b) {
    return sameContext(a.context, b.context) && a.pinned === b.pinned && a.stale === b.stale;
  }

  APP.createState = function (service) {
    var current = null;      // latest SelectionContext
    var panes = {};          // paneId -> { accepts: [type, ...] }
    var pins = {};           // paneId -> context snapshot, present = pinned
    var views = {};          // paneId -> { context, pinned, stale }
    var listeners = {};      // paneId -> fn(view)
    var changeListeners = [];// chrome-level observers (badge, footer, ...)
    var metrics = { lastLatencyMs: null };

    function isStale(paneId) {
      if (pins[paneId] === undefined || !current) return false;
      return !sameContext(pins[paneId], current);
    }

    function effectiveContext(paneId) {
      if (pins[paneId] !== undefined) return pins[paneId];
      var pane = panes[paneId];
      if (!pane || !current) return views[paneId] ? views[paneId].context : null;
      if (pane.accepts.indexOf(current.type) === -1) return views[paneId] ? views[paneId].context : null;
      return current;
    }

    function viewOf(paneId) {
      return {
        context: effectiveContext(paneId),
        pinned: pins[paneId] !== undefined,
        stale: isStale(paneId)
      };
    }

    function push(paneId) {
      var next = viewOf(paneId);
      var prev = views[paneId];
      if (prev && sameView(prev, next)) return;
      views[paneId] = next;
      if (listeners[paneId]) listeners[paneId](next);
    }

    function dispatch() {
      var started = Date.now();
      for (var id in panes) push(id);
      metrics.lastLatencyMs = Date.now() - started;
      changeListeners.forEach(function (fn) { fn(); });
    }

    function emit(context) {
      current = context;
      dispatch();
    }

    // The DOM layer emits through the central SelectionService (§17); the
    // state must be a subscriber so service.emit(ctx) drives the exact same
    // dispatch as state.emit(ctx) — otherwise the production path never
    // updates a pane.
    if (service && typeof service.subscribe === 'function') service.subscribe(emit);

    return {
      metrics: metrics,
      currentContext: function () { return current; },
      paneView: function (paneId) { return views[paneId] || null; },
      pinnedPanes: function () { return Object.keys(pins); },

      registerPane: function (def, onUpdate) {
        panes[def.id] = def;
        listeners[def.id] = onUpdate;
        // Store the empty view (the DOM layer reads it for the initial paint)
        // but do not notify: panes only hear about selections they accept,
        // never about a null context (§16).
        views[def.id] = viewOf(def.id);
      },

      isPinned: function (paneId) { return pins[paneId] !== undefined; },

      onChange: function (fn) { changeListeners.push(fn); },

      emit: function (context) {
        current = context;
        dispatch();
      },

      pin: function (paneId) {
        var shown = views[paneId] ? views[paneId].context : null;
        pins[paneId] = shown === undefined ? null : shown;
        push(paneId);
        changeListeners.forEach(function (fn) { fn(); });
      },

      unpin: function (paneId) {
        delete pins[paneId];
        push(paneId);
        changeListeners.forEach(function (fn) { fn(); });
      }
    };
  };
})(typeof window !== 'undefined' ? window : globalThis);
