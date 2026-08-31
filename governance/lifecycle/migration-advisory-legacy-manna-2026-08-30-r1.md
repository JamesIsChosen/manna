---
{
  "record_type": "MIGRATION_ADVISORY",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Legacy Manna Repository Admission Advisory",
  "project_id": "b02652666e7c616794244ab8f0f31638",
  "advisory_id": "MIG-MANNA-LEGACY-001",
  "class": "REQUIRED_BEFORE_SPECIFIC_OPERATION",
  "source": "existing repository at /home/james/Projects/manna",
  "finding": "prior product work predates SMPM-1 and has no canonical SMPM authority chain",
  "action": "preserve prior records as evidence; do not replay P0.1; require new task authorization for P0.2",
  "status": "ADMITTED"
}
---

This advisory governs the relationship between the pre-existing repository history and the newly materialized SMPM project authority. It does not rewrite prior commits, packets, reviews, or roadmap markers.
