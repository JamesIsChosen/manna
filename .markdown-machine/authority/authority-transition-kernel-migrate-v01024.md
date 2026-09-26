---
{
  "record_type": "AUTHORITY_TRANSITION",
  "schema_version": 1,
  "project_id": "manna",
  "transition_id": "manna-v01024-kernel-migrate",
  "transition_type": "KERNEL_MIGRATE",
  "predecessor_refs": [{"ref":"sha256:2d85b5e349ce676fc7c6cbbfe84431b62f05f897280eae0d74501c6734b26e41","path":".markdown-machine/authority/authority-transition-kernel-migrate-v070.md"}],
  "exact_contract_bindings": [
    {"ref":"sha256:d6d8502f21500410e8fd694b73ef5c202812b6ab512a448c6aa7bbbbb398dc8d","path":".markdown-machine/ORIGIN.md"},
    {"ref":"sha256:4550840a45b7076653edb73dbea825cc2c3f5138955e5dc10bca0d6644dc24ec","path":".markdown-machine/authority/kernel-manifest-manna.md"},
    {"ref":"sha256:4025b2c7e0578d894d45819119ab32aea52867ba9a284e17c9e3647defc96dbb","path":".markdown-machine/REPOSITORY.md"}
  ],
  "human_statement_refs": [{"ref":"sha256:6ce41ed03436c2fc253edc41d44707cae029fe5a758ff6bad250fc1321055131","path":".markdown-machine/intent/human-statement-v01024-migration.md"}],
  "accepted_evidence_refs": [{"ref":"sha256:4832ecf6c8f70a4b3cd23508e2a3c53739d9995c455f04e6e26d196f83745764","path":".markdown-machine/evidence/external-observation-inbox-legacy-boundary-v01024.md"}],
  "authority_epoch": 0,
  "sequence": 7
}
---
# Manna v0.10.2.4 kernel migration

This ordinary single-parent cutover admits the exact released v0.10.2.4 kernel,
preserves the durable v0.7.0 predecessor and Inbox boundary, and rebinds the
repository to the dedicated v0.10.2.4 upgrade branch.
