---
{
  "record_type": "PROJECT_STATE",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.3.0",
  "project_id": "manna",
  "authority_head": "genesis:manna:2026-08-30",
  "lifecycle_revision": "manna-v1-ui-ux-high-fidelity-verified-appearance-approval-pending",
  "run_horizon": "verify Version 1 flows and visual design, then obtain explicit Product Freeze before implementation",
  "active_capabilities": ["software-product"],
  "repository_sync": "REPOSITORY_SYNCED",
  "work_status": "UI_UX_BASELINE_RECORDED_HIGH_FIDELITY_VERIFIED_APPEARANCE_APPROVAL_PENDING"
}
---

# Manna current state

## Authority and intent

The current project authority is the Manna genesis admission plus the human reconciliation instruction recorded in `intent/HUMAN-STATEMENT.md`. The exact human statement remains immutable provenance; this state record is only its current mechanical projection.

## Product state

Manna is an offline-first Bible study workstation whose release target is one self-contained `manna.html` file with no runtime sibling assets, server, account, or Internet requirement. Existing product specifications, source, tests, CI, security material, and review chronology are preserved. The repository records P0.1 as workable in its roadmap and identifies P0.2 as the next security/network-guard packet; the README has an older pre-implementation status line that remains project-owned history and is not silently rewritten in this governance reconciliation.

The accepted Version 1 product interview is canonical in `docs/01-spec/manna-v1-product-contract.md` and `intent/PRODUCT-CONTRACT-V1.md`. The completed UI/UX interview is canonical in `docs/01-spec/manna-v1-ui-ux-requirements.md` and `intent/UI-UX-INTERVIEW-V1.md`. The visual/layout baseline, IA evidence, human-approved low-fidelity flow/state draft, and local-browser high-fidelity desktop/phone reference verification are now recorded under `docs/01-spec/design-reference/`; human appearance approval remains pending. P0.1 remains feasibility evidence. The roadmap must be recompiled only after explicit Product Freeze because Version 1 now brings module/document import and Verse Finder forward.

## Governance state

Only `software-product` is active. Repository persistence is universal continuity, not a second capability. The earlier generic SMPM-1 active materialization is classified as invalid for the current v0.3.0 runtime shape and removed from active paths; its historical event remains in `history/SMPM-1-BOOTSTRAP.md` and Git history.

The UI/UX interview checkpoint `5bea95bea140b96a1961dfb93bb441d2547c45d0` remains preserved as the parent checkpoint. This reconciliation adds only design-reference evidence, requirements traceability, and governance-state updates; the checkpoint was published to the governed branch with exact remote-head equality. No application source changed and no Product Freeze is claimed.
