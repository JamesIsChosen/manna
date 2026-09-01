---
{
  "record_type": "PUBLICATION_MECHANISM_PLAN",
  "schema_version": 1,
  "project_id": "manna",
  "plan_id": "manna-v0-5-kernel-migration-finalizer",
  "environment_subject": "Manna local governed migration finalization",
  "publication_adapter_id": "git-repository-candidate-finalizer",
  "publication_adapter_version": "1",
  "expected_predecessor_ref": "sha256:81dfe0c3cc29492152379ec06257f6b0d4e70b7dacabc405276e3c6337e3ebfa",
  "publication_target": "local authority history on refs/heads/codex/markdown-machine-v0.4.0-migration",
  "required_guarantees": [
    "NO_FORCE_PUSH",
    "NO_MERGE",
    "ATOMIC_LOCAL_COMMIT"
  ],
  "publication_adapter_digest": "51be1e5a3d2e5da5bcb9af4766b0227128bc990e32b9201996fd925f51f204c4"
}
---
# Candidate finalizer publication plan

This plan is the pre-existing publication mechanism for the coherent candidate cutover. It changes only project-local governance records and does not authorize external publication.
