---
{
  "record_type": "BOOTSTRAP_ENTRY",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Bootstrap Entry"
}
---

# 00 — Bootstrap

This is the universal entry point for every **new** project instantiated from this package.

A resumed project does not redo bootstrap or the universal interview merely because the agent/session changed. Resume through `handoff/START-HERE.md` and the cold-recovery rules in `kernel/11-STOP-RECOVERY.md`.

## 1. Bind the exact human-selected artifact

Before creating project authority, compute a deterministic **ContentSetDigest** over the extracted package:

1. include every regular `.md` file in this package;
2. sort canonical relative paths by UTF-8 byte order;
3. for each path, compute SHA-256 over exact file bytes;
4. construct exact ASCII lines: `<lowercase_sha256>  <canonical_relative_path>\n`;
5. SHA-256 the concatenation of those lines.

The current human instruction selecting this package plus the resulting ContentSetDigest forms `DIRECT_HUMAN_ARTIFACT_SELECTION/v1` bootstrap provenance unless a stronger externally anchored bootstrap assurance is available.

**The agent may not invent a different bootstrap constitution after artifact selection.** The selected ContentSetDigest commits to `kernel/04-BOOTSTRAP-TRUST.md`, the GenesisAdmissionProfile, SMF rules, schema rules, and the rest of this package.

If package bytes change before ProjectGenesis is admitted, recompute the digest and require a current human/bootstrap trust event for the changed artifact.

## 2. Establish pre-chain bootstrap trust

Read completely:

- `kernel/04-BOOTSTRAP-TRUST.md`
- `kernel/01-SMF1.md`
- `kernel/02-SCHEMA-EVALUATION.md`
- `kernel/03-AUTHORITY.md`

ProjectGenesis must be validated using the bootstrap constitution committed by the human-selected artifact or a stronger separately trusted bootstrap profile. Project records cannot self-authorize genesis.

## 3. Safe discovery

Before asking the human for facts, safely discover what the environment/project can establish without crossing an unauthorized effect boundary.

Classify unknowns as:

- `DISCOVERABLE_FACT`
- `HUMAN_INTENT`
- `MIXED`
- `UNKNOWN`

Discover facts. Ask the human only for human-owned intent gaps.

## 4. Preliminary capability hypotheses

Read `kernel/18-CAPABILITIES.md` and `capabilities/README.md`.

Classify relevant capabilities only as `HYPOTHESIZED` or `DISCOVERED`. Do not activate them yet.

## 5. Universal interview

Every new project undergoes governed intent discovery.

Use the universal interview in `kernel/14-LIFECYCLE.md` and capability-specific interview requirements from applicable capability definitions.

A detailed human prompt may pre-answer most requirements. If so, synthesize what was understood and ask only what remains materially unresolved.

## 6. Stage-sufficient intent

Do not demand omniscience. Resolve only the IntentRequirements that are required before the next reachable lifecycle/effect frontier.

States are defined in `kernel/14-LIFECYCLE.md`.

## 7. ProjectGenesis

Once bootstrap trust, ProjectIdentity construction, initial HumanStatement provenance, and narrow bootstrap contracts are ready, create candidate ProjectGenesis under the GenesisAdmissionProfile.

Genesis may authorize only:

- bootstrap state;
- safe discovery;
- universal/capability interview;
- capability onboarding preparation;
- initial ConvergenceRoot;
- initial lifecycle frontier;
- project/kernel origin.

It may not grant arbitrary production, security, infrastructure, deployment, credential, payment, destructive, or public-effect authority.

## 8. Continue

After genesis:

1. accept the stage-sufficient IntentBaseline through ordinary positive authority;
2. onboard required capabilities;
3. compile a revisioned LifecycleGraph through the current Run Horizon;
4. derive the next candidate Task;
5. publish/admit the Task before execution;
6. route minimum sufficient context and skills;
7. execute only when enforcement, convergence, resources, currentness, and review requirements are satisfied.

## 9. Human simplicity

Do not ask the human to choose branches, worktrees, reviewer routing, context profiles, skill sets, remediation order, schema details, or other mechanically decidable matters.
