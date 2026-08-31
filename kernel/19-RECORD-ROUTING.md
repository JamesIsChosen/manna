---
{
  "record_type": "KERNEL_CONTRACT",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Record Routing and Storage"
}
---

# Record Routing

The machine should avoid context bloat by separating record storage from projections.

## Write rules

- Immutable authority/history/evidence records: create new file; never edit old bytes.
- Append-only execution records: append only where the record contract explicitly allows it; otherwise create successor records.
- Current-state/handoff/inbox/task projections: replace/regenerate from canonical records.
- Working drafts: may change until promoted to an immutable candidate contract.

## Positive-authority recovery

Never scan modification times or choose the numerically largest filename. Recover candidate transitions by ProjectIdentity/domain, validate SMF/schema, ancestry, admission, publication/currentness, fork cutover, then derive one usable current head or BLOCK.

## Context routing

Use projection/index surfaces to locate exact records, then load only the exact records/sections required by the current Task/ReviewPurpose. Do not dump whole directories into Worker context.
