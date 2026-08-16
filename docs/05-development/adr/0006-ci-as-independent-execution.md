# ADR-0006 — CI may satisfy the reviewer's independent-execution requirement

**Status:** accepted
**Date:** 2026-08-15

## Context

`review-protocol.md` requires the independent reviewer to run the canonical
sequence itself: `git checkout`, `npm ci`, `npm run lint`, `npm test`,
`npm run build`, and to vary path, timezone and locale.

The P0.1 review returned **F6 — blocking review gate**: the reviewer could not
execute anything. Its runtime failed at `Could not resolve host: github.com`, and
its GitHub token returned `403 Resource not accessible by integration` on both
write paths.

That was not a transient fault. The reviewer was a browser-hosted GPT session,
whose sandbox is network-isolated by design and whose connector had read scope
only. **That reviewer will fail F6 on every future review**, regardless of code
quality.

The project therefore faces a choice it should make deliberately rather than by
drift: keep a cross-model reviewer that cannot execute, or switch to a reviewer
that can execute but shares the authors' model family.

Cross-model independence has already proved its worth. The dead
`SelectionService` wiring — 45 tests green, production path broken — survived
Helmsman's own review gate and was caught by the GPT reviewer reading the code.
An agent from the same family as the author shares its blind spots; that is
precisely how the defect got as far as it did.

Meanwhile GitHub Actions ran the full canonical sequence on neutral
infrastructure at the exact reviewed commit and reported success for both the
`verify` and `determinism` jobs. The reviewer saw this and correctly refused to
treat it as equivalent, because the protocol did not permit it.

## Decision

Amend `review-protocol.md` so a reviewer that cannot execute locally may satisfy
the command-execution requirement using a CI run — **only** under every condition
below. All of them are mandatory; failing any one returns the reviewer to
"cannot verify", which is a finding.

## The amendment — add to `review-protocol.md` under "Before you decide"

> ### When the reviewer cannot execute locally
>
> A reviewer whose environment cannot check out or run the project may satisfy
> the command-execution requirement with a CI run, if and only if **all** of the
> following hold. Record each one in the report; a missing item is a finding.
>
> 1. **Exact commit.** The CI run's `head_sha` equals the reviewed commit, in
>    full. Not the branch tip, not "latest on the branch" — the same forty
>    characters. Record the run ID.
> 2. **Audit the workflow.** Read `.github/workflows/*.yml` **at the reviewed
>    commit** and confirm it actually runs the canonical commands. The workflow
>    is author-controlled, so an unaudited CI pass proves only that the author's
>    chosen commands succeeded. State in the report which commands you confirmed.
> 3. **No silent skips.** Confirm no required test was skipped. **A skipped test
>    is not a passed test.** Tests that self-skip on a missing dependency —
>    a browser, a device, an optional binary — report success while checking
>    nothing. Verify the skip count is zero for every required suite, or name
>    each skip and treat it as unverified.
> 4. **Environment variation.** The protocol's vary-path/timezone/locale
>    requirement must be met by a CI job that demonstrably does so, or recorded
>    as not performed.
> 5. **Adversarial checks stand.** Deliberately breaking things and confirming
>    non-zero exits cannot be delegated to a green CI run. Where the reviewer
>    cannot run them, it inspects the failure fixtures' assertions and states
>    plainly that it could not execute them. That gap is a finding unless CI
>    itself executes those fixtures.
> 6. **CI never covers manual criteria.** Clean-directory execution, offline
>    operation, real browsers, real devices, and any human-observed behaviour
>    remain outside CI's reach and must be recorded separately.
>
> CI corroboration is a substitute for the reviewer's *hands*, never for the
> reviewer's *judgement*. A reviewer that only reads a green checkmark has not
> reviewed anything.

## Rationale

Executed on neutral infrastructure at a pinned commit, CI is arguably a
**stronger** execution witness than a reviewer running commands in its own
sandbox: it is reproducible, logged, and not under the reviewer's control either.
The real risk is not that CI is untrustworthy — it is that CI is *author-defined*
and that green can mean "nothing ran". Conditions 2 and 3 exist to close exactly
those two holes.

Condition 3 is not hypothetical. On 2026-08-15 this project's browser tests were
found to `skip` silently when no Chromium-family binary is present, reporting
success while performing no checks — in a suite whose entire purpose was catching
a defect that made the artifact render a blank page.

## Consequences

- The project keeps a cross-model independent reviewer, which has already caught
  a blocking defect that same-family review missed.
- Reviewers must now audit the CI workflow, which is work, and correctly so.
- Silent skips become a named, checkable failure mode rather than an invisible one.
- F6 as written stops being an automatic FAIL for execution-less reviewers, while
  the substance it protected is preserved.
- If CI is weakened, a review that follows condition 2 catches it. If a reviewer
  skips condition 2, its own report is deficient.

## What would change our mind

Evidence that reviewers are treating CI as a rubber stamp rather than auditing
it — for example a review citing a run ID without naming the commands it
confirmed. If that happens, revoke this and require local execution, accepting
the loss of cross-model review.
