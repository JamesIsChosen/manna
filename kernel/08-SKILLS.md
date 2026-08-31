---
{
  "record_type": "KERNEL_CONTRACT",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Skills Governance"
}
---

# Skills Governance

**Skills are procedures, not authority.**

A SkillDefinition identifies:

- stable skill ID;
- version/revision;
- source/provenance/digest;
- compatible capabilities;
- Task purposes;
- required tools;
- context requirements;
- effect constraints;
- audit/compatibility state.

The Skill Router selects only the skills required by the current Task. Do not preload every skill.

A skill may recommend a procedure. It may not grant scope, capability activation, effect permission, review independence, retries, convergence capacity, or exceptions to security/STOP rules.
