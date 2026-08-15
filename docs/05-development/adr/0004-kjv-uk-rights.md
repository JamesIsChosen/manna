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

Manna is distributed globally under AGPL as an electronic artifact and
prints nothing. Whether the patent reaches electronic distribution is not settled
by its own wording, but "probably fine" is not a basis for a release decision.

## Options

**A. Request permission from Cambridge University Press.** They run a Bibles
rights-and-permissions process and grant KJV permissions routinely. Removes the
question entirely. Cost: time.

**B. Ship KJV as a library-pack module rather than bundling it.** Under ADR-0002
option E, the core artifact bundles a worldwide-public-domain translation and the
user loads KJV PCE themselves. Manna then never distributes the KJV.

**C. Bundle a worldwide-PD translation as the default.** ~~World English Bible~~
— **rejected by James, 2026-08-15.** WEB is a user-imported module if wanted, not
bundled cargo. ASV 1901 remains theoretically available but has not been accepted
either, and shipping a translation the user did not ask for is not the product.

**D. Bundle KJV anyway.** Enforcement against electronic non-commercial use is
effectively unheard of. This is a risk position, not a legal one, and it is
recorded here only so that choosing it is deliberate rather than accidental.

## Recommendation, revised 2026-08-15

**A — ask Cambridge University Press — is now the load-bearing route, not an
optional extra.**

With option C rejected, B loses its escape hatch. B only worked because some
other translation could ship in the core artifact while KJV arrived as an import.
If nothing else is bundled, then B means the app opens with **no Bible at all**
until the user imports one — which contradicts the offline-first promise and is
not a product.

So the position is now: **KJV PCE ships bundled in the core artifact**, and the
UK question gets answered directly rather than designed around.

## Consequences

- Getting written permission from CUP moves from "good hygiene" to **a release
  blocker for UK distribution**. It should be started early; it is a slow,
  asynchronous process and nothing else depends on it, so there is no reason to
  leave it late.
- Until that answer arrives, the risk is UK-scoped and concerns printing and
  importing printed copies — neither of which this project does.
- If CUP declines or does not respond, the choice narrows to bundling anyway as
  a recorded risk position (option D), or reopening the bundled-default question.
  Both are decisions for James, not defaults to drift into.

## Not legal advice

This records verified facts and options. The decision is James's.

## What would change our mind

A written permission from CUP, or advice that the patent does not reach
electronic distribution.
