# ADR-0007 -- Diagnostics shows the blanked-field digest; the true SHA-256 lives in the sidecar

**Status:** accepted
**Date:** 2026-08-15

## Context

P0.1 criterion 12 required:

> Build metadata (app version, build ID, artifact SHA-256) is visible in
> Diagnostics without exposing local paths.

The build computes two distinct hashes:

- `manifest.sha256` — SHA-256 over the final `dist/manna.html` bytes (the "true"
  artifact hash);
- `sha256Embedded` — SHA-256 over the artifact with its own digest field blanked.

Diagnostics runs inside the browser at runtime and can only display a value the
build embedded into the HTML. But a self-contained file cannot contain its own
SHA-256: embedding the true hash changes the bytes, which changes the hash — a
self-reference with no fixed point. The build therefore embeds `sha256Embedded`
and records the true `sha256` in sidecar files (`BUILD-MANIFEST.json`,
`manna.html.sha256`).

Independent review finding R2-F1 flagged that criterion 12, taken literally,
demands the impossible: the true final-byte SHA-256 visible in Diagnostics. The
field had already been relabelled truthfully (`SHA-256 (DIGEST FIELD BLANKED)`),
but the criterion itself still said "artifact SHA-256", so the requirement and
the implementation disagreed.

## Decision

Amend criterion 12 to require the blanked-field digest — the honest value the
build can embed — to be visible in Diagnostics, and the true final-byte artifact
SHA-256 to be recorded in the sidecar. Keep the accurate `SHA-256 (DIGEST FIELD
BLANKED)` label and its explanatory note.

## Alternatives considered

| Option | Why not |
|---|---|
| Show the true final-byte SHA-256 in Diagnostics | Impossible: a file cannot contain its own SHA-256. Embedding the value changes the bytes and therefore the hash; there is no fixed point. |
| Load the sidecar at runtime to display the true hash | Violates criterion 1 (no sibling runtime assets) and criterion 2 (copying only `manna.html` leaves no sidecar to read). |
| Reinterpret criterion 12 in the packet without amending it | Forbidden by `review-protocol.md`: a criterion may not be reinterpreted to fit what was built. |

## Consequences

- Criterion 12 now requires exactly what a single-file build can truthfully
  provide: blanked-field digest in Diagnostics, true hash in the sidecar.
- The `SHA-256 (DIGEST FIELD BLANKED)` label and its note become correct
  statements, not a workaround.
- No build or Diagnostics code change is required; this is a
  requirements-accuracy fix, not an implementation change.

## What would change our mind

If Manna stops shipping as a single self-contained file — for example a served
bundle that always has a manifest alongside it — then the true hash could be
read from that manifest and criterion 12 could be restored to require it in
Diagnostics.
