---
{
  "record_type": "COMPILED_PROJECT_MANIFEST",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.5.0",
  "project_id": "manna",
  "manifest_status": "MATERIALIZED",
  "source_tag": "v0.5.0",
  "source_commit": "9de2b2db3fa91ccddebec8543e27001393f2f6ed",
  "source_tree": "30e694996a76e31bccf0576effe8a8182e7b45e8",
  "content_set_digest": "d8945b78f65bdd2f32cfe52f9841536f1bca57aad2b8f0da1c9366124500a718"
}
---
# Manna compiled project manifest

This manifest records the v0.5.0 project-local governance surface. Exact candidate exports are listed in `OUTPUT-PLAN.md`; the Markdown Machine distribution is not copied into the project. The old v0.3.0 runtime/source closure is bounded under `history/v0.3.0/`, and the legacy bridge is bounded under `history/v0.5.0-migration/`.

## Current authority

- `.markdown-machine/authority/AUTHORITY.md` → `sha256:b1e4808cf8aa4d0063ec50610f34dbe98aa2e733c96bb31e3ed32a9ff4d0ef01`
- `.markdown-machine/authority/AUTHORITY-TRANSITION-KERNEL-MIGRATE.md` → `sha256:b1e4808cf8aa4d0063ec50610f34dbe98aa2e733c96bb31e3ed32a9ff4d0ef01`
- `.markdown-machine/authority/KERNEL-MANIFEST.md` → `sha256:b21e61ad2a4e133d7c6e1cd0b943cadb208f1950454ba80a2ae00bd95e82a0d3`
- `.markdown-machine/ORIGIN.md` → `sha256:e81c1859d4f67fdc491c39e46eecbedd0c072bc2bfaf3bb20ba8761ec02b3323`

## Current typed binding set

- `.markdown-machine/intent/BASELINE.md` → `sha256:a1a5b93ad5d297ff5c243f023f8b504c6cb6fafc3db64c3ead112e4c220f345a`
- `.markdown-machine/capabilities/BINDING.md` → `sha256:b60ad1c9dbbafc48ea449d8430a5b3adbf7d207fac6c9d3bcb5574a7475f9c6f`
- `.markdown-machine/lifecycle/GRAPH.md` → `sha256:d91b9917afc2b463412b36fa4912f6335fb0da4590a7c73e4e41eb6d8673ee23`
- `.markdown-machine/lifecycle/HORIZON.md` → `sha256:e7a2e346d74fdc88ed7d33d5890b65be3b0b3a0df9ce824f4af9cf378ae353b1`
- `.markdown-machine/authority/OPERATION-CONTRACT-DISCOVERY.md` → `sha256:152658a9b5bd785c74b251c27a1f1e6b80f7802c03316c97d2d3fc93492818ed`
- `.markdown-machine/tasks/P0.2-OFFLINE-SECURITY.md` → `sha256:9858bf044957e2719e1dc11a6a9a04f5d7edc2ebaf05c80e8522e7fab9b2d1ef`
- `.markdown-machine/tasks/V1-UI-UX-DESIGN.md` → `sha256:52d65c89e444390c255efd5cb53011c6a716c40b53bf4dfc4c085b8011fe158b`
- `.markdown-machine/authority/CONVERGENCE-POLICY.md` → `sha256:3f00eb397aa0508e83a376789a01afb7168806b2b0eb330831fc8ec05930fb64`
- `.markdown-machine/REPOSITORY.md` → `sha256:d9c8128deeafff579276a3d866b7f59cab557d531159fd02b03319a664dd6a38`

## Historical closure

The v0.3.0 origin/runtime/manifest/output plan, Genesis projection, original human statement, and exact old authority/migration source closure remain under `history/v0.3.0/`. No second Genesis was created, and the failed v0.4 attempt remains historical Git evidence rather than current authority.
