---
{
  "record_type": "REVIEW_REQUEST",
  "schema_version": 1,
  "project_id": "manna",
  "review_request_id": "manna-v1-architecture-reconciliation-r1-independent-review",
  "review_purpose": "TASK_EXECUTION_REVIEW",
  "subjects": [
    {"path":"docs/01-spec/engineering-specification.md","source_digest":"03b9db70ea3a394201b0cf56e161bca639fe1c9e7bde08353fca44d86bd5cbe4"},
    {"path":"docs/01-spec/manna-v1-product-contract.md","source_digest":"524b1e0c1453802faad43c5cdb037d51ef910c169d33dc053c69c2e90088921f"},
    {"path":"docs/01-spec/manna-v1-ui-ux-requirements.md","source_digest":"5bed8619f0c76c1d74ec42413321894a3101673a32e78a7f7f49bcf67d471dd9"},
    {"path":"docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md","source_digest":"285e601cf823b8b4530ec42fe2fdc5d06728de860242429ef39208cb9511df25"},
    {"path":"docs/01-spec/design-reference/APPROVED-MOCKS.md","source_digest":"85cc43ce0846bdf65007e6149a3d0b284a799a9deaf1c4d3ac4070f489876ecf"},
    {"path":"docs/01-spec/product-specification.md","source_digest":"ac45071a5e6959e05df502fb2c65e36ffe907c953dc0bfe61e81d0f6335f94fa"},
    {"path":"docs/01-spec/p0.1-implementation-packet.md","source_digest":"098a87e4719cc9b8b21fd484fe23f8a098bd01c0d9bdfc2b4cd9e72c642786c5"}
  ],
  "subject_record_refs": [
    {"ref":"sha256:8bfb72ddd0aa40edf5834bc5c6541171ac5a9dbf5793aee5815b9fea7c98a8b6","path":".markdown-machine/tasks/task-v1-architecture-r2.md"},
    {"ref":"sha256:b9d3b0e539946b327bdac218d5cfea7a171d4ba054f2fc7698f4df5cbb53e143","path":".markdown-machine/authority/operation-contract-architecture-v01024.md"},
    {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
    {"ref":"sha256:e1facc304391a3dba08d3eba6aeab73fbefcca9c703adc93543f0935b5f41e13","path":".markdown-machine/lifecycle/lifecycle-graph-manna-r4.md"}
  ],
  "required_independence_dimensions": ["author_independence","subject_binding"],
  "required_evidence_refs": [
    {"ref":"sha256:6118521370a5c0958980d7b99d064ebbc094482f928cfab807277d7177637c06","path":".markdown-machine/evidence/external-observation-v1-architecture-evaluation.md"},
    {"ref":"sha256:f0c2c2f4128f6bad3e23bd9c5724208d5d58d398d467e5a57f941a89c06c2f4b","path":".markdown-machine/reviews/review-result-v1-architecture-r1.md"}
  ],
  "revision": 1
}
---
# V1 Architecture reconciliation independent review request

This request binds the exact bounded correction Task, current Architecture
operation, frozen V1 source set, and r1 findings for independent review of the
resulting reconciliation and capability matrix. It does not accept the result or
authorize implementation.
