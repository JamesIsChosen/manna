---
{
  "record_type": "STATE_PROJECTION",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Manna Current State",
  "projection": true,
  "project_id": "b02652666e7c616794244ab8f0f31638",
  "authority": "state/AUTHORITY-CHAIN.md",
  "intent": "state/INTENT-BASELINE.md",
  "capabilities": "state/CAPABILITIES.md",
  "lifecycle": "state/LIFECYCLE.md",
  "convergence": "state/CONVERGENCE.md",
  "active_task": "tasks/ACTIVE.md",
  "next_legal_transition": "TASK_AUTHORIZE",
  "runtime_status": "existing P0.1 app preserved; no P0.2 implementation started by this bootstrap",
  "verification_status": "45 non-browser tests pass; 4 native browser checks remain unavailable on this host"
}
---

Manna is bootstrapped as an SMPM-1 project around an existing implementation. The next governed work is offline/network hardening, not a rewrite of the existing app.

The native browser evidence remains open because no Chromium-family executable is installed on this host and the in-app browser blocks direct `file://` navigation. No workaround or browser-policy bypass was used.
