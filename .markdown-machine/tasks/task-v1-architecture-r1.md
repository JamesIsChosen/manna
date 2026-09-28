---
{
  "record_type": "TASK_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "task_id": "V1-architecture-selection",
  "intent_baseline_ref": {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
  "capability_binding_ref": {"ref":"sha256:b1d72fc11359dbfcbb6a1344d3b12787336181ee14c5284b42fc65d3af5d2e2d","path":".markdown-machine/capabilities/capability-binding-software-product-r2.md"},
  "operation_contract_ref": {"ref":"sha256:b9d3b0e539946b327bdac218d5cfea7a171d4ba054f2fc7698f4df5cbb53e143","path":".markdown-machine/authority/operation-contract-architecture-v01024.md"},
  "purpose": "Evaluate and select the exact V1 technical architecture for the accepted Manna Product Freeze before any production implementation begins.",
  "scope": [
    "Independently evaluate the existing engineering specification and P0.1 feasibility evidence against the accepted V1 product contract, frozen UI/UX requirements and flows, approved mock registry, and P0.2 offline-security constraints.",
    "Confirm or challenge the implementation strategy for deterministic single-file packaging, offline/no-server operation, source/module boundaries, canonical resource and Scripture models, local storage, backup/restore and migration, safe untrusted imports, search/index workers, responsive platform abstractions, accessibility, performance, diagnostics, testing, reproducibility, licensing, and failure recovery.",
    "Compare viable technical approaches where the existing specification leaves a material choice open, then select the smallest coherent architecture that satisfies the frozen product without changing product intent.",
    "Produce an exact, reviewable architecture judgment and risk/gap disposition through governed evidence and review records only."
  ],
  "prohibited_scope": [
    "No production implementation, source-code or product-artifact edit, dependency installation, prototype expansion, schema/data migration, credential use, network integration, external effect, release, deployment, or lifecycle publication.",
    "Do not alter the accepted product contract, frozen UI/UX behavior, approved mock bytes, privacy/offline posture, rights constraints, or single-file distribution requirement.",
    "Do not infer Architecture acceptance or Implementation authority from analysis, a recommendation, or a review request; a separately admitted independent PASS and RESULT_ACCEPT are required."
  ],
  "completion_conditions": [
    "The exact architecture subject has a coherent decision for every scope area, identifies residual risks and proof obligations, and contains no unresolved contradiction with the accepted Product Freeze.",
    "One applicable independent review returns PASS with both author_independence and subject_binding satisfied.",
    "A separately admitted RESULT_ACCEPT transition accepts that exact PASS before any Implementation lifecycle publication or Task is considered."
  ],
  "convergence_root_ref": {"ref":"sha256:35747db3327ed8b0156cd734d98d7dbaf42e8f37dbd7b40be4a357b05838587d","path":".markdown-machine/authority/convergence-root-manna.md"},
  "lifecycle_node_id": "ARCHITECTURE",
  "project_context": [
    {"path":"docs/01-spec/engineering-specification.md","source_digest":"03b9db70ea3a394201b0cf56e161bca639fe1c9e7bde08353fca44d86bd5cbe4"},
    {"path":"docs/01-spec/manna-v1-product-contract.md","source_digest":"524b1e0c1453802faad43c5cdb037d51ef910c169d33dc053c69c2e90088921f"},
    {"path":"docs/01-spec/manna-v1-ui-ux-requirements.md","source_digest":"5bed8619f0c76c1d74ec42413321894a3101673a32e78a7f7f49bcf67d471dd9"},
    {"path":"docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md","source_digest":"285e601cf823b8b4530ec42fe2fdc5d06728de860242429ef39208cb9511df25"},
    {"path":"docs/01-spec/design-reference/APPROVED-MOCKS.md","source_digest":"85cc43ce0846bdf65007e6149a3d0b284a799a9deaf1c4d3ac4070f489876ecf"},
    {"path":"docs/01-spec/product-specification.md","source_digest":"ac45071a5e6959e05df502fb2c65e36ffe907c953dc0bfe61e81d0f6335f94fa"},
    {"path":"docs/01-spec/p0.1-implementation-packet.md","source_digest":"098a87e4719cc9b8b21fd484fe23f8a098bd01c0d9bdfc2b4cd9e72c642786c5"},
    {"path":".markdown-machine/tasks/task-p0-2-offline-security-r2.md","source_digest":"e2cf1e9e33c0a9c4d6f137b81bc72b8c26a1a7d6d61a4d0761542d535ea564a1"},
    {"path":".markdown-machine/reviews/review-result-v1-ui-ux-r11.md","source_digest":"0967aa15a05a9ae2b97c54aaca205423c808b93ff44b0d975a4cf771008f9d2a"},
    {"path":".markdown-machine/authority/authority-transition-product-freeze-r11-accept.md","source_digest":"af435730400891a4a9f4181505797361bc3c8f2b1dc7647f601e61178b31389d"}
  ],
  "subtree_context": [],
  "exact_path_context": [],
  "compiled_under_authority_ref": {"ref":"sha256:62f7713dc93d1ff0b5a50cfc8fcd04984e435b787e3898830a5030893ec2aa26","path":".markdown-machine/authority/authority-transition-architecture-convergence-extend.md"},
  "revision": 1
}
---
# V1 Architecture selection task revision 1

This Task authorizes only exact architecture evaluation, technical selection,
independent review, and an eventual acceptance decision. Production
implementation remains prohibited.
