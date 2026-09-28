---
{
  "record_type": "LIFECYCLE_GRAPH",
  "schema_version": 1,
  "project_id": "manna",
  "graph_id": "manna-v1-lifecycle",
  "node_ids": ["INTENT","PRODUCT_DISCOVERY","FLOWS_UX","DESIGN_VERIFICATION","PRODUCT_FREEZE","ARCHITECTURE","IMPLEMENTATION","RELEASE_READINESS"],
  "edges": [{"from":"INTENT","to":"PRODUCT_DISCOVERY"},{"from":"PRODUCT_DISCOVERY","to":"FLOWS_UX"},{"from":"FLOWS_UX","to":"DESIGN_VERIFICATION"},{"from":"DESIGN_VERIFICATION","to":"PRODUCT_FREEZE"},{"from":"PRODUCT_FREEZE","to":"ARCHITECTURE"},{"from":"ARCHITECTURE","to":"IMPLEMENTATION"},{"from":"IMPLEMENTATION","to":"RELEASE_READINESS"}],
  "current_node_id": "PRODUCT_FREEZE",
  "terminal_node_ids": ["RELEASE_READINESS"],
  "capability_binding_refs": [{"ref":"sha256:b1d72fc11359dbfcbb6a1344d3b12787336181ee14c5284b42fc65d3af5d2e2d","path":".markdown-machine/capabilities/capability-binding-software-product-r2.md"}],
  "run_horizon_ref": {"ref":"sha256:9eaf213d5aa057534028c8dc919aad8d8f8a4c7ee2d3be95aae26b188c389add","path":".markdown-machine/lifecycle/run-horizon-manna-r3.md"},
  "compiled_under_authority_ref": {"ref":"sha256:af435730400891a4a9f4181505797361bc3c8f2b1dc7647f601e61178b31389d","path":".markdown-machine/authority/authority-transition-product-freeze-r11-accept.md"},
  "revision": 3
}
---
# Manna lifecycle graph revision 3

This candidate advances the current lifecycle node from DESIGN_VERIFICATION to
PRODUCT_FREEZE after the exact r11 Product Freeze result was accepted. All
other graph structure and current bindings are preserved.
