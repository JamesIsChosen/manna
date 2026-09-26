---
{
  "record_type": "REPOSITORY_BINDING",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.3.0",
  "provider": "GitHub",
  "canonical_repository_identity": "JamesIsChosen/manna",
  "remote_name": "origin",
  "persistence_ref": "refs/heads/codex/manna-v1-ui-ux-design-verification",
  "synchronization_policy": "PUSH_ON_BOUNDED_CLOSEOUT",
  "force_push_allowed": false,
  "merge_on_closeout": false
}
---

# Manna repository binding

| field | bound value |
| --- | --- |
| provider | GitHub |
| canonical repository | `JamesIsChosen/manna` |
| remote | `origin` / `https://github.com/JamesIsChosen/manna.git` |
| default branch | `main` |
| governed persistence ref | `refs/heads/codex/manna-v1-ui-ux-design-verification` |
| synchronization policy | `PUSH_ON_BOUNDED_CLOSEOUT` |
| force push | `false` |
| merge on closeout | `false` |
| publication/deployment | not authorized by this binding |

## Currentness and side effects

Remote currentness is established by authoritative Git ref readback (`git ls-remote` or an equivalent GitHub ref observation) for the exact governed ref. The earlier governance-reconciliation and discovery refs remain historical continuity; the current bounded transaction persists on the non-default design-verification branch `codex/manna-v1-ui-ux-design-verification`.

The repository CI workflow runs lint, tests, build, and determinism checks on pushes and pull requests with `contents: read`. This is the discovered push side-effect classification. No deployment, release, publication, merge, message, payment, or destructive operation is authorized or inferred here.

Closeout may checkpoint and publish this governed ref, then must read it back and prove exact local/remote SHA equality. Divergence, missing credentials, unavailable remote currentness, or an unauthorized push side effect blocks the claim of synchronization. No force push, merge, release, deployment, or history rewrite is permitted.
