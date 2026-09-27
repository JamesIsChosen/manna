---
{
  "record_type": "TASK_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "task_id": "V1-UI-UX-design-verification",
  "intent_baseline_ref": {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
  "capability_binding_ref": {"ref":"sha256:b1d72fc11359dbfcbb6a1344d3b12787336181ee14c5284b42fc65d3af5d2e2d","path":".markdown-machine/capabilities/capability-binding-software-product-r2.md"},
  "operation_contract_ref": {"ref":"sha256:38eb6a0014ed8b0e2a9a0694560b58caa4e7d75ca34643a5fd5608d90180604e","path":".markdown-machine/authority/operation-contract-product-freeze-v01024.md"},
  "purpose": "Evaluate and admit the exact V1 Product Freeze only after an applicable independent PASS review and accepted result.",
  "scope": [
    "Freeze and independently review the exact V1 product-contract, UI/UX requirements, flow, approved-mock manifest, approved desktop and mobile mocks, revised iPad mock, and captured appearance approval named in project context.",
    "Perform governance and review work only; the Product Freeze operation has no planned effects."
  ],
  "prohibited_scope": [
    "No architecture, implementation, redesign, release, external effects, product-artifact edits, backend work, schema change, network integration, or lifecycle publication.",
    "Do not treat this Task or a review request as Product Freeze admission; meaningful exact-subject independent PASS and separately accepted result are required."
  ],
  "completion_conditions": [
    "One applicable independent review of the exact frozen subjects returns PASS with both author_independence and subject_binding satisfied.",
    "A separately admitted RESULT_ACCEPT transition accepts that exact PASS before any lifecycle publication is considered."
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
    {"path":".markdown-machine/intent/human-statement-ipad-appearance-approval.md","source_digest":"d96ff73f4718a8956d7078dec273fd62efbca4cc8216b646697debdf8403901a"}
  ],
  "subtree_context": [],
  "exact_path_context": [],
  "compiled_under_authority_ref": {"ref":"sha256:61dbe1e4ed772af066764ed4cdf1d30a6ea4ed39e4a92253bc878bf777f17e88","path":".markdown-machine/authority/authority-transition-product-freeze-horizon-raise.md"},
  "revision": 4
}
---
# V1 Product Freeze review task revision 4

This revision replaces the narrow design-realization slice with a no-effect
Product Freeze review gate. It cannot advance the lifecycle or authorize any
product work without the required independent PASS and result acceptance.
