---
{
  "record_type": "GOVERNING_RECORD_CONTRACT_REGISTRY",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.4.0",
  "registry_id": "GOVERNING-RECORD-CONTRACTS/v2",
  "schema_profile": "SMF-SCHEMA/1",
  "contract_evaluation_profile": "MM-CONTRACT-EVAL/1",
  "authoritative_contract": true,
  "project_output_eligible": true,
  "materialization_rule": "EXACT_EXPORT_REQUIRED",
  "contracts": {
    "KERNEL_MANIFEST": {
      "required_fields": {
        "record_type": "enum(KERNEL_MANIFEST)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "machine_name": "enum(Markdown Machine)",
        "machine_version": "unicode_scalar_string",
        "distribution_origin_ref": {
          "kind": "ref",
          "target_record_types": [
            "DISTRIBUTION_ORIGIN"
          ],
          "same_project": true
        },
        "contract_evaluation_profile_ref": {
          "kind": "ref",
          "target_record_types": [
            "CONTRACT_EVALUATION_PROFILE"
          ],
          "same_project": false,
          "target_identity": {
            "field": "profile_id",
            "equals": "MM-CONTRACT-EVAL/1"
          }
        },
        "governing_record_contracts_ref": {
          "kind": "ref",
          "target_record_types": [
            "GOVERNING_RECORD_CONTRACT_REGISTRY"
          ],
          "same_project": false,
          "target_identity": {
            "field": "registry_id",
            "equals": "GOVERNING-RECORD-CONTRACTS/v2"
          }
        },
        "recovery_critical_contracts_ref": {
          "kind": "ref",
          "target_record_types": [
            "RECOVERY_CRITICAL_RECORD_CONTRACT_REGISTRY"
          ],
          "same_project": false,
          "target_identity": {
            "field": "registry_id",
            "equals": "RECOVERY-CRITICAL-CONTRACTS/v1"
          }
        },
        "transition_admission_contract_ref": {
          "kind": "ref",
          "target_record_types": [
            "TRANSITION_ADMISSION_CONTRACT"
          ],
          "same_project": false,
          "target_identity": {
            "field": "contract_id",
            "equals": "TRANSITION-ADMISSION/v2"
          }
        },
        "operation_floor_vocabulary_ref": {
          "kind": "ref",
          "target_record_types": [
            "OPERATION_FLOOR_VOCABULARY"
          ],
          "same_project": false,
          "target_identity": {
            "field": "contract_id",
            "equals": "OPERATION-FLOORS/v2"
          }
        },
        "human_control_profile_ref": {
          "kind": "ref",
          "target_record_types": [
            "HUMAN_CONTROL_PROFILE"
          ],
          "same_project": false,
          "target_identity": {
            "field": "profile_id",
            "equals": "MM-HUMAN-CONTROL/1"
          }
        },
        "compatibility_family": "ascii_id",
        "selected_capability_runtime_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "CAPABILITY_RUNTIME_EXPORT"
            ],
            "same_project": false
          },
          "min_items": 0,
          "set_semantics": true
        },
        "transition_evaluation_profile_ref": {
          "kind": "ref",
          "target_record_types": [
            "TRANSITION_EVALUATION_PROFILE"
          ],
          "same_project": false,
          "target_identity": {
            "field": "profile_id",
            "equals": "MM-TRANSITION-EVAL/1"
          }
        },
        "recovery_state_evaluation_profile_ref": {
          "kind": "ref",
          "target_record_types": [
            "RECOVERY_STATE_EVALUATION_PROFILE"
          ],
          "same_project": false,
          "target_identity": {
            "field": "profile_id",
            "equals": "MM-RECOVERY-REDUCER/1"
          }
        },
        "smf_profile_ref": {
          "kind": "ref",
          "target_record_types": [
            "SMF_PROFILE"
          ],
          "same_project": false,
          "target_identity": {
            "field": "profile_id",
            "equals": "SMF/1"
          }
        },
        "schema_evaluation_profile_ref": {
          "kind": "ref",
          "target_record_types": [
            "SCHEMA_EVALUATION_PROFILE"
          ],
          "same_project": false,
          "target_identity": {
            "field": "profile_id",
            "equals": "SMF-SCHEMA/1"
          }
        },
        "authority_currentness_evaluation_profile_ref": {
          "kind": "ref",
          "target_record_types": [
            "AUTHORITY_CURRENTNESS_EVALUATION_PROFILE"
          ],
          "same_project": false,
          "target_identity": {
            "field": "profile_id",
            "equals": "MM-AUTHORITY-CURRENTNESS/1"
          }
        }
      },
      "optional_fields": {
        "compiled_under_authority_ref": {
          "kind": "ref",
          "target_record_types": [
            "PROJECT_GENESIS",
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        }
      },
      "unknown_fields": "REJECT"
    },
    "AUTHORITY_TRANSITION": {
      "required_fields": {
        "record_type": "enum(AUTHORITY_TRANSITION)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "authority_epoch": "safe_integer",
        "sequence": "safe_integer",
        "transition_type": "ascii_id",
        "predecessor_transition_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "PROJECT_GENESIS",
              "AUTHORITY_TRANSITION"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        },
        "admission_contract_ref": {
          "kind": "ref",
          "target_record_types": [
            "TRANSITION_ADMISSION_CONTRACT"
          ],
          "same_project": false,
          "target_identity": {
            "field": "contract_id",
            "equals": "TRANSITION-ADMISSION/v2"
          }
        },
        "exact_contract_bindings": {
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
              "CONVERGENCE_EXTENSION",
              "CONVERGENCE_TRANCHE",
              "REPOSITORY_BINDING"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        },
        "accepted_evidence_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "HUMAN_STATEMENT",
              "REVIEW_RESULT",
              "EXTERNAL_OBSERVATION",
              "PUBLICATION_OUTCOME_RECEIPT",
              "AUTHORITY_CURRENTNESS_OBSERVATION",
              "ENFORCEMENT_ASSESSMENT",
              "CONVERGENCE_CONTINUITY_ASSESSMENT",
              "REPOSITORY_SYNC_OBSERVATION"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        },
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
        },
        "publication_mechanism_plan_ref": {
          "kind": "ref",
          "target_record_types": [
            "PUBLICATION_MECHANISM_PLAN"
          ],
          "same_project": true
        }
      },
      "optional_fields": {
        "fork_resolution_plan_ref": {
          "kind": "ref",
          "target_record_types": [
            "FORK_RESOLUTION_PLAN"
          ],
          "same_project": true
        }
      },
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "REF_FIELD_EQUALS_CURRENT_KERNEL_FIELD",
          "ref_field": "admission_contract_ref",
          "kernel_field": "transition_admission_contract_ref"
        }
      ]
    },
    "INTENT_BASELINE": {
      "required_fields": {
        "record_type": "enum(INTENT_BASELINE)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "compiled_under_authority_ref": {
          "kind": "ref",
          "target_record_types": [
            "PROJECT_GENESIS",
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        },
        "human_statement_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "HUMAN_STATEMENT"
            ],
            "same_project": true
          },
          "min_items": 1,
          "set_semantics": true
        },
        "intent_item_ids": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 1,
          "set_semantics": true
        },
        "accepted_intent_items": "list<unicode_scalar_string>",
        "authorized_capability_ids": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 0,
          "set_semantics": true
        },
        "constraints": "list<unicode_scalar_string>",
        "non_goals": "list<unicode_scalar_string>",
        "run_horizon_ref": {
          "kind": "ref",
          "target_record_types": [
            "RUN_HORIZON"
          ],
          "same_project": true
        }
      },
      "optional_fields": {},
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "PARALLEL_LIST_LENGTH_EQUAL",
          "fields": [
            "intent_item_ids",
            "accepted_intent_items"
          ]
        }
      ]
    },
    "CAPABILITY_BINDING": {
      "required_fields": {
        "record_type": "enum(CAPABILITY_BINDING)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "compiled_under_authority_ref": {
          "kind": "ref",
          "target_record_types": [
            "PROJECT_GENESIS",
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        },
        "intent_baseline_ref": {
          "kind": "ref",
          "target_record_types": [
            "INTENT_BASELINE"
          ],
          "same_project": true
        },
        "capability_id": "ascii_id",
        "capability_source_ref": {
          "kind": "ref",
          "target_record_types": [
            "CAPABILITY_RUNTIME_EXPORT"
          ],
          "same_project": false,
          "target_field_equals_self_field": {
            "target_field": "capability_id",
            "self_field": "capability_id"
          }
        },
        "capability_state": "enum(ONBOARDING,ACTIVE,SUSPENDED,RETIRED,REVOKED)",
        "operation_floor_profile_id": "ascii_id"
      },
      "optional_fields": {},
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "SELF_FIELD_MEMBER_OF_REFERENT_LIST",
          "self_field": "capability_id",
          "ref_field": "intent_baseline_ref",
          "target_list_field": "authorized_capability_ids"
        },
        {
          "predicate": "REF_FIELD_EQUALS_SELF_FIELD",
          "ref_field": "capability_source_ref",
          "target_field": "operation_floor_profile_id",
          "self_field": "operation_floor_profile_id"
        }
      ]
    },
    "LIFECYCLE_GRAPH": {
      "required_fields": {
        "record_type": "enum(LIFECYCLE_GRAPH)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "compiled_under_authority_ref": {
          "kind": "ref",
          "target_record_types": [
            "PROJECT_GENESIS",
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        },
        "graph_id": "ascii_id",
        "node_ids": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 1,
          "set_semantics": true
        },
        "edge_ids": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 0,
          "set_semantics": true
        },
        "terminal_node_ids": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 1,
          "set_semantics": true
        },
        "capability_binding_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "CAPABILITY_BINDING"
            ],
            "same_project": true
          },
          "min_items": 1,
          "set_semantics": true
        },
        "run_horizon_ref": {
          "kind": "ref",
          "target_record_types": [
            "RUN_HORIZON"
          ],
          "same_project": true
        }
      },
      "optional_fields": {
        "predecessor_graph_ref": {
          "kind": "ref",
          "target_record_types": [
            "LIFECYCLE_GRAPH"
          ],
          "same_project": true
        }
      },
      "unknown_fields": "REJECT"
    },
    "RUN_HORIZON": {
      "required_fields": {
        "record_type": "enum(RUN_HORIZON)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "compiled_under_authority_ref": {
          "kind": "ref",
          "target_record_types": [
            "PROJECT_GENESIS",
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        },
        "horizon_id": "ascii_id",
        "reachable_terminal_nodes": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 1,
          "set_semantics": true
        },
        "human_basis_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "HUMAN_STATEMENT"
            ],
            "same_project": true
          },
          "min_items": 1,
          "set_semantics": true
        }
      },
      "optional_fields": {},
      "unknown_fields": "REJECT"
    },
    "OPERATION_CONTRACT": {
      "required_fields": {
        "record_type": "enum(OPERATION_CONTRACT)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "compiled_under_authority_ref": {
          "kind": "ref",
          "target_record_types": [
            "PROJECT_GENESIS",
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        },
        "intent_baseline_ref": {
          "kind": "ref",
          "target_record_types": [
            "INTENT_BASELINE"
          ],
          "same_project": true
        },
        "capability_binding_ref": {
          "kind": "ref",
          "target_record_types": [
            "CAPABILITY_BINDING"
          ],
          "same_project": true
        },
        "capability_id": "ascii_id",
        "operation_family": "ascii_id",
        "authority_floor": "enum(CURRENT_ADMITTED_TASK_AUTHORITY)",
        "effect_floor": "enum(NONE,LOCAL_REVERSIBLE,REPOSITORY_WRITE,PROJECT_SPECIFIC,HUMAN_RESERVED)",
        "review_floor": "enum(NONE,SELF_CHECK,INDEPENDENT_REQUIRED)",
        "resource_floor": "enum(NONE,SERIAL,PROJECT_SPECIFIC)",
        "human_boundary": "enum(TECHNICAL_AUTONOMY,HUMAN_IF_INTENT,HUMAN_REQUIRED,HUMAN_IF_RESERVED_EFFECT)",
        "allowed_effect_classes": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 0,
          "set_semantics": true
        },
        "prohibited_effect_classes": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 1,
          "set_semantics": true
        }
      },
      "optional_fields": {},
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "REF_FIELD_EQUALS_SELF_FIELD",
          "ref_field": "capability_binding_ref",
          "target_field": "capability_id",
          "self_field": "capability_id"
        },
        {
          "predicate": "CAPABILITY_OPERATION_FLOOR_SATISFIED",
          "capability_binding_ref_field": "capability_binding_ref",
          "operation_family_field": "operation_family",
          "authority_floor_field": "authority_floor",
          "effect_floor_field": "effect_floor",
          "review_floor_field": "review_floor",
          "resource_floor_field": "resource_floor",
          "human_boundary_field": "human_boundary",
          "allowed_effect_classes_field": "allowed_effect_classes",
          "prohibited_effect_classes_field": "prohibited_effect_classes"
        }
      ]
    },
    "TASK_CONTRACT": {
      "required_fields": {
        "record_type": "enum(TASK_CONTRACT)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "compiled_under_authority_ref": {
          "kind": "ref",
          "target_record_types": [
            "PROJECT_GENESIS",
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        },
        "intent_baseline_ref": {
          "kind": "ref",
          "target_record_types": [
            "INTENT_BASELINE"
          ],
          "same_project": true
        },
        "task_id": "ascii_id",
        "convergence_root_ref": {
          "kind": "ref",
          "target_record_types": [
            "CONVERGENCE_ROOT"
          ],
          "same_project": true
        },
        "lifecycle_node_id": "ascii_id",
        "capability_binding_ref": {
          "kind": "ref",
          "target_record_types": [
            "CAPABILITY_BINDING"
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
        "purpose": "unicode_scalar_string",
        "scope": "list<unicode_scalar_string>",
        "prohibited_scope": "list<unicode_scalar_string>",
        "completion_conditions": "list<unicode_scalar_string>"
      },
      "optional_fields": {
        "parent_task_ref": {
          "kind": "ref",
          "target_record_types": [
            "TASK_CONTRACT"
          ],
          "same_project": true
        }
      },
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "REF_FIELD_EQUALS_REF_FIELD",
          "left_ref_field": "capability_binding_ref",
          "left_target_field": "capability_id",
          "right_ref_field": "operation_contract_ref",
          "right_target_field": "capability_id"
        }
      ]
    },
    "REVIEW_REQUEST": {
      "required_fields": {
        "record_type": "enum(REVIEW_REQUEST)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "compiled_under_authority_ref": {
          "kind": "ref",
          "target_record_types": [
            "PROJECT_GENESIS",
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        },
        "review_request_id": "ascii_id",
        "task_contract_ref": {
          "kind": "ref",
          "target_record_types": [
            "TASK_CONTRACT"
          ],
          "same_project": true
        },
        "review_purpose": "ascii_id",
        "subject_refs": {
          "kind": "list",
          "items": "sha256_ref",
          "min_items": 1,
          "set_semantics": true
        },
        "required_independence_dimensions": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 0,
          "set_semantics": true
        },
        "required_evidence_refs": {
          "kind": "list",
          "items": "sha256_ref",
          "min_items": 0,
          "set_semantics": true
        }
      },
      "optional_fields": {},
      "unknown_fields": "REJECT"
    },
    "PUBLICATION_MECHANISM_PLAN": {
      "required_fields": {
        "record_type": "enum(PUBLICATION_MECHANISM_PLAN)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "plan_id": "ascii_id",
        "environment_subject": "unicode_scalar_string",
        "publication_adapter_id": "ascii_id",
        "publication_adapter_version": "unicode_scalar_string",
        "expected_predecessor_ref": {
          "kind": "ref",
          "target_record_types": [
            "PROJECT_GENESIS",
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        },
        "publication_target": "unicode_scalar_string",
        "required_guarantees": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 1,
          "set_semantics": true
        },
        "publication_adapter_digest": "sha256_hex"
      },
      "optional_fields": {},
      "unknown_fields": "REJECT"
    },
    "PUBLICATION_OUTCOME_RECEIPT": {
      "required_fields": {
        "record_type": "enum(PUBLICATION_OUTCOME_RECEIPT)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "receipt_id": "ascii_id",
        "transition_ref": {
          "kind": "ref",
          "target_record_types": [
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        },
        "publication_mechanism_plan_ref": {
          "kind": "ref",
          "target_record_types": [
            "PUBLICATION_MECHANISM_PLAN"
          ],
          "same_project": true
        },
        "observed_result": "enum(PUBLISHED,NOT_PUBLISHED,UNKNOWN)",
        "canonical_target": "unicode_scalar_string",
        "observed_at": "rfc3339_utc_timestamp",
        "publication_proof_ref": {
          "kind": "ref",
          "target_record_types": [
            "EXTERNAL_OBSERVATION"
          ],
          "same_project": true
        }
      },
      "optional_fields": {},
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "AUTHORITY_PUBLICATION_RECEIPT_PROOF_VALID",
          "transition_ref_field": "transition_ref",
          "publication_plan_ref_field": "publication_mechanism_plan_ref",
          "publication_proof_ref_field": "publication_proof_ref",
          "canonical_target_field": "canonical_target",
          "observed_result_field": "observed_result"
        }
      ]
    },
    "AUTHORITY_CURRENTNESS_OBSERVATION": {
      "required_fields": {
        "record_type": "enum(AUTHORITY_CURRENTNESS_OBSERVATION)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "observation_id": "ascii_id",
        "observed_transition_ref": {
          "kind": "ref",
          "target_record_types": [
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        },
        "canonical_target": "unicode_scalar_string",
        "observation_result": "enum(CURRENT,STALE,UNKNOWN)",
        "observed_at": "rfc3339_utc_timestamp",
        "freshness_deadline": "rfc3339_utc_timestamp",
        "revision": "safe_integer",
        "currentness_proof_ref": {
          "kind": "ref",
          "target_record_types": [
            "EXTERNAL_OBSERVATION"
          ],
          "same_project": true
        }
      },
      "optional_fields": {
        "predecessor_currentness_observation_ref": {
          "kind": "ref",
          "target_record_types": [
            "AUTHORITY_CURRENTNESS_OBSERVATION"
          ],
          "same_project": true
        }
      },
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "RECOVERY_REVISION_VALID",
          "identity_fields": [
            "observed_transition_ref",
            "canonical_target"
          ],
          "revision_field": "revision",
          "predecessor_field": "predecessor_currentness_observation_ref"
        },
        {
          "predicate": "AUTHORITY_CURRENTNESS_OBSERVATION_PROOF_VALID",
          "observed_transition_ref_field": "observed_transition_ref",
          "canonical_target_field": "canonical_target",
          "observation_result_field": "observation_result",
          "currentness_proof_ref_field": "currentness_proof_ref"
        }
      ]
    },
    "CONVERGENCE_EXTENSION": {
      "required_fields": {
        "record_type": "enum(CONVERGENCE_EXTENSION)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "compiled_under_authority_ref": {
          "kind": "ref",
          "target_record_types": [
            "PROJECT_GENESIS",
            "AUTHORITY_TRANSITION"
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
        "predecessor_policy_ref": {
          "kind": "ref",
          "target_record_types": [
            "CONVERGENCE_POLICY"
          ],
          "same_project": true
        },
        "extension_sequence": "safe_integer",
        "dimension_ids": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 1,
          "set_semantics": true
        },
        "dimension_delta_values": {
          "kind": "list",
          "items": "safe_integer",
          "min_items": 1
        },
        "authority_mode": "enum(HUMAN_EXPLICIT,PREAUTHORIZED_POLICY)",
        "trigger_evidence_refs": {
          "kind": "list",
          "items": "sha256_ref",
          "min_items": 1,
          "set_semantics": true
        }
      },
      "optional_fields": {
        "human_statement_ref": {
          "kind": "ref",
          "target_record_types": [
            "HUMAN_STATEMENT"
          ],
          "same_project": true
        },
        "preauthorized_policy_ref": {
          "kind": "ref",
          "target_record_types": [
            "CONVERGENCE_POLICY"
          ],
          "same_project": true
        }
      },
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "PARALLEL_LIST_LENGTH_EQUAL",
          "fields": [
            "dimension_ids",
            "dimension_delta_values"
          ]
        }
      ]
    },
    "CONVERGENCE_TRANCHE": {
      "required_fields": {
        "record_type": "enum(CONVERGENCE_TRANCHE)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "convergence_root_ref": {
          "kind": "ref",
          "target_record_types": [
            "CONVERGENCE_ROOT"
          ],
          "same_project": true
        },
        "tranche_id": "ascii_id",
        "authority_ref": {
          "kind": "ref",
          "target_record_types": [
            "PROJECT_GENESIS",
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        },
        "continuity_epoch": "safe_integer",
        "dimension_ids": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 1,
          "set_semantics": true
        },
        "granted_capacity_values": {
          "kind": "list",
          "items": "safe_integer",
          "min_items": 1
        },
        "consumed_capacity_values": {
          "kind": "list",
          "items": "safe_integer",
          "min_items": 1
        }
      },
      "optional_fields": {},
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "PARALLEL_LIST_LENGTH_EQUAL",
          "fields": [
            "dimension_ids",
            "granted_capacity_values",
            "consumed_capacity_values"
          ]
        },
        {
          "predicate": "ALL_SAFE_INTEGER_LIST_VALUES_ZERO",
          "field": "consumed_capacity_values"
        }
      ]
    },
    "REPOSITORY_BINDING": {
      "required_fields": {
        "record_type": "enum(REPOSITORY_BINDING)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "binding_id": "ascii_id",
        "provider": "unicode_scalar_string",
        "canonical_repository_identity": "unicode_scalar_string",
        "persistence_ref": "unicode_scalar_string",
        "synchronization_policy": "enum(PUSH_ON_BOUNDED_CLOSEOUT,LOCAL_ONLY,EXTERNAL_POLICY)",
        "force_push_allowed": "bool",
        "merge_on_closeout": "bool",
        "push_side_effect_classification": "ascii_id",
        "remote_currentness_method": "ascii_id"
      },
      "optional_fields": {},
      "unknown_fields": "REJECT"
    },
    "REPOSITORY_SYNC_INTENT": {
      "required_fields": {
        "record_type": "enum(REPOSITORY_SYNC_INTENT)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "sync_intent_id": "ascii_id",
        "repository_binding_ref": {
          "kind": "ref",
          "target_record_types": [
            "REPOSITORY_BINDING"
          ],
          "same_project": true
        },
        "persistence_ref": "unicode_scalar_string",
        "target_commit_relation": "enum(CONTAINING_COMMIT)",
        "required_readback": "bool",
        "closeout_classification": "ascii_id"
      },
      "optional_fields": {},
      "unknown_fields": "REJECT"
    },
    "REPOSITORY_SYNC_OBSERVATION": {
      "required_fields": {
        "record_type": "enum(REPOSITORY_SYNC_OBSERVATION)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "repository_binding_identity": "unicode_scalar_string",
        "persistence_ref": "unicode_scalar_string",
        "local_commit": "unicode_scalar_string",
        "observed_remote_commit": "unicode_scalar_string",
        "sync_classification": "enum(REPOSITORY_SYNCED,LOCAL_AHEAD_REMOTE,REMOTE_AHEAD_LOCAL,REMOTE_DIVERGED,REMOTE_SYNC_UNKNOWN,REMOTE_SYNC_BLOCKED,EXTERNAL_STOP_PROHIBITS_SYNC,NO_CANONICAL_REMOTE)",
        "observed_at": "unicode_scalar_string",
        "evidence_locator": "unicode_scalar_string"
      },
      "optional_fields": {},
      "unknown_fields": "REJECT"
    },
    "HUMAN_STATEMENT": {
      "required_fields": {
        "record_type": "enum(HUMAN_STATEMENT)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "statement_id": "ascii_id",
        "statement_class": "enum(GOAL,INTENT_CONFIRMATION,STOP,RESUME,CONVERGENCE_EXTENSION,MIGRATION_APPROVAL,FORK_RESOLUTION_APPROVAL,EXECUTION_APPROVAL,OTHER)",
        "exact_statement": "unicode_scalar_string",
        "authority_assurance": "enum(DIRECT_SESSION_HUMAN,PROTECTED_HUMAN_ATTESTATION,SIGNED_EXTERNAL_AUTHORITY,HISTORICALLY_ACCEPTED_HUMAN_PROVENANCE,UNKNOWN)",
        "subject_refs": {
          "kind": "list",
          "items": {
            "kind": "ref",
            "target_record_types": [
              "PROJECT_GENESIS",
              "AUTHORITY_TRANSITION",
              "INTENT_BASELINE",
              "RUN_HORIZON",
              "CONVERGENCE_EXTENSION",
              "CONVERGENCE_TRANCHE",
              "FORK_RESOLUTION_PLAN",
              "KERNEL_MANIFEST",
              "CAPABILITY_BINDING",
              "OPERATION_CONTRACT",
              "TASK_CONTRACT"
            ],
            "same_project": true
          },
          "min_items": 0,
          "set_semantics": true
        }
      },
      "optional_fields": {
        "captured_at": "unicode_scalar_string"
      },
      "unknown_fields": "REJECT"
    },
    "CONVERGENCE_ROOT": {
      "required_fields": {
        "record_type": "enum(CONVERGENCE_ROOT)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "root_id": "ascii_id",
        "objective_identity": "unicode_scalar_string",
        "policy_ref": {
          "kind": "ref",
          "target_record_types": [
            "CONVERGENCE_POLICY"
          ],
          "same_project": true
        }
      },
      "optional_fields": {},
      "unknown_fields": "REJECT"
    },
    "DISTRIBUTION_ORIGIN": {
      "required_fields": {
        "record_type": "enum(DISTRIBUTION_ORIGIN)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "machine_name": "enum(Markdown Machine)",
        "machine_version": "unicode_scalar_string",
        "source_transport": "enum(ARCHIVE,GIT_REPOSITORY)",
        "source_identity": "unicode_scalar_string",
        "content_set_digest": "sha256_hex",
        "compatibility_family": "ascii_id",
        "governing_source_paths": {
          "kind": "list",
          "items": "unicode_scalar_string",
          "min_items": 7,
          "set_semantics": true
        },
        "governing_source_digests": {
          "kind": "list",
          "items": "sha256_hex",
          "min_items": 7
        },
        "selected_capability_source_paths": {
          "kind": "list",
          "items": "unicode_scalar_string",
          "min_items": 0,
          "set_semantics": true
        },
        "selected_capability_source_digests": {
          "kind": "list",
          "items": "sha256_hex",
          "min_items": 0
        }
      },
      "optional_fields": {
        "git_commit": "unicode_scalar_string",
        "git_tree": "unicode_scalar_string"
      },
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "GIT_SOURCE_FIELDS_MATCH_TRANSPORT",
          "transport_field": "source_transport",
          "commit_field": "git_commit",
          "tree_field": "git_tree"
        },
        {
          "predicate": "PARALLEL_LIST_LENGTH_EQUAL",
          "fields": [
            "governing_source_paths",
            "governing_source_digests"
          ]
        },
        {
          "predicate": "PARALLEL_LIST_LENGTH_EQUAL",
          "fields": [
            "selected_capability_source_paths",
            "selected_capability_source_digests"
          ]
        }
      ]
    },
    "CONVERGENCE_POLICY": {
      "required_fields": {
        "record_type": "enum(CONVERGENCE_POLICY)",
        "schema_version": "safe_integer",
        "project_id": "ascii_id",
        "policy_id": "ascii_id",
        "dimension_ids": {
          "kind": "list",
          "items": "ascii_id",
          "min_items": 1,
          "set_semantics": true
        },
        "authorized_total_values": {
          "kind": "list",
          "items": "safe_integer",
          "min_items": 1
        },
        "preauthorized_extension_event_limit": "safe_integer",
        "preauthorized_extension_delta_limit_values": {
          "kind": "list",
          "items": "safe_integer",
          "min_items": 1
        }
      },
      "optional_fields": {
        "compiled_under_authority_ref": {
          "kind": "ref",
          "target_record_types": [
            "PROJECT_GENESIS",
            "AUTHORITY_TRANSITION"
          ],
          "same_project": true
        }
      },
      "unknown_fields": "REJECT",
      "cross_record_invariants": [
        {
          "predicate": "PARALLEL_LIST_LENGTH_EQUAL",
          "fields": [
            "dimension_ids",
            "authorized_total_values",
            "preauthorized_extension_delta_limit_values"
          ]
        }
      ]
    }
  },
  "registry_invariants": {
    "unknown_record_contract": "REJECT_FOR_GOVERNING_USE",
    "governance_critical_reference_must_be_typed": true,
    "templates_are_authoritative": false,
    "prose_can_expand_schema": false
  }
}
---
# Governing Record Contracts

This structured registry is the exact schema authority for positive governing records. It uses `MM-CONTRACT-EVAL/1` typed references and cross-record predicates. Field names and prose do not imply referent type.

The generic record factory is authoring guidance only. A record used for authority, Task admission, lifecycle, capability binding, convergence authorization, or repository binding must validate against the exact contract here.

`KERNEL_MANIFEST.human_control_profile_ref` is required and exact-identity typed to `HUMAN_CONTROL_PROFILE/MM-HUMAN-CONTROL/1`; Genesis fixed governing-source membership binds that ref to the exact selected-source bytes before the profile may govern human-control interpretation.

Cold recovery also uses the separate exact `RECOVERY-CRITICAL-CONTRACTS/v1` registry for safety/evidence state.
