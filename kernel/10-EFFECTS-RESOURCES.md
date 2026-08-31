---
{
  "record_type": "KERNEL_CONTRACT",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Resources and External Effects"
}
---

# Resources and External Effects

Convergence permission is not resource ownership. Resource ownership is not effect authority.

## Resources

ResourceRequirement may cover worktree, GPU, browser session, authenticated account, desktop UI, deployment target, physical device, or bounded external API capacity.

Observation is not ownership. A Markdown `LOCKED` string is never mechanical fencing.

If the required resource fence is unavailable, serialize or block/handoff.

## Effect states

- `CLAIMED_NOT_STARTED`
- `COMMENCEMENT_ACCEPTED`
- `OUTCOME_PENDING`
- `CONFIRMED`
- `DEFINITELY_NOT_MATERIALIZED`
- `EXTERNAL_EFFECT_UNKNOWN`

## Required ordering

1. revalidate current authority;
2. revalidate exact Task/capability/target;
3. prove required enforcement;
4. acquire required resources;
5. reserve convergence;
6. durably record EffectClaim;
7. cross commencement boundary;
8. record/reconcile outcome.

If outcome is unknown, do not blind-replay the original operation.

## Human-reserved effects

Capabilities identify effect classes requiring explicit human authority when not already unambiguously included in accepted intent. Examples may include payment, destructive deletion, public publication, external messages, high-impact security actions, and physical operations.
