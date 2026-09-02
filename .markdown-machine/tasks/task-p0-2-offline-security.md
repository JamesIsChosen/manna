---
{
  "record_type": "TASK_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "task_id": "P0.2-offline-security",
  "intent_baseline_ref": {"ref":"sha256:852b296ff487cb073a275c0b16d7ba44823ea1e360ac170add7c9f672028b9c7","path":".markdown-machine/intent/intent-baseline-manna.md"},
  "capability_binding_ref": {"ref":"sha256:438442aef9588179e15b2e1b9e3309ee8983876e1e5353884192da885b100724","path":".markdown-machine/capabilities/capability-binding-software-product.md"},
  "operation_contract_ref": {"ref":"sha256:6d744aa0f9ead07696b19ec4099fb674543b0f626a3555b42d972902c442812b","path":".markdown-machine/authority/operation-contract-discovery.md"},
  "purpose": "Complete the deferred P0.2 offline security work for Manna after Product Freeze and explicit implementation authorization.",
  "scope": ["Preserve the existing product security requirements and implement only the bounded P0.2 roadmap scope after its lifecycle gate."],
  "prohibited_scope": ["No product implementation during this adoption.","No network-dependent runtime behavior.","No Scripture fabrication or untrusted-module code execution."],
  "completion_conditions": ["The P0.2 acceptance criteria pass under the current product and engineering specifications.","Independent verification is requested before the task is marked complete."],
  "convergence_root_ref": {"ref":"sha256:35747db3327ed8b0156cd734d98d7dbaf42e8f37dbd7b40be4a357b05838587d","path":".markdown-machine/authority/convergence-root-manna.md"},
  "lifecycle_node_id": "IMPLEMENTATION",
  "project_context": [
    {"path":"docs/01-spec/product-specification.md","source_digest":"ac45071a5e6959e05df502fb2c65e36ffe907c953dc0bfe61e81d0f6335f94fa"},
    {"path":"docs/01-spec/engineering-specification.md","source_digest":"03b9db70ea3a394201b0cf56e161bca639fe1c9e7bde08353fca44d86bd5cbe4"},
    {"path":"docs/05-development/ROADMAP.md","source_digest":"360482b6ddb86e300dd29569515ecbbfbbe1e34652800f40b1cb810de714375e"},
    {"path":"docs/05-development/packets/P0.1-offline-security.md","source_digest":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"},
    {"path":".markdown-machine/history/35e1125f9d8ec953e19de5679648bfabdbcead0dbe3227cd3e01db25476086f2/tasks/P0.2-OFFLINE-SECURITY.md","source_digest":"51e861ac9f39f2de2868afe08840eb18def5818b5c5ad2657e3e88b5f3310014"}
  ],
  "subtree_context": [],
  "exact_path_context": [],
  "revision": 1
}
---
# P0.2 offline security task

Status: OPEN; deferred until Product Freeze.
