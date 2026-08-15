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

## Recommendation pending decision

B as the product model, A as the runtime mechanism, D as the mandatory safety
net. Personal study data (notes, sermons, highlights) must **never** live only
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
