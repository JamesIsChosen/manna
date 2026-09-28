---
{
  "record_type": "TASK_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "task_id": "V1-UI-UX-design-verification",
  "intent_baseline_ref": {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
  "capability_binding_ref": {"ref":"sha256:b1d72fc11359dbfcbb6a1344d3b12787336181ee14c5284b42fc65d3af5d2e2d","path":".markdown-machine/capabilities/capability-binding-software-product-r2.md"},
  "operation_contract_ref": {"ref":"sha256:893ace33928958c00140ad7fbb1f235897974529977e6d1f09e76d8d9bce90cd","path":".markdown-machine/authority/operation-contract-design-realization-v01024.md"},
  "purpose": "Preserve the directly approved phone Settings tab and reconcile the exact requirements and low-fidelity-flow language with that phone-specific information-architecture exception.",
  "scope": [
    "In the UI/UX requirements, distinguish the five core product destinations from their platform-specific navigation exposure: larger screens retain Library as a primary destination and Settings as secondary, while phones use Read, Search, Study, Notes, and Settings in compact bottom navigation with Library management reached through Settings.",
    "In the low-fidelity flow, reconcile the platform-navigation table and Settings flow so the phone-specific Settings destination is explicit and no statement says it never replaces a primary phone destination.",
    "Preserve the exact approved desktop, phone, and iPad mock bytes, approved-mock registry, all behavior, and all unrelated specification content; verify the two documents are internally consistent and prepare fresh Product Freeze review."
  ],
  "prohibited_scope": [
    "No mock edit, redesign, destination behavior change, new feature, backend work, schema change, network integration, production implementation, architecture, release, unrelated specification change, or Product Freeze acceptance.",
    "Do not remove Library as a core product destination or make Settings a primary destination on larger screens."
  ],
  "completion_conditions": [
    "Requirements and flow consistently specify the approved phone bottom navigation as Read, Search, Study, Notes, Settings and Library management as reachable through Settings on phones.",
    "Larger-screen navigation and the five core product destinations remain preserved, and the three approved mock hashes and registry bytes remain unchanged.",
    "Exact evidence and a self-check are recorded for renewed independent Product Freeze review."
  ],
  "convergence_root_ref": {"ref":"sha256:35747db3327ed8b0156cd734d98d7dbaf42e8f37dbd7b40be4a357b05838587d","path":".markdown-machine/authority/convergence-root-manna.md"},
  "lifecycle_node_id": "DESIGN_VERIFICATION",
  "project_context": [
    {"path":"docs/01-spec/manna-v1-ui-ux-requirements.md","source_digest":"c1d3e261b1461bb51fb3ea66410858e321bc24f19160ffeabcd246804b9658df"},
    {"path":"docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md","source_digest":"6de9599488c5695ffb036600a8095c68f41669f38857b1a553a490fc1e592202"},
    {"path":"docs/01-spec/design-reference/manna-v1-phone-interactive-mock.html","source_digest":"337c11b9b6188fa9f1eb9352636f4f43ffe5b3044e6c0609164ac49f877eb2d5"},
    {"path":"docs/01-spec/design-reference/manna-v1-desktop-interactive-mock.html","source_digest":"3b706a1b7248b1bf2ca5c74b3fcb932bb9bcb626fcc7eadfba963047c08437c3"},
    {"path":"docs/01-spec/design-reference/manna-v1-ipad-interactive-mock.html","source_digest":"6d68dcfad83ee300fb187fcb53ae5664169c31cae54258e7d502a3916195a156"},
    {"path":"docs/01-spec/design-reference/APPROVED-MOCKS.md","source_digest":"85cc43ce0846bdf65007e6149a3d0b284a799a9deaf1c4d3ac4070f489876ecf"},
    {"path":".markdown-machine/reviews/review-result-v1-ui-ux-r9.md","source_digest":"1ad5a7645cb0974ec6f92d2196a9f4c08cc1af7ab991512263af2444a7611cd8"},
    {"path":".markdown-machine/intent/human-statement-phone-settings-ia-proceed.md","source_digest":"5eef4085be42bee1e5cb4813ec9b14c381991ef2caa639821d90924c01f87894"}
  ],
  "subtree_context": [],
  "exact_path_context": [],
  "compiled_under_authority_ref": {"ref":"sha256:155aec895656ba5823523c960bab473e1e172f5e7e95787c4087223a22b18ad9","path":".markdown-machine/authority/authority-transition-phone-settings-ia-extend.md"},
  "revision": 10
}
---
# V1 UI/UX phone Settings information-architecture task revision 10

This revision authorizes only the admitted one-unit requirements/flow
reconciliation, exact preservation checks, and renewed Product Freeze review.
