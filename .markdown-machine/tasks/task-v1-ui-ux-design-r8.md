---
{
  "record_type": "TASK_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "task_id": "V1-UI-UX-design-verification",
  "intent_baseline_ref": {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
  "capability_binding_ref": {"ref":"sha256:b1d72fc11359dbfcbb6a1344d3b12787336181ee14c5284b42fc65d3af5d2e2d","path":".markdown-machine/capabilities/capability-binding-software-product-r2.md"},
  "operation_contract_ref": {"ref":"sha256:893ace33928958c00140ad7fbb1f235897974529977e6d1f09e76d8d9bce90cd","path":".markdown-machine/authority/operation-contract-design-realization-v01024.md"},
  "purpose": "Perform exactly one bounded follow-up so the phone application's existing Settings destination is labeled SETTINGS rather than MORE and the frozen phone-navigation wording remains internally consistent.",
  "scope": [
    "Remove only the phone runtime behavior that renames bottom-navigation SETTINGS to MORE; preserve the existing Settings destination, Read/Search/Study/Notes ordering, and all unrelated behavior and appearance.",
    "Align only exact phone bottom-navigation label statements in the frozen UI/UX requirements and low-fidelity flow from More to Settings where needed to reflect the direct human direction.",
    "Preserve the verified iPad aria-current correction and all unrelated desktop, phone, tablet, specification, registry, and governance content.",
    "Mechanically verify the exact label/order behavior, present the final changed phone bytes for human appearance approval, then synchronize the approved-mock registry and prepare fresh Product Freeze review."
  ],
  "prohibited_scope": [
    "No redesign, destination behavior change, new feature, desktop or iPad mock edit, backend work, schema change, network integration, production implementation, architecture, release, unrelated specification change, or Product Freeze acceptance.",
    "Do not infer final human appearance approval from the correction direction itself."
  ],
  "completion_conditions": [
    "Every in-app phone bottom navigation renders SETTINGS as its fifth label while preserving Read, Search, Study, Notes order and the existing Settings destination.",
    "The exact frozen phone-navigation wording is consistent with that human-directed label and all unrelated bytes are preserved.",
    "The final phone bytes are presented for fresh human appearance approval and exact evidence is prepared for renewed Product Freeze review."
  ],
  "convergence_root_ref": {"ref":"sha256:35747db3327ed8b0156cd734d98d7dbaf42e8f37dbd7b40be4a357b05838587d","path":".markdown-machine/authority/convergence-root-manna.md"},
  "lifecycle_node_id": "DESIGN_VERIFICATION",
  "project_context": [
    {"path":"docs/01-spec/manna-v1-ui-ux-requirements.md","source_digest":"c1d3e261b1461bb51fb3ea66410858e321bc24f19160ffeabcd246804b9658df"},
    {"path":"docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md","source_digest":"909d806e4ad798def0a9e6081eba5ccbc570a3e8a2836f1ca5a577234fb2fb29"},
    {"path":"docs/01-spec/design-reference/manna-v1-phone-interactive-mock.html","source_digest":"ac73ab53c2a1a67fe0776d5e91033a1c7f870e4d1e63676cc354fad9f3cc2ca3"},
    {"path":"docs/01-spec/design-reference/manna-v1-ipad-interactive-mock.html","source_digest":"6d68dcfad83ee300fb187fcb53ae5664169c31cae54258e7d502a3916195a156"},
    {"path":"docs/01-spec/design-reference/APPROVED-MOCKS.md","source_digest":"c57b4c65c24faa6d71d4fb2e165f8c3e52dbb6ee4e651d4f4b1474e104be7d7d"},
    {"path":".markdown-machine/reviews/review-result-v1-ui-ux-r7.md","source_digest":"a65fd36f89775547331dc1e42f5253939cc39ae9fcf6576b67a5dfc9fd21530a"}
  ],
  "subtree_context": [],
  "exact_path_context": [],
  "compiled_under_authority_ref": {"ref":"sha256:267343dec12666a58ee59cccc9b702902740f1db358d79114fd4c3c937843aaf","path":".markdown-machine/authority/authority-transition-phone-settings-label-extend.md"},
  "revision": 8
}
---
# V1 UI/UX phone Settings-label task revision 8

This revision authorizes only the admitted one-unit phone label and exact
frozen-wording consistency correction, verification, human presentation, and
renewed Product Freeze review preparation.
