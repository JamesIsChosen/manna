---
{
  "record_type": "INTENT_BASELINE",
  "schema_version": 1,
  "project_id": "manna",
  "intent_baseline_id": "manna-v1-product-and-ux",
  "intent_items": [
    {"id":"preserve-product-state","text":"Preserve Manna's existing product requirements, architecture, implementation, tests, assets, configuration, and identity while changing only governance mechanics during adoption."},
    {"id":"deliver-v1-workstation","text":"Continue toward the V1 offline-first Bible study workstation with the accepted product and UI requirements preserved."}
  ],
  "human_statement_refs": [{"ref":"sha256:625246d1fb04cec53a2ab4374a9ca39f5d81ae4b305f8ff9d372b7145a401c1f","path":".markdown-machine/intent/human-statement-adoption.md"}],
  "authorized_capability_ids": ["software-product"],
  "constraints": ["Single self-contained release file.","No runtime network or server dependency.","Scripture text remains verbatim from installed modules.","Imported modules remain untrusted data.","Mobile parity is required.","Builds are deterministic."],
  "non_goals": ["Product implementation before Product Freeze.","Product redesign during adoption.","History rewriting.","Merge or release from this branch."],
  "run_horizon_ref": {"ref":"sha256:347cbc8e548269aff16ba6c81562ab4ee31bb5a4313cd933873614dc9ae0a45f","path":".markdown-machine/lifecycle/run-horizon-manna.md"},
  "revision": 1
}
---
# Manna intent baseline
