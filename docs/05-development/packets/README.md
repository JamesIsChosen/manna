# Packets

One file per roadmap item, named to match its branch:

```
<item-id>-<slug>.md          the PR packet, written by the implementer
<item-id>-<slug>.review.md   the review report, written by the reviewer
```

Both are committed **to the branch under review**, before the merge. A report
that exists only in a working tree is destroyed by the merge that follows it.

Per-item paths, not a single rotating file: packets are the permanent audit
trail, and a shared path causes a merge conflict on every stacked branch.

Formats: [../pr-packet.md](../pr-packet.md), [../review-protocol.md](../review-protocol.md).
