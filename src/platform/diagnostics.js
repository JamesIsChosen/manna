/* Diagnostics platform layer — build metadata and runtime capability probe.
 *
 * MANNA_META is injected by the build (see scripts/build.js) and carries only
 * deterministic fields: app version, build ID (a hash of the build inputs),
 * and the artifact SHA-256 computed over the artifact with its digest field
 * blanked (a self-referential digest is impossible — the file cannot contain
 * its own SHA-256 as the value SHA-256 maps it to).
 *
 * The storage probe is the capability display named in the packet (§28,
 * §29's startup health check); P0.1 persists nothing. */
(function (g) {
  'use strict';
  var PLAT = (g.Manna = g.Manna || {}).platform = g.Manna.platform || {};

  PLAT.meta = function () {
    var m = typeof MANNA_META !== 'undefined' ? MANNA_META : null;
    return m || { appVersion: 'DEV', buildId: 'DEV', sha256Embedded: 'not built' };
  };

  PLAT.capabilities = function () {
    var storage = 'Limited storage mode';
    try {
      localStorage.setItem('manna.capability-probe', '1');
      localStorage.removeItem('manna.capability-probe');
      storage = 'Persistent local storage available';
    } catch (e) { /* unavailable — limited mode */ }
    return {
      online: typeof navigator !== 'undefined' ? navigator.onLine : null,
      touch: typeof matchMedia !== 'undefined' && matchMedia('(pointer: coarse)').matches,
      reducedMotion: typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches,
      storage: storage,
      protocol: typeof location !== 'undefined' ? location.protocol : null,
      viewport: { w: typeof innerWidth !== 'undefined' ? innerWidth : null, h: typeof innerHeight !== 'undefined' ? innerHeight : null }
    };
  };
})(typeof window !== 'undefined' ? window : globalThis);
