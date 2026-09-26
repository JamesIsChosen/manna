---
{
  "record_type": "GOVERNING_CONTRACT",
  "schema_version": 1,
  "contract_id": "MM-AUTHORITY/1",
  "distribution_only": true,
  "normative": true,
  "reducer_outputs": [
    "SINGLETON",
    "AUTHORITY_FORK_UNRESOLVED",
    "AUTHORITY_CURRENTNESS_UNKNOWN",
    "NO_PROVABLE_LINEAGE"
  ],
  "transition_admission_shape_source": "MM-GOVERNING-RECORDS/1#transition_families",
  "human_subject_type_filter_source": "MM-GOVERNING-RECORDS/1#human_subject_type_filter_by_statement_class",
  "candidate_shape_sources": [
    {
      "role": "GRAMMAR",
      "path": "project-runtime/RECORD-GRAMMAR.md",
      "required_record_type": "GOVERNING_CONTRACT"
    },
    {
      "role": "GOVERNING_REGISTRY",
      "path": "project-runtime/GOVERNING-RECORD-CONTRACTS.md",
      "required_record_type": "GOVERNING_RECORD_CONTRACT_REGISTRY"
    }
  ],
  "candidate_shaped_binding_types_default": [
    "DISTRIBUTION_ORIGIN",
    "KERNEL_MANIFEST"
  ],
  "human_subject_binding_rules": {
    "EXACT_BOUND_CONTRACT_SET": {
      "resolution_kind": "BOUNDED_RULE",
      "input_vocabulary": [
        "ADMITTED_LAW_PROJECTION",
        "CANDIDATE_AUTHORITY_TRANSITION_PROJECTION",
        "EXACT_CONTRACT_BINDINGS_PROJECTION",
        "HUMAN_STATEMENT_PROJECTION",
        "BOUNDED_RECORD_SCOPE_PROJECTION"
      ],
      "output_vocabulary": [
        "PASS",
        "REJECT"
      ],
      "output_fields": [
        "subject_binding"
      ],
      "evaluation_order": [
        "resolve admitted transition-family row and required human statement class",
        "validate every exact_contract_bindings entry and complete binding cardinality",
        "derive the nonempty allowed bound digest set E",
        "resolve and validate every subject_ref in a qualifying human statement",
        "reject repeated identities and compare complete digest sets"
      ],
      "algorithm": [
        "For every candidate authority transition whose uniquely resolved admitted transition-family row declares EXACT_BOUND_CONTRACT_SET, evaluate this rule under that admitted law in addition to every other required admission check; resolve the row, required human statement class, and existing human subject filter through transition_admission_shape_source and human_subject_type_filter_source. This rule does not apply to another human_subject_mode, success alone never admits a transition, and missing, unrecognized, multiply resolved, or otherwise unestablished law, mode, class, or filter rejects with no all-bound or empty-filter fallback.",
        "Within the finite candidate/current scope, resolve every exact_contract_bindings entry by full SHA-256 record identity. Validate its typed reference, same-project identity, resolved record type, and the selected family's complete binding cardinality before selecting human subjects. Missing, extra, duplicate, wrong-type, wrong-project, or unresolved bindings reject. A type excluded by the required human statement class is excluded only from human equality; it remains subject to binding validation and every required transition precondition.",
        "Let E be the set of resolved binding digests whose resolved record types are allowed by the required class's existing filter. E must be nonempty. Derive E only from that required class and the transition's validated bindings; never from an attacker-supplied statement class or an unbound record elsewhere in the bounded tree.",
        "Evaluate a cited qualifying statement of the required class under the existing human-control provenance, timing, meaning, and applicability rules. Resolve and validate all of its subject_refs. Disallowed, wrong-project, missing, unresolved, ambiguous, malformed typed references, malformed hint fields, or malformed canonical path syntax reject the statement. A path is advisory: a syntactically valid stale hint may resolve by exact digest within the bounded scope. Two byte-identical copies reachable at permitted paths are one content identity for this comparison, while enclosing record/contract uniqueness checks remain separate. Neither path text nor logical record ID establishes equality; a different revision or digest is a different subject.",
        "Reject repeated subject or binding digest identities, including one digest written with different hint spellings. For valid lists, order is immaterial. Let S be the complete resolved subject digest set. Pass exactly when S = E. Do not drop disallowed or extra subjects, deduplicate invalid input, compare only IDs or types, accept subset or superset equality, or union partial statements into one confirmation. Each individual qualifying statement must cover E. Additional statements remain subject to existing conflict and authority rules; this rule creates no global one-statement cardinality.",
        "Exact equality may use inert candidate records bound by this transition; those records need not already be current. Passing equality neither admits those records nor makes them current. All other admission, human-meaning, currentness, barrier, and precondition checks remain required."
      ],
      "failure_behavior": "Any missing, malformed, stale, disallowed, duplicate, extra, unresolved, ambiguous, wrong-project, wrong-type, incomplete, or conflicting input rejects subject_binding; inability to establish the rule prevents admission and never changes the derived bound set."
    }
  },
  "operator_registry": {
    "VALIDATE_GENESIS_BASE": {
      "input_vocabulary": [
        "OWN_LAW_PROJECTION",
        "ADOPTION_SUBJECT_PROJECTION",
        "CANDIDATE_ORIGIN_PROJECTION",
        "HUMAN_STATEMENT_PROJECTION"
      ],
      "output_vocabulary": [
        "NO_PROVABLE_LINEAGE",
        "SINGLETON",
        "REJECT"
      ],
      "output_fields": [
        "lineage_status",
        "authority_reduction"
      ]
    },
    "REPLAY_SINGLETON_CHILDREN": {
      "input_vocabulary": [
        "PROJECT_GENESIS_PROJECTION",
        "AUTHORITY_TRANSITION_PROJECTION",
        "INERT_CANDIDATE_PROJECTION",
        "REPOSITORY_OBSERVATION_PROJECTION"
      ],
      "output_vocabulary": [
        "SINGLETON",
        "AUTHORITY_FORK_UNRESOLVED",
        "head_set"
      ],
      "output_fields": [
        "authority_reduction",
        "head_set",
        "fork_set"
      ]
    },
    "REPLAY_FORK_RESOLUTION": {
      "input_vocabulary": [
        "AUTHORITY_FORK_PROJECTION",
        "FORK_RESOLUTION_PLAN_PROJECTION",
        "ENFORCEMENT_ASSESSMENT_PROJECTION",
        "REPOSITORY_OBSERVATION_PROJECTION"
      ],
      "output_vocabulary": [
        "SINGLETON",
        "AUTHORITY_FORK_UNRESOLVED",
        "ADMIT",
        "REJECT"
      ],
      "output_fields": [
        "authority_reduction",
        "admission_decision"
      ]
    },
    "TASK_BINDING_MUTATION_ALLOWED": {
      "input_vocabulary": [
        "CURRENT_TASK_MAP_PROJECTION",
        "REVIEW_PREDICATE_PROJECTION"
      ],
      "output_vocabulary": [
        "ADMIT",
        "REJECT",
        "task_map_delta"
      ],
      "output_fields": [
        "admission_decision",
        "task_map_delta"
      ]
    },
    "RESULT_ACCEPT_LINKS_CURRENT_TASK": {
      "input_vocabulary": [
        "CURRENT_TASK_MAP_PROJECTION",
        "REVIEW_PREDICATE_PROJECTION"
      ],
      "output_vocabulary": [
        "ADMIT",
        "REJECT"
      ],
      "output_fields": [
        "admission_decision"
      ]
    },
    "APPLY_ORDINARY_BINDINGS": {
      "input_vocabulary": [
        "CURRENT_BINDING_PROJECTION",
        "AUTHORITY_TRANSITION_PROJECTION",
        "CURRENT_TASK_MAP_PROJECTION",
        "REVIEW_PREDICATE_PROJECTION"
      ],
      "output_vocabulary": [
        "ADMIT",
        "REJECT",
        "binding_delta",
        "task_map_delta"
      ],
      "output_fields": [
        "admission_decision",
        "binding_delta",
        "task_map_delta"
      ]
    },
    "BINDING_REDUCER": {
      "input_vocabulary": [
        "ADMITTED_AUTHORITY_PROJECTION",
        "CURRENT_TASK_MAP_PROJECTION",
        "CURRENT_REVIEW_PROJECTION"
      ],
      "output_vocabulary": [
        "BOUND",
        "UNBOUND",
        "CURRENT_BINDING_PROJECTION"
      ],
      "output_fields": [
        "binding_reduction",
        "current_bindings"
      ]
    },
    "CAPABILITY_FLOOR_ALGORITHM": {
      "input_vocabulary": [
        "SELECTED_CAPABILITY_PROJECTION",
        "CURRENT_TASK_MAP_PROJECTION",
        "OPERATION_CONTRACT_PROJECTION",
        "CURRENT_REVIEW_PROJECTION",
        "CURRENT_HUMAN_AUTHORITY_PROJECTION",
        "CURRENT_EFFECT_PROJECTION",
        "CURRENT_RESOURCE_PROJECTION",
        "RUN_HORIZON_PROJECTION",
        "REPOSITORY_CURRENTNESS_PROJECTION"
      ],
      "output_vocabulary": [
        "PASS",
        "REJECT",
        "HUMAN_DECISION_REQUIRED",
        "UNDECLARED_EFFECT"
      ],
      "output_fields": [
        "capability_floor_decision"
      ]
    },
    "ADOPTION_ELIGIBLE": {
      "input_vocabulary": [
        "OWN_LAW_PROJECTION",
        "OLD_LAW_MIGRATION_PROJECTION",
        "OLD_LAW_PREDICATE_PROJECTION",
        "SHAPE_VALIDATION_PROJECTION",
        "ADOPTION_SUBJECT_PROJECTION",
        "HUMAN_STATEMENT_PROJECTION"
      ],
      "output_vocabulary": [
        "ELIGIBLE",
        "REJECT",
        "lineage_status"
      ],
      "output_fields": [
        "adoption_decision",
        "lineage_status"
      ]
    },
    "KERNEL_MIGRATION_CUTOVER_VALID": {
      "input_vocabulary": [
        "OWN_LAW_PROJECTION",
        "CANDIDATE_ORIGIN_PROJECTION",
        "CANDIDATE_KERNEL_MANIFEST_PROJECTION",
        "SHAPE_VALIDATION_PROJECTION",
        "OLD_LAW_PREDICATE_PROJECTION",
        "PRESERVATION_PROJECTION",
        "HUMAN_STATEMENT_PROJECTION"
      ],
      "output_vocabulary": [
        "ADMIT",
        "REJECT",
        "NO_MIGRATION_REQUIRED"
      ],
      "output_fields": [
        "migration_decision",
        "admission_decision"
      ]
    },
    "SOURCE_FREE_CLOSURE": {
      "input_vocabulary": [
        "SOURCE_AVAILABILITY_PROJECTION",
        "AUTHORITY_RECOVERY_PROJECTION",
        "CURRENT_TASK_MAP_PROJECTION",
        "ATTEMPT_ELIGIBILITY_PROJECTION",
        "SELECTED_CAPABILITY_PROJECTION",
        "RECOVERY_REDUCER_PROJECTION"
      ],
      "output_vocabulary": [
        "PASS",
        "REJECT",
        "cold_resume"
      ],
      "output_fields": [
        "cold_resume",
        "closure_status"
      ],
      "closure_operator_dependencies": [
        "ATTEMPT_EXECUTION_ELIGIBILITY",
        "REQUIRE_STOP_STATE",
        "BINDING_REDUCER",
        "CAPABILITY_FLOOR_ALGORITHM"
      ]
    }
  },
  "operator_rules": {
    "VALIDATE_GENESIS_BASE": {
      "evaluation_order": ["source and exact six-contract closure", "candidate origin", "human statement", "lineage"],
      "outputs": {"NO_PROVABLE_LINEAGE": "no positive lineage is provable", "SINGLETON": "exactly one valid epoch-0/sequence-0 Genesis is admitted", "REJECT": "any missing, malformed, conflicting, or own-law-admissible input"},
      "missing_or_malformed": "REJECT"
    },
    "REPLAY_SINGLETON_CHILDREN": {
      "evaluation_order": ["bounded inventory", "typed predecessor graph", "admitted transition continuity", "currentness"],
      "outputs": {"SINGLETON": "one reachable current head", "AUTHORITY_FORK_UNRESOLVED": "two or more distinct reachable heads", "head_set": "the exact sorted set of reachable heads"},
      "empty_or_invalid": "NO_PROVABLE_LINEAGE or AUTHORITY_CURRENTNESS_UNKNOWN as applicable; never infer a head from file order"
    },
    "REPLAY_FORK_RESOLUTION": {
      "inputs": "complete visible competing-head set and its exact per-head predecessor epochs, common base, selected winner, transition including competing_head_refs, and qualifying publication evidence bound to the assessment, exact competing-head set, selected winner, and canonical persistence ref; post-admission readback, when used for current-head replay, identifies the exact resolution record at that same ref",
      "outputs": {"ADMIT": "all exact fork fields and evidence pass", "SINGLETON": "replayed post-resolution head is one", "AUTHORITY_FORK_UNRESOLVED": "competing set remains", "REJECT": "missing, malformed, conflicting, or non-member winner"}
    },
    "TASK_BINDING_MUTATION_ALLOWED": {
      "inputs": "current Task map, one exact Task mutation, and current Task-relevant review predicate",
      "outputs": {"ADMIT": "candidate changes only the addressed Task map entry and all predicates pass", "REJECT": "stale/multiple Task, unauthorized mutation, or unknown predicate", "task_map_delta": "the exact one-entry replacement or tombstone"},
      "empty_or_malformed": "REJECT"
    },
    "RESULT_ACCEPT_LINKS_CURRENT_TASK": {
      "inputs": "current Task map and the candidate result-accept transition's exact Task binding",
      "outputs": {"ADMIT": "exactly one current non-tombstoned Task identity and operation match", "REJECT": "zero/multiple, stale, tombstoned, or mismatched Task"}
    },
    "APPLY_ORDINARY_BINDINGS": {
      "evaluation_order": ["freeze predecessor", "validate exact binding cardinalities", "apply transition family", "reduce current bindings and Task map"],
      "outputs": {"ADMIT": "all candidate deltas are exact and transition preconditions pass", "REJECT": "otherwise", "binding_delta": "only fields authorized by the selected transition family", "task_map_delta": "only the selected Task mutation, if any"}
    },
    "BINDING_REDUCER": {
      "inputs": "admitted authority chain and exact current-binding records",
      "outputs": {"BOUND": "one current record per binding identity", "UNBOUND": "no current record", "CURRENT_BINDING_PROJECTION": "the exact reduced bindings"},
      "conflict": "UNBOUND or AUTHORITY_CURRENTNESS_UNKNOWN; equal maxima are not resolved by order"
    },
    "CAPABILITY_FLOOR_ALGORITHM": {
      "evaluation_order": ["CURRENT_TASK_AND_OPERATION", "OPERATION_CONTRACT_POLICY_RESOLVER", "REVIEW", "EFFECT", "HUMAN", "RESOURCE", "ENFORCEMENT", "CURRENTNESS"],
      "outputs": {"PASS": "all required exact inputs pass", "REJECT": "any missing, stale, unknown, conflicting, or failed input", "HUMAN_DECISION_REQUIRED": "a current human-owned intent is unresolved", "UNDECLARED_EFFECT": "planned effect is outside the closed operation/horizon relation"},
      "empty_or_malformed": "REJECT except empty planned effects, which derive effective effect floor NONE"
    },
    "ADOPTION_ELIGIBLE": {
      "outputs": {"ELIGIBLE": "only exact no-law or shape-only retired-law escape hatch passes", "REJECT": "own law admits or any barrier/authority/preservation/approval/trust failure", "lineage_status": "the exact resulting lineage classification"}
    },
    "KERNEL_MIGRATION_CUTOVER_VALID": {
      "evaluation_order": ["old-law recovery", "candidate source/provenance", "shape validation", "preservation", "current barriers", "human approval", "single-parent cutover"],
      "outputs": {"ADMIT": "all preserved current state remains equivalent under the candidate", "NO_MIGRATION_REQUIRED": "origin and manifest are identical with no drift", "REJECT": "otherwise"}
    },
    "SOURCE_FREE_CLOSURE": {
      "evaluation_order": [
        "export availability",
        "authority recovery",
        "current Task/Attempt",
        "capability floor",
        "recovery reducer"
      ],
      "outputs": {
        "PASS": "fresh worker derives the same route without source/compiler/corpus",
        "REJECT": "any exported dependency is missing or a required result differs",
        "cold_resume": "PASS when export closure is complete, both exact route/reduced-state snapshots are derivable, and the independently derived warm and source-free cold snapshots are equal; otherwise REJECT for established failure. This is the closure verdict, not the route itself.",
        "closure_status": "The paired warm and source-free cold derived route/reduced-state snapshots fixed by the evaluator, retained as actual-result diagnostics. They are outputs, never premises."
      },
      "inputs": "export availability plus exact authority, current Task/Attempt, selected capability, capability-floor and recovery inputs. In conformance projection evaluation, scoped lower-operator results may stand for their complete source histories. They must be bound to the same head, Task, OperationContract, Attempt, capability, project and current convergence root/epoch as applicable. An input result from CAPABILITY_FLOOR_ALGORITHM is not a SOURCE_FREE_CLOSURE result. Missing, conflicting or mismatched required scope facts do not default to success or empty state. Real-child execution still evaluates every existing gate from current governed state and qualifying evidence.",
      "projection_scope_rule": "CURRENT_TASK_MAP_PROJECTION.authority_head_ref equals AUTHORITY_RECOVERY_PROJECTION.current_head. Its included Task projection_identity is the exact task_ref used by ATTEMPT_ELIGIBILITY_PROJECTION.task_contract_ref and floor/recovery facts; task_id remains the logical Task id in the tasks list and candidate. The exact OperationContract and capability refs in the Task equal the floor-fact operation_ref and capability_ref, whose capability row identifies the selected export. floor_facts.attempt_ref identifies the supplied Attempt. Recovery scope_facts match this head, project, Task, operation and Task convergence root and select the current continuity epoch. All stop, review, repository, intent and capacity facts match their applicable scope keys. The effect_claim_refs inventory is explicit and complete. Symbols needed only for equality may be external; any field read requires its declared projected row.",
      "comparison_rule": "Derive a route and reduced-state snapshot from the complete permitted premises while the selected source is available. After exact assembly and source exclusion, a fresh worker independently derives the same snapshot from only exported bytes and those same premises. Do not provide the warm derived snapshot or either SOURCE_FREE_CLOSURE output as a cold premise. Compare snapshots only after the cold result is fixed. Equality establishes closure, not permission to execute a blocked route. Actual missing exports, incomplete required inputs or differing results never count as PASS; semantic disagreement remains NOT_ESTABLISHED under MM-CONFORMANCE/1."
    }
  },
  "precondition_output_bindings": {
    "ACTIVE_STOP_BARRIER_REQUIRED": "REQUIRE_STOP_STATE.stop_decision must equal BLOCKED and stop_classification must equal ACTIVE_QUALIFIED because exactly one or more current ACTIVE barriers are proven well-formed and eligible for RESUME; AMBIGUOUS_OR_UNKNOWN never satisfies this precondition",
    "RESULT_ACCEPT_LINKS_CURRENT_TASK": "RESULT_ACCEPT_LINKS_CURRENT_TASK.admission_decision must equal ADMIT",
    "TASK_CANCELS_CURRENT_TASK": "TASK_BINDING_MUTATION_ALLOWED.admission_decision must equal ADMIT",
    "FORK_RESOLUTION_VALID": "REPLAY_FORK_RESOLUTION.admission_decision must equal ADMIT",
    "KERNEL_MIGRATION_CUTOVER_VALID": "KERNEL_MIGRATION_CUTOVER_VALID.migration_decision must equal ADMIT"
  }
}
---
# MM-AUTHORITY/1

