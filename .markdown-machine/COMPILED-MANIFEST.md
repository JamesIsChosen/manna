---
{
  "record_type": "COMPILED_MANIFEST",
  "schema_version": 1,
  "project_id": "manna",
  "compiled_manifest_id": "manna-v01024-compiled-closure",
  "distribution_origin_ref": {"ref":"sha256:d6d8502f21500410e8fd694b73ef5c202812b6ab512a448c6aa7bbbbb398dc8d","path":".markdown-machine/ORIGIN.md"},
  "runtime_export": {"path":".markdown-machine/RUNTIME.md","source_path":"project-runtime/RUNTIME.md","source_digest":"619d37ecc81fea967bb9bc5018c13e4cffe00038a32a32aa3ebddcab17fecc4b"},
  "contract_exports": [
    {"path":".markdown-machine/contracts/RECORD-GRAMMAR.md","contract_id":"MM-RECORD-GRAMMAR/1","source_path":"project-runtime/RECORD-GRAMMAR.md","source_digest":"47c61d1aa92f492afd0419e961d51777058f9148ff90b2355d7ee57d73e34e3d"},
    {"path":".markdown-machine/contracts/GOVERNING-RECORD-CONTRACTS.md","contract_id":"MM-GOVERNING-RECORDS/1","source_path":"project-runtime/GOVERNING-RECORD-CONTRACTS.md","source_digest":"bb90ea47dea6b4d6674efffb3b0a48502e19d6f95389285a928561e6a70c7ca9"},
    {"path":".markdown-machine/contracts/RECOVERY-CONTRACTS.md","contract_id":"MM-RECOVERY/1","source_path":"project-runtime/RECOVERY-CONTRACTS.md","source_digest":"565c84f593165914d34fdaaa8ce059da9bfc451fa9eaf669a1b1329eda7d2dcd"},
    {"path":".markdown-machine/contracts/AUTHORITY-EVALUATOR.md","contract_id":"MM-AUTHORITY/1","source_path":"project-runtime/AUTHORITY-EVALUATOR.md","source_digest":"5c22f2655c7cdd3abfb4a790af33b6d7e0278640187c376ced8f84309465e3f8"},
    {"path":".markdown-machine/contracts/HUMAN-CONTROL.md","contract_id":"MM-HUMAN-CONTROL/2","source_path":"project-runtime/HUMAN-CONTROL.md","source_digest":"7c92664ce77ae0afa26f99e53175fe2ae0dbf5a14806ebb110edffde519b20ae"},
    {"path":".markdown-machine/contracts/GENESIS-ADMISSION.md","contract_id":"DIRECT_HUMAN_GENESIS_ADMISSION/v3","source_path":"bootstrap/GENESIS-ADMISSION.md","source_digest":"f395faf32323d0527dbcb5e7756414eceff98e295a043b9257b06cbdfffcd7e9"}
  ],
  "selected_capability_exports": [
    {"capability_id":"software-product","path":".markdown-machine/capabilities/software-product.md","source_path":"project-runtime/capabilities/software-product.md","source_digest":"d434bc11171aa9e643bf0f021f11c30d91da7bc7326581b398a0b9955bb99eab"}
  ],
  "child_layout": [
    {"path":".markdown-machine/RUNTIME.md","role":"RUNTIME","required":true},
    {"path":".markdown-machine/ORIGIN.md","role":"ORIGIN","required":true},
    {"path":".markdown-machine/COMPILED-MANIFEST.md","role":"COMPILED_MANIFEST","required":true},
    {"path":".markdown-machine/REPOSITORY.md","role":"REPOSITORY_BINDING","required":true},
    {"path":".markdown-machine/HANDOFF.md","role":"HANDOFF_PROJECTION","required":true},
    {"path":".markdown-machine/contracts","role":"CONTRACT_EXPORTS","required":true},
    {"path":".markdown-machine/capabilities/software-product.md","role":"CAPABILITY_EXPORT","required":true},
    {"path":".markdown-machine/authority","role":"CURRENT_AUTHORITY","required":true},
    {"path":".markdown-machine/intent","role":"CURRENT_INTENT","required":true},
    {"path":".markdown-machine/lifecycle","role":"CURRENT_LIFECYCLE","required":true},
    {"path":".markdown-machine/tasks","role":"CURRENT_TASKS","required":true},
    {"path":".markdown-machine/reviews","role":"CURRENT_REVIEWS","required":true},
    {"path":".markdown-machine/evidence","role":"RECOVERY_EVIDENCE","required":true},
    {"path":".markdown-machine/recovery","role":"RECOVERY_RECORDS","required":true},
    {"path":".markdown-machine/history","role":"HISTORICAL_CLOSURE","required":true}
  ],
  "forbidden_distribution_roots": ["bootstrap","project-compiler","project-runtime","verification","machine-source","record-factory"],
  "closure_status": "COMPLETE",
  "revision": 2,
  "repository_binding_ref": {"ref":"sha256:4025b2c7e0578d894d45819119ab32aea52867ba9a284e17c9e3647defc96dbb","path":".markdown-machine/REPOSITORY.md"}
}
---
# Manna v0.10.2.4 compiled child closure

This manifest describes the exact exports and project state admitted from the
released v0.10.2.4 distribution. Distribution source roots are not copied into
the child.
