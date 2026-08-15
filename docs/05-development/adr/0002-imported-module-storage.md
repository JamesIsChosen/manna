# ADR-0002 — Where imported modules live

**Status:** OPEN — blocks P0.3, must be decided before P0.6
**Date:** 2026-08-15

## Context

Codex Bible ships as one self-contained HTML file (R1) and absorbs Bible
modules, commentaries, dictionaries, and maps from other free software (R7).

These two facts create a question the specification does not currently answer
outright: **when a user imports a 200 MB commentary, where does it physically go?**

The intuitive answer — "into the HTML file" — is not achievable at runtime.
**A web page cannot rewrite the file it was loaded from.** No browser permits a
document to modify its own source on disk; there is no API for it and it would
be a severe security hole if there were. So "self-contained" describes how the
*application* is delivered, not where the *user's library* accumulates.

The existing spec implies the answer without stating it: §27 names IndexedDB as
the primary StorageProvider, §29 requires a startup storage health check, and
§88 makes backup mandatory. But it never explicitly states that imported modules
do not become part of the artifact, and never records the tradeoff.

## Options

**A. IndexedDB only.** Modules live in browser storage keyed to the page origin.
Simple, already the spec's implied answer. Risk: on a `file://` origin, storage
behaviour varies sharply by browser and may be unavailable, opaque, or evictable.
Moving or re-downloading the HTML file may orphan the library.

**B. IndexedDB + regenerated artifact.** As A, plus an explicit
`EXPORT AS NEW HTML` action: the app builds a **new** self-contained HTML with
the current library embedded and downloads it. This is the closest achievable
form of "the file absorbs modules" — the absorption is a deliberate export step,
not a runtime mutation. Cost: base64 inflates payloads ~33%, browsers parse very
large HTML documents poorly, and every subsequent import means regenerating and
re-saving a large file.

**C. IndexedDB + File System Access API.** Where available, the app writes the
library to a real folder the user picks. Desktop Chromium only; absent on
Firefox and Safari, which are exactly the environments where `file://` storage is
most doubtful.

**D. Library pack file.** Modules export to a single `.codexlibrary` container
the user re-imports. Portable and browser-independent, but reload is manual.

**E. Two files: HTML + auto-loading library pack.** `codex-bible.html` plus
`codex-library.js` beside it. The app is two files; the library pack grows as the
user imports modules. Proposed by James, 2026-08-15.

## Probe results — 2026-08-15, headless Chromium, real `file://` origin

Option E's viability turns on whether a local page can read a sibling file
without the user selecting it every session. Measured rather than assumed:

| Mechanism | Result |
|---|---|
| `<script src="library.js">` sibling classic script | **LOADED** |
| `fetch("library.json")` sibling | **BLOCKED** — "Failed to fetch" |
| IndexedDB on a `file://` origin | **OK, write + read** |

Two consequences:

1. **A library pack must be a classic JavaScript file, not a data file.**
   `codex-library.js` assigning `window.__CODEX_LIBRARY__ = {...}` auto-loads.
   The same content as `.json`, `.codexlibrary`, or any opaque extension read via
   `fetch` does not — `file://` is an opaque origin and CORS blocks it. This is
   the single design constraint that makes or breaks option E.
2. **IndexedDB worked on `file://` here**, which is better than feared and makes
   option A more viable than the spec's caution implies.

**Scope of this evidence.** Headless Chromium in a Linux container. It is *not*
desktop Chrome, Firefox, desktop Safari, or iOS Safari, and headless can differ
from headed. iOS Safari remains the unmeasured risk and the reason P0.9 exists.
Treat this as one data point that narrows the design space, not as the answer.

## ⚠ Option E conflicts with R7

R7 states imported modules must never gain executable capability. A library pack
that is a `.js` file **is executable by definition** — the browser runs it before
any application code inspects it. A hostile `codex-library.js` placed beside the
HTML executes as application code.

This is survivable but must be designed for, not waved through:

- The pack is **written by the app**, never authored by the user. Untrusted
  imports are parsed as data, validated, then re-serialized by the app into the pack.
- The pack must contain **only a single data assignment** — no logic. The app
  validates its shape on load and refuses anything unexpected.
- Integrity: record a hash of the pack inside app storage, and warn loudly when
  the pack changes outside the app.
- The pack is still a trust boundary. It belongs in the threat model.

## Recommendation pending decision

E as the product model (two files, auto-loading pack), A as the runtime
mechanism (IndexedDB, now measured to work on `file://` in at least one target),
B as the portability escape hatch, D superseded by E. Personal study data (notes, sermons, highlights) must **never** live only
inside a regenerated HTML — it changes constantly, and baking it into a
downloaded artifact is a data-loss trap. It follows the backup path in §30–32.

## Consequences either way

The `file://` storage question is the single largest risk to the product concept,
and the roadmap already front-loads it correctly: **P0.3 (Persistent Storage
Prototype)** and **P0.9 (Mobile Platform Gate)** exist to answer it empirically.

**Nothing here should be settled by reasoning.** Per engineering spec §98, the
architecture is adjusted from observed behaviour, not assumptions. If P0.3 shows
that `file://` IndexedDB is unusable on target browsers, the distribution model
itself — not just this ADR — needs revisiting.

## What would change our mind

P0.3 results. This ADR is written to be replaced by evidence.
