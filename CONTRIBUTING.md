# Contributing

## Before you write code

**Read the spec and the ADRs.** Most "why on earth is it built like that"
questions have a written answer. If an ADR is wrong that is worth discussing --
but argue with the recorded reasoning rather than around it.

**Open an issue first for anything non-trivial.** The design has constraints
that are not obvious, and it is frustrating for everyone to reject a large PR on
architectural grounds.

## Hard constraints

Non-negotiable. A PR violating any of these cannot be merged regardless of how
good it is otherwise. See [AGENTS.md](AGENTS.md).

## Development

```bash
npm ci
npm run verify
```

## Pull requests

- **One logical change per PR** -- and for roadmap work, exactly one roadmap item.
- Describe what breaks if you are wrong.
- Include a PR packet per [docs/05-development/pr-packet.md](docs/05-development/pr-packet.md).
- Commit messages: imperative mood, explain *why* in the body.
  `fix: reject import with invalid header` beats `fixes`.

## How review works

Reviews follow [docs/05-development/review-protocol.md](docs/05-development/review-protocol.md)
and end in a binary **PASS or FAIL**. There is no "approve with comments", and
**any finding of any severity -- including cosmetic -- is a FAIL.**

This is stricter than typical projects, deliberately. A comment attached to a
merged PR is a comment nobody actions; requiring a FAIL means every concern is
either fixed or explicitly dismissed with reasoning.

FAIL carries no judgement about effort. It means "not yet". Fix the findings,
push, and request a fresh verdict.

## Architecture decisions

Making a structural decision? Add an ADR in
[docs/05-development/adr/](docs/05-development/adr/). Short: what we decided,
what else we considered, why this, and what would change our mind. Six months
from now it is the difference between a paragraph and an archaeology project.

## Code of conduct

Be decent. Assume good faith. Critique code, not people.
