---
{
  "record_type": "TASK_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "task_id": "V1-UI-UX-design-verification",
  "intent_baseline_ref": {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
  "capability_binding_ref": {"ref":"sha256:b1d72fc11359dbfcbb6a1344d3b12787336181ee14c5284b42fc65d3af5d2e2d","path":".markdown-machine/capabilities/capability-binding-software-product-r2.md"},
  "operation_contract_ref": {"ref":"sha256:893ace33928958c00140ad7fbb1f235897974529977e6d1f09e76d8d9bce90cd","path":".markdown-machine/authority/operation-contract-design-realization-v01024.md"},
  "purpose": "Durably preserve the human-approved V1 desktop and mobile mocks, then realize the next interactive iPad mock for human appearance review before Product Freeze.",
  "scope": [
    "Persist the recovered approved desktop mock with SHA-256 ccbf3bc7cf1eba409c76124621a46a55afef5ea5ffb97b34e9d797abbd04551b and the approved mobile mock with SHA-256 595f4ee6a827c70d377177a1fd5d2bca93783dccb29b89cf63eeedd7e828de02 as repository design references.",
    "Create an interactive iPad mock that preserves the approved Manna visual system, scripture fidelity, study-pane behavior, notes/highlights continuity, and responsive product requirements.",
    "Use live browser verification to produce a reviewable tablet design surface and bounded verification findings."
  ],
  "prohibited_scope": [
    "No production implementation, backend work, schema change, network integration, release, or Product Freeze admission.",
    "Do not alter the approved desktop or mobile mock bytes while preserving them.",
    "Do not treat the iPad candidate as approved until the human explicitly approves it."
  ],
  "completion_conditions": [
    "Approved desktop and mobile mocks are durably stored in the repository with their verified digests.",
    "The interactive iPad mock renders without console errors and its core navigation and study interactions are verified.",
    "The iPad mock is presented to the human for appearance review."
  ],
  "convergence_root_ref": {"ref":"sha256:35747db3327ed8b0156cd734d98d7dbaf42e8f37dbd7b40be4a357b05838587d","path":".markdown-machine/authority/convergence-root-manna.md"},
  "lifecycle_node_id": "DESIGN_VERIFICATION",
  "project_context": [
    {"path":"docs/01-spec/product-specification.md","source_digest":"ac45071a5e6959e05df502fb2c65e36ffe907c953dc0bfe61e81d0f6335f94fa"},
    {"path":"docs/01-spec/engineering-specification.md","source_digest":"03b9db70ea3a394201b0cf56e161bca639fe1c9e7bde08353fca44d86bd5cbe4"},
    {"path":"docs/01-spec/design-reference/manna-v1-phone-interactive-mock.html","source_digest":"595f4ee6a827c70d377177a1fd5d2bca93783dccb29b89cf63eeedd7e828de02"},
    {"path":".markdown-machine/history/2162e3e9e0f4d11c80d553f6bea54207fdaa46116ceff42f9cd5a549c7608a15/tasks/V1-UI-UX-DESIGN.md","source_digest":"73ec8ceb0a6ed2c0d1f5babab942a123ec7673be1302b59390d94ab24ff60e57"}
  ],
  "subtree_context": [],
  "exact_path_context": [],
  "compiled_under_authority_ref": {"ref":"sha256:677d3059ac1af43b20daf9f06712c781f93afbba891dfcfb894d4296b7c3d314","path":".markdown-machine/authority/authority-transition-ipad-horizon-raise.md"},
  "revision": 3
}
---
# V1 UI/UX design verification task revision 3

Status: OPEN. This revision authorizes the narrow design-realization exception
for durable approved-mock preservation and the next iPad mock. It does not
advance Product Freeze or authorize production implementation.
