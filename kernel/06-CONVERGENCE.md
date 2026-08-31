---
{
  "record_type": "KERNEL_CONTRACT",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Convergence and Anti-Recursion"
}
---

# Convergence

Every unresolved objective lineage has one stable ConvergenceRoot.

Changing Worker, model, provider, session, endpoint, worktree, branch, prompt wording, review label, handoff, or decomposition does not create a new root merely by changing wrappers.

## Capacity dimensions

Policies may bound:

- attempts;
- interview episodes;
- equivalent questions;
- research cycles;
- context expansions;
- remediation cycles;
- review cycles;
- child count;
- delegation depth;
- recovery cycles;
- objective-relation adjudications.

## Reservations

Reserve capacity before Attempt commencement. Refund only when definite non-commencement is proven under the applicable continuity contract. Uncertain commencement is not free retry capacity.

## History continuity

Reservation atomicity and rollback resistance are separate.

A consumed lower bound may detect stale history but **must never be used to calculate spendable remaining capacity**.

### Safe reusable old capacity

After restart/recovery:

- if exact continuity-qualified accounting proves authorized total, exact consumed amount, and conservative active reservations, compute the safe remainder;
- if a protected mechanism directly proves a conservative safe-remaining value, that value may be used;
- otherwise old reusable capacity is **0**.

`consumed >= N` alone never implies `authorized - N` is safe to spend.

## Capacity tranches

Every initial grant or admitted extension creates a `ConvergenceCapacityTranche` bound to:

- one ConvergenceRoot;
- one authority transition;
- one continuity epoch;
- finite granted delta by dimension;
- exact tranche-local reservations/consumption state.

Unknown historical residue never mixes into a new tranche.

Example after lost continuity:

```text
old historical reusable capacity = 0
human grants +2 attempts
new post-recovery tranche = 2
safe reusable capacity = exactly 2
```

No statement is made that old consumption was zero.

## Same-root extension

Legitimate continuation of the same objective uses an admitted finite `CONVERGENCE_EXTEND` transition and creates a new tranche under the same root. Historical accounting is never reset.

## Objective relation

- `SAME_OBJECTIVE`
- `CHILD_OBJECTIVE`
- `NEW_OBJECTIVE`
- `UNKNOWN`

`UNKNOWN` cannot mint a root or capacity.

## Children

Children partition/charge ancestor capacity. Spawning a child never creates independent budget.

## Exhaustion

When available capacity reaches zero, autonomous continuation stops until a valid finite extension or genuinely new objective is admitted.
