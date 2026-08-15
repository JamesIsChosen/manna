# ADR-0005 — iOS local-HTML execution

**Status:** accepted — execution and persistence resolved 2026-08-15; storage quota OUTSTANDING before P0.9 can close
**Date:** 2026-08-15

## Context

R1 ships Manna as one self-contained HTML file. R3 states the **same release file**
must serve phone portrait, phone landscape, tablet, and desktop. Engineering spec
§99 makes iPhone/iPad execution an explicit Phase-0 gate, and `AGENTS.md` states
mobile is never deferred.

**Probed 2026-08-15, James's iPhone:** opening `manna.html` from Files renders a
static preview. JavaScript does not execute. The app **does** run when opened with
a third-party App Store viewer ("HTML Reader").

This matches the documented behaviour: the Files preview path is Quick Look, a
read-only viewer that does not execute page scripts. Reports differ on whether
"Open in Safari" from the Share sheet is offered for an arbitrary local `.html`;
on the tested device it was not.

**This is not new ground for James.** The coldbox project reached the same wall
and recorded [ADR-0010](../../../coldbox/docs/05-development/adr/0010-ios-local-html-execution.md)
(Accepted, 2026-08-04): Files offered only Quick Look, Safari was unavailable
through Open With or the Share sheet, and coldbox withdrew its iOS
local-execution claim. That ADR states plainly:

> Quick Look is a preview mechanism and is not a Coldbox execution pass. A
> third-party viewer, localhost/LAN server, renamed file, converted file, or
> wrapped application is likewise not equivalent by default.

## Why Manna's calculus differs from coldbox's

Coldbox rejected third-party viewers because it handles seed phrases: a new
trusted component could silently enter a security model built on opaque-origin
isolation, CSP, and a cold realm. Manna carries no secrets, so the *security*
objection is far weaker.

But Manna has a problem coldbox does not: **it must persist a growing library.**
R6 makes personal study data the user's and requires it be exportable, and
[ADR-0002](0002-imported-module-storage.md) assumes IndexedDB works at the
execution origin.

**A third-party viewer's storage behaviour is unknown and probably worse.** Each
viewer supplies its own WebView, its own origin semantics, and its own storage
lifetime. If HTML Reader does not persist IndexedDB across launches, then on iOS:

- imported modules vanish between sessions;
- notes, highlights, and sermon work vanish between sessions;
- R6 is violated on that platform, silently, in the way most costly to a user.

**Nothing may be claimed about iOS persistence until it is probed on-device.**
That probe is the next action, not this decision.

## Probe results — 2026-08-15, recorded

A single-file storage probe was run on the device, opened through the third-party
viewer, offline.

| Measure | Result |
|---|---|
| Device / OS | iPhone, **iOS 18.7** |
| User agent | `AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148` |
| Viewer | HTML Reader (App Store) |
| Script execution | **YES** |
| Origin | `file://` — a real file origin, not opaque per-file |
| localStorage | **YES**, writable |
| **IndexedDB** | **YES**, writable |
| Persistence across full app close | **YES** — survived to visit 3 |

**The user agent is the significant part.** `AppleWebKit/605.1.15 … Mobile/15E148`
is the standard WKWebView string: the viewer is hosting **Apple's own WebKit**,
not a bundled third-party engine. Coldbox's ADR-0010 treated a third-party viewer
as an unknown new trusted component; on this evidence the rendering and storage
engine is the same one Safari uses, in a different container.

That materially weakens the "not equivalent by default" objection **for Manna's
purposes**. It does not weaken it for coldbox, whose concern was a security
boundary rather than a storage guarantee.

**What this does NOT establish, and must not be claimed:**

- **Quota.** IndexedDB being writable is not evidence it will hold a 25 MB
  library. Untested.
- **Eviction over time.** Three opens in close succession is not days of storage
  pressure. iOS evicts aggressively from non-installed contexts.
- **The default path.** Files still Quick Looks the artifact. A user without the
  named viewer gets a static preview, not the app.
- **Viewer stability.** An App Store app can change behaviour or be withdrawn.
  The project would not control it.

## Options

**A. Follow coldbox — withdraw the iOS local-execution claim.** iOS is recorded
as `BLOCKED` or `UNSUPPORTED` with exact device and iOS build. Honest, consistent
with the sibling project, and preserves R1/R2/R4 unchanged. Cost: R3's "same file
everywhere" is narrowed, and iPhone users have no supported path.

**B. Support a named third-party viewer as a documented iOS path.** Requires
naming the app, pinning a tested version, probing its storage persistence, and
disclosing it as a dependency the project does not control — an App Store app can
change or vanish. Only tenable if persistence probes pass.

**C. Ship an installable PWA for iOS.** Home-screen install gives a real WebKit
origin with reliable storage. Cost: requires hosting for the install, which
pressures R4 (no server) at acquisition time even though runtime stays offline.
A deliberate, documented exception rather than a quiet one.

**D. Native wrapper app.** Reliable storage and a real execution context, at the
cost of an App Store presence, review, and a second artifact — the furthest from
the one-file premise.

## Recommendation, revised on the probe results

**B, conditional on a quota probe.** iOS is recorded as **SUPPORTED VIA NAMED
VIEWER**, not BLOCKED — execution and persistence are demonstrated on Apple's own
WebKit at a real `file://` origin.

The remaining question is not capability but **capacity**: whether IndexedDB at a
`file://` origin on iOS will hold a real library. If the quota probe shows a
ceiling below the bundled resource set, iOS falls back to Scripture-display-only
and ADR-0003's tiering needs an iOS-specific answer.

Manna and coldbox reaching different conclusions is **not** an inconsistency here.
Coldbox rejected the viewer because an unknown component must not enter a
security model protecting seed phrases. Manna's question was whether a library
survives a restart, and it does, on the system engine. Different question,
different evidence, different answer — and both are recorded.

## Consequences

- Roadmap criterion 13 must be restated: iPhone Safari is not a pass/fail row but
  a **status** row recording PASS, BLOCKED, or UNSUPPORTED with device and build.
- R3's wording needs narrowing, or it claims a capability the project does not have.
- ADR-0002 and ADR-0003 inherit an iOS-shaped hole: their storage assumptions are
  unverified on the one platform where execution itself is in doubt.
- P0.9 cannot close on inference. It needs a recorded on-device status.

## What would change our mind

A reproducible Files-to-Safari path for an arbitrary local `.html`; or a
persistence probe showing a named viewer reliably retains IndexedDB across
launches; or a deliberate decision to adopt C or D with its trade-offs accepted
in a superseding ADR.

## Required evidence for any future iOS claim

Exact device model, exact iOS version and build, the Files location and how the
file got there, the launch path used, whether scripts executed, and — critically
— whether data written on one launch survives the next.
