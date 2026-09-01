---
{
  "record_type": "PROJECT_HANDOFF",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.4.0",
  "project_id": "manna",
  "handoff_status": "STOPPED_HIGH_FIDELITY_VERIFIED_APPEARANCE_APPROVAL_PENDING",
  "next_route": "obtain human appearance approval for the verified desktop/phone reference, then request explicit Product Freeze; do not implement before Product Freeze"
}
---

# Manna cold-resume handoff

Read this file together with `ORIGIN.md`, `RUNTIME.md`, `STATE.md`, `REPOSITORY.md`, `REPOSITORY-SYNC.md`, `COMPILED-MANIFEST.md`, `intent/`, `authority/`, `lifecycle/`, and `tasks/`. Do not require the Markdown Machine ZIP or the prior chat to resume.

## Current route

1. Confirm the active identity is Markdown Machine v0.4.0 and the project is Manna.
2. Read `docs/01-spec/manna-v1-product-contract.md`, `docs/01-spec/manna-v1-ui-ux-requirements.md`, and their records under `intent/`.
3. Treat P0.1 and the existing UI prototype as evidence/reference, not final product approval.
4. The human-approved flow baseline is
   `docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md`.
5. Obtain human appearance approval for the verified desktop/phone reference.
6. Obtain explicit human Product Freeze before changing application behavior.
7. Recompile the roadmap after Product Freeze; do not assume the old P0.2 → P6/P7 sequence still expresses Version 1 priorities.

## Boundaries

The active capability is Software/Product only. The runtime is compact and project-local. Do not add generic source trees, generic templates, unused capabilities, or a factory. Preserve existing application files and historical reviews. Do not treat the old Home/dashboard, crowded default Study Desk, six-theme set, or P0.1 mock as approved final design. Do not merge, force-push, deploy, release, rewrite history, or resume implementation before Product Freeze.

## Sync status

This migration is committed on the dedicated local branch
`codex/markdown-machine-v0.4.0-migration`. The current remote-tracking
observation is the prior branch head `8d17a63`; this migration has not been
pushed. Inspect `REPOSITORY-SYNC.md`; never infer currentness from local Git
state alone. The flow draft and the human's approval are recorded on the
design branch; this does not grant appearance approval, Product Freeze,
implementation authority, or merge authority.
