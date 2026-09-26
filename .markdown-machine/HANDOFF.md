---
{
  "record_type": "HANDOFF_PROJECTION",
  "schema_version": 1,
  "authoritative": false,
  "project_id": "manna",
  "basis_head_ref": {"ref":"sha256:41700c62ab68d151ed0be5f07f384fef809170a022d1330b72d873ed3c992b2f","path":".markdown-machine/authority/authority-transition-task-v1-ui-ux-r2.md"},
  "basis_repository_commit": "187cd0a7d4280465a46e4802f944cd27a3a91866",
  "authority_epoch": 0,
  "sequence": 11,
  "origin_ref": {"ref":"sha256:d6d8502f21500410e8fd694b73ef5c202812b6ab512a448c6aa7bbbbb398dc8d","path":".markdown-machine/ORIGIN.md"},
  "kernel_manifest_ref": {"ref":"sha256:4550840a45b7076653edb73dbea825cc2c3f5138955e5dc10bca0d6644dc24ec","path":".markdown-machine/authority/kernel-manifest-manna.md"},
  "stop_state": "NONE",
  "run_horizon_ref": {"ref":"sha256:666abe4b6f25ce5efc2ef67fe5a879001f82c8da0cd541de3558ba846d9bcefa","path":".markdown-machine/lifecycle/run-horizon-manna.md"},
  "selected_capability_ids": ["software-product"],
  "current_tasks": [
    {"task_id":"P0.2-offline-security","ref":{"ref":"sha256:e2cf1e9e33c0a9c4d6f137b81bc72b8c26a1a7d6d61a4d0761542d535ea564a1","path":".markdown-machine/tasks/task-p0-2-offline-security-r2.md"},"path":".markdown-machine/tasks/task-p0-2-offline-security-r2.md","operation_family":"DISCOVERY","effective_review_floor":"SELF_CHECK"},
    {"task_id":"V1-UI-UX-design-verification","ref":{"ref":"sha256:832538797cc4343f094ff74602109a11c5f36d2eb27c481dd66e92f1b4c1d369","path":".markdown-machine/tasks/task-v1-ui-ux-design-r2.md"},"path":".markdown-machine/tasks/task-v1-ui-ux-design-r2.md","operation_family":"DISCOVERY","effective_review_floor":"SELF_CHECK"}
  ],
  "review_barrier": [],
  "convergence_remaining": {"manna-product-work":0},
  "repository_sync": "REMOTE_SYNC_UNKNOWN",
  "next_lawful": "REPOSITORY_RECOVERY",
  "generated_at_closeout": "2026-09-26T19:23:40Z",
  "lifecycle_node_id": "DESIGN_VERIFICATION"
}
---
# Manna handoff

The v0.10.2.4 kernel and software-product capability migration are staged as
one durable successor. Repository readback and final closeout projection remain
required before this handoff is current.
