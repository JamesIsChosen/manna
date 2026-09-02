---
{
  "record_type": "KERNEL_CONTRACT",
  "schema_version": 1,
  "machine_version": "0.5.1",
  "title": "Kernel and Capability Migration",
  "machine_name": "Markdown Machine",
  "distribution_only": true,
  "source_class": "KERNEL_SOURCE"
}
---
# Migration

Projects pin exact kernel origin/version/content identity and exact capability definition versions.

There is no silent auto-sync. Version number, timestamp, branch name, `latest` label, file presence, or candidate claims never create migration authority.

Migration advisories may be:

- `OPTIONAL`
- `RECOMMENDED`
- `REQUIRED_BEFORE_SPECIFIC_OPERATION`
- `UNSUPPORTED_REVIEW_REQUIRED`

## Governed in-place machine migration

A human may select another Markdown Machine distribution for an existing project using ordinary natural language. The human is not required to know or say `upgrade`, `migrate`, a version number, an internal transition type, or any reserved command.

Clear operative intent is sufficient semantic basis for the existing `MIGRATION_APPROVAL` HumanStatement once the exact candidate distribution is bound. Informational/comparison intent, future/conditional intent, mere candidate provision, or materially ambiguous intent does not authorize mutation. Ambiguity is resolved with the smallest ordinary-language clarification and fails toward less authority.

The existing project is recovered first under its currently project-local governing semantics. Candidate mechanics are evaluated as inert candidate data. The current machine governs migration admission until an old/current contract actually admits a candidate manifest or coherent cutover. A candidate never retroactively reinterprets historical records merely because it is newer or selected.

## Same project, new mechanics

Machine migration preserves ProjectIdentity and Genesis. It is not re-bootstrap and must not repeat already accepted discovery, human intent, Product Freeze, architecture, completed Tasks, accepted reviews, or other unchanged stages merely because machine mechanics change.

Original HumanStatements, authority transitions, reviews, effects, convergence history, accepted product decisions, repository identity, and valid project history remain historically true and are never rewritten to appear native to the candidate machine.

`KERNEL_MIGRATE` remains the exact authority family used for machine migration. Do not introduce a second Genesis, MigrationAuthority, VersionAuthority, parallel current runtime tree, or second project identity.

## Backward-admissible compatibility bridge

A project may be governed by an older Markdown Machine whose exact `KERNEL_MIGRATE` contract can bind only a `KERNEL_MANIFEST`, while the selected candidate requires a larger coherent cutover set. Candidate rules cannot be borrowed before they are current, so this compatibility boundary is explicit.

When the old/current contract already supports the complete coherent cutover, perform that direct atomic migration.

When the old/current exact contract supports only the legacy manifest-shaped `KERNEL_MIGRATE`, it may admit the exact candidate `KERNEL_MANIFEST` using only the authority and source-pinning rules the old machine already owns. That admitted transition is a **compatibility bridge entry**, not the final operational cutover.

### Pre-bridge clearance

A legacy bridge MUST NOT be entered while the recovered old/current project carries any active barrier whose lawful resolution would require an authority transition that `MIGRATION_BRIDGE_CURRENT` forbids.

Before publishing or admitting the old-contract manifest-only bridge entry, the migration procedure MUST evaluate the exact old/current project-local authority/currentness and recovery state and prove a bridge-safe prestate. At minimum:

- STOP is not active; if STOP is active, the old machine remains current and a valid old/current `RESUME` must release it before bridge entry;
- no unresolved authority fork exists;
- no unresolved human-authority requirement whose resolution requires a non-`KERNEL_MIGRATE` authority transition is pending;
- no recovery/effect/resource/repository/currentness barrier exists whose lawful clearing requires an authority transition unavailable in bridge mode;
- no other current barrier has a recovery route that would be stranded by the bridge's transition restriction.

This is a deny-only compatibility preflight. It grants no new authority and does not let candidate semantics authorize bridge entry. The old/current machine remains authoritative until its own legacy `KERNEL_MIGRATE` admits the candidate manifest. If bridge-safe prestate cannot be proven from exact old/current project-local semantics, do not enter the bridge; keep the old machine current and resolve or report the barrier under old/current semantics.

After bridge entry:

