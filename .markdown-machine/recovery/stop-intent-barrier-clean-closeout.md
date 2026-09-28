---
{
  "record_type": "STOP_INTENT_BARRIER",
  "schema_version": 1,
  "project_id": "manna",
  "barrier_id": "manna-clean-closeout-stop",
  "stop_kind": "GRACEFUL",
  "human_statement_ref": {"ref":"sha256:637d362cac7683ec3a345f077872d872c2336de05b04a88aaaf8ea4e2f7cfa7f","path":".markdown-machine/intent/human-statement-clean-closeout-stop.md"},
  "state": "ACTIVE",
  "revision": 1
}
---
# Clean-closeout STOP barrier

This active graceful barrier preserves the shutdown boundary until a future
direct-session RESUME is separately admitted.
