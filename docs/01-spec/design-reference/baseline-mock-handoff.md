# Baseline UI/UX mock — handoff

**Status:** aesthetics/layout baselined and low-fidelity flows drafted; human flow approval pending
**Review date:** 2026-08-30
**Produced by:** Claude Design, this session
**Repository state:** materialized on the local UI/UX design branch; not Product Freeze

## What this covers

Per `manna-v1-ui-ux-requirements.md` §19, this handoff records deliverable 6
(visual system) and the layout/presentation half of deliverable 7 (interactive
mock). The companion
[manna-v1-low-fidelity-flows.md](manna-v1-low-fidelity-flows.md) now drafts
deliverables 1–4 at the flow/design-rule level. It is awaiting human approval
and high-fidelity verification; it does not authorize production behavior.

## Canonical artifacts

Both design artifacts are stored in this folder and remain reference material,
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

## Open design work

- Human review and approval of the low-fidelity flows and edge-state coverage
  is pending. The draft covers every Version 1 capability in its matrix.
- The seven added high-fidelity layouts still need tablet and phone treatments
  in the interactive mock; the flow draft defines their required reflow.
- Keyboard, touch, screen-reader, reduced-motion, and text-scaling behavior is
  specified as design rules but remains unverified in a rendered mock.
- The IA document records four unresolved proposals: Home versus launch to
  Reader, six prototype themes versus four Version 1 appearances, comic
  loudness versus the quiet Reader direction, and supplied-word treatment.
- The former ten coverage-matrix gaps are now covered by the low-fidelity draft;
  they remain unverified in the high-fidelity mock: dictionary/lexicon, Map Pack
  views, concordance occurrences, highlights, bookmarks/questions/observations,
  Appearance detail, Trust/About, startup capability checks, readable exports,
  and read-aloud.

The supplied-word italic rendering remains a proposal only. It has not been
applied to the authoritative fixture record or used to alter Scripture text.

## Protocol boundary

The canonical requirements are
[`manna-v1-ui-ux-requirements.md`](../manna-v1-ui-ux-requirements.md). The
machine-owned state and next legal task remain under
[`../../../.markdown-machine/`](../../../.markdown-machine/). This handoff
does not declare Product Freeze, authorize implementation, or recompile the
roadmap. The next gate is human approval of the low-fidelity flows; after that,
the design agent must verify the appearance and high-fidelity interactive mock.
