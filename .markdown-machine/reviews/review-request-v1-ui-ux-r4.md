---
{
  "record_type": "REVIEW_REQUEST",
  "schema_version": 1,
  "project_id": "manna",
  "review_request_id": "manna-v1-product-freeze-r4-independent-review",
  "review_purpose": "TASK_EXECUTION_REVIEW",
  "subjects": [
    {"path":"docs/01-spec/manna-v1-product-contract.md","source_digest":"524b1e0c1453802faad43c5cdb037d51ef910c169d33dc053c69c2e90088921f"},
    {"path":"docs/01-spec/manna-v1-ui-ux-requirements.md","source_digest":"c1d3e261b1461bb51fb3ea66410858e321bc24f19160ffeabcd246804b9658df"},
    {"path":"docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md","source_digest":"909d806e4ad798def0a9e6081eba5ccbc570a3e8a2836f1ca5a577234fb2fb29"},
    {"path":"docs/01-spec/design-reference/manna-v1-desktop-interactive-mock.html","source_digest":"ccbf3bc7cf1eba409c76124621a46a55afef5ea5ffb97b34e9d797abbd04551b"},
    {"path":"docs/01-spec/design-reference/manna-v1-phone-interactive-mock.html","source_digest":"595f4ee6a827c70d377177a1fd5d2bca93783dccb29b89cf63eeedd7e828de02"},
    {"path":"docs/01-spec/design-reference/manna-v1-ipad-interactive-mock.html","source_digest":"3533ee38ff5fa4cf5e4e796202a7ad2984f5196de8d7351ba954c010de94070b"},
    {"path":"docs/01-spec/design-reference/APPROVED-MOCKS.md","source_digest":"3b642558fca72edff2ba9789211199bb50a85bc862bae3988ec9d7fda4332253"},
    {"path":".markdown-machine/intent/human-statement-ipad-appearance-approval.md","source_digest":"d96ff73f4718a8956d7078dec273fd62efbca4cc8216b646697debdf8403901a"}
  ],
  "subject_record_refs": [
    {"ref":"sha256:78a4935b2ec986314a0f20fa7fbc4cfe723efea1667705def8dfae9d04039e10","path":".markdown-machine/tasks/task-v1-ui-ux-design-r4.md"},
    {"ref":"sha256:38eb6a0014ed8b0e2a9a0694560b58caa4e7d75ca34643a5fd5608d90180604e","path":".markdown-machine/authority/operation-contract-product-freeze-v01024.md"},
    {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
    {"ref":"sha256:02b9e0c400d1bdaba9c962fe9d4497d2052bd53d8155d0f8b005bde558775981","path":".markdown-machine/lifecycle/lifecycle-graph-manna-r2.md"}
  ],
  "required_independence_dimensions": ["author_independence","subject_binding"],
  "required_evidence_refs": [
    {"ref":"sha256:8e87ebc8cbd77bf1cb3529884dc98a1c9f25676f4af33762039cc8f0c812d23d","path":".markdown-machine/evidence/external-observation-approved-desktop-preserved.md"},
    {"ref":"sha256:0cb61d3301356ac7ab2f89dcea4f59b7e7f0356aa4a2182e30de957589e14bf2","path":".markdown-machine/evidence/external-observation-approved-mocks-manifest.md"},
    {"ref":"sha256:04026e0dde15fca20934a7e9502c513e8ac1f7bd2a03c5c9e74786d7c9d75322","path":".markdown-machine/evidence/external-observation-ipad-mock-verified.md"},
    {"ref":"sha256:4f20be99ebdf30dcf7b1a2da99fac2f2f5d297c24a1e3b0ae7674941882880ee","path":".markdown-machine/evidence/external-observation-ipad-feedback-verified.md"}
  ],
  "revision": 1
}
---
# V1 Product Freeze independent review request

This request freezes the exact review subject for the no-effect Product Freeze
gate. A PASS must be meaningful, exact-subject, and independently established;
it cannot be inferred from prior appearance approval or mechanical verification.
