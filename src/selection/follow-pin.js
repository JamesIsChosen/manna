/* Follow/pin state for one study pane (design §9–§11).
 *
 * FOLLOW is the default: the pane renders every applicable selection.
 * PINNING freezes the pane at the context held when pinned; the pane records
 * the incoming current selection (for its stale bar) but renders nothing new.
 * A pinned pane must never silently look live — the visible pinned treatment
 * lives in the pane component.
 */
(function (M) {
  'use strict';

  function FollowPin() {
    this._pinned = false;
    this._held = null;
  }

  FollowPin.prototype.isPinned = function () { return this._pinned; };

  FollowPin.prototype.getHeld = function () { return this._held; };

  FollowPin.prototype.pin = function (context) {
    this._pinned = true;
    this._held = context;
  };

  FollowPin.prototype.unpin = function () {
    this._pinned = false;
    this._held = null;
  };

  // A pinned pane renders nothing new. When unpinned it follows again.
  FollowPin.prototype.shouldRender = function () { return !this._pinned; };

  M.FollowPin = FollowPin;
})(globalThis.Manna = globalThis.Manna || {});
