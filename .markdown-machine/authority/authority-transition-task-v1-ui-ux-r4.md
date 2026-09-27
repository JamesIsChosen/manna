---
{
  "record_type": "AUTHORITY_TRANSITION",
  "schema_version": 1,
  "project_id": "manna",
  "transition_id": "manna-task-v1-product-freeze-r4-authorize",
  "transition_type": "TASK_AUTHORIZE",
  "predecessor_refs": [{"ref":"sha256:61dbe1e4ed772af066764ed4cdf1d30a6ea4ed39e4a92253bc878bf777f17e88","path":".markdown-machine/authority/authority-transition-product-freeze-horizon-raise.md"}],
  "exact_contract_bindings": [
    {"ref":"sha256:78a4935b2ec986314a0f20fa7fbc4cfe723efea1667705def8dfae9d04039e10","path":".markdown-machine/tasks/task-v1-ui-ux-design-r4.md"},
    {"ref":"sha256:3cf9de7dc9c4ce1314f283baf80e051e6d6fc01febdd7cbea9f1a411d38d8ae4","path":".markdown-machine/reviews/review-request-v1-ui-ux-r4.md"}
  ],
  "human_statement_refs": [],
  "accepted_evidence_refs": [],
  "authority_epoch": 0,
  "sequence": 18
}
---
# V1 Product Freeze review-task authorization

This transition makes the no-effect Product Freeze review gate current. It
does not accept a review result, advance the lifecycle, authorize architecture
or implementation, or permit external effects.
