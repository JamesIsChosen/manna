---
{
  "record_type": "CAPABILITY_RUNTIME_EXPORT",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.3.0",
  "title": "Software / Product Development Runtime Export",
  "project_output_eligible": true,
  "capability_id": "software-product",
  "materialization_rule": "SELECTED_CAPABILITY_ONLY"
}
---

# Runtime export rule

This capability runtime is **not included by default**. It may be compiled into a project only when this capability is ONBOARDING/ACTIVE (or required historical interpretation) under the capability-selection rules. AVAILABLE/HYPOTHESIZED/DISCOVERED alone do not justify copying this runtime export.

# Software / Product Development

## Interview focus

Users, problem/outcome, essential behavior, must-have/deferred scope, platforms, privacy/security, UX/accessibility, offline/online posture, commercial/rights posture where material, success criteria, non-goals, and run horizon.

## Lifecycle fragment

```text
Intent
 -> Product discovery
 -> Product challenge/council
 -> Human product approval when required
 -> Flows/UX
 -> Design verification
 -> Product Freeze
 -> Architecture
 -> Architecture challenge
 -> Implementation
 -> Implementation acceptance
 -> Integration
 -> Release readiness
```

Production implementation may not precede the capability's valid Product Freeze for the active product slice.

## Change control

Post-freeze features enter the universal Inbox. Return to the earliest affected product stage and preserve unaffected history.

## Human decisions

Product behavior/scope, visual taste where material, business/commercial/rights posture, accepted risk, and consequential UX decisions remain human-owned when unresolved.
