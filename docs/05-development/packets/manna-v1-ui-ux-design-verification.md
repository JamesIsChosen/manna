# Version 1 UI/UX design verification packet

## 1. Summary

This packet records the supplied Version 1 visual/layout baseline, the
human-approved low-fidelity flow draft, and the verified desktop/phone
high-fidelity reference mocks for the `manna-v1-ui-ux-design-verification`
task. The flow draft covers end-to-end behavior, edge states, platform reflow,
accessibility rules, recovery, and all Version 1 capabilities. This packet does
not modify application code or claim Product Freeze.

## 2. Scope

In scope:

- replace the six-screen Study Desk reference with the supplied 13-screen
  prototype;
- preserve the supplied `support.js` runtime unchanged;
- add the IA, interaction-pattern, platform/state, supplied-word, and coverage
  matrix artifact;
- add `docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md` as the
  flow and state approval artifact;
- apply the design-progress note to §19 of the Version 1 UI/UX requirements;
- retain all design material under `docs/01-spec/` and all machine state under
  `.markdown-machine/`;
- advance the cold-resume records to the human appearance-approval gate;
- record the remaining tablet/accessibility review items and Product Freeze
  boundary.

Out of scope:

- production application behavior, `src/`, fixtures, or tests;
- Product Freeze, roadmap recompilation, or implementation authorization;
- changing the four resolved IA directions;
- dedicated tablet mock implementation or verification;
- merging, releasing, or deploying this branch before review; branch
  publication is performed only because the explicit task requires GitHub
  Markdown Machine closeout, and does not imply review, merge, or acceptance.

## 3. How to verify

Run from the repository root:

```bash
test -f "docs/01-spec/design-reference/Study Desk.dc.html"
test -f "docs/01-spec/design-reference/Manna V1 IA and Interaction Model.dc.html"
test -f "docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md"
test -f "docs/01-spec/design-reference/manna-v1-phone-interactive-mock.html"
rg -q 'data-screen="search"' "docs/01-spec/design-reference/Study Desk.dc.html"
rg -q 'data-screen="compare"' "docs/01-spec/design-reference/Study Desk.dc.html"
rg -q '^## 13\. Capability coverage matrix$' "docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md"
rg -q 'data-view="backup"' "docs/01-spec/design-reference/manna-v1-phone-interactive-mock.html"
rg -q 'data-pane="word"' "docs/01-spec/design-reference/manna-v1-phone-interactive-mock.html"
git diff --check
npm run lint
npm test
npm run build
```

Recorded results:

- design-reference file/marker checks: pass;
- low-fidelity flow artifact and coverage-matrix marker checks: pass;
- `npm run lint`: pass;
- non-browser tests: 3 pass;
- `npm test`: blocked by unavailable Chromium-family executable in
  `test/browser.test.js`; `test/failure.test.js` also has pre-existing
  assertions expecting diagnostics on stderr while the current scripts emit
  them on stdout;
- `npm run build`: pass; the design-reference files are not product inputs and
  do not change the generated artifact.

## 4. Acceptance criteria

Copied from `docs/01-spec/manna-v1-ui-ux-requirements.md` §19:

| Criterion | How satisfied | Test |
|---|---|---|
| complete low-fidelity flows for every Version 1 function | Recorded in the new flow artifact, including Reader, Search, Study, Notes, Library, secondary surfaces, and cross-flow behavior. | Flow artifact inspection; human approval recorded 2026-08-31. |
| empty, first-run, loading, long-running, success, warning, error, reduced-mode, and recovery states | Defined globally and mapped to each capability's flow. | Flow artifact §§1.1 and 13; reference spot-checks recorded below. |
| desktop and phone flows, with tablet behavior derived and demonstrated where layout changes materially | Defined for every flow in the platform-reflow table and exercised in the desktop/phone references; tablet remains derived. | Flow artifact §§1.2 and 2–11; local-browser reference verification. |
| keyboard, touch, screen-reader, reduced-motion, and text-scaling behavior | Defined as cross-flow interaction rules, including focus return, non-hover equivalents, and non-colour cues; keyboard/touch equivalents were spot-checked. | Flow artifact §12; rendered accessibility review remains for the human appearance gate. |
| a reviewed information architecture and reusable interaction model | Satisfied by the supplied IA/interaction-model artifact and the four approved directions recorded there. | Artifact inspection; human approval recorded 2026-08-31. |
| a visual system honoring the approved quiet Reader direction | Satisfied at aesthetics/layout level across the 13-screen prototype. | Prototype artifact inspection. |
| a high-fidelity interactive mock for desktop and phone | Satisfied by the extended desktop reference and self-contained phone reference; dedicated tablet work remains out of scope. | Local-browser desktop/phone verification record. |
| a coverage matrix mapping every product-contract capability to a designed flow and state | Recorded as a 38-row capability matrix covering all Version 1 capabilities and their states. | Flow artifact §13; human approval recorded 2026-08-31. |

