---
{
  "record_type": "EXTERNAL_OBSERVATION",
  "schema_version": 1,
  "project_id": "manna",
  "observation_id": "manna-v1-architecture-evaluation",
  "observation_class": "ARCHITECTURE_EVALUATION",
  "observed_at": "2026-09-28T04:31:09Z",
  "observed_value": "BOUNDED_CORRECTIONS_REQUIRED; existing engineering architecture is coherent and Product-Freeze-compatible, but P0.1 is explicitly NOT STARTED, direct-file compatibility is unproven, final CSP/import limits and durable-format contracts are underspecified, and measurable artifact/storage/performance budgets remain Phase-0 proof obligations",
  "proof_assurance": "PEER_DECLARATION",
  "revision": 1
}
---
# V1 Architecture evaluation

Evaluator: Codex native architecture worker `/root/v1_architecture_evaluation`
(`gpt-5.6-terra`, requested low effort). Exact subject: repository commit
`6932b0a15a6cefba618309637b9caca15de37555`, Task
`sha256:4e695fc962dbe0ec74a236850979be7a75b97c19ee97d49578ff3acc829196d2`,
and the exact r1 Architecture ReviewRequest subjects.

## Verdict

**BOUNDED_CORRECTIONS_REQUIRED.** The existing engineering specification defines
a coherent candidate architecture, but its own P0.1 packet is explicitly
`NOT STARTED` and says development must not proceed as though the single-file
deployment model were proven when it has not been demonstrated. Product Freeze
also left live local-file and assistive behavior unproven.

## Selected candidate architecture

- Build a standards-native source tree into one deterministic self-contained
  HTML artifact with no runtime framework, server, CDN, service worker, account,
  or network dependency.
- Preserve layered boundaries: UI, application services, study engines,
  canonical resource adapters/storage, and platform capabilities. UI code never
  parses imported formats.
- Preserve immutable Scripture/source truth and separate canonical resources
  from rebuildable derived indexes.
- Use an IndexedDB-backed `StorageProvider` with transactional writes, startup
  probes, quota preflight, explicit reduced/read-only modes, and visible backup
  status; in-memory fallback is explicitly nonpersistent.
- Treat imports as hostile bytes. Parse into bounded canonical records and a
  closed safe-markup representation; reject executable URLs, remote assets,
  handlers, traversal, hostile archives, and decompression/size abuse before a
  previewed transactional install.
- Use embedded worker source and capability gating for indexing, conversion,
  compression, and expensive search. Provide cancellable, chunked main-thread
  degradation when workers are unavailable.
- Keep platform APIs behind a capability service and implement versioned,
  section-digested, staged/validated backup and migration flows.

## Blocking proof and decision gaps

1. **High — Phase-0 feasibility is not evidence.**
   `docs/01-spec/p0.1-implementation-packet.md` lines 482–504 state `NOT STARTED`,
   define the single-file/offline question, and prohibit proceeding as if it
   were proven. Lines 955–1036 require clean-directory, offline, browser-matrix,
   mobile, reproducibility, dependency, and failure-fixture evidence.
2. **High — direct-file compatibility is undecided and unproven.** The exact
   supported launch method and reduced-mode policy must be tested for storage,
   import/export, workers, CSP, downloads, and target browsers rather than
   inferred from development-server behavior.
3. **Medium — security policy is declarative.** Final CSP source lists,
   Blob-worker policy, `connect-src 'none'`, safe-markup/parser limits, archive
   limits, and emitted-artifact network assertions need one threat-modelled
   decision.
4. **Medium — durable formats are underspecified.** Canonical backup
   serialization, section schemas, conflict identities, migration compatibility,
   encryption/key-loss behavior, and quota failure handling need exact contracts.
5. **Medium — measurable budgets remain deferred.** Artifact size, startup,
   memory, import limits, index rebuild time, responsiveness, storage capacity,
   eviction, and restore portability require target-device baselines.

## Required bounded continuation

Record the exact architecture choices and support/reduced-mode policy, then run
the already-defined P0.1 feasibility proof on the target matrix. Freeze CSP,
import, storage, backup/migration, reproducibility, performance, accessibility,
and licensing proof obligations before Architecture acceptance or Implementation
authorization.

Current primary platform specifications confirm why direct-file behavior must
be tested rather than assumed: [HTML origins](https://html.spec.whatwg.org/multipage/browsers.html#origins),
[IndexedDB 3.0](https://w3c.github.io/IndexedDB/), and
[CSP Level 3 `worker-src`](https://w3c.github.io/webappsec-csp/#directive-worker-src).

This evaluation made no implementation, product, lifecycle, acceptance,
release, publication, or external-effect change.
