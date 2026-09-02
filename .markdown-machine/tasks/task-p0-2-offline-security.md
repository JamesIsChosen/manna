---
{
  "record_type": "TASK_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "task_id": "P0.2-offline-security",
  "intent_baseline_ref": {"ref":"sha256:ffffbdb6fbbfb339d5e9730867dadb3d76d8382982509566bbfb1ddff7f17957","path":".markdown-machine/intent/intent-baseline-manna.md"},
  "capability_binding_ref": {"ref":"sha256:ecac82034b02dcb5d5eaf82a8ae61cb66936d6992b7008e1b73beaf68b4af6d1","path":".markdown-machine/capabilities/capability-binding-software-product.md"},
  "operation_contract_ref": {"ref":"sha256:96f6f9d72e3e26bb323f0f21e953a95a0abbfd0bfe462660e42bc5ff3fb1b238","path":".markdown-machine/authority/operation-contract-discovery.md"},
  "purpose": "Complete the deferred P0.2 offline security work for Manna after Product Freeze and explicit implementation authorization.",
  "scope": ["Preserve the existing product security requirements and implement only the bounded P0.2 roadmap scope after its lifecycle gate."],
  "prohibited_scope": ["No product implementation during this adoption.","No network-dependent runtime behavior.","No Scripture fabrication or untrusted-module code execution."],
  "completion_conditions": ["The P0.2 acceptance criteria pass under the current product and engineering specifications.","Independent verification is requested before the task is marked complete."],
  "convergence_root_ref": {"ref":"sha256:2d9c46eba544e9370e4856f6113fd99d256abea64fa80513431b929a5e71e8a6","path":".markdown-machine/authority/convergence-root-manna.md"},
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
