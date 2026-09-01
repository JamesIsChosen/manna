---
{
  "record_type": "PUBLICATION_MECHANISM_PLAN",
  "schema_version": 1,
  "project_id": "manna",
  "plan_id": "manna-v0-5-1-kernel-migration-finalizer",
  "environment_subject": "Manna local governed v0.5.1 direct migration",
  "publication_adapter_id": "git-repository-candidate-finalizer",
  "publication_adapter_version": "1",
  "expected_predecessor_ref": "sha256:b1e4808cf8aa4d0063ec50610f34dbe98aa2e733c96bb31e3ed32a9ff4d0ef01",
  "publication_target": "local authority history on refs/heads/codex/markdown-machine-v0.4.0-migration",
  "required_guarantees": [
    "NO_FORCE_PUSH",
    "NO_MERGE",
    "ATOMIC_LOCAL_COMMIT"
  ],
  "publication_adapter_digest": "51be1e5a3d2e5da5bcb9af4766b0227128bc990e32b9201996fd925f51f204c4"
}
---
# v0.5.1 candidate finalizer publication plan

This plan is the local-only publication mechanism for the direct coherent v0.5.1 cutover. It does not authorize external publication, merge, deployment, or release.
