---
{
  "record_type": "AUTHORITY_TRANSITION",
  "schema_version": 1,
  "project_id": "manna",
  "transition_id": "manna-v061-to-v010-kernel-migrate",
  "transition_type": "KERNEL_MIGRATE",
  "predecessor_refs": [{"ref":"sha256:04c44cd76887dc551d9247553056c0821338df683b5534105e3ac9ae0da02da4","path":".markdown-machine/authority/authority-transition-task-v1-ui-ux.md"}],
  "exact_contract_bindings": [
    {"ref":"sha256:12c3e1c7c5729a34545cea92ed4d92ffbbf74e3f64630e332c6c25be1ddf04db","path":".markdown-machine/authority/distribution-origin-v010.md"},
    {"ref":"sha256:6e22868261012b36a92b1d7d47dd90a89a235b9ea1c4c6c00a8514cd863ccc71","path":".markdown-machine/authority/kernel-manifest-v010.md"},
    {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
    {"ref":"sha256:49196ed599b239b24e7e5844e5b09d642787efb3a0a2e4500fae90cff84f936d","path":".markdown-machine/capabilities/capability-binding-software-product.md"},
    {"ref":"sha256:babd7d71ddcfd9e100dc0ac77827cca98d0821cd0cf633e9c93d04b2cc300fb5","path":".markdown-machine/lifecycle/lifecycle-graph-manna.md"},
    {"ref":"sha256:666abe4b6f25ce5efc2ef67fe5a879001f82c8da0cd541de3558ba846d9bcefa","path":".markdown-machine/lifecycle/run-horizon-manna.md"},
    {"ref":"sha256:1c74ef485d917fd3fd8d389fb7d5130a20056ff6d30cb9bf2a06d3e6a0320122","path":".markdown-machine/authority/operation-contract-discovery.md"},
    {"ref":"sha256:98ed7dfed39b5ee833ebc414bf9d04b066537edc0e3c8404d59cb68898d10ddf","path":".markdown-machine/tasks/task-p0-2-offline-security.md"},
    {"ref":"sha256:b768e7fa8b4c35ed64eaaf3ee97cf919caab5df1bd061992ed98ef6028aa52d2","path":".markdown-machine/tasks/task-v1-ui-ux-design.md"},
    {"ref":"sha256:6fba93e1c1cb2e162ce9d266614467eb859a61b5151dcc7fe680b5fb86a73a77","path":".markdown-machine/authority/convergence-policy-manna.md"},
    {"ref":"sha256:2a0a6bc93bc3576cb46b49b36e31b3d4066fc7037da3332cd0f818ad8b20a56e","path":".markdown-machine/REPOSITORY.md"}
  ],
  "human_statement_refs": [{"ref":"sha256:eea361090827005842be547b8e6490fb7ff0913c8e85e113426e6237c568587a","path":".markdown-machine/intent/human-statement-migration-approval-v010-current2.md"}],
  "accepted_evidence_refs": [],
  "authority_epoch": 0,
  "sequence": 6
}
---
# Manna v0.6.1 to v0.10.0 kernel migration

This AUTHORITY_TRANSITION advances authority from the v0.6.1 adoption state
(sequence 5) to the v0.10.0 kernel distribution. It binds the new
DISTRIBUTION_ORIGIN and KERNEL_MANIFEST, with the explicit human
MIGRATION_APPROVAL statement as required by MM-HUMAN-CONTROL/2 §3.
