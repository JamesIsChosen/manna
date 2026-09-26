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
  "capability_binding_refs": [{"ref":"sha256:b1d72fc11359dbfcbb6a1344d3b12787336181ee14c5284b42fc65d3af5d2e2d","path":".markdown-machine/capabilities/capability-binding-software-product-r2.md"}],
  "run_horizon_ref": {"ref":"sha256:666abe4b6f25ce5efc2ef67fe5a879001f82c8da0cd541de3558ba846d9bcefa","path":".markdown-machine/lifecycle/run-horizon-manna.md"},
  "compiled_under_authority_ref": {"ref":"sha256:1f0ec46abcfb3d02feac9ad7cbce44579cd7f62b64044dd1588d2bca0d08c929","path":".markdown-machine/authority/authority-transition-capability-migrate-v01024.md"},
  "revision": 2
}
---
# Manna lifecycle graph revision 2

The lifecycle position and horizon are preserved while the capability reference
is rebound to the admitted v0.10.2.4 capability policy.
