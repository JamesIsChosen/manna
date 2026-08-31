---
{
  "record_type": "KERNEL_CONTRACT",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Universal Interview and Lifecycle Compiler"
}
---

# Universal Interview and Lifecycle

## New-project flow

```text
BOOTSTRAP
 -> SAFE_DISCOVERY
 -> PRELIMINARY CAPABILITY HYPOTHESES
 -> UNIVERSAL INTERVIEW
 -> CAPABILITY-SPECIFIC INTERVIEW / SAFE ONBOARDING DISCOVERY
 -> STAGE-SUFFICIENT INTENT
 -> CAPABILITY BINDING
 -> LIFECYCLE GRAPH REVISION
 -> GOVERNED EXECUTION
```

Interview and safe onboarding discovery may interleave. Authority-bearing capability operations may not precede their required intent/authorization.

## Universal interview

Establish only material unresolved human intent such as desired outcome, priorities, constraints, privacy/security posture, success/non-goals, risk/effect boundaries, and requested Run Horizon.

Do not ask questions already answered by the human or safely discoverable by the agent.

## IntentRequirement states

- `ESTABLISHED_BY_HUMAN`
- `SAFELY_DERIVED`
- `DEFERRED_UNTIL`
- `BLOCKING`
- `NOT_APPLICABLE`
- `SUPERSEDED`

Every requirement has a stable ID and a `required_before` lifecycle/effect frontier.

Completeness is evaluated against the next reachable frontier, not the entire future project.

## Resume rule

Normal resume reuses accepted intent. Re-interview only for a material unresolved/changed requirement, new capability, change request, conflict, or newly consequential external fact.

## LifecycleGraphRevision

The lifecycle is an immutable revisioned DAG composed from capability fragments. Initial compilation may be partial. Changes cause targeted causal invalidation and a new graph revision; unaffected accepted work remains applicable.

## Run Horizon

The horizon is an authority frontier over lifecycle nodes/effect classes, not the lifecycle itself. Lowering it removes future reachability without rewriting history. Raising it creates new potential reachability subject to all prerequisites.

“End to end” does not automatically authorize public deployment, payment, destructive operations, external communications, or other consequential effects unless accepted intent establishes them.
