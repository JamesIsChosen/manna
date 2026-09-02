---
{
  "record_type": "TASK_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "task_id": "P0.2-offline-security",
  "intent_baseline_ref": {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
  "capability_binding_ref": {"ref":"sha256:8a7ea94d6600846132e2e1ba4851fda7e023498ebd833a17f9e884c36263090c","path":".markdown-machine/capabilities/capability-binding-software-product.md"},
  "operation_contract_ref": {"ref":"sha256:ca02800ae9d3e5c6d4ed20ede8dfc155abb19648b7db6aaaf21d0ee372500326","path":".markdown-machine/authority/operation-contract-discovery.md"},
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
    {"path":"docs/01-spec/p0.1-implementation-packet.md","source_digest":"098a87e4719cc9b8b21fd484fe23f8a098bd01c0d9bdfc2b4cd9e72c642786c5"},
    {"path":".markdown-machine/history/2162e3e9e0f4d11c80d553f6bea54207fdaa46116ceff42f9cd5a549c7608a15/tasks/P0.2-OFFLINE-SECURITY.md","source_digest":"414e96eda36c8ab102f3d01d2d1341bf760121f80dad86751a998cacbed17b5c"}
  ],
  "subtree_context": [],
  "exact_path_context": [],
  "revision": 1
}
---
# P0.2 offline security task

Status: OPEN; deferred until Product Freeze.
