---
{
  "record_type": "KERNEL_CONTRACT",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Capability Architecture"
}
---

# Capability Architecture

The kernel is universal; domain semantics live in versioned capabilities.

Capability states:

- `UNAVAILABLE`
- `HYPOTHESIZED`
- `DISCOVERED`
- `ONBOARDING`
- `READY_FOR_ACCEPTANCE`
- `ACTIVE`
- `SUSPENDED`
- `REVALIDATION_REQUIRED`
- `BLOCKED`
- `DEPRECATED`
- `REVOKED`

`ACTIVE` means eligible for exact Task-level use. It is never blanket operation permission.

Each capability has:

- CapabilityDefinition;
- project-specific CapabilityInstanceSpec;
- current CapabilityBindingRevision;
- IntentRequirement definitions;
- lifecycle fragment;
- OperationContracts;
- context/secret policy;
- review floors;
- effect/resource classes;
- applicable skills;
- revalidation rules.

Cross-capability composition intersects constraints. Authority, secrets, and credentials do not automatically compose.
