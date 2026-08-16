# Manna — Roadmap

Working roadmap. The full narrative source, including phases P1–P14, is
[ROADMAP-source.md](ROADMAP-source.md); items are promoted here as they are
made review-ready.

## Markers

- `[ ]` not started
- `[~]` implemented, awaiting independent verification
- `[x]` independently verified and merged

**The author never writes `[x]`.** Only an independent reviewer's PASS earns it,
and the reviewer flips it in the same commit as its report.

## Readiness rule

An item is workable only when it has Goal, Deps, Deliverables, numbered
Acceptance criteria, and Out of scope. An item missing any of them goes back for
a planning pass rather than being guessed at.

## Phase overview

| Phase | Name | Status |
|---|---|---|
| P0 | Platform Feasibility | in progress |
| P1 | Core Application Foundation | not started |
| P2 | Scripture Reader | not started |
| P3 | Personal Study Data | not started |
| P4 | Exact Search & Concordance | not started |
| P5 | Strong's & Original Languages | not started |
| P6 | Resource Import System | not started |
| P7 | Verse Finder | not started |
| P8 | Connected Scripture | not started |
| P9 | People, Geography & History | not started |
| P10 | Advanced Personal Study | not started |
| P11 | Ministry Tools | not started |
| P12 | Interchange & Sharing | not started |
| P13 | Hardening, Performance & Accessibility | not started |
| P14 | Release Readiness | not started |

---

## Phase P0 — Platform Feasibility

The purpose of P0 is to prove the product concept works before substantial
functionality is built. No major Bible-study feature begins before P0 passes.

### [x] P0.1 — Single-HTML Mobile Feasibility Harness

**P0.1 governance exceptions:** ADR-0009 accepts the recorded Android
`adb reverse`/localhost execution as criterion-13 evidence for P0.1 only, without
waiving the general no-server/direct-filesystem requirement. ADR-0010 records James's
one-time waiver of reviewer/author session independence for the final P0.1 closeout.
Neither exception changes the global rules for later roadmap items.

**Goal:** Prove one self-contained Manna HTML artifact executes reliably
as an offline application shell on target desktop and mobile environments with
no external runtime files.

**Deps:** none — first implementation packet.

**Design direction:** ACCEPTED 2026-08-15 —
[../01-spec/study-desk-design.md](../01-spec/study-desk-design.md).

**Prototype received** 2026-08-15 —
[../01-spec/design-reference/](../01-spec/design-reference/). Fixture contract
complete. **P0.1 is workable.**

**Open question carried into P0.1:** the prototype drops the KJV supplied-word
brackets in verse 15. How supplied words are stored and rendered is unresolved
and is an R5 matter — see
[../../fixtures/matthew-4-12-17.md](../../fixtures/matthew-4-12-17.md).

**Deliverables:**
- Deterministic build script producing `dist/manna.html`
- Embedded CSS, JavaScript, and SVG assets
- Matthew 4:12–17 Scripture fixture with one Strong's-linked word and place entities
- Central `SelectionService` with verse, word, and place events
- Reader Harness, Study Desk Harness, Home, Diagnostics
- Study Desk panes: Bible, Commentary, Word Study, Atlas, Cross References
- `BUILD-MANIFEST.json` and artifact SHA-256
- Automated verification suite including deliberate-failure fixtures

**Acceptance criteria:**
1. The application runs from a single HTML file with no sibling runtime assets.
2. Copying only `manna.html` into an empty directory and opening it yields the full harness.
3. The harness functions with the network disconnected. `[~]` deferred at P0.1 — actual disconnected-execution not yet demonstrated (non-blocking; CSP `connect-src 'none'` + fail-closed no-network lint already pass — see ADR-0008).
4. Verse selection updates Commentary and Cross-Reference panes, each visibly naming the selected verse.
5. Word selection on a tagged fixture word updates the Word Study pane with its Strong's entry.
6. Place selection updates the Atlas pane.
7. Pinning Commentary prevents it following a subsequent verse selection, and the pinned state is visibly indicated; unpinning resumes following.
8. Selection flows through the central `SelectionService`; no pane manipulates another pane's DOM.
9. All required interactions work at phone width by tap, with no hover-only affordance and no horizontal overflow.
10. The artifact contains no absolute developer filesystem path, verified by an automated check.
11. Deliberate failure fixtures — external JS, external CSS, fetched fixture, missing artifact, broken propagation, pinned pane that follows — each fail verification with a non-zero exit code.
12. Build metadata (app version, build ID, and blanked-field artifact digest) is visible in Diagnostics without exposing local paths; the true final-byte artifact SHA-256 is recorded in `BUILD-MANIFEST.json` and `manna.html.sha256` (see ADR-0007).
13. Validation covers desktop Chromium, desktop Firefox, and an Android Chromium-class browser. For P0.1 only, the recorded Android 11 emulator + Chrome run delivered through `adb reverse` to localhost is accepted as sufficient Android evidence even though direct Android `file://` launch was denied; this does not waive the general no-server/direct-filesystem requirement (see ADR-0009). iOS is recorded as a status row, not a Safari pass/fail: supported via a named third-party viewer hosting Apple WebKit at a `file://` origin; `[~]` device/build evidence deferred (see ADR-0008); storage quota explicitly outstanding (see ADR-0005).
14. A reproducibility probe from two source directories records whether output is byte-identical, and documents any nondeterministic fields.
15. Verse 15 renders the translator-supplied word `by` as visually distinct from translated text, and the distinction survives in the data model rather than being stripped at load. Scripture text matches the source module byte-for-byte once the supplied-word representation is accounted for.

**Out of scope:** real SWORD or OSIS import, production IndexedDB persistence,
production backup, notes, real Strong's datasets, Bible search, Verse Finder,
morphology, real atlas data, sermon builder, reading plans, complete page-turn
animation.

**Also out of scope, though fully designed** — building any of these in P0.1 is a
YAGNI finding, not a bonus: the layout model (pane resize, reorder, column swap,
presets, `SAVE THIS ARRANGEMENT`), any persistence of layout or preferences, the
full 66-book reference picker with per-book chapter validation, all six themes,
full-screen reading mode, and Page vs Scroll mode. P0.1 needs enough theming to
prove the token architecture, not the full set.

**Explicit non-claims:** passing P0.1 does not prove persistent browser storage,
backup safety, iOS library viability, import compatibility, search scalability,
or security hardening. It also does not establish direct Android `file://` launch:
ADR-0009 is a P0.1-only evidence exception, not a general server/runtime waiver.

---

### [ ] P0.2 — Offline Network Guard
### [ ] P0.3 — Persistent Storage Prototype
### [ ] P0.4 — Backup Export Prototype
### [ ] P0.5 — Restore & Corruption Guard
### [ ] P0.6 — File Import Capability Harness
### [ ] P0.7 — Worker Capability Harness
### [ ] P0.8 — Mobile Interaction Harness
### [ ] P0.9 — Mobile Platform Gate

Items P0.2–P0.9 are described in [ROADMAP-source.md](ROADMAP-source.md) and are
promoted to full acceptance-criteria form as each becomes next.
