# Manna — agent contract

Read this first. It is the contract for any agent working in this repository.

## What this project is

A comic-book-themed, offline-first Bible study workstation shipped as one
self-contained HTML file, running identically on phone, tablet, and desktop.

- Product spec: [docs/01-spec/product-specification.md](docs/01-spec/product-specification.md)
- Engineering spec: [docs/01-spec/engineering-specification.md](docs/01-spec/engineering-specification.md)
- Roadmap: [docs/05-development/ROADMAP.md](docs/05-development/ROADMAP.md)

## Hard constraints

Non-negotiable. A PR violating any of these cannot merge regardless of quality.

| Constraint | Why |
|---|---|
| **Single release file** | `dist/manna.html` requires no sibling `.js`, `.css`, `.svg`, `.woff`, `.wasm`, or `.json` |
| **No network at runtime** | No CDN, remote font, remote script, telemetry, or map tile |
| **No server required** | Must work opened directly from the filesystem |
| **Scripture is never fabricated** | Displayed verse text comes verbatim from an installed module. No inference, no reconstruction, no generated quotations |
| **Red-letter data is never inferred** | It comes from the module or a verified dataset, or it is absent and says so |
| **Imported modules are untrusted** | An imported Bible, commentary, or dictionary never gains executable capability |
| **Mobile is never deferred** | A feature that works only on desktop is not done |
| **No absolute developer paths in the artifact** | Checked by lint; fails the build |
| **Deterministic build** | Same source in, byte-identical artifact out |

## Selection architecture

The Study Desk is synchronized through a **central SelectionService**. Panes
subscribe to selection events; the Bible pane must never manipulate another
pane's DOM directly. This is mandatory and predates any implementation --
see the P0.1 packet, §17.

## How work is done here

One roadmap item, one branch, one PR, one packet.

1. Find the next `[ ]` item whose deps are `[x]`.
2. Branch `<item-id>-<slug>`.
3. Implement it. Nothing else.
4. Write the packet: `docs/05-development/packets/<item-id>-<slug>.md`
   per [docs/05-development/pr-packet.md](docs/05-development/pr-packet.md).
5. Self-review per [docs/05-development/review-protocol.md](docs/05-development/review-protocol.md).
6. Commit on the branch. Do not push. Do not merge.
7. End with a handoff block per [docs/05-development/handoff.md](docs/05-development/handoff.md).

## Validation commands

```bash
npm ci
npm run lint
npm test
npm run build
```

## Roadmap markers

- `[ ]` not started
- `[~]` implemented, awaiting independent verification
- `[x]` independently verified and merged

**The author never writes `[x]`.** Only an independent reviewer's PASS earns it.

## Forbidden shortcuts

Explicitly listed in the P0.1 packet §56 and they generalize:

- Claiming PASS while running only through a dev server
- Leaving JS/CSS as sibling files
- Loading remote fonts
- Fetching fixtures after startup
- Testing desktop only, or hiding mobile failures
- Coupling a pane's click handler directly to another pane's DOM

## Smallest change that works

Implement **the smallest change that satisfies the acceptance criteria, and
nothing more.** This is a scope rule, not a style rule — terse code that is
harder to read is a worse answer, not a better one.

- No abstraction for a single caller. Introduce the interface at the second caller.
- No configuration option, flag, or hook nobody asked for.
- No "we will need this later" code. Later is a roadmap item.
- No speculative error handling for conditions that cannot occur here.
- No new dependency where a few lines of existing code do the job.
- Prefer deleting over adding.
- Do not rewrite adjacent code you did not need to touch. Note it in the packet
  and file it as a roadmap item.

**The test a reviewer applies** to anything you add — file, function, parameter,
option, dependency: does it have a caller in this PR, and would removing it fail
an acceptance criterion? If both answers are no, it is a finding.

**This never overrides** a documented requirement, a hard constraint, test
coverage, input validation on untrusted data, or error handling for conditions
that can actually occur. "We do not need that yet" is never a reason to leave a
failure mode failing open.

## If the spec does not settle it

Stop and ask. Do not guess. A guessed decision on a security or Scripture-integrity
boundary is a blocking defect, not a judgement call.
