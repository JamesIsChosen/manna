# Baseline UI/UX mock — handoff

**Status:** aesthetics/layout baselined; low-fidelity flows human-approved; high-fidelity reference verification recorded; appearance approval pending
**Review date:** 2026-08-31
**Produced by:** Claude Design, this session
**Repository state:** materialized on the local UI/UX design branch; not Product Freeze

## What this covers

Per `manna-v1-ui-ux-requirements.md` §19, this handoff records deliverable 6
(visual system) and the layout/presentation half of deliverable 7 (interactive
mock). The companion
[manna-v1-low-fidelity-flows.md](manna-v1-low-fidelity-flows.md) now drafts
deliverables 1–4 at the flow/design-rule level. The human approved the draft
on 2026-08-31; local-browser high-fidelity reference verification is recorded
below, and production behavior is not authorized.

## Canonical artifacts

The canonical design artifacts are stored in this folder and remain reference material,
not product code:

1. [`Study Desk.dc.html`](Study%20Desk.dc.html) — the accepted prototype,
   unchanged in its original six screens (Desk, Pinned, Tablet, Phone, Home,
   Reading), now with seven additional static layouts at the same visual
   baseline:

   - **Search** — one field, method chips, sectioned results, recent/saved
     searches;
   - **Notes** — note/highlight/bookmark list, linked-verse detail, tags, and a
     collapsed Study Trail strip;
   - **Library** — kind filter, resource grid, status chips, inspector, and
     import-summary presentation;
   - **Settings** — section list and Appearance controls for system/light/
     sepia/dark presentation, Scripture type controls, and Words of Christ;
   - **First run** — centred card sequence, progress dots, trust statement, and
     skip-to-Scripture action;
   - **Backup & Restore** — backup list and restore preview with conflicts and
     Merge/Replace consequences;
   - **Comparison** — side-by-side source columns, focused-source state, and a
     collapsed overflow strip.

   These seven layouts are static only. They add no new interactive state,
   pin/follow behavior, or selection wiring. Existing screens and their
   behavior are preserved.

2. [`Manna V1 IA and Interaction Model.dc.html`](Manna%20V1%20IA%20and%20Interaction%20Model.dc.html)
   — the reviewed information architecture, seven reusable interaction
   patterns, platform/state rules, supplied-word proposal, and 38-row coverage
   matrix.

3. [`support.js`](support.js) — the sibling Design Component preview runtime.
   It is required only to open the prototype and is not part of the Manna
   runtime.

4. [`manna-v1-phone-interactive-mock.html`](manna-v1-phone-interactive-mock.html)
   — a self-contained, tappable phone reference for the remaining V1 surfaces.

## Open design work

- The high-fidelity desktop/phone references were exercised in the local browser
  against the approved flow draft. Tablet behavior remains derived from the
  flow rules and still needs a dedicated rendered review.
- Keyboard activation, touch activation, focus return, and narrow-viewport
  overflow were spot-checked in the phone reference. Screen-reader, reduced-
  motion, text-scaling, and full tablet review remain design-review items.
- The four IA proposals are approved directions: direct Reader launch with Home
  demoted, System/Light/Sepia/Dark appearances, quiet Reader typography with
  comic framing on secondary surfaces, and preserved supplied-word treatment.
- The former ten coverage-matrix gaps are now covered by the low-fidelity draft;
  they remain unverified in the high-fidelity mock: dictionary/lexicon, Map Pack
  views, concordance occurrences, highlights, bookmarks/questions/observations,
  Appearance detail, Trust/About, startup capability checks, readable exports,
  and read-aloud.

The supplied-word italic rendering is approved as a design direction only. It
has not been applied to the authoritative fixture record or used to alter
Scripture text.

## Protocol boundary

The canonical requirements are
[`manna-v1-ui-ux-requirements.md`](../manna-v1-ui-ux-requirements.md). The
machine-owned state and next legal task remain under
[`../../../.markdown-machine/`](../../../.markdown-machine/). This handoff
does not declare Product Freeze, authorize implementation, or recompile the
roadmap. The next gate is human appearance approval of the verified
desktop/phone reference, followed by explicit Product Freeze.

## Verification record

- Desktop: local-browser render at the normal desktop viewport; all 13 screen
  tabs are present and the Search route switches correctly.
- Phone: local-browser render at 414×872; all 9 reference screens are reachable,
  the Word cue opens Study for Matthew 4:17, First Run advances and exits to
  Reader, Library exposes import, Backup & Restore exposes Replace confirmation,
  Settings changes appearance, and Compare changes the focused source.
- Responsive safety: the phone reference reports zero horizontal overflow for
  both the page and phone frame at 414px.
