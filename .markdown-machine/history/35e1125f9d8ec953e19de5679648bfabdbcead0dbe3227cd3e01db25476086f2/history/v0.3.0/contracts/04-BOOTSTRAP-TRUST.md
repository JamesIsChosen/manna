---
{
  "record_type": "KERNEL_CONTRACT",
  "schema_version": 1,
  "machine_version": "0.3.0",
  "title": "Bootstrap Trust and Genesis",
  "machine_name": "Markdown Machine",
  "distribution_only": true,
  "source_class": "KERNEL_SOURCE"
}
---

# Pre-chain Bootstrap Trust

Project authority cannot validate the constitution used to admit its own genesis.

## Direct Bootstrap Authority v1

This package adopts **Model A: the exact human-selected artifact commits to the bootstrap constitution**.

When the human supplies/selects this exact package and directs the agent to use it:

1. the agent computes the package ContentSetDigest defined in `00-BOOTSTRAP.md`;
2. the human selection event binds that exact digest;
3. because the digest commits to this file and the whole package, the agent may not substitute a different bootstrap policy or verifier semantics without changing the selected artifact identity;
4. `DIRECT_HUMAN_ARTIFACT_SELECTION/v1` supplies only the fixed bootstrap permissions below.

The agent is not allowed to synthesize a new KernelBootstrapTrustProfile after selection.

## Fixed direct-human bootstrap constitution

Allowed variable supplied by the current human event:

- exact selected ContentSetDigest;
- human project goal/statement;
- derived new ProjectIdentity according to the fixed rule below.

Fixed permissions:

- validate exact selected package using SMF/1 and SMF-SCHEMA/1;
- admit only the included GenesisAdmissionProfile semantics;
- create one new ProjectIdentity;
- create bootstrap HumanStatement evidence;
- create initial ConvergenceRoot;
- authorize safe discovery/interview/onboarding preparation only.

Fixed prohibitions:

- arbitrary capability activation;
- production/public deployment;
- payment;
- destructive external effects;
- active vulnerability operations;
- blanket credential authority;
- bypass of universal interview;
- unlimited convergence.

## Bootstrap evaluator independence

Genesis evaluation uses the SMF/1, SMF-SCHEMA/1, and GenesisAdmissionProfile semantics committed by the exact selected ContentSetDigest or a stronger separately trusted bootstrap substrate. Candidate project bytes created after selection cannot replace those evaluator semantics while being evaluated.

## Stronger bootstrap assurance

A capability may require externally anchored or protected bootstrap-origin proof beyond direct human artifact selection. Failure to satisfy that higher floor makes the operation ineligible; it does not invalidate ordinary lower-risk work already permitted by the current bootstrap class.

## ProjectIdentity construction

Use a fresh high-entropy project identifier generated during bootstrap. Human-readable name, directory, repository, and timestamp are metadata, not identity.

## GenesisAdmissionProfile

ProjectGenesis may bind the project's KernelManifest and ordinary TransitionAdmissionContract only because their exact selected bytes were already committed by the pre-chain bootstrap event.

After genesis, all changes to those constitutional contracts require governed migration.