- the candidate KernelManifest and its exact evaluator/admission references are current because the old machine admitted that manifest;
- the old current `DISTRIBUTION_ORIGIN` remains bound temporarily, so `current KernelManifest.distribution_origin_ref != current DistributionOrigin` mechanically identifies `MIGRATION_BRIDGE_CURRENT`;
- the bridge state is migration-only: substantive Task/lifecycle/result/capability/effect transitions are denied;
- only the candidate-governed `KERNEL_MIGRATE` finalizer may install the coherent candidate DistributionOrigin and all mechanically required current binding changes;
- candidate finalization records that carry `compiled_under_authority_ref` bind the exact bridge-entry authority head, which may be precomputed from the complete deterministic bridge transition before publication;
- interruption in bridge state recovers the exact bridge authority head and continues/blocks migration; file majority never chooses old versus candidate semantics.

This two-transition compatibility path is allowed only when the old exact contract cannot express the coherent cutover directly. It does not permit normal project execution in a mixed-current state and does not let candidate bytes self-authorize: the candidate manifest becomes current only through the old machine's admitted legacy transition.

## Exact coherent cutover

Before mutation, derive a complete inert migration plan covering every affected machine-owned current object and classify each outcome using a finite disposition equivalent to:

- preserve unchanged;
- replace with candidate semantics;
- mechanically transform;
- add because candidate semantic closure requires it;
- remove because obsolete;
- retain as historical semantic closure;
- block because the required semantic transformation is not derivable.

Project-owned content defaults to preservation. Fresh-project compiler output is not migration truth.

The final `KERNEL_MIGRATE` cutover must install one coherent candidate current binding set containing every machine-current binding that must change together. This may include, as applicable, the candidate DistributionOrigin and KernelManifest, reconciled CapabilityBindings and OperationContracts, mechanically transformed current Tasks/review bindings/lifecycle state, and other exact governing bindings required by candidate semantic closure. Unchanged bindings remain unchanged rather than being recreated ceremonially.

A direct migration goes old-current → coherent candidate-current in one transition. A legacy compatibility migration goes old-current → migration-only bridge → coherent candidate-current. Neither path permits substantive execution while incompatible current bindings exist. There is exactly one normal current machine origin/runtime/contract set after finalization.

## Capability reconciliation

Currently active/onboarding capabilities are reconciled against exact candidate capability sources. Availability of new capabilities does not activate them. Unchanged capability bindings remain unchanged when candidate semantics permit; changed bindings migrate coherently with the kernel when required; removed/incompatible capabilities require deterministic reconciliation or BLOCK.

`CAPABILITY_MIGRATE` is valid only for a genuinely capability-only migration under the unchanged current kernel. The new capability key must already be current and human-authorized, its exact runtime must be a member of the current `KERNEL_MANIFEST.selected_capability_runtime_refs`, and its OperationContracts must pass the current kernel's exact floors. If the candidate capability requires another KernelManifest, DistributionOrigin, lifecycle, Task, review, convergence, repository, or other coherent machine binding change, `CAPABILITY_MIGRATE` rejects and the operation uses `KERNEL_MIGRATE` or BLOCKS.

## Review continuity

Migration cannot reset review state in either direction.

If a mechanically transformed Task requires its current ReviewRequest to change `task_contract_ref`, then:

- a pending request with no ReviewResult may be mechanically rebound and remains pending;
- if any existing ReviewResult or accepted review evidence already refers to the pre-cutover current ReviewRequest, the cutover rejects before mutation rather than detaching that pass/fail/remediation state;
- old ReviewResults are never rewritten to point at a new request;
- a future machine may introduce an exact migration-lineage equivalence rule, but absent such a rule rejection is safer than manufacturing a fresh review or erasing a failed one.

Thus a PASS cannot become pending and a FAIL cannot disappear solely because machine representation changed.

## Historical semantic closure

A source-free future agent must be able to validate pre-migration history under the semantics that admitted it and then cross the exact migration boundary into current semantics.

Migration therefore retains only the minimum exact old-machine contracts/evaluators/provenance required to validate historical records up to the cutover. Historical semantic closure is explicitly non-current. It is not permission to mirror the entire old Markdown Machine distribution inside the project forever.

For a legacy compatibility bridge, historical validation includes both the old-contract bridge-entry transition and the candidate-contract finalization transition. The old contract validates bridge entry; the newly current candidate contract validates finalization.

