---
{
  "record_type": "COMPILED_PROJECT_MANIFEST",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.4.0",
  "project_id": "manna",
  "manifest_status": "MATERIALIZED",
  "source_tag": "v0.4.0",
  "source_commit": "48a1ec344851238366c708d75eb82fb9554cf125",
  "source_tree": "9d92212201333c47598282e4f3865f04e050f07b",
  "content_set_digest": "c3a0cd8bc889c75a7d5d9cd131c14fb84c9b3ebe87b9f0476f9e69d41636d65b"
}
---

# Manna compiled project manifest

This manifest enumerates the v0.4.0 project-local governance surface. Exact
source exports are listed in `OUTPUT-PLAN.md`; generated records below are
project-specific current state. The manifest does not recursively include the
Markdown Machine distribution.

## Current project-local runtime and contracts

| path | role |
| --- | --- |
| `.markdown-machine/RUNTIME.md` | exact universal runtime export |
| `.markdown-machine/contracts/` | exact v0.4.0 semantic and governing contract exports |
| `.markdown-machine/capabilities/software-product.md` | exact selected capability runtime export |
| `.markdown-machine/ORIGIN.md` | distribution identity and reacquisition pin |
| `.markdown-machine/REPOSITORY.md` | canonical repository binding |
| `.markdown-machine/REPOSITORY-SYNC.md` | current local/remote sync projection |
| `.markdown-machine/STATE.md` | current recoverable project state |
| `.markdown-machine/HANDOFF.md` | cold-resume route and boundaries |
| `.markdown-machine/OUTPUT-PLAN.md` | bounded materialization plan |

## Current governance records

| path | record role |
| --- | --- |
| `.markdown-machine/authority/KERNEL-MANIFEST.md` | v0.4.0 kernel binding |
| `.markdown-machine/authority/AUTHORITY.md` | current authority projection |
| `.markdown-machine/authority/AUTHORITY-TRANSITION-KERNEL-MIGRATE.md` | explicit kernel migration |
| `.markdown-machine/authority/AUTHORITY-TRANSITION-CAPABILITY-MIGRATE.md` | explicit capability migration |
| `.markdown-machine/authority/CONVERGENCE.md` | current convergence root |
| `.markdown-machine/authority/CONVERGENCE-POLICY.md` | one-transaction migration budget |
| `.markdown-machine/authority/PUBLICATION-MECHANISM-KERNEL.md` | kernel closeout plan |
| `.markdown-machine/authority/PUBLICATION-MECHANISM-CAPABILITY.md` | capability closeout plan |
| `.markdown-machine/authority/REPOSITORY-SYNC-INTENT.md` | containing-commit sync intent |
| `.markdown-machine/authority/OPERATION-CONTRACT-DISCOVERY.md` | bounded discovery operation |
| `.markdown-machine/capabilities/BINDING.md` | selected capability binding |
| `.markdown-machine/intent/MIGRATION-APPROVAL-KERNEL.md` | kernel migration authority |
| `.markdown-machine/intent/MIGRATION-APPROVAL-CAPABILITY.md` | capability migration authority |
| `.markdown-machine/intent/BASELINE.md` | current project intent baseline |
| `.markdown-machine/lifecycle/GRAPH.md` | current lifecycle graph |
| `.markdown-machine/lifecycle/HORIZON.md` | current run horizon |
| `.markdown-machine/tasks/V1-UI-UX-DESIGN.md` | current bounded product task |

## Preserved project records

Existing product intent, task history, evidence, inbox records, the prior
v0.3.0 human statement and genesis, prior closeout material, and
`history/` remain present or are preserved in Git history. The v0.3.0 output
plan and compiled manifest are retained as
`history/OUTPUT-PLAN-V0.3.md` and `history/COMPILED-MANIFEST-V0.3.md`.

No application source, project documentation, assets, configuration, tests,
architecture, release artifact, or Git history was replaced.
