---
{
  "record_type": "OPERATION_CONTRACT",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "P0.2 Offline Network Guard Operation",
  "project_id": "b02652666e7c616794244ab8f0f31638",
  "operation_id": "OP-MANNA-P0.2-OFFLINE-GUARD",
  "purpose": "modify and verify local repository code for offline runtime guarantees",
  "allowed_target": "/home/james/Projects/manna",
  "required_intent": ["INT-MANNA-001", "INT-MANNA-002", "INT-MANNA-003"],
  "required_enforcement": ["authority_publication", "convergence_reservation", "local_atomicity", "review_isolation"],
  "required_resources": ["local repository worktree", "browser test capability"],
  "effects": ["local source changes", "local test/build artifacts"],
  "credentials": "none",
  "external_effects": "none",
  "stop_conditions": ["human STOP", "authority becomes stale", "required enforcement becomes UNKNOWN", "scope expands"],
  "status": "CANDIDATE"
}
---

The operation is local-only and does not authorize network access merely because it tests network blocking.
