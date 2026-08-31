---
{
  "record_type": "KERNEL_CONTRACT",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Intent and Change Inbox"
}
---

# Intent / Change Inbox

**Inbox receipt is candidate intent, not executable authority.**

Provenance classes:

- `HUMAN_REQUEST`
- `AGENT_OBSERVATION`
- `REVIEW_FINDING`
- `SECURITY_FINDING`
- `EXTERNAL_CHANGE`
- `DEPENDENCY_CHANGE`

An agent observation cannot be relabeled as a human request.

## Dispositions

- `RECEIVED`
- `TRIAGED`
- `IMPACT_ANALYZED`
- `ACCEPTED_FOR_INCORPORATION`
- `DEFERRED`
- `REJECTED`
- `DUPLICATE`
- `ALREADY_SATISFIED`
- `NEEDS_HUMAN_DECISION`
- `SUPERSEDED`

`ACCEPTED_FOR_INCORPORATION` still does not authorize execution.

## Mandatory bridge

```text
InboxItem
 -> ImpactAnalysis
 -> candidate IntentBaseline/Lifecycle revisions
 -> admitted AuthorityTransition
 -> candidate TaskContractRevision
 -> admitted TASK_AUTHORIZE transition
 -> execution
```

## Active-work behavior

Capture the request immediately. Continue the current bounded Task only if the new request does not change current safety, authority, or explicit priority. Triage at the next controlled synchronization point.

Material changes return to the earliest affected lifecycle state. Preserve unaffected accepted work.
