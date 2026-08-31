---
{
  "record_type": "LIFECYCLE_GRAPH_REVISION",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Manna Initial Lifecycle Graph",
  "project_id": "b02652666e7c616794244ab8f0f31638",
  "revision": 1,
  "capability": "software-product",
  "nodes": ["bootstrap", "intent", "capability-binding", "product-discovery", "product-freeze", "architecture", "implementation", "implementation-acceptance", "integration", "release-readiness"],
  "edges": [["bootstrap", "intent"], ["intent", "capability-binding"], ["capability-binding", "product-discovery"], ["product-discovery", "product-freeze"], ["product-freeze", "architecture"], ["architecture", "implementation"], ["implementation", "implementation-acceptance"], ["implementation-acceptance", "integration"], ["integration", "release-readiness"]],
  "legacy_evidence": {"p0.1": "docs/05-development/packets/p0.1-single-html-mobile-feasibility-harness.review.md"},
  "next_frontier": "offline-network-guard-task-authorization",
  "status": "PUBLISHED"
}
---

The existing P0.1 work is mapped as legacy evidence near the product-freeze/implementation-acceptance frontier. The next new implementation frontier is P0.2 offline/network hardening.
