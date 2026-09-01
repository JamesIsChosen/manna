---
{
  "record_type": "GENESIS_ADMISSION_PROFILE",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.4.0",
  "profile_id": "DIRECT_HUMAN_GENESIS_ADMISSION/v2",
  "bootstrap_profile_ids": [
    "DIRECT_HUMAN_ARTIFACT_SELECTION/v1",
    "DIRECT_HUMAN_REPOSITORY_SELECTION/v1"
  ],
  "schema_profile": "SMF-SCHEMA/1",
  "contract_evaluation_profile": "MM-CONTRACT-EVAL/1",
  "distribution_only": true,
  "authoritative_contract": true,
  "project_genesis_contract": {
    "unknown_fields": "REJECT",
    "required_fields": {
      "record_type": "enum(PROJECT_GENESIS)",
      "schema_version": "safe_integer",
      "project_id": "ascii_id",
      "project_name": "unicode_scalar_string",
      "authority_epoch": "safe_integer",
      "sequence": "safe_integer",
      "bootstrap_profile_id": "enum(DIRECT_HUMAN_ARTIFACT_SELECTION/v1,DIRECT_HUMAN_REPOSITORY_SELECTION/v1)",
      "source_transport": "enum(ARCHIVE,GIT_REPOSITORY)",
      "selected_content_set_digest": "sha256_hex",
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
      "distribution_origin_ref": {
        "kind": "ref",
        "target_record_types": [
          "DISTRIBUTION_ORIGIN"
        ],
        "same_project": true
      },
      "kernel_manifest_ref": {
        "kind": "ref",
        "target_record_types": [
          "KERNEL_MANIFEST"
        ],
        "same_project": true
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
      "convergence_root_ref": {
        "kind": "ref",
        "target_record_types": [
          "CONVERGENCE_ROOT"
        ],
        "same_project": true
      },
      "convergence_policy_ref": {
        "kind": "ref",
        "target_record_types": [
          "CONVERGENCE_POLICY"
        ],
        "same_project": true
      },
      "source_identity": "unicode_scalar_string"
    },
    "optional_fields": {
      "canonical_repository_ref": "unicode_scalar_string",
      "selected_git_commit": "unicode_scalar_string",
      "selected_git_tree": "unicode_scalar_string",
      "extensions": "object<extensions>"
    },
    "cross_record_invariants": [
      {
        "predicate": "GIT_SOURCE_FIELDS_MATCH_TRANSPORT",
        "transport_field": "source_transport",
        "commit_field": "selected_git_commit",
        "tree_field": "selected_git_tree"
      },
      {
        "predicate": "REF_TARGET_REF_EQUALS_REF",
        "outer_ref_field": "convergence_root_ref",
        "target_ref_field": "policy_ref",
        "other_ref_field": "convergence_policy_ref"
      },
      {
        "predicate": "REF_FIELD_EQUALS_REF_TARGET_FIELD",
        "left_ref_field": "transition_admission_contract_ref",
        "right_ref_field": "kernel_manifest_ref",
        "right_target_field": "transition_admission_contract_ref"
      }
    ]
  },
  "fixed_genesis_rules": {
    "authority_epoch": 0,
    "sequence": 0,
    "predecessor_count": 0,
    "required_human_assurance": "DIRECT_HUMAN_DISTRIBUTION_SELECTION",
    "allowed_initial_bindings": [
      "DISTRIBUTION_ORIGIN",
      "KERNEL_MANIFEST",
      "TRANSITION_ADMISSION_CONTRACT",
      "CONVERGENCE_ROOT",
      "CONVERGENCE_POLICY",
      "HUMAN_STATEMENT"
    ],
    "allowed_bootstrap_operations": [
      "SAFE_DISCOVERY",
      "UNIVERSAL_INTERVIEW",
      "CAPABILITY_HYPOTHESIS",
      "CAPABILITY_ONBOARDING_PREPARATION"
    ],
    "prohibited_initial_authority": [
      "ARBITRARY_CAPABILITY_ACTIVATION",
      "PRODUCTION_DEPLOYMENT",
      "PUBLIC_RELEASE",
      "PAYMENT",
      "DESTRUCTIVE_EXTERNAL_EFFECT",
      "ACTIVE_VULNERABILITY_OPERATION",
      "BLANKET_CREDENTIAL_AUTHORITY",
      "UNLIMITED_CONVERGENCE"
    ]
  },
  "selected_distribution_contract_bindings": {
    "fixed_governing_source_bindings": "USE_fixed_governing_source_bindings_EXACTLY",
    "capability_source_bindings": "USE_capability_path_map_EXACTLY_FOR_SELECTED_CAPABILITIES",
    "substitution": "REJECT"
  },
  "bootstrap_input_model": {
    "selected_source": "EXACT_HUMAN_SELECTED_ARCHIVE_OR_AUTHENTICATED_GIT_TREE",
    "selected_source_file_addressing": "RELATIVE_POSIX_PATH_FROM_DISTRIBUTION_ROOT",
    "file_digest": "SHA256_OF_EXACT_FILE_BYTES",
    "content_set_digest": "INCLUDE_EVERY_REGULAR_DOT_MD_FILE_UNDER_SELECTED_DISTRIBUTION_ROOT;SORT_CANONICAL_RELATIVE_PATHS_BY_UTF8_BYTE_ORDER;FOR_EACH_PATH_COMPUTE_LOWERCASE_SHA256_OF_EXACT_FILE_BYTES;CONSTRUCT_ASCII_LINE_<sha256><two_spaces><canonical_relative_path><LF>;SHA256_CONCATENATED_LINES",
    "branch_name_as_identity": "FORBIDDEN"
  },
  "bootstrap_operator_registry": {
    "FIXED_GENESIS_ORDINAL": {
      "inputs": [],
      "checks": [
        {
          "field": "authority_epoch",
          "equals_integer": 0
        },
        {
          "field": "sequence",
          "equals_integer": 0
        },
        {
          "derived_predecessor_count_equals": 0
        }
      ]
    },
    "SOURCE_ORIGIN_EQUALITY": {
      "inputs": [
        "PROJECT_GENESIS",
        "DISTRIBUTION_ORIGIN",
        "SELECTED_SOURCE_INPUT"
      ],
      "comparisons": [
        {
          "left": "PROJECT_GENESIS.selected_content_set_digest",
          "right": "DISTRIBUTION_ORIGIN.content_set_digest",
          "operator": "EXACT_EQUAL"
        },
        {
          "left": "PROJECT_GENESIS.selected_content_set_digest",
          "right": "SELECTED_SOURCE_INPUT.computed_content_set_digest",
          "operator": "EXACT_EQUAL"
        },
        {
          "left": "PROJECT_GENESIS.source_transport",
          "right": "DISTRIBUTION_ORIGIN.source_transport",
          "operator": "EXACT_EQUAL"
        },
        {
          "left": "PROJECT_GENESIS.source_transport",
          "right": "SELECTED_SOURCE_INPUT.source_transport",
          "operator": "EXACT_EQUAL"
        },
        {
          "left": "PROJECT_GENESIS.source_identity",
          "right": "DISTRIBUTION_ORIGIN.source_identity",
          "operator": "EXACT_EQUAL"
        },
        {
          "left": "PROJECT_GENESIS.source_identity",
          "right": "SELECTED_SOURCE_INPUT.source_identity",
          "operator": "EXACT_EQUAL"
        }
      ],
      "git_conditional": {
        "when_source_transport": "GIT_REPOSITORY",
        "required_equal_triplets": [
          [
            "PROJECT_GENESIS.selected_git_commit",
            "DISTRIBUTION_ORIGIN.git_commit",
            "SELECTED_SOURCE_INPUT.git_commit"
          ],
          [
            "PROJECT_GENESIS.selected_git_tree",
            "DISTRIBUTION_ORIGIN.git_tree",
            "SELECTED_SOURCE_INPUT.git_tree"
          ]
        ],
        "otherwise_fields_absent_or_null": [
          "PROJECT_GENESIS.selected_git_commit",
          "PROJECT_GENESIS.selected_git_tree",
          "DISTRIBUTION_ORIGIN.git_commit",
          "DISTRIBUTION_ORIGIN.git_tree"
        ]
      }
    },
    "KERNEL_ORIGIN_EQUALITY": {
      "inputs": [
        "PROJECT_GENESIS",
        "KERNEL_MANIFEST"
      ],
      "comparison": {
        "left": "PROJECT_GENESIS.distribution_origin_ref",
        "right": "KERNEL_MANIFEST.distribution_origin_ref",
        "operator": "EXACT_EQUAL"
      }
    },
    "FIXED_GOVERNING_SOURCE_MEMBERSHIP": {
      "inputs": [
        "SELECTED_SOURCE_INPUT",
        "DISTRIBUTION_ORIGIN",
        "KERNEL_MANIFEST",
        "fixed_governing_source_bindings"
      ],
      "binding_iteration": {
        "source_path": "binding.path",
        "kernel_ref_field": "binding.kernel_manifest_ref_field",
        "origin_path_match_cardinality": 1,
        "origin_digest_index_rule": "SAME_INDEX_AS_MATCHED_PATH",
        "required_origin_digest": "SHA256(SELECTED_SOURCE_INPUT.exact_file_bytes[source_path])",
        "required_kernel_ref": "CONCAT(\"sha256:\",required_origin_digest)",
        "resolved_referent_sha256": "required_origin_digest"
      },
      "origin_path_set_relation": "EXACT_SET_EQUAL_TO_fixed_governing_source_bindings.path"
    },
    "SELECTED_CAPABILITY_SOURCE_MEMBERSHIP": {
      "inputs": [
        "SELECTED_SOURCE_INPUT",
        "DISTRIBUTION_ORIGIN",
        "KERNEL_MANIFEST",
        "capability_path_map"
      ],
      "selected_ref_iteration": {
        "capability_id": "RESOLVED_SELECTED_CAPABILITY_REF.capability_id",
        "source_path": "capability_path_map[capability_id]",
        "path_key_missing": "INVALID",
        "origin_path_match_cardinality": 1,
        "origin_digest_index_rule": "SAME_INDEX_AS_MATCHED_PATH",
        "required_origin_digest": "SHA256(SELECTED_SOURCE_INPUT.exact_file_bytes[source_path])",
        "required_selected_ref": "CONCAT(\"sha256:\",required_origin_digest)"
      },
      "origin_selected_path_set_relation": "EXACT_SET_EQUAL_TO_PATHS_DERIVED_FROM_KERNEL_SELECTED_CAPABILITY_REFS"
    },
    "CONVERGENCE_ROOT_POLICY_EQUALITY": {
      "inputs": [
        "PROJECT_GENESIS",
        "CONVERGENCE_ROOT"
      ],
      "comparison": {
        "left": "CONVERGENCE_ROOT.policy_ref",
        "right": "PROJECT_GENESIS.convergence_policy_ref",
        "operator": "EXACT_EQUAL"
      }
    },
    "KERNEL_ADMISSION_CONTRACT_EQUALITY": {
      "inputs": [
        "PROJECT_GENESIS",
        "KERNEL_MANIFEST"
      ],
      "comparison": {
        "left": "PROJECT_GENESIS.transition_admission_contract_ref",
        "right": "KERNEL_MANIFEST.transition_admission_contract_ref",
        "operator": "EXACT_EQUAL"
      }
    }
  },
  "fixed_governing_source_bindings": [
    {
      "path": "project-runtime/SMF1-PROFILE.md",
      "kernel_manifest_ref_field": "smf_profile_ref"
    },
    {
      "path": "project-runtime/SCHEMA-EVALUATION-PROFILE.md",
      "kernel_manifest_ref_field": "schema_evaluation_profile_ref"
    },
    {
      "path": "project-runtime/AUTHORITY-CURRENTNESS-EVALUATION-PROFILE.md",
      "kernel_manifest_ref_field": "authority_currentness_evaluation_profile_ref"
    },
    {
      "path": "project-runtime/CONTRACT-EVALUATION-PROFILE.md",
      "kernel_manifest_ref_field": "contract_evaluation_profile_ref"
    },
    {
      "path": "project-runtime/TRANSITION-EVALUATION-PROFILE.md",
      "kernel_manifest_ref_field": "transition_evaluation_profile_ref"
    },
    {
      "path": "project-runtime/GOVERNING-RECORD-CONTRACTS.md",
      "kernel_manifest_ref_field": "governing_record_contracts_ref"
    },
    {
      "path": "project-runtime/RECOVERY-CRITICAL-RECORD-CONTRACTS.md",
      "kernel_manifest_ref_field": "recovery_critical_contracts_ref"
    },
    {
      "path": "project-runtime/RECOVERY-STATE-EVALUATION-PROFILE.md",
      "kernel_manifest_ref_field": "recovery_state_evaluation_profile_ref"
    },
    {
      "path": "project-runtime/TRANSITION-ADMISSION-CONTRACT.md",
      "kernel_manifest_ref_field": "transition_admission_contract_ref"
    },
    {
      "path": "project-runtime/OPERATION-FLOOR-VOCABULARY.md",
      "kernel_manifest_ref_field": "operation_floor_vocabulary_ref"
    },
    {
      "path": "project-runtime/HUMAN-CONTROL-PROFILE.md",
      "kernel_manifest_ref_field": "human_control_profile_ref"
    }
  ],
  "capability_path_map": {
    "software-product": "project-runtime/capabilities/software-product.md",
    "personal-infrastructure": "project-runtime/capabilities/personal-infrastructure.md",
    "security-vulnerability": "project-runtime/capabilities/security-vulnerability.md",
    "research": "project-runtime/capabilities/research.md",
    "documentation-publication": "project-runtime/capabilities/documentation-publication.md",
    "it-systems-operations": "project-runtime/capabilities/it-systems-operations.md",
    "recurring-operations": "project-runtime/capabilities/recurring-operations.md"
  },
  "admission_checks": [
    {
      "op": "FIXED_GENESIS_ORDINAL",
      "args": {}
    },
    {
      "op": "SOURCE_ORIGIN_EQUALITY",
      "args": {}
    },
    {
      "op": "KERNEL_ORIGIN_EQUALITY",
      "args": {}
    },
    {
      "op": "KERNEL_ADMISSION_CONTRACT_EQUALITY",
      "args": {}
    },
    {
      "op": "FIXED_GOVERNING_SOURCE_MEMBERSHIP",
      "args": {}
    },
    {
      "op": "SELECTED_CAPABILITY_SOURCE_MEMBERSHIP",
      "args": {}
    },
    {
      "op": "CONVERGENCE_ROOT_POLICY_EQUALITY",
      "args": {}
    }
  ]
}
---
# Genesis Admission Profile

This is the exact pre-chain admission contract for ProjectGenesis.

Direct human selection may arrive as an archive/directory artifact or as an authenticated Git repository source. In both modes the selected distribution bytes are fixed by the exact ContentSetDigest before genesis. Git mode additionally pins exact commit and tree identities.

Project records do not define their own bootstrap evaluator. The selected distribution commits to this exact profile, `MM-CONTRACT-EVAL/1`, the exact transition admission contract, the governing/recovery schema registries, the operation-floor vocabulary, and the exact `MM-HUMAN-CONTROL/1` profile.
