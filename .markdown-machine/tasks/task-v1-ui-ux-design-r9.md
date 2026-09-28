---
{
  "record_type": "TASK_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "task_id": "V1-UI-UX-design-verification",
  "intent_baseline_ref": {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
  "capability_binding_ref": {"ref":"sha256:b1d72fc11359dbfcbb6a1344d3b12787336181ee14c5284b42fc65d3af5d2e2d","path":".markdown-machine/capabilities/capability-binding-software-product-r2.md"},
  "operation_contract_ref": {"ref":"sha256:38eb6a0014ed8b0e2a9a0694560b58caa4e7d75ca34643a5fd5608d90180604e","path":".markdown-machine/authority/operation-contract-product-freeze-v01024.md"},
  "purpose": "Evaluate and admit the exact final V1 Product Freeze only after an applicable fresh independent PASS review and accepted result.",
  "scope": [
    "Freeze and independently review the exact V1 product contract, UI/UX requirements, flow, synchronized approved-mock registry, desktop, mobile, and iPad mocks, final human approval, and exact correction evidence named in project context.",
    "Determine whether the final exact bytes satisfy the frozen information architecture and whether the recorded human appearance authority applies to all three mock digests.",
    "Perform governance and review work only; the Product Freeze operation has no planned effects."
  ],
  "prohibited_scope": [
    "No architecture, implementation, redesign, release, external effects, product-artifact edits, backend work, schema change, network integration, or lifecycle publication.",
    "Do not infer an independent PASS, Product Freeze acceptance, or RESULT_ACCEPT from the human approval statement or self-check."
  ],
  "completion_conditions": [
    "One applicable independent review of the exact final frozen subjects returns PASS with both author_independence and subject_binding satisfied.",
    "The final exact desktop, phone, and iPad digests are bound by the approved-mock registry and applicable direct human approval.",
    "A separately admitted RESULT_ACCEPT transition accepts that exact PASS before lifecycle publication is considered."
  ],
  "convergence_root_ref": {"ref":"sha256:35747db3327ed8b0156cd734d98d7dbaf42e8f37dbd7b40be4a357b05838587d","path":".markdown-machine/authority/convergence-root-manna.md"},
  "lifecycle_node_id": "DESIGN_VERIFICATION",
  "project_context": [
    {"path":"docs/01-spec/manna-v1-product-contract.md","source_digest":"524b1e0c1453802faad43c5cdb037d51ef910c169d33dc053c69c2e90088921f"},
    {"path":"docs/01-spec/manna-v1-ui-ux-requirements.md","source_digest":"c1d3e261b1461bb51fb3ea66410858e321bc24f19160ffeabcd246804b9658df"},
    {"path":"docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md","source_digest":"6de9599488c5695ffb036600a8095c68f41669f38857b1a553a490fc1e592202"},
    {"path":"docs/01-spec/design-reference/manna-v1-desktop-interactive-mock.html","source_digest":"3b706a1b7248b1bf2ca5c74b3fcb932bb9bcb626fcc7eadfba963047c08437c3"},
    {"path":"docs/01-spec/design-reference/manna-v1-phone-interactive-mock.html","source_digest":"337c11b9b6188fa9f1eb9352636f4f43ffe5b3044e6c0609164ac49f877eb2d5"},
    {"path":"docs/01-spec/design-reference/manna-v1-ipad-interactive-mock.html","source_digest":"6d68dcfad83ee300fb187fcb53ae5664169c31cae54258e7d502a3916195a156"},
    {"path":"docs/01-spec/design-reference/APPROVED-MOCKS.md","source_digest":"85cc43ce0846bdf65007e6149a3d0b284a799a9deaf1c4d3ac4070f489876ecf"},
    {"path":".markdown-machine/intent/human-statement-final-mocks-approval.md","source_digest":"60a4cad8cb1841af9701199a8c1449c83cd60b50360978f74bfc0279b2a34e1a"},
    {"path":".markdown-machine/evidence/external-observation-phone-settings-label-mock.md","source_digest":"bde3b84920711383aba2a7b49a8a1e428d35554a89ff6b05060c97b5db8f2eb3"},
    {"path":".markdown-machine/evidence/external-observation-phone-settings-label-flow.md","source_digest":"2a439928fbdfd6f3499ba2498f83adf920b6b03c6d9942733229ad36a4bc5316"},
    {"path":".markdown-machine/evidence/external-observation-phone-settings-label-registry.md","source_digest":"580aee8670156fd6323234248892c3d4d5c1f000f631706731d07799e6206b89"},
    {"path":".markdown-machine/evidence/external-observation-product-freeze-navigation-ipad.md","source_digest":"dc2ce90dc2f3c8ced5cb53da2556c38fec5ba31d712f96efb328d0a77432fb78"}
  ],
  "subtree_context": [],
  "exact_path_context": [],
  "compiled_under_authority_ref": {"ref":"sha256:abec75230bd1cf5c5cc2aac0567624a31a94c6ccbff3be2d295bedbd44f7aca8","path":".markdown-machine/authority/authority-transition-task-v1-ui-ux-r8.md"},
  "revision": 9
}
---
# V1 final Product Freeze review task revision 9

This revision freezes the exact final approved artifacts for fresh independent
review. It creates no Product Freeze acceptance by itself.
