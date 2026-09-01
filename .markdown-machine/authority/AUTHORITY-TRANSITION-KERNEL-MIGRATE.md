---
{
  "record_type": "AUTHORITY_TRANSITION",
  "schema_version": 1,
  "project_id": "manna",
  "authority_epoch": 0,
  "sequence": 1,
  "transition_type": "KERNEL_MIGRATE",
  "predecessor_transition_refs": ["sha256:18e4158813f6a97ea637f021abe7b7f83c63b0c99186354ad513fbbbb409a0cb"],
  "admission_contract_ref": "sha256:eea1a685af2f34f204be30afe91e886c32603c244f8a0dcb08235ea7fdbda218",
  "exact_contract_bindings": ["sha256:4e64690dbd807e69ae7e4726180ba1b56a2826a7297ec692daeec5fd7e943d79"],
  "accepted_evidence_refs": ["sha256:d73a002bfad86cd52328cfe25ae7f5a3f2557ef6ddf18e8edf725198a0f28bee"],
  "human_authority_refs": ["sha256:d73a002bfad86cd52328cfe25ae7f5a3f2557ef6ddf18e8edf725198a0f28bee"],
  "publication_mechanism_plan_ref": "sha256:909ac9edbd0a8d01c136e760187efd31719b98eb7978207cb0da58b144cdc39c"
}
---

# Kernel migration transition

This explicit authority transition admits the verified Markdown Machine
v0.4.0 kernel manifest for the existing Manna project. It preserves the prior
v0.3.0 genesis as the single predecessor and grants no new product or effect
authority.
