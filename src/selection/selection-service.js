/* The central SelectionService (spec part I, §17).
 *
 * One service owns every selection. Panes subscribe; each pane decides whether
 * a selection applies to it. No pane ever manipulates another pane's DOM —
 * the Bible pane emits through this service and interested panes update.
 *
 * Required demonstrated event types for P0.1: verse, word, place (§35). */
(function (g) {
  'use strict';
  var SEL = (g.Manna = g.Manna || {}).selection = g.Manna.selection || {};

  SEL.createService = function () {
    var subscribers = [];
    return {
      subscribe: function (fn) {
        subscribers.push(fn);
        return function () {
          var i = subscribers.indexOf(fn);
          if (i !== -1) subscribers.splice(i, 1);
        };
      },
      emit: function (context) {
        // Copy before dispatch so a subscriber unsubscribing mid-emit cannot
        // corrupt the loop.
        subscribers.slice().forEach(function (fn) { fn(context); });
      }
    };
  };

  // Build a SelectionContext with the full field shape (§2/§18); fields that
  // do not apply to a selection stay null. The containing reference is kept as
  // contextual metadata for specialized selections (§14).
  SEL.context = function (type, fields) {
    var ctx = {
      type: type,
      reference: null,
      selectedText: '',
      tokenId: null,
      strongsId: null,
      lemmaId: null,
      personId: null,
      placeId: null,
      sourceModule: 'PCE-KJV',
      timestamp: Date.now()
    };
    for (var k in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, k)) ctx[k] = fields[k];
    }
    return ctx;
  };
})(typeof window !== 'undefined' ? window : globalThis);
