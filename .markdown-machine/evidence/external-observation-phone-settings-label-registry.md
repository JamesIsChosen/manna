---
{
  "record_type": "EXTERNAL_OBSERVATION",
  "schema_version": 1,
  "project_id": "manna",
  "observation_id": "manna-phone-settings-label-registry-verified",
  "observation_class": "FILE_DIGEST_MATCH",
  "observed_at": "2026-09-28T03:50:08Z",
  "observed_value": "registry_sha256=85cc43ce0846bdf65007e6149a3d0b284a799a9deaf1c4d3ac4070f489876ecf; desktop=3b706a1b7248b1bf2ca5c74b3fcb932bb9bcb626fcc7eadfba963047c08437c3 unchanged; mobile registry and artifact=337c11b9b6188fa9f1eb9352636f4f43ffe5b3044e6c0609164ac49f877eb2d5; iPad registry and artifact=6d68dcfad83ee300fb187fcb53ae5664169c31cae54258e7d502a3916195a156; diff contains only the two stale digest replacements",
  "proof_assurance": "LOCAL_MECHANICAL_PROOF",
  "mechanical_proof_locator": "Lead exact git diff, sha256sum readback, and registry content inspection after delegated two-value patch",
  "effect_claim_ref": {"ref":"sha256:4c9a8ad2b22d6ad1b0155214afadcb0b8366059f1c6a157b0fbc41b13f34ed06","path":".markdown-machine/recovery/effect-claim-phone-settings-label-registry-r2.md"},
  "effect_operation_ref": {"ref":"sha256:893ace33928958c00140ad7fbb1f235897974529977e6d1f09e76d8d9bce90cd","path":".markdown-machine/authority/operation-contract-design-realization-v01024.md"},
  "effect_target": {"target_kind":"FILE","target_identity":"docs/01-spec/design-reference/APPROVED-MOCKS.md"},
  "effect_outcome": "CONFIRMED",
  "revision": 1
}
---
# Phone Settings-label registry observation

The approved-mock registry now names the exact user-approved phone and iPad
bytes while preserving the previously approved desktop digest.
