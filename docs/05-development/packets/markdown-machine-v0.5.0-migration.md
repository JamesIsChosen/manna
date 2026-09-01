---
title: Markdown Machine v0.5.0 governed migration
status: local-closeout-pending
---

# Markdown Machine v0.5.0 governed migration packet

## Scope

This packet records the authorized in-place migration of Manna from the
recovered exact Markdown Machine v0.3.0 state to the exact Markdown Machine
v0.5.0 release. Application source, product documents, tests, CI, security
material, project identity, and Git history are outside the migration scope
and were preserved.

## Source identity

- v0.3.0 ZIP SHA-256: `bd6d0b91bb546fedecc9ae7b5cc1f9e522afddf898069de2f91ee2f33362921a`
- v0.3.0 Markdown count: `104`
- v0.3.0-defined ContentSetDigest: `b1c01eeaf4039feae1fbc135ef0fcaf481b48cb4d29a3f75b459c3dee6cba0f7`
- independent recomputation: `b1c01eeaf4039feae1fbc135ef0fcaf481b48cb4d29a3f75b459c3dee6cba0f7` from two clean extractions, with a separate `openssl dgst -sha256 -r` row implementation
- project DistributionOrigin: v0.3.0 archive origin with the same `b1c01...` digest before migration; final origin is exact Git `JamesIsChosen/markdown-machine`, tag `v0.5.0`, commit `9de2b2db3fa91ccddebec8543e27001393f2f6ed`, tree `30e694996a76e31bccf0576effe8a8182e7b45e8`, ContentSetDigest `d8945b78f65bdd2f32cfe52f9841536f1bca57aad2b8f0da1c9366124500a718`
- discrepancy classification: `HISTORICAL_VERIFICATION_DIGEST_ERROR`

The v0.3.0 algorithm includes every regular `.md` file, sorts canonical
relative paths by UTF-8 byte order, hashes exact file bytes, emits ASCII rows
`<lowercase_sha256>  <canonical_relative_path>\n`, and hashes the concatenated
rows with SHA-256. No versioned verification script or repository history
mechanically produces `45c1d0197ca61937fe045a30d0c8c18bea5d1b3e5a2df2486714e2425025f5bc`;
the exact ZIP, two independent recomputations, and the admitted v0.3.0 origin
all produce `b1c01...`. The `45c1...` value is preserved as a historical
report claim if encountered and is not rewritten.

## Old migration law

Migration mechanism present: `YES`.

The exact v0.3.0 law is retained under
`.markdown-machine/history/v0.3.0/contracts/`:

- `03-AUTHORITY.md` — `f488f3e60eafddd1ece4bb4a6b20180ca88b6b82c5443ad2cdb44c980bd6c1a4`
- `04-BOOTSTRAP-TRUST.md` — `7c697c4c4fd6dc2679956858cd69bd32b2cdadf737dbcafe14871e813cdf7a10`
- `13-MIGRATION.md` — `a54f3c8712eac67812b1a3274983183efe9ca8f90a337c09fbbbd8cbc2e3a5d4`
- `AUTHORITY-TRANSITION.template.md` — `e0619197899a5520dcbbf1b698bff00c183167f6b8234feda94954190fb6d15d`
- `KERNEL-MANIFEST.template.md` — `87dd9b2f7885e80eb9199ac65a73ae71a01c1622ac1d1060b69395027d39db25`

The old law explicitly names `KERNEL_MIGRATE` and requires candidate-before-
authority evaluation, exact predecessor/binding evidence, publication plan,
and currentness verification. It forbids rewriting original HumanStatements,
historical transitions, reviews, effects, or Product Freezes.

## Migration route and barriers

The old exact contract could not express the complete v0.5 coherent binding set
from its compact manifest-only state, so this was a legacy bridge migration:

1. recover old v0.3.0 current state;
2. stage exact v0.5.0 exports and derive the complete disposition;
3. prove bridge-safe prestate: no active STOP, unresolved fork, unresolved
   human-authority barrier, recovery/effect/resource/repository/currentness
   barrier, or stranded recovery route was present;
4. admit the manifest-only bridge entry at
   `.markdown-machine/history/v0.5.0-migration/AUTHORITY-TRANSITION-BRIDGE.md`;
5. deny substantive work in bridge state;
6. admit the exact v0.5.0 coherent finalizer at
   `.markdown-machine/authority/AUTHORITY-TRANSITION-KERNEL-MIGRATE.md`;
7. regenerate projections and retain bounded old closure.

Bridge transition SHA-256:
`81dfe0c3cc29492152379ec06257f6b0d4e70b7dacabc405276e3c6337e3ebfa`.

Finalizer SHA-256:
`b1e4808cf8aa4d0063ec50610f34dbe98aa2e733c96bb31e3ed32a9ff4d0ef01`.

## Continuity and closure

The original Genesis remains the single project Genesis. The v0.3.0 origin,
runtime, compiled manifest, output plan, authority/migration closure, and
original human statement are bounded under `history/v0.3.0/`. The failed v0.4
attempt remains historical Git evidence and was not made authoritative. The
final current surface has one v0.5.0 origin/runtime/contract set and no copied
generic Markdown Machine source roots.

No current Task carried an exact v0.5 context representation from which a
`CONTEXT_ROUTE` could be mechanically derived, so no route was fabricated.
No application or product file was changed by this packet.

## Validation and closeout

Staged validation passed for exact candidate exports, SMF JSON front matter,
required current typed fields, and typed SHA reference resolution. Repository
validation, application tests, build, deterministic rebuild, clean-tree
verification, and source-free cold-resume verification are required before
local commit closeout. No push, merge, deployment, release, or remote sync
claim is part of this packet.