This is the canonical authority-admission, binding, currentness, and migration
evaluator. `operator_registry` is the sole executable operator vocabulary in
this contract. Transition family/admission shape is consumed only from
`MM-GOVERNING-RECORDS/1#transition_families`; this contract does not restate a
second transition table.

## Mechanical operator result rules

The front-matter `operator_rules` table is normative. Each operator consumes
only the listed projections and returns only its listed outputs. Missing,
malformed, multiply resolved, stale, or conflicting inputs reject, except
where that table explicitly returns `UNKNOWN` or
`AUTHORITY_CURRENTNESS_UNKNOWN`. A precondition that names an operator is
satisfied only by the exact output equality in `precondition_output_bindings`;
the operator name, a prose description, or a truthy input is not sufficient.

In particular, `ACTIVE_STOP_BARRIER_REQUIRED` is not a free-standing boolean:
it is satisfied exactly when `REQUIRE_STOP_STATE.stop_decision == BLOCKED` and
`stop_classification == ACTIVE_QUALIFIED`, because the current barrier reducer found
one or more current, well-formed `ACTIVE` barriers eligible for RESUME. An
empty, malformed, conflicting, or otherwise ambiguous barrier set has
`stop_classification == AMBIGUOUS_OR_UNKNOWN` and does not satisfy RESUME. Likewise,
`RESULT_ACCEPT_LINKS_CURRENT_TASK` and `TASK_CANCELS_CURRENT_TASK` require the
corresponding `ADMIT` output, and a fork or kernel migration precondition
requires the exact named operator's `ADMIT` output.

