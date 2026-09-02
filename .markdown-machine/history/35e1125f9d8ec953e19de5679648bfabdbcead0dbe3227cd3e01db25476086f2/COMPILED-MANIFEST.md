---
{
  "record_type": "COMPILED_PROJECT_MANIFEST",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.5.1",
  "project_id": "manna",
  "manifest_status": "MATERIALIZED",
  "source_tag": "v0.5.1",
  "source_commit": "914687c5dccd334e208781fbcae53ea23f4e4f41",
  "source_tree": "71f7f41af51f36a8613041f019c1077095215cdb",
  "content_set_digest": "fea489c7701910c0d9cfe3f86b2651e5a67f233c3ec0ecfc798b9cba2d97c5f4"
}
---
# Manna compiled project manifest

This manifest records the exact v0.5.1 project-local governance surface. Exact candidate exports are listed in OUTPUT-PLAN.md; the Markdown Machine distribution is not copied into the project. The v0.5.0 surface is bounded under history/v0.5.0/, the prior bridge remains under history/v0.5.0-migration/, and the v0.3.0 closure remains under history/v0.3.0/.

## Current authority

- .markdown-machine/authority/AUTHORITY.md -> sha256:5276891af47ceecff0a5718700d8886a057789bb9828d3a0086a1f06a77dba46
- .markdown-machine/authority/AUTHORITY-TRANSITION-KERNEL-MIGRATE.md -> sha256:c5397b0086629dc7d0e75551bc284161c0426bc9abe21c41011b6a4c2316ad2e
- .markdown-machine/authority/KERNEL-MANIFEST.md -> sha256:505a0f7dccc97b617909d9758914c15fa80fb1423badf574f5b2d307e6cc127f
- .markdown-machine/ORIGIN.md -> sha256:9ce19d3199418396ceb49264539b5bd82a0cd94e9fc8d04245badbb4af1dd63e

## Current typed binding set

- .markdown-machine/intent/BASELINE.md -> sha256:62568fc918b59c7ac67cc8837e6696ca843c5805bc5507e3b6798dd46e040e70
- .markdown-machine/capabilities/BINDING.md -> sha256:d25267b9253fffdca01c7883cf53d882276789c72d43070d9fc29d60622f2822
- .markdown-machine/lifecycle/GRAPH.md -> sha256:ea43a8ea09b9f5bd7bd52cce1a178072d13689d2baece18526be2e3434f840e6
- .markdown-machine/lifecycle/HORIZON.md -> sha256:18a53b295d950f05f564cad883e0257288446ee50cc947c7b2d8577ba6843914
- .markdown-machine/authority/OPERATION-CONTRACT-DISCOVERY.md -> sha256:1943da754bde66f4bdcfbf7149dda9cf940243dae64d8c19169b4d1bb8cb573d
- .markdown-machine/tasks/P0.2-OFFLINE-SECURITY.md -> sha256:51e861ac9f39f2de2868afe08840eb18def5818b5c5ad2657e3e88b5f3310014
- .markdown-machine/tasks/V1-UI-UX-DESIGN.md -> sha256:b88458acc10a00af3687fecc239c630828cd01aa39b0ed35c8c9226e277e2547
- .markdown-machine/authority/CONVERGENCE-POLICY.md -> sha256:9ebb1d0f1a0c7d9a2f4aefcd213cd08392e491fd03d86f1493fd035f3ab08440
- .markdown-machine/REPOSITORY.md -> sha256:d9c8128deeafff579276a3d866b7f59cab557d531159fd02b03319a664dd6a38

## Current semantic closure

The current exact export set includes contracts/KERNEL-CONSTITUTION.md and contracts/MIGRATION.md, including the v0.5.1 forward-migration continuity floor. No CONTEXT_ROUTE projection was generated: the current Tasks carry no exact applicability mapping requiring one.
