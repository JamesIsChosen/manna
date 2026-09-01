---
{
  "record_type": "PROJECT_RUNTIME_EXPORT",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.4.0",
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

## 3A. Human control and session boundaries

The child exact-exports `MM-HUMAN-CONTROL/1`. Humans communicate start/stop/resume intent in ordinary language; they are not required to memorize `START`, `STOP`, `RESUME`, `GRACEFUL_STOP`, or another machine token.

A qualified agent interprets the exact current human statement semantically using conversational context, recovered project state, current STOP state, and current Task/effect scope. Keyword matching alone is not a valid decision rule. The exact human wording remains immutable provenance.

For a new project, an ordinary project goal is sufficient to begin bootstrap. In an active non-stopped project, ordinary `continue`/`go ahead`/`proceed` language continues under current authority and does not synthesize RESUME.

When the human clearly means to end, pause, defer, or make the current work session safe for shutdown/loss of session continuity, create the corresponding STOP HumanStatement and execute graceful closeout automatically. The human does not need to add “close out cleanly.” Language clearly forbidding further external action maps to immediate-external STOP.

When a STOP barrier is active, a clear request for substantive governed work to continue supplies semantic basis for the RESUME HumanStatement even if the word `resume` is absent. Existing admitted RESUME/current-human/subject-binding rules still must release the STOP barrier before substantive execution. Greetings, presence statements, and read-only status/inspection requests do not by themselves release STOP.

Local-scope stop/redirection remains local. If material ambiguity remains between ending the session and continuing substantive work, deny new substantive commencement while resolving it rather than guessing toward more authority.

## 4. Capabilities

The universal runtime is capability-neutral. Capability availability does not imply project activation. Capability composition does not imply authority or credential composition. ACTIVE means eligible for exact Task-level OperationContracts, not blanket permission.

Skills/procedures and cross-cutting concerns do not become capabilities merely because related work occurs.

## 4A. Execution agnosticism

Markdown Machine is technology-, provider-, platform-, model-, tool-, and methodology-agnostic. Capability definitions specify governed outcomes/constraints, not preferred implementations.

For each project, recover accepted intent, existing technical state, environment, risks, resources, and current evidence; discover viable execution approaches; then select the best justified project-specific strategy inside the human authority envelope. Technical choices are agent-owned mechanics unless the choice itself changes unresolved human intent, material business/cost/legal posture, accepted risk, or consequential external commitments.

Do not infer a language, framework, OS, database, cloud, security tool, research method, publishing platform, scheduler, repository provider, model, or vendor from Markdown Machine examples, generic skills, prior unrelated projects, or Worker preference. Existing-project technologies are preserved unless governed evidence justifies migration. Tool availability may constrain routing but must not silently weaken project requirements.

Material selected mechanics belong in project-specific strategy/architecture state with evidence/rationale and re-evaluation triggers where relevant.

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

`MM-HUMAN-CONTROL/1` determines when ordinary human language semantically supplies STOP or RESUME intent; the exact transition/recovery evaluators still govern admission and STOP release.

Clean continuation means positive authority, lifecycle/horizon, capabilities, Inbox, Tasks/Attempts, convergence, children/effects, partial working state, blockers, meaningful transient/host-ephemeral continuation state, and next legal route can all be recovered without prior chat.

Meaningful `/tmp`, browser/session-only preview/edit, unsaved editor, scratch, or equivalent transient state must be durably preserved, exactly reconstructible from durable governed state, or explicitly classified partial/unknown before clean closure is claimed. “Not production source” does not make continuation-relevant work disposable.

A clean worktree or pre-existing handoff file is not sufficient closeout evidence.

## 14. Authority forks and epochs

Ordinary authority is linear within an epoch. A detected unresolved fork blocks positive work. Recovery may use a special multi-parent canonical `AUTHORITY_FORK_RESOLVE` under stronger publication guarantees. Resolution establishes a new authority epoch/cutover. After cutover, later-discovered transitions from an earlier epoch that are not ancestors of the resolution are historical `LATE_PRE_CUTOVER_BRANCH` evidence; they may create effect/reconciliation uncertainty but cannot revive old positive authority.

Epoch numbering: ProjectGenesis epoch 0 sequence 0; ordinary successor retains epoch and increments sequence; fork resolution uses `max(parent epochs)+1`, sequence 0; successors then increment within that epoch. Epoch/sequence never select authority by themselves.

## 15. Repository persistence and graceful closeout

Repository persistence is a universal continuity mechanic, not a capability. When the project has an established canonical repository remote, project-local governance contains an exact RepositoryBinding defining provider/repository identity, governed persistence ref, synchronization policy, remote-currentness method, and known push side effects.

For repository-backed projects using `PUSH_ON_BOUNDED_CLOSEOUT`, ordinary bounded completion, reaching the requested horizon, handoff/pause, and any ordinary-language graceful session end under `MM-HUMAN-CONTROL/1` require one immutable intended closeout commit containing final project state/current regenerated handoff plus a `RepositorySyncIntent` targeting its `CONTAINING_COMMIT`; then the canonical remote is fetched/read, safe non-force publication of that exact commit is performed when needed, and fresh remote-head readback externally proves exact commit equality before `REPOSITORY_SYNCED`/`STOPPED_SYNCED` may be reported. The post-publication observation is not written back into the commit it attests. A checkpoint commit does not imply acceptance, integration, or completion.

Push does not imply merge. Never force-push or rewrite history merely to satisfy closeout. If the remote is ahead/diverged, credentials are missing, currentness is unknown, or pushing the selected ref would trigger an unauthorized deployment/publication/message/destructive effect, preserve the local state and record the exact sync blocker.

A semantically clear prohibition on further external action forbids repository network synchronization performed solely for closeout even if the human does not use the documentation's exact example phrase; project state must record `EXTERNAL_STOP_PROHIBITS_SYNC` or the exact known pending relationship.

Repository synchronization classifications include `REPOSITORY_SYNCED`, `LOCAL_AHEAD_REMOTE`, `REMOTE_AHEAD_LOCAL`, `REMOTE_DIVERGED`, `REMOTE_SYNC_UNKNOWN`, `REMOTE_SYNC_BLOCKED`, `EXTERNAL_STOP_PROHIBITS_SYNC`, and `NO_CANONICAL_REMOTE`. These are evidence/currentness projections, not positive authority.

## 16. External currentness

Mutable external facts are observations with freshness requirements, not project authority. Refresh only facts needed for next governing operation. Old observations remain history, not current truth.

## 17. Handoff

Project exposes exactly one current human-facing handoff projection at `.markdown-machine/HANDOFF.md`. Handoff is navigation, never authority.

A handoff generated before later meaningful/governed progress is stale navigation evidence. When work resumes from a prior handoff, that projection is semantically consumed for continuation purposes. Every later bounded handoff/pause/graceful STOP/horizon closeout regenerates/replaces `.markdown-machine/HANDOFF.md` from the resulting recovered state. File existence alone never proves currentness.

A stale/copy handoff must revalidate project identity, authority head, lifecycle/Task/root/currentness before governing action.

## 18. Migration/origin

Project pins Markdown Machine origin, compatibility family, runtime export, human-control profile, and capability source digests. No auto-sync. New capabilities or semantic expansion may require trusted source reacquisition. Existing self-contained active work does not depend on “latest Markdown Machine.”


### Exact authority-contract and recovery closure

A compiled project carries exact `MM-CONTRACT-EVAL/1`, `MM-HUMAN-CONTROL/1`, `GOVERNING-RECORD-CONTRACTS/v2`, `RECOVERY-CRITICAL-CONTRACTS/v1`, `TRANSITION-ADMISSION/v2`, `OPERATION-FLOORS/v2`, the exact selected capability runtime floors, and bootstrap provenance sufficient to validate ProjectGenesis and interpret normal human session control without source-distribution or prior-chat dependence.

Governance-critical references are type/identity-bound. Unknown predicates, floor identifiers, record contracts, or referent types fail closed. An agent may not infer missing admission/recovery semantics from file names, prose, generic templates, or model judgement. Human language classification itself remains semantic under the exact bounded `MM-HUMAN-CONTROL/1` policy and cannot expand authority beyond admitted transitions/effect boundaries.

### Distribution source transport

The machine distribution may be selected as an archive or authenticated Git repository. Both are reduced to the exact ContentSetDigest. Git source additionally pins exact repository identity, commit, and tree. Distribution transport does not alter project authority or execution semantics.

## Exact evaluator closure

The compiled runtime MUST include exact exports of `MM-CONTRACT-EVAL/1`, `MM-TRANSITION-EVAL/1`, `TRANSITION-ADMISSION/v2`, `OPERATION-FLOORS/v2`, `RECOVERY-CRITICAL-CONTRACTS/v1`, `MM-RECOVERY-REDUCER/1`, and `MM-HUMAN-CONTROL/1`. Authority and recovery currentness cannot be reconstructed from prose; session-control behavior cannot depend on a remembered magic-word convention.

## v0.3.4 cold-resume contract closure

Ordinary authority admission uses only `MM-TRANSITION-EVAL/1`, including its exact current-binding reducer and structured global preconditions. Free-form global admission instructions have no evaluator role.

`PROJECT_GENESIS.transition_admission_contract_ref`, every ordinary `AUTHORITY_TRANSITION.admission_contract_ref`, and the current `KERNEL_MANIFEST.transition_admission_contract_ref` must be the same exact digest reference. The KernelManifest reference is the copy bound to the selected distribution by bootstrap.

An Attempt is execution-eligible only when its `resource_reservation_refs` satisfy the exact OperationContract resource floor. Each referenced reservation must be the unique current `RESERVED` revision and proof-backed. `FENCED` additionally requires a nonempty fencing token and a qualifying non-peer mechanical `resource_fencing` assessment.

Safety-clearing recovery edges are guarded by `MM-RECOVERY-REDUCER/1`. Unknown effect state cannot become definitely-not-materialized without target-bound external evidence; uncertain convergence reservation cannot release without definite non-commencement evidence; unknown resource ownership cannot become reserved without new qualifying mechanical proof. `UNKNOWN` and `SINGLE_SESSION_ONLY` convergence continuity expose zero reusable old capacity.

## Exact authority/currentness and Task execution eligibility

Cold recovery derives authority only through `MM-AUTHORITY-CURRENTNESS/1`. Genesis seeds DistributionOrigin, KernelManifest, ConvergenceRoot, and ConvergencePolicy. `TASK_CANCEL` tombstones the Task; Attempt execution requires the exact current non-tombstoned Task plus all preflight checks.

## Exact convergence capacity

`RESERVED`, `COMMITTED`, and `UNCERTAIN` convergence reservations charge their tranche. `COMMITTED` stays charged permanently; `UNCERTAIN` stays charged until valid release/commit. No dimension may be oversubscribed.
