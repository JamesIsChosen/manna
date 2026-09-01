---
{
  "record_type": "OPERATION_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "compiled_under_authority_ref": "sha256:b1e4808cf8aa4d0063ec50610f34dbe98aa2e733c96bb31e3ed32a9ff4d0ef01",
  "intent_baseline_ref": "sha256:62568fc918b59c7ac67cc8837e6696ca843c5805bc5507e3b6798dd46e040e70",
  "capability_binding_ref": "sha256:d25267b9253fffdca01c7883cf53d882276789c72d43070d9fc29d60622f2822",
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
