---
{
  "record_type": "PROJECT_HANDOFF",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.3.0",
  "project_id": "manna",
  "handoff_status": "PRODUCT_DISCOVERY_ACTIVE",
  "next_route": "conduct the UI/UX interview from the accepted Version 1 contract; do not implement before explicit Product Freeze"
}
---

# Manna cold-resume handoff

Read this file together with `ORIGIN.md`, `RUNTIME.md`, `STATE.md`, `REPOSITORY.md`, `REPOSITORY-SYNC.md`, `COMPILED-MANIFEST.md`, `intent/`, `authority/`, `lifecycle/`, and `tasks/`. Do not require the Markdown Machine ZIP or the prior chat to resume.

## Current route

1. Confirm the active identity is Markdown Machine v0.3.0 and the project is Manna.
2. Read `docs/01-spec/manna-v1-product-contract.md` and `intent/PRODUCT-CONTRACT-V1.md`.
3. Treat P0.1 and the existing UI prototype as evidence/reference, not final product approval.
4. Conduct the UI/UX interview beginning with information architecture and the clean-Reader-first flow.
5. Verify the resulting design and obtain explicit Product Freeze before changing application behavior.
6. Recompile the roadmap after Product Freeze; do not assume the old P0.2 → P6/P7 sequence still expresses Version 1 priorities.

## Boundaries

The active capability is Software/Product only. The runtime is compact and project-local. Do not add generic source trees, generic templates, unused capabilities, or a factory. Preserve existing application files and historical reviews. Do not merge, force-push, deploy, publish, rewrite history, or resume implementation before Product Freeze.

## Sync status

Bounded closeout read back the governed ref at exact checkpoint `19c13f9584fc6e622c7e8638f15d1a8ee17f371e`; the final state-record checkpoint is then published and read back before this handoff is considered current. If its status is not `STOPPED_SYNCED` or `REPOSITORY_SYNCED`, inspect the exact blocker rather than assuming the remote is current.
