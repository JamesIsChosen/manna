---
{
  "record_type": "LIFECYCLE_GRAPH",
  "schema_version": 1,
  "project_id": "manna",
  "graph_id": "manna-v1-lifecycle",
  "node_ids": ["INTENT","PRODUCT_DISCOVERY","FLOWS_UX","DESIGN_VERIFICATION","PRODUCT_FREEZE","ARCHITECTURE","IMPLEMENTATION","RELEASE_READINESS"],
  "edges": [{"from":"INTENT","to":"PRODUCT_DISCOVERY"},{"from":"PRODUCT_DISCOVERY","to":"FLOWS_UX"},{"from":"FLOWS_UX","to":"DESIGN_VERIFICATION"},{"from":"DESIGN_VERIFICATION","to":"PRODUCT_FREEZE"},{"from":"PRODUCT_FREEZE","to":"ARCHITECTURE"},{"from":"ARCHITECTURE","to":"IMPLEMENTATION"},{"from":"IMPLEMENTATION","to":"RELEASE_READINESS"}],
  "current_node_id": "DESIGN_VERIFICATION",
  "terminal_node_ids": ["RELEASE_READINESS"],
  "capability_binding_refs": [{"ref":"sha256:49196ed599b239b24e7e5844e5b09d642787efb3a0a2e4500fae90cff84f936d","path":".markdown-machine/capabilities/capability-binding-software-product.md"}],
  "run_horizon_ref": {"ref":"sha256:666abe4b6f25ce5efc2ef67fe5a879001f82c8da0cd541de3558ba846d9bcefa","path":".markdown-machine/lifecycle/run-horizon-manna.md"},
  "revision": 1
}
---
# Manna lifecycle graph
