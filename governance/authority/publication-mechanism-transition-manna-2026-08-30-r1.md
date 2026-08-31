---
{
  "record_type": "PUBLICATION_MECHANISM_PLAN",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Post-Genesis Local Transition Publication Plan",
  "project_id": "b02652666e7c616794244ab8f0f31638",
  "plan_id": "publication-mechanism-transition-manna-2026-08-30-r1",
  "adapter": "local-filesystem-cooperative-single-writer",
  "profile": "SERIAL_PORTABLE/v1",
  "target": "/home/james/Projects/manna",
  "transition_types": ["INTENT_ACCEPT", "CAPABILITY_BIND", "LIFECYCLE_PUBLISH"],
  "required_guarantees": ["local_atomicity", "authority_publication", "convergence_reservation"],
  "status": "USED_FOR_PUBLICATION"
}
---

This plan supports only local authority-record publication for the initial intent, capability, and lifecycle transitions.
