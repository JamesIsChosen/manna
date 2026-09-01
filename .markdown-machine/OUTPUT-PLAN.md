---
{
  "record_type": "PROJECT_OUTPUT_PLAN",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.5.1",
  "project_id": "manna",
  "status": "V0_5_1_GOVERNANCE_MIGRATION_MATERIALIZED",
  "source_identity": "https://github.com/JamesIsChosen/markdown-machine",
  "source_tag": "v0.5.1",
  "source_commit": "914687c5dccd334e208781fbcae53ea23f4e4f41",
  "source_tree": "71f7f41af51f36a8613041f019c1077095215cdb",
  "content_set_digest": "fea489c7701910c0d9cfe3f86b2651e5a67f233c3ec0ecfc798b9cba2d97c5f4"
}
---
# Manna v0.5.1 governed migration output plan

This bounded plan materializes the exact v0.5.1 project-local runtime and contracts through the normal direct migration capability. It preserves the v0.5.0 current state under bounded history, does not copy generic source roots, and activates no new capability.

## Migration disposition

- coherent v0.5.0 origin/runtime/contracts: retained under history/v0.5.0/
- old v0.3.0 bridge/finalizer: preserved under bounded historical closure
- candidate v0.5.1 kernel/contracts/capability: installed as the sole current mechanics
- existing Tasks, lifecycle, horizon, convergence, repository identity, and product state: mechanically preserved/rebound only where required
- failed v0.4 attempt: historical Git evidence only
