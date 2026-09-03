# Markdown Machine v0.7.0 upgrade packet

## Scope

Upgrade the existing admitted Manna Markdown Machine lineage from v0.6.1 to
the exact released v0.7.0 distribution. Product source, accepted design work,
unfinished Tasks, and historical governance remain unchanged.

## Source binding

- Repository: `JamesIsChosen/markdown-machine`
- Release: `v0.7.0`
- Commit: `ac8746a5586991994e659effd7613e656e33e965`
- Tree: `6da2b38377b3cc5ae5f7f5d1f217dd2886d19285`
- Independently recomputed ContentSetDigest: `12cc1a351c158ba954aa192f8bd902ecdf3f1d0cecebf01ab36354c30863e1f2`
- Evaluated Markdown files: `64`
- Selected capability: `software-product` (unchanged digest)

The source was read through `00-START-HERE.md`, `bootstrap/BOOTSTRAP.md`, the
required compiler/reconciliation/runtime contracts, and the v0.7 acceptance
protocol. The source distribution is not copied into Manna.

## Upgrade path

Manna has one admitted v0.6.1 singleton lineage. The lawful operation is the
ordinary single-parent `KERNEL_MIGRATE`, from the v0.6.1 sequence-5 authority
head to `manna-v070-kernel-migrate` at sequence 6. No second Genesis, adoption,
legacy bridge, or fabricated historical Task/Attempt/review was created.

## Preservation and routing

- Existing open Tasks `V1-UI-UX-design-verification` and
  `P0.2-offline-security` remain current and prospective.
- Existing product changes and the current design-verification horizon remain
  untouched.
- Changed v0.6.1 validation contracts are retained byte-identically under
  `.markdown-machine/history/aeacf0faf04cb515acf6c5451f96be381e592bc558ce9bbde17fd88ec4ab8c2c/`.
- The prior Origin and KernelManifest are also retained there because immutable
  pre-migration authority statements and Genesis references must remain
  resolvable during source-free recovery.
- The former root `AGENTS.md` is retained there as historical evidence. The
  active root file is now only a thin MM router and carries no governance state.

## Review and closeout

This is a kernel migration, not an adoption; v0.7.0 requires no independent
adoption review for this path. The child closure is validated locally against
the six exact v0.7 exports, with all typed references and contract identities
checked before publication. The repository binding is explicitly revised to
the dedicated upgrade branch because the former v0.6.1 persistence branch was
deleted after integration; Git topology is recorded as evidence, not authority.
