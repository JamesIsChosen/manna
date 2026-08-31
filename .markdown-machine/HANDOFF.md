---
{
  "record_type": "PROJECT_HANDOFF",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.3.0",
  "project_id": "manna",
  "handoff_status": "STOPPED_SYNCED_UI_UX_DESIGN_READY",
  "next_route": "a new design agent must create and obtain approval for complete flows, then appearance and an interactive mock; do not implement before explicit Product Freeze"
}
---

# Manna cold-resume handoff

Read this file together with `ORIGIN.md`, `RUNTIME.md`, `STATE.md`, `REPOSITORY.md`, `REPOSITORY-SYNC.md`, `COMPILED-MANIFEST.md`, `intent/`, `authority/`, `lifecycle/`, and `tasks/`. Do not require the Markdown Machine ZIP or the prior chat to resume.

## Current route

1. Confirm the active identity is Markdown Machine v0.3.0 and the project is Manna.
2. Read `docs/01-spec/manna-v1-product-contract.md`, `docs/01-spec/manna-v1-ui-ux-requirements.md`, and their records under `intent/`.
3. Treat P0.1 and the existing UI prototype as evidence/reference, not final product approval.
4. Begin the new-agent design task in `tasks/V1-UI-UX-DESIGN.md`: complete low-fidelity flows and edge states first, then stop for human flow approval.
5. After flow approval, produce the visual system and a high-fidelity interactive desktop/phone mock, then stop for human appearance approval.
6. Obtain explicit human Product Freeze before changing application behavior.
7. Recompile the roadmap after Product Freeze; do not assume the old P0.2 → P6/P7 sequence still expresses Version 1 priorities.

## Boundaries

The active capability is Software/Product only. The runtime is compact and project-local. Do not add generic source trees, generic templates, unused capabilities, or a factory. Preserve existing application files and historical reviews. Do not treat the old Home/dashboard, crowded default Study Desk, six-theme set, or P0.1 mock as approved final design. Do not merge, force-push, deploy, release, rewrite history, or resume implementation before Product Freeze.

## Sync status

The accepted interview checkpoint `5bea95bea140b96a1961dfb93bb441d2547c45d0` was read back from the exact governed discovery ref with equality. The subsequent state-record closeout commit is also published and authoritatively read back before this handoff is reported as stopped and synchronized. Inspect `REPOSITORY-SYNC.md`; never infer currentness from local Git state alone.
