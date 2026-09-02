---
{
  "record_type": "PUBLICATION_MECHANISM_PLAN",
  "schema_version": 1,
  "project_id": "manna",
  "plan_id": "manna-v0-5-legacy-bridge-entry",
  "environment_subject": "Manna local governed migration bridge entry",
  "publication_adapter_id": "git-repository-legacy-bridge-entry",
  "publication_adapter_version": "1",
  "expected_predecessor_ref": "sha256:18e4158813f6a97ea637f021abe7b7f83c63b0c99186354ad513fbbbb409a0cb",
  "publication_target": "local authority history on refs/heads/codex/markdown-machine-v0.4.0-migration",
  "required_guarantees": [
    "NO_FORCE_PUSH",
    "NO_MERGE",
    "ATOMIC_LOCAL_COMMIT"
  ],
  "publication_adapter_digest": "8b5b2714eb0985a9cb06d3ae0633b9e08832de762eafde5384143b6957f82c61"
}
---
# Legacy bridge publication plan

This pre-publication plan describes the old-contract manifest-only bridge entry. It grants no normal execution authority and is followed immediately by the candidate finalizer in the same bounded migration transaction.
