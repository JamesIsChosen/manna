---
{
  "record_type": "TASK_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "task_id": "V1-architecture-selection",
  "intent_baseline_ref": {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
  "capability_binding_ref": {"ref":"sha256:b1d72fc11359dbfcbb6a1344d3b12787336181ee14c5284b42fc65d3af5d2e2d","path":".markdown-machine/capabilities/capability-binding-software-product-r2.md"},
  "operation_contract_ref": {"ref":"sha256:b9d3b0e539946b327bdac218d5cfea7a171d4ba054f2fc7698f4df5cbb53e143","path":".markdown-machine/authority/operation-contract-architecture-v01024.md"},
  "purpose": "Create the bounded V1 architecture reconciliation and capability matrix required by the independent r1 Architecture review without changing the accepted Product Freeze or beginning implementation.",
  "scope": [
    "Produce one authoritative V1 architecture reconciliation record that resolves the frozen V1 boundary against the existing engineering specification, expressly includes required V1 capabilities, expressly excludes deferred capabilities, and selects the smallest coherent component, storage, packaging, import-safety, backup/restore, accessibility, performance, diagnostics, testing, reproducibility, licensing, and recovery architecture.",
    "Produce one product-capability-to-component/format/proof matrix covering every frozen V1 capability, its owning component, durable data or exchange format, offline and security boundary, required proof gate, and current evidence status.",
    "Make direct-file launch identity, upgrade continuity, reduced-mode behavior, browser/device support, one-file versus official Library Pack fallback, encrypted-backup envelope and KDF, restore transaction and rollback, reproducibility, storage/performance budgets, licensing, and WCAG 2.2 AA conformance explicit architectural decisions or bounded proof obligations.",
    "Preserve P0.1 as NOT STARTED and classify device/browser trials, hostile-import execution, quota/rollback execution, and production performance/accessibility measurements as later implementation or acceptance proof gates rather than claimed results.",
    "Use current primary standards sources for version-sensitive browser-platform constraints, and create governed evidence records only."
  ],
  "prohibited_scope": [
    "No source-code, product-specification, approved-mock, UI-flow, build, dependency, schema/data, fixture, or product-artifact edit.",
    "No production implementation, P0 execution, prototype expansion, credential use, network integration, external effect, release, deployment, or lifecycle publication.",
    "Do not weaken or reinterpret the accepted product contract, privacy/offline posture, rights constraints, accessibility target, or single-file distribution requirement.",
    "Do not claim that a proof obligation has passed without direct current evidence, and do not infer Architecture acceptance from producing the records; an independently admitted PASS and separate RESULT_ACCEPT remain required."
  ],
  "completion_conditions": [
    "The reconciliation explicitly disposes every blocking finding in the r1 Architecture review and contains no contradiction with the accepted Product Freeze.",
    "The capability matrix covers every frozen V1 capability and traces each to an owning component, format or durable model, boundary, proof gate, and honest current status.",
    "One applicable independent review of the exact reconciliation and matrix returns PASS with both author_independence and subject_binding satisfied.",
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
    {"path":".markdown-machine/evidence/external-observation-v1-architecture-evaluation.md","source_digest":"6118521370a5c0958980d7b99d064ebbc094482f928cfab807277d7177637c06"},
    {"path":".markdown-machine/reviews/review-result-v1-architecture-r1.md","source_digest":"f0c2c2f4128f6bad3e23bd9c5724208d5d58d398d467e5a57f941a89c06c2f4b"}
  ],
  "subtree_context": [],
  "exact_path_context": [],
  "compiled_under_authority_ref": {"ref":"sha256:3416533eda7193e585a1e4f56925395920f83a767208aaefeeb80fe40ae2b2a0","path":".markdown-machine/authority/authority-transition-architecture-reconciliation-extend.md"},
  "revision": 2
}
---
# V1 Architecture selection task revision 2

This bounded correction Task authorizes only governed Architecture
reconciliation and capability-matrix evidence plus independent review. Product
edits, implementation, and P0 execution remain prohibited.
