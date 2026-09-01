---
{
  "record_type": "SCHEMA_EVALUATION_PROFILE",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.5.0",
  "profile_id": "SMF-SCHEMA/1",
  "authoritative_contract": true,
  "project_output_eligible": true,
  "materialization_rule": "EXACT_EXPORT_REQUIRED",
  "primitive_types": {
    "bool": {
      "values": [
        true,
        false
      ]
    },
    "null": {
      "value": null
    },
    "safe_integer": {
      "minimum": -9007199254740991,
      "maximum": 9007199254740991,
      "syntax_source": "SMF/1.json_integer_rules"
    },
    "ascii_id": {
      "min_length": 1,
      "max_length": 200,
      "allowed_codepoints": "A-Z a-z 0-9 . _ : / -"
    },
    "sha256_ref": {
      "syntax": "sha256:<64 lowercase hex>"
    },
    "sha256_hex": {
      "syntax": "64 lowercase hex"
    },
    "unicode_scalar_string": {
      "source": "SMF/1.unicode_rules"
    },
    "canonical_logical_path": {
      "source": "SMF/1.unicode_rules",
      "syntax": "one-or-more Unicode-scalar path components separated only by ASCII /; no empty component; no component equal to . or ..; no leading or trailing /; no backslash-as-separator semantics; no drive/UNC/absolute-host prefix interpretation; no Unicode normalization; exact scalar-sequence identity",
      "comparison": "EXACT_UNICODE_SCALAR_SEQUENCE_CASE_SENSITIVE",
      "host_independence": "VALUE_IS_ALREADY_PROJECT_RELATIVE_LOGICAL_IDENTITY_NOT_A_HOST_LOCATOR"
    },
    "canonical_integer_string": {
      "syntax": "optional '-' then canonical ASCII decimal digits; no '+'; no leading zero except '0'; '-0' forbidden"
    },
    "canonical_decimal_string": {
      "syntax": "schema-specific canonical ASCII decimal string; no exponent unless exact field contract explicitly permits"
    },
    "rfc3339_utc_timestamp": {
      "syntax": "YYYY-MM-DDTHH:MM:SSZ; exactly 20 ASCII characters; Gregorian-valid date; HH 00-23; MM 00-59; SS 00-59; leap seconds forbidden",
      "ordering": "LEXICOGRAPHIC_ASCII_ORDER_EQUALS_CHRONOLOGICAL_ORDER_FOR_VALID_VALUES"
    }
  },
  "descriptor_kinds": {
    "primitive": "EXACT_PRIMITIVE_ID",
    "ref": {
      "required_keys": [
        "kind",
        "target_record_types"
      ],
      "optional_keys": [
        "target_identity",
        "same_project",
        "target_field_equals_self_field"
      ],
      "unknown_keys": "REJECT",
      "key_source": "MM-CONTRACT-EVAL/1.reference_rules.allowed_ref_keys"
    },
    "list": {
      "required_keys": [
        "kind",
        "items"
      ],
      "optional_keys": [
        "min_items",
        "max_items",
        "set_semantics"
      ],
      "unknown_keys": "REJECT"
    },
    "object": {
      "required_keys": [
        "kind",
        "fields"
      ],
      "optional_keys": [],
      "unknown_keys": "REJECT"
    }
  },
  "object_rules": {
    "required_and_optional_fields": "EXACTLY_AS_DECLARED_BY_RECORD_CONTRACT",
    "unknown_fields": "REJECT_UNLESS_EXPLICIT_extensions_FIELD",
    "extensions_keys": "NAMESPACED_ASCII_ID"
  },
  "list_rules": {
    "ordered_by_default": true,
    "set_semantics_duplicate_values": "REJECT"
  },
  "typed_reference_rules": {
    "bare_sha256_ref_has_no_referent_semantics": true,
    "referenced_bytes_must_resolve": true,
    "target_record_type_must_match": true,
    "target_identity_if_present_must_match": true,
    "same_project_if_true_must_match_project_id": true,
    "allowed_descriptor_keys_exactly_equal_contract_evaluator": true,
    "target_field_equals_self_field_if_present": "REFERENT_NAMED_FIELD_EXACTLY_EQUALS_SELF_NAMED_FIELD"
  },
  "cross_record_rules": {
    "predicate_ids": "ONLY_MM-CONTRACT-EVAL/1_REGISTRY",
    "unknown_predicate": "REJECT",
    "unknown_argument": "REJECT"
  },
  "regex_dependency": "FORBIDDEN_FOR_KERNEL_CRITICAL_SEMANTICS",
  "deterministic_validity_inputs": [
    "record_ast",
    "exact_record_contract",
    "MM-CONTRACT-EVAL/1",
    "referenced_record_set",
    "SMF/1",
    "SMF-SCHEMA/1",
    "evaluation_context_if_contract_requires_current_time"
  ],
  "determinism": "SAME_INPUTS_PRODUCE_SAME_VALID_OR_INVALID",
  "string_descriptor_constructors": {
    "enum": {
      "syntax": "enum(<literal>[,<literal>...])",
      "parse": "REMOVE_PREFIX_enum(_AND_FINAL_);SPLIT_ON_ASCII_COMMA;TRIM_ASCII_SPACE_AROUND_EACH_LITERAL;EMPTY_LITERAL_REJECT;LITERAL_CONTAINING_COMMA_NOT_REPRESENTABLE_BY_THIS_SHORTHAND",
      "value_semantics": "VALUE_MUST_EXACTLY_EQUAL_ONE_PARSED_LITERAL"
    },
    "list": {
      "syntax": "list<T>",
      "parse": "T_IS_RECURSIVELY_PARSED_AS_EXACT_PRIMITIVE_ID_OR_STRING_DESCRIPTOR_CONSTRUCTOR",
      "value_semantics": "VALUE_MUST_BE_JSON_ARRAY_AND_EVERY_ITEM_VALIDATES_AGAINST_T;ORDERED;NO_IMPLICIT_SET_SEMANTICS"
    },
    "object": {
      "syntax": "object<fields>",
      "parse": "ONLY_EXACT_LITERAL_object<fields>_IS_PERMITTED_AS_SHORTHAND",
      "value_semantics": "VALUE_MUST_BE_JSON_OBJECT;FIELD_MEMBERSHIP_AND_FIELD_VALUE_DESCRIPTORS_MUST_BE_SUPPLIED_BY_THE_ENCLOSING_EXACT_RECORD_CONTRACT;WITHOUT_SUCH_FIELD_MAP_REJECT"
    }
  }
}
---
# SMF-SCHEMA/1 — Exact Project-Runtime Evaluation Profile

Complete project-exportable primitive/schema algebra. `canonical_logical_path` is an already-canonical project-relative governing identity, not a host path. String constructor descriptors (`enum(...)`, `list<T>`, and `object<fields>`) and structured typed-reference descriptor keys are closed here and must exactly agree with `MM-CONTRACT-EVAL/1`.