This packet intentionally does not mark the design task complete: human
appearance approval and Product Freeze remain separate decisions, and tablet
plus deeper accessibility review remain open.

## 5. Test evidence

- SHA-256 comparison confirms the installed `Study Desk.dc.html`, IA model, and
  `support.js` match the supplied ZIP byte-for-byte.
- The extended prototype contains the original six screens and the seven added
  static layouts: Search, Notes, Library, Settings, First run, Backup &
  Restore, and Comparison.
- The prototype remains in `docs/01-spec/design-reference/`; no design runtime
  file was copied into `src/` or `dist/`.
- The low-fidelity flow artifact maps every Version 1 capability to a flow and
  state, including the ten rows previously marked as design gaps.
- Negative design checks: the handoff is not treated as Product Freeze,
  supplied-word treatment is not applied to the fixture, and the seven added
  layouts are not represented as completed flows.
- Local-browser verification used the Codex in-app browser over a loopback-only
  preview. Desktop confirmed the 13-screen reference and Search route. Phone
  confirmed all 9 reference screens, Word Study routing, First Run completion,
  Library import state, Replace restore confirmation, theme switching, Compare
  focus, and zero horizontal overflow at 414×872.

## 6. Assumptions made

- The supplied ZIP is the authoritative source for this baseline handoff.
- The existing repository’s accepted six-screen prototype is replaced only by
  the supplied extended version; its sibling runtime remains unchanged.
- The four IA conflicts are approved directions, not Product Freeze.
- The supplied-word italic rendering is a proposal and does not alter
  authoritative Scripture data.

## 7. What to scrutinise

- The low-fidelity draft is comprehensive, human-approved, and exercised in
  the high-fidelity desktop/phone references.
- The extended prototype has static presentation for seven new surfaces; the
  companion phone reference supplies their tappable narrow-layout treatment.
- `support.js` remains a prototype-only dependency and contains network-capable
  preview logic; it must not enter the product build.
- The ten former coverage gaps now have proposed flow/state treatment; their
  visual treatment and interaction behavior remain to be verified.

## 8. Self-assessment

- This packet does not close the full Version 1 design task; it records the
  bounded baseline plus flow-draft continuation.
- No production behavior, Scripture fixture, roadmap marker, or Product Freeze
  state was changed.
- The next action is human appearance approval of the verified desktop/phone
  reference. After that approval, obtain explicit Product Freeze before any
  roadmap recompilation or production implementation.

## 9. Docs updated

- `docs/01-spec/manna-v1-ui-ux-requirements.md` — status/review date, approval
  gate, and §19 design-progress note;
- `docs/01-spec/study-desk-design.md` — received bundle and 13-screen inventory;
- `docs/01-spec/design-reference/README.md` — canonical artifact inventory and
  reference-only boundary;
- `docs/01-spec/design-reference/baseline-mock-handoff.md` — repository-state
  handoff and remaining gaps;
- `docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md` — approved
  end-to-end flows, edge states, platform rules, and coverage matrix;
- `docs/01-spec/design-reference/manna-v1-phone-interactive-mock.html` —
  self-contained phone reference and interaction spot-check target;
- `.markdown-machine/HANDOFF.md`, `.markdown-machine/STATE.md`,
  `.markdown-machine/tasks/V1-UI-UX-DESIGN.md`, and lifecycle records — current
  cold-resume route and approval boundary;
- `docs/01-spec/design-reference/Study Desk.dc.html` — supplied extended mock;
- `docs/01-spec/design-reference/Manna V1 IA and Interaction Model.dc.html` —
  supplied IA/interaction model;
- this packet — verification and closeout record.

## 10. Security impact

N/A — no production runtime, authentication, secrets, user data, or network
boundary was changed. The prototype runtime remains explicitly excluded from
the product because it uses external preview dependencies.

## 11. Device / platform matrix

| Platform | Result | Notes |
|---|---|---|
| Desktop browser | Verified reference | Local-browser render; all 13 screen tabs present and Search route switches. |
| Phone | Verified reference | Local-browser render at 414×872; all 9 screens and key flow transitions exercised. |
| Tablet | Derived, unverified | Reflow rules are documented; dedicated rendered tablet review remains. |
| Keyboard/touch | Spot-checked | Keyboard verse activation and touch cue/pane transitions exercised in phone reference. |
| Screen reader/reduced motion/text scaling | Specified, deeper review pending | Semantics and rules are present; human appearance review remains. |

## 12. Bundle / size impact

N/A for the product artifact. The design-reference files are not read by
`scripts/build.js` and do not change `dist/manna.html`.
