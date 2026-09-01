---
{
  "record_type": "OPERATION_FLOOR_VOCABULARY",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.5.1",
  "contract_id": "OPERATION-FLOORS/v2",
  "authoritative_contract": true,
  "project_output_eligible": true,
  "materialization_rule": "EXACT_EXPORT_REQUIRED",
  "allowed_ids": {
    "authority": [
      "CURRENT_ADMITTED_TASK_AUTHORITY"
    ],
    "effect": [
      "NONE",
      "LOCAL_REVERSIBLE",
      "REPOSITORY_WRITE",
      "PROJECT_SPECIFIC",
      "HUMAN_RESERVED"
    ],
    "review": [
      "NONE",
      "SELF_CHECK",
      "INDEPENDENT_REQUIRED"
    ],
    "resource": [
      "NONE",
      "SERIAL",
      "PROJECT_SPECIFIC"
    ],
    "human_boundary": [
      "TECHNICAL_AUTONOMY",
      "HUMAN_IF_INTENT",
      "HUMAN_REQUIRED",
      "HUMAN_IF_RESERVED_EFFECT"
    ]
  },
  "satisfaction_relations": {
    "authority": {
      "CURRENT_ADMITTED_TASK_AUTHORITY": [
        "CURRENT_ADMITTED_TASK_AUTHORITY"
      ]
    },
    "effect": {
      "NONE": [
        "NONE"
      ],
      "LOCAL_REVERSIBLE": [
        "NONE",
        "LOCAL_REVERSIBLE"
      ],
      "REPOSITORY_WRITE": [
        "NONE",
        "LOCAL_REVERSIBLE",
        "REPOSITORY_WRITE"
      ],
      "PROJECT_SPECIFIC": [
        "NONE",
        "LOCAL_REVERSIBLE",
        "REPOSITORY_WRITE",
        "PROJECT_SPECIFIC"
      ],
      "HUMAN_RESERVED": [
        "NONE",
        "LOCAL_REVERSIBLE",
        "REPOSITORY_WRITE",
        "PROJECT_SPECIFIC",
        "HUMAN_RESERVED"
      ]
    },
    "review": {
      "NONE": [
        "NONE",
        "SELF_CHECK",
        "INDEPENDENT_REQUIRED"
      ],
      "SELF_CHECK": [
        "SELF_CHECK",
        "INDEPENDENT_REQUIRED"
      ],
      "INDEPENDENT_REQUIRED": [
        "INDEPENDENT_REQUIRED"
      ]
    },
    "resource": {
      "NONE": [
        "NONE",
        "SERIAL",
        "PROJECT_SPECIFIC"
      ],
      "SERIAL": [
        "SERIAL",
        "PROJECT_SPECIFIC"
      ],
      "PROJECT_SPECIFIC": [
        "PROJECT_SPECIFIC"
      ]
    },
    "human_boundary": {
      "TECHNICAL_AUTONOMY": [
        "TECHNICAL_AUTONOMY",
        "HUMAN_IF_INTENT",
        "HUMAN_IF_RESERVED_EFFECT",
        "HUMAN_REQUIRED"
      ],
      "HUMAN_IF_INTENT": [
        "HUMAN_IF_INTENT",
        "HUMAN_REQUIRED"
      ],
      "HUMAN_IF_RESERVED_EFFECT": [
        "HUMAN_IF_RESERVED_EFFECT",
        "HUMAN_REQUIRED"
      ],
      "HUMAN_REQUIRED": [
        "HUMAN_REQUIRED"
      ]
    }
  },
  "operation_contract_satisfaction_algorithm": [
    {
      "step": 1,
      "op": "RESOLVE_PINNED_CAPABILITY_RUNTIME",
      "source": "CAPABILITY_BINDING.capability_source_ref"
    },
    {
      "step": 2,
      "op": "LOOKUP_OPERATION_FLOOR",
      "key": "OPERATION_CONTRACT.operation_family"
    },
    {
      "step": 3,
      "op": "REJECT_UNKNOWN_IDS",
      "dimensions": [
        "authority",
        "effect",
        "review",
        "resource",
        "human_boundary"
      ]
    },
    {
      "step": 4,
      "op": "REQUIRE_MATRIX_MEMBERSHIP",
      "dimensions": [
        "authority",
        "effect",
        "review",
        "resource",
        "human_boundary"
      ]
    },
    {
      "step": 5,
      "op": "REQUIRE_SET_SUBSET",
      "left": "OPERATION_CONTRACT.allowed_effect_classes",
      "right": "CAPABILITY_RUNTIME.allowed_effect_classes"
    },
    {
      "step": 6,
      "op": "REQUIRE_SET_SUBSET",
      "left": "CAPABILITY_RUNTIME.prohibited_effect_classes",
      "right": "OPERATION_CONTRACT.prohibited_effect_classes"
    },
    {
      "step": 7,
      "op": "REQUIRE_MEMBER",
      "value": "UNDECLARED_EFFECT",
      "set": "OPERATION_CONTRACT.prohibited_effect_classes"
    }
  ],
  "relation_direction": "CAPABILITY_ENTRY_IS_MAXIMUM_PERMISSION_OR_MINIMUM_SAFETY_REQUIREMENT;CONTRACT_MAY_BE_MORE_RESTRICTIVE_OR_REQUIRE_STRONGER_REVIEW_RESOURCE_HUMAN_BOUNDARY_ONLY_AS_EXACT_MATRIX_PERMITS",
  "unknown_floor_id": "REJECT",
  "unknown_operation_family": "REJECT",
  "reservation_mode_ids": [
    "SERIAL",
    "EXCLUSIVE",
    "FENCED"
  ],
  "resource_floor_to_reservation_modes": {
    "NONE": [],
    "SERIAL": [
      "SERIAL",
      "EXCLUSIVE",
      "FENCED"
    ],
    "PROJECT_SPECIFIC": [
      "EXCLUSIVE",
      "FENCED"
    ]
  },
  "resource_floor_reservation_requirement": {
    "NONE": {
      "minimum_current_reservations": 0,
      "reservation_optional": true
    },
    "SERIAL": {
      "minimum_current_reservations": 1,
      "reservation_optional": false
    },
    "PROJECT_SPECIFIC": {
      "minimum_current_reservations": 1,
      "reservation_optional": false
    }
  },
  "unknown_reservation_mode": "REJECT",
  "resource_proof_assurance_order": [
    "PEER_DECLARATION",
    "LOCAL_MECHANICAL_PROOF",
    "REMOTE_MECHANICAL_PROOF",
    "PROTECTED_ATTESTATION"
  ],
  "resource_reservation_proof_requirements": {
    "NONE": {},
    "SERIAL": {
      "SERIAL": {
        "required_dimension_id": "resource_fencing",
        "required_guarantee": "SERIAL_OPERATION_ONLY",
        "minimum_proof_assurance": "LOCAL_MECHANICAL_PROOF",
        "fencing_token": "MUST_BE_ABSENT_OR_NULL"
      },
      "EXCLUSIVE": {
        "required_dimension_id": "resource_fencing",
        "required_guarantee": "EXCLUSIVE_RESERVATION",
        "minimum_proof_assurance": "LOCAL_MECHANICAL_PROOF",
        "fencing_token": "OPTIONAL"
      },
      "FENCED": {
        "required_dimension_id": "resource_fencing",
        "required_guarantee": "FENCING_TOKEN_ENFORCED",
        "minimum_proof_assurance": "LOCAL_MECHANICAL_PROOF",
        "fencing_token": "REQUIRED_NONEMPTY"
      }
    },
    "PROJECT_SPECIFIC": {
      "EXCLUSIVE": {
        "required_dimension_id": "resource_fencing",
        "required_guarantee": "EXCLUSIVE_RESERVATION",
        "minimum_proof_assurance": "LOCAL_MECHANICAL_PROOF",
        "fencing_token": "OPTIONAL"
      },
      "FENCED": {
        "required_dimension_id": "resource_fencing",
        "required_guarantee": "FENCING_TOKEN_ENFORCED",
        "minimum_proof_assurance": "LOCAL_MECHANICAL_PROOF",
        "fencing_token": "REQUIRED_NONEMPTY"
      }
    }
  },
  "resource_proof_unknown_guarantee": "REJECT",
  "attempt_resource_satisfaction_algorithm": {
    "NONE": "resource_reservation_refs MUST_BE_EMPTY",
    "SERIAL": "AT_LEAST_ONE_CURRENT_RESERVED_PROOF_BACKED_RESERVATION_SAME_TASK_WITH_MODE_IN_resource_floor_to_reservation_modes.SERIAL",
    "PROJECT_SPECIFIC": "AT_LEAST_ONE_CURRENT_RESERVED_PROOF_BACKED_RESERVATION_SAME_TASK_WITH_MODE_IN_resource_floor_to_reservation_modes.PROJECT_SPECIFIC",
    "stale_reservation_revision": "REJECT",
    "unknown_or_released_reservation": "REJECT"
  },
  "resource_proof_evaluation_mode": "LIVE_ADAPTER_REVALIDATION_REQUIRED_AT_ATTEMPT_PREFLIGHT",
  "markdown_reservation_assertion_without_live_adapter_proof": "REJECT"
}
---
# Operation Floor Vocabulary

This file replaces prose notions such as “meet or exceed” with exact membership relations.

For each dimension, the key in `satisfaction_relations` is the floor required by the pinned capability runtime entry. The listed values are the only OperationContract floor IDs that satisfy that requirement.

Effect permissions are additionally constrained by set inclusion: an instantiated OperationContract may authorize only effect classes already listed by the exact capability operation-family entry. It may always be more restrictive.

Unknown floor IDs, unknown operation families, or effect classes outside the pinned capability ceiling are invalid.
