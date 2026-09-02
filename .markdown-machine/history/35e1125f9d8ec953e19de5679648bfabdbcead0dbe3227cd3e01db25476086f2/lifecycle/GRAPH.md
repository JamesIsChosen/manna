---
{
  "record_type": "LIFECYCLE_GRAPH",
  "schema_version": 1,
  "project_id": "manna",
  "compiled_under_authority_ref": "sha256:b1e4808cf8aa4d0063ec50610f34dbe98aa2e733c96bb31e3ed32a9ff4d0ef01",
  "graph_id": "manna-software-product-lifecycle",
  "node_ids": [
    "INTENT",
    "PRODUCT_DISCOVERY",
    "FLOWS_UX",
    "DESIGN_VERIFICATION",
    "PRODUCT_FREEZE",
    "ARCHITECTURE",
    "IMPLEMENTATION",
    "RELEASE_READINESS"
  ],
  "edge_ids": [
    "intent-to-discovery",
    "discovery-to-flows",
    "flows-to-design",
    "design-to-freeze",
    "freeze-to-architecture",
    "architecture-to-implementation",
    "implementation-to-release"
  ],
  "terminal_node_ids": [
    "RELEASE_READINESS"
  ],
  "capability_binding_refs": [
    "sha256:d25267b9253fffdca01c7883cf53d882276789c72d43070d9fc29d60622f2822"
  ],
  "run_horizon_ref": "sha256:e7a2e346d74fdc88ed7d33d5890b65be3b0b3a0df9ce824f4af9cf378ae353b1"
}
---
# Manna lifecycle graph

The existing Software/Product lifecycle remains intact. The current frontier is design verification pending human appearance approval, followed by explicit Product Freeze. This migration changes governance mechanics only.
