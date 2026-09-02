---
{
  "record_type": "REPOSITORY_BINDING",
  "schema_version": 1,
  "project_id": "manna",
  "binding_id": "manna-github-origin",
  "provider": "GitHub",
  "canonical_repository_identity": "JamesIsChosen/manna",
  "persistence_ref": "refs/heads/codex/markdown-machine-v0.4.0-migration",
  "synchronization_policy": "PUSH_ON_BOUNDED_CLOSEOUT",
  "force_push_allowed": false,
  "merge_on_closeout": false,
  "push_side_effect_classification": "REPOSITORY_WRITE",
  "remote_currentness_method": "AUTHORITATIVE_GIT_REF_READBACK"
}
---
# Manna repository binding

The canonical repository identity and governed local branch are preserved. This migration is committed locally only; no push, merge, release, deployment, or force operation is authorized here. Exact remote currentness must be read back before any future synchronization claim.
