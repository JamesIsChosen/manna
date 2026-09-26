---
{
  "record_type": "HISTORICAL_MIGRATION_RECORD",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.3.0",
  "historical_machine_name": "Steward Markdown Project Machine",
  "historical_machine_version": "SMPM-1",
  "status": "SUPERSEDED_AND_CLASSIFIED"
}
---

# Historical SMPM-1 bootstrap

An earlier bootstrap attempt materialized a broad generic SMPM-1 directory tree at the repository root and committed it as `12a9d33c4827c82f87ab79bd1858da958a6e824d` (`governance: bootstrap Manna under SMPM-1`). The current v0.3.0 reconciliation classifies that shape as invalid active materialization because it included generic templates, source-like kernel/scaffolding, and capability-neutral directories rather than a compact project runtime.

The earlier commit is preserved in Git history. Its active generic paths are removed by the current reconciliation; the project’s own source, tests, documentation, security files, CI, and prior review history are not removed.
