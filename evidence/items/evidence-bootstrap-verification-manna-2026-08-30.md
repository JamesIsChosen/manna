---
{
  "record_type": "EVIDENCE_ITEM",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "SMPM Bootstrap Verification Evidence",
  "project_id": "b02652666e7c616794244ab8f0f31638",
  "evidence_id": "EVID-MANNA-BOOTSTRAP-VERIFY",
  "checks": ["exact 00-BOOTSTRAP materialization", "SMF/1 front matter parse", "45 non-browser repository tests", "deterministic build/lint checks"],
  "results": {"non_browser_tests": "PASS 45/45", "machine_front_matter": "PASS", "native_browser_tests": "UNAVAILABLE"},
  "native_browser_limitation": "no Chromium-family executable on host; in-app browser policy blocks direct file:// navigation",
  "policy_bypass_attempted": false,
  "observed_date": "2026-08-30",
  "status": "PRESERVED"
}
---

This evidence records what was actually verified during SMPM bootstrap. Browser-dependent claims remain open until a permitted browser execution environment is available.
