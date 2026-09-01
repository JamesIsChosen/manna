# Design reference — NOT PRODUCT CODE

**Review date:** 2026-08-30

The interactive prototype behind
[../study-desk-design.md](../study-desk-design.md).

**Do not lift this into `src/`.** It is a look-and-behaviour reference only.

- `Study Desk.dc.html` — the prototype. Open it in a browser. Its logic objects
  (`COM`, `XREF`, `PEOPLE`, `TOPICS`, `NOTES`, `WORDS`, `PLACES`) are the
  **fixture contract for P0.1**.
- `Manna V1 IA and Interaction Model.dc.html` — the reviewed Version 1
  information architecture, interaction patterns, platform/state rules,
  supplied-word proposal, and coverage matrix. It is design evidence, not an
  implementation contract.
- `manna-v1-low-fidelity-flows.md` — the draft end-to-end flows, edge states,
  responsive routes, accessibility behavior, recovery rules, and capability
  coverage matrix, approved by the human on 2026-08-31.
- `manna-v1-phone-interactive-mock.html` — a self-contained tappable phone
  reference for the remaining V1 surfaces and mobile interaction patterns.
- `support.js` — prototype runtime (`dc-runtime`). Requires `window.React`.
  Explicitly not part of the product; R1 and R4 forbid it.

The prototype loads `support.js` as a sibling file, which the product may not do.

The current Study Desk prototype contains the original six screens plus seven
static layouts: Search, Notes, Library, Settings, First run, Backup & Restore,
and Comparison. Those added layouts do not add new flow logic, mobile variants,
or new selection/pin behavior.

The repository-facing baseline and remaining design gaps are recorded in
[baseline-mock-handoff.md](baseline-mock-handoff.md). The low-fidelity flow
draft is a separate approval-stage artifact; neither document declares Product
Freeze.

**Its Scripture text is not authoritative.** Verse 15 drops the KJV's
supplied-word brackets present in the source module — see
[../../../fixtures/matthew-4-12-17.md](../../../fixtures/matthew-4-12-17.md).
Take Scripture from the fixture record, take everything else from here.
