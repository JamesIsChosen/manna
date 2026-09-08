---
{
  "record_type": "COMPILED_MANIFEST",
  "schema_version": 1,
  "project_id": "manna",
  "compiled_manifest_id": "manna-v010-compiled-closure",
  "distribution_origin_ref": {"ref":"sha256:12c3e1c7c5729a34545cea92ed4d92ffbbf74e3f64630e332c6c25be1ddf04db","path":".markdown-machine/authority/distribution-origin-v010.md"},
  "runtime_export": {"path":".markdown-machine/RUNTIME.md","source_path":"project-runtime/RUNTIME.md","source_digest":"b82f830d2cb85c84cb5252c44b6aa85c7e88fb0447ef49ba3e288e044da22533"},
  "contract_exports": [
    {"path":".markdown-machine/contracts/RECORD-GRAMMAR.md","contract_id":"MM-RECORD-GRAMMAR/1","source_path":"project-runtime/RECORD-GRAMMAR.md","source_digest":"47c61d1aa92f492afd0419e961d51777058f9148ff90b2355d7ee57d73e34e3d"},
    {"path":".markdown-machine/contracts/GOVERNING-RECORD-CONTRACTS.md","contract_id":"MM-GOVERNING-RECORDS/1","source_path":"project-runtime/GOVERNING-RECORD-CONTRACTS.md","source_digest":"82fe05a4bd8191090e472391a3fdc37f76c359bdb78556ec4c43f8b29defb9e2"},
    {"path":".markdown-machine/contracts/RECOVERY-CONTRACTS.md","contract_id":"MM-RECOVERY/1","source_path":"project-runtime/RECOVERY-CONTRACTS.md","source_digest":"df7ba1c11932181f88779dddf0bce08e0ba14795030b200bab8afe4d57ca3539"},
    {"path":".markdown-machine/contracts/AUTHORITY-EVALUATOR.md","contract_id":"MM-AUTHORITY/1","source_path":"project-runtime/AUTHORITY-EVALUATOR.md","source_digest":"00368d16eef91628b0e87d9ecf1a7518207b8eb8b80a14106b1d805d2c0ef6cb"},
    {"path":".markdown-machine/contracts/HUMAN-CONTROL.md","contract_id":"MM-HUMAN-CONTROL/2","source_path":"project-runtime/HUMAN-CONTROL.md","source_digest":"7c92664ce77ae0afa26f99e53175fe2ae0dbf5a14806ebb110edffde519b20ae"},
    {"path":".markdown-machine/contracts/GENESIS-ADMISSION.md","contract_id":"DIRECT_HUMAN_GENESIS_ADMISSION/v3","source_path":"bootstrap/GENESIS-ADMISSION.md","source_digest":"f395faf32323d0527dbcb5e7756414eceff98e295a043b9257b06cbdfffcd7e9"}
  ],
  "selected_capability_exports": [{"capability_id":"software-product","path":".markdown-machine/capabilities/software-product.md","source_path":"project-runtime/capabilities/software-product.md","source_digest":"678a8ebd6493d72b93f0822df87efe769413f06e61555f78701a5d795c6d7d30"}],
  "child_layout": [
    {"path":".markdown-machine/RUNTIME.md","role":"RUNTIME","required":true},{"path":".markdown-machine/ORIGIN.md","role":"ORIGIN","required":true},{"path":".markdown-machine/COMPILED-MANIFEST.md","role":"COMPILED_MANIFEST","required":true},{"path":".markdown-machine/REPOSITORY.md","role":"REPOSITORY_BINDING","required":true},{"path":".markdown-machine/HANDOFF.md","role":"HANDOFF_PROJECTION","required":true},{"path":".markdown-machine/contracts","role":"CONTRACT_EXPORTS","required":true},{"path":".markdown-machine/capabilities/software-product.md","role":"CAPABILITY_EXPORT","required":true},{"path":".markdown-machine/authority","role":"CURRENT_AUTHORITY","required":true},{"path":".markdown-machine/intent","role":"CURRENT_INTENT","required":true},{"path":".markdown-machine/lifecycle","role":"CURRENT_LIFECYCLE","required":true},{"path":".markdown-machine/tasks","role":"CURRENT_TASKS","required":true},{"path":".markdown-machine/recovery","role":"RECOVERY_RECORDS","required":true},{"path":".markdown-machine/history","role":"HISTORICAL_CLOSURE","required":true}
  ],
  "forbidden_distribution_roots": ["bootstrap","project-compiler","project-runtime","verification","machine-source","record-factory"],
  "closure_status": "COMPLETE",
  "revision": 2,
  "repository_binding_ref": {"ref":"sha256:2a0a6bc93bc3576cb46b49b36e31b3d4066fc7037da3332cd0f818ad8b20a56e","path":".markdown-machine/REPOSITORY.md"}
}
---
# Manna v0.10.0 compiled child closure

This manifest describes the exact exports admitted from the released v0.10.0
distribution. Distribution source roots are not copied into the child.
