---
{
  "record_type": "RECOVERY_STATE_EVALUATION_PROFILE",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.4.0",
  "profile_id": "MM-RECOVERY-REDUCER/1",
  "authoritative_contract": true,
  "project_output_eligible": true,
  "materialization_rule": "EXACT_EXPORT_REQUIRED",
  "revision_chain_rule": {
    "initial_revision": 0,
    "initial_predecessor_ref": "MUST_BE_ABSENT",
    "successor_revision": "EXACTLY_predecessor.revision_PLUS_1",
    "successor_predecessor": "MUST_RESOLVE_SAME_RECORD_TYPE_AND_SAME_IDENTITY_KEY",
    "current_revision": "UNIQUE_VALID_LEAF_ONLY",
    "multiple_valid_leaves": "STATE_UNKNOWN_DENY_EXECUTION",
    "missing_revision_or_predecessor": "INVALID"
  },
  "families": {
    "STOP_INTENT_BARRIER": {
      "identity_key": [
        "barrier_id"
      ],
      "predecessor_field": "predecessor_barrier_ref",
      "state_field": "state",
      "initial_state": "ACTIVE",
      "allowed_state_edges": {
        "ACTIVE": [
          "RELEASED"
        ],
        "RELEASED": []
      },
      "immutable_fields": [
        "project_id",
        "barrier_id",
        "stop_class",
        "human_statement_ref",
        "activation_transition_ref"
      ],
      "initial_requirements": {
        "activation_transition_type": "STOP",
        "human_statement_class": "STOP",
        "activation_transition_human_authority_contains": "human_statement_ref"
      },
      "release_requirements": {
        "released_by_resume_ref": "REQUIRED",
        "release_transition_ref": "REQUIRED",
        "resume_statement_class": "RESUME",
        "release_transition_type": "RESUME",
        "release_transition_human_authority_contains": "released_by_resume_ref",
        "release_transition_must_descend_from": "activation_transition_ref"
      },
      "coverage": "EVERY_ADMITTED_STOP_TRANSITION_MUST_HAVE_EXACTLY_ONE_VALID_REVISION_0_BARRIER_REFERENCING_IT",
      "project_reducer": "IF_ANY_BARRIER_CHAIN_UNKNOWN_OR_ANY_ADMITTED_STOP_LACKS_COVERAGE_THEN_STOP_STATE_UNKNOWN_DENY;ELSE_IF_ANY_CURRENT_BARRIER_ACTIVE_THEN_STOPPED;ELSE_NOT_STOPPED",
      "edge_guards": {
        "ACTIVE->RELEASED": [
          {
            "op": "ADMITTED_RESUME_TRANSITION_PROVEN",
            "args": {}
          }
        ]
      }
    },
    "INBOX_ITEM": {
      "identity_key": [
        "item_id"
      ],
      "predecessor_field": "predecessor_item_ref",
      "state_field": "disposition",
      "initial_state": "RECEIVED",
      "allowed_state_edges": {
        "RECEIVED": [
          "TRIAGED",
          "DEFERRED",
          "REJECTED",
          "DUPLICATE",
          "ALREADY_SATISFIED",
          "NEEDS_HUMAN_DECISION"
        ],
        "TRIAGED": [
          "IMPACT_ANALYZED",
          "DEFERRED",
          "REJECTED",
          "DUPLICATE",
          "ALREADY_SATISFIED",
          "NEEDS_HUMAN_DECISION"
        ],
        "IMPACT_ANALYZED": [
          "ACCEPTED_FOR_INCORPORATION",
          "DEFERRED",
          "REJECTED",
          "ALREADY_SATISFIED",
          "NEEDS_HUMAN_DECISION"
        ],
        "NEEDS_HUMAN_DECISION": [
          "IMPACT_ANALYZED",
          "ACCEPTED_FOR_INCORPORATION",
          "DEFERRED",
          "REJECTED"
        ],
        "DEFERRED": [
          "TRIAGED",
          "SUPERSEDED"
        ],
        "ACCEPTED_FOR_INCORPORATION": [
          "SUPERSEDED"
        ],
        "REJECTED": [
          "SUPERSEDED"
        ],
        "DUPLICATE": [
          "SUPERSEDED"
        ],
        "ALREADY_SATISFIED": [
          "SUPERSEDED"
        ],
        "SUPERSEDED": []
      },
      "immutable_fields": [
        "project_id",
        "item_id",
        "provenance_class",
        "source_text",
        "receipt_authority_ref"
      ],
      "project_reducer": "CURRENT_ITEM_IS_UNIQUE_VALID_LEAF;AMBIGUOUS_CHAIN_IS_INBOX_STATE_UNKNOWN;NO_DISPOSITION_DIRECTLY_AUTHORIZES_EXECUTION"
    },
    "ATTEMPT_RECORD": {
      "identity_key": [
        "attempt_id"
      ],
      "predecessor_field": "predecessor_attempt_ref",
      "state_field": "state",
      "initial_state": "PLANNED",
      "allowed_state_edges": {
        "PLANNED": [
          "COMMENCEMENT_ACCEPTED",
          "CANCELLED",
          "STATE_UNKNOWN"
        ],
        "COMMENCEMENT_ACCEPTED": [
          "RUNNING",
          "RESULT_RECORDED",
          "FAILED",
          "CANCELLED",
          "STATE_UNKNOWN"
        ],
        "RUNNING": [
          "RESULT_RECORDED",
          "FAILED",
          "CANCELLED",
          "STATE_UNKNOWN"
        ],
        "STATE_UNKNOWN": [
          "RESULT_RECORDED",
          "FAILED",
          "CANCELLED",
          "STATE_UNKNOWN"
        ],
        "RESULT_RECORDED": [],
        "FAILED": [],
        "CANCELLED": []
      },
      "immutable_fields": [
        "project_id",
        "attempt_id",
        "task_contract_ref",
        "convergence_root_ref",
        "worker_assignment_ref",
        "enforcement_plan_ref",
        "convergence_reservation_ref"
      ]
    },
    "EFFECT_CLAIM": {
      "identity_key": [
        "claim_id"
      ],
      "predecessor_field": "predecessor_effect_claim_ref",
      "state_field": "state",
      "initial_state": "CLAIMED_NOT_STARTED",
      "allowed_state_edges": {
        "CLAIMED_NOT_STARTED": [
          "COMMENCEMENT_ACCEPTED",
          "DEFINITELY_NOT_MATERIALIZED",
          "EXTERNAL_EFFECT_UNKNOWN"
        ],
        "COMMENCEMENT_ACCEPTED": [
          "OUTCOME_PENDING",
          "CONFIRMED",
          "EXTERNAL_EFFECT_UNKNOWN"
        ],
        "OUTCOME_PENDING": [
          "CONFIRMED",
          "EXTERNAL_EFFECT_UNKNOWN"
        ],
        "EXTERNAL_EFFECT_UNKNOWN": [
          "CONFIRMED",
          "DEFINITELY_NOT_MATERIALIZED",
          "EXTERNAL_EFFECT_UNKNOWN"
        ],
        "CONFIRMED": [],
        "DEFINITELY_NOT_MATERIALIZED": []
      },
      "immutable_fields": [
        "project_id",
        "claim_id",
        "task_contract_ref",
        "effect_class",
        "target_identity"
      ],
      "edge_guards": {
        "EXTERNAL_EFFECT_UNKNOWN->DEFINITELY_NOT_MATERIALIZED": [
          {
            "op": "EFFECT_DEFINITE_NON_MATERIALIZATION_PROVEN",
            "args": {}
          }
        ]
      }
    },
    "RESOURCE_RESERVATION": {
      "identity_key": [
        "reservation_id"
      ],
      "predecessor_field": "predecessor_resource_reservation_ref",
      "state_field": "state",
      "initial_state": "RESERVED",
      "allowed_state_edges": {
        "RESERVED": [
          "RELEASED",
          "UNKNOWN"
        ],
        "UNKNOWN": [
          "RESERVED",
          "RELEASED",
          "UNKNOWN"
        ],
        "RELEASED": []
      },
      "immutable_fields": [
        "project_id",
        "reservation_id",
        "task_contract_ref",
        "resource_identity",
        "reservation_mode"
      ],
      "edge_guards": {
        "UNKNOWN->RESERVED": [
          {
            "op": "RESOURCE_REACQUISITION_PROVEN",
            "args": {}
          }
        ]
      }
    },
    "CONVERGENCE_RESERVATION": {
      "identity_key": [
        "reservation_id"
      ],
      "predecessor_field": "predecessor_convergence_reservation_ref",
      "state_field": "state",
      "initial_state": "RESERVED",
      "allowed_state_edges": {
        "RESERVED": [
          "COMMITTED",
          "RELEASED",
          "UNCERTAIN"
        ],
        "UNCERTAIN": [
          "COMMITTED",
          "RELEASED",
          "UNCERTAIN"
        ],
        "COMMITTED": [],
        "RELEASED": []
      },
      "immutable_fields": [
        "project_id",
        "reservation_id",
        "convergence_root_ref",
        "convergence_tranche_ref",
        "dimension_ids",
        "reserved_capacity_values"
      ],
      "edge_guards": {
        "UNCERTAIN->RELEASED": [
          {
            "op": "CONVERGENCE_UNCERTAIN_RELEASE_PROVEN",
            "args": {}
          }
        ]
      }
    }
  },
  "immutable_evidence_families": [
    "INDEPENDENCE_ASSESSMENT",
    "REVIEW_RESULT",
    "ENFORCEMENT_ASSESSMENT",
    "ENFORCEMENT_PLAN",
    "WORKER_REQUIREMENT",
    "WORKER_ASSIGNMENT",
    "CONTEXT_REPRESENTATION",
    "CONTEXT_ROUTE",
    "EXTERNAL_SUBJECT",
    "EXTERNAL_OBSERVATION",
    "OBJECTIVE_RELATION",
    "FORK_RESOLUTION_PLAN"
  ],
  "unknown_family": "REJECT_FOR_RECOVERY_IF_RECORD_CAN_CHANGE_EXECUTION_ELIGIBILITY_OR_SAFETY",
  "natural_language_extension": "FORBIDDEN",
  "edge_guard_operator_form": {
    "required_keys": [
      "op",
      "args"
    ],
    "unknown_keys": "REJECT",
    "unknown_operator": "REJECT"
  },
  "edge_guard_operator_registry": {
    "EFFECT_DEFINITE_NON_MATERIALIZATION_PROVEN": {
      "args": {},
      "semantics": "REQUIRE_LIVE_NON_PEER_EXTERNAL_OBSERVATION_BOUND_TO_EXACT_PREDECESSOR_EFFECT_CLAIM_REF_AND_REVISION_WITH_DEFINITE_NON_MATERIALIZATION_AND_TARGET_IDENTITY_MATCH"
    },
    "CONVERGENCE_UNCERTAIN_RELEASE_PROVEN": {
      "args": {},
      "semantics": "REQUIRE_EITHER_LIVE_NON_PEER_DEFINITE_NON_COMMENCEMENT_OBSERVATION_BOUND_TO_EXACT_PREDECESSOR_RESERVATION_REF_AND_REVISION_OR_CANCELLED_ATTEMPT_WHOSE_convergence_reservation_ref_EXACTLY_EQUALS_PREDECESSOR_AND_NEVER_COMMENCED"
    },
    "RESOURCE_REACQUISITION_PROVEN": {
      "args": {},
      "semantics": "TARGET_STATE_MUST_BE_RESERVED_AND_RESOURCE_RESERVATION_PROOF_VALID_MUST_PASS_AND_TARGET.proof_refs_MUST_CONTAIN_AT_LEAST_ONE_REF_NOT_PRESENT_IN_PREDECESSOR.proof_refs"
    },
    "CONVERGENCE_CONTINUITY_SAFE_CAPACITY_VALID": {
      "args": {},
      "semantics": "UNKNOWN_OR_SINGLE_SESSION=>ZERO;EXACT_CONTINUOUS_ACCOUNTING=>LIVE_QUALIFIED_ENFORCEMENT_PROOF_AND_safe_values_EQUAL_MM-CONVERGENCE-CAPACITY/1_RESIDUAL;PROTECTED_EXACT_REMAINING=>LIVE_REMOTE_OR_PROTECTED_OBSERVATION_BOUND_TO_root_epoch_dimensions_values;ELSE_REJECT"
    },
    "ADMITTED_RESUME_TRANSITION_PROVEN": {
      "args": {},
      "semantics": "release_transition_ref_RESOLVES_TO_RESUME_IN_VALID_ADMITTED_ANCESTRY_FROM_MM-AUTHORITY-CURRENTNESS/1;released_by_resume_ref_IN_transition.human_authority_refs;statement_class_RESUME;CURRENT_HUMAN_ASSURANCE;subject_refs_EXACTLY_transition.predecessor_transition_refs"
    }
  },
  "assessment_guards": {
    "CONVERGENCE_CONTINUITY_ASSESSMENT": [
      {
        "op": "CONVERGENCE_CONTINUITY_SAFE_CAPACITY_VALID",
        "args": {}
      }
    ]
  },
  "edge_evaluation_order": [
    "REVISION_CHAIN_VALID",
    "STATE_EDGE_ALLOWED",
    "IMMUTABLE_FIELDS_UNCHANGED",
    "EDGE_GUARDS_IN_LIST_ORDER",
    "FAMILY_PROJECT_REDUCER"
  ],
  "authority_currentness_evaluation_profile": "MM-AUTHORITY-CURRENTNESS/1",
  "convergence_capacity_evaluator": {
    "profile_id": "MM-CONVERGENCE-CAPACITY/1",
    "tranche_source": "CURRENT_BINDING_STATE.CONVERGENCE_TRANCHE",
    "reservation_source": "UNIQUE_CURRENT_CONVERGENCE_RESERVATION_LEAVES",
    "charged_states": [
      "RESERVED",
      "COMMITTED",
      "UNCERTAIN"
    ],
    "released_state_charge": 0,
    "new_reservation_rule": "SUM(existing_charged_values_excluding_same_reservation_id)+candidate.values<=tranche.granted_values_PER_DIMENSION",
    "committed_reservation": "PERMANENTLY_CHARGED",
    "uncertain_reservation": "CHARGED_UNTIL_VALID_RELEASE_OR_COMMIT",
    "released_reservation": "UNCHARGED_ONLY_AFTER_VALID_RELEASE_GUARD",
    "ambiguous_revision_chain": "ZERO_SAFE_AND_BLOCK",
    "initial_tranche_rule": "INTENT_ACCEPT_BINDS_EXACT_epoch0_TRANCHE_EQUAL_CURRENT_POLICY_TOTALS"
  },
  "capacity_operator_form": {
    "required_keys": [
      "op",
      "args"
    ],
    "unknown_keys": "REJECT",
    "unknown_operator": "REJECT"
  },
  "capacity_operator_registry": {
    "LOAD_CURRENT_TRANCHES": {
      "args": [],
      "semantics": "LOAD_CURRENT_BINDING_APPEND_ONLY_CONVERGENCE_TRANCHES"
    },
    "LOAD_CURRENT_RESERVATION_LEAVES": {
      "args": [],
      "semantics": "REDUCE_EACH_RESERVATION_ID_TO_UNIQUE_VALID_LEAF;AMBIGUOUS_CHAIN_BLOCKS"
    },
    "CHARGE_STATES": {
      "args": {
        "states": "list<ascii_id>"
      },
      "semantics": "FOR_EACH_CURRENT_RESERVATION_IN_states_ADD_RESERVED_VALUES_TO_REFERENCED_TRANCHE_PER_DIMENSION"
    },
    "VERIFY_TRANCHE_BOUNDS": {
      "args": [],
      "semantics": "FOR_EACH_TRANCHE_DIMENSION_REQUIRE_NONNEGATIVE_SUM_LESS_THAN_OR_EQUAL_GRANTED_CAPACITY_SAFE_INTEGER"
    },
    "EVALUATE_NEW_RESERVATION": {
      "args": [],
      "semantics": "EXCLUDE_SAME_reservation_id_CURRENT_CHARGE_THEN_ADD_CANDIDATE_VALUES_AND_REQUIRE_BOUNDS"
    },
    "EMIT_SAFE_RESIDUAL": {
      "args": [],
      "semantics": "ONLY_WHEN_CONTINUITY_PROOF_CLASS_AUTHORIZES_COMPUTATION;ELSE_ZERO"
    }
  },
  "capacity_program": [
    {
      "op": "LOAD_CURRENT_TRANCHES",
      "args": {}
    },
    {
      "op": "LOAD_CURRENT_RESERVATION_LEAVES",
      "args": {}
    },
    {
      "op": "CHARGE_STATES",
      "args": {
        "states": [
          "RESERVED",
          "COMMITTED",
          "UNCERTAIN"
        ]
      }
    },
    {
      "op": "VERIFY_TRANCHE_BOUNDS",
      "args": {}
    },
    {
      "op": "EVALUATE_NEW_RESERVATION",
      "args": {}
    },
    {
      "op": "EMIT_SAFE_RESIDUAL",
      "args": {}
    }
  ]
}
---
# Recovery State Evaluation Profile

This profile defines deterministic currentness for revisioned recovery state. Shapes alone are insufficient.

Revision chains are keyed, monotonic, and predecessor-linked. A forked or incomplete chain becomes an explicit unknown state and cannot silently enable execution. STOP release requires a valid admitted `RESUME` transition and matching human `RESUME` statement; an unbacked `RELEASED` record is invalid. Inbox dispositions never authorize execution directly.
