---
{
  "record_type": "REVIEW_REQUEST",
  "schema_version": 1,
  "project_id": "manna",
  "review_request_id": "manna-v1-product-freeze-r6-independent-review",
  "review_purpose": "TASK_EXECUTION_REVIEW",
  "subjects": [
    {"path":"docs/01-spec/manna-v1-product-contract.md","source_digest":"524b1e0c1453802faad43c5cdb037d51ef910c169d33dc053c69c2e90088921f"},
    {"path":"docs/01-spec/manna-v1-ui-ux-requirements.md","source_digest":"c1d3e261b1461bb51fb3ea66410858e321bc24f19160ffeabcd246804b9658df"},
    {"path":"docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md","source_digest":"909d806e4ad798def0a9e6081eba5ccbc570a3e8a2836f1ca5a577234fb2fb29"},
    {"path":"docs/01-spec/design-reference/manna-v1-desktop-interactive-mock.html","source_digest":"3b706a1b7248b1bf2ca5c74b3fcb932bb9bcb626fcc7eadfba963047c08437c3"},
    {"path":"docs/01-spec/design-reference/manna-v1-phone-interactive-mock.html","source_digest":"fadd926be6bbb7e6852fb933a078b046bf014969c434ffca49d6040b6991b816"},
    {"path":"docs/01-spec/design-reference/manna-v1-ipad-interactive-mock.html","source_digest":"be1e8f58e573cfdbfb38588acca23776282d2358740a6ba187b05e9dee82447b"},
    {"path":"docs/01-spec/design-reference/APPROVED-MOCKS.md","source_digest":"c57b4c65c24faa6d71d4fb2e165f8c3e52dbb6ee4e651d4f4b1474e104be7d7d"},
    {"path":".markdown-machine/intent/human-statement-ipad-appearance-approval.md","source_digest":"d96ff73f4718a8956d7078dec273fd62efbca4cc8216b646697debdf8403901a"},
    {"path":".markdown-machine/intent/human-statement-ipad-settings-visual-correction.md","source_digest":"d964b9fba8095a9fe4db979c779cf24bbc4c266f4fd22e201416eb17b2e27df5"},
    {"path":".markdown-machine/evidence/external-observation-ipad-settings-visual-correction.md","source_digest":"d4c78bf0f587ec29af147d56681964b1220e5759660ffa0830743c665a974f07"},
    {"path":".markdown-machine/evidence/external-observation-approved-mocks-sync.md","source_digest":"dcf1751c8ef39b619662fc1277b3cd0bbb65571689f3406113807b8688676ac2"}
  ],
  "subject_record_refs": [
    {"ref":"sha256:49a6c8407d27bbefc85769a301672f9bc88a901f8be07a9644637a5e55209f62","path":".markdown-machine/tasks/task-v1-ui-ux-design-r6.md"},
    {"ref":"sha256:38eb6a0014ed8b0e2a9a0694560b58caa4e7d75ca34643a5fd5608d90180604e","path":".markdown-machine/authority/operation-contract-product-freeze-v01024.md"},
    {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
    {"ref":"sha256:02b9e0c400d1bdaba9c962fe9d4497d2052bd53d8155d0f8b005bde558775981","path":".markdown-machine/lifecycle/lifecycle-graph-manna-r2.md"}
  ],
  "required_independence_dimensions": ["author_independence","subject_binding"],
  "required_evidence_refs": [
    {"ref":"sha256:78d42171f9cf3b82376149e323a3c0bc2d84644264b30a3028d83fd2c3f4fbf1","path":".markdown-machine/evidence/external-observation-product-freeze-corrections-desktop.md"},
    {"ref":"sha256:80af078223c84501514f1d1e3c31bb23d0a817e5e87d30933ed962533497d8cd","path":".markdown-machine/evidence/external-observation-product-freeze-corrections-phone.md"},
    {"ref":"sha256:d4c78bf0f587ec29af147d56681964b1220e5759660ffa0830743c665a974f07","path":".markdown-machine/evidence/external-observation-ipad-settings-visual-correction.md"},
    {"ref":"sha256:dcf1751c8ef39b619662fc1277b3cd0bbb65571689f3406113807b8688676ac2","path":".markdown-machine/evidence/external-observation-approved-mocks-sync.md"}
  ],
  "revision": 1
}
---
# V1 corrected Product Freeze independent review request

This request freezes the exact corrected subject after registry synchronization.
It requires a fresh independent judgment and cannot reuse the earlier bounded-
corrections result as a PASS.
