---
{
  "record_type": "COMPILED_PROJECT_MANIFEST",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.3.0",
  "project_id": "manna",
  "distribution_digest": "b1c01eeaf4039feae1fbc135ef0fcaf481b48cb4d29a3f75b459c3dee6cba0f7",
  "manifest_status": "MATERIALIZED"
}
---

# Manna compiled project manifest

Every machine-owned artifact in `.markdown-machine/` is listed below. The manifest is project-local and does not recursively include the Markdown Machine distribution. Its own inclusion basis is the v0.3.0 manifest specification and the pre-materialization output plan.

| project_artifact | semantic_source | source_digest | inclusion_reason | capability_or_universal_role | transform | governance_role |
| --- | --- | --- | --- | --- | --- | --- |
| `.markdown-machine/OUTPUT-PLAN.md` | `project-compiler/05-OUTPUT-PLAN-AND-PUBLICATION.md` | `57146175e1c3ac4b1e7ec62c7acc04c11bc923aed169d800511f912ca42f4eed` | Inert plan before machine-owned writes | universal compilation | generated | current |
| `.markdown-machine/RUNTIME.md` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Compact lossless universal semantics | universal runtime | verbatim-runtime-export | current |
| `.markdown-machine/capabilities/software-product.md` | `project-runtime/capabilities/software-product.md` | `9df586bcece12a000be14421579069ad9137d49385993f758f6f2b6484fec97e` | Active product capability semantics | software-product | verbatim-runtime-export | current |
| `.markdown-machine/ORIGIN.md` | `project-compiler/06-ORIGIN-AND-REACQUISITION.md` | `02b4fa611361a44996128b3af5e626967f39b37804341c43070d1fddad2ab3e9` | Pin origin and future reacquisition | universal continuity | generated | current |
| `.markdown-machine/COMPILED-MANIFEST.md` | `project-compiler/COMPILED-PROJECT-MANIFEST-SPEC.md` | `edc78f73334f4ccb7096df865b9f1fe642b9aa86fd9eb03aae51cdf4f8a6fcad` | Trace every project artifact | universal compilation | generated | current |
| `.markdown-machine/REPOSITORY.md` | `project-compiler/07-REPOSITORY-BINDING-AND-CLOSEOUT.md` | `4e03acde6d4f22fef950df46604278ec50630b33c66441306b929dff65e409e0` | Canonical repository continuity binding | universal continuity | generated | current |
| `.markdown-machine/REPOSITORY-SYNC.md` | `project-compiler/07-REPOSITORY-BINDING-AND-CLOSEOUT.md` | `4e03acde6d4f22fef950df46604278ec50630b33c66441306b929dff65e409e0` | Remote currentness projection | universal continuity | generated | current |
| `.markdown-machine/STATE.md` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Current project projection | universal continuity | generated | current |
| `.markdown-machine/HANDOFF.md` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Cold-resume route | universal continuity | generated | current |
| `.markdown-machine/authority/PROJECT-GENESIS.md` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Genesis admission | universal authority | generated | current |
| `.markdown-machine/authority/AUTHORITY.md` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Current authority projection | universal authority | generated | current |
| `.markdown-machine/authority/CONVERGENCE.md` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Bounded reconciliation capacity | universal convergence | generated | current |
| `.markdown-machine/intent/HUMAN-STATEMENT.md` | supplied human reconciliation request | `43b81579e2d621ebc7e0908108d7bcdc0743939a3c323be045110cda18729182` | Immutable intent provenance | universal intent | generated | current |
| `.markdown-machine/intent/BASELINE.md` | existing `README.md` and product specification | existing project baseline | Preserve current product intent | software-product | generated | current |
| `.markdown-machine/intent/PRODUCT-CONTRACT-V1.md` | accepted human Version 1 product interview | current-thread human authority | Bind the semantically closed Version 1 contract and UI/UX frontier | software-product | generated | current |
| `.markdown-machine/intent/UI-UX-INTERVIEW-V1.md` | accepted human Version 1 UI/UX interview | current-thread human authority | Bind the semantically closed design requirements and next approval gates | software-product | generated | current |
| `.markdown-machine/capabilities/BINDING.md` | `project-compiler/02-CAPABILITY-SELECTION.md` | `0b7d63803e7fcc44029f84a725f7a00c229aac8a5f3eff15d63b5c5909965045` | Record explicit active capability selection | universal capability selection | generated | current |
| `.markdown-machine/lifecycle/GRAPH.md` | `project-runtime/capabilities/software-product.md` | `9df586bcece12a000be14421579069ad9137d49385993f758f6f2b6484fec97e` | Product lifecycle frontier | software-product | generated | current |
| `.markdown-machine/lifecycle/HORIZON.md` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Bounded run horizon | universal lifecycle | generated | current |
| `.markdown-machine/tasks/P0.2-OFFLINE-SECURITY.md` | existing Manna roadmap and P0.1 packet | existing project baseline | Preserve next objective | software-product | generated | current |
| `.markdown-machine/tasks/V1-UI-UX-DESIGN.md` | accepted Version 1 contract and UI/UX interview | current-thread human authority | Exact next-agent design and verification objective | software-product | generated | current |
| `.markdown-machine/inbox/RECONCILIATION.md` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Route reconciliation request | universal change control | generated | current |
| `.markdown-machine/evidence/RECONCILIATION-VERIFICATION.md` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Verification ledger | universal evidence | generated | current |
| `.markdown-machine/evidence/CLOSEOUT-REPORT.md` | `project-compiler/05-OUTPUT-PLAN-AND-PUBLICATION.md` | `57146175e1c3ac4b1e7ec62c7acc04c11bc923aed169d800511f912ca42f4eed` | Final reconciliation and closeout report | universal evidence | generated | current |
| `.markdown-machine/history/SMPM-1-BOOTSTRAP.md` | Git commit `12a9d33c4827c82f87ab79bd1858da958a6e824d` | `12a9d33c4827c82f87ab79bd1858da958a6e824d` | Preserve superseded bootstrap chronology | historical interpretation | generated | historical |
