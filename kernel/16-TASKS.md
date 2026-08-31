---
{
  "record_type": "KERNEL_CONTRACT",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Tasks, Attempts, and Delegation"
}
---

# Tasks and Attempts

## TaskIdentity

Stable objective identity across revisions, Workers, providers, sessions, worktrees, and attempts where the objective remains the same.

## TaskContractRevision

Immutable candidate/governing contract containing:

- TaskIdentity/revision;
- `compiled_under_authority_ref`;
- ConvergenceRoot;
- lifecycle node;
- capability binding and OperationContract;
- purpose/scope/prohibited scope;
- intent refs;
- context requirements;
- skills;
- Worker requirements;
- enforcement requirements;
- resources/effects;
- evidence/review/completion/block/stop conditions.

The contract is inert until exact-digest-bound by a current admitted TASK_AUTHORIZE transition.

## Attempt

Binds one authorized Task revision to exact WorkerVariant, ExecutionEndpoint, enforcement plan, resource state, and convergence reservation.

## Delegation

Children require candidate ChildTask + admission. Parent permission to delegate does not authorize arbitrary child work. Default delegation is false unless the Task/OperationContract permits it.
