# Handoff blocks

**Every session ends with a handoff block. No exceptions.**

The human should never memorize a command, work out what happens next, or search
these docs. They copy, they paste, they move on.

**Fill in every placeholder.** You know the branch, the PR number, the item ID,
the packet path. Leaving `<branch>` for the human to substitute defeats the point.

A session that ends without a handoff block is a contract violation.

## Who does what

| Action | Who |
|---|---|
| Branch, commit | Implementer |
| Push, open the PR | After the review gate passes |
| Merge on PASS | Independent reviewer |
| Merge on FAIL | Nobody. It gets fixed first |
| Anything needing hardware, credentials, or judgement | The human, via a section 0 block |

**If a command cannot be run** -- unauthenticated CLI, permission refused,
network blocked -- do not silently skip it. Put the exact command in a section 0
block with real values filled in, and say what is blocked until it runs.

## 0. Action required from you

**When present, this goes FIRST -- above everything else.** Not after four
paragraphs of summary. If the human is blocked, they need to know before they
read anything else.

```markdown
# Action required from you

**PASS** -- but <item> touches <security-critical area>, so it wants your eyes
before merging.

​```bash
gh pr merge 14 --merge --delete-branch
git checkout main && git pull
​```

Worth a look at the Files Changed tab first: 6 files, all under `src/`.
```

## 1. Item complete

```markdown
## Handoff -- <item-id> complete

**Pushed and PR opened:** <url>

**Paste into a NEW session:**

> Read `docs/05-development/review-protocol.md`, then review PR #<n> (branch
> `<branch>`) as an independent reviewer. Verify every claim yourself -- do not
> take the packet's word for anything. Build under a different path, timezone,
> and locale. Deliberately break things and confirm they fail closed with
> non-zero exit codes. Check the acceptance criteria verbatim against the
> roadmap. Write your report to
> `docs/05-development/packets/<item-id>-<slug>.review.md`, end with a PASS or
> FAIL verdict -- any finding of any severity is a FAIL -- and **merge the PR
> yourself if it passes**.

Give the reviewer its own checkout:
`git worktree add ../<project>-review-<item-id> <branch>`

**Tell the reviewer:** <anything ambiguous, or a result readable two ways>
```

## 2. Review -- PASS

```markdown
## Handoff -- VERDICT: PASS - merged

PR #<n> merged to `main`, branch deleted. `main` is now at `<sha>`.

**Paste into a NEW session:**

> Read AGENTS.md and start the next roadmap item.

Next up is **<item-id> -- <title>**.
```

## 3. Review -- FAIL

```markdown
## Handoff -- VERDICT: FAIL (<n> findings)

**Do not merge.**

**1. Fix it** -- new session:
> Read the review at `docs/05-development/packets/<item-id>-<slug>.review.md`.
> Address every finding -- fix it, or argue it should be dismissed and say why.
> Advisory findings must be fixed like any other. Update the packet to describe
> what changed, and hand me the re-review prompt.

**2. Then re-review** -- a fresh session again:
> Read `docs/05-development/review-protocol.md` and the existing review at
> `docs/05-development/packets/<item-id>-<slug>.review.md`. The author has pushed
> fixes. Issue a fresh verdict on the new commit -- not an amendment. Re-check
> every previous finding and look for new ones introduced by the fixes.

**Must change:** <one line per finding>
```

## 4. Stopped

```markdown
## Handoff -- stopped at <item-id>

**Why:** <stop condition>

**State:** branch `<branch>`, <n> commits, working tree clean.

**To resume:** <exact next action, or the decision needed from you>
```

## Rules that apply to all of them

**Placeholders filled in.** Always.

**Handoff last.** Nothing after it.

**One session per checkout.** If handing off while this session may still be
alive, include the `git worktree add` command.

**Say what you are unsure about.** The most valuable line in any handoff.
