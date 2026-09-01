---
{
  "record_type": "REPOSITORY_SYNC_INTENT",
  "schema_version": 1,
  "project_id": "manna",
  "sync_intent_id": "manna-v0-4-governance-migration-closeout",
  "repository_binding_ref": "sha256:b22470ce387c4931dff740df9fb1138d7946bd91647978089ca89aaea8ecc722",
  "persistence_ref": "refs/heads/codex/markdown-machine-v0.4.0-migration",
  "target_commit_relation": "CONTAINING_COMMIT",
  "required_readback": true,
  "closeout_classification": "LOCAL_AHEAD_REMOTE"
}
---

# Repository sync intent

The bounded migration commit is intended to contain this sync intent. The
repository binding authorizes exact readback for a later closeout, while the
project agent contract explicitly prohibits pushing from this task.
