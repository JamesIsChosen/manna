---
{
  "record_type": "TASK_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "compiled_under_authority_ref": "sha256:a458796ed04021248db17179275c826fa1b9bf053150476ccb6ac45d3063c2af",
  "intent_baseline_ref": "sha256:b275d476d59aabc8784feaba8cbfec6b751002c439070d4bf2e3e9726ddf1d93",
  "task_id": "manna-v1-ui-ux-design-verification",
  "convergence_root_ref": "sha256:b35dbe0fe0f388b2d4fe51ccf509aad43744272ebd774d0d1ea7e11bedc88137",
  "lifecycle_node_id": "DESIGN_VERIFICATION",
  "capability_binding_ref": "sha256:3baeb6f51b9ad59278f87514500ce2dcab3a583eb7b2ea7871fd60e0e9c4cf93",
  "operation_contract_ref": "sha256:c0c6d8947fb051dfece63ec7e1aed7ffa101dc51399e3419be7cb153efaa93a5",
  "purpose": "Verify the Version 1 flows and visual design before human Product Freeze.",
  "scope": ["desktop and phone design references", "flow and state verification", "human appearance approval route"],
  "prohibited_scope": ["application implementation", "merge", "deployment", "release"],
  "completion_conditions": ["human appearance approval obtained", "explicit Product Freeze requested"]
}
---

# Current product task: Version 1 UI/UX design

The visual system and desktop layout baseline are now recorded in the
design-reference artifacts. The extended mock covers the original six screens
plus Search, Notes, Library, Settings, First run, Backup & Restore, and
Comparison as static layouts. The companion IA document records the interaction
model, platform/state rules, supplied-word proposal, and coverage matrix.

The low-fidelity flow and edge-state draft is recorded and human-approved in
`docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md`. The visual
system and desktop/phone high-fidelity references have been exercised in the
local browser; the immediate next step is human appearance approval.

Do not modify production application behavior. Do not declare Product Freeze on behalf of the human. The task ends with design evidence and an explicit request for human design approval; roadmap recompilation and implementation require a later, explicit Product Freeze.
