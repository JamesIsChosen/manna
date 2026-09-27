---
{
  "record_type": "HANDOFF_PROJECTION",
  "schema_version": 1,
  "authoritative": false,
  "project_id": "manna",
  "basis_head_ref": {"ref":"sha256:17ed911a90bdbd2d110b9c33ddd897660af5fb91c1188427df13172573e2aa0d","path":".markdown-machine/authority/authority-transition-ipad-feedback-extend.md"},
  "basis_repository_commit": "6efc60c19ad62cbd4b08be8b4d6d9409cc333982",
  "authority_epoch": 0,
  "sequence": 16,
  "origin_ref": {"ref":"sha256:d6d8502f21500410e8fd694b73ef5c202812b6ab512a448c6aa7bbbbb398dc8d","path":".markdown-machine/ORIGIN.md"},
  "kernel_manifest_ref": {"ref":"sha256:4550840a45b7076653edb73dbea825cc2c3f5138955e5dc10bca0d6644dc24ec","path":".markdown-machine/authority/kernel-manifest-manna.md"},
  "stop_state": "NONE",
  "run_horizon_ref": {"ref":"sha256:634bc92d6df22d13f5615367200c5c31b4a75df28fcc3b25ec96a30b65252f3c","path":".markdown-machine/lifecycle/run-horizon-manna-r2.md"},
  "selected_capability_ids": ["software-product"],
  "current_tasks": [
    {"task_id":"P0.2-offline-security","ref":{"ref":"sha256:e2cf1e9e33c0a9c4d6f137b81bc72b8c26a1a7d6d61a4d0761542d535ea564a1","path":".markdown-machine/tasks/task-p0-2-offline-security-r2.md"},"path":".markdown-machine/tasks/task-p0-2-offline-security-r2.md","operation_family":"DISCOVERY","effective_review_floor":"SELF_CHECK"},
    {"task_id":"V1-UI-UX-design-verification","ref":{"ref":"sha256:e5a475783f0f45aacc9b5e43efa9379713ca0858076bb9f2d61b53007b497ce1","path":".markdown-machine/tasks/task-v1-ui-ux-design-r3.md"},"path":".markdown-machine/tasks/task-v1-ui-ux-design-r3.md","operation_family":"DESIGN_REALIZATION","effective_review_floor":"SELF_CHECK"}
  ],
  "review_barrier": [],
  "convergence_remaining": {"manna-product-work":0},
  "repository_sync": "REPOSITORY_SYNCED",
  "next_lawful": "HUMAN_DECISION_REQUIRED",
  "generated_at_closeout": "2026-09-27T23:36:58Z",
  "lifecycle_node_id": "DESIGN_VERIFICATION"
}
---
# Manna handoff

The approved desktop and mobile mocks remain durable, digest-bound repository
references and were not changed. The revised iPad candidate is mechanically
verified in landscape and portrait, and its direct-session appearance approval
is durably captured at
`.markdown-machine/intent/human-statement-ipad-appearance-approval.md`
(SHA-256 `d96ff73f4718a8956d7078dec273fd62efbca4cc8216b646697debdf8403901a`).
This approval is limited to appearance. The next lawful action is a separate,
explicit human Product Freeze decision/request; Product Freeze has not advanced
and production implementation remains unauthorized.
