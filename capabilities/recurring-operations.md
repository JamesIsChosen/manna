---
{
  "record_type": "CAPABILITY_DEFINITION",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Recurring Operations"
}
---

# Recurring Operations

## Interview focus

Recurring objective, frequency/trigger, SLOs, alert/exception policy, change authority, escalation boundary, resource/effect limits, and shutdown conditions.

## Lifecycle fragment

```text
Intent
 -> Operating policy/SLO
 -> Runbook
 -> Review
 -> Activation
 -> recurring bounded runs
 -> exception/change control
 -> periodic revalidation
```

Each recurrence remains subject to current authority, capability, convergence, external currentness, and STOP rules.
