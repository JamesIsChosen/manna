---
{
  "record_type": "KERNEL_CONTRACT",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "SMF-SCHEMA/1 Evaluation Profile"
}
---

# SMF-SCHEMA/1

This machine does **not** delegate authority validity to an unspecified JSON Schema dialect.

SMF-SCHEMA/1 is a deliberately small deterministic schema algebra.

## Primitive field types

- `bool`
- `null`
- `safe_integer`
- `ascii_id`
- `sha256_ref`
- `enum(<literal list>)`
- `unicode_scalar_string`
- `canonical_integer_string`
- `canonical_decimal_string`
- `list<T>`
- `object<fields>`

## `ascii_id`

ASCII only. Allowed characters: `A-Z a-z 0-9 . _ : / -`. Length 1..200 unless the record contract states a smaller bound.

## `sha256_ref`

Exact lowercase syntax: `sha256:` followed by exactly 64 lowercase hexadecimal characters.

## Objects

Each record contract defines exact required and optional fields. Unknown fields are rejected unless a field named `extensions` is explicitly permitted. `extensions` is an object whose keys must be namespaced ASCII IDs.

## Lists

Ordered unless the field contract explicitly declares set semantics. When set semantics apply, duplicate semantic values are rejected and canonical comparison is bytewise over normalized primitive encodings defined by this profile.

## Strings

All structured strings must already satisfy SMF/1 Unicode scalar rules. No implicit normalization occurs.

## References

A reference is valid only when the referenced exact record bytes resolve and the referenced `record_type`/identity satisfies the field contract.

## No generic regex dependency

Kernel-critical schemas do not rely on implementation-defined regular-expression dialects. String grammars are specified directly as character/range rules.

## Deterministic validity

Given the same record AST, record contract, and SMF-SCHEMA/1 version, all conforming evaluators must return the same VALID or INVALID result.
