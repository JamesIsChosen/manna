---
{
  "record_type": "AUTHORITY_TRANSITION",
  "schema_version": 1,
  "project_id": "manna",
  "authority_epoch": 0,
  "sequence": 2,
  "transition_type": "KERNEL_MIGRATE",
  "predecessor_transition_refs": [
    "sha256:81dfe0c3cc29492152379ec06257f6b0d4e70b7dacabc405276e3c6337e3ebfa"
  ],
  "admission_contract_ref": "sha256:333007c42a40c533416eed13936245708655b6e1d5d5c2bdb2d5c97018cc1d03",
  "exact_contract_bindings": [
    "sha256:e81c1859d4f67fdc491c39e46eecbedd0c072bc2bfaf3bb20ba8761ec02b3323",
    "sha256:b21e61ad2a4e133d7c6e1cd0b943cadb208f1950454ba80a2ae00bd95e82a0d3",
    "sha256:a1a5b93ad5d297ff5c243f023f8b504c6cb6fafc3db64c3ead112e4c220f345a",
    "sha256:b60ad1c9dbbafc48ea449d8430a5b3adbf7d207fac6c9d3bcb5574a7475f9c6f",
    "sha256:d91b9917afc2b463412b36fa4912f6335fb0da4590a7c73e4e41eb6d8673ee23",
    "sha256:e7a2e346d74fdc88ed7d33d5890b65be3b0b3a0df9ce824f4af9cf378ae353b1",
    "sha256:152658a9b5bd785c74b251c27a1f1e6b80f7802c03316c97d2d3fc93492818ed",
    "sha256:9858bf044957e2719e1dc11a6a9a04f5d7edc2ebaf05c80e8522e7fab9b2d1ef",
    "sha256:52d65c89e444390c255efd5cb53011c6a716c40b53bf4dfc4c085b8011fe158b",
    "sha256:3f00eb397aa0508e83a376789a01afb7168806b2b0eb330831fc8ec05930fb64",
    "sha256:d9c8128deeafff579276a3d866b7f59cab557d531159fd02b03319a664dd6a38"
  ],
  "accepted_evidence_refs": [
    "sha256:b7e76898c3d5d23690711683cda5068bef0de5e18edc293b50395adb779daa42",
    "sha256:26377103c638dd7f7fb344e0fba2ad1d1b1d76f1f7c0544505d9b6fe856d2cb8"
  ],
  "human_authority_refs": [
    "sha256:b7e76898c3d5d23690711683cda5068bef0de5e18edc293b50395adb779daa42"
  ],
  "publication_mechanism_plan_ref": "sha256:15ea0090908b806887619805a3148bef8498763b91f36eefad2e2902de692ba2"
}
---
# v0.5 coherent kernel migration finalizer

This candidate-governed `KERNEL_MIGRATE` finalizes the legacy bridge by installing one coherent v0.5.0 current binding set: DistributionOrigin, KernelManifest, intent, capability, lifecycle, horizon, operation, preserved Tasks, convergence policy, and repository identity. It introduces no new product/effect authority and preserves the original Genesis and all historical records.
