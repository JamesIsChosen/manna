---
{
  "record_type": "PROJECT_STATE",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.3.0",
  "project_id": "manna",
  "authority_head": "genesis:manna:2026-08-30",
  "lifecycle_revision": "manna-v1-ui-ux-design-pending",
  "run_horizon": "verify Version 1 flows and visual design, then obtain explicit Product Freeze before implementation",
  "active_capabilities": ["software-product"],
  "repository_sync": "LOCAL_AHEAD_REMOTE",
  "work_status": "UI_UX_INTERVIEW_COMPLETE_DESIGN_PENDING"
}
---

# Manna current state

## Authority and intent

The current project authority is the Manna genesis admission plus the human reconciliation instruction recorded in `intent/HUMAN-STATEMENT.md`. The exact human statement remains immutable provenance; this state record is only its current mechanical projection.

## Product state

Manna is an offline-first Bible study workstation whose release target is one self-contained `manna.html` file with no runtime sibling assets, server, account, or Internet requirement. Existing product specifications, source, tests, CI, security material, and review chronology are preserved. The repository records P0.1 as workable in its roadmap and identifies P0.2 as the next security/network-guard packet; the README has an older pre-implementation status line that remains project-owned history and is not silently rewritten in this governance reconciliation.

The accepted Version 1 product interview is canonical in `docs/01-spec/manna-v1-product-contract.md` and `intent/PRODUCT-CONTRACT-V1.md`. The completed UI/UX interview is canonical in `docs/01-spec/manna-v1-ui-ux-requirements.md` and `intent/UI-UX-INTERVIEW-V1.md`. It changes the product frontier: P0.1 remains feasibility evidence, while the next legal step is complete flow and visual design verification by a new design agent. The roadmap must be recompiled after explicit Product Freeze because Version 1 now brings module/document import and Verse Finder forward.

## Governance state

Only `software-product` is active. Repository persistence is universal continuity, not a second capability. The earlier generic SMPM-1 active materialization is classified as invalid for the current v0.3.0 runtime shape and removed from active paths; its historical event remains in `history/SMPM-1-BOOTSTRAP.md` and Git history.

The prior reconciliation checkpoint remains historical evidence. This UI/UX interview closeout is intentionally local-ahead until its documentation checkpoint is safely published to `codex/manna-v1-product-discovery` and authoritatively read back. No application source changed and no Product Freeze is claimed.
