---
{
  "record_type": "RUN_HORIZON",
  "schema_version": 1,
  "project_id": "manna",
  "run_horizon_id": "manna-v1-architecture",
  "authorized_frontier": ["DESIGN_VERIFICATION","PRODUCT_FREEZE","ARCHITECTURE"],
  "reachable_terminal_nodes": ["HUMAN_APPEARANCE_APPROVAL","PRODUCT_FREEZE_REQUEST"],
  "allowed_effect_classes": ["REPOSITORY_WRITE"],
  "human_statement_refs": [
    {"ref":"sha256:1402f7c7bf806e73cd64e0c395e812efdd2ae5472c425ff81d6e42bb346c91f1","path":".markdown-machine/intent/human-statement-adoption.md"},
    {"ref":"sha256:4c9209e041c4649b06cac77c35bd97dcaf902188e0ab713e04f353fa0d0dbc5b","path":".markdown-machine/intent/human-statement-ipad-governance-update.md"},
    {"ref":"sha256:5702a8d91aa7200de9f9f6ccff66bb235c5464e33dde8cdbbc056f2c1f8d4cde","path":".markdown-machine/intent/human-statement-product-freeze-request.md"}
  ],
  "revision": 4
}
---
# Manna run horizon revision 4

This candidate is the minimum strict superset of revision 3: it adds only
ARCHITECTURE to the authorized frontier while preserving terminal nodes,
allowed effects, and prior human-statement references.
