---
{
  "record_type": "AUTHORITY_TRANSITION",
  "schema_version": 1,
  "project_id": "manna",
  "transition_id": "manna-clean-closeout-stop",
  "transition_type": "STOP",
  "predecessor_refs": [{"ref":"sha256:dae946f51da9b641735b775908f31ad0159e573b0c6a99e8b3872b8dae6c3ed8","path":".markdown-machine/authority/authority-transition-task-v1-ui-ux-r6.md"}],
  "exact_contract_bindings": [],
  "human_statement_refs": [{"ref":"sha256:637d362cac7683ec3a345f077872d872c2336de05b04a88aaaf8ea4e2f7cfa7f","path":".markdown-machine/intent/human-statement-clean-closeout-stop.md"}],
  "accepted_evidence_refs": [{"ref":"sha256:637d362cac7683ec3a345f077872d872c2336de05b04a88aaaf8ea4e2f7cfa7f","path":".markdown-machine/intent/human-statement-clean-closeout-stop.md"}],
  "authority_epoch": 0,
  "sequence": 24
}
---
# Clean-closeout graceful STOP transition

This deny-only transition activates the user's shutdown boundary after the
registry sync and exact independent-review continuation route were preserved.