The desired historical shape is:

```text
ProjectGenesis
→ old-machine admitted history using bounded historical semantic closure
→ old-contract bridge entry when required
→ candidate-governed coherent KERNEL_MIGRATE finalization
→ current-machine semantics
```

For machines that already support direct coherent cutover, the bridge step is absent.

Do not reinterpret old history using new rules merely because the new runtime is current.

## Staged publication and interruption safety

Migration publication follows this logical order:

```text
recover old current state
→ bind candidate distribution exactly
→ derive complete inert migration plan
→ materialize candidate semantics and finalization records in non-current/staged form
→ validate transformations and candidate semantic closure
→ if legacy bridge is required: prove pre-bridge clearance under exact old/current semantics
→ if old contract supports direct coherent cutover: admit direct KERNEL_MIGRATE
→ else admit old-contract manifest-only bridge entry
→ while bridge-current: deny substantive work and admit only coherent KERNEL_MIGRATE finalization
→ establish canonical current candidate references/paths
→ remove obsolete non-historical old current mechanics
→ regenerate derived projections
→ verify authority/barriers/capabilities/context and source-free cold resume
```

Before any authority transition, old semantics remain the sole current machine and candidate bytes are inert. During a legacy bridge, candidate semantics are current only because the old contract admitted the candidate manifest, but project execution remains migration-only until finalization. File presence or version majority never determines currentness.

Interruption before bridge/direct cutover recovers the old machine plus migration-pending state. Interruption in bridge state recovers the bridge authority head and permits only finalization/recovery. A valid bridge state MUST already have passed pre-bridge clearance and therefore cannot carry an active STOP or another authority-transition-cleared barrier that bridge mode would strand. Interruption after final cutover recovers the new coherent machine or an explicit migration-recovery-required state. A half-written physical tree must never force a fresh agent to guess which machine governs.

Temporary staging during active migration is permitted. Permanent parallel `.markdown-machine-new` current state is forbidden.

## Barrier preservation

Migration is not a barrier escape.

- active STOP remains active unless separately released by valid RESUME;
- a legacy compatibility bridge cannot be entered while STOP is active; RESUME occurs first under old/current semantics;
- unresolved effects remain unresolved until independently cleared by qualifying proof;
- PARTIAL/UNKNOWN/recovery-required state remains conservative where uncertainty survives;
- convergence capacity is preserved conservatively and cannot be replenished by conversion;
- mandatory review cannot become accepted, pending, or erased through representation change;
- unresolved human authority cannot be invented;
- repository synchronization uncertainty survives;
- capability/effect restrictions survive or become more restrictive, never silently broader.

Read-only migration analysis/planning may occur under barriers when existing rules permit read-only inspection. Substantive direct cutover and legacy bridge entry are blocked by active STOP. More generally, legacy bridge entry is blocked whenever bridge mode would strand the lawful authority-transition recovery path for a current barrier.

## Mechanically derivable transformation only

Representation/schema transformations may be autonomous only when every new value is mechanically derivable from admitted existing state under exact candidate semantics. If a candidate requires a new human-owned distinction or another semantic decision that cannot be derived, BLOCK the cutover and ask only for that unresolved human decision.

Model plausibility, version ordering, prose similarity, file names, or candidate defaults do not manufacture human intent.

## Idempotence and drift

If the exact selected candidate DistributionOrigin/KernelManifest already equals the current admitted machine identity and no migration-relevant drift exists, the result is `NO_MIGRATION_REQUIRED`; do not mint another migration transition.

Unbound candidate/newer bytes beside an older-current project are non-current drift or inert material. Never infer an admitted migration from physical files, partial replacement, timestamps, or majority-newer content.

## Projection regeneration and repository hygiene

HANDOFF, CONTEXT_ROUTE, current-state summaries, and other regenerable projections are regenerated from the admitted migrated state and never carried forward as positive authority.

After successful migration, remove obsolete current machine-owned artifacts that are required by neither current/recovery semantic closure nor bounded historical semantic closure. Do not accumulate old runtime trees, migration scratch plans, temporary staged copies, logs, evaluator debris, or duplicate project files merely because they were useful during migration.

A successful migration leaves one clean current project, one current machine origin/runtime, one canonical HANDOFF, and one legal continuation route.
