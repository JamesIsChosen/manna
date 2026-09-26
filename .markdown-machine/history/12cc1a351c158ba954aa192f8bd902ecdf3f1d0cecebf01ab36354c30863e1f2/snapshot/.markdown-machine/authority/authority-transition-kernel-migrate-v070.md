---
{
  "record_type": "AUTHORITY_TRANSITION",
  "schema_version": 1,
  "project_id": "manna",
  "transition_id": "manna-v070-kernel-migrate",
  "transition_type": "KERNEL_MIGRATE",
  "predecessor_refs": [{"ref":"sha256:04c44cd76887dc551d9247553056c0821338df683b5534105e3ac9ae0da02da4","path":".markdown-machine/authority/authority-transition-task-v1-ui-ux.md"}],
  "exact_contract_bindings": [
    {"ref":"sha256:4a824f5b1e5b76fd4ea1d29d712db2e82b9a0b80e595b21f9cbe1f88109681bc","path":".markdown-machine/ORIGIN.md"},
    {"ref":"sha256:9872183b72796c3fe469b8a7fee0078b7370a1c559e0bdc578b39b1441fd581f","path":".markdown-machine/authority/kernel-manifest-manna.md"},
    {"ref":"sha256:a4e7ee281c265829c8d75d0bf9521137a0fd6bb501166060d0cd4dd384d7f19f","path":".markdown-machine/REPOSITORY.md"}
  ],
  "human_statement_refs": [{"ref":"sha256:887a49ecbe62ec470b1b421be7c59b3d2661a168749a27978b722cdec013ddd6","path":".markdown-machine/intent/human-statement-v070-migration.md"}],
  "accepted_evidence_refs": [],
  "authority_epoch": 0,
  "sequence": 6
}
---
# Manna v0.7.0 kernel migration

This ordinary single-parent cutover admits the exact released v0.7.0 kernel
and updates the repository persistence binding to this upgrade branch.
