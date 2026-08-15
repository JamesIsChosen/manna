# ADR-0004 — KJV distribution and UK letters patent

**Status:** OPEN — must be resolved before first public release
**Date:** 2026-08-15

## Context

KJV Pure Cambridge Edition is the chosen default translation. The KJV is public
domain worldwide **except the United Kingdom**, where letters patent issued by
King James — with no expiration — reserve printing rights to Cambridge University
Press, Oxford University Press and Collins.

Verified wording: the restriction covers **printing the translation in the UK or
importing printed copies into the UK**. The patent has no effect outside the UK.

Codex Bible is distributed globally under AGPL as an electronic artifact and
prints nothing. Whether the patent reaches electronic distribution is not settled
by its own wording, but "probably fine" is not a basis for a release decision.

## Options

**A. Request permission from Cambridge University Press.** They run a Bibles
rights-and-permissions process and grant KJV permissions routinely. Removes the
question entirely. Cost: time.

**B. Ship KJV as a library-pack module rather than bundling it.** Under ADR-0002
option E, the core artifact bundles a worldwide-public-domain translation and the
user loads KJV PCE themselves. Codex Bible then never distributes the KJV.

**C. Bundle a worldwide-PD translation as the default.** World English Bible
(explicitly released to the public domain) or ASV 1901. Removes the issue at the
cost of the KJV not being the out-of-box default.

**D. Bundle KJV anyway.** Enforcement against electronic non-commercial use is
effectively unheard of. This is a risk position, not a legal one, and it is
recorded here only so that choosing it is deliberate rather than accidental.

## Recommendation

A and B together. Ask CUP, and design so the answer does not block the release:
the library-pack architecture already lets KJV PCE arrive as the user's first
import rather than as bundled cargo.

## Consequences

If B is adopted, the core artifact needs a bundled default translation anyway
(option C), because an empty Bible reader is not a product.

## Not legal advice

This records verified facts and options. The decision is James's.

## What would change our mind

A written permission from CUP, or advice that the patent does not reach
electronic distribution.
