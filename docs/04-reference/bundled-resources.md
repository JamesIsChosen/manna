# Bundled resources

The default resources Manna ships with, their provenance, and their
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
| KJV — Pure Cambridge Edition | NEEDS-VERIFICATION | **The** bundled translation — no other is shipped by default. Candidate source on hand: `PCE-KJV-BIBLE.md`, 4.64 MB, tab-separated `Book Chapter:Verse<TAB>text`, credited to BibleProtector.com. Needs a pinned version and SHA-256. |

### ⚠ The KJV is not public domain everywhere

The KJV is public domain in the United States and most of the world, but **in the
United Kingdom it is under perpetual Crown copyright**, exercised through Letters
Patent and administered by Cambridge University Press. Manna is distributed
globally under AGPL, so this must be checked rather than assumed.

Separately, the *Pure Cambridge Edition* as published by BibleProtector is an
editorial position on which printing is definitive. The underlying text's status
and that publisher's own terms are two different questions. Both need answering
before this is marked VERIFIED.

**What the restriction actually is** (verified 2026-08-15): letters patent
issued by King James, with no expiration, mean that **printing the KJV in the UK,
or importing printed copies into the UK, requires permission**. Cambridge
University Press, Oxford University Press and Collins hold those exclusive UK
printing rights. The patent **has no effect outside the UK**, where the text is
firmly public domain.

Two things follow that matter here:

1. The restriction is framed around **printing and importing printed copies**.
   Whether it reaches purely electronic distribution is not settled by that
   wording, and this project ships no printed copies.
2. It is **UK-only**. Everywhere else, bundling the KJV is unambiguously fine.

**Routes, in preference order** — see
[ADR-0004](../05-development/adr/0004-kjv-uk-rights.md):

- **Ask Cambridge University Press.** They operate a Bibles rights-and-permissions
  process and grant KJV permissions routinely. A written permission removes the
  question entirely and costs nothing but time.
- **Ship KJV as a library-pack module, not bundled.** Under the two-file
  architecture (ADR-0002 option E), the core artifact can bundle a
  worldwide-public-domain translation and let the user load KJV PCE from the
  library pack. Manna then never distributes the KJV at all — the user
  brings it. This is an architectural answer to a legal question, and it fits the
  design already chosen.
- ~~Bundle a worldwide-PD translation as the fallback default.~~ **Rejected by
  James, 2026-08-15.** The World English Bible is a user-imported module if
  wanted, not bundled. This removes the fallback, which makes the CUP permission
  route load-bearing rather than optional — see ADR-0004.

**Not legal advice.** This records what was verified and what the options are.
Confirming the route is James's decision, and worth a short conversation with
CUP's permissions team before first public release.

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
| Matthew Henry's Concise Commentary | Henry, d. 1714 | Long PD | ~2–3 MB | NEEDS-VERIFICATION |
| International Standard Bible Encyclopedia | 1915 | Pre-1929 US publication | ~12–15 MB | NEEDS-VERIFICATION |
| Webster's Dictionary | 1828 | Pre-1929 US publication | ~7–10 MB | NEEDS-VERIFICATION |
| Nave's Topical Bible | Nave, 1897 | Pre-1929 US publication | ~3–4 MB | NEEDS-VERIFICATION |
| Easton's Bible Dictionary | Easton, 1897 | Author d. 1894; pre-1929 | ~3–4 MB | NEEDS-VERIFICATION |
| Smith's Bible Dictionary | Smith, 1863 | Pre-1929 | ~5–7 MB | OPTIONAL — overlaps Easton's |

**Matthew Henry — both editions ship.** The *Concise* is the sensible default
view (fast, readable, ~2–3 MB); the *Complete* unabridged six volumes is the
depth option (~15–20 MB) and belongs in the library pack rather than the core
artifact. Offering both with a toggle is better than choosing for the user.

**On "KJV Dictionary".** The work usually sold under that name is a
Webster's-1828-derived list of English words as used in the KJV — which is
already covered by bundling Webster's 1828 itself. What is almost certainly
wanted instead is a **Bible dictionary**: entries for people, places, and
concepts. The most widely bundled public-domain option across Bible software is
**Easton's Bible Dictionary** (1897), with **Smith's** (1863) the common second.
Easton's is recorded as the default; Smith's is marked optional because the two
overlap heavily and the size cost is real.

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
