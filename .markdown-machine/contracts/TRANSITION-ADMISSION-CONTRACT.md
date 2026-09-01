---
{
  "record_type": "TRANSITION_ADMISSION_CONTRACT",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.4.0",
  "contract_id": "TRANSITION-ADMISSION/v2",
  "schema_profile": "SMF-SCHEMA/1",
  "contract_evaluation_profile": "MM-CONTRACT-EVAL/1",
  "authoritative_contract": true,
  "project_output_eligible": true,
  "materialization_rule": "EXACT_EXPORT_REQUIRED",
  "ordinary_transition_schema_ref": "GOVERNING-RECORD-CONTRACTS/v2#AUTHORITY_TRANSITION",
  "project_genesis_admission": "BOOTSTRAP_PROFILE_ONLY",
  "human_authority_modes": {
    "NONE": {
      "operator": {
        "op": "HUMAN_AUTHORITY",
        "args": {
          "mode": "NONE",
          "statement_class": null,
          "subject_mode": "NONE",
          "minimum_assurance": "NONE"
        }
      }
    },
    "REQUIRE_STATEMENT_CLASS": {
      "operator_template": {
        "op": "HUMAN_AUTHORITY",
        "args": {
          "mode": "REQUIRE_STATEMENT_CLASS",
          "statement_class": "$transition_rule.statement_class",
          "subject_mode": "$transition_rule.subject_mode",
          "minimum_assurance": "CURRENT_HUMAN"
        }
      }
    },
    "CONDITIONAL_CONVERGENCE_EXTENSION": {
      "operator": {
        "op": "HUMAN_AUTHORITY",
        "args": {
          "mode": "CONDITIONAL_CONVERGENCE_EXTENSION",
          "statement_class": null,
          "subject_mode": "EXACT_CONVERGENCE_EXTENSION",
          "minimum_assurance": "CURRENT_HUMAN"
        }
      }
    }
  },
  "effect_delta_modes": {
    "NO_NEW_EFFECT_AUTHORITY": {
      "operator": {
        "op": "EFFECT_DELTA",
        "args": {
          "mode": "NO_NEW_EFFECT_AUTHORITY"
        }
      }
    },
    "DENY_ONLY": {
      "operator": {
        "op": "EFFECT_DELTA",
        "args": {
          "mode": "DENY_ONLY"
        }
      }
    },
    "BOUND_OPERATION_CEILING_ONLY": {
      "operator": {
        "op": "EFFECT_DELTA",
        "args": {
          "mode": "BOUND_OPERATION_CEILING_ONLY"
        }
      }
    }
  },
  "precondition_definitions": {
    "BOUND_CAPABILITY_AUTHORIZED_BY_CURRENT_INTENT": [
      {
        "op": "BOUND_COUNT",
        "args": {
          "record_type": "CAPABILITY_BINDING",
          "min": 1,
          "max": 1
        }
      },
      {
        "op": "BOUND_REF_EQUALS_CURRENT_SINGLETON",
        "args": {
          "bound_record_type": "CAPABILITY_BINDING",
          "bound_ref_field": "intent_baseline_ref",
          "current_record_type": "INTENT_BASELINE"
        }
      },
      {
        "op": "BOUND_FIELD_MEMBER_OF_REFERENT_LIST",
        "args": {
          "bound_record_type": "CAPABILITY_BINDING",
          "value_field": "capability_id",
          "referent_ref_field": "intent_baseline_ref",
          "referent_list_field": "authorized_capability_ids"
        }
      },
      {
        "op": "BOUND_REF_MEMBER_OF_KERNEL_SELECTED_CAPABILITIES",
        "args": {
          "bound_record_type": "CAPABILITY_BINDING",
          "ref_field": "capability_source_ref"
        }
      }
    ],
    "BOUND_OPERATION_CONTRACTS_SATISFY_FLOORS": [
      {
        "op": "ALL_BOUND_OPERATION_FLOORS_SATISFY",
        "args": {}
      }
    ],
    "TASK_REFERENCES_CURRENT_INTENT_CAPABILITY_OPERATION": [
      {
        "op": "BOUND_TASK_LINKS_CURRENT_BINDINGS",
        "args": {}
      }
    ],
    "LIFECYCLE_REFERENCES_CURRENT_BINDINGS_AND_HORIZON": [
      {
        "op": "BOUND_LIFECYCLE_LINKS_CURRENT",
        "args": {}
      }
    ],
    "NEW_HORIZON_STRICT_SUPERSET_CURRENT": [
      {
        "op": "BOUND_RUN_HORIZON_RELATION",
        "args": {
          "relation": "STRICT_SUPERSET"
        }
      }
    ],
    "NEW_HORIZON_SUBSET_OR_EQUAL_CURRENT": [
      {
        "op": "BOUND_RUN_HORIZON_RELATION",
        "args": {
          "relation": "SUBSET_OR_EQUAL"
        }
      }
    ],
    "REVIEW_REQUEST_MATCHES_CURRENT_TASK": [
      {
        "op": "BOUND_REVIEW_REQUESTS_MATCH_CURRENT_TASKS",
        "args": {}
      }
    ],
    "CONVERGENCE_EXTENSION_AUTHORIZED": [
      {
        "op": "CONVERGENCE_EXTENSION_VALID",
        "args": {}
      }
    ],
    "TASK_REVIEW_REQUIREMENT_MATERIALIZED": [
      {
        "op": "TASK_REVIEW_REQUIREMENT_MATERIALIZED",
        "args": {}
      }
    ],
    "REQUIRED_REVIEW_RESULTS_PASS": [
      {
        "op": "REQUIRED_REVIEW_RESULTS_PASS",
        "args": {}
      }
    ],
    "FORK_RESOLUTION_VALID": [
      {
        "op": "FORK_RESOLUTION_VALID",
        "args": {}
      }
    ],
    "KERNEL_MIGRATION_SOURCE_PINNED": [
      {
        "op": "KERNEL_MIGRATION_SOURCE_PINNED",
        "args": {}
      }
    ],
    "CAPABILITY_MIGRATION_SOURCE_PINNED": [
      {
        "op": "CAPABILITY_MIGRATION_SOURCE_PINNED",
        "args": {}
      }
    ],
    "TASK_CANCELS_CURRENT_TASK": [
      {
        "op": "TASK_CANCEL_VALID",
        "args": {}
      }
    ],
    "INITIAL_CONVERGENCE_TRANCHE_VALID": [
      {
        "op": "INITIAL_CONVERGENCE_TRANCHE_VALID",
        "args": {}
      }
    ],
    "RESULT_ACCEPT_LINKS_CURRENT_TASK": [
      {
        "op": "RESULT_ACCEPT_LINKS_CURRENT_TASK",
        "args": {}
      }
    ],
    "FORK_RESOLUTION_PUBLICATION_GUARANTEE": [
      {
        "op": "FORK_RESOLUTION_PUBLICATION_GUARANTEE",
        "args": {}
      }
    ]
  },
  "transition_rules": {
    "INTENT_ACCEPT": {
      "binding_cardinality": {
        "INTENT_BASELINE": {
          "min": 1,
          "max": 1
        },
        "RUN_HORIZON": {
          "min": 1,
          "max": 1
        },
        "CONVERGENCE_TRANCHE": {
          "min": 1,
          "max": 1
        }
      },
      "human_authority": {
        "mode": "REQUIRE_STATEMENT_CLASS",
        "statement_class": "INTENT_CONFIRMATION",
        "subject_mode": "EXACT_BOUND_CONTRACT_SET"
      },
      "effect_delta_mode": "NO_NEW_EFFECT_AUTHORITY",
      "predecessor_cardinality": {
        "min": 1,
        "max": 1
      },
      "preconditions": [
        "INITIAL_CONVERGENCE_TRANCHE_VALID"
      ]
    },
    "INTENT_SUPERSEDE": {
      "binding_cardinality": {
        "INTENT_BASELINE": {
          "min": 1,
          "max": 1
        },
        "RUN_HORIZON": {
          "min": 1,
          "max": 1
        }
      },
      "human_authority": {
        "mode": "REQUIRE_STATEMENT_CLASS",
        "statement_class": "INTENT_CONFIRMATION",
        "subject_mode": "EXACT_BOUND_CONTRACT_SET"
      },
      "effect_delta_mode": "NO_NEW_EFFECT_AUTHORITY",
      "predecessor_cardinality": {
        "min": 1,
        "max": 1
      },
      "preconditions": []
    },
    "CAPABILITY_BIND": {
      "binding_cardinality": {
        "CAPABILITY_BINDING": {
          "min": 1,
          "max": 1
        },
        "OPERATION_CONTRACT": {
          "min": 1,
          "max": 100
        }
      },
      "human_authority": {
        "mode": "NONE",
        "subject_mode": "NONE"
      },
      "effect_delta_mode": "NO_NEW_EFFECT_AUTHORITY",
      "predecessor_cardinality": {
        "min": 1,
        "max": 1
      },
      "preconditions": [
        "BOUND_CAPABILITY_AUTHORIZED_BY_CURRENT_INTENT",
        "BOUND_OPERATION_CONTRACTS_SATISFY_FLOORS"
      ]
    },
    "CAPABILITY_SUSPEND": {
      "binding_cardinality": {
        "CAPABILITY_BINDING": {
          "min": 1,
          "max": 1
        }
      },
      "human_authority": {
        "mode": "NONE",
        "subject_mode": "NONE"
      },
      "effect_delta_mode": "DENY_ONLY",
      "predecessor_cardinality": {
        "min": 1,
        "max": 1
      },
      "preconditions": []
    },
    "LIFECYCLE_PUBLISH": {
      "binding_cardinality": {
        "LIFECYCLE_GRAPH": {
          "min": 1,
          "max": 1
        }
      },
      "human_authority": {
        "mode": "NONE",
        "subject_mode": "NONE"
      },
      "effect_delta_mode": "NO_NEW_EFFECT_AUTHORITY",
      "predecessor_cardinality": {
        "min": 1,
        "max": 1
      },
      "preconditions": [
        "LIFECYCLE_REFERENCES_CURRENT_BINDINGS_AND_HORIZON"
      ]
    },
    "RUN_HORIZON_RAISE": {
      "binding_cardinality": {
        "RUN_HORIZON": {
          "min": 1,
          "max": 1
        }
      },
      "human_authority": {
        "mode": "REQUIRE_STATEMENT_CLASS",
        "statement_class": "INTENT_CONFIRMATION",
        "subject_mode": "EXACT_BOUND_CONTRACT_SET"
      },
      "effect_delta_mode": "NO_NEW_EFFECT_AUTHORITY",
      "predecessor_cardinality": {
        "min": 1,
        "max": 1
      },
      "preconditions": [
        "NEW_HORIZON_STRICT_SUPERSET_CURRENT"
      ]
    },
    "RUN_HORIZON_LOWER": {
      "binding_cardinality": {
        "RUN_HORIZON": {
          "min": 1,
          "max": 1
        }
      },
      "human_authority": {
        "mode": "NONE",
        "subject_mode": "NONE"
      },
      "effect_delta_mode": "DENY_ONLY",
      "predecessor_cardinality": {
        "min": 1,
        "max": 1
      },
      "preconditions": [
        "NEW_HORIZON_SUBSET_OR_EQUAL_CURRENT"
      ]
    },
    "TASK_AUTHORIZE": {
      "binding_cardinality": {
        "TASK_CONTRACT": {
          "min": 1,
          "max": 1
        },
        "REVIEW_REQUEST": {
          "min": 0,
          "max": 20
        }
      },
      "human_authority": {
        "mode": "NONE",
        "subject_mode": "NONE"
      },
      "effect_delta_mode": "BOUND_OPERATION_CEILING_ONLY",
      "predecessor_cardinality": {
        "min": 1,
        "max": 1
      },
      "preconditions": [
        "TASK_REFERENCES_CURRENT_INTENT_CAPABILITY_OPERATION",
        "TASK_REVIEW_REQUIREMENT_MATERIALIZED"
      ]
    },
    "TASK_CANCEL": {
      "binding_cardinality": {
        "TASK_CONTRACT": {
          "min": 1,
          "max": 1
        }
      },
      "human_authority": {
        "mode": "NONE",
        "subject_mode": "NONE"
      },
      "effect_delta_mode": "DENY_ONLY",
      "predecessor_cardinality": {
        "min": 1,
        "max": 1
      },
      "preconditions": [
        "TASK_CANCELS_CURRENT_TASK"
      ]
    },
    "REVIEW_AUTHORIZE": {
      "binding_cardinality": {
        "REVIEW_REQUEST": {
          "min": 1,
          "max": 20
        }
      },
      "human_authority": {
        "mode": "NONE",
        "subject_mode": "NONE"
      },
      "effect_delta_mode": "NO_NEW_EFFECT_AUTHORITY",
      "predecessor_cardinality": {
        "min": 1,
        "max": 1
      },
      "preconditions": [
        "REVIEW_REQUEST_MATCHES_CURRENT_TASK"
      ]
    },
    "RESULT_ACCEPT": {
      "binding_cardinality": {
        "TASK_CONTRACT": {
          "min": 1,
          "max": 1
        }
      },
      "human_authority": {
        "mode": "NONE",
        "subject_mode": "NONE"
      },
      "effect_delta_mode": "NO_NEW_EFFECT_AUTHORITY",
      "predecessor_cardinality": {
        "min": 1,
        "max": 1
      },
      "preconditions": [
        "RESULT_ACCEPT_LINKS_CURRENT_TASK",
        "REQUIRED_REVIEW_RESULTS_PASS"
      ]
    },
    "STOP": {
      "binding_cardinality": {},
      "human_authority": {
        "mode": "REQUIRE_STATEMENT_CLASS",
        "statement_class": "STOP",
        "subject_mode": "EXACT_PREDECESSOR_SET"
      },
      "effect_delta_mode": "DENY_ONLY",
      "predecessor_cardinality": {
        "min": 1,
        "max": 1
      },
      "preconditions": []
    },
    "RESUME": {
      "binding_cardinality": {},
      "human_authority": {
        "mode": "REQUIRE_STATEMENT_CLASS",
        "statement_class": "RESUME",
        "subject_mode": "EXACT_PREDECESSOR_SET"
      },
      "effect_delta_mode": "NO_NEW_EFFECT_AUTHORITY",
      "predecessor_cardinality": {
        "min": 1,
        "max": 1
      },
      "preconditions": []
    },
    "CONVERGENCE_EXTEND": {
      "binding_cardinality": {
        "CONVERGENCE_EXTENSION": {
          "min": 1,
          "max": 1
        },
        "CONVERGENCE_TRANCHE": {
          "min": 1,
          "max": 1
        }
      },
      "human_authority": {
        "mode": "CONDITIONAL_CONVERGENCE_EXTENSION",
        "subject_mode": "EXACT_CONVERGENCE_EXTENSION"
      },
      "effect_delta_mode": "NO_NEW_EFFECT_AUTHORITY",
      "predecessor_cardinality": {
        "min": 1,
        "max": 1
      },
      "preconditions": [
        "CONVERGENCE_EXTENSION_AUTHORIZED"
      ]
    },
    "AUTHORITY_FORK_RESOLVE": {
      "binding_cardinality": {
        "DISTRIBUTION_ORIGIN": {
          "min": 1,
          "max": 1
        },
        "KERNEL_MANIFEST": {
          "min": 1,
          "max": 1
        },
        "INTENT_BASELINE": {
          "min": 1,
          "max": 1
        },
        "CAPABILITY_BINDING": {
          "min": 0,
          "max": 100
        },
        "LIFECYCLE_GRAPH": {
          "min": 1,
          "max": 1
        },
        "RUN_HORIZON": {
          "min": 1,
          "max": 1
        },
        "OPERATION_CONTRACT": {
          "min": 0,
          "max": 100
        },
        "TASK_CONTRACT": {
          "min": 0,
          "max": 100
        },
        "REVIEW_REQUEST": {
          "min": 0,
          "max": 100
        },
        "CONVERGENCE_POLICY": {
          "min": 1,
          "max": 1
        },
        "REPOSITORY_BINDING": {
          "min": 0,
          "max": 1
        }
      },
      "human_authority": {
        "mode": "REQUIRE_STATEMENT_CLASS",
        "statement_class": "FORK_RESOLUTION_APPROVAL",
        "subject_mode": "EXACT_FORK_PLAN"
      },
      "effect_delta_mode": "NO_NEW_EFFECT_AUTHORITY",
      "predecessor_cardinality": {
        "min": 2,
        "max": 100
      },
      "preconditions": [
        "FORK_RESOLUTION_VALID",
        "FORK_RESOLUTION_PUBLICATION_GUARANTEE"
      ]
    },
    "KERNEL_MIGRATE": {
      "binding_cardinality": {
        "KERNEL_MANIFEST": {
          "min": 1,
          "max": 1
        }
      },
      "human_authority": {
        "mode": "REQUIRE_STATEMENT_CLASS",
        "statement_class": "MIGRATION_APPROVAL",
        "subject_mode": "EXACT_KERNEL_MANIFEST"
      },
      "effect_delta_mode": "NO_NEW_EFFECT_AUTHORITY",
      "predecessor_cardinality": {
        "min": 1,
        "max": 1
      },
      "preconditions": [
        "KERNEL_MIGRATION_SOURCE_PINNED"
      ]
    },
    "CAPABILITY_MIGRATE": {
      "binding_cardinality": {
        "CAPABILITY_BINDING": {
          "min": 1,
          "max": 1
        },
        "OPERATION_CONTRACT": {
          "min": 1,
          "max": 100
        }
      },
      "human_authority": {
        "mode": "REQUIRE_STATEMENT_CLASS",
        "statement_class": "MIGRATION_APPROVAL",
        "subject_mode": "EXACT_CAPABILITY_MIGRATION_SET"
      },
      "effect_delta_mode": "NO_NEW_EFFECT_AUTHORITY",
      "predecessor_cardinality": {
        "min": 1,
        "max": 1
      },
      "preconditions": [
        "CAPABILITY_MIGRATION_SOURCE_PINNED"
      ]
    }
  },
  "transition_evaluation_profile": "MM-TRANSITION-EVAL/1",
  "structural_evaluation": {
    "transition_evaluation_profile": "MM-TRANSITION-EVAL/1",
    "rule_set": "structural_rules",
    "must_run_before_rule_specific_admission": true
  },
  "current_binding_reducer": {
    "transition_evaluation_profile": "MM-TRANSITION-EVAL/1",
    "reducer_id": "CURRENT-BINDING-STATE/v1"
  },
  "global_preconditions": [
    {
      "op": "CURRENT_AUTHORITY_STATE_VALID",
      "args": {}
    },
    {
      "op": "CURRENT_BINDING_STATE_VALID",
      "args": {}
    },
    {
      "op": "ADMISSION_CONTRACT_EQUALS_CURRENT_KERNEL",
      "args": {}
    },
    {
      "op": "ALL_BOUND_CANDIDATES_COMPILED_UNDER_CURRENT_AUTHORITY",
      "args": {}
    },
    {
      "op": "NO_FUTURE_AUTHORIZER_SELF_REFERENCE",
      "args": {}
    },
    {
      "op": "NO_PUBLICATION_OUTCOME_IN_BINDINGS",
      "args": {}
    },
    {
      "op": "AUTHORITY_FORK_STATE_ADMISSIBLE",
      "args": {}
    },
    {
      "op": "TASK_BINDING_MUTATION_ALLOWED",
      "args": {}
    }
  ],
  "closed_policies": {
    "unknown_transition_type": "REJECT",
    "undeclared_binding_type": "REJECT",
    "unknown_precondition_id": "REJECT",
    "unknown_human_authority_mode": "REJECT",
    "unknown_effect_delta_mode": "REJECT",
    "unknown_global_precondition_operator": "REJECT",
    "capability_operation_floor_vocabulary": "OPERATION-FLOORS/v2"
  },
  "current_authority_reducer": "MM-AUTHORITY-CURRENTNESS/1"
}
---
# Transition Admission Contract

This structured contract is exhaustive. Transition admission never interprets phrases such as “material intent,” “stronger floor,” or “allowed effect” from prose.

Each transition type has exact binding cardinalities, human-authority mode, effect-delta mode, predecessor cardinality, and named preconditions. Each precondition ID is defined in this same structured record. Unknown modes or predicates are rejected.

Human-owned semantic changes enter through `INTENT_ACCEPT`/`INTENT_SUPERSEDE` or other transition types that explicitly require a typed HumanStatement class. Routine Task authorization is mechanical only when the Task references the current admitted intent/capability/operation contracts and all exact floor relations pass.

`RESULT_ACCEPT` is linkage-only for its exact current Task. It cannot create or replace Task authority and cannot publish a new lifecycle graph; lifecycle changes use `LIFECYCLE_PUBLISH`. `TASK_AUTHORIZE` is the sole ordinary Task-map creation/rebind transition and `TASK_CANCEL` is the sole ordinary Task-map deletion/tombstone transition.
