---
{
  "record_type": "INTENT_REQUIREMENT",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Runtime Boundary Requirement",
  "project_id": "b02652666e7c616794244ab8f0f31638",
  "requirement_id": "INT-MANNA-003",
  "capability": "software-product",
  "purpose": "maintain the existing offline single-file runtime boundary",
  "authority_type": "SAFELY_DERIVED",
  "materiality": "MATERIAL",
  "required_before": "architecture",
  "resolution": "SAFELY_DERIVED",
  "evidence": ["AGENTS.md", "README.md", "docs/01-spec/engineering-specification.md", "package.json"]
}
---

The existing repository establishes a one-file release artifact, no runtime network, no server requirement, mobile support, and Scripture-integrity constraints.
