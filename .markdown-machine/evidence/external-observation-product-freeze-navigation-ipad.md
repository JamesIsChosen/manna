---
{
  "record_type": "EXTERNAL_OBSERVATION",
  "schema_version": 1,
  "project_id": "manna",
  "observation_id": "manna-product-freeze-navigation-ipad-verified",
  "observation_class": "FILE_DIGEST_AND_DETERMINISTIC_UI_ASSERTION",
  "observed_at": "2026-09-28T03:29:50Z",
  "observed_value": "sha256=6d68dcfad83ee300fb187fcb53ae5664169c31cae54258e7d502a3916195a156; one script block parses; showScreen sets aria-current=page on the active data-nav element and removes aria-current from inactive data-nav elements; stale toggleAttribute path absent; git diff is one state-management replacement; live browser local-file loading unavailable",
  "proof_assurance": "LOCAL_MECHANICAL_PROOF",
  "mechanical_proof_locator": "Lead Node exact-file readback: extracted the complete script and parsed it with Function; asserted the exact active setAttribute and inactive removeAttribute statements and absence of the stale toggleAttribute path; SHA-256 readback and git diff --check at base 31f024b4cb47aab66b35a1a84e115f1e284aa47b plus candidate worktree.",
  "effect_claim_ref": {"ref":"sha256:b21afb0fc83a5d817c75dafacb7af80efab01ba4c9c6c6f4694e8fd75a4e64c5","path":".markdown-machine/recovery/effect-claim-product-freeze-navigation-ipad-r2.md"},
  "effect_operation_ref": {"ref":"sha256:893ace33928958c00140ad7fbb1f235897974529977e6d1f09e76d8d9bce90cd","path":".markdown-machine/authority/operation-contract-design-realization-v01024.md"},
  "effect_target": {"target_kind":"FILE","target_identity":"docs/01-spec/design-reference/manna-v1-ipad-interactive-mock.html"},
  "effect_outcome": "CONFIRMED",
  "revision": 1
}
---
# Product Freeze navigation iPad observation

The exact corrected iPad bytes and deterministic `aria-current` assertions are
confirmed. Fresh live-browser evidence remains unavailable because the
available browser rejects local-file subjects.
