---
{
  "record_type": "PROJECT_HANDOFF",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.3.0",
  "project_id": "manna",
  "handoff_status": "STOPPED_SYNCED",
  "next_route": "validate exact remote parity, then continue Manna at P0.2 under existing project authority"
}
---

# Manna cold-resume handoff

Read this file together with `ORIGIN.md`, `RUNTIME.md`, `STATE.md`, `REPOSITORY.md`, `REPOSITORY-SYNC.md`, `COMPILED-MANIFEST.md`, `intent/`, `authority/`, `lifecycle/`, and `tasks/`. Do not require the Markdown Machine ZIP or the prior chat to resume.

## Current route

1. Confirm the active identity is Markdown Machine v0.3.0 and the project is Manna.
2. Revalidate the authority/currentness and exact governed Git ref in `REPOSITORY-SYNC.md`.
3. Treat this reconciliation as durable partial governance work; it is not a product acceptance claim.
4. Resume the existing Manna roadmap at P0.2, the Offline Security & Network Guard, after satisfying its own review and evidence gates.

## Boundaries

The active capability is Software/Product only. The runtime is compact and project-local. Do not add generic source trees, generic templates, unused capabilities, or a factory. Preserve existing application files and historical reviews. Do not merge, force-push, deploy, publish, or rewrite history.

## Sync status

Bounded closeout read back the governed ref at exact checkpoint `19c13f9584fc6e622c7e8638f15d1a8ee17f371e`; the final state-record checkpoint is then published and read back before this handoff is considered current. If its status is not `STOPPED_SYNCED` or `REPOSITORY_SYNCED`, inspect the exact blocker rather than assuming the remote is current.
