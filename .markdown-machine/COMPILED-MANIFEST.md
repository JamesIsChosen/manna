---
{
  "record_type": "COMPILED_MANIFEST",
  "schema_version": 1,
  "project_id": "manna",
  "compiled_manifest_id": "manna-v06-compiled-closure",
  "distribution_origin_ref": {"ref":"sha256:887c23761c533ba7435df823fcdd4d453385095e15a93b72ad3e5c40880315ef","path":".markdown-machine/ORIGIN.md"},
  "runtime_export": {"path":".markdown-machine/RUNTIME.md","source_path":"project-runtime/RUNTIME.md","source_digest":"69a4162cae2807e362170eb8af3e02745753c5d629f7c69709999f008ed54477"},
  "contract_exports": [
    {"path":".markdown-machine/contracts/RECORD-GRAMMAR.md","contract_id":"MM-RECORD-GRAMMAR/1","source_path":"project-runtime/RECORD-GRAMMAR.md","source_digest":"71b4666f81f973472e98ddac4e17501933eeb2db8447a3d3372fa1030f7e4040"},
    {"path":".markdown-machine/contracts/GOVERNING-RECORD-CONTRACTS.md","contract_id":"MM-GOVERNING-RECORDS/1","source_path":"project-runtime/GOVERNING-RECORD-CONTRACTS.md","source_digest":"cc4122c8c06157a7f2346c5166a9c3267633368ac1f5a5ce400b266841972118"},
    {"path":".markdown-machine/contracts/RECOVERY-CONTRACTS.md","contract_id":"MM-RECOVERY/1","source_path":"project-runtime/RECOVERY-CONTRACTS.md","source_digest":"9cf67e56cdb1a7ab2a2534e802bf0a531dc0da7a6664eb86b0391806b066d2c1"},
    {"path":".markdown-machine/contracts/AUTHORITY-EVALUATOR.md","contract_id":"MM-AUTHORITY/1","source_path":"project-runtime/AUTHORITY-EVALUATOR.md","source_digest":"5567d443ca71dfa2d60df941ab72a57c3273864d24a4a6917dd91b9222dd3b04"},
    {"path":".markdown-machine/contracts/HUMAN-CONTROL.md","contract_id":"MM-HUMAN-CONTROL/2","source_path":"project-runtime/HUMAN-CONTROL.md","source_digest":"ad9dd45d856cbfa07442c7a32986af29332863bce975c2ad839ca6732d56cdf1"},
    {"path":".markdown-machine/contracts/GENESIS-ADMISSION.md","contract_id":"DIRECT_HUMAN_GENESIS_ADMISSION/v3","source_path":"bootstrap/GENESIS-ADMISSION.md","source_digest":"1bc787fdcd524032145576621af7cb635034ccaacb1516a0d3b94538d0e83d5e"}
  ],
  "selected_capability_exports": [{"capability_id":"software-product","path":".markdown-machine/capabilities/software-product.md","source_path":"project-runtime/capabilities/software-product.md","source_digest":"26eaf260c6a79d8067e3b9d7b1b8520fce7db48c02125114bdea5ff19e529ab6"}],
  "child_layout": [
    {"path":".markdown-machine/RUNTIME.md","role":"RUNTIME","required":true},{"path":".markdown-machine/ORIGIN.md","role":"ORIGIN","required":true},{"path":".markdown-machine/COMPILED-MANIFEST.md","role":"COMPILED_MANIFEST","required":true},{"path":".markdown-machine/REPOSITORY.md","role":"REPOSITORY_BINDING","required":true},{"path":".markdown-machine/HANDOFF.md","role":"HANDOFF_PROJECTION","required":true},{"path":".markdown-machine/contracts","role":"CONTRACT_EXPORTS","required":true},{"path":".markdown-machine/capabilities/software-product.md","role":"CAPABILITY_EXPORT","required":true},{"path":".markdown-machine/authority","role":"CURRENT_AUTHORITY","required":true},{"path":".markdown-machine/intent","role":"CURRENT_INTENT","required":true},{"path":".markdown-machine/lifecycle","role":"CURRENT_LIFECYCLE","required":true},{"path":".markdown-machine/tasks","role":"CURRENT_TASKS","required":true},{"path":".markdown-machine/recovery","role":"RECOVERY_RECORDS","required":true},{"path":".markdown-machine/history","role":"HISTORICAL_CLOSURE","required":true}
  ],
  "forbidden_distribution_roots": ["bootstrap","project-compiler","project-runtime","verification","machine-source","record-factory"],
  "closure_status": "COMPLETE",
  "revision": 1,
  "repository_binding_ref": {"ref":"sha256:2193a1d8b8ae5c55040732c77c7369b0f4061c87c484cc7b7a3973771781f25a","path":".markdown-machine/REPOSITORY.md"}
}
---
# Manna v0.6.0 compiled child closure

This manifest describes the exact exports admitted from the released v0.6.0
distribution. Distribution source roots are not copied into the child.
