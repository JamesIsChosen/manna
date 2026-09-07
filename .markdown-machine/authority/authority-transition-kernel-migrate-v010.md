---
{
  "record_type": "AUTHORITY_TRANSITION",
  "schema_version": 1,
  "project_id": "manna",
  "transition_id": "manna-v061-to-v010-kernel-migrate",
  "transition_type": "KERNEL_MIGRATE",
  "predecessor_refs": [{"ref":"sha256:04c44cd76887dc551d9247553056c0821338df683b5534105e3ac9ae0da02da4","path":".markdown-machine/authority/authority-transition-task-v1-ui-ux.md"}],
  "exact_contract_bindings": [
    {"ref":"sha256:4f7c266e90439f14c21598a1d4bea439e4c4852aaa9b2c882f7dea03de67a00b","path":".markdown-machine/authority/distribution-origin-v010.md"},
    {"ref":"sha256:3df582df7efd0273edc81df4df718afa4c8cc4bd8ddbc1f27278ae86cde8caee","path":".markdown-machine/authority/kernel-manifest-v010.md"}
  ],
  "human_statement_refs": [{"ref":"sha256:aa1447b96d8a2addf483443c97d918a5ba4844474f7cdf3165a8d139dd449548","path":".markdown-machine/intent/human-statement-migration-approval-v010.md"}],
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
