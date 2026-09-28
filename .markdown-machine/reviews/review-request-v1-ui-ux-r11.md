---
{
  "record_type": "REVIEW_REQUEST",
  "schema_version": 1,
  "project_id": "manna",
  "review_request_id": "manna-v1-product-freeze-r11-independent-review",
  "review_purpose": "TASK_EXECUTION_REVIEW",
  "subjects": [
    {"path":"docs/01-spec/manna-v1-product-contract.md","source_digest":"524b1e0c1453802faad43c5cdb037d51ef910c169d33dc053c69c2e90088921f"},
    {"path":"docs/01-spec/manna-v1-ui-ux-requirements.md","source_digest":"5bed8619f0c76c1d74ec42413321894a3101673a32e78a7f7f49bcf67d471dd9"},
    {"path":"docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md","source_digest":"285e601cf823b8b4530ec42fe2fdc5d06728de860242429ef39208cb9511df25"},
    {"path":"docs/01-spec/design-reference/manna-v1-desktop-interactive-mock.html","source_digest":"3b706a1b7248b1bf2ca5c74b3fcb932bb9bcb626fcc7eadfba963047c08437c3"},
    {"path":"docs/01-spec/design-reference/manna-v1-phone-interactive-mock.html","source_digest":"337c11b9b6188fa9f1eb9352636f4f43ffe5b3044e6c0609164ac49f877eb2d5"},
    {"path":"docs/01-spec/design-reference/manna-v1-ipad-interactive-mock.html","source_digest":"6d68dcfad83ee300fb187fcb53ae5664169c31cae54258e7d502a3916195a156"},
    {"path":"docs/01-spec/design-reference/APPROVED-MOCKS.md","source_digest":"85cc43ce0846bdf65007e6149a3d0b284a799a9deaf1c4d3ac4070f489876ecf"},
    {"path":".markdown-machine/intent/human-statement-final-mocks-approval.md","source_digest":"60a4cad8cb1841af9701199a8c1449c83cd60b50360978f74bfc0279b2a34e1a"}
  ],
  "subject_record_refs": [
    {"ref":"sha256:311aaaa75d1654e95252dc0b8099be9fcbe5d2b7fa0919af634ac1377b0333b3","path":".markdown-machine/tasks/task-v1-ui-ux-design-r11.md"},
    {"ref":"sha256:38eb6a0014ed8b0e2a9a0694560b58caa4e7d75ca34643a5fd5608d90180604e","path":".markdown-machine/authority/operation-contract-product-freeze-v01024.md"},
    {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
    {"ref":"sha256:02b9e0c400d1bdaba9c962fe9d4497d2052bd53d8155d0f8b005bde558775981","path":".markdown-machine/lifecycle/lifecycle-graph-manna-r2.md"}
  ],
  "required_independence_dimensions": ["author_independence","subject_binding"],
  "required_evidence_refs": [
    {"ref":"sha256:f82fa4d61b92fdbdbb1503c5cbeb64bda78cf4d45cf9130c0d3a1de7aa0a7088","path":".markdown-machine/evidence/external-observation-phone-settings-ia-requirements.md"},
    {"ref":"sha256:9cbe4fea5db6cc3874237fab395624a2b58b7f379d3f1510a23ee0525983d079","path":".markdown-machine/evidence/external-observation-phone-settings-ia-flow.md"},
    {"ref":"sha256:d0382647a67a1be4b9e8e3bb8ec4c57394e53c9bc489a4bf31d2e16ba0b9534f","path":".markdown-machine/evidence/external-observation-phone-settings-ia-preservation.md"},
    {"ref":"sha256:580aee8670156fd6323234248892c3d4d5c1f000f631706731d07799e6206b89","path":".markdown-machine/evidence/external-observation-phone-settings-label-registry.md"}
  ],
  "revision": 1
}
---
# V1 reconciled Product Freeze independent review request

This request freezes the exact reconciled specification subject and unchanged
approved mocks. It requires a fresh independent judgment and cannot reuse the
r9 bounded-corrections result as a PASS.
