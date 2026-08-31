# Version 1 UI/UX design verification packet

## 1. Summary

This packet records the supplied Version 1 visual/layout baseline for the
`manna-v1-ui-ux-design-verification` task. It installs the extended Study Desk
prototype and the companion IA/interaction model as design-reference evidence;
it does not modify application code or claim Product Freeze.

## 2. Scope

In scope:

- replace the six-screen Study Desk reference with the supplied 13-screen
  prototype;
- preserve the supplied `support.js` runtime unchanged;
- add the IA, interaction-pattern, platform/state, supplied-word, and coverage
  matrix artifact;
- apply the design-progress note to §19 of the Version 1 UI/UX requirements;
- retain all design material under `docs/01-spec/` and all machine state under
  `.markdown-machine/`;
- record remaining flow-design and approval gaps.

Out of scope:

- production application behavior, `src/`, fixtures, or tests;
- Product Freeze, roadmap recompilation, or implementation authorization;
- new mobile/tablet flows for the seven added static layouts;
- deciding the four unresolved IA proposals;
- merging, releasing, or deploying this branch before review; branch
  publication is performed only because the explicit task requires GitHub
  Markdown Machine closeout, and does not imply review, merge, or acceptance.

## 3. How to verify

Run from the repository root:

```bash
test -f "docs/01-spec/design-reference/Study Desk.dc.html"
test -f "docs/01-spec/design-reference/Manna V1 IA and Interaction Model.dc.html"
rg -q 'data-screen="search"' "docs/01-spec/design-reference/Study Desk.dc.html"
rg -q 'data-screen="compare"' "docs/01-spec/design-reference/Study Desk.dc.html"
git diff --check
npm run lint
npm test
npm run build
```

Recorded results:

- design-reference file/marker checks: pass;
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
| complete low-fidelity flows for every Version 1 function | Not satisfied; the supplied artifacts are visual/layout baseline work only. | IA coverage review; flow pass remains next. |
| empty, first-run, loading, long-running, success, warning, error, reduced-mode, and recovery states | Partially represented visually; systematic state coverage remains open. | Coverage-matrix review. |
| desktop and phone flows, with tablet behavior derived and demonstrated where layout changes materially | Partially satisfied for the original Reader/Home surfaces; the seven added layouts are desktop-only static layouts. | Design artifact inspection. |
| keyboard, touch, screen-reader, reduced-motion, and text-scaling behavior | Existing prototype behavior is preserved; new surfaces are not fully specified for these modes. | Accessibility review remains open. |
| a reviewed information architecture and reusable interaction model | Satisfied by the supplied IA/interaction-model artifact, subject to the four unresolved proposals noted there. | Artifact inspection and human decision. |
| a visual system honoring the approved quiet Reader direction | Satisfied at aesthetics/layout level across the 13-screen prototype. | Prototype artifact inspection. |
| a high-fidelity interactive mock for desktop and phone | Partially satisfied: desktop mock is extended; phone treatment exists only for original surfaces. | Prototype artifact inspection. |
| a coverage matrix mapping every product-contract capability to a designed flow and state | Partially satisfied by the supplied 38-row matrix; ten rows remain gaps and the matrix is not a flow implementation. | IA artifact inspection. |

This packet intentionally does not mark the design task complete because the
unmet criteria are a documented design boundary, not evidence to reinterpret.

## 5. Test evidence

- SHA-256 comparison confirms the installed `Study Desk.dc.html`, IA model, and
  `support.js` match the supplied ZIP byte-for-byte.
- The extended prototype contains the original six screens and the seven added
  static layouts: Search, Notes, Library, Settings, First run, Backup &
  Restore, and Comparison.
- The prototype remains in `docs/01-spec/design-reference/`; no design runtime
  file was copied into `src/` or `dist/`.
- Negative design checks: the handoff is not treated as Product Freeze,
  supplied-word treatment is not applied to the fixture, and the seven added
  layouts are not represented as completed flows.
- Browser rendering remains unverified on this host because no Chromium-family
  executable is installed.

## 6. Assumptions made

- The supplied ZIP is the authoritative source for this baseline handoff.
- The existing repository’s accepted six-screen prototype is replaced only by
  the supplied extended version; its sibling runtime remains unchanged.
- The four IA conflicts are proposals, not settled product decisions.
- The supplied-word italic rendering is a proposal and does not alter
  authoritative Scripture data.

## 7. What to scrutinise

- The extended prototype has static presentation for seven new surfaces but no
  corresponding flow or mobile-state coverage.
- `support.js` remains a prototype-only dependency and contains network-capable
  preview logic; it must not enter the product build.
- The coverage matrix contains ten explicit gaps and should drive the next
  flow-design pass.

## 8. Self-assessment

- This packet does not close the full Version 1 design task; it closes only the
  bounded artifact-reconciliation session.
- No production behavior, Scripture fixture, roadmap marker, or Product Freeze
  state was changed.
- The next design session must complete flows and edge states, obtain human
  flow approval, then verify the appearance and interactive mock before Product
  Freeze can be considered.

## 9. Docs updated

- `docs/01-spec/manna-v1-ui-ux-requirements.md` — status/review date and §19
  design-progress note;
- `docs/01-spec/study-desk-design.md` — received bundle and 13-screen inventory;
- `docs/01-spec/design-reference/README.md` — canonical artifact inventory and
  reference-only boundary;
- `docs/01-spec/design-reference/baseline-mock-handoff.md` — repository-state
  handoff and remaining gaps;
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
| Desktop browser | Unverified | No Chromium-family executable is installed on this host. |
| Phone | Unverified | New layouts have no phone treatment; original prototype views remain reference material. |
| Tablet | Unverified | New layouts have no tablet treatment; original prototype view remains reference material. |
| Keyboard/screen reader/reduced motion/text scaling | Partially specified | Existing prototype behavior is preserved; new surfaces need dedicated flow design. |

## 12. Bundle / size impact

N/A for the product artifact. The design-reference files are not read by
`scripts/build.js` and do not change `dist/manna.html`.
