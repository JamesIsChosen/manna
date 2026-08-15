# ADR-0001 — AGPL-3.0-only

**Status:** accepted
**Date:** 2026-08-15

## Context

Manna bundles public-domain Scripture and study resources and is designed
to be freely copied — it is one HTML file, so redistribution is trivial by
construction. The project needed a license before its first public commit;
absent one, the work is "all rights reserved" and nobody may legally
redistribute it, which contradicts the entire distribution model.

## Decision

GNU Affero General Public License v3.0 only.

## Alternatives considered

| Option | Why not |
|---|---|
| MIT / Apache-2.0 | Permits a closed, paid fork of a tool built on public-domain Scripture. The freedom to redistribute is the product. |
| GPL-3.0-only | Nearly equivalent here, since Manna never runs as a network service. AGPL chosen for the stronger guarantee if a hosted variant ever appears. |
| Proprietary | Contradicts R6 (user ownership) and the offline, no-account model. |

## Consequences

- Anyone distributing a modified Manna must offer source.
- Contributors keep copyright; there is no CLA. Relicensing later would need
  every contributor's agreement. This is deliberate.
- Bundled resources must each carry a redistribution right compatible with
  AGPL distribution. The license registry (engineering spec §90) is not optional
  bookkeeping — it is a licensing obligation.

## What would change our mind

A bundled resource we consider essential turns out to have a license
incompatible with AGPL redistribution, and no substitute exists.
