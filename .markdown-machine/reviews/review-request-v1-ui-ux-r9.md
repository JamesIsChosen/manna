---
{
  "record_type": "REVIEW_REQUEST",
  "schema_version": 1,
  "project_id": "manna",
  "review_request_id": "manna-v1-product-freeze-r9-independent-review",
  "review_purpose": "TASK_EXECUTION_REVIEW",
  "subjects": [
    {"path":"docs/01-spec/manna-v1-product-contract.md","source_digest":"524b1e0c1453802faad43c5cdb037d51ef910c169d33dc053c69c2e90088921f"},
    {"path":"docs/01-spec/manna-v1-ui-ux-requirements.md","source_digest":"c1d3e261b1461bb51fb3ea66410858e321bc24f19160ffeabcd246804b9658df"},
    {"path":"docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md","source_digest":"6de9599488c5695ffb036600a8095c68f41669f38857b1a553a490fc1e592202"},
    {"path":"docs/01-spec/design-reference/manna-v1-desktop-interactive-mock.html","source_digest":"3b706a1b7248b1bf2ca5c74b3fcb932bb9bcb626fcc7eadfba963047c08437c3"},
    {"path":"docs/01-spec/design-reference/manna-v1-phone-interactive-mock.html","source_digest":"337c11b9b6188fa9f1eb9352636f4f43ffe5b3044e6c0609164ac49f877eb2d5"},
    {"path":"docs/01-spec/design-reference/manna-v1-ipad-interactive-mock.html","source_digest":"6d68dcfad83ee300fb187fcb53ae5664169c31cae54258e7d502a3916195a156"},
    {"path":"docs/01-spec/design-reference/APPROVED-MOCKS.md","source_digest":"85cc43ce0846bdf65007e6149a3d0b284a799a9deaf1c4d3ac4070f489876ecf"},
    {"path":".markdown-machine/intent/human-statement-final-mocks-approval.md","source_digest":"60a4cad8cb1841af9701199a8c1449c83cd60b50360978f74bfc0279b2a34e1a"}
  ],
  "subject_record_refs": [
    {"ref":"sha256:4bf96c7cb35d9b4362ff7854c350ef5b391a42242bde745cf0b9ba91b0f5a75a","path":".markdown-machine/tasks/task-v1-ui-ux-design-r9.md"},
    {"ref":"sha256:38eb6a0014ed8b0e2a9a0694560b58caa4e7d75ca34643a5fd5608d90180604e","path":".markdown-machine/authority/operation-contract-product-freeze-v01024.md"},
    {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
    {"ref":"sha256:02b9e0c400d1bdaba9c962fe9d4497d2052bd53d8155d0f8b005bde558775981","path":".markdown-machine/lifecycle/lifecycle-graph-manna-r2.md"}
  ],
  "required_independence_dimensions": ["author_independence","subject_binding"],
  "required_evidence_refs": [
    {"ref":"sha256:bde3b84920711383aba2a7b49a8a1e428d35554a89ff6b05060c97b5db8f2eb3","path":".markdown-machine/evidence/external-observation-phone-settings-label-mock.md"},
    {"ref":"sha256:2a439928fbdfd6f3499ba2498f83adf920b6b03c6d9942733229ad36a4bc5316","path":".markdown-machine/evidence/external-observation-phone-settings-label-flow.md"},
    {"ref":"sha256:580aee8670156fd6323234248892c3d4d5c1f000f631706731d07799e6206b89","path":".markdown-machine/evidence/external-observation-phone-settings-label-registry.md"},
    {"ref":"sha256:dc2ce90dc2f3c8ced5cb53da2556c38fec5ba31d712f96efb328d0a77432fb78","path":".markdown-machine/evidence/external-observation-product-freeze-navigation-ipad.md"}
  ],
  "revision": 1
}
---
# V1 final Product Freeze independent review request

This request freezes the exact final subject after the Settings-label correction,
direct human approval, and approved-mock registry synchronization. It requires
a fresh independent judgment and cannot reuse an earlier result as a PASS.
