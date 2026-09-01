---
{
  "record_type": "PROJECT_HANDOFF",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.3.0",
  "project_id": "manna",
  "handoff_status": "STOPPED_FLOW_DRAFT_AWAITING_HUMAN_APPROVAL",
  "next_route": "human must review and approve the low-fidelity flow draft; then verify appearance and the desktop/phone interactive mock; do not implement before explicit Product Freeze"
}
---

# Manna cold-resume handoff

Read this file together with `ORIGIN.md`, `RUNTIME.md`, `STATE.md`, `REPOSITORY.md`, `REPOSITORY-SYNC.md`, `COMPILED-MANIFEST.md`, `intent/`, `authority/`, `lifecycle/`, and `tasks/`. Do not require the Markdown Machine ZIP or the prior chat to resume.

## Current route

1. Confirm the active identity is Markdown Machine v0.3.0 and the project is Manna.
2. Read `docs/01-spec/manna-v1-product-contract.md`, `docs/01-spec/manna-v1-ui-ux-requirements.md`, and their records under `intent/`.
3. Treat P0.1 and the existing UI prototype as evidence/reference, not final product approval.
4. Review `docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md` and
   obtain human approval of its complete flows and edge states.
5. After flow approval, verify the visual system and high-fidelity interactive
   desktop/phone mock, then stop for human appearance approval.
6. Obtain explicit human Product Freeze before changing application behavior.
7. Recompile the roadmap after Product Freeze; do not assume the old P0.2 → P6/P7 sequence still expresses Version 1 priorities.

## Boundaries

The active capability is Software/Product only. The runtime is compact and project-local. Do not add generic source trees, generic templates, unused capabilities, or a factory. Preserve existing application files and historical reviews. Do not treat the old Home/dashboard, crowded default Study Desk, six-theme set, or P0.1 mock as approved final design. Do not merge, force-push, deploy, release, rewrite history, or resume implementation before Product Freeze.

## Sync status

The design-reconciliation checkpoint `7d16298cfd98b771808c0efcd4dc9fff27f970bb`
was published to the governed branch and read back with exact SHA equality.
Inspect `REPOSITORY-SYNC.md`; never infer currentness from local Git state alone.
The flow draft is now recorded on the current design branch; this does not
grant flow approval, Product Freeze, implementation authority, or merge
authority.
