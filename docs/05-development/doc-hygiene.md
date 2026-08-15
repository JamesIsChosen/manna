# Doc hygiene

**A stale doc is a defect, and a worse one than a missing doc.** A missing doc
leaves a reader uncertain. A stale doc makes them confident and wrong.

## Rules

- **One fact, one home.** State something in exactly one file; link to it from
  everywhere else. Duplicated blocks drift, and then the reader has two answers.
- **Behaviour and its doc change in the same PR.** They cannot drift apart if
  they cannot be separated.
- **No numbers in prose that will change.** Counts, sizes, and versions belong in
  generated output or a single status file, not scattered through paragraphs.
- **Every link resolves.** A broken internal link is a contradiction.
- **Dated docs carry a review date.** If a doc is touched, its date updates.

## In scope for review

A reviewer raises each of these as a finding:

- A doc that now contradicts the code
- A fact restated in two places instead of linked
- A number in prose that no longer matches reality
- A broken internal link
- A doc touched by this change without its review date updated
