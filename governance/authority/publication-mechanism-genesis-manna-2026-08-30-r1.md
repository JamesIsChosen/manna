---
{
  "record_type": "PUBLICATION_MECHANISM_PLAN",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Genesis Publication Plan",
  "project_id": "b02652666e7c616794244ab8f0f31638",
  "plan_id": "publication-mechanism-genesis-manna-2026-08-30-r1",
  "adapter": "local-filesystem-cooperative-single-writer",
  "profile": "SERIAL_PORTABLE/v1",
  "target": "/home/james/Projects/manna",
  "transition_type": "PROJECT_GENESIS",
  "expected_predecessor": null,
  "required_guarantees": ["local_atomicity", "authority_publication"],
  "status": "USED_FOR_PUBLICATION"
}
---

This plan permits only local governance-file materialization. It does not authorize application release, deployment, payment, destructive operations, credentials, or public effects.
