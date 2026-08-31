---
{
  "record_type": "REPOSITORY_SYNC_STATE",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.3.0",
  "classification": "REMOTE_SYNC_UNKNOWN",
  "remote_name": "origin",
  "governed_ref": "refs/heads/codex/manna-governance-reconciliation",
  "local_head_before_closeout": "12a9d33c4827c82f87ab79bd1858da958a6e824d",
  "remote_head_before_closeout": null,
  "exact_parity": false
}
---

# Repository sync observation

This is the pre-closeout observation. The local branch is `codex/manna-governance-reconciliation` at `12a9d33c4827c82f87ab79bd1858da958a6e824d` before the v0.3.0 reconciliation commit. The governed feature ref was not present in the last successful remote ref discovery; the current attempted read in this environment was unavailable, so the immediate classification is `REMOTE_SYNC_UNKNOWN` until authoritative readback.

The closeout sequence is: commit the intended durable project state, read remote currentness, publish the governed ref only if safe and authorized, read the exact remote ref back, and record the final SHA equality in this file and in `STATE.md`/`HANDOFF.md`.
