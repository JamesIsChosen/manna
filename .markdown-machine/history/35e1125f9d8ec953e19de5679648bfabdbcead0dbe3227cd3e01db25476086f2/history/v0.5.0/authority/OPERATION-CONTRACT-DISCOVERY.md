---
{
  "record_type": "OPERATION_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "compiled_under_authority_ref": "sha256:81dfe0c3cc29492152379ec06257f6b0d4e70b7dacabc405276e3c6337e3ebfa",
  "intent_baseline_ref": "sha256:a1a5b93ad5d297ff5c243f023f8b504c6cb6fafc3db64c3ead112e4c220f345a",
  "capability_binding_ref": "sha256:b60ad1c9dbbafc48ea449d8430a5b3adbf7d207fac6c9d3bcb5574a7475f9c6f",
  "capability_id": "software-product",
  "operation_family": "DISCOVERY",
  "authority_floor": "CURRENT_ADMITTED_TASK_AUTHORITY",
  "effect_floor": "LOCAL_REVERSIBLE",
  "review_floor": "SELF_CHECK",
  "resource_floor": "SERIAL",
  "human_boundary": "TECHNICAL_AUTONOMY",
  "allowed_effect_classes": [],
  "prohibited_effect_classes": [
    "UNDECLARED_EFFECT"
  ]
}
---
# Discovery operation contract

This is the existing bounded Software/Product discovery and verification ceiling. It preserves the Product Freeze gate and does not authorize application implementation or external publication.
