---
{
  "record_type": "LIFECYCLE_GRAPH",
  "schema_version": 1,
  "project_id": "manna",
  "graph_id": "manna-v1-lifecycle",
  "node_ids": ["INTENT","PRODUCT_DISCOVERY","FLOWS_UX","DESIGN_VERIFICATION","PRODUCT_FREEZE","ARCHITECTURE","IMPLEMENTATION","RELEASE_READINESS"],
  "edges": [{"from":"INTENT","to":"PRODUCT_DISCOVERY"},{"from":"PRODUCT_DISCOVERY","to":"FLOWS_UX"},{"from":"FLOWS_UX","to":"DESIGN_VERIFICATION"},{"from":"DESIGN_VERIFICATION","to":"PRODUCT_FREEZE"},{"from":"PRODUCT_FREEZE","to":"ARCHITECTURE"},{"from":"ARCHITECTURE","to":"IMPLEMENTATION"},{"from":"IMPLEMENTATION","to":"RELEASE_READINESS"}],
  "current_node_id": "ARCHITECTURE",
  "terminal_node_ids": ["RELEASE_READINESS"],
  "capability_binding_refs": [{"ref":"sha256:b1d72fc11359dbfcbb6a1344d3b12787336181ee14c5284b42fc65d3af5d2e2d","path":".markdown-machine/capabilities/capability-binding-software-product-r2.md"}],
  "run_horizon_ref": {"ref":"sha256:80708005adbfd01fb40ed4458ce03c872076ae013b935fe7c4a8c38c48b3473c","path":".markdown-machine/lifecycle/run-horizon-manna-r4.md"},
  "compiled_under_authority_ref": {"ref":"sha256:d8ae372df7e5a484f77aecc5a1aee9604701e1e9768192231b4433b071c49879","path":".markdown-machine/authority/authority-transition-architecture-horizon-raise.md"},
  "revision": 4
}
---
# Manna lifecycle graph revision 4

This candidate advances from the published PRODUCT_FREEZE node to ARCHITECTURE
inside the exact human-authorized revision-4 horizon. All graph structure and
capability bindings are preserved.
