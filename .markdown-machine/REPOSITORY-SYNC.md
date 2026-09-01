---
{
  "record_type": "REPOSITORY_SYNC_STATE",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.4.0",
  "classification": "LOCAL_AHEAD_REMOTE",
  "remote_name": "origin",
  "governed_ref": "refs/heads/codex/markdown-machine-v0.4.0-migration",
  "checkpoint_commit": "CONTAINING_CLOSEOUT_COMMIT",
  "last_known_remote_head": "8d17a63",
  "exact_parity": false
}
---

# Repository sync observation

The v0.4.0 migration is bounded to the local closeout commit. The remote
currentness query was unavailable during this run; `8d17a63` is the last known
remote-tracking branch head. The project agent contract prohibits pushing from
this task, so exact parity is intentionally not claimed. A later authorized
closeout must publish without force or merge and read back the exact remote SHA.
