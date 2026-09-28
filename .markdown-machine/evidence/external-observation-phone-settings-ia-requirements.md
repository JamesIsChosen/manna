---
{
  "record_type": "EXTERNAL_OBSERVATION",
  "schema_version": 1,
  "project_id": "manna",
  "observation_id": "manna-phone-settings-ia-requirements-verified",
  "observation_class": "FILE_DIGEST_AND_DIFF",
  "observed_at": "2026-09-28T04:04:43Z",
  "observed_value": "sha256=5bed8619f0c76c1d74ec42413321894a3101673a32e78a7f7f49bcf67d471dd9; five core product destinations preserved; larger-screen Library-primary/Settings-secondary rule explicit; phone Read/Search/Study/Notes/Settings and Library-through-Settings exception explicit; only the authorized IA paragraph changed",
  "proof_assurance": "LOCAL_MECHANICAL_PROOF",
  "mechanical_proof_locator": "Lead exact git diff, digest readback, and contradiction search after delegated r10 patch",
  "effect_claim_ref": {"ref":"sha256:b300fc259bc06c3c43acd37c305e37a70a423cb4f1a0b9327d1a7163dc0b12c1","path":".markdown-machine/recovery/effect-claim-phone-settings-ia-requirements-r2.md"},
  "effect_operation_ref": {"ref":"sha256:893ace33928958c00140ad7fbb1f235897974529977e6d1f09e76d8d9bce90cd","path":".markdown-machine/authority/operation-contract-design-realization-v01024.md"},
  "effect_target": {"target_kind":"FILE","target_identity":"docs/01-spec/manna-v1-ui-ux-requirements.md"},
  "effect_outcome": "CONFIRMED",
  "revision": 1
}
---
# Phone Settings information-architecture requirements observation

The requirements now express the approved phone navigation as a bounded
platform exception while preserving Library as a core product destination.
