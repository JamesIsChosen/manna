---
{
  "record_type": "CHANGE_IMPACT_ANALYSIS",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Bootstrap Conformance Impact",
  "project_id": "b02652666e7c616794244ab8f0f31638",
  "item_id": "INBOX-MANNA-BOOTSTRAP-001",
  "affected_intent": ["INT-MANNA-001", "INT-MANNA-002", "INT-MANNA-003"],
  "affected_capabilities": ["software-product"],
  "affected_lifecycle": ["bootstrap", "intent", "capability-binding", "task-preparation"],
  "preserved_artifacts": ["src", "scripts", "test", "docs", "fixtures", "Git history"],
  "earliest_causal_invalidation": "bootstrap-materialization",
  "implementation_behavior_change": false,
  "status": "ANALYZED"
}
---

The requested first change is governance materialization. No application runtime behavior is changed by this impact analysis.
