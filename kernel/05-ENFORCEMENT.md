---
{
  "record_type": "KERNEL_CONTRACT",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Enforcement Requirement Vector"
}
---

# Enforcement Requirement Vector

Every OperationContract declares exact required guarantees. Every execution uses current proof-backed EnforcementAssessments.

## Satisfaction

For each dimension, observed guarantees satisfy required guarantees iff every required atomic guarantee is proven under the exact dimension definition, assurance requirement, adapter identity, and freshness policy.

`UNKNOWN` satisfies no positive guarantee.

## Core dimensions

- `bootstrap_origin_assurance`
- `authority_publication`
- `human_authority_assurance`
- `convergence_reservation`
- `convergence_history_continuity`
- `local_atomicity`
- `resource_fencing`
- `effect_claim_durability`
- `external_idempotency_reconciliation`
- `child_control`
- `review_isolation`
- `secret_boundary`
- `cross_machine_currentness`

## Named profiles

Named profiles are versioned convenience bundles only. They never infer unproven guarantees.

### SERIAL_PORTABLE/v1

Supports cooperative single-writer, sequential work, and single-session convergence accounting only when continuously controlled. It does not claim cross-restart monotonic convergence, cross-machine CAS, protected fencing, or remote revocation.

### GIT_CAS/v1

May add canonical remote head observation and compare-and-swap publication for the exact repository/ref when mechanically proven.

### ATOMIC_FILESYSTEM/v1

May add local exclusive-create/atomic-replace guarantees where mechanically proven.

### PROTECTED_RUNTIME/<exact-profile>

Only exact adapter/version/proof-backed guarantees count.

### HANDOFF_ONLY/v1

Permits read, validate, preserve state, and produce continuation. Missing operation guarantees are not waived.

## EnforcementAssessment

Peer-written claims do not upgrade enforcement. Proof provenance, adapter digest/version, failure domain, observed time, and freshness are required according to each guarantee's contract.

## EnforcementPlan

Before Attempt creation, bind each required dimension to the exact qualifying assessment/adapter. Conflicting or stale assessments fail closed.
