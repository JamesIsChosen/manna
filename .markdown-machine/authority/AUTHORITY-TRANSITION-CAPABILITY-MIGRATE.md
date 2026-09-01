---
{
  "record_type": "AUTHORITY_TRANSITION",
  "schema_version": 1,
  "project_id": "manna",
  "authority_epoch": 0,
  "sequence": 2,
  "transition_type": "CAPABILITY_MIGRATE",
  "predecessor_transition_refs": ["sha256:e1cf81d9694a9ef2eed6f553b8888c862fd932f63f78832800b325ec2abecf04"],
  "admission_contract_ref": "sha256:eea1a685af2f34f204be30afe91e886c32603c244f8a0dcb08235ea7fdbda218",
  "exact_contract_bindings": [
    "sha256:3baeb6f51b9ad59278f87514500ce2dcab3a583eb7b2ea7871fd60e0e9c4cf93",
    "sha256:c0c6d8947fb051dfece63ec7e1aed7ffa101dc51399e3419be7cb153efaa93a5"
  ],
  "accepted_evidence_refs": ["sha256:e2f375469d28afcc6eb2e5a44d0e3af9bb143eebaf25feef24c8c4ecc7130953"],
  "human_authority_refs": ["sha256:e2f375469d28afcc6eb2e5a44d0e3af9bb143eebaf25feef24c8c4ecc7130953"],
  "publication_mechanism_plan_ref": "sha256:8c5b3aa4abeb65d8a38e9a1f42c3e8d47e3c78405362fba8c2dc38297ff37ab8"
}
---

# Capability migration transition

This transition admits the exact v0.4.0 Software/Product capability export as
Manna’s only active capability, with one bounded discovery operation contract.
It preserves the existing lifecycle frontier and introduces no new effect
authority.
