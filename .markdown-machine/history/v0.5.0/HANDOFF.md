---
{
  "record_type": "PROJECT_HANDOFF",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.5.0",
  "project_id": "manna",
  "handoff_status": "MIGRATION_COMPLETE_HIGH_FIDELITY_VERIFIED_APPEARANCE_APPROVAL_PENDING",
  "next_route": "read ORIGIN.md, RUNTIME.md, STATE.md, authority/AUTHORITY.md, authority/AUTHORITY-TRANSITION-KERNEL-MIGRATE.md, and the current task; obtain human appearance approval, then request explicit Product Freeze"
}
---
# Manna cold-resume handoff

Read this file with `ORIGIN.md`, `RUNTIME.md`, `STATE.md`, `REPOSITORY.md`, `REPOSITORY-SYNC.md`, `COMPILED-MANIFEST.md`, `intent/`, `authority/`, `lifecycle/`, and `tasks/`. The exact v0.5.0 project runtime is local; the source distribution and prior chat are not required.

## Current route

1. Confirm the v0.5.0 DistributionOrigin and final authority head.
2. Read the accepted product and UI/UX requirements under `docs/01-spec/`.
3. Treat the mock and P0.1 implementation as evidence/reference, not final approval.
4. Obtain human appearance approval for the verified desktop/phone design.
5. Obtain explicit human Product Freeze before changing application behavior.
6. Recompile the roadmap after Product Freeze; do not assume prior sequencing still expresses Version 1 priorities.

## Boundaries

The active capability is Software/Product only. Preserve the application, product documents, tests, CI, security material, identity, and history. Do not create another Genesis, do not re-bootstrap, do not use the failed v0.4 attempt as authority, and do not merge, push, deploy, release, rewrite history, or implement before Product Freeze.

## Migration closure

The exact old v0.3.0 source closure and the bridge entry are bounded under `history/v0.3.0/` and `history/v0.5.0-migration/`. The current candidate authority is the coherent v0.5.0 finalizer.
