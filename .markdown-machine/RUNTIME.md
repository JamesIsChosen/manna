---
{
  "record_type": "PROJECT_RUNTIME_EXPORT",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.3.0",
  "title": "Universal Project Runtime Export",
  "project_output_eligible": true,
  "output_role": "UNIVERSAL_RUNTIME_SOURCE"
}
---

# Universal Project Runtime Export

This is the compact, lossless universal governance runtime intended to be compiled into a child project's `.markdown-machine/RUNTIME.md`.

It is **not** a generic source directory to copy. The compiler may specialize project metadata, but must preserve all applicable semantics below.

## 1. Authority

Only admitted/current AuthorityTransitions supply positive project governance currentness. Handoffs, state summaries, timestamps, Inbox items, evidence, reviews, resource/effect records, and external observations cannot create positive authority.

Governing contracts are compiled as inert candidates under current Authority A, exact-digest-bound by an admitted Authority B, and only then may govern. Post-publication receipts/currentness observations may prove B usable but are external evidence and cannot alter B's semantic authority.

Genesis is admitted from a pre-chain bootstrap trust event committed to the selected Markdown Machine artifact/profile. Project records cannot self-authorize their own genesis.

Ordinary authority transitions are single-parent. Fork recovery uses the narrowly defined multi-parent resolution/cutover semantics below.

## 2. Structured records

Machine-bearing Markdown uses strict JSON front matter (`SMF/1`): UTF-8, LF, no BOM, one JSON object, duplicate keys forbidden, no YAML aliases/tags/implicit typing. Structured strings must decode to Unicode scalar values; unpaired surrogate escapes are rejected. Machine-critical integers represented as JSON numbers must be canonical base-10 integers within ±(2^53−1); wider/exact decimal values use schema-defined canonical strings. Freeform Markdown body cannot expand or override structured machine authority.

Schema evaluation uses the exact project-pinned Markdown Machine schema profile/compatibility family; unknown or incompatible schema semantics fail closed for governing use.

## 3. Human intent and interview

Human authority governs unresolved intent; agents govern mechanics. Every new project performs safe discovery, universal intent interview, capability-specific interview only for credible capabilities, and frontier-sufficient intent completeness. Do not ask for facts safely discoverable. Do not repeat already answered intent. Resume does not restart the universal interview merely because agent/session changed.

Exact human statements remain immutable provenance. Agent interpretation becomes current only through admitted authority.

## 4. Capabilities

The universal runtime is capability-neutral. Capability availability does not imply project activation. Capability composition does not imply authority or credential composition. ACTIVE means eligible for exact Task-level OperationContracts, not blanket permission.

Skills/procedures and cross-cutting concerns do not become capabilities merely because related work occurs.

## 5. Lifecycle and horizon

Project lifecycle is a revisioned capability-composed graph. Changed accepted intent/capability/currentness invalidates only causally affected downstream state; preserve unaffected history/work and resume from earliest still-valid node.

Run Horizon is current human-authorized progress boundary. “Finish/end to end” does not automatically authorize public, destructive, payment, external-communication, credential, physical, or other consequential effects without established intent/effect authority.

## 6. Inbox/change control

Thought/request receipt is candidate input, not Task authority. Required route:

```text
Inbox → impact → accepted intent/authority → lifecycle revision → Task authorization → execution
```

A major change returns to the earliest affected lifecycle frontier; unaffected accepted work remains reusable.

## 7. Tasks/Attempts/Workers

TaskIdentity is stable objective identity. TaskContractRevision is immutable exact Task semantics. Attempt binds an authorized Task revision to exact Worker/endpoint/environment execution. New Worker/model/provider/session/worktree/handoff does not create a new objective or convergence budget.

Children require governed ChildTasks and inherit parent/root authority/budget floors. No free recursive spawning.

## 8. Convergence

Every unresolved objective lineage has one ConvergenceRoot with finite multidimensional capacity. Reservations precede commencement. Uncertain commencement does not earn free refund. Same-objective continuation after exhaustion remains same root and requires admitted finite extension.

Concurrency accounting and rollback continuity are separate. Restoring old local Markdown must never mint autonomous capacity. After crash/restart/restore/cross-copy recovery, previously authorized residual capacity is reusable only with exact/continuity-qualified accounting or a protected proof of safe remaining capacity. A lower bound on consumption detects stale history but does not calculate spendable capacity. If old reusable capacity cannot be proven, it is zero usable. New human-governed post-recovery extensions form separate finite capacity tranches and do not reconstruct unknown historical residue.

## 9. Context and skills

Context is routed, not accumulated. Delivery classes: MANDATORY_NOW, AVAILABLE_ON_DEMAND, EXCLUDED. Fidelity classes: EXACT, LOSSLESS_STRUCTURAL, REVERSIBLE_PROJECTION, DERIVED_EXPLORATORY. Mandatory authority/security/ROE/currentness semantics cannot be summarized away. Child/reviewer context is purpose-compiled; no wholesale parent-context inheritance.