## 1. Authority transition admission

Positive authority is the admitted chain, never Git state or file presence.
Candidate dependency records are inert until an admitted transition binds them.

For every non-fork transition use this freshness sequence:

1. Recover current durable state and repository currentness.
2. Require one stable singleton current head.
3. Freeze that head as the proposed predecessor.
4. Stage all candidate dependency records as inert data.
5. Immediately before transition durability/admission, re-enumerate and reduce
   the durable current head with the candidate transition excluded.
6. If the head, predecessor relation, binding currentness, or repository
   currentness changed, reject the candidate transition and rebuild it from
   fresh state.
7. Persist the exact validated transition.
8. Re-enumerate and reduce durable state; file presence alone never proves
   admission.

`AUTHORITY_FORK_RESOLVE` uses the exact fork predecessor rule in the governing
transition table instead of the singleton step above.

For an admitted transition-family row declaring `EXACT_BOUND_CONTRACT_SET`,
dispatch to the normative front-matter
`human_subject_binding_rules.EXACT_BOUND_CONTRACT_SET` rule. It resolves every
binding before applying the existing statement-class filter and compares the
complete digest sets with fail-closed duplicate, scope, provenance, and
applicability handling. The other human subject modes remain specialized and
unchanged. `EXECUTION_APPROVAL` is not an authority-transition family; its
consequences are evaluated by the operation floor algorithm and
`MM-HUMAN-CONTROL/2`.

