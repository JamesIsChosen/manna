---
{
  "record_type": "KERNEL_MANIFEST",
  "schema_version": 1,
  "project_id": "manna",
  "distribution_origin_ref": {"ref":"sha256:12c3e1c7c5729a34545cea92ed4d92ffbbf74e3f64630e332c6c25be1ddf04db","path":".markdown-machine/authority/distribution-origin-v010.md"},
  "compatibility_family": "MARKDOWN-MACHINE-V0-10",
  "admission_contract_ref": {"ref":"sha256:00368d16eef91628b0e87d9ecf1a7518207b8eb8b80a14106b1d805d2c0ef6cb","path":"project-runtime/AUTHORITY-EVALUATOR.md"},
  "selected_capability_runtime_refs": ["sha256:678a8ebd6493d72b93f0822df87efe769413f06e61555f78701a5d795c6d7d30"],
  "compiled_under_authority_ref": {"ref":"sha256:40ded3ca0859b262256c1cf3af775b06cd7c13a6a5b6b5c927d43bbb8e7c1a89","path":".markdown-machine/authority/project-genesis-manna.md"},
  "candidate_shaped_binding_types": ["KERNEL_MANIFEST","TASK_CONTRACT","CAPABILITY_BINDING","OPERATION_CONTRACT","LIFECYCLE_GRAPH","RUN_HORIZON","REPOSITORY_BINDING"]
}
---
# Manna v0.10.0 kernel manifest

This KERNEL_MANIFEST binds the v0.10.0 admission contract (MM-AUTHORITY/1),
the universal runtime export, and the complete candidate-shape binding type
set. It is the authority kernel for the migration target.
