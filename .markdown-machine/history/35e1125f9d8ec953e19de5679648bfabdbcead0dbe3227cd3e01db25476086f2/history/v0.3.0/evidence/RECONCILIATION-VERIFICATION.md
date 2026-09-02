---
{
  "record_type": "VERIFICATION_EVIDENCE",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.3.0",
  "project_id": "manna",
  "scope": "Manna V1 UI/UX design reconciliation",
  "status": "VERIFIED_WITH_VALIDATION_GAPS_REMOTE_PENDING"
}
---

# Reconciliation verification ledger

Required gates: distribution pin, exact selected runtime digests, no recursive distribution copy, no unused capability runtime, no generic record factory, compact runtime, preserved existing project files/history, semantic closure, cold resume without ZIP, design-reference traceability, repository binding, and exact remote readback.

## Local results

- Exact runtime export comparisons: pass.
- JSON front matter and manifest coverage: 25/25 machine records pass.
- Forbidden distribution roots and generic `*.template.md` factory: absent.
- Preservation anchors (`README.md`, `AGENTS.md`, `SECURITY.md`, `src/`, `docs/`, `test/`, `.github/`): present.
- `npm run lint`: pass.
- `node --test test/build.test.js test/render.test.js test/selection.test.js`: 3 pass.
- `npm test`: blocked by the host's missing Chromium-family executable for four browser tests; six failure-diagnostic assertions also fail because the existing lint runner writes diagnostics to stdout while those assertions read stderr. No application source or test runner was changed for this design reconciliation.
- Study Desk design markers: pass; the seven added static layouts are present alongside the original six screens.
- `npm run build`: pass; deterministic self-contained artifact produced and final lint pass.
- Canonical GitHub readback: pending publication of the design-verification branch.

The native browser gap and inherited diagnostics-test mismatch remain explicit so a future implementation task can address or rerun them independently. They are outside this documentation/design-baseline scope.