`REVIEW_REQUEST_MATCHES_CURRENT_SUBJECT` is the bounded governing precondition,
not an additional operator. Exact path/digest subjects must match their frozen
bytes. Typed record subjects must resolve exactly to an allowed family and be
current/non-inert under `BINDING_REDUCER` or the exact family reducer. Historical
or non-current bytes use path/digest subjects. Ambiguous, stale, superseded, or
multiply resolved subjects reject.

## 2. Repository-head currentness and candidate binding phase

Repository/Git state is visibility and durability evidence only. Currentness
used to establish predecessor authority is always evaluated under the
`REPOSITORY_BINDING` selected by the last already-admitted authority state.

A candidate `REPOSITORY_BINDING` may be shape-validated and persisted inertly,
but it cannot prove its own admission or predecessor currentness. Only after the
transition that binds it is admitted does it become the current binding, and
repository currentness must then be freshly re-established under that binding
before substantive execution. The existing repository-backed
bootstrap/adoption publication exception can establish candidate publication
visibility, but it creates no project authority.

An authority file absent from the durable persistence-ref commit is inert. A
local HEAD inconsistent with the admitted persistence ref yields
`AUTHORITY_CURRENTNESS_UNKNOWN`. Structural replay from bootstrap Genesis yields
one singleton head, the exact unresolved competing-head set, or no provable
lineage. For `PUSH_ON_BOUNDED_CLOSEOUT`, use a fresh observation:
`REPOSITORY_SYNCED` is current; `LOCAL_AHEAD_REMOTE` is current only for
`SINGLE_WRITER`; remote-ahead, diverged, unknown, or blocked states deny
substantive work. Reconcile without force and replay; fetched children may
expose a fork. `LOCAL_ONLY` is sufficient only for an explicitly bound
`SINGLE_WRITER`.

