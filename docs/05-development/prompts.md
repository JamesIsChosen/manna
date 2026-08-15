# Kickoff prompts

Copy-paste prompts for starting a session. Every one works from a cold session:
the repo carries the context, the prompt just points at it.

> You should rarely need this file. Every session ends with a handoff block
> containing the exact prompt for the next one, placeholders already filled in.
> This is the fallback for starting cold.

## The loop

```
implement -> commits, review gate, opens the PR, hands you the review prompt
review    -> PASS: merges, hands you the next-item prompt
             FAIL: hands you the fix prompt, then the re-review prompt
fix       -> pushes, hands you the re-review prompt
```

## Next item

> Read AGENTS.md and start the next roadmap item.

That is the whole prompt.

## Specific item

> Read AGENTS.md and implement roadmap item <item-id>. Follow the packet format
> in docs/05-development/pr-packet.md. Do not merge. Finish with the handoff block.

## Review

**Use a fresh session, not the one that wrote the code.**

> Read `docs/05-development/review-protocol.md`, then review branch `<branch>` as
> an independent reviewer. Verify every claim yourself -- do not take the packet's
> word for anything. Build under a different path, timezone, and locale.
> Deliberately break things and confirm they fail closed with non-zero exit codes.
> Check the acceptance criteria verbatim against the roadmap. Write your report to
> `docs/05-development/packets/<item-id>-<slug>.review.md`, end with a PASS or FAIL
> verdict -- **any finding of any severity is a FAIL** -- and **merge the PR
> yourself if it passes**.

## Re-review after a FAIL

> Read `docs/05-development/review-protocol.md` and the existing review at
> `docs/05-development/packets/<item-id>-<slug>.review.md`. The author has pushed
> fixes. Issue a **fresh verdict on the new commit** -- not an amendment. Re-check
> every previous finding and look for new ones introduced by the fixes. Append a
> new verdict block; do not edit the old one.

## Fixing a FAIL

Given to the author's session, not the reviewer's:

> Read the review at `docs/05-development/packets/<item-id>-<slug>.review.md`.
> Address every finding -- fix it, or argue it should be dismissed and say why.
> Advisory findings must be fixed like any other. Update the packet to describe
> what changed, and hand me the re-review prompt.

## Notes

**Prompts are deliberately short.** If a prompt starts growing to carry context,
that context belongs in AGENTS.md or the roadmap instead -- a prompt you have to
remember to include is a prompt you will eventually forget.

**One agent per working tree, always.** Concurrent git access fails nastily:
`add` and `commit` fail while `push` succeeds, publishing empty branches that
look like saved work.
