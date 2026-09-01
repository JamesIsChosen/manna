---
{
  "record_type": "CONTRACT_EVALUATION_PROFILE",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.5.1",
  "profile_id": "MM-CONTRACT-EVAL/1",
  "authoritative_contract": true,
  "project_output_eligible": true,
  "materialization_rule": "EXACT_EXPORT_REQUIRED",
  "field_descriptor_kinds": [
    "primitive",
    "ref",
    "list",
    "object"
  ],
  "reference_rules": {
    "ref_descriptor_required_keys": [
      "kind",
      "target_record_types"
    ],
    "allowed_ref_keys": [
      "kind",
      "target_record_types",
      "target_identity",
      "same_project",
      "target_field_equals_self_field"
    ],
    "target_record_types_nonempty": true,
    "target_identity_form": {
      "field": "ascii_id",
      "equals": "unicode_scalar_string"
    },
    "same_project_semantics": "IF_TRUE_REFERENT_PROJECT_ID_MUST_EQUAL_SELF_PROJECT_ID_AND_REFERENT_MUST_HAVE_PROJECT_ID",
    "target_field_equals_self_field_semantics": "REFERENT_NAMED_FIELD_EXACTLY_EQUALS_SELF_NAMED_FIELD",
    "unresolved_reference": "INVALID",
    "wrong_target_type": "INVALID",
    "wrong_target_identity": "INVALID"
  },
  "list_descriptor_rules": {
    "required_keys": [
      "kind",
      "items"
    ],
    "allowed_keys": [
      "kind",
      "items",
      "min_items",
      "max_items",
      "set_semantics"
    ],
    "set_semantics_duplicate": "INVALID"
  },
  "cross_record_predicates": {
    "REF_FIELD_EQUALS_REF_FIELD": {
      "required_args": [
        "left_ref_field",
        "left_target_field",
        "right_ref_field",
        "right_target_field"
      ],
      "result": "VALID_IFF_EXACT_STRUCTURED_VALUES_EQUAL"
    },
    "REF_FIELD_EQUALS_SELF_FIELD": {
      "required_args": [
        "ref_field",
        "target_field",
        "self_field"
      ],
      "result": "VALID_IFF_EXACT_STRUCTURED_VALUES_EQUAL"
    },
    "PARALLEL_LIST_LENGTH_EQUAL": {
      "required_args": [
        "fields"
      ],
      "result": "VALID_IFF_ALL_NAMED_LISTS_HAVE_IDENTICAL_LENGTH"
    },
    "LIST_SUBSET_OF_REFERENT_LIST": {
      "required_args": [
        "self_list_field",
        "ref_field",
        "target_list_field"
      ],
      "result": "VALID_IFF_EVERY_SELF_VALUE_APPEARS_EXACTLY_IN_REFERENT_LIST"
    },
    "CAPABILITY_OPERATION_FLOOR_SATISFIED": {
      "required_args": [
        "capability_binding_ref_field",
        "operation_family_field",
        "authority_floor_field",
        "effect_floor_field",
        "review_floor_field",
        "resource_floor_field",
        "human_boundary_field",
        "allowed_effect_classes_field",
        "prohibited_effect_classes_field"
      ],
      "result": "EVALUATE_EXACT_OPERATION_FLOOR_VOCABULARY_RELATIONS_AND_PINNED_CAPABILITY_RUNTIME_FLOOR"
    },
    "GIT_SOURCE_FIELDS_MATCH_TRANSPORT": {
      "required_args": [
        "transport_field",
        "commit_field",
        "tree_field"
      ],
      "result": "IF_TRANSPORT_GIT_REPOSITORY_COMMIT_AND_TREE_MUST_BE_40_LOWER_HEX_OTHERWISE_BOTH_MUST_BE_NULL_OR_ABSENT"
    },
    "SELF_FIELD_MEMBER_OF_REFERENT_LIST": {
      "required_args": [
        "self_field",
        "ref_field",
        "target_list_field"
      ],
      "result": "VALID_IFF_SELF_EXACT_VALUE_APPEARS_IN_REFERENT_LIST"
    },
    "REF_FIELD_ENUM_EQUALS_LITERAL": {
      "required_args": [
        "ref_field",
        "target_field",
        "literal"
      ],
      "result": "VALID_IFF_REFERENT_TARGET_FIELD_EXACTLY_EQUALS_LITERAL"
    },
    "EFFECT_CLAIM_CLASS_ALLOWED_BY_TASK_OPERATION_CONTRACT": {
      "required_args": [
        "task_contract_ref_field",
        "effect_class_field"
      ],
      "result": "RESOLVE_TASK_OPERATION_CONTRACT_AND_REQUIRE_EFFECT_CLASS_MEMBER_OF_OPERATION_CONTRACT.allowed_effect_classes_AND_NOT_MEMBER_OF_prohibited_effect_classes"
    },
    "RESOURCE_RESERVATION_ALLOWED_BY_TASK_OPERATION_CONTRACT": {
      "required_args": [
        "task_contract_ref_field",
        "reservation_mode_field"
      ],
      "result": "RESOLVE_TASK_OPERATION_CONTRACT;LOOK_UP_OPERATION_CONTRACT.resource_floor_IN_EXACT_OP_FLOORS.resource_floor_to_reservation_modes;REQUIRE_reservation_mode_MEMBER_OF_THAT_EXACT_SET;UNKNOWN_IDS_REJECT"
    },
    "REF_TARGET_REF_EQUALS_REF": {
      "required_args": [
        "outer_ref_field",
        "target_ref_field",
        "other_ref_field"
      ],
      "result": "VALID_IFF_RESOLVED_OUTER_REFERENT_TARGET_REF_EXACTLY_EQUALS_SELF_OTHER_REF_VALUE"
    },
    "RECOVERY_REVISION_VALID": {
      "required_args": [
        "identity_fields",
        "revision_field",
        "predecessor_field"
      ],
      "result": "EVALUATE_EXACT_MM-RECOVERY-REDUCER/1_REVISION_CHAIN_RULE_FOR_RECORD_FAMILY"
    },
    "STOP_BARRIER_RECORD_VALID": {
      "required_args": [],
      "result": "EVALUATE_EXACT_MM-RECOVERY-REDUCER/1_STOP_INTENT_BARRIER_FAMILY_RULE"
    },
    "INBOX_ITEM_REVISION_VALID": {
      "required_args": [],
      "result": "EVALUATE_EXACT_MM-RECOVERY-REDUCER/1_INBOX_ITEM_FAMILY_RULE"
    },
    "REF_FIELD_EQUALS_REF_TARGET_FIELD": {
      "required_args": [
        "left_ref_field",
        "right_ref_field",
        "right_target_field"
      ],
      "result": "VALID_IFF_SELF.left_ref_field_EXACTLY_EQUALS_RESOLVED_SELF.right_ref_field_REFERENT.right_target_field"
    },
    "REF_FIELD_EQUALS_CURRENT_KERNEL_FIELD": {
      "required_args": [
        "ref_field",
        "kernel_field"
      ],
      "result": "VALID_IFF_SELF.ref_field_EXACTLY_EQUALS_CURRENT_BINDING_STATE.KERNEL_MANIFEST[kernel_field]"
    },
    "RESOURCE_RESERVATION_PROOF_VALID": {
      "required_args": [
        "task_contract_ref_field",
        "reservation_mode_field",
        "state_field",
        "proof_refs_field",
        "fencing_token_field"
      ],
      "result": "RESOLVE_TASK_OPERATION_CONTRACT.resource_floor;LOOK_UP_EXACT_OP_FLOORS.resource_reservation_proof_requirements[resource_floor][reservation_mode];REQUIRE_ENTRY_EXISTS;IF_STATE_RESERVED_REQUIRE_AT_LEAST_ONE_ENFORCEMENT_ASSESSMENT_REF_WITH_dimension_id_EXACTLY_resource_fencing_AND_environment_subject_EXACTLY_EQUALS_RESOURCE_RESERVATION.resource_identity_AND_required_guarantee_MEMBER_OF_proven_guarantees_AND_proof_assurance_AT_OR_ABOVE_minimum_proof_assurance_USING_EXACT_resource_proof_assurance_order;PEER_DECLARATION_NEVER_SUFFICES;ENFORCEMENT_ASSESSMENT_PROOF_VALID_MUST_PASS_AND_EXACT_ADAPTER_LIVE_REVALIDATION_MUST_SUCCEED_AT_ATTEMPT_PREFLIGHT;IF_FENCING_TOKEN_REQUIRED_REQUIRE_PRESENT_NONEMPTY_AND_ADAPTER_REVALIDATION_MUST_CONFIRM_TOKEN_CURRENT;UNKNOWN_IDS_OR_UNVERIFIABLE_ADAPTER_REJECT"
    },
    "ATTEMPT_RESOURCE_FLOOR_SATISFIED": {
      "required_args": [
        "task_contract_ref_field",
        "resource_reservation_refs_field"
      ],
      "result": "RESOLVE_TASK_OPERATION_CONTRACT.resource_floor;IF_NONE_REQUIRE_EMPTY_LIST;OTHERWISE_REQUIRE_COUNT_AT_LEAST_resource_floor_reservation_requirement.minimum_current_reservations;FOR_EACH_REF_RESOLVE_RESERVATION_ID_THEN_MM-RECOVERY-REDUCER/1_UNIQUE_CURRENT_LEAF_AND_REQUIRE_SUPPLIED_REF_EXACTLY_EQUALS_CURRENT_LEAF_REF_AND_state_RESERVED_AND_task_contract_ref_EXACTLY_EQUALS_ATTEMPT.task_contract_ref_AND_RESOURCE_RESERVATION_PROOF_VALID;AT_LEAST_ONE_MODE_MEMBER_OF_resource_floor_to_reservation_modes[resource_floor];UNKNOWN_OR_AMBIGUOUS_REJECT"
    },
    "EFFECT_CLEARING_EVIDENCE_VALID": {
      "required_args": [
        "evidence_refs_field",
        "target_identity_field"
      ],
      "result": "REQUIRE_AT_LEAST_ONE_REFERENCED_EXTERNAL_OBSERVATION_WITH_observation_class_EXACTLY_DEFINITE_NON_MATERIALIZATION_AND_observed_value_EXACTLY_NOT_MATERIALIZED_AND_RESOLVED_EXTERNAL_SUBJECT.canonical_identity_EXACTLY_EQUALS_SELF.target_identity"
    },
    "CONVERGENCE_CONTINUITY_CAPACITY_VALID": {
      "required_args": [
        "continuity_class_field",
        "dimension_ids_field",
        "safe_capacity_field",
        "proof_refs_field",
        "exact_consumed_field"
      ],
      "algorithm_ref": "MM-RECOVERY-REDUCER/1.CONVERGENCE_CONTINUITY_SAFE_CAPACITY_VALID"
    },
    "ENFORCEMENT_ASSESSMENT_PROOF_VALID": {
      "required_args": [
        "proof_assurance_field",
        "mechanical_proof_locator_field",
        "adapter_id_field",
        "adapter_version_field",
        "adapter_digest_field"
      ],
      "result": "IF_proof_assurance_EQUALS_PEER_DECLARATION_mechanical_proof_locator_MAY_BE_ABSENT;OTHERWISE_mechanical_proof_locator_REQUIRED_NONEMPTY_AND_CONSUMING_ELIGIBILITY_EVALUATOR_MUST_LIVE_REVALIDATE_LOCATOR_WITH_EXACT_adapter_id_adapter_version_adapter_digest;STORED_MARKDOWN_ASSERTION_OF_MECHANICAL_PROOF_IS_NOT_SUFFICIENT"
    },
    "ATTEMPT_EXECUTION_ELIGIBLE": {
      "required_args": [
        "task_contract_ref_field",
        "convergence_reservation_ref_field",
        "enforcement_plan_ref_field",
        "worker_assignment_ref_field",
        "execution_human_authority_refs_field"
      ],
      "algorithm_ref": "attempt_execution_eligibility_algorithm"
    },
    "EFFECT_HUMAN_BOUNDARY_VALID": {
      "required_args": [
        "task_contract_ref_field",
        "human_authority_refs_field"
      ],
      "algorithm_ref": "effect_human_boundary_algorithm"
    },
    "EXTERNAL_OBSERVATION_MECHANICAL_PROOF_VALID": {
      "required_args": [
        "proof_assurance_field",
        "adapter_id_field",
        "adapter_version_field",
        "adapter_digest_field",
        "mechanical_proof_locator_field"
      ],
      "algorithm_ref": "external_observation_proof_algorithm"
    },
    "ALL_SAFE_INTEGER_LIST_VALUES_ZERO": {
      "required_args": [
        "field"
      ],
      "algorithm": [
        {
          "op": "REQUIRE_LIST_TYPE",
          "args": {
            "field": "$field"
          }
        },
        {
          "op": "REQUIRE_EVERY_VALUE_EQUAL_SAFE_INTEGER",
          "args": {
            "field": "$field",
            "value": 0
          }
        }
      ]
    },
    "CONVERGENCE_RESERVATION_CAPACITY_AVAILABLE": {
      "required_args": [
        "convergence_tranche_ref_field",
        "dimension_ids_field",
        "reserved_capacity_values_field",
        "state_field"
      ],
      "algorithm_ref": "convergence_capacity_accounting_algorithm"
    },
    "REVIEW_RESULT_INDEPENDENCE_VALID": {
      "required_args": [
        "review_request_ref_field",
        "independence_assessment_ref_field"
      ],
      "result": "RESOLVE_REVIEW_REQUEST_AND_INDEPENDENCE_ASSESSMENT;ASSESSMENT.review_request_ref_MUST_EXACTLY_EQUAL_SELF.review_request_ref;FOR_EACH_REQUEST.required_independence_dimensions_VALUE_REQUIRE_EXACTLY_ONE_EQUAL_ASSESSMENT.dimension_ids_ENTRY_AT_INDEX_i_AND_dimension_results[i]=SATISFIED;MISSING_DUPLICATE_NOT_SATISFIED_OR_UNKNOWN_REJECT"
    },
    "AUTHORITY_PUBLICATION_RECEIPT_PROOF_VALID": {
      "required_args": [
        "transition_ref_field",
        "publication_plan_ref_field",
        "publication_proof_ref_field",
        "canonical_target_field",
        "observed_result_field"
      ],
      "result": "RESOLVE_PLAN_AND_EXTERNAL_OBSERVATION;PROOF.evidence_subject_ref_EXACTLY_EQUALS_SELF.transition_ref;PROOF.external_subject_ref.canonical_identity_EXACTLY_EQUALS_SELF.canonical_target_AND_PLAN.publication_target;PROOF.observation_class=AUTHORITY_PUBLICATION_OUTCOME;PROOF.observed_value_EXACTLY_EQUALS_SELF.observed_result;PROOF.observed_at_EXACTLY_EQUALS_SELF.observed_at;PROOF.adapter_id/version/digest_EXACTLY_EQUAL_PLAN.publication_adapter_id/version/digest;PROOF.proof_assurance_IN(REMOTE_MECHANICAL_PROOF,PROTECTED_ATTESTATION);RUN_external_observation_proof_algorithm;FAIL_CLOSED"
    },
    "AUTHORITY_CURRENTNESS_OBSERVATION_PROOF_VALID": {
      "required_args": [
        "observed_transition_ref_field",
        "canonical_target_field",
        "observation_result_field",
        "currentness_proof_ref_field"
      ],
      "result": "RESOLVE_EXTERNAL_OBSERVATION;PROOF.evidence_subject_ref_EXACTLY_EQUALS_SELF.observed_transition_ref;PROOF.external_subject_ref.canonical_identity_EXACTLY_EQUALS_SELF.canonical_target;PROOF.observation_class=AUTHORITY_CANONICAL_CURRENTNESS;PROOF.observed_value_EXACTLY_EQUALS_SELF.observation_result;PROOF.observed_at_EXACTLY_EQUALS_SELF.observed_at;PROOF.freshness_deadline_EXACTLY_EQUALS_SELF.freshness_deadline;PROOF.proof_assurance_IN(REMOTE_MECHANICAL_PROOF,PROTECTED_ATTESTATION);RUN_external_observation_proof_algorithm;FAIL_CLOSED"
    }
  },
  "unknown_predicate": "REJECT",
  "unknown_field_descriptor_kind": "REJECT",
  "bare_sha256_ref_policy": "PERMITTED_ONLY_WHERE_CONTRACT_EXPLICITLY_USES_PRIMITIVE_SHA256_REF;GOVERNANCE_CRITICAL_REFERENCES_MUST_USE_TYPED_REF_DESCRIPTOR",
  "transition_evaluation_profile": "MM-TRANSITION-EVAL/1",
  "recovery_state_evaluation_profile": "MM-RECOVERY-REDUCER/1",
  "authority_currentness_evaluation_profile": "MM-AUTHORITY-CURRENTNESS/1",
  "attempt_execution_eligibility_algorithm": [
    {
      "op": "REQUIRE_AUTHORITY_STATE",
      "args": {
        "state": "SINGLETON",
        "profile": "MM-AUTHORITY-CURRENTNESS/1"
      }
    },
    {
      "op": "REDUCE_CURRENT_BINDING_STATE",
      "args": {
        "profile": "CURRENT-BINDING-STATE/v1"
      }
    },
    {
      "op": "REQUIRE_CURRENT_TASK_BINDING",
      "args": {
        "task_ref": "ATTEMPT.task_contract_ref"
      }
    },
    {
      "op": "REQUIRE_CURRENT_TASK_LINKS",
      "args": {}
    },
    {
      "op": "REQUIRE_STOP_STATE",
      "args": {
        "state": "NOT_STOPPED",
        "profile": "MM-RECOVERY-REDUCER/1"
      }
    },
    {
      "op": "REQUIRE_CURRENT_CONVERGENCE_RESERVATION",
      "args": {
        "ref": "ATTEMPT.convergence_reservation_ref",
        "states": [
          "RESERVED"
        ]
      }
    },
    {
      "op": "REQUIRE_CONVERGENCE_CAPACITY",
      "args": {}
    },
    {
      "op": "REQUIRE_RESOURCE_FLOOR",
      "args": {}
    },
    {
      "op": "REQUIRE_ENFORCEMENT_PLAN",
      "args": {
        "eligibility": "ELIGIBLE"
      }
    },
    {
      "op": "REQUIRE_WORKER_ASSIGNMENT",
      "args": {
        "states": [
          "ASSIGNED",
          "ACTIVE"
        ]
      }
    },
    {
      "op": "REQUIRE_HUMAN_BOUNDARY",
      "args": {}
    }
  ],
  "effect_human_boundary_algorithm": [
    {
      "op": "RESOLVE_TASK_CURRENT_OPERATION",
      "args": {}
    },
    {
      "op": "REQUIRE_RESERVED_EFFECT_APPROVAL_IF_NEEDED",
      "args": {}
    }
  ],
  "external_observation_proof_algorithm": [
    {
      "op": "REJECT_PROOF_ASSURANCE",
      "args": {
        "value": "PEER_DECLARATION"
      }
    },
    {
      "op": "REQUIRE_NONEMPTY",
      "args": {
        "field": "mechanical_proof_locator"
      }
    },
    {
      "op": "LIVE_REVALIDATE_EXTERNAL_PROOF",
      "args": {}
    },
    {
      "op": "REQUIRE_REVALIDATION_MATCH",
      "args": {}
    },
    {
      "op": "FAIL_IF_REVALIDATION_UNKNOWN_OR_STALE",
      "args": {}
    }
  ],
  "convergence_capacity_accounting_algorithm": {
    "reservation_identity": "reservation_id",
    "current_reservation_revision": "UNIQUE_VALID_LEAF_PER_MM-RECOVERY-REDUCER/1",
    "charged_states": [
      "RESERVED",
      "COMMITTED",
      "UNCERTAIN"
    ],
    "uncharged_states": [
      "RELEASED"
    ],
    "dimension_matching": "CANDIDATE.dimension_ids_EXACTLY_EQUALS_REFERENCED_TRANCHE.dimension_ids",
    "granted_capacity": "REFERENCED_TRANCHE.granted_capacity_values",
    "base_consumed_capacity": "REFERENCED_TRANCHE.consumed_capacity_values_MUST_BE_ALL_ZERO",
    "existing_charge_set": "CURRENT_RESERVATION_LEAVES_REFERENCING_SAME_TRANCHE_EXCLUDING_CANDIDATE_ID_AND_STATE_IN_charged_states",
    "per_dimension_equation": "SUM(existing_charge_values)+candidate.reserved_capacity_values <= tranche.granted_capacity_values",
    "negative_values": "REJECT",
    "safe_integer_overflow": "REJECT",
    "unknown_or_ambiguous_reservation_chain": "REJECT"
  },
  "algorithm_operator_form": {
    "required_keys": [
      "op",
      "args"
    ],
    "unknown_keys": "REJECT",
    "unknown_operator": "REJECT"
  },
  "algorithm_operator_registry": {
    "REQUIRE_AUTHORITY_STATE": {
      "args": [
        "state",
        "profile"
      ],
      "semantics": "RUN_profile_WITH_CURRENT_EVALUATION_CONTEXT_AND_REQUIRE_EXACT_output_state;ANY_EXPIRED_UNPROVEN_OR_UNREVALIDATABLE_AUTHORITY_CURRENTNESS_EVIDENCE_REJECTS"
    },
    "REDUCE_CURRENT_BINDING_STATE": {
      "args": [
        "profile"
      ],
      "semantics": "RUN_EXACT_PROFILE_AND_REQUIRE_UNAMBIGUOUS_OUTPUT_FOR_CURRENT_AUTHORITY_STATE"
    },
    "REQUIRE_CURRENT_TASK_BINDING": {
      "args": [
        "task_ref"
      ],
      "semantics": "RESOLVE_TASK_REF;REQUIRE_CURRENT_BINDING_MAP.task_id_EXACTLY_EQUALS_task_ref_AND_NO_CURRENT_TOMBSTONE_FOR_task_id"
    },
    "REQUIRE_CURRENT_TASK_LINKS": {
      "args": [],
      "semantics": "TASK.intent_baseline_ref_AND_capability_binding_ref_AND_operation_contract_ref_MUST_EQUAL_CURRENT_BINDINGS"
    },
    "REQUIRE_STOP_STATE": {
      "args": [
        "state",
        "profile"
      ],
      "semantics": "RUN_STOP_PROJECT_REDUCER_AND_REQUIRE_EXACT_state"
    },
    "REQUIRE_CURRENT_CONVERGENCE_RESERVATION": {
      "args": [
        "ref",
        "states"
      ],
      "semantics": "RESOLVE_ref;REQUIRE_IT_IS_UNIQUE_CURRENT_REVISION_LEAF_AND_state_MEMBER_OF_states"
    },
    "REQUIRE_CONVERGENCE_CAPACITY": {
      "args": [],
      "semantics": "RUN_MM-CONVERGENCE-CAPACITY/1_FOR_CURRENT_RESERVATION"
    },
    "REQUIRE_RESOURCE_FLOOR": {
      "args": [],
      "semantics": "RUN_OP_FLOORS_EXACT_attempt_resource_satisfaction_algorithm"
    },
    "REQUIRE_ENFORCEMENT_PLAN": {
      "args": [
        "eligibility"
      ],
      "semantics": "PLAN.task_ref_AND_operation_ref_MATCH_CURRENT_TASK_OPERATION;PLAN.eligibility_EXACTLY_parameter;ASSESSMENTS_CURRENT_PER_PLAN"
    },
    "REQUIRE_WORKER_ASSIGNMENT": {
      "args": [
        "states"
      ],
      "semantics": "ASSIGNMENT.task_ref_MATCHES_ATTEMPT_TASK_AND_state_MEMBER_OF_states"
    },
    "REQUIRE_HUMAN_BOUNDARY": {
      "args": [],
      "semantics": "EVALUATE_CURRENT_OPERATION.human_boundary_USING_EXACT_human_boundary_rules"
    },
    "REQUIRE_EXECUTION_APPROVAL": {
      "args": [
        "subject_source"
      ],
      "semantics": "AT_LEAST_ONE_HUMAN_STATEMENT_CLASS_EXECUTION_APPROVAL_WITH_CURRENT_HUMAN_ASSURANCE_AND_subject_refs_EXACT_SET_EQUAL_RESOLVED_subject_source"
    },
    "RESOLVE_TASK_CURRENT_OPERATION": {
      "args": [],
      "semantics": "RESOLVE_TASK_AND_REQUIRE_EXACT_CURRENT_OPERATION_BINDING"
    },
    "REQUIRE_RESERVED_EFFECT_APPROVAL_IF_NEEDED": {
      "args": [],
      "semantics": "IF_CURRENT_OPERATION.effect_floor=HUMAN_RESERVED_REQUIRE_EXECUTION_APPROVAL_FOR_TASK_ELSE_PASS"
    },
    "REJECT_PROOF_ASSURANCE": {
      "args": [
        "value"
      ],
      "semantics": "REJECT_IF_OBSERVATION.proof_assurance_EQUALS_value"
    },
    "REQUIRE_NONEMPTY": {
      "args": [
        "field"
      ],
      "semantics": "REQUIRE_STRING_OR_LIST_FIELD_PRESENT_AND_LENGTH_GREATER_THAN_ZERO"
    },
    "LIVE_REVALIDATE_EXTERNAL_PROOF": {
      "args": [],
      "semantics": "CALL_EXACT_adapter_id/version/digest_WITH_mechanical_proof_locator_AND_CURRENT_SUBJECT;FAIL_IF_ADAPTER_UNAVAILABLE_OR_IDENTITY_MISMATCH"
    },
    "REQUIRE_REVALIDATION_MATCH": {
      "args": [],
      "semantics": "LIVE_RESULT_MUST_MATCH_structured_subject,observed_value,AND_EVIDENCE_SUBJECT_REF"
    },
    "FAIL_IF_REVALIDATION_UNKNOWN_OR_STALE": {
      "args": [],
      "semantics": "UNKNOWN_STALE_OR_INCOMPARABLE_LIVE_RESULT_REJECTS"
    },
    "REQUIRE_LIST_TYPE": {
      "args": [
        "field"
      ],
      "semantics": "FIELD_MUST_BE_LIST"
    },
    "REQUIRE_EVERY_VALUE_EQUAL_SAFE_INTEGER": {
      "args": [
        "field",
        "value"
      ],
      "semantics": "EVERY_LIST_MEMBER_MUST_BE_SAFE_INTEGER_EXACTLY_EQUAL_value"
    },
    "REQUIRE_FRESH_RFC3339_WINDOW": {
      "args": [
        "observed_at",
        "freshness_deadline",
        "evaluation_time"
      ],
      "semantics": "ALL_THREE_VALIDATE_AS_rfc3339_utc_timestamp;REQUIRE_observed_at<=evaluation_time<=freshness_deadline_USING_ASCII_LEXICOGRAPHIC_ORDER;OTHERWISE_REJECT_AS_STALE_OR_INVALID"
    }
  },
  "human_boundary_rules": {
    "TECHNICAL_AUTONOMY": {
      "operators": []
    },
    "HUMAN_IF_INTENT": {
      "operators": [
        {
          "op": "REQUIRE_CURRENT_TASK_LINKS",
          "args": {}
        }
      ]
    },
    "HUMAN_REQUIRED": {
      "operators": [
        {
          "op": "REQUIRE_EXECUTION_APPROVAL",
          "args": {
            "subject_source": "ATTEMPT.task_contract_ref"
          }
        }
      ]
    },
    "HUMAN_IF_RESERVED_EFFECT": {
      "conditional": {
        "if": "CURRENT_OPERATION.effect_floor == HUMAN_RESERVED",
        "then": [
          {
            "op": "REQUIRE_EXECUTION_APPROVAL",
            "args": {
              "subject_source": "ATTEMPT.task_contract_ref"
            }
          }
        ],
        "else": []
      }
    }
  },
  "object_descriptor_rules": {
    "required_keys": [
      "kind",
      "fields"
    ],
    "allowed_keys": [
      "kind",
      "fields"
    ],
    "fields_semantics": "fields_MUST_BE_OBJECT_MAPPING_FIELD_NAME_TO_RECURSIVE_EXACT_DESCRIPTOR;UNKNOWN_KEYS_REJECT"
  }
}
---
# Contract Evaluation Profile

This is the exact evaluator vocabulary used by the authoritative project-runtime contracts.

A governance-critical reference is never interpreted from its field name. Its descriptor names the permitted target `record_type`, optional exact target identity, and project-identity relation. Wrong-type, wrong-identity, unresolved, or forbidden cross-project references are invalid.

The structured `cross_record_predicates` object is exhaustive. Unknown predicate IDs are rejected rather than inferred from prose.

The OperationContract floor predicate delegates only to the exact pinned `OPERATION-FLOORS/v2` relation and the exact selected capability runtime export. There is no lexical or model-judged interpretation of “stronger.”