## 3. Fork resolution phases

Fork resolution has two distinct publication phases.

**Pre-admission:** the complete visible competing-head set, common fork base,
selected winner, exact epoch/sequence rule, and qualifying non-peer enforcement
evidence must establish that a canonical single-winner publication can be
produced. The not-yet-admitted resolution is not required already to exist at
the canonical ref.

**Post-admission:** fresh repository readback must prove the durable canonical
ref contains the admitted fork resolution. This readback is not part of the
named transition precondition; it is an existing repository-currentness barrier
after admission. No successor ordinary transition is lawful before that proof
passes. A late pre-cutover branch cannot revive authority.

## 4. Current bindings and operation floors

`BINDING_REDUCER` is the canonical current-binding reducer; prose aliases are
not executable vocabulary. It reduces current Origin, KernelManifest, intent,
horizon, capabilities, lifecycle, operations, Tasks, reviews, convergence, and
repository binding from admitted authority.

`CAPABILITY_FLOOR_ALGORITHM` is the runtime execution-eligibility evaluator.
It consumes the selected capability, exact **current admitted** Task and
OperationContract, review state, human authority, planned effects, resources,
current horizon, and repository currentness. It first resolves
`OPERATION_CONTRACT_POLICY_RESOLVER` from the exact Task-bound capability
binding and digest-bound selected capability export, then applies the single
closed floor profile in `MM-GOVERNING-RECORDS/1#floors`; capability-specific
logic remains in the selected capability export and no second floor engine
exists.

