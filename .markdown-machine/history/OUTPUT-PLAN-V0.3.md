---
{
  "record_type": "PROJECT_OUTPUT_PLAN",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.4.0",
  "project_id": "manna",
  "status": "V1_UI_UX_INTERVIEW_MATERIALIZED",
  "distribution_digest": "b1c01eeaf4039feae1fbc135ef0fcaf481b48cb4d29a3f75b459c3dee6cba0f7"
}
---

# Manna v0.3.0 output plan

This plan is the inert pre-materialization boundary. It records the small project-owned output selected from the Markdown Machine v0.3.0 distribution; the distribution itself is not copied into this repository.

## Existing-project decision

Preserve the existing Manna application, product specifications, tests, CI, security material, documentation, and Git history. Reconcile the earlier SMPM-1 bootstrap by removing its generic active machine directories and retaining only the project history that explains that prior attempt. The active project capability baseline is Software / Product Development because Manna is an offline-first single-HTML Bible study application. Repository persistence is universal continuity, not an additional capability.

## Planned machine-owned output

| target_path | semantic_source | source_digest | inclusion_reason | capability_or_universal_role | transform | role |
| --- | --- | --- | --- | --- | --- | --- |
| `.markdown-machine/RUNTIME.md` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Compact lossless universal project governance runtime | universal runtime | verbatim-runtime-export | current |
| `.markdown-machine/capabilities/software-product.md` | `project-runtime/capabilities/software-product.md` | `9df586bcece12a000be14421579069ad9137d49385993f758f6f2b6484fec97e` | Runtime semantics for the active project capability | software-product | verbatim-runtime-export | current |
| `.markdown-machine/ORIGIN.md` | `project-compiler/06-ORIGIN-AND-REACQUISITION.md` | `02b4fa611361a44996128b3af5e626967f39b37804341c43070d1fddad2ab3e9` | Exact distribution/runtime pin and future reacquisition route | universal continuity | generated | current |
| `.markdown-machine/COMPILED-MANIFEST.md` | `project-compiler/COMPILED-PROJECT-MANIFEST-SPEC.md` | `edc78f73334f4ccb7096df865b9f1fe642b9aa86fd9eb03aae51cdf4f8a6fcad` | Trace every machine-owned output | universal continuity | generated | current |
| `.markdown-machine/REPOSITORY.md` | `project-compiler/07-REPOSITORY-BINDING-AND-CLOSEOUT.md` | `4e03acde6d4f22fef950df46604278ec50630b33c66441306b929dff65e409e0` | Bind canonical GitHub persistence and closeout policy | repository continuity | generated | current |
| `.markdown-machine/STATE.md` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Current recoverable project projection | universal continuity | generated | current |
| `.markdown-machine/HANDOFF.md` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Cold-resume navigation and next legal route | universal continuity | generated | current |
| `.markdown-machine/REPOSITORY-SYNC.md` | `project-compiler/07-REPOSITORY-BINDING-AND-CLOSEOUT.md` | `4e03acde6d4f22fef950df46604278ec50630b33c66441306b929dff65e409e0` | Exact remote currentness evidence | repository continuity | generated | current |
| `.markdown-machine/authority/*` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Genesis, authority, and convergence semantics | universal continuity | generated | current |
| `.markdown-machine/intent/*` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Immutable human intent and baseline | universal continuity | generated | current |
| `.markdown-machine/capabilities/BINDING.md` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Explicit selected capability binding | universal capability selection | generated | current |
| `.markdown-machine/lifecycle/*` | `project-runtime/capabilities/software-product.md` | `9df586bcece12a000be14421579069ad9137d49385993f758f6f2b6484fec97e` | Product lifecycle and bounded horizon | software-product | generated | current |
| `.markdown-machine/tasks/*` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Stable next objective and finite attempt boundary | universal continuity | generated | current |
| `.markdown-machine/inbox/*` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Candidate requests remain separated from authority | universal continuity | generated | current |
| `.markdown-machine/evidence/*` | `project-runtime/UNIVERSAL-RUNTIME.md` | `aa13cb5c05bf8a8a137ac85c602c45908c317836cb1367b8ff831d6274294a4f` | Verification and provenance projections | universal continuity | generated | current |
| `.markdown-machine/history/*` | prior project history | repository history | Preserve prior bootstrap chronology and failure classification | historical interpretation | generated | historical |

