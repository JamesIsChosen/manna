---
{
  "record_type": "AUTHORITY_TRANSITION",
  "schema_version": 1,
  "project_id": "manna",
  "authority_epoch": 0,
  "sequence": 1,
  "transition_type": "KERNEL_MIGRATE",
  "predecessor_transition_refs": [
    "sha256:18e4158813f6a97ea637f021abe7b7f83c63b0c99186354ad513fbbbb409a0cb"
  ],
  "admission_contract_ref": "sha256:333007c42a40c533416eed13936245708655b6e1d5d5c2bdb2d5c97018cc1d03",
  "exact_contract_bindings": [
    "sha256:b21e61ad2a4e133d7c6e1cd0b943cadb208f1950454ba80a2ae00bd95e82a0d3"
  ],
  "accepted_evidence_refs": [
    "sha256:b7e76898c3d5d23690711683cda5068bef0de5e18edc293b50395adb779daa42"
  ],
  "human_authority_refs": [
    "sha256:b7e76898c3d5d23690711683cda5068bef0de5e18edc293b50395adb779daa42"
  ],
  "publication_mechanism_plan_ref": "sha256:b0541b0fb651dbf91d2a43ed0d43e3582f3b8f05ef6d651c07417505d2f24767"
}
---
# v0.5 compatibility bridge entry

The recovered v0.3.0 authority admitted this exact candidate KernelManifest through its legacy manifest-shaped `KERNEL_MIGRATE` law. This historical bridge entry is not the final operational cutover: the old v0.3.0 DistributionOrigin remains current while candidate mechanics are migration-only. No substantive Task, lifecycle, result, capability, effect, or repository transition is permitted in this state.