Skills are procedures, not authority. Load only skills applicable to Task/capability/purpose. A skill cannot expand scope, lower security/review floors, mint convergence, or override STOP.

## 10. Review independence

ReviewPurpose selects an IndependenceProfile across authorship, cognitive session, author-private exposure, workspace, tool/cache state, prior remediation exposure, provider/model/endpoint where required. Unknown required independence makes reviewer ineligible. Orchestrator may provision reviewer but cannot manufacture independent judgement.

## 11. Enforcement/resources

Every governing operation must prove the required Enforcement Requirement Vector. Evidence of enforcement is deny-only/eligibility evidence, not positive project authority. Repository prose cannot upgrade mechanical guarantees.

Resource observation is not ownership. Operations requiring exclusivity need a real reservation/fence or serialization; otherwise block/handoff.

## 12. External effects

Significant external effects use write-ahead EffectClaim identity before commencement. Unknown outcome becomes `EXTERNAL_EFFECT_UNKNOWN`; never blind replay. Secrets remain external references, not Markdown bytes.

## 13. STOP/recovery

Human STOP contracts future authority immediately. GRACEFUL STOP begins no new substantive work and permits only safe preservation/reconciliation. IMMEDIATE EXTERNAL STOP crosses no new intentional external-effect boundary. Unproven child/effect state remains explicit uncertainty.

Clean continuation means positive authority, lifecycle/horizon, capabilities, Inbox, Tasks/Attempts, convergence, children/effects, partial working state, blockers, and next legal route can all be recovered without prior chat.

## 14. Authority forks and epochs

Ordinary authority is linear within an epoch. A detected unresolved fork blocks positive work. Recovery may use a special multi-parent canonical `AUTHORITY_FORK_RESOLVE` under stronger publication guarantees. Resolution establishes a new authority epoch/cutover. After cutover, later-discovered transitions from an earlier epoch that are not ancestors of the resolution are historical `LATE_PRE_CUTOVER_BRANCH` evidence; they may create effect/reconciliation uncertainty but cannot revive old positive authority.

Epoch numbering: ProjectGenesis epoch 0 sequence 0; ordinary successor retains epoch and increments sequence; fork resolution uses `max(parent epochs)+1`, sequence 0; successors then increment within that epoch. Epoch/sequence never select authority by themselves.

## 15. Repository persistence and graceful closeout

Repository persistence is a universal continuity mechanic, not a capability. When the project has an established canonical repository remote, project-local governance contains an exact RepositoryBinding defining provider/repository identity, governed persistence ref, synchronization policy, remote-currentness method, and known push side effects.

For GitHub-backed projects using `PUSH_ON_BOUNDED_CLOSEOUT`, ordinary bounded completion, reaching the requested horizon, handoff/pause, and graceful `Stop` require the intended durable local state to be committed/checkpointed as project policy allows, the canonical remote fetched/read, safe non-force publication of the governed persistence ref performed when needed, and fresh remote-head readback proving exact commit equality before claiming `REPOSITORY_SYNCED`/`STOPPED_SYNCED`. A checkpoint commit does not imply acceptance, integration, or completion.

Push does not imply merge. Never force-push or rewrite history merely to satisfy closeout. If the remote is ahead/diverged, credentials are missing, currentness is unknown, or pushing the selected ref would trigger an unauthorized deployment/publication/message/destructive effect, preserve the local state and record the exact sync blocker.

An explicit `Stop immediately. Do not perform another external action.` forbids repository network synchronization performed solely for closeout; project state must record `EXTERNAL_STOP_PROHIBITS_SYNC` or the exact known pending relationship.

Repository synchronization classifications include `REPOSITORY_SYNCED`, `LOCAL_AHEAD_REMOTE`, `REMOTE_AHEAD_LOCAL`, `REMOTE_DIVERGED`, `REMOTE_SYNC_UNKNOWN`, `REMOTE_SYNC_BLOCKED`, `EXTERNAL_STOP_PROHIBITS_SYNC`, and `NO_CANONICAL_REMOTE`. These are evidence/currentness projections, not positive authority.

## 16. External currentness

Mutable external facts are observations with freshness requirements, not project authority. Refresh only facts needed for next governing operation. Old observations remain history, not current truth.

## 17. Handoff

Project exposes one current human-facing handoff projection. A stale/copy handoff must revalidate project identity, authority head, lifecycle/Task/root/currentness before governing action. Handoff is navigation, never authority.

## 18. Migration/origin

Project pins Markdown Machine origin, compatibility family, runtime export, and capability source digests. No auto-sync. New capabilities or semantic expansion may require trusted source reacquisition. Existing self-contained active work does not depend on “latest Markdown Machine.”
