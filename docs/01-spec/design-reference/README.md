# Design reference — NOT PRODUCT CODE

The interactive prototype behind
[../study-desk-design.md](../study-desk-design.md).

**Do not lift this into `src/`.** It is a look-and-behaviour reference only.

- `Study Desk.dc.html` — the prototype. Open it in a browser. Its logic objects
  (`COM`, `XREF`, `PEOPLE`, `TOPICS`, `NOTES`, `WORDS`, `PLACES`) are the
  **fixture contract for P0.1**.
- `support.js` — prototype runtime (`dc-runtime`). Requires `window.React`.
  Explicitly not part of the product; R1 and R4 forbid it.

The prototype loads `support.js` as a sibling file, which the product may not do.

**Its Scripture text is not authoritative.** Verse 15 drops the KJV's
supplied-word brackets present in the source module — see
[../../../fixtures/matthew-4-12-17.md](../../../fixtures/matthew-4-12-17.md).
Take Scripture from the fixture record, take everything else from here.
