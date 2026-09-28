---
{
  "record_type": "TASK_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "task_id": "V1-UI-UX-design-verification",
  "intent_baseline_ref": {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
  "capability_binding_ref": {"ref":"sha256:b1d72fc11359dbfcbb6a1344d3b12787336181ee14c5284b42fc65d3af5d2e2d","path":".markdown-machine/capabilities/capability-binding-software-product-r2.md"},
  "operation_contract_ref": {"ref":"sha256:893ace33928958c00140ad7fbb1f235897974529977e6d1f09e76d8d9bce90cd","path":".markdown-machine/authority/operation-contract-design-realization-v01024.md"},
  "purpose": "Perform exactly one bounded design-realization correction iteration to remediate the Product Freeze review findings and prepare exact renewed-review evidence.",
  "scope": [
    "Update the approved-mock registry and iPad candidate label.",
    "Align desktop and tablet primary navigation to Read, Search, Study, Notes, Library; align phone primary navigation to Read, Search, Study, Notes, More; keep Settings secondary and Compare inside Study.",
    "Add and live-verify required keyboard activation, Escape, focus restoration, and relevant accessibility behavior.",
    "Preserve the established visual system and all unrelated interactions; re-present any appearance-altered mocks for human approval; prepare exact evidence for renewed Product Freeze review."
  ],
  "prohibited_scope": [
    "No redesign, backend work, schema change, network integration, production implementation, architecture, release, unrelated mock changes, or Product Freeze acceptance.",
    "No work outside this one admitted correction iteration."
  ],
  "completion_conditions": [
    "The closed correction slice is implemented and live-verified against the exact current frozen context.",
    "Any appearance-altered mock is re-presented for human approval.",
    "Exact evidence is prepared for a renewed independent Product Freeze review."
  ],
  "convergence_root_ref": {"ref":"sha256:35747db3327ed8b0156cd734d98d7dbaf42e8f37dbd7b40be4a357b05838587d","path":".markdown-machine/authority/convergence-root-manna.md"},
  "lifecycle_node_id": "DESIGN_VERIFICATION",
  "project_context": [
    {"path":"docs/01-spec/manna-v1-product-contract.md","source_digest":"524b1e0c1453802faad43c5cdb037d51ef910c169d33dc053c69c2e90088921f"},
    {"path":"docs/01-spec/manna-v1-ui-ux-requirements.md","source_digest":"c1d3e261b1461bb51fb3ea66410858e321bc24f19160ffeabcd246804b9658df"},
    {"path":"docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md","source_digest":"909d806e4ad798def0a9e6081eba5ccbc570a3e8a2836f1ca5a577234fb2fb29"},
    {"path":"docs/01-spec/design-reference/manna-v1-desktop-interactive-mock.html","source_digest":"ccbf3bc7cf1eba409c76124621a46a55afef5ea5ffb97b34e9d797abbd04551b"},
    {"path":"docs/01-spec/design-reference/manna-v1-phone-interactive-mock.html","source_digest":"595f4ee6a827c70d377177a1fd5d2bca93783dccb29b89cf63eeedd7e828de02"},
    {"path":"docs/01-spec/design-reference/manna-v1-ipad-interactive-mock.html","source_digest":"3533ee38ff5fa4cf5e4e796202a7ad2984f5196de8d7351ba954c010de94070b"},
    {"path":"docs/01-spec/design-reference/APPROVED-MOCKS.md","source_digest":"3b642558fca72edff2ba9789211199bb50a85bc862bae3988ec9d7fda4332253"},
    {"path":".markdown-machine/reviews/review-result-v1-ui-ux-r4.md","source_digest":"8ce9e49c369cf277689e949ee0853a370e11485c479594b7ee71b2c45f46fd13"}
  ],
  "subtree_context": [],
  "exact_path_context": [],
  "compiled_under_authority_ref": {"ref":"sha256:7f6b63e83288f356821d5d7330116272cd3c6272dc04a0a7221065adad52b0c5","path":".markdown-machine/authority/authority-transition-product-freeze-corrections-extend.md"},
  "revision": 5
}
---
# V1 UI/UX correction iteration task revision 5

This revision authorizes only the admitted one-unit correction slice. It does
not accept Product Freeze or authorize unrelated product work.
