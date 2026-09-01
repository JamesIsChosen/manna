---
title: Markdown Machine v0.5.1 governed migration
status: local-closeout-complete
---

# Markdown Machine v0.5.1 governed migration packet

## Scope

This packet records the authorized in-place migration of Manna from the exact
v0.5.0 governed checkpoint to the exact Markdown Machine v0.5.1 release. The
intermediate v0.5.0 state was not independently reviewed or frozen as a new
acceptance milestone. Application source, product documents, tests, CI,
security material, project identity, and Git history were preserved.

## PRE-MIGRATION

- exact starting branch: `codex/markdown-machine-v0.4.0-migration`
- exact starting HEAD: `ecb3a50e58d5193f96b5e153ff5b8045eed19ba5`
- worktree: clean
- current machine: coherent Markdown Machine v0.5.0
- current authority head: v0.5.0 `KERNEL_MIGRATE` finalizer
  `b1e4808cf8aa4d0063ec50610f34dbe98aa2e733c96bb31e3ed32a9ff4d0ef01`
- barrier status: no active STOP, authority fork, unresolved recovery/effect/
  resource/currentness barrier, or other migration blocker

## V0.5.1 SOURCE

- repository: `JamesIsChosen/markdown-machine`
- tag: `v0.5.1`
- commit: `914687c5dccd334e208781fbcae53ea23f4e4f41`
- tree: `71f7f41af51f36a8613041f019c1077095215cdb`
- canonical ContentSetDigest: `fea489c7701910c0d9cfe3f86b2651e5a67f233c3ec0ecfc798b9cba2d97c5f4`
- recomputation 1: 158 regular Markdown files from a clean archive extraction
- recomputation 2: the same digest from a separate clean extraction and
  independent Python byte/hash implementation

The exact v0.5.1 source contract defines inclusion of every regular `.md` file,
canonical relative paths sorted by UTF-8 byte order, lowercase SHA-256 of exact
file bytes, ASCII rows `<hash><two spaces><path><LF>`, and SHA-256 over the
concatenated rows. The local tag resolves exactly to the requested commit and
tree. Remote `ls-remote` readback was unavailable because this environment
could not resolve `github.com`; no remote mutation or sync claim was made.

## MIGRATION

- exact v0.5.0 transition used: current v0.5.0 normal `KERNEL_MIGRATE` contract
- classification: direct coherent cutover, not a compatibility bridge
- new transition digest:
  `c5397b0086629dc7d0e75551bc284161c0426bc9abe21c41011b6a4c2316ad2e`
- transition: authority epoch `0`, sequence `3`, predecessor v0.5.0 finalizer
- candidate Origin digest:
  `9ce19d3199418396ceb49264539b5bd82a0cd94e9fc8d04245badbb4af1dd63e`
- candidate KernelManifest digest:
  `505a0f7dccc97b617909d9758914c15fa80fb1423badf574f5b2d307e6cc127f`

The finalizer binds the exact v0.5.1 Origin and KernelManifest, candidate
governing source membership, the transformed current binding set, and the
direct-session `MIGRATION_APPROVAL` subject-bound to the candidate manifest.
Existing records were changed only to rebind mechanically required
`compiled_under_authority_ref` and dependent exact references to the v0.5.0
predecessor head.

## CONTINUITY

ProjectIdentity, the original single Genesis, accepted human intent, product
content, Tasks, lifecycle, Run Horizon, convergence, capabilities, repository
identity/history, and pending product boundaries were preserved. No Task,
Attempt, tombstone, review/remediation, effect, resource, or recovery state was
reset or invented. Product Freeze and architecture remain pending as before;
this migration creates no application implementation authority.

The v0.3.0 → v0.5.0 bridge and finalizer were retained without replay. No second
Genesis, second migration system, or parallel current runtime was created.

## V0.5.1 CURRENT

- authority head: `sha256:c5397b0086629dc7d0e75551bc284161c0426bc9abe21c41011b6a4c2316ad2e`
- current authority projection digest:
  `5276891af47ceecff0a5718700d8886a057789bb9828d3a0086a1f06a77dba46`
- DistributionOrigin: `sha256:9ce19d3199418396ceb49264539b5bd82a0cd94e9fc8d04245badbb4af1dd63e`
- KernelManifest: `sha256:505a0f7dccc97b617909d9758914c15fa80fb1423badf574f5b2d307e6cc127f`
- runtime/contract coherence: exact v0.5.1 exports are source-member-bound and
  resolve through the current manifest
- forward-migration continuity: present in exact current
  `contracts/KERNEL-CONSTITUTION.md` and `contracts/MIGRATION.md`, including
  the v0.5.1 successor-release continuity floor

## HISTORICAL CLOSURE

- v0.3.0 exact origin/runtime/contracts and Genesis closure remain under
  `/.markdown-machine/history/v0.3.0/`
- v0.5.0 current surface is retained byte-for-byte under
  `/.markdown-machine/history/v0.5.0/`
- v0.5.0 bridge remains under
  `/.markdown-machine/history/v0.5.0-migration/`
- failed v0.4 material remains non-current Git history and is not an authority
  source
- current/non-current separation is explicit; only v0.5.1 is current

## COLD RESUME

PASS. Current Origin, KernelManifest, authority, runtime, contracts, typed
bindings, handoff, and bounded historical closure resolve locally without the
v0.3.0, v0.5.0, or v0.5.1 distribution source trees or prior chat. No
CONTEXT_ROUTE was fabricated because current Task applicability does not require
one. Disposable staging and migration scripts were removed.

## VERIFICATION

- `npm ci`: PASS
- `npm run lint`: PASS
- `npm run build`: PASS
- deterministic rebuild: PASS; both builds produced
  `600f7465613d9d235cd53ef5dc81216d90f7c26856af32afc404e5c42cf0d97f`
- direct current-binding, source-membership, historical-retention, and
  source-free hygiene checks: PASS
- `npm test`: environment-limited. `test/browser.test.js` cannot run because
  no Chromium-family binary is installed. `test/failure.test.js` cannot spawn
  child Node processes in this sandbox (`EPERM` for the configured Node path),
  so its diagnostic-substring assertions fail. No test or application source
  was modified to accommodate these unrelated host limitations.

No separate independent acceptance review was run.

## REPOSITORY

- branch: `codex/markdown-machine-v0.4.0-migration`
- push/merge/deploy/release: not performed
- remote readback: unavailable due environment DNS failure; no sync claim
- final commit and clean-tree state are reported in the closeout response

