---
{
  "record_type": "PROJECT_OUTPUT_PLAN",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.4.0",
  "project_id": "manna",
  "status": "V0_4_GOVERNANCE_MIGRATION_MATERIALIZED",
  "source_identity": "https://github.com/JamesIsChosen/markdown-machine",
  "source_tag": "v0.4.0",
  "source_commit": "48a1ec344851238366c708d75eb82fb9554cf125",
  "source_tree": "9d92212201333c47598282e4f3865f04e050f07b",
  "content_set_digest": "c3a0cd8bc889c75a7d5d9cd131c14fb84c9b3ebe87b9f0476f9e69d41636d65b"
}
---

# Manna v0.4.0 governance migration output plan

This is the bounded project-local materialization plan for upgrading Manna’s
Markdown Machine mechanics. Existing application source, product docs, assets,
configuration, accepted requirements, architecture, tests, identity, and Git
history are preserved. The prior v0.3.0 plan is retained in
`history/OUTPUT-PLAN-V0.3.md`.

## Exact universal and contract exports

| project path | exact Markdown Machine source | source digest |
| --- | --- | --- |
| `.markdown-machine/RUNTIME.md` | `project-runtime/UNIVERSAL-RUNTIME.md` | `a0b807cff0a2dd6db7b239e294fe5cc9be31e487f02bf03735c990882210b770` |
| `.markdown-machine/contracts/GENESIS-ADMISSION-PROFILE.md` | `bootstrap/02-GENESIS-ADMISSION-PROFILE.md` | `2eb22d1c58b582133228dd994d2b3f7ee301806f9d1e984beab368001428c5f0` |
| `.markdown-machine/contracts/SMF1-PROFILE.md` | `project-runtime/SMF1-PROFILE.md` | `e3bfce8930a819758c298f9fc21ec6008a1030ddbab3a23cf3390fa26ca38802` |
| `.markdown-machine/contracts/SCHEMA-EVALUATION-PROFILE.md` | `project-runtime/SCHEMA-EVALUATION-PROFILE.md` | `a8fb4c042dbd4f06b517d1b3d09267fd35024b5b51505a74355e05df2dd423fd` |
| `.markdown-machine/contracts/AUTHORITY-CURRENTNESS-EVALUATION-PROFILE.md` | `project-runtime/AUTHORITY-CURRENTNESS-EVALUATION-PROFILE.md` | `f3e25a494306ed84d9f3775eeca59bc64ff00777dfb7585d59f5375ee5fa3311` |
| `.markdown-machine/contracts/CONTRACT-EVALUATION-PROFILE.md` | `project-runtime/CONTRACT-EVALUATION-PROFILE.md` | `364afc0734ee27055b55bc2830ddc2b81fb871c1b078af99ac6465692421fb5f` |
| `.markdown-machine/contracts/TRANSITION-EVALUATION-PROFILE.md` | `project-runtime/TRANSITION-EVALUATION-PROFILE.md` | `25b133746a8321f01646d0659fc4681715d4006a2b79d05bc5fd98bf0117f4c8` |
| `.markdown-machine/contracts/GOVERNING-RECORD-CONTRACTS.md` | `project-runtime/GOVERNING-RECORD-CONTRACTS.md` | `c5ef15ea26ad226ecfcf1a3cb76fa15519f7627d6923ca7848b6895b2ecfa7db` |
| `.markdown-machine/contracts/RECOVERY-CRITICAL-RECORD-CONTRACTS.md` | `project-runtime/RECOVERY-CRITICAL-RECORD-CONTRACTS.md` | `a1d9f0ce676e844c9552b0b68485e5346252739c0251ba617ea280bf47ef3156` |
| `.markdown-machine/contracts/RECOVERY-STATE-EVALUATION-PROFILE.md` | `project-runtime/RECOVERY-STATE-EVALUATION-PROFILE.md` | `d22093d6ee87f4837fd48c7c065f96afdb331c8d4af866b85243608b59f16144` |
| `.markdown-machine/contracts/TRANSITION-ADMISSION-CONTRACT.md` | `project-runtime/TRANSITION-ADMISSION-CONTRACT.md` | `eea1a685af2f34f204be30afe91e886c32603c244f8a0dcb08235ea7fdbda218` |
| `.markdown-machine/contracts/OPERATION-FLOOR-VOCABULARY.md` | `project-runtime/OPERATION-FLOOR-VOCABULARY.md` | `e6e3dbad0070df5487d326d5877cb27cce0c2ed5818ce72cc1b1e0b4d05164bc` |
| `.markdown-machine/contracts/HUMAN-CONTROL-PROFILE.md` | `project-runtime/HUMAN-CONTROL-PROFILE.md` | `d0eb812f4194f1f497feb769c91f78b8dffe127248f3f629b008a6b23094e9dd` |

## Selected capability

Only `software-product` is compiled. Its exact source is
`project-runtime/capabilities/software-product.md` with digest
`057731549337dc15474c9eb84df71c1e8bf3274aa2aade1e6bd4d3948c37748f`.

## Project-local generated mechanics

The migration adds the v0.4.0 origin and kernel manifest, explicit kernel and
capability migration transitions, migration approvals, publication plans,
convergence policy, repository sync intent, and current v0.4.0 projections.
Only the selected capability binding and one discovery operation contract are
active. No generic distribution roots, templates, source tree, unused
capability, factory, application source, or release artifact is included.
