# Bundled resources

The default resources Codex Bible ships with, their provenance, and their
licensing status.

**Every bundled resource must have a verified redistribution right** (product
spec §4.1, engineering spec §90). "Freely available on the internet" is not a
license. Two entries below are flagged because a common assumption about them is
wrong.

Status values: `VERIFIED` (right to redistribute under AGPL confirmed, source
pinned, checksum recorded), `NEEDS-VERIFICATION`, `BLOCKED`.

## Scripture

| Resource | Status | Notes |
|---|---|---|
| KJV — Pure Cambridge Edition | NEEDS-VERIFICATION | Default translation. Candidate source on hand: `PCE-KJV-BIBLE.md`, 4.64 MB, tab-separated `Book Chapter:Verse<TAB>text`, credited to BibleProtector.com. Needs a pinned version and SHA-256. |

### ⚠ The KJV is not public domain everywhere

The KJV is public domain in the United States and most of the world, but **in the
United Kingdom it is under perpetual Crown copyright**, exercised through Letters
Patent and administered by Cambridge University Press. Codex Bible is distributed
globally under AGPL, so this must be checked rather than assumed.

Separately, the *Pure Cambridge Edition* as published by BibleProtector is an
editorial position on which printing is definitive. The underlying text's status
and that publisher's own terms are two different questions. Both need answering
before this is marked VERIFIED.

**This is a decision for James, possibly with legal input. It is not an
engineering judgement call.**

## Original-language texts

The KJV was not translated from a single source. Getting this right matters,
because "the original text the KJV was translated from" resolves differently for
each Testament.

| Testament | KJV source | Public-domain candidate | Status |
|---|---|---|---|
| New Testament | Textus Receptus (Beza 1598, Stephanus 1550) | **Scrivener's 1894 TR** — reverse-engineered specifically to reflect the Greek underlying the KJV, which makes it the closest available match | NEEDS-VERIFICATION |
| Old Testament | Masoretic Text, Bomberg/Ben Chayyim 1524–25 | **Westminster Leningrad Codex** — public domain, but based on the Ben Asher/Leningrad tradition, **not** Ben Chayyim. Readings differ in places | NEEDS-VERIFICATION |

The OT mismatch is real and should be disclosed in the UI rather than papered
over. Presenting the WLC as "what the KJV was translated from" would be
inaccurate, and inaccuracy about the text is exactly what R5 exists to prevent.

## Reference works

| Resource | Author / date | PD basis | Est. raw size | Status |
|---|---|---|---|---|
| Strong's Hebrew & Greek dictionaries | Strong, 1890 | Author d. 1894 | ~4–5 MB | NEEDS-VERIFICATION |
| Strong's Exhaustive Concordance | Strong, 1890 | Author d. 1894 | **derive, do not bundle** | see below |
| Matthew Henry's Complete Commentary | Henry, d. 1714 | Long PD | ~15–20 MB | NEEDS-VERIFICATION |
| International Standard Bible Encyclopedia | 1915 | Pre-1929 US publication | ~12–15 MB | NEEDS-VERIFICATION |
| Webster's Dictionary | 1828 | Pre-1929 US publication | ~7–10 MB | NEEDS-VERIFICATION |
| Nave's Topical Bible | Nave, 1897 | Pre-1929 US publication | ~3–4 MB | NEEDS-VERIFICATION |
| KJV Dictionary | — | Needs a specific edition named | ~1–2 MB | NEEDS-VERIFICATION |

**Matthew Henry — which edition?** The *Complete* (unabridged, six volumes) is
roughly an order of magnitude larger than the *Concise*. This single choice moves
the bundle size more than any other on this list.

**The concordance should not be bundled.** Strong's Exhaustive Concordance is an
index over the KJV keyed to Strong's numbers. Given the KJV text and Strong's
tagging, it is *derived data* and can be generated at first run — engineering
spec §113 already states this principle. Bundling it duplicates megabytes the
app can compute.

## Atlas

Bundling scanned raster maps is the wrong shape for a single-file app.
Engineering spec §48 already prefers offline vector/SVG. Recommended build:

| Layer | Source | License | Notes |
|---|---|---|---|
| Base geography | **Natural Earth** | Public domain | Vector coastlines, rivers, terrain. Purpose-built for redistribution |
| Biblical place coordinates | **OpenBible.info Bible geocoding** | CC-BY | ~1,200 places with coordinates and verse references |
| Historical period maps | Public-domain atlases (e.g. G. A. Smith 1915; Shepherd 1923) | PD by date | For period overlays: Exodus, Divided Kingdom, Paul's journeys |

### ⚠ "Free for public use" is not a license

Several popular Bible-map sites offer maps "free for personal and church use".
That permission does **not** grant redistribution inside an AGPL-licensed
application. Any map bundled must be public domain or carry an explicit
redistribution-permitting license. CC-BY requires attribution, which the license
registry must carry.

## The size problem

Rough arithmetic, and it is the reason this file exists:

| Stage | Estimate |
|---|---|
| Raw text of everything above | ~50–60 MB |
| Compressed | ~15–20 MB |
| Base64-embedded in HTML (+~33%) | **~20–27 MB single file** |

A 20–27 MB HTML document is borderline on desktop and genuinely risky on iOS
Safari — the exact environment engineering spec §99 already makes a Phase-0 gate.
It also collides directly with [ADR-0002](../05-development/adr/0002-imported-module-storage.md).

This is not an argument against the resource list. It is an argument that
"bundled by default" and "present on first run" may need to be different things —
see ADR-0003.

## Verification requirement

Before any resource moves to VERIFIED it needs: a pinned upstream source URL, a
version or edition identifier, a SHA-256, a license statement, and an entry in
the in-app provenance panel. Recorded in
[../05-development/dependencies.md](../05-development/dependencies.md).
