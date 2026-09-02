---
{
  "record_type": "RECOVERY_CRITICAL_RECORD_CONTRACT_REGISTRY",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.5.1",
  "registry_id": "RECOVERY-CRITICAL-CONTRACTS/v1",
  "schema_profile": "SMF-SCHEMA/1",
  "contract_evaluation_profile": "MM-CONTRACT-EVAL/1",
  "authoritative_contract": true,
  "project_output_eligible": true,
  "materialization_rule": "EXACT_EXPORT_REQUIRED",
  "contracts": {
    "ATTEMPT_RECORD": {
      "required_fields": {
        "record_type": "enum(ATTEMPT_RECORD)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "attempt_id": "ascii_id",
        "task_contract_ref": {
          "kind": "ref",
          "target_record_types": [
            "TASK_CONTRACT"
          ],
          "same_project": true
        },
        "convergence_root_ref": {
          "kind": "ref",
          "target_record_types": [
            "CONVERGENCE_ROOT"
          ],
          "same_project": true
        },
        "worker_assignment_ref": {
          "kind": "ref",
          "target_record_types": [
            "WORKER_ASSIGNMENT"
          ],
          "same_project": true
        },
        "enforcement_plan_ref": {
          "kind": "ref",
          "target_record_types": [
            "ENFORCEMENT_PLAN"
          ],
          "same_project": true
        },
        "convergence_reservation_ref": {
          "kind": "ref",
          "target_record_types": [
            "CONVERGENCE_RESERVATION"
          ],
          "same_project": true
        },
        "state": "enum(PLANNED,COMMENCEMENT_ACCEPTED,RUNNING,RESULT_RECORDED,FAILED,CANCELLED,STATE_UNKNOWN)",
        "result_evidence_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "REVIEW_RESULT",
              "EXTERNAL_OBSERVATION",
              "REPOSITORY_SYNC_OBSERVATION",
              "PUBLICATION_OUTCOME_RECEIPT",
              "AUTHORITY_CURRENTNESS_OBSERVATION",
              "ENFORCEMENT_ASSESSMENT",
              "CONVERGENCE_CONTINUITY_ASSESSMENT"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        },
        "revision": "safe_integer",
        "resource_reservation_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "RESOURCE_RESERVATION"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        },
        "execution_human_authority_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "HUMAN_STATEMENT"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        }
      },
      "optional_fields": {
        "commenced_at": "unicode_scalar_string",
        "completed_at": "unicode_scalar_string",
        "predecessor_attempt_ref": {
          "kind": "ref",
          "target_record_types": [
            "ATTEMPT_RECORD"
          ],
          "same_project": true
        }
      },
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "RECOVERY_REVISION_VALID",
          "identity_fields": [
            "attempt_id"
          ],
          "revision_field": "revision",
          "predecessor_field": "predecessor_attempt_ref"
        },
        {
          "predicate": "ATTEMPT_RESOURCE_FLOOR_SATISFIED",
          "task_contract_ref_field": "task_contract_ref",
          "resource_reservation_refs_field": "resource_reservation_refs"
        },
        {
          "predicate": "ATTEMPT_EXECUTION_ELIGIBLE",
          "task_contract_ref_field": "task_contract_ref",
          "convergence_reservation_ref_field": "convergence_reservation_ref",
          "enforcement_plan_ref_field": "enforcement_plan_ref",
          "worker_assignment_ref_field": "worker_assignment_ref",
          "execution_human_authority_refs_field": "execution_human_authority_refs"
        }
      ]
    },
    "STOP_INTENT_BARRIER": {
      "required_fields": {
        "record_type": "enum(STOP_INTENT_BARRIER)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "barrier_id": "ascii_id",
        "stop_class": "enum(GRACEFUL,IMMEDIATE_EXTERNAL)",
        "human_statement_ref": {
          "kind": "ref",
          "target_record_types": [
            "HUMAN_STATEMENT"
          ],
          "same_project": true
        },
        "state": "enum(ACTIVE,RELEASED)",
        "created_at": "unicode_scalar_string",
        "revision": "safe_integer",
        "activation_transition_ref": {
          "kind": "ref",
          "target_record_types": [
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        }
      },
      "optional_fields": {
        "released_by_resume_ref": {
          "kind": "ref",
          "target_record_types": [
            "HUMAN_STATEMENT"
          ],
          "same_project": true
        },
        "predecessor_barrier_ref": {
          "kind": "ref",
          "target_record_types": [
            "STOP_INTENT_BARRIER"
          ],
          "same_project": true
        },
        "release_transition_ref": {
          "kind": "ref",
          "target_record_types": [
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        }
      },
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "REF_FIELD_ENUM_EQUALS_LITERAL",
          "ref_field": "human_statement_ref",
          "target_field": "statement_class",
          "literal": "STOP"
        },
        {
          "predicate": "RECOVERY_REVISION_VALID",
          "identity_fields": [
            "barrier_id"
          ],
          "revision_field": "revision",
          "predecessor_field": "predecessor_barrier_ref"
        },
        {
          "predicate": "STOP_BARRIER_RECORD_VALID"
        }
      ]
    },
    "EFFECT_CLAIM": {
      "required_fields": {
        "record_type": "enum(EFFECT_CLAIM)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "claim_id": "ascii_id",
        "task_contract_ref": {
          "kind": "ref",
          "target_record_types": [
            "TASK_CONTRACT"
          ],
          "same_project": true
        },
        "effect_class": "ascii_id",
        "target_identity": "unicode_scalar_string",
        "state": "enum(CLAIMED_NOT_STARTED,COMMENCEMENT_ACCEPTED,OUTCOME_PENDING,CONFIRMED,DEFINITELY_NOT_MATERIALIZED,EXTERNAL_EFFECT_UNKNOWN)",
        "evidence_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "EXTERNAL_OBSERVATION",
              "REVIEW_RESULT",
              "REPOSITORY_SYNC_OBSERVATION"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        },
        "revision": "safe_integer",
        "human_authority_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "HUMAN_STATEMENT"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        }
      },
      "optional_fields": {
        "idempotency_key": "unicode_scalar_string",
        "provider_transaction_identity": "unicode_scalar_string",
        "predecessor_effect_claim_ref": {
          "kind": "ref",
          "target_record_types": [
            "EFFECT_CLAIM"
          ],
          "same_project": true
        }
      },
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "EFFECT_CLAIM_CLASS_ALLOWED_BY_TASK_OPERATION_CONTRACT",
          "task_contract_ref_field": "task_contract_ref",
          "effect_class_field": "effect_class"
        },
        {
          "predicate": "RECOVERY_REVISION_VALID",
          "identity_fields": [
            "claim_id"
          ],
          "revision_field": "revision",
          "predecessor_field": "predecessor_effect_claim_ref"
        },
        {
          "predicate": "EFFECT_HUMAN_BOUNDARY_VALID",
          "task_contract_ref_field": "task_contract_ref",
          "human_authority_refs_field": "human_authority_refs"
        }
      ]
    },
    "RESOURCE_RESERVATION": {
      "required_fields": {
        "record_type": "enum(RESOURCE_RESERVATION)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "reservation_id": "ascii_id",
        "task_contract_ref": {
          "kind": "ref",
          "target_record_types": [
            "TASK_CONTRACT"
          ],
          "same_project": true
        },
        "resource_identity": "unicode_scalar_string",
        "reservation_mode": "enum(SERIAL,EXCLUSIVE,FENCED)",
        "state": "enum(RESERVED,RELEASED,UNKNOWN)",
        "proof_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "ENFORCEMENT_ASSESSMENT"
            ],
            "same_project": true
          },
          "min_items": 1,
          "set_semantics": true
        },
        "revision": "safe_integer"
      },
      "optional_fields": {
        "fencing_token": "unicode_scalar_string",
        "predecessor_resource_reservation_ref": {
          "kind": "ref",
          "target_record_types": [
            "RESOURCE_RESERVATION"
          ],
          "same_project": true
        }
      },
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "RESOURCE_RESERVATION_ALLOWED_BY_TASK_OPERATION_CONTRACT",
          "task_contract_ref_field": "task_contract_ref",
          "reservation_mode_field": "reservation_mode"
        },
        {
          "predicate": "RESOURCE_RESERVATION_PROOF_VALID",
          "task_contract_ref_field": "task_contract_ref",
          "reservation_mode_field": "reservation_mode",
          "state_field": "state",
          "proof_refs_field": "proof_refs",
          "fencing_token_field": "fencing_token"
        },
        {
          "predicate": "RECOVERY_REVISION_VALID",
          "identity_fields": [
            "reservation_id"
          ],
          "revision_field": "revision",
          "predecessor_field": "predecessor_resource_reservation_ref"
        }
      ]
    },
    "INDEPENDENCE_ASSESSMENT": {
      "required_fields": {
        "record_type": "enum(INDEPENDENCE_ASSESSMENT)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "assessment_id": "ascii_id",
        "review_request_ref": {
          "kind": "ref",
          "target_record_types": [
            "REVIEW_REQUEST"
          ],
          "same_project": true
        },
        "reviewer_identity": "unicode_scalar_string",
        "dimension_ids": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 1,
          "set_semantics": true
        },
        "dimension_results": {
          "kind": "list",
          "items": "enum(SATISFIED,NOT_SATISFIED,UNKNOWN)",
          "min_items": 1
        }
      },
      "optional_fields": {
        "evidence_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "EXTERNAL_OBSERVATION",
              "HUMAN_STATEMENT"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        }
      },
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "PARALLEL_LIST_LENGTH_EQUAL",
          "fields": [
            "dimension_ids",
            "dimension_results"
          ]
        }
      ]
    },
    "REVIEW_RESULT": {
      "required_fields": {
        "record_type": "enum(REVIEW_RESULT)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "review_result_id": "ascii_id",
        "review_request_ref": {
          "kind": "ref",
          "target_record_types": [
            "REVIEW_REQUEST"
          ],
          "same_project": true
        },
        "independence_assessment_ref": {
          "kind": "ref",
          "target_record_types": [
            "INDEPENDENCE_ASSESSMENT"
          ],
          "same_project": true
        },
        "verdict": "enum(PASS,FAIL,READY_TO_USE,BOUNDED_CORRECTIONS_REQUIRED,MATERIAL_REDESIGN_REQUIRED,NO_MATERIAL_REDIRECTION,ACCEPTED,REJECTED)",
        "unresolved_required_finding_count": "safe_integer",
        "required_findings": "list<unicode_scalar_string>",
        "evidence_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "EXTERNAL_OBSERVATION",
              "ENFORCEMENT_ASSESSMENT",
              "PUBLICATION_OUTCOME_RECEIPT",
              "AUTHORITY_CURRENTNESS_OBSERVATION"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        }
      },
      "optional_fields": {},
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "REVIEW_RESULT_INDEPENDENCE_VALID",
          "review_request_ref_field": "review_request_ref",
          "independence_assessment_ref_field": "independence_assessment_ref"
        }
      ]
    },
    "CONVERGENCE_CONTINUITY_ASSESSMENT": {
      "required_fields": {
        "record_type": "enum(CONVERGENCE_CONTINUITY_ASSESSMENT)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "assessment_id": "ascii_id",
        "convergence_root_ref": {
          "kind": "ref",
          "target_record_types": [
            "CONVERGENCE_ROOT"
          ],
          "same_project": true
        },
        "continuity_epoch": "safe_integer",
        "continuity_class": "enum(SINGLE_SESSION_ONLY,EXACT_CONTINUOUS_ACCOUNTING,PROTECTED_EXACT_REMAINING_CAPACITY,UNKNOWN)",
        "dimension_ids": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 1,
          "set_semantics": true
        },
        "safe_reusable_capacity_values": {
          "kind": "list",
          "items": "safe_integer",
          "min_items": 1
        },
        "observed_at": "unicode_scalar_string",
        "proof_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "EXTERNAL_OBSERVATION",
              "ENFORCEMENT_ASSESSMENT"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        }
      },
      "optional_fields": {
        "exact_consumed_values": {
          "kind": "list",
          "items": "safe_integer",
          "min_items": 0
        }
      },
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "PARALLEL_LIST_LENGTH_EQUAL",
          "fields": [
            "dimension_ids",
            "safe_reusable_capacity_values"
          ]
        },
        {
          "predicate": "CONVERGENCE_CONTINUITY_CAPACITY_VALID",
          "continuity_class_field": "continuity_class",
          "dimension_ids_field": "dimension_ids",
          "safe_capacity_field": "safe_reusable_capacity_values",
          "proof_refs_field": "proof_refs",
          "exact_consumed_field": "exact_consumed_values"
        }
      ]
    },
    "CONVERGENCE_RESERVATION": {
      "required_fields": {
        "record_type": "enum(CONVERGENCE_RESERVATION)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "reservation_id": "ascii_id",
        "convergence_root_ref": {
          "kind": "ref",
          "target_record_types": [
            "CONVERGENCE_ROOT"
          ],
          "same_project": true
        },
        "convergence_tranche_ref": {
          "kind": "ref",
          "target_record_types": [
            "CONVERGENCE_TRANCHE"
          ],
          "same_project": true
        },
        "dimension_ids": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 1,
          "set_semantics": true
        },
        "reserved_capacity_values": {
          "kind": "list",
          "items": "safe_integer",
          "min_items": 1
        },
        "state": "enum(RESERVED,COMMITTED,RELEASED,UNCERTAIN)",
        "continuity_assessment_ref": {
          "kind": "ref",
          "target_record_types": [
            "CONVERGENCE_CONTINUITY_ASSESSMENT"
          ],
          "same_project": true
        },
        "revision": "safe_integer"
      },
      "optional_fields": {
        "attempt_id": "ascii_id",
        "predecessor_convergence_reservation_ref": {
          "kind": "ref",
          "target_record_types": [
            "CONVERGENCE_RESERVATION"
          ],
          "same_project": true
        },
        "release_evidence_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "EXTERNAL_OBSERVATION"
            ],
            "same_project": true
          },
          "min_items": 1,
          "set_semantics": true
        }
      },
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "PARALLEL_LIST_LENGTH_EQUAL",
          "fields": [
            "dimension_ids",
            "reserved_capacity_values"
          ]
        },
        {
          "predicate": "RECOVERY_REVISION_VALID",
          "identity_fields": [
            "reservation_id"
          ],
          "revision_field": "revision",
          "predecessor_field": "predecessor_convergence_reservation_ref"
        },
        {
          "predicate": "CONVERGENCE_RESERVATION_CAPACITY_AVAILABLE",
          "convergence_tranche_ref_field": "convergence_tranche_ref",
          "dimension_ids_field": "dimension_ids",
          "reserved_capacity_values_field": "reserved_capacity_values",
          "state_field": "state"
        }
      ]
    },
    "ENFORCEMENT_ASSESSMENT": {
      "required_fields": {
        "record_type": "enum(ENFORCEMENT_ASSESSMENT)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "assessment_id": "ascii_id",
        "environment_subject": "unicode_scalar_string",
        "adapter_id": "ascii_id",
        "adapter_version": "unicode_scalar_string",
        "adapter_digest": "sha256_hex",
        "dimension_id": "ascii_id",
        "proven_guarantees": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 0,
          "set_semantics": true
        },
        "proof_assurance": "enum(PEER_DECLARATION,LOCAL_MECHANICAL_PROOF,REMOTE_MECHANICAL_PROOF,PROTECTED_ATTESTATION)",
        "observed_at": "unicode_scalar_string",
        "freshness_deadline": "unicode_scalar_string",
        "failure_domain": "unicode_scalar_string"
      },
      "optional_fields": {
        "proof_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "EXTERNAL_OBSERVATION"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        },
        "mechanical_proof_locator": "unicode_scalar_string"
      },
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "ENFORCEMENT_ASSESSMENT_PROOF_VALID",
          "proof_assurance_field": "proof_assurance",
          "mechanical_proof_locator_field": "mechanical_proof_locator",
          "adapter_id_field": "adapter_id",
          "adapter_version_field": "adapter_version",
          "adapter_digest_field": "adapter_digest"
        }
      ]
    },
    "ENFORCEMENT_PLAN": {
      "required_fields": {
        "record_type": "enum(ENFORCEMENT_PLAN)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "plan_id": "ascii_id",
        "task_contract_ref": {
          "kind": "ref",
          "target_record_types": [
            "TASK_CONTRACT"
          ],
          "same_project": true
        },
        "operation_contract_ref": {
          "kind": "ref",
          "target_record_types": [
            "OPERATION_CONTRACT"
          ],
          "same_project": true
        },
        "required_dimension_ids": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 0,
          "set_semantics": true
        },
        "assessment_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "ENFORCEMENT_ASSESSMENT"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        },
        "eligibility": "enum(ELIGIBLE,INELIGIBLE)",
        "evaluated_at": "unicode_scalar_string"
      },
      "optional_fields": {},
      "unknown_fields": "REJECT"
    },
    "WORKER_REQUIREMENT": {
      "required_fields": {
        "record_type": "enum(WORKER_REQUIREMENT)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "requirement_id": "ascii_id",
        "task_contract_ref": {
          "kind": "ref",
          "target_record_types": [
            "TASK_CONTRACT"
          ],
          "same_project": true
        },
        "required_guarantees": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 0,
          "set_semantics": true
        },
        "required_independence_dimensions": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 0,
          "set_semantics": true
        }
      },
      "optional_fields": {},
      "unknown_fields": "REJECT"
    },
    "WORKER_ASSIGNMENT": {
      "required_fields": {
        "record_type": "enum(WORKER_ASSIGNMENT)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "assignment_id": "ascii_id",
        "task_contract_ref": {
          "kind": "ref",
          "target_record_types": [
            "TASK_CONTRACT"
          ],
          "same_project": true
        },
        "worker_requirement_ref": {
          "kind": "ref",
          "target_record_types": [
            "WORKER_REQUIREMENT"
          ],
          "same_project": true
        },
        "worker_identity": "unicode_scalar_string",
        "worker_variant": "unicode_scalar_string",
        "execution_endpoint": "unicode_scalar_string",
        "state": "enum(ASSIGNED,ACTIVE,COMPLETED,CANCELLED,UNKNOWN)"
      },
      "optional_fields": {},
      "unknown_fields": "REJECT"
    },
    "CONTEXT_REPRESENTATION": {
      "required_fields": {
        "record_type": "enum(CONTEXT_REPRESENTATION)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "representation_id": "ascii_id",
        "source_digest": "sha256_hex",
        "representation_digest": "sha256_hex",
        "fidelity": "enum(EXACT,LOSSLESS_STRUCTURAL,REVERSIBLE_PROJECTION,DERIVED_EXPLORATORY)",
        "transform_id": "ascii_id",
        "transform_version": "unicode_scalar_string",
        "exact_locator": "unicode_scalar_string"
      },
      "optional_fields": {},
      "unknown_fields": "REJECT"
    },
    "CONTEXT_ROUTE": {
      "required_fields": {
        "record_type": "enum(CONTEXT_ROUTE)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "route_id": "ascii_id",
        "task_contract_ref": {
          "kind": "ref",
          "target_record_types": [
            "TASK_CONTRACT"
          ],
          "same_project": true
        },
        "mandatory_context_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "CONTEXT_REPRESENTATION"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        },
        "on_demand_context_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "CONTEXT_REPRESENTATION"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        },
        "excluded_context_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "CONTEXT_REPRESENTATION"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        }
      },
      "optional_fields": {},
      "unknown_fields": "REJECT"
    },
    "EXTERNAL_SUBJECT": {
      "required_fields": {
        "record_type": "enum(EXTERNAL_SUBJECT)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "subject_id": "ascii_id",
        "canonical_identity": "unicode_scalar_string",
        "subject_class": "ascii_id"
      },
      "optional_fields": {
        "provider": "unicode_scalar_string"
      },
      "unknown_fields": "REJECT"
    },
    "EXTERNAL_OBSERVATION": {
      "required_fields": {
        "record_type": "enum(EXTERNAL_OBSERVATION)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "observation_id": "ascii_id",
        "external_subject_ref": {
          "kind": "ref",
          "target_record_types": [
            "EXTERNAL_SUBJECT"
          ],
          "same_project": true
        },
        "observation_class": "ascii_id",
        "observed_value": "unicode_scalar_string",
        "observed_at": "unicode_scalar_string",
        "freshness_deadline": "unicode_scalar_string",
        "proof_locator": "unicode_scalar_string",
        "evidence_subject_ref": {
          "kind": "ref",
          "target_record_types": [
            "EFFECT_CLAIM",
            "CONVERGENCE_RESERVATION",
            "CONVERGENCE_ROOT",
            "RESOURCE_RESERVATION",
            "AUTHORITY_TRANSITION",
            "TASK_CONTRACT"
          ],
          "same_project": true
        },
        "proof_assurance": "enum(PEER_DECLARATION,LOCAL_MECHANICAL_PROOF,REMOTE_MECHANICAL_PROOF,PROTECTED_ATTESTATION)",
        "adapter_id": "ascii_id",
        "adapter_version": "unicode_scalar_string",
        "adapter_digest": "sha256_hex",
        "mechanical_proof_locator": "unicode_scalar_string"
      },
      "optional_fields": {
        "subject_revision": "safe_integer",
        "continuity_epoch": "safe_integer",
        "dimension_ids": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 1,
          "set_semantics": true
        },
        "capacity_values": {
          "kind": "list",
          "items": "safe_integer",
          "min_items": 1
        }
      },
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "EXTERNAL_OBSERVATION_MECHANICAL_PROOF_VALID",
          "proof_assurance_field": "proof_assurance",
          "adapter_id_field": "adapter_id",
          "adapter_version_field": "adapter_version",
          "adapter_digest_field": "adapter_digest",
          "mechanical_proof_locator_field": "mechanical_proof_locator"
        }
      ]
    },
    "OBJECTIVE_RELATION": {
      "required_fields": {
        "record_type": "enum(OBJECTIVE_RELATION)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "relation_id": "ascii_id",
        "convergence_root_ref": {
          "kind": "ref",
          "target_record_types": [
            "CONVERGENCE_ROOT"
          ],
          "same_project": true
        },
        "candidate_objective_identity": "unicode_scalar_string",
        "relation": "enum(SAME_OBJECTIVE,CHILD_OBJECTIVE,NEW_OBJECTIVE,UNKNOWN)",
        "authority_ref": {
          "kind": "ref",
          "target_record_types": [
            "PROJECT_GENESIS",
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        }
      },
      "optional_fields": {},
      "unknown_fields": "REJECT"
    },
    "FORK_RESOLUTION_PLAN": {
      "required_fields": {
        "record_type": "enum(FORK_RESOLUTION_PLAN)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "plan_id": "ascii_id",
        "fork_base_ref": {
          "kind": "ref",
          "target_record_types": [
            "PROJECT_GENESIS",
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        },
        "competing_branch_head_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "AUTHORITY_TRANSITION"
            ],
            "same_project": true
          },
          "min_items": 2,
          "set_semantics": true
        },
        "resolution_mode": "enum(SELECT_BRANCH,SYNTHESIZE,SUPERSEDE_ALL)",
        "selected_branch_head_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "AUTHORITY_TRANSITION"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        },
        "new_authority_epoch": "safe_integer",
        "post_resolution_binding_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "DISTRIBUTION_ORIGIN",
              "KERNEL_MANIFEST",
              "INTENT_BASELINE",
              "CAPABILITY_BINDING",
              "LIFECYCLE_GRAPH",
              "RUN_HORIZON",
              "OPERATION_CONTRACT",
              "TASK_CONTRACT",
              "REVIEW_REQUEST",
              "CONVERGENCE_POLICY",
              "REPOSITORY_BINDING"
            ],
            "same_project": true
          },
          "min_items": 6,
          "set_semantics": true
        }
      },
      "optional_fields": {},
      "unknown_fields": "REJECT"
    },
    "INBOX_ITEM": {
      "required_fields": {
        "record_type": "enum(INBOX_ITEM)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "item_id": "ascii_id",
        "revision": "safe_integer",
        "provenance_class": "enum(HUMAN_REQUEST,AGENT_OBSERVATION,REVIEW_FINDING,SECURITY_FINDING,EXTERNAL_CHANGE,DEPENDENCY_CHANGE)",
        "source_text": "unicode_scalar_string",
        "receipt_authority_ref": {
          "kind": "ref",
          "target_record_types": [
            "PROJECT_GENESIS",
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        },
        "capability_hypothesis_ids": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 0,
          "set_semantics": true
        },
        "disposition": "enum(RECEIVED,TRIAGED,IMPACT_ANALYZED,ACCEPTED_FOR_INCORPORATION,DEFERRED,REJECTED,DUPLICATE,ALREADY_SATISFIED,NEEDS_HUMAN_DECISION,SUPERSEDED)"
      },
      "optional_fields": {
        "predecessor_item_ref": {
          "kind": "ref",
          "target_record_types": [
            "INBOX_ITEM"
          ],
          "same_project": true
        },
        "priority_text": "unicode_scalar_string",
        "relation_item_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "INBOX_ITEM"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        }
      },
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "RECOVERY_REVISION_VALID",
          "identity_fields": [
            "item_id"
          ],
          "revision_field": "revision",
          "predecessor_field": "predecessor_item_ref"
        },
        {
          "predicate": "INBOX_ITEM_REVISION_VALID"
        }
      ]
    }
  },
  "registry_rule": "EVERY_PROJECT_LOCAL_RECOVERY_RECORD_THAT_CAN_CHANGE_EXECUTION_ELIGIBILITY_CONSUMPTION_UNCERTAINTY_REVIEW_EFFECT_RESOURCE_STOP_OR_INBOX_STATE_MUST_VALIDATE_AGAINST_THIS_REGISTRY_AND_CURRENTNESS_MUST_REDUCE_UNDER_MM-RECOVERY-REDUCER/1;TEMPLATES_CANNOT_ADD_SEMANTICS",
  "recovery_state_evaluation_profile": "MM-RECOVERY-REDUCER/1"
}
---
# Recovery-Critical Record Contracts

This registry closes the cold-recovery contract surface. The generic record factory remains distribution-only and is not authoritative.

Every listed record family can change or explain execution eligibility, convergence consumption, STOP state, reviewer acceptance, effect/resource uncertainty, Worker eligibility, or required context. A cold agent validates those records against these exact schemas before resuming work.

Normal governed projects exact-export this compact registry because these state families are universal recovery concerns.
