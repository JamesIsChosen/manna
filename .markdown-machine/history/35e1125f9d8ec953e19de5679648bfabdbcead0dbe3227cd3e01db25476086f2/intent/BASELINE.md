---
{
  "record_type": "INTENT_BASELINE",
  "schema_version": 1,
  "project_id": "manna",
  "compiled_under_authority_ref": "sha256:b1e4808cf8aa4d0063ec50610f34dbe98aa2e733c96bb31e3ed32a9ff4d0ef01",
  "human_statement_refs": [
    "sha256:26377103c638dd7f7fb344e0fba2ad1d1b1d76f1f7c0544505d9b6fe856d2cb8"
  ],
  "intent_item_ids": [
    "manna-existing-product-contract",
    "manna-v1-ui-ux-requirements"
  ],
  "accepted_intent_items": [
    "Preserve the existing Manna product, requirements, architecture, implementation, tests, assets, configuration, identity, and history while changing only project-local governance mechanics.",
    "Deliver Version 1 as an offline-first Bible study workstation with the accepted product and UI/UX requirements preserved as project content."
  ],
  "authorized_capability_ids": [
    "software-product"
  ],
  "constraints": [
    "single release file",
    "offline-first and no runtime network",
    "Scripture integrity",
    "safe untrusted module imports",
    "mobile parity",
    "deterministic build"
  ],
  "non_goals": [
    "application implementation before Product Freeze",
    "product redesign during governance migration",
    "distribution copy",
    "history rewrite",
    "merge or release"
  ],
  "run_horizon_ref": "sha256:18a53b295d950f05f564cad883e0257288446ee50cc947c7b2d8577ba6843914"
}
---
# Manna accepted intent baseline

This v0.5 baseline preserves the accepted Manna product and Version 1 requirements. The canonical product and UI/UX documents remain in `docs/01-spec/`; this record only supplies the typed current governance binding.
