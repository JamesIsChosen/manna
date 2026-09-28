---
{
  "record_type": "TASK_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "task_id": "V1-UI-UX-design-verification",
  "intent_baseline_ref": {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
  "capability_binding_ref": {"ref":"sha256:b1d72fc11359dbfcbb6a1344d3b12787336181ee14c5284b42fc65d3af5d2e2d","path":".markdown-machine/capabilities/capability-binding-software-product-r2.md"},
  "operation_contract_ref": {"ref":"sha256:38eb6a0014ed8b0e2a9a0694560b58caa4e7d75ca34643a5fd5608d90180604e","path":".markdown-machine/authority/operation-contract-product-freeze-v01024.md"},
  "purpose": "Evaluate and admit the exact reconciled V1 Product Freeze only after an applicable fresh independent PASS review and accepted result.",
  "scope": [
    "Freeze and independently review the exact V1 product contract, reconciled UI/UX requirements and flow, synchronized approved-mock registry, desktop, mobile, and iPad mocks, final human approval, and exact reconciliation evidence named in project context.",
    "Determine whether the platform-specific phone Settings navigation exception is internally consistent while preserving Library as a core destination and larger-screen primary destination.",
    "Perform governance and review work only; the Product Freeze operation has no planned effects."
  ],
  "prohibited_scope": [
    "No architecture, implementation, redesign, release, external effects, product-artifact edits, backend work, schema change, network integration, or lifecycle publication.",
    "Do not infer an independent PASS, Product Freeze acceptance, or RESULT_ACCEPT from human approval or the r10 self-check."
  ],
  "completion_conditions": [
    "One applicable independent review of the exact reconciled frozen subjects returns PASS with both author_independence and subject_binding satisfied.",
    "The final exact desktop, phone, and iPad digests remain bound by the approved-mock registry and applicable direct human approval.",
    "A separately admitted RESULT_ACCEPT transition accepts that exact PASS before lifecycle publication is considered."
  ],
  "convergence_root_ref": {"ref":"sha256:35747db3327ed8b0156cd734d98d7dbaf42e8f37dbd7b40be4a357b05838587d","path":".markdown-machine/authority/convergence-root-manna.md"},
  "lifecycle_node_id": "DESIGN_VERIFICATION",
  "project_context": [
    {"path":"docs/01-spec/manna-v1-product-contract.md","source_digest":"524b1e0c1453802faad43c5cdb037d51ef910c169d33dc053c69c2e90088921f"},
    {"path":"docs/01-spec/manna-v1-ui-ux-requirements.md","source_digest":"5bed8619f0c76c1d74ec42413321894a3101673a32e78a7f7f49bcf67d471dd9"},
    {"path":"docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md","source_digest":"285e601cf823b8b4530ec42fe2fdc5d06728de860242429ef39208cb9511df25"},
    {"path":"docs/01-spec/design-reference/manna-v1-desktop-interactive-mock.html","source_digest":"3b706a1b7248b1bf2ca5c74b3fcb932bb9bcb626fcc7eadfba963047c08437c3"},
    {"path":"docs/01-spec/design-reference/manna-v1-phone-interactive-mock.html","source_digest":"337c11b9b6188fa9f1eb9352636f4f43ffe5b3044e6c0609164ac49f877eb2d5"},
    {"path":"docs/01-spec/design-reference/manna-v1-ipad-interactive-mock.html","source_digest":"6d68dcfad83ee300fb187fcb53ae5664169c31cae54258e7d502a3916195a156"},
    {"path":"docs/01-spec/design-reference/APPROVED-MOCKS.md","source_digest":"85cc43ce0846bdf65007e6149a3d0b284a799a9deaf1c4d3ac4070f489876ecf"},
    {"path":".markdown-machine/intent/human-statement-final-mocks-approval.md","source_digest":"60a4cad8cb1841af9701199a8c1449c83cd60b50360978f74bfc0279b2a34e1a"},
    {"path":".markdown-machine/evidence/external-observation-phone-settings-ia-requirements.md","source_digest":"f82fa4d61b92fdbdbb1503c5cbeb64bda78cf4d45cf9130c0d3a1de7aa0a7088"},
    {"path":".markdown-machine/evidence/external-observation-phone-settings-ia-flow.md","source_digest":"9cbe4fea5db6cc3874237fab395624a2b58b7f379d3f1510a23ee0525983d079"},
    {"path":".markdown-machine/evidence/external-observation-phone-settings-ia-preservation.md","source_digest":"d0382647a67a1be4b9e8e3bb8ec4c57394e53c9bc489a4bf31d2e16ba0b9534f"}
  ],
  "subtree_context": [],
  "exact_path_context": [],
  "compiled_under_authority_ref": {"ref":"sha256:b67f809120889eadebb024c9c9b1a683ca8158c2bc78485cccdfcc26fc66f31b","path":".markdown-machine/authority/authority-transition-task-v1-ui-ux-r10.md"},
  "revision": 11
}
---
# V1 reconciled Product Freeze review task revision 11

This revision freezes the exact reconciled specifications and unchanged
approved artifacts for fresh independent review. It creates no acceptance itself.
