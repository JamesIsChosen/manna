---
{
  "record_type": "EXTERNAL_OBSERVATION",
  "schema_version": 1,
  "project_id": "manna",
  "observation_id": "manna-phone-settings-label-mock-verified",
  "observation_class": "FILE_DIGEST_AND_DETERMINISTIC_UI_ASSERTION",
  "observed_at": "2026-09-28T03:43:22Z",
  "observed_value": "sha256=337c11b9b6188fa9f1eb9352636f4f43ffe5b3044e6c0609164ac49f877eb2d5; two scripts parse; all six in-app bottom navs equal Read/Search/Study/Notes/Settings; Settings destination unchanged; no runtime Settings-to-MORE assignment remains; review-only top tab remains MORE; iPad digest unchanged; browser connector could inventory but not select/reload local file tab",
  "proof_assurance": "LOCAL_MECHANICAL_PROOF",
  "mechanical_proof_locator": "Delegated Luna-low handback plus lead exact-file readback: parsed every script with Function; extracted all six bottom-nav label arrays and asserted equality; scanned runtime assignments; verified exact diff, SHA-256, changed-file boundary, and unchanged iPad digest. Browser CUA getState saw the exact open file tab but URL policy blocked tab selection/reload.",
  "effect_claim_ref": {"ref":"sha256:d29f6ee398a878c41c20db49c72b3ea41fb5f50c83504e71dc0475ac285bb4c8","path":".markdown-machine/recovery/effect-claim-phone-settings-label-mock-r2.md"},
  "effect_operation_ref": {"ref":"sha256:893ace33928958c00140ad7fbb1f235897974529977e6d1f09e76d8d9bce90cd","path":".markdown-machine/authority/operation-contract-design-realization-v01024.md"},
  "effect_target": {"target_kind":"FILE","target_identity":"docs/01-spec/design-reference/manna-v1-phone-interactive-mock.html"},
  "effect_outcome": "CONFIRMED",
  "revision": 1
}
---
# Phone Settings-label mock observation

The exact candidate bytes and deterministic label/order assertions are
confirmed. A refreshed human appearance decision remains required.
