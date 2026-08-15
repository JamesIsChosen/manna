# ADR-0003 — Default resource tiering

**Status:** OPEN — depends on ADR-0002 and P0.3 results
**Date:** 2026-08-15

## Context

The agreed default resource set (see
[bundled-resources.md](../../04-reference/bundled-resources.md)) totals roughly
20–27 MB once compressed and base64-embedded. R1 requires a single self-contained
release file; R2 requires it to work with no network. Those two requirements plus
this resource list are in tension with startup performance and with iOS Safari's
tolerance for very large documents.

## Options

**A. Bundle everything.** One large file, fully offline from the first byte,
maximally true to R1 and R2. Risk: startup time, memory, and iOS viability.

**B. Two tiers.** A **core** artifact bundles KJV PCE + Strong's dictionaries +
generated concordance + atlas vectors — the resources needed to study Scripture
at all. The large reference works (Matthew Henry Complete, ISBE, Webster's,
Nave's) ship as **separate module files the user imports once**, distributed
alongside the HTML. Keeps the app fast and R1 intact for the application, but the
full experience is no longer literally one file.

**C. Two editions.** Publish `manna.html` (core) and
`manna-full.html` (everything). The user picks. Preserves the one-file
promise for both, at the cost of two build targets.

## Interaction with ADR-0002

Option B only works if imported modules persist reliably — which is precisely the
open question in ADR-0002 and the thing P0.3 exists to measure. If `file://`
storage proves unreliable, B degrades into "re-import every session", which is
unacceptable, and the choice collapses toward A or C.

**These two ADRs must be decided together, after P0.3.**

## What would change our mind

P0.3 and P0.9 measurements: actual storage availability on target browsers, and
actual parse/startup cost of a 25 MB HTML document on a mid-range phone.
