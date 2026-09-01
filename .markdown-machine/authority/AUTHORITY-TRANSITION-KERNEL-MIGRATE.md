---
{
  "record_type": "AUTHORITY_TRANSITION",
  "schema_version": 1,
  "project_id": "manna",
  "authority_epoch": 0,
  "sequence": 3,
  "transition_type": "KERNEL_MIGRATE",
  "predecessor_transition_refs": [
    "sha256:b1e4808cf8aa4d0063ec50610f34dbe98aa2e733c96bb31e3ed32a9ff4d0ef01"
  ],
  "admission_contract_ref": "sha256:9b8a6dbb97d272946405b6b508b85bb50153af53ecc44550a3e1d7e4d53c8fcd",
  "exact_contract_bindings": [
    "sha256:9ce19d3199418396ceb49264539b5bd82a0cd94e9fc8d04245badbb4af1dd63e",
    "sha256:505a0f7dccc97b617909d9758914c15fa80fb1423badf574f5b2d307e6cc127f",
    "sha256:62568fc918b59c7ac67cc8837e6696ca843c5805bc5507e3b6798dd46e040e70",
    "sha256:d25267b9253fffdca01c7883cf53d882276789c72d43070d9fc29d60622f2822",
    "sha256:ea43a8ea09b9f5bd7bd52cce1a178072d13689d2baece18526be2e3434f840e6",
    "sha256:18a53b295d950f05f564cad883e0257288446ee50cc947c7b2d8577ba6843914",
    "sha256:1943da754bde66f4bdcfbf7149dda9cf940243dae64d8c19169b4d1bb8cb573d",
    "sha256:51e861ac9f39f2de2868afe08840eb18def5818b5c5ad2657e3e88b5f3310014",
    "sha256:b88458acc10a00af3687fecc239c630828cd01aa39b0ed35c8c9226e277e2547",
    "sha256:9ebb1d0f1a0c7d9a2f4aefcd213cd08392e491fd03d86f1493fd035f3ab08440",
    "sha256:d9c8128deeafff579276a3d866b7f59cab557d531159fd02b03319a664dd6a38"
  ],
  "accepted_evidence_refs": [
    "sha256:1faf16c6336f119611aa8f2ce9b3b62afb52394645922e0e79ebc7a89b47fb60",
    "sha256:26377103c638dd7f7fb344e0fba2ad1d1b1d76f1f7c0544505d9b6fe856d2cb8"
  ],
  "human_authority_refs": [
    "sha256:1faf16c6336f119611aa8f2ce9b3b62afb52394645922e0e79ebc7a89b47fb60"
  ],
  "publication_mechanism_plan_ref": "sha256:d88116fca4595baa4f3b859f18a7ca2f654255ab14241db5265a885e248b0ebd"
}
---
# v0.5.1 direct kernel migration finalizer

This current KERNEL_MIGRATE is the normal direct successor cutover from the coherent v0.5.0 project state. It installs one coherent v0.5.1 origin/runtime/contract set, mechanically rebinds existing current records to the predecessor authority head, preserves all project and historical state, and carries forward the released migration-continuity floor. The v0.3.0 bridge and v0.5.0 finalizer remain historical and are not replayed.
