---
{
  "record_type": "PROJECT_STATE",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.3.0",
  "project_id": "manna",
  "authority_head": "genesis:manna:2026-08-30",
  "lifecycle_revision": "manna-v0.3-reconciliation",
  "run_horizon": "reconcile the existing Manna repository to Markdown Machine v0.3.0 and leave a cold-resume handoff",
  "active_capabilities": ["software-product"],
  "repository_sync": "REPOSITORY_SYNCED",
  "work_status": "RECONCILIATION_CLOSED"
}
---

# Manna current state

## Authority and intent

The current project authority is the Manna genesis admission plus the human reconciliation instruction recorded in `intent/HUMAN-STATEMENT.md`. The exact human statement remains immutable provenance; this state record is only its current mechanical projection.

## Product state

Manna is an offline-first Bible study workstation whose release target is one self-contained `manna.html` file with no runtime sibling assets, server, account, or Internet requirement. Existing product specifications, source, tests, CI, security material, and review chronology are preserved. The repository records P0.1 as workable in its roadmap and identifies P0.2 as the next security/network-guard packet; the README has an older pre-implementation status line that remains project-owned history and is not silently rewritten in this governance reconciliation.

## Governance state

Only `software-product` is active. Repository persistence is universal continuity, not a second capability. The earlier generic SMPM-1 active materialization is classified as invalid for the current v0.3.0 runtime shape and removed from active paths; its historical event remains in `history/SMPM-1-BOOTSTRAP.md` and Git history.

The reconciliation checkpoint `19c13f9584fc6e622c7e8638f15d1a8ee17f371e` was read back from the canonical GitHub governed ref with exact equality. The state-record closeout commit is published and read back separately; it changes governance projections only and does not claim product acceptance.
