---
{
  "record_type": "COMPILED_MANIFEST",
  "schema_version": 1,
  "project_id": "manna",
  "compiled_manifest_id": "manna-v061-compiled-closure",
  "distribution_origin_ref": {"ref":"sha256:d024da6aa0eed41153a71a190012a61139a47c62882dcc797f784e74a8dd0554","path":".markdown-machine/ORIGIN.md"},
  "runtime_export": {"path":".markdown-machine/RUNTIME.md","source_path":"project-runtime/RUNTIME.md","source_digest":"d9828a1db911bdb48dca7ebdfe3dd6ad72dc45355fee7180137b84a9054b322a"},
  "contract_exports": [
    {"path":".markdown-machine/contracts/RECORD-GRAMMAR.md","contract_id":"MM-RECORD-GRAMMAR/1","source_path":"project-runtime/RECORD-GRAMMAR.md","source_digest":"71b4666f81f973472e98ddac4e17501933eeb2db8447a3d3372fa1030f7e4040"},
    {"path":".markdown-machine/contracts/GOVERNING-RECORD-CONTRACTS.md","contract_id":"MM-GOVERNING-RECORDS/1","source_path":"project-runtime/GOVERNING-RECORD-CONTRACTS.md","source_digest":"cc4122c8c06157a7f2346c5166a9c3267633368ac1f5a5ce400b266841972118"},
    {"path":".markdown-machine/contracts/RECOVERY-CONTRACTS.md","contract_id":"MM-RECOVERY/1","source_path":"project-runtime/RECOVERY-CONTRACTS.md","source_digest":"5945ac74c62555e2e52f51e33f66c5b176ba96a8225ebaececa2a1df51e5bf79"},
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
  "repository_binding_ref": {"ref":"sha256:0a0c6c4cce4968a72d38e8930c467639b4c1f04032764f3d290d56d98bd4c624","path":".markdown-machine/REPOSITORY.md"}
}
---
# Manna v0.6.1 compiled child closure

This manifest describes the exact exports admitted from the released v0.6.1
distribution. Distribution source roots are not copied into the child.
