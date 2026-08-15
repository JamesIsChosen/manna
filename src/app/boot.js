/* Boot — wires the SelectionService, the StudyState, and the DOM layer. */
(function (g) {
  'use strict';
  g.Manna.app.boot = function (rootEl) {
    var service = g.Manna.selection.createService();
    var state = g.Manna.app.createState(service);
    g.Manna.app.dom.boot(rootEl, { service: service, state: state });
  };
})(typeof window !== 'undefined' ? window : globalThis);
