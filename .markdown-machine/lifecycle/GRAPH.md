---
{
  "record_type": "LIFECYCLE_GRAPH",
  "schema_version": 1,
  "project_id": "manna",
  "compiled_under_authority_ref": "sha256:a458796ed04021248db17179275c826fa1b9bf053150476ccb6ac45d3063c2af",
  "graph_id": "manna-software-product-lifecycle",
  "node_ids": ["INTENT", "PRODUCT_DISCOVERY", "FLOWS_UX", "DESIGN_VERIFICATION", "PRODUCT_FREEZE", "ARCHITECTURE", "IMPLEMENTATION", "RELEASE_READINESS"],
  "edge_ids": ["intent-to-discovery", "discovery-to-flows", "flows-to-design", "design-to-freeze", "freeze-to-architecture", "architecture-to-implementation", "implementation-to-release"],
  "terminal_node_ids": ["RELEASE_READINESS"],
  "capability_binding_refs": ["sha256:3baeb6f51b9ad59278f87514500ce2dcab3a583eb7b2ea7871fd60e0e9c4cf93"],
  "run_horizon_ref": "sha256:170b17ec7ac01a8e52ef8613dd7ce87bf06cf722c3f5162e903a4142203677ce"
}
---

# Manna lifecycle graph

The active capability fragment is:

`Intent → Product discovery → Product challenge/council → Human product approval when required → Flows/UX → Design verification → Product Freeze → Architecture → Architecture challenge → Implementation → Implementation acceptance → Integration → Release readiness`

The existing repository has completed or recorded the P0.1 single-HTML feasibility packet. New-product discovery and the UI/UX requirements interview are complete. The active frontier is Flows/UX: the complete flows are approved and the desktop/phone high-fidelity references are verified; obtain human appearance approval, then request explicit Product Freeze.

P0.2 Offline Security & Network Guard remains preserved but deferred. Product Freeze must recompile the roadmap before P0.2 or any later implementation packet is authorized. Post-freeze changes route through Inbox and return to the earliest affected frontier while preserving unaffected work.
