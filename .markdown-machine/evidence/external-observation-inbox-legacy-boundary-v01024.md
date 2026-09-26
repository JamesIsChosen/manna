---
{
  "record_type": "EXTERNAL_OBSERVATION",
  "schema_version": 1,
  "project_id": "manna",
  "observation_id": "manna-v01024-inbox-legacy-boundary",
  "observation_class": "INBOX_LEGACY_BOUNDARY",
  "observed_at": "2026-09-26T19:23:40Z",
  "observed_value": "{\"predecessor_ref\":\"sha256:2d85b5e349ce676fc7c6cbbfe84431b62f05f897280eae0d74501c6734b26e41\",\"repository_binding_ref\":\"sha256:a4e7ee281c265829c8d75d0bf9521137a0fd6bb501166060d0cd4dd384d7f19f\",\"snapshot_commit\":\"187cd0a7d4280465a46e4802f944cd27a3a91866\",\"snapshot_tree\":\"6cdc7c2169eacc54f8db11f4781646d4db4b2341\",\"retained_snapshot_path\":\".markdown-machine/history/12cc1a351c158ba954aa192f8bd902ecdf3f1d0cecebf01ab36354c30863e1f2/snapshot\",\"proof_digest\":\"00115c44e118a4f6beb6515b2b8624bf99b5375eae1bf9156ebca2075fc79d7d\"}",
  "proof_assurance": "REMOTE_MECHANICAL_PROOF",
  "mechanical_proof_locator": "docs/evidence/markdown-machine-v01024-predecessor-remote-proof.md",
  "revision": 0
}
---
# v0.10.2.4 Inbox legacy boundary

The authenticated remote ref, commit, and recursive-tree response bind the
complete durable v0.7.0 predecessor snapshot. Its current governed namespace
contained no current Inbox record; original paths and bytes are retained under
the named snapshot prefix for cold verification.