## Explicit exclusions

Do not copy `bootstrap/`, `machine-source/`, `project-compiler/`, `project-runtime/`, or `verification/` into the project. Do not activate unused capability runtimes, a generic record factory, or generic kernel source decomposition. Do not create a generic `*.template.md` record factory. Do not change the existing application implementation in this governance reconciliation.

## Initial reconciliation closeout (historical)

The initial v0.3.0 reconciliation used the non-default branch `codex/manna-governance-reconciliation`. That bounded transaction prohibited merge, force-push, deployment, release, or publication and required authoritative remote readback. The later Version 1 discovery transaction rebinds current closeout to `codex/manna-v1-product-discovery` in `REPOSITORY.md`.

## Version 1 product-discovery transaction

The human has reopened Manna as a new-product discovery effort while preserving repository answers as evidence. Before any further application implementation, this transaction will:

| target_path | semantic_source | inclusion_reason | transform | role |
| --- | --- | --- | --- | --- |
| `docs/01-spec/manna-v1-product-contract.md` | accepted human product interview | Canonical Version 1 product intent and semantic closure | generated | current |
| `.markdown-machine/intent/PRODUCT-CONTRACT-V1.md` | accepted human product interview | Bind current project intent to the canonical product contract | generated | current |
| `.markdown-machine/STATE.md` | universal runtime + accepted interview | Expose the new discovery frontier | specialized | current |
| `.markdown-machine/HANDOFF.md` | universal runtime + accepted interview | Resume at UI/UX interview without prior chat | specialized | current |
| `.markdown-machine/lifecycle/HORIZON.md` | software/product runtime + accepted interview | Stop implementation until UI/UX approval and Product Freeze | specialized | current |
| `.markdown-machine/COMPILED-MANIFEST.md` | manifest specification | Add traceability for the new machine-owned intent record | specialized | current |

No application source, build script, test, dependency, or release artifact is modified by this transaction.

## Version 1 UI/UX interview transaction

The human completed and approved the UI/UX requirements interview, then directed clean closeout so a new agent can perform design. This transaction adds or specializes:

| target_path | semantic_source | inclusion_reason | transform | role |
| --- | --- | --- | --- | --- |
| `docs/01-spec/manna-v1-ui-ux-requirements.md` | accepted human UI/UX interview | Canonical design requirements and approval gates | generated | current |
| `.markdown-machine/intent/UI-UX-INTERVIEW-V1.md` | accepted human UI/UX interview | Bind current intent to the canonical design requirements | generated | current |
| `.markdown-machine/tasks/V1-UI-UX-DESIGN.md` | accepted interview and human handoff direction | Exact next-agent design objective | generated | current |
| `.markdown-machine/STATE.md` | universal runtime + accepted interview | Expose design-pending frontier | specialized | current |
| `.markdown-machine/HANDOFF.md` | universal runtime + accepted interview | Cold-resume the new design agent without prior chat | specialized | current |
| `.markdown-machine/lifecycle/*` | software/product runtime + accepted interview | Advance lifecycle to Flows/UX while preserving Product Freeze | specialized | current |
| `.markdown-machine/REPOSITORY*.md` | repository closeout contract | Bind and verify the discovery branch | specialized | current |
| `.markdown-machine/COMPILED-MANIFEST.md` | manifest specification | Trace the new intent and task records | specialized | current |

No application source, build script, test, dependency, or release artifact is modified by this transaction.
