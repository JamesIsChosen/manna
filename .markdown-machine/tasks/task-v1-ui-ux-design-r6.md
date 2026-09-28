---
{
  "record_type": "TASK_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "task_id": "V1-UI-UX-design-verification",
  "intent_baseline_ref": {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
  "capability_binding_ref": {"ref":"sha256:b1d72fc11359dbfcbb6a1344d3b12787336181ee14c5284b42fc65d3af5d2e2d","path":".markdown-machine/capabilities/capability-binding-software-product-r2.md"},
  "operation_contract_ref": {"ref":"sha256:38eb6a0014ed8b0e2a9a0694560b58caa4e7d75ca34643a5fd5608d90180604e","path":".markdown-machine/authority/operation-contract-product-freeze-v01024.md"},
  "purpose": "Evaluate and admit the exact corrected V1 Product Freeze only after an applicable fresh independent PASS review and accepted result.",
  "scope": [
    "Freeze and independently review the exact V1 product contract, UI/UX requirements, flow, synchronized approved-mock registry, corrected desktop, mobile, and iPad mocks, and exact correction evidence named in project context.",
    "Determine whether current human appearance authority is applicable to the corrected iPad bytes; preserve a human-decision blocker if it is not.",
    "Perform governance and review work only; the Product Freeze operation has no planned effects."
  ],
  "prohibited_scope": [
    "No architecture, implementation, redesign, release, external effects, product-artifact edits, backend work, schema change, network integration, or lifecycle publication.",
    "Do not infer a fresh appearance approval, independent PASS, Product Freeze acceptance, or RESULT_ACCEPT from closeout language."
  ],
  "completion_conditions": [
    "One applicable independent review of the exact corrected frozen subjects returns PASS with both author_independence and subject_binding satisfied.",
    "Any human-owned appearance decision required for the corrected iPad bytes is durably resolved.",
    "A separately admitted RESULT_ACCEPT transition accepts that exact PASS before lifecycle publication is considered."
  ],
  "convergence_root_ref": {"ref":"sha256:35747db3327ed8b0156cd734d98d7dbaf42e8f37dbd7b40be4a357b05838587d","path":".markdown-machine/authority/convergence-root-manna.md"},
  "lifecycle_node_id": "DESIGN_VERIFICATION",
  "project_context": [
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
  "subtree_context": [],
  "exact_path_context": [],
  "compiled_under_authority_ref": {"ref":"sha256:5b038596c6baf3095cd0f1b2d2cf0c0109926f14eac75e45514b0426b903e731","path":".markdown-machine/authority/authority-transition-approved-mocks-sync-extend.md"},
  "revision": 6
}
---
# V1 corrected Product Freeze review task revision 6

This revision freezes the exact post-correction artifacts and synchronized
registry for fresh independent review. It creates no Product Freeze acceptance
and preserves any unresolved human appearance decision.
