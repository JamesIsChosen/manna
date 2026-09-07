---
{
  "record_type": "HANDOFF_PROJECTION",
  "schema_version": 1,
  "authoritative": true,
  "project_id": "manna",
  "basis_head_ref": {"ref":"sha256:46beec4bdb5354cd85a9a454714c0dcf9b553bd3634e1e463a68d9459e416856","path":".markdown-machine/authority/authority-transition-kernel-migrate-v010.md"},
  "basis_repository_commit": "fad666270069ae5ccce68c9be445b0e5796426c5",
  "authority_epoch": 0,
  "sequence": 6,
  "origin_ref": {"ref":"sha256:d024da6aa0eed41153a71a190012a61139a47c62882dcc797f784e74a8dd0554","path":".markdown-machine/ORIGIN.md"},
  "kernel_manifest_ref": {"ref":"sha256:3df582df7efd0273edc81df4df718afa4c8cc4bd8ddbc1f27278ae86cde8caee","path":".markdown-machine/authority/kernel-manifest-v010.md"},
  "stop_state": "NONE",
  "run_horizon_ref": {"ref":"sha256:666abe4b6f25ce5efc2ef67fe5a879001f82c8da0cd541de3558ba846d9bcefa","path":".markdown-machine/lifecycle/run-horizon-manna.md"},
  "selected_capability_ids": ["software-product"],
  "current_tasks": [
    {"task_id":"P0.2-offline-security","ref":{"ref":"sha256:1e5d027b37ab6926691e1a471e6e1bee513973f5cc8119b6911035ec24dfeb8d","path":".markdown-machine/tasks/task-p0-2-offline-security.md"},"path":".markdown-machine/tasks/task-p0-2-offline-security.md","operation_family":"DISCOVERY","review_floor":"SELF_CHECK"},
    {"task_id":"V1-UI-UX-design-verification","ref":{"ref":"sha256:9ced501768ca59f8d138a83d4b03ec9332d939b2646b7d00032edba6a669ab6e","path":".markdown-machine/tasks/task-v1-ui-ux-design.md"},"path":".markdown-machine/tasks/task-v1-ui-ux-design.md","operation_family":"DISCOVERY","review_floor":"SELF_CHECK"}
  ],
  "human_action_required": "Obtain human appearance approval, then receive an explicit Product Freeze request before implementation.",
  "review_barrier": [],
  "convergence_remaining": {"manna-product-work":0,"historical_reusable":0},
  "repository_sync": "REPOSITORY_SYNCED",
  "next_lawful": "HUMAN_APPEARANCE_APPROVAL_PENDING",
  "generated_at_closeout": "2026-09-07T09:47:00Z",
  "lifecycle_node_id": "DESIGN_VERIFICATION",
  "migration_note": "Completed v0.10.0 kernel migration with REPOSITORY_BINDING reconciliation. Authority advanced from sequence 5 (TASK_AUTHORIZE for V1-UI-UX) to sequence 6 (KERNEL_MIGRATE to MM v0.10.0). Contracts distributed from v0.10.0 distribution. Pre-snapshot at /tmp/pre-snapshot-migration.txt."
}
---
