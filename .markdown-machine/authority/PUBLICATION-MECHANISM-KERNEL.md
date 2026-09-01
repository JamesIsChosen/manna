---
{
  "record_type": "PUBLICATION_MECHANISM_PLAN",
  "schema_version": 1,
  "project_id": "manna",
  "plan_id": "manna-kernel-migration-closeout",
  "environment_subject": "Manna repository governed branch closeout",
  "publication_adapter_id": "git-repository-closeout-readback",
  "publication_adapter_version": "1",
  "expected_predecessor_ref": "sha256:18e4158813f6a97ea637f021abe7b7f83c63b0c99186354ad513fbbbb409a0cb",
  "publication_target": "origin/refs/heads/codex/markdown-machine-v0.4.0-migration",
  "required_guarantees": ["NO_FORCE_PUSH", "NO_MERGE", "EXACT_REMOTE_READBACK"],
  "publication_adapter_digest": "e02ee0ed1a6e4846dd83a6eb1d489e7657ca109142e16c06d9a6b7c93fcd7c2b"
}
---

# Kernel migration publication plan

This plan describes the repository closeout boundary for the v0.4.0 governance
migration. The project instructions require a local commit and prohibit pushing
or merging from this task, so the resulting handoff must report the remote as
not synchronized until an authorized later closeout performs exact readback.
