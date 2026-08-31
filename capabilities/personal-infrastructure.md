---
{
  "record_type": "CAPABILITY_DEFINITION",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Personal Infrastructure"
}
---

# Personal Infrastructure

## Interview focus

Desired services/outcomes, users/access, local/private posture, remote access, reliability/downtime, backup/recovery, privacy/security, physical devices/locations, human-only physical actions, external services, cost boundaries, and run horizon.

Discover machines, OSs, current services, and topology safely where permitted rather than asking the human to transcribe discoverable facts.

## Lifecycle fragment

```text
Intent
 -> Passive inventory
 -> Desired state
 -> Topology/policy
 -> Change plan
 -> Risk/security review
 -> Controlled execution
 -> Verification
 -> Recovery readiness
 -> Operational state
```

Destructive, credential-bearing, public-network, or physical effects require their exact OperationContract and human/effect authority envelope.
