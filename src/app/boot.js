/* Boot — wires the SelectionService, the StudyState, and the DOM layer. */
(function (g) {
  'use strict';
  g.Manna.app.boot = function (rootEl) {
    var service = g.Manna.selection.createService();
    var state = g.Manna.app.createState(service);
    g.Manna.app.dom.boot(rootEl, { service: service, state: state });
  };

  // ---- entry point ----
  // boot.js is the bundle's final module. Invoke boot once the DOM is ready so
  // opening dist/manna.html actually renders the Study Desk. Without this
  // single production call every module is defined but the page stays empty.
  // The earlier Node-only suite could not see this because it never ran a
  // browser; the artifact silently failed to render.
  if (typeof document !== 'undefined') {
    function start() {
      var root = document.getElementById('app');
      if (root) g.Manna.app.boot(root);
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', start);
    } else {
      start();
    }
  }
})(typeof window !== 'undefined' ? window : globalThis);
