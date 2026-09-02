---
{
  "record_type": "AUTHORITY_CURRENTNESS_EVALUATION_PROFILE",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.5.1",
  "profile_id": "MM-AUTHORITY-CURRENTNESS/1",
  "authoritative_contract": true,
  "project_output_eligible": true,
  "materialization_rule": "EXACT_EXPORT_REQUIRED",
  "input_families": [
    "PROJECT_GENESIS",
    "AUTHORITY_TRANSITION",
    "PUBLICATION_OUTCOME_RECEIPT",
    "AUTHORITY_CURRENTNESS_OBSERVATION"
  ],
  "genesis_rule": {
    "preconditions": [
      "DIRECT_HUMAN_GENESIS_ADMISSION/v2 == PASS"
    ],
    "initial_authority_state": "SINGLETON",
    "initial_head": "PROJECT_GENESIS_DIGEST",
    "initial_epoch": 0,
    "initial_sequence": 0
  },
  "publication_rule": {
    "transition_publication_plan": "AUTHORITY_TRANSITION.publication_mechanism_plan_ref",
    "receipt_key": [
      "transition_ref",
      "publication_mechanism_plan_ref"
    ],
    "receipt_cardinality": "EXACTLY_ONE",
    "required_receipt_result": "PUBLISHED",
    "missing_or_conflicting_receipt": "AUTHORITY_PUBLICATION_UNKNOWN",
    "receipt_proof": "PUBLICATION_OUTCOME_RECEIPT_MUST_PASS_AUTHORITY_PUBLICATION_RECEIPT_PROOF_VALID"
  },
  "currentness_observation_rule": {
    "identity_key": [
      "observed_transition_ref",
      "canonical_target"
    ],
    "revision_field": "revision",
    "predecessor_field": "predecessor_currentness_observation_ref",
    "revision_zero_predecessor": "ABSENT",
    "later_revision": "EXACTLY_ONE_PREDECESSOR_SAME_IDENTITY_AND_revision_PLUS_1",
    "current_leaf": "UNIQUE_VALID_LEAF",
    "forked_or_missing_leaf": "AUTHORITY_CURRENTNESS_UNKNOWN",
    "usable_leaf_result": "CURRENT",
    "proof_rule": "LEAF_MUST_PASS_AUTHORITY_CURRENTNESS_OBSERVATION_PROOF_VALID_AND_EXTERNAL_PROOF_LIVE_REVALIDATION",
    "freshness_rule": "observed_at <= evaluation_context.evaluation_time <= freshness_deadline_USING_EXACT_rfc3339_utc_timestamp_ORDER",
    "expired_leaf": "AUTHORITY_CURRENTNESS_UNKNOWN"
  },
  "ordinary_replay": {
    "pre_state": "SINGLETON(current_head)",
    "candidate_children": "STRUCTURALLY_VALID_TRANSITIONS_WITH_ONE_PREDECESSOR_EQUAL_current_head",
    "admission_evaluation": "MM-TRANSITION-EVAL/1_AGAINST_PRE_STATE",
    "publication_evaluation": "publication_rule_AND_currentness_observation_rule",
    "zero_usable_children": "KEEP_current_head",
    "one_usable_child": "ADVANCE_TO_child",
    "more_than_one_usable_child": "AUTHORITY_FORK_UNRESOLVED_WITH_COMPLETE_VISIBLE_HEAD_SET"
  },
  "fork_replay": {
    "pre_state": "AUTHORITY_FORK_UNRESOLVED(head_set,fork_base)",
    "ordinary_children": "DO_NOT_ADVANCE",
    "eligible_resolution": "AUTHORITY_FORK_RESOLVE_WITH_predecessor_set_EXACTLY_head_set_AND_ADMISSION_PASS_AND_FORK_PUBLICATION_GUARANTEE_PASS_AND_PUBLICATION_CURRENTNESS_PASS",
    "zero_eligible_resolution": "KEEP_FORK_UNRESOLVED",
    "one_eligible_resolution": "ADVANCE_TO_SINGLETON_RESOLUTION_HEAD",
    "more_than_one_eligible_resolution": "AUTHORITY_FORK_UNRESOLVED_WITH_current_head_refs_EQUAL_ALL_ELIGIBLE_RESOLUTION_HEADS_AND_fork_base_UNCHANGED;NEXT_AUTHORITY_FORK_RESOLVE_MAY_RESOLVE_THIS_NEW_HEAD_SET"
  },
  "epoch_cutover": {
    "resolution_transition_epoch": "MAX(parent_epochs)+1",
    "resolution_sequence": 0,
    "late_transition_from_older_epoch_not_descendant_of_current_epoch_base": "LATE_PRE_CUTOVER_BRANCH_HISTORICAL_DENY_ONLY",
    "late_branch_may_create": [
      "EFFECT_UNCERTAINTY",
      "SECURITY_QUARANTINE",
      "HUMAN_REVIEW_REQUIREMENT"
    ],
    "late_branch_may_become_positive_head": false
  },
  "output": {
    "states": [
      "SINGLETON",
      "AUTHORITY_FORK_UNRESOLVED",
      "AUTHORITY_CURRENTNESS_UNKNOWN"
    ],
    "singleton_fields": [
      "current_head_ref",
      "authority_epoch",
      "sequence"
    ],
    "fork_fields": [
      "fork_base_ref",
      "current_head_refs"
    ],
    "unknown_is_execution_eligible": false
  },
  "natural_language_extension": "FORBIDDEN",
  "operator_form": {
    "required_keys": [
      "op",
      "args"
    ],
    "unknown_keys": "REJECT",
    "unknown_operator": "REJECT"
  },
  "operator_registry": {
    "VALIDATE_GENESIS_BASE": {
      "args": [],
      "semantics": "REQUIRE_EXACTLY_ONE_BOOTSTRAP_ADMITTED_PROJECT_GENESIS_AT_0_0"
    },
    "INDEX_PUBLICATION_RECEIPTS": {
      "args": [],
      "semantics": "KEY_BY_transition_ref_AND_publication_mechanism_plan_ref;EXACTLY_ONE_PUBLISHED_RECEIPT_REQUIRED;RECEIPT_MUST_PASS_AUTHORITY_PUBLICATION_RECEIPT_PROOF_VALID;CONFLICT_ABSENCE_OR_UNPROVEN_RECEIPT_UNKNOWN"
    },
    "REDUCE_CURRENTNESS_OBSERVATIONS": {
      "args": [],
      "semantics": "KEY_BY_observed_transition_ref_AND_canonical_target;VALIDATE_REVISION_CHAIN;UNIQUE_LEAF_REQUIRED;LEAF_MUST_PASS_AUTHORITY_CURRENTNESS_OBSERVATION_PROOF_VALID_AND_LIVE_REVALIDATION;CURRENT_RESULT_AND_FRESH_WINDOW_AT_evaluation_context.evaluation_time_REQUIRED_FOR_USABLE_TRANSITION"
    },
    "REPLAY_SINGLETON_CHILDREN": {
      "args": [],
      "semantics": "FROM_current_singleton_EVALUATE_STRUCTURAL_ADMISSION_PUBLICATION_CURRENTNESS_FOR_EVERY_DIRECT_CHILD;0_KEEP;1_ADVANCE;MORE_THAN1_FORK"
    },
    "REPLAY_FORK_RESOLUTION": {
      "args": [],
      "semantics": "WHILE_FORKED_ONLY_AUTHORITY_FORK_RESOLVE_WITH_EXACT_HEAD_SET_AND_CANONICAL_SINGLE_WINNER_CUTOVER_GUARANTEE_MAY_ADVANCE;0_KEEP_FORK;1_ADVANCE;MORE_THAN1_EMIT_NEW_FORK_WITH_RESOLUTION_HEAD_SET_NOT_UNRECOVERABLE_UNKNOWN"
    },
    "APPLY_EPOCH_CUTOVER": {
      "args": [],
      "semantics": "AFTER_VALID_RESOLUTION_OLDER_EPOCH_NON_DESCENDANT_LATE_BRANCHES_ARE_HISTORICAL_DENY_ONLY_AND_CANNOT_REOPEN_POSITIVE_HEAD"
    },
    "EMIT_AUTHORITY_STATE": {
      "args": [],
      "semantics": "EMIT_EXACTLY_ONE_OF_SINGLETON,FORK_UNRESOLVED,CURRENTNESS_UNKNOWN_WITH_REQUIRED_FIELDS"
    },
    "VALIDATE_EVALUATION_CONTEXT": {
      "args": [],
      "semantics": "REQUIRE_evaluation_context.evaluation_time_VALID_rfc3339_utc_timestamp;MISSING_OR_INVALID_EMITS_CURRENTNESS_UNKNOWN"
    }
  },
  "reducer_program": [
    {
      "op": "VALIDATE_GENESIS_BASE",
      "args": {}
    },
    {
      "op": "VALIDATE_EVALUATION_CONTEXT",
      "args": {}
    },
    {
      "op": "INDEX_PUBLICATION_RECEIPTS",
      "args": {}
    },
    {
      "op": "REDUCE_CURRENTNESS_OBSERVATIONS",
      "args": {}
    },
    {
      "op": "REPLAY_SINGLETON_CHILDREN",
      "args": {}
    },
    {
      "op": "REPLAY_FORK_RESOLUTION",
      "args": {}
    },
    {
      "op": "APPLY_EPOCH_CUTOVER",
      "args": {}
    },
    {
      "op": "EMIT_AUTHORITY_STATE",
      "args": {}
    }
  ],
  "evaluation_context": {
    "required_fields": {
      "evaluation_time": "rfc3339_utc_timestamp"
    },
    "source_rule": "CONSUMING_ADMISSION_OR_EXECUTION_EVALUATOR_SUPPLIES_CURRENT_OBSERVATION_TIME;NO_STORED_RECORD_MAY_SELF_DECLARE_THE_EVALUATION_TIME",
    "missing_or_invalid": "AUTHORITY_CURRENTNESS_UNKNOWN"
  }
}
---
# Authority Currentness Evaluation Profile

Exact project-local positive-authority currentness reducer. Positive authority is usable only while its exact canonical-target observation remains mechanically proven, live-revalidated, and inside its explicit freshness window. Multiple successful fork-resolution heads remain a resolvable fork; they never become an unrecoverable positive-authority state.
