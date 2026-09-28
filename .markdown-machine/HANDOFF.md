---
{
  "record_type": "HANDOFF_PROJECTION",
  "schema_version": 1,
  "authoritative": false,
  "project_id": "manna",
  "basis_head_ref": {"ref":"sha256:90d9dcc132f3387aea1e46aac5d15f1259703f3e1aed3a0d3828eb5a95edf341","path":".markdown-machine/authority/authority-transition-clean-closeout-stop.md"},
  "basis_repository_commit": "b3a630661f0d8012c0d940e0dd7635d87d8e8303",
  "authority_epoch": 0,
  "sequence": 24,
  "origin_ref": {"ref":"sha256:d6d8502f21500410e8fd694b73ef5c202812b6ab512a448c6aa7bbbbb398dc8d","path":".markdown-machine/ORIGIN.md"},
  "kernel_manifest_ref": {"ref":"sha256:4550840a45b7076653edb73dbea825cc2c3f5138955e5dc10bca0d6644dc24ec","path":".markdown-machine/authority/kernel-manifest-manna.md"},
  "stop_state": "ACTIVE",
  "stop_barrier_ref": {"ref":"sha256:5572f60688b631aaa07b84f607eb28e48cf862a400cc586b83cd2ce41dd79d9c","path":".markdown-machine/recovery/stop-intent-barrier-clean-closeout.md"},
  "run_horizon_ref": {"ref":"sha256:9eaf213d5aa057534028c8dc919aad8d8f8a4c7ee2d3be95aae26b188c389add","path":".markdown-machine/lifecycle/run-horizon-manna-r3.md"},
  "selected_capability_ids": ["software-product"],
  "current_tasks": [
    {"task_id":"P0.2-offline-security","ref":{"ref":"sha256:e2cf1e9e33c0a9c4d6f137b81bc72b8c26a1a7d6d61a4d0761542d535ea564a1","path":".markdown-machine/tasks/task-p0-2-offline-security-r2.md"},"path":".markdown-machine/tasks/task-p0-2-offline-security-r2.md","operation_family":"DISCOVERY","effective_review_floor":"SELF_CHECK"},
    {"task_id":"V1-UI-UX-design-verification","ref":{"ref":"sha256:49a6c8407d27bbefc85769a301672f9bc88a901f8be07a9644637a5e55209f62","path":".markdown-machine/tasks/task-v1-ui-ux-design-r6.md"},"path":".markdown-machine/tasks/task-v1-ui-ux-design-r6.md","operation_family":"PRODUCT_FREEZE","effective_review_floor":"INDEPENDENT_REQUIRED"}
  ],
  "review_barrier": [{"review_request_id":"manna-v1-product-freeze-r6-independent-review","ref":{"ref":"sha256:6129622b19aa2660e4e84df8f94146f180fb495f35b92f29bae8652c7b427bea","path":".markdown-machine/reviews/review-request-v1-ui-ux-r6.md"}}],
  "convergence_remaining": {"manna-product-work":0},
  "repository_sync": "REPOSITORY_SYNCED",
  "next_lawful": "STOP_ACTIVE",
  "generated_at_closeout": "2026-09-28T00:51:43Z",
  "lifecycle_node_id": "DESIGN_VERIFICATION"
}
---
# Manna handoff

The approved-mock registry now names the exact corrected iPad SHA-256
`be1e8f58e573cfdbfb38588acca23776282d2358740a6ba187b05e9dee82447b`;
desktop and mobile entries were unchanged. Product Freeze has not been accepted.
The authoritative closeout state is committed at
`b3a630661f0d8012c0d940e0dd7635d87d8e8303` and synchronized to the bound
remote branch. The exact corrected Product Freeze task and fresh independent
review request are durable, but the user's graceful shutdown STOP is active.
After an explicit RESUME, an eligible independent reviewer must judge the exact
r6 request; any fresh human appearance decision the reviewer finds necessary
must also be resolved before a PASS can be accepted. Product Freeze has not
been accepted, and production implementation and release remain unauthorized.
