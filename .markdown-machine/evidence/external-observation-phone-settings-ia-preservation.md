---
{
  "record_type": "EXTERNAL_OBSERVATION",
  "schema_version": 1,
  "project_id": "manna",
  "observation_id": "manna-phone-settings-ia-mock-preservation-verified",
  "observation_class": "FILE_DIGEST_MATCH",
  "observed_at": "2026-09-28T04:04:43Z",
  "observed_value": "desktop=3b706a1b7248b1bf2ca5c74b3fcb932bb9bcb626fcc7eadfba963047c08437c3; phone=337c11b9b6188fa9f1eb9352636f4f43ffe5b3044e6c0609164ac49f877eb2d5; iPad=6d68dcfad83ee300fb187fcb53ae5664169c31cae54258e7d502a3916195a156; registry=85cc43ce0846bdf65007e6149a3d0b284a799a9deaf1c4d3ac4070f489876ecf; all unchanged",
  "proof_assurance": "LOCAL_MECHANICAL_PROOF",
  "mechanical_proof_locator": "Lead git diff name-only and exact sha256sum readback after delegated r10 patch",
  "effect_operation_ref": {"ref":"sha256:893ace33928958c00140ad7fbb1f235897974529977e6d1f09e76d8d9bce90cd","path":".markdown-machine/authority/operation-contract-design-realization-v01024.md"},
  "effect_target": {"target_kind":"OTHER_CANONICAL","target_identity":"approved desktop, phone, iPad mock and registry preservation set"},
  "effect_outcome": "CONFIRMED",
  "revision": 1
}
---
# Phone Settings information-architecture preservation observation

The approved mocks and their registry remained byte-identical throughout the
specification-only reconciliation.