`CAPABILITY_BIND` does not invoke this Task-dependent runtime evaluator.
`BOUND_OPERATION_CONTRACTS_SATISFY_FLOORS` instead invokes the same
`OPERATION_CONTRACT_POLICY_RESOLVER` for each inert candidate OperationContract
to prove exact policy-source representability while the candidate capability and
operations remain inert.

## 5. Governed kernel migration

A healthy existing project with a provable current law uses `KERNEL_MIGRATE`,
not adoption. The old/current law owns every authority question.

Candidate-current objects—the candidate Origin, candidate KernelManifest, and
records named by the candidate's `candidate_shaped_binding_types`—may be
shape-validated only under the candidate grammar and governing registry
resolved from the fixed Origin-bound paths
`project-runtime/RECORD-GRAMMAR.md` and
`project-runtime/GOVERNING-RECORD-CONTRACTS.md`. Candidate semantics do not
supply predecessor authority, migration approval, source membership,
preservation, barriers, currentness, review applicability, STOP release, Task
authority, convergence capacity, or RepositoryBinding authority.

`KERNEL_MIGRATION_CUTOVER_VALID` therefore executes under the old/current
admitted law: exact-bind candidate Origin and KernelManifest, validate only
candidate shape with candidate semantics, prove current-human migration
approval, preserve current Tasks, review barriers/PASS applicability,
convergence roots/reservations/capacity, STOP state, effects/resources,
RepositoryBinding, lifecycle/horizon, and source-free recovery, then admit one
coherent ordinary single-parent cutover. Identical current Origin/Manifest with
no drift returns `NO_MIGRATION_REQUIRED`.

