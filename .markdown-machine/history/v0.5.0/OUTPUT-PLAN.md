---
{
  "record_type": "PROJECT_OUTPUT_PLAN",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.5.0",
  "project_id": "manna",
  "status": "V0_5_GOVERNANCE_MIGRATION_MATERIALIZED",
  "source_identity": "https://github.com/JamesIsChosen/markdown-machine",
  "source_tag": "v0.5.0",
  "source_commit": "9de2b2db3fa91ccddebec8543e27001393f2f6ed",
  "source_tree": "30e694996a76e31bccf0576effe8a8182e7b45e8",
  "content_set_digest": "d8945b78f65bdd2f32cfe52f9841536f1bca57aad2b8f0da1c9366124500a718"
}
---
# Manna v0.5.0 governed migration output plan

This bounded plan materializes the exact v0.5.0 project-local runtime and contracts, preserves project-owned product content and historical governance, enters the old-contract manifest-only bridge, finalizes one coherent candidate binding set, regenerates derived projections, and leaves the repository local-only. It does not copy generic source roots or activate unused capabilities.

## Exact source exports

`RUNTIME.md`, `contracts/`, and `capabilities/software-product.md` are verbatim exact exports from the selected v0.5.0 Git tree. Their source paths and digests are recorded in `ORIGIN.md`.

## Migration disposition

- old v0.3.0 origin/runtime/manifest and exact migration closure: preserve under `history/v0.3.0/`
- old Genesis and accepted project intent: preserve; no second Genesis
- candidate v0.5.0 kernel/contracts/capability: replace current mechanics
- existing Tasks/lifecycle/horizon/convergence/repository identity: mechanically rebind to v0.5 typed records
- failed v0.4 attempt: historical Git evidence only; never current authority
- application source, product docs, tests, CI, assets, security material: preserve unchanged
