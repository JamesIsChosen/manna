# Historical / Superseded: SMPM Bootstrap — Repository Conformance Packet

## Status

Historical prior attempt; superseded by the Markdown Machine v0.3.0 reconciliation. Independent review was not requested for that governance-only packet.

This document is preserved as project history. It is not the current active machine contract and does not govern new work.

## Goal

Admit the existing Manna repository into the Steward Markdown Project Machine (SMPM-1) without rewriting application code or prior product history.

## Scope

- Pin the exact selected SMPM-1 package by ContentSetDigest.
- Create the canonical bootstrap, authority, intent, capability, lifecycle, convergence, evidence, inbox, task, state, and handoff surfaces.
- Preserve existing Manna source, specifications, tests, Git history, and P0.1 review chronology.
- Prepare an inert candidate TaskContract for P0.2 Offline Network Guard.

## Acceptance criteria

1. `00-BOOTSTRAP.md` is the exact selected bootstrap entry.
2. The selected package digest is recorded as `sha256:2cd4bf8587d97eb327c2829eb30cf14f265f50ea98bb908786c03289cff7a244`.
3. Existing root `AGENTS.md`, `README.md`, and `SECURITY.md` remain unchanged and are not overwritten by package-name collisions.
4. Every materialized machine Markdown file has an SMF/1 opener, JSON object, and closer.
5. Existing non-browser verification passes 45/45; native browser checks remain explicitly unavailable because this host has no Chromium-family executable and direct `file://` navigation is blocked by the in-app browser policy.
6. No P0.2 implementation is claimed or authorized by this packet.

## Evidence

- `evidence/items/evidence-legacy-p0.1-manna-2026-08-30.md`
- `evidence/items/evidence-bootstrap-verification-manna-2026-08-30.md`
- `governance/authority/authority-currentness-lifecycle-manna-2026-08-30-r1.md`
- `state/CURRENT-STATE.md`
- `handoff/START-HERE.md`

## Out of scope

Application behavior changes, P0.2 implementation, public deployment, external communications, credential use, destructive operations, and rewriting prior records.

## Self-review

The new records are additive and local-only. Prior P0.1 PASS/FAIL chronology and accepted exceptions remain immutable project evidence. The next legal action is task authorization after the candidate P0.2 contract, enforcement, resources, convergence reservation, and review floor are validated.
