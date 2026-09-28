---
{
  "record_type": "EXTERNAL_OBSERVATION",
  "schema_version": 1,
  "project_id": "manna",
  "observation_id": "manna-product-freeze-navigation-phone-verified",
  "observation_class": "FILE_DIGEST_AND_DETERMINISTIC_UI_ASSERTION",
  "observed_at": "2026-09-28T03:29:50Z",
  "observed_value": "sha256=ac73ab53c2a1a67fe0776d5e91033a1c7f870e4d1e63676cc354fad9f3cc2ca3; two script blocks parse; bottom-navigation DOM/tab order and extracted CSS visual order both equal Read/Search/Study/Notes/More; git diff is one CSS order replacement; live browser local-file loading unavailable",
  "proof_assurance": "LOCAL_MECHANICAL_PROOF",
  "mechanical_proof_locator": "Lead Node exact-file readback: extracted every script block and parsed each with Function; extracted phone bottom-nav DOM sequence and CSS order declarations and asserted exact array equality; SHA-256 readback and git diff --check at base 31f024b4cb47aab66b35a1a84e115f1e284aa47b plus candidate worktree.",
  "effect_claim_ref": {"ref":"sha256:af79a622a75208da3c7c8669ae4d8e5dc7801cee30cb8d5ac31e26037afb7284","path":".markdown-machine/recovery/effect-claim-product-freeze-navigation-phone-r2.md"},
  "effect_operation_ref": {"ref":"sha256:893ace33928958c00140ad7fbb1f235897974529977e6d1f09e76d8d9bce90cd","path":".markdown-machine/authority/operation-contract-design-realization-v01024.md"},
  "effect_target": {"target_kind":"FILE","target_identity":"docs/01-spec/design-reference/manna-v1-phone-interactive-mock.html"},
  "effect_outcome": "CONFIRMED",
  "revision": 1
}
---
# Product Freeze navigation phone observation

The exact corrected phone bytes and deterministic navigation-order assertions
are confirmed. Fresh live-browser evidence remains unavailable because the
available browser rejects local-file subjects.
