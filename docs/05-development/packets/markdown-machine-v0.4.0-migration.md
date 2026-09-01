# PR packet: Markdown Machine v0.4.0 governance migration

## 1. Summary

This bounded governance task upgrades Manna’s project-local Markdown Machine
mechanics from v0.3.0 to the independently verified v0.4.0 release. It adds
only the exact v0.4.0 contract/runtime exports and project-specific migration
records, while preserving application source, product documents, assets,
configuration, accepted requirements, architecture, tests, identity, and Git
history. The next product route remains human appearance approval followed by
explicit Product Freeze.

## 2. Scope

In scope:

- exact v0.4.0 universal runtime and selected `software-product` capability;
- exact v0.4.0 semantic, governing, recovery, transition, operation-floor, and
  human-control exports under `.markdown-machine/contracts/`;
- verified origin pin, kernel manifest, explicit kernel/capability migration
  transitions, migration approvals, convergence policy, repository binding,
  sync intent, current state, and cold-resume handoff;
- preservation copies of the prior v0.3.0 output plan and compiled manifest in
  `.markdown-machine/history/`;
- this required packet.

Deliberately out of scope: application implementation, product redesign,
visual mock changes, project documentation outside this packet, assets,
configuration, tests, release artifacts, merge, push, deployment, release, or
history rewrite. The prior v0.3.0 human statement and project genesis remain
unchanged.

## 3. How to verify

Source pin verification:

```text
$ git rev-parse v0.4.0
48a1ec344851238366c708d75eb82fb9554cf125
$ git rev-parse v0.4.0^{tree}
9d92212201333c47598282e4f3865f04e050f07b
$ git ls-remote https://github.com/JamesIsChosen/markdown-machine.git refs/tags/v0.4.0
48a1ec344851238366c708d75eb82fb9554cf125 refs/tags/v0.4.0
```

Exact export comparison:

```text
$ exact export comparison over all 15 selected files
exact_exports=PASS
```

Project record and source-free checks:

```text
$ governance record front-matter validation
governance_records_json=PASS
$ git diff --check
diff_check=PASS
$ placeholder scan
placeholder_scan=PASS
$ distribution-root scan
no distribution roots found
```

Required project validation:

```text
$ npm ci
up to date, audited 1 package in 199ms
found 0 vulnerabilities

$ npm run lint
lint: ok

$ npm test
tests 6; pass 4; fail 2; skipped 0
Failing suites: test/browser.test.js and test/failure.test.js.

$ npm run build
build ok: manna.html (68826 bytes)
buildId: be2306cf76c813b655e04e3d6b5c521159a65b3630d28c80c5928853fccdca97
sha256: 600f7465613d9d235cd53ef5dc81216d90f7c26856af32afc404e5c42cf0d97f
```

## 4. Acceptance criteria

There is no roadmap item for this explicitly requested governance migration;
this section is therefore `N/A -- governed migration request, not a roadmap
item`. The request’s operative criteria are recorded in the migration approval
records and are satisfied by the exact-export, source-pin, preservation, and
front-matter checks above.

## 5. Test evidence

- Exact byte comparisons prove the selected v0.4.0 exports were copied without
  transformation.
- JSON front-matter parsing passed for all new governing records.
- The distribution-root scan found no copied `bootstrap`, `machine-source`,
  `project-compiler`, `project-runtime`, `verification`, or
  `release-evidence` tree.
- `npm run lint` and `npm run build` passed; the build did not alter tracked
  application output.
- `npm test` was run with zero skipped tests and failed two existing suites:
  the real-browser smoke suite and failure-fixture suite. Their failures are
  outside this governance-only scope and were not repaired by changing product
  code.
- A deliberate negative-test rerun of `test/failure.test.js` exited non-zero,
  but its assertions failed because the existing fixture diagnostics did not
  match their expected stderr text. This is recorded rather than claimed as a
  pass.

## 6. Assumptions made

- The project’s explicit agent contract controls closeout: commit locally,
  do not push or merge.
- The preserved v0.3.0 genesis and human statement are historical provenance,
  not rewritten v0.4.0 records; v0.4.0 authority advances through explicit
  `KERNEL_MIGRATE` and `CAPABILITY_MIGRATE` transitions.
- The existing Software/Product capability remains the only active capability.
- The last known remote-tracking head is recorded as `8d17a63`; network
  readback was unavailable during this run, so exact remote parity is not
  claimed.

## 7. What to scrutinise

Review the digest-bound transition chain, especially the preserved v0.3.0
genesis predecessor, exact v0.4.0 kernel/capability source identities, and the
intentional `LOCAL_AHEAD_REMOTE` sync classification. Also inspect that no
application or accepted product files are present in the diff.

## 8. Self-assessment

The migration is intentionally limited to governance mechanics. The known
validation limitation is the pre-existing failing browser/failure test suites;
this packet does not claim the full project suite is green. Remote publication
and exact readback remain a later authorized closeout step. No roadmap marker is
changed because this is not a roadmap item.

## 9. Docs updated

Updated only `.markdown-machine/` governance records and this required packet.
The current handoff records the existing design-verification frontier and does
not contradict the product specifications. No application, release, or
accepted-requirement document was changed.

## 10. Security impact

No runtime network, authentication, permissions, imported-module execution,
or user-data behavior changed. The migration adds explicit human-control,
contract-evaluation, recovery, and transition bindings. No new external host is
introduced at runtime. The failed test suite is disclosed rather than treated
as security evidence.

## 11. Device / platform matrix

| Platform | Result | Notes |
| --- | --- | --- |
| Desktop browser | N/A | Governance-only migration; no UI changed |
| Phone browser | N/A | Governance-only migration; no UI changed |
| Tablet browser | N/A | Governance-only migration; no UI changed |

## 12. Bundle / size impact

N/A -- the release artifact and application source were not changed by this
governance migration.
