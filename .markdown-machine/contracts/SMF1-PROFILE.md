---
{
  "record_type": "SMF_PROFILE",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.4.0",
  "profile_id": "SMF/1",
  "authoritative_contract": true,
  "project_output_eligible": true,
  "materialization_rule": "EXACT_EXPORT_REQUIRED",
  "byte_rules": {
    "encoding": "UTF-8",
    "bom": "FORBIDDEN",
    "line_endings": "LF_ONLY",
    "opening_delimiter": "---\\n",
    "closing_delimiter": "\\n---\\n",
    "front_matter_value": "EXACTLY_ONE_JSON_OBJECT",
    "duplicate_object_keys": "REJECT",
    "malformed_utf8": "REJECT",
    "yaml_only_features": "REJECT"
  },
  "unicode_rules": {
    "semantic_string_model": "UNICODE_SCALAR_VALUE_SEQUENCE",
    "unpaired_high_surrogate_escape": "REJECT",
    "unpaired_low_surrogate_escape": "REJECT",
    "valid_surrogate_pair": "DECODE_TO_ONE_SCALAR",
    "implicit_normalization": "NONE"
  },
  "json_integer_rules": {
    "minimum": -9007199254740991,
    "maximum": 9007199254740991,
    "syntax": "CANONICAL_BASE10_INTEGER",
    "leading_plus": "REJECT",
    "leading_zero_except_zero": "REJECT",
    "negative_zero": "REJECT",
    "decimal_point": "REJECT",
    "exponent": "REJECT"
  },
  "markdown_body_authority": "NON_MACHINE_GOVERNING",
  "determinism": "EXACT_BYTES_PRODUCE_ONE_IDENTICAL_STRUCTURED_AST_OR_REJECT"
}
---
# SMF/1 — Exact Project-Runtime Profile

This is the project-exportable authoritative SMF/1 profile.
