---
{
  "record_type": "CONVERGENCE_POLICY",
  "schema_version": 1,
  "project_id": "manna",
  "policy_id": "manna-v0-4-governance-migration",
  "dimension_ids": ["migration_transactions"],
  "authorized_total_values": [1],
  "preauthorized_extension_event_limit": 0,
  "preauthorized_extension_delta_limit_values": [0]
}
---

# Governance migration convergence policy

This policy authorizes one bounded v0.4.0 governance migration transaction and
no automatic extension. Product work, implementation, and later governance
changes require their own explicit route.
