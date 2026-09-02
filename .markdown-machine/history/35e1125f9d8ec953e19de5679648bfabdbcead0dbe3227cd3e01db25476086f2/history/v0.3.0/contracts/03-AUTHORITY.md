---
{
  "record_type": "KERNEL_CONTRACT",
  "schema_version": 1,
  "machine_version": "0.3.0",
  "title": "Positive Authority and Publication",
  "machine_name": "Markdown Machine",
  "distribution_only": true,
  "source_class": "KERNEL_SOURCE"
}
---

# Positive Authority

Exactly one admitted current AuthorityTransition lineage supplies positive project governance currentness.

Everything else is a chain-referenced governing contract, deny-only safety state, evidence/history, working state, or projection.

## Candidate-before-authority rule

```text
Current Authority A
  -> compile inert candidate contracts under A
  -> validate candidate set
  -> construct candidate AuthorityTransition B
  -> validate B against TransitionAdmissionContract
  -> publish B using eligible PublicationMechanismPlan
  -> verify B current through PublicationOutcomeReceipt/currentness evidence as required
  -> only then do B-bound contracts govern
```

A candidate contract carries `compiled_under_authority_ref = digest(A)` but never embeds the digest of the future transition intended to authorize it.

## Admission

Hash linkage is necessary but insufficient. Each transition type is evaluated by the kernel-pinned TransitionAdmissionContract.

Minimum transition families:

- `PROJECT_GENESIS`
- `INTENT_ACCEPT`
- `INTENT_SUPERSEDE`
- `CAPABILITY_BIND`
- `CAPABILITY_SUSPEND`
- `LIFECYCLE_PUBLISH`
- `RUN_HORIZON_RAISE`
- `RUN_HORIZON_LOWER`
- `TASK_AUTHORIZE`
- `TASK_CANCEL`
- `REVIEW_AUTHORIZE`
- `RESULT_ACCEPT`
- `STOP`
- `RESUME`
- `CONVERGENCE_EXTEND`
- `AUTHORITY_FORK_RESOLVE`
- `KERNEL_MIGRATE`
- `CAPABILITY_MIGRATE`

The evaluator derives the actual semantic delta and checks it against the allowed delta. A transition cannot self-certify legality.

## Human semantic envelope

Merely referencing a human statement does not authorize unrelated expansion. The exact semantic delta must be contained within accepted human intent or an already-authorized mechanical derivation.

## Publication plan versus receipt

`PublicationMechanismPlan` exists before B and may be referenced by B.

`PublicationOutcomeReceipt` and `AuthorityCurrentnessObservation` are created after B's digest is fixed and reference B externally. B never embeds their digest.

## Forks and epochs

Ordinary transitions have exactly one predecessor. `PROJECT_GENESIS` has none. `AUTHORITY_FORK_RESOLVE` may have multiple branch-head predecessors.

Epoch/sequence rules:

- ProjectGenesis: epoch 0, sequence 0.
- Ordinary successor: same epoch; sequence = parent.sequence + 1.
- Fork resolution: epoch = max(parent epochs) + 1; sequence 0.
- Ordinary successor after resolution: same new epoch; sequence increments normally.

Epoch/sequence alone never select current authority.

### Cutover rule

A valid `AUTHORITY_FORK_RESOLVE` must be published through a mechanism that establishes a canonical cutover for the exact recovery publication domain.

After cutover to epoch E+1:

- only the resolution transition and descendants of that transition may become positive heads in E+1;
- a later discovered non-ancestor transition from an earlier epoch is `LATE_PRE_CUTOVER_BRANCH`;
- that branch remains immutable history and may create effect/security/reconciliation uncertainty;
- it cannot independently restore old positive authority or reopen the prior fork.

ForkSet completeness means complete relative to the exact recovery observation/publication domain at cutover, not omniscient proof that no disconnected artifact exists anywhere.

## Usable current head

A head is usable only when structural validity, transition admission, required publication/currentness proof, and fork/cutover rules all pass.
