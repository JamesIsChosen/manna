# Markdown Machine v0.6.1 adoption packet

## Scope

This packet records a corrected direct governed v0.6.1 adoption successor
constructed from the exact pre-adoption Manna design tip. Product source and
product decisions are unchanged. The failed v0.5.1 migration and failed
v0.6.0 adoption remain separate, reachable historical evidence and are not the
adoption subject.

## Source identity

- Release tag: `v0.6.1`
- Commit: `01134226bd9d9d17215a34e18e1044eb5279a61d`
- Tree: `77673dc1fad54ee8daafe589d40217989d8ea003`
- Markdown files: `63`
- Markdown bytes: `257954`
- ContentSetDigest: `aeacf0faf04cb515acf6c5451f96be381e592bc558ce9bbde17fd88ec4ab8c2c`
- Independent recomputation: identical digest from a separate Python implementation
- Release digest occurrence in evaluated Markdown set: `0`
- Release commit occurrence: `0`
- Release tree occurrence: `0`
- Reviewed candidate digest occurrence: `1`, as permitted release evidence

The digest follows `bootstrap/BOOTSTRAP.md`: every regular Markdown file,
UTF-8-byte path ordering, per-file SHA-256, two-space ASCII separator, LF row
termination, and final SHA-256.

## Pre-adoption base

- Commit: `018284a7099bdb08943ed4d77b19376165ada62e`
- Tree: `2c8476f8dd1b0ee078e7895a79ccec15b9480a42`
- Branch: `codex/manna-v1-ui-ux-design-verification`
- Governance Markdown files retained: `25`
- Governance ContentSetDigest: `2162e3e9e0f4d11c80d553f6bea54207fdaa46116ceff42f9cd5a549c7608a15`
- Retention root: `.markdown-machine/history/2162e3e9e0f4d11c80d553f6bea54207fdaa46116ceff42f9cd5a549c7608a15/`

The existing draft design branch was fast-forwarded from `8d17a63a…` to this
exact tip without merging or adding adoption work. The successor branch starts
from this tip, so its adoption diff is isolated from the pending design PR. The
retained tree is byte-identical to the `.markdown-machine` tree at that commit;
the failed migration branches remain separately reachable and are preserved as
historical evidence.

## Human authority

The exact current human instruction is captured without paraphrase:

`Update Manna to the released Markdown Machine v0.6.1, preserve its still-applicable product and design intent, current DESIGN_VERIFICATION horizon, repository binding, and historical governance evidence, and do not claim Product Freeze or advance product implementation.`

The `captured_at` value records agent observation time; the original message
event timestamp is unavailable. The same exact sentence is typed for the
required migration-approval and intent-acceptance roles; it is one human event,
not a fabricated second confirmation. The continuity assessment was freshly
observed at `2026-09-02T15:28:27Z`.

## Adoption decision

The exact pre-adoption Manna subject is admitted by its content-addressed
25-file governance tree. The old-law probe remains `NO_PROVABLE_LINEAGE`, with
historical status `HISTORICAL_UNVERIFIED`; no prior lawful migration contract
was recovered. The lawful operation is direct `ADOPTION`, not
`KERNEL_MIGRATE`, with one new epoch-0/sequence-0 positive v0.6.1 Genesis. No
legacy bridge or historical convergence capacity is reused.

## Product and lifecycle boundary

The current lifecycle remains `DESIGN_VERIFICATION`. Product Freeze,
architecture acceptance, implementation authority, release readiness, and
project completion are not claimed. The next lawful human-facing continuation
is appearance review followed by an explicit Product Freeze request before
implementation.

## HANDOFF correction

The v0.6.1 runtime and recovery exports are exact release bytes. Closeout is
performed as one terminating projection sequence: durable authority first,
then a final commit changing only `.markdown-machine/HANDOFF.md`. No recursive
rewrite is permitted.

## Review boundary

This is an author-created adoption packet. It does not manufacture an
independent acceptance result. One independent final finding-closure review
remains required; the successor must not be merged by this task.

## F5 correction

The current V1 UI/UX and P0.2 Task contracts bind their historical project
context to the exact retained `2162e3e9…` namespace, using the retained Task
digests recorded by `HISTORY-MANIFEST.md`. The P0.2 Task's pre-existing P0.1
context was also corrected to the existing source path
`docs/01-spec/p0.1-implementation-packet.md` and its exact digest. An explicit
validation pass resolves every `project_context`, `subtree_context`, and
`exact_path_context` entry for both current Tasks and compares the bytes to its
declared `source_digest`.
