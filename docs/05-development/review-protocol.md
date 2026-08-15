# Review protocol

The contract for whoever reviews a PR packet -- human or agent.

**Every review ends in exactly one word: PASS or FAIL.** There is no third
option, no "approve with comments", no "LGTM with nits".

## The core rule

> **Any advisory, nit, concern, suggestion, or "worth considering later" is a FAIL.**

If it is worth writing down, it is worth fixing before merge.

This is deliberately stricter than normal review. "Approve with comments" is
where defects go to live: a comment attached to a merged PR is a comment nobody
actions. The author has moved on, the branch is gone, and the concern quietly
becomes permanent. Requiring a FAIL means every concern is either fixed or
explicitly dismissed with reasoning -- either way, someone decides.

If you genuinely think something is fine, say nothing about it and PASS. If you
are not sure, that uncertainty is itself a finding: write it down and FAIL.

## Verdict definitions

**PASS** -- every acceptance criterion is met and independently verified, all
hard constraints hold, and you have no findings of any severity.

**FAIL** -- anything else, including:

- An acceptance criterion is unmet, or reinterpreted to fit what was built
- An acceptance criterion **cannot be verified** -- you cannot pass what you cannot check
- A hard constraint is violated
- Any finding of any severity, including cosmetic
- The packet's claims do not reproduce on your machine
- Something is unclear enough that you would need to ask the author

FAIL carries no judgement about effort. It means "not yet".

## Before you decide

**Verify independently. Do not trust the packet.** Its purpose is to tell you
what to check, not to be the evidence.

Always:

```bash
git checkout <branch>
npm ci
npm run lint
npm test
npm run build
```

Then, beyond re-running what the author ran:

- **Vary the environment.** Build under a different path, timezone, and locale.
  Two builds in the same shell prove almost nothing about determinism.
- **Break something on purpose** and confirm it fails with a **non-zero exit
  code**, not just an error message. A build that throws but exits 0 passes CI silently.
- **Check acceptance criteria verbatim** against the roadmap, not as summarized
  in the packet.
- **Read the diff.** All of it.

## The report

Write `docs/05-development/packets/<item-id>-<slug>.review.md`, **committed to
the branch you are reviewing**, and post its contents as the PR review. A report
that exists only in your working tree is destroyed by the merge that follows it.

It must open with the verdict block:

```markdown
# Review: <item-id> -- <title>

**VERDICT: FAIL**

Findings: 3 (0 blocking, 3 advisory -- all must be addressed)
Reviewed commit: <sha>
Reviewed by: <agent/human>
Date: YYYY-MM-DD
```

Advisories are listed separately for clarity but **counted as must-fix**. A
report with zero findings and a FAIL is a contradiction; so is a report with
findings and a PASS.

### Required sections

1. **What I verified** -- commands run, with real output pasted, including the
   environment variations you tried.
2. **What I could not verify** -- and why. Every entry here is a finding.
3. **Acceptance criteria** -- verbatim from the roadmap, one row each.

   | # | Criterion | Met? | Evidence |
   |---|---|---|---|

4. **Findings** -- each with an ID, severity, location, observed, expected, and
   required action:

   ```markdown
   ### F1 -- Build does not fail on missing vendor directory

   **Severity:** advisory
   **Location:** scripts/build.js:47
   **Observed:** With `vendor/` removed, the build exits 0 and emits an empty bundle.
   **Expected:** Non-zero exit with a clear message, per fail-closed.
   **Required action:** Add an existence check and a test covering it.
   ```

   "This feels fragile" is not a finding. "With `vendor/` removed, `build.js:47`
   exits 0 instead of failing" is.

5. **Verdict rationale** -- one paragraph. On a FAIL, state exactly what would
   make it a PASS.

## Close the item out on the branch, before you merge

Two artifacts belong on the branch, committed before the merge:

1. Your `.review.md` report.
2. The roadmap marker, flipped from `[~]` to `[x]` -- **on a PASS only**.

**The author cannot flip that marker and should not try.** When the author opens
the PR, the criteria have not yet been *independently* verified. Only your PASS
establishes that.

Miss either artifact and it has nowhere to live, because `--delete-branch`
removes the only branch it could have gone on.

On a PASS, from the PR branch:

```bash
git checkout <branch> && git pull
# write your report, then flip the roadmap marker to [x]
git add docs/05-development/packets/<slug>.review.md docs/05-development/ROADMAP.md
git commit -m "review(<id>): record independent PASS and close item"
git push
gh pr merge <n> --merge --delete-branch
```

On a FAIL, commit the report the same way but leave the marker at `[~]`.

### Never open a pull request that only moves governance

A missed marker or a stale checkbox is not grounds for a PR of its own. Fold it
into the next PR that touches the repo, and note it in that PR's description.

## Reviewer conduct

**Independence is the whole point.** Do not read the packet's conclusions first
and then look for confirmation. Run the checks, form your own view, then compare.
A gap between the two is itself informative.

**Do not review style.** Formatting and naming are not findings unless they
violate a documented constraint.

**Unnecessary code IS a finding**, and is not style. AGENTS.md documents
smallest-change as a constraint, so the exception above applies. For anything
added — file, function, parameter, option, dependency — ask: does it have a
caller in this PR, and would removing it fail an acceptance criterion? If both
answers are no, raise it and say which question it fails.

Do not invert this into pressure to cut corners. Missing validation on untrusted
input, absent negative tests, and error handling for conditions that can occur
are findings in the other direction.

**Do not scope-creep.** A finding must relate to this roadmap item.

**Documentation is in scope.** A doc that now contradicts the code is a finding.

**Say what you did not check.** A review that silently omits an area is worse
than one that admits the gap.

## After a FAIL

1. The **author** fixes the findings. The reviewer never does -- that would make
   the reviewer an author and destroy the independence this exists for.
2. The author addresses **every** finding: fix it, or argue for dismissal with reasoning.
3. The author pushes and requests re-review.
4. The reviewer issues a **fresh verdict on the new commit**, not an amendment.

A dismissed finding needs the reviewer to agree. If author and reviewer
disagree, the human decides, and the reasoning becomes an ADR if structural.

## Use a fresh session

An agent reviewing its own work in the same context is not reviewing, it is
re-reading. Use a different session from the one that wrote the code, and give
it its own checkout:

```bash
git worktree add ../<project>-review-<item-id> <branch>
```
