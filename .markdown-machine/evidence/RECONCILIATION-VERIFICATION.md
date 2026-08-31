---
{
  "record_type": "VERIFICATION_EVIDENCE",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.3.0",
  "project_id": "manna",
  "scope": "v0.3.0 reconciliation",
  "status": "VERIFIED_WITH_NATIVE_BROWSER_GAP"
}
---

# Reconciliation verification ledger

Required gates: distribution pin, exact selected runtime digests, no recursive distribution copy, no unused capability runtime, no generic record factory, compact runtime, preserved existing project files/history, semantic closure, cold resume without ZIP, repository binding, and exact remote readback.

## Local results

- Exact runtime export comparisons: pass.
- JSON front matter and manifest coverage: 21/21 machine records pass.
- Forbidden distribution roots and generic `*.template.md` factory: absent.
- Preservation anchors (`README.md`, `AGENTS.md`, `SECURITY.md`, `src/`, `docs/`, `test/`, `.github/`): present.
- `npm run lint`: pass.
- `npm test`: 46 pass; 4 browser tests blocked before execution because no Chromium-family executable is installed for the native runner.
- In-app browser against `http://127.0.0.1:4173/manna.html`: pass for boot, navigation, verse selection, word selection, place selection, pin/follow behavior, and zero console errors.
- `npm run build`: pass; deterministic self-contained artifact produced and final lint pass.

The native browser gap is environmental evidence, not an application failure; it remains explicit so a future cold resume can rerun those four tests when a Chromium-family executable is available.
