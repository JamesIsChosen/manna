---
{
  "record_type": "KERNEL_MANIFEST",
  "schema_version": 1,
  "project_id": "manna",
  "distribution_origin_ref": {"ref":"sha256:d6d8502f21500410e8fd694b73ef5c202812b6ab512a448c6aa7bbbbb398dc8d","path":".markdown-machine/ORIGIN.md"},
  "compatibility_family": "MARKDOWN-MACHINE-V0-10",
  "admission_contract_ref": {"ref":"sha256:5c22f2655c7cdd3abfb4a790af33b6d7e0278640187c376ced8f84309465e3f8","path":".markdown-machine/contracts/AUTHORITY-EVALUATOR.md"},
  "selected_capability_runtime_refs": ["sha256:d434bc11171aa9e643bf0f021f11c30d91da7bc7326581b398a0b9955bb99eab"],
  "compiled_under_authority_ref": {"ref":"sha256:2d85b5e349ce676fc7c6cbbfe84431b62f05f897280eae0d74501c6734b26e41","path":".markdown-machine/authority/authority-transition-kernel-migrate-v070.md"},
  "candidate_shaped_binding_types": ["KERNEL_MANIFEST","REPOSITORY_BINDING"]
}
---
# Manna v0.10.2.4 kernel manifest

The current kernel is the exact released v0.10.2.4 runtime and six-contract
closure. Capability policy migration remains a separate authority transition.
