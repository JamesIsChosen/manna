# Study Desk baseline mock handoff

**Status:** received as a design handoff; repository reconciliation in progress
**Review date:** 2026-08-30
**Role:** design evidence only — not Product Freeze or application-code authorization

## Canonical location

This record belongs beside the prototype assets under
`docs/01-spec/design-reference/`. The folder is intentionally separate from
`src/`: its HTML and JavaScript are visual/interaction reference material, not
the Manna runtime.

## Handoff inventory

The design handoff describes:

- `Study Desk.dc.html` — the accepted Study Desk prototype, expanded from the
  original six screens to seven additional static layouts: Search, Notes,
  Library, Settings, First run, Backup & Restore, and Comparison;
- `support.js` — the sibling Design Component preview runtime;
- `Manna V1 IA and Interaction Model.dc.html` — information architecture,
  seven interaction patterns, platform/state rules, a coverage matrix, and the
  supplied-word representation proposal.

The first two assets are present in this repository. The extended 13-screen
HTML, IA/interaction-model HTML, and the two draft patch files named by the
external handoff are not present in this checkout. The tracked prototype is
therefore preserved unchanged and must not be described as the 13-screen
version until those source files are transferred and reviewed.

## What is preserved

The existing prototype remains the source of visual direction and the P0.1
fixture contract. Its existing six-screen behavior is preserved, including the
Reader, Study Desk, pinned-pane, responsive, theme, selection, and reading-mode
examples. Its Scripture text remains non-authoritative; use the fixture record
at [../../../fixtures/matthew-4-12-17.md](../../../fixtures/matthew-4-12-17.md).

## Protocol boundary

This Markdown record is the repository-facing handoff. It does not duplicate
the full Version 1 requirements or claim a roadmap item is complete. The
requirements remain canonical at
`docs/01-spec/manna-v1-ui-ux-requirements.md`; the Markdown Machine state and
next legal task remain under `.markdown-machine/`.

No root-level `github.md`, free-form patch bundle, or untracked design notes are
created as part of this reconciliation. Repository association and state belong
to the project-local Markdown Machine records and Git metadata.

## Required follow-up before design closeout

1. Transfer the externally produced 13-screen prototype, IA/interaction model,
   and exact requirements patch into this canonical tree.
2. Validate that the prototype remains reference-only and that supplied words
   are represented without altering authoritative Scripture data.
3. Update the requirements and machine task records only after the transferred
   design evidence is actually present and independently checked.