Changed or removed historical validation contracts required to interpret
retained state remain byte-identical under the existing history closure. The
historical v0.7 families (`RESULT_ACCEPT` record, `REPOSITORY_SYNC_INTENT`,
`OBJECTIVE_RELATION`), old HANDOFF shape, and
`INDEPENDENCE_ASSESSMENT` shape remain interpretable under preserved v0.7 law;
they are not current-schema records for a successor candidate. Historical v0.9
HANDOFF bytes remain preserved under the old law; the current HANDOFF projection
is regenerated from current reducers under the admitted current law. Historical
review PASS evidence remains applicable only if its exact old-law subject and
independence facts remain provable; it is never laundered through the successor
schema.

The kernel migration then performs current successor checks: it revalidates
runtime provenance, convergence quantity domains and reservation histories,
intent supersession mappings, Task-review selection, effect targets, and route
dependencies under the candidate schema. These checks cannot reset capacity,
clear an unresolved effect, rewrite a historical intent relation, or replace
an old child capability's resource policy. The software capability's
`IMPLEMENTATION` serial path is a `CAPABILITY_MIGRATE` policy change: existing
children retain their bound `PROJECT_SPECIFIC` requirement until that
capability migration is lawfully admitted.

Adoption is eligible only when the subject has no provable positive lineage or
the old law rejects solely on the already-defined candidate-shape escape hatch.
If the old law can admit the candidate, adoption rejects.

### Historical admission status is an old-law replay result

The successor evaluator never decides whether its predecessor was admitted.
When a migration attempt is missing, damaged, or unparsable in the present
materialization, classify it only by replay under the exact predecessor law
and complete retained persistence evidence. Resolve that law from the exact
admitted predecessor history and its preserved law bytes; never substitute the
newest Authority document or the successor candidate's semantics for a
historical question.

For this purpose, the evaluator uses the exact closed disposable projection
defined here. Each retained snapshot is the object
`{provider,repository_identity,persistence_ref,snapshot_commit,parent_commits,
tree_identity,durable_status}`. `provider` is `ascii_token`;
`repository_identity` is an exact UTF-8 `unicode_scalar_string` with no
normalization; `persistence_ref` is `canonical_logical_path`; and
`snapshot_commit`, every ordered unique `parent_commits` member, and
`tree_identity` are 40-character lowercase-hex `git_object_id` values.
`durable_status` is exactly `DURABLE_RETAINED`, `NOT_DURABLE`, or
`DURABILITY_UNKNOWN`, of which only `DURABLE_RETAINED` passes. The evaluator
derives that status from protected proof of immutable retention and exact tree
identity; it never trusts an unverified provider field.

The canonical encoder is a function, not generic JSON serialization. For an
object with prescribed member sequence `(k1,v1)...(kn,vn)`, emit `{`, then for
each member in that sequence emit `Q(ki)`, `:`, and `V(vi)`, inserting `,` only
between members, and finally emit `}`. Emit UTF-8 bytes with no whitespace or
BOM. `Q(s)` emits a quote, then each Unicode scalar of `s`: U+0000 through
U+001F become `\u` plus exactly four lowercase hexadecimal digits (including
line feed and tab); U+0022 becomes `\"`; U+005C becomes `\\`; every other
scalar is emitted as UTF-8 without normalization or escaping; then emit the
closing quote. `V` encodes a string/enum with `Q`, a list as brackets with
comma-separated members in declared list order, and an object recursively by
its fixed member sequence. No other value type occurs here.

The snapshot-item member sequence is exactly
`provider,repository_identity,persistence_ref,snapshot_commit,parent_commits,
tree_identity,durable_status`; the writer-head sequence is exactly
`writer_identity,head_commit`; Genesis boundary is exactly
`kind,boundary_commit`; retention-cutoff is exactly
`kind,boundary_commit,proof_assurance,proof_digest,mechanical_proof_locator`;
and protected observation is exactly
`observation_kind,provider,repository_identity,persistence_ref,writer_model,
writer_heads,retention_boundary,inventory_digest,observed_at,proof_assurance,
proof_digest,mechanical_proof_locator`. Alternate key order, short `\n`/`\t`
escapes, uppercase `\u` digits, unnecessary escapes, whitespace,
normalization, duplicate keys, or extra members are invalid. The inventory is
the concatenation of exactly one encoded unique item followed by one LF, sorted by
provider, repository identity, persistence ref, and snapshot commit in UTF-8 /
ASCII-byte order, including one final LF. Its identity is lowercase SHA-256
`sha256_hex`.

