---
{
  "record_type": "EXTERNAL_OBSERVATION",
  "schema_version": 1,
  "project_id": "manna",
  "observation_id": "manna-approved-mocks-registry-sync-verified",
  "observation_class": "FILE_DIGEST_MATCH",
  "observed_at": "2026-09-28T00:46:15Z",
  "observed_value": "registry_sha256=c57b4c65c24faa6d71d4fb2e165f8c3e52dbb6ee4e651d4f4b1474e104be7d7d; iPad registry entry=be1e8f58e573cfdbfb38588acca23776282d2358740a6ba187b05e9dee82447b; iPad artifact sha256=be1e8f58e573cfdbfb38588acca23776282d2358740a6ba187b05e9dee82447b; desktop and mobile rows unchanged",
  "proof_assurance": "LOCAL_MECHANICAL_PROOF",
  "mechanical_proof_locator": "Exact post-edit SHA-256 readback and one-line diff of docs/01-spec/design-reference/APPROVED-MOCKS.md",
  "effect_claim_ref": {"ref":"sha256:bf26f187ade887d40eed52943b7e7c040e26efb70c9fbb3adab097becca59cf6","path":".markdown-machine/recovery/effect-claim-approved-mocks-sync-r2.md"},
  "effect_operation_ref": {"ref":"sha256:893ace33928958c00140ad7fbb1f235897974529977e6d1f09e76d8d9bce90cd","path":".markdown-machine/authority/operation-contract-design-realization-v01024.md"},
  "effect_target": {"target_kind":"FILE","target_identity":"docs/01-spec/design-reference/APPROVED-MOCKS.md"},
  "effect_outcome": "CONFIRMED",
  "revision": 1
}
---
# Approved-mock registry synchronization observation

The registry now names the exact verified iPad artifact digest, and the only
registry delta is that single stale digest replacement.
