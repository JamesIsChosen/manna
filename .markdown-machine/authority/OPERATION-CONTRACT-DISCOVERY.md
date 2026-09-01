---
{
  "record_type": "OPERATION_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "compiled_under_authority_ref": "sha256:e1cf81d9694a9ef2eed6f553b8888c862fd932f63f78832800b325ec2abecf04",
  "intent_baseline_ref": "sha256:b275d476d59aabc8784feaba8cbfec6b751002c439070d4bf2e3e9726ddf1d93",
  "capability_binding_ref": "sha256:3baeb6f51b9ad59278f87514500ce2dcab3a583eb7b2ea7871fd60e0e9c4cf93",
  "capability_id": "software-product",
  "operation_family": "DISCOVERY",
  "authority_floor": "CURRENT_ADMITTED_TASK_AUTHORITY",
  "effect_floor": "LOCAL_REVERSIBLE",
  "review_floor": "SELF_CHECK",
  "resource_floor": "SERIAL",
  "human_boundary": "TECHNICAL_AUTONOMY",
  "allowed_effect_classes": [],
  "prohibited_effect_classes": ["UNDECLARED_EFFECT"]
}
---

# Discovery operation contract

This is the current bounded Software/Product operation ceiling for discovery
and verification work. It preserves the existing Product Freeze gate and does
not authorize repository implementation effects.
