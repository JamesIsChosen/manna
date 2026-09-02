# Markdown Machine v0.6.0 adoption packet

## Scope

This packet records governed adoption of the exact released Markdown Machine
v0.6.0 contract set into Manna. Product source and product decisions were not
changed. The failed prior migration subject remains immutable historical
evidence under `.markdown-machine/history/35e1125f9d8ec953e19de5679648bfabdbcead0dbe3227cd3e01db25476086f2/`.

## Source identity

- Release: `v0.6.0`
- Commit: `9248215bb7be844c268403228cd5f3a231363834`
- Tree: `79cf2800f17c57a5a2d419d862dd58ee329c2236`
- ContentSetDigest: `66af7c3dd03a24dd41945e40b028c96fc925a9c610d6a1f751192d718c60eeb3`
- Exact six-contract and runtime/capability exports are recorded in `COMPILED-MANIFEST.md`.

## Adoption decision

The prior v0.3 state had no provable usable machine-origin/kernel migration
mechanism. Adoption therefore starts a new positive v0.6.0 Genesis at epoch 0,
sequence 0 with dispatch `NO_PROVABLE_LINEAGE` and status
`HISTORICAL_UNVERIFIED`. No `LEGACY_ADOPT` bridge is used. The retained failed
subject is not current authority and contributes zero reusable convergence
capacity.

## Current authority

The current chain is the adoption Genesis followed by intent acceptance,
capability binding, lifecycle publication, P0.2 task authorization, and V1
UI/UX design-verification task authorization. The current frontier remains
`DESIGN_VERIFICATION`; Product Freeze and implementation are not authorized.

## Verification performed

- Exact v0.6.0 tag commit/tree and ContentSetDigest independently recomputed.
- Exact v0.6.0 six-contract export hashes checked against the release.
- Retained historical subject file hashes and identity digest recorded in the
  history manifest.
- Current closure contains no `STATE.md`, no distribution source roots, and no
  sibling machine/compiler/runtime source tree.
- Source-free validation is performed from the child closure alone.
- Repository sync is verified after push by remote readback; historical failed
  branch is not modified.

## Review boundary

This is an author-created adoption packet. It does not manufacture an
independent review result or mark a roadmap item `[x]`. One independent
acceptance review remains required.
