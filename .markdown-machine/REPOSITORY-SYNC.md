---
{
  "record_type": "REPOSITORY_SYNC_STATE",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.3.0",
  "classification": "LOCAL_AHEAD_REMOTE",
  "remote_name": "origin",
  "governed_ref": "refs/heads/codex/manna-v1-ui-ux-design-verification",
  "checkpoint_commit": "65bc8e0a2e17f311df8d47741c7d09b39d48bdb8",
  "remote_head_readback": null,
  "exact_parity": false
}
---

# Repository sync observation

The Version 1 visual/layout baseline checkpoint is committed locally at
`65bc8e0a2e17f311df8d47741c7d09b39d48bdb8`. It has not yet been published to
the governed ref; remote-head readback is therefore pending.

The required closeout sequence is: commit the intended durable project state,
read the canonical remote ref, publish the governed ref without force or merge,
read the exact remote ref back, and record SHA equality here and in `STATE.md`/
`HANDOFF.md`. Do not claim `REPOSITORY_SYNCED` or `STOPPED_SYNCED` until that
readback succeeds.
