---
{
  "record_type": "KERNEL_CONTRACT",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Single Current Handoff"
}
---

# Handoff

The project exposes exactly one human-facing continuation entry: `handoff/START-HERE.md`.

The handoff is a `PROJECTION`, never positive authority.

It should project/reference:

- ProjectIdentity;
- kernel version/content identity;
- authority epoch/sequence/digest;
- fork/cutover state;
- IntentBaseline;
- LifecycleGraphRevision;
- Run Horizon;
- active capabilities;
- active Tasks/Attempts;
- ConvergenceRoots and continuity/tranche state;
- pending InboxItems;
- active children;
- effect/resource uncertainty;
- enforcement limitations;
- next legal transition.

Every consumer must independently recover canonical authority/currentness before governing action. A stale copied handoff becomes navigation evidence only.