The exact protected observation has only these members:
`observation_kind=RETAINED_SNAPSHOT_INVENTORY`, `provider`,
`repository_identity`, `persistence_ref`, `writer_model` (exactly
`SINGLE_WRITER` or `MULTI_WRITER`), `writer_heads` (unique sorted objects
`{writer_identity: unicode_scalar_string,head_commit: git_object_id}` with
exactly those members in that order),
`retention_boundary`, `inventory_digest`, `observed_at` as
`rfc3339_utc_timestamp`, `proof_assurance` (exactly
`REMOTE_MECHANICAL_PROOF` or `PROTECTED_ATTESTATION`), `proof_digest` as
`sha256_hex`, and a nonempty `mechanical_proof_locator`. The proof bytes at
the locator must hash to `proof_digest`, be independently authenticated by an
observer distinct from the bound writer under the stated assurance, and bind
the complete scope. `REMOTE_MECHANICAL_PROOF` requires an authenticated remote
mechanical response; `PROTECTED_ATTESTATION` requires an authenticated
protected attestation; `PEER_DECLARATION` and `LOCAL_MECHANICAL_PROOF` do not
pass. An unverified provider assertion, local filename, or unbound response is
not protected proof. The canonical observation uses the exact encoder above;
`writer_heads` is nonempty for `MULTI_WRITER`, sorted by
writer-identity UTF-8 bytes, and contains no duplicate writer or head. The
boundary is exactly `{kind: GENESIS, boundary_commit: git_object_id}`,
where that item contains the predecessor Genesis, or
`{kind: RETENTION_CUTOFF, boundary_commit: git_object_id,
proof_assurance, proof_digest, mechanical_proof_locator}`, where the protected
proof binds that no older snapshot is retained in the exact scope. A guessed,
mutable, omitted, or unprotected cutoff is incomplete.

The observation must match the exact last-admitted binding's provider,
repository identity, persistence ref, and writer model. For `SINGLE_WRITER`,
the derived head set is exactly one `(writer_identity=persistence_ref,
head_commit=the protected ref resolution)` pair; any additional permitted head
is an inconsistency. For `MULTI_WRITER`, it is exactly the protected sorted
head list, and the proof must bind the complete finite writer namespace for
that repository/ref with one head per permitted writer. If that namespace is
not finite and authenticated, the result is unknown.

From every derived head, follow every ordered parent edge with a finite visited
set through the declared boundary. The inventory is complete only when every
visited commit has one matching item and `DURABLE_RETAINED`, every parent is
visited or the boundary, every head is present, the inventory digest matches,
and the observation is one durable read of the head namespace, item set, and
boundary. Missing parents/items, duplicate identities, digest mismatch,
unbounded retention, unresolved heads, or an unclosed path make the inventory
incomplete. Unbound refs, arbitrary object searches, backups, worktrees, and
sequence/file order are not evidence of completeness.

Historical invalidity is proved only by a complete negative durable-publication
boundary for the exact attempted transition, or by a retained complete
snapshot in which old-law replay returns `REJECT` and traversal of every
complete canonical path from that rejected snapshot through every later
derived head replays every later item under the exact old law and finds no
snapshot in which that transition returns `ADMIT`. The damaged observation
must itself be an exact item in the complete retained inventory; worktree-only
damage supplies no historical continuity proof. Construct child edges from the
exact ordered parent lists, and fully replay every competing path, including
paths that do not reach the damaged observation. A missing or unreplayed path,
an unclosed parent edge, or an unresolved later head yields unknown; complete
inventory enumeration alone is not replay evidence. A replay-complete snapshot
contains the predecessor Genesis/chain and old validation closure, candidate
dependency closure, exact approval, transition, and matching
repository/currentness inputs, with every exact byte/reference resolved under
that snapshot's law. Absence from a worktree, branch, remote observation, or
incomplete current enumeration; a harness or worker claim; a filename or
sequence number; and present-day parse failure are not such proof. Partial or
missing inputs remain unproven.

Prior admission is proved only by a retained complete snapshot containing the
old-law Genesis/chain, candidate dependencies, exact migration approval,
transition, and relevant repository evidence sufficient for old-law replay to
return `ADMIT`. Later loss or corruption restores those exact bound bytes and
lineage; it does not replace the transition or reuse its sequence.

If neither result is provable, retain the applicable existing authority
recovery, currentness-unknown, or unresolved-fork outcome. Do not infer
invalidity, choose a largest sequence, roll back, adopt, or exclude a possible
branch. These are evaluator procedures over existing projections and outputs;
they add no operator, result value, or successor-law escape hatch.

## 6. Source-free closure

`SOURCE_FREE_CLOSURE` uses the exported runtime, exact six admitted contracts,
current governed records, and selected capability semantics. It requires no
original compiler/distribution, hidden state, database, service, index, or prior
chat. Handoff may orient a worker but never seeds authority.
