---
{
  "record_type": "EXTERNAL_OBSERVATION",
  "schema_version": 1,
  "project_id": "manna",
  "observation_id": "manna-v1-architecture-reconciliation-r1",
  "observation_class": "ARCHITECTURE_DECISION",
  "observed_at": "2026-09-28T04:47:09Z",
  "observed_value": "BOUND_V1_ARCHITECTURE_RECONCILED; frozen product capabilities, component and data boundaries, direct-file support policy, packaging fallback, import security, persistence, backup/restore, proof budgets, and release gates are decided; P0.1 and all empirical implementation proofs remain NOT STARTED or pending",
  "proof_assurance": "PEER_DECLARATION",
  "revision": 1
}
---
# Manna V1 architecture reconciliation revision 1

## 1. Status and authority boundary

This record is the authoritative bounded Architecture reconciliation requested
by `task-v1-architecture-r2.md`. It reconciles the older engineering
specification to the accepted V1 Product Freeze. It selects architecture and
defines proof obligations; it is not implementation evidence, a Product Freeze
change, an Architecture acceptance, or authorization to begin implementation.

The following statements are controlling:

- P0.1 remains **NOT STARTED**. No direct-file, persistence, worker, mobile,
  performance, storage, accessibility, import-safety, backup, or restore result
  is claimed to have passed.
- The accepted product contract, UI/UX requirements, approved flows, and
  approved reference mocks remain unchanged.
- Prayer journal, reading-plan engine, Scripture-memory and flashcard features,
  sermon builder, preaching/presentation/church mode, printable study sheets,
  OCR, a local assistant, and advanced interlinear/morphology workspaces are not
  V1 components, stores, routes, or release gates. Morphology resources may be
  imported and retained as source-labelled library data; that does not create a
  deferred workspace.
- Any older engineering-specification section or phase that places those
  deferred capabilities in V1 is superseded for V1 by this reconciliation.

## 2. Selected runtime and component boundaries

The release is a standards-native application built from maintainable source
into a deterministic self-contained `manna.html`. It has no required server,
account, service worker, CDN, telemetry, or network dependency.

The runtime dependency direction is one way:

1. **Shell and accessible UI** owns Read, Search, Study, Notes, Library,
   Settings, first run, progress, and recovery surfaces. It renders canonical
   view models and never parses external formats or writes IndexedDB directly.
2. **Navigation and workspace state** owns per-workspace history, exact Back,
   focus restoration, selection, pane layout, follow/pin state, comparison sets,
   unfinished drafts, and responsive projection. Phone, tablet, and desktop are
   presentations of the same state, not separate products.
3. **Application services** own passage navigation, SelectionService events,
   resource switching/comparison, notes and marks, library jobs, saved searches,
   study sessions, Study Trail, export, and capability-state decisions.
4. **Study engines** own exact/reference/phrase search, concordance, verified
   Strong's lookup, transparent Verse Finder, cross-reference traversal,
   document relevance, semantic linking, and atlas queries. Engines return
   source identities, mapping status, confidence, and explanations; they cannot
   fabricate missing source truth.
5. **Canonical resource domain** owns Scripture modules, entries, source
   documents, anchors, entities, semantic links, and Map Packs. Adapters only
   create this model; external formats never leak into UI or study engines.
6. **Import boundary** owns byte acquisition, detection, bounded unpacking,
   parsing, normalization, preview, transactional install, and derived indexing.
   Detection and preview are read-only. Only verified canonical records cross
   the boundary.
7. **Persistence and job services** own IndexedDB generations, durable command
   journals, migrations, rebuildable indexes, quota preflight, resumable work,
   and capability probes. UI and engines depend on their interfaces.
8. **Backup/restore and readable-export services** own `.mannabackup`, personal-
   only export, PDF/DOCX/plain-text output, encryption, conflict planning,
   staged restore, and verification. Readable exports are not backups.
9. **Platform capability and diagnostics** is the only boundary for storage,
   file open/save, workers, Web Crypto, speech, full screen, printing, and
   environment metadata. Optional API absence returns a typed capability state;
   it never throws through the application shell.
10. **Build and release tooling** owns deterministic assembly, CSP hashes,
    dependency inventory, resource/license registry, artifact and manifest
    digests, and evidence capture. It is not present as a runtime dependency.

Long work uses a bounded worker protocol for parsing, indexing, compression,
search, and conversion. Every job is cancellable, checkpointed, idempotent by
job ID, and communicates with typed messages containing no DOM objects. Where a
worker is unavailable, a chunked main-thread implementation yields within the
interaction budget. A missing worker is therefore a performance capability
state, not silent data loss.

## 3. Direct-file launch, identity, continuity, and support classes

The primary launch method is opening the exact released `manna.html` as a
top-level local file. A development server, installed wrapper, or sibling asset
directory does not prove this path.

Web storage is keyed by the user agent's storage key/origin, not by an
application-chosen ID. Local-file URLs can receive implementation-dependent or
opaque origin treatment, so file name, path, replacement, movement, or browser
upgrade must not be assumed to preserve the same IndexedDB identity. The HTML
and URL standards define origins and storage keys; this architecture therefore
treats continuity as an empirical support property, not a promise inferred from
the build ([HTML origins](https://html.spec.whatwg.org/multipage/browsers.html#origins),
[URL origin](https://url.spec.whatwg.org/#origin),
[Storage Standard](https://storage.spec.whatwg.org/)).

Each runtime records `installId`, `appVersion`, `schemaVersion`, artifact digest,
and storage-key probe outcome inside its reachable database. An upgrade does:

1. probe the current storage context without mutation;
2. if the expected database is reachable, stage and verify sequential schema
   migrations before activating the new generation;
3. if it is not reachable, open the bundled Reader in read-only baseline mode
   and ask for the most recent `.mannabackup`; and
4. never create an empty persistent library and imply that prior data was
   deleted or successfully migrated.

An upgrade handoff is successful only when either the old generation is
verified in the new artifact or a verified backup is restored. Settings must
warn before an artifact upgrade that direct-file storage continuity varies by
environment and a current backup is required.

Release support is expressed as capability classes:

| Class | Required behavior |
|---|---|
| Full | Direct-file script execution, persistent IndexedDB, local import and export, Web Crypto, and either Blob Worker support or a budget-compliant main-thread path. All V1 capabilities are available; device speech remains optional. |
| Reduced persistent | Persistence is verified, but an optional accelerator or device API is absent. Core V1 remains complete through the bounded fallback; the affected performance or optional speech feature is named. |
| Read-only baseline | Bundled Scripture and source-labelled bundled material can be read and searched in memory, but persistence/import/export cannot be trusted. Mutating controls are disabled with reason and backup/recovery guidance. This is a recovery mode, not a supported full environment. |
| Unsupported | The artifact cannot execute safely enough to render the verified baseline. Show static compatibility guidance if possible; do not claim support. |

Required release test classes are desktop Chromium, desktop Firefox, Android
Chromium-class browser, and iPhone Safari, plus iPad Safari and macOS Safari
where applicable to a claimed platform. The release manifest names exact tested
browser/OS versions and devices; no moving phrase such as "current browser" is
itself evidence. Emulation supplements but does not replace real iPhone and
Android evidence. A required target may ship only after attaining Full or
Reduced persistent with every essential V1 capability within budget.

## 4. Packaging, base library, and deterministic fallback

The default V1 distribution is one `manna.html` containing application code,
styles, icons, worker source, format adapters, and the complete verified base
library. Embedded payloads are content-addressed and compressed independently
so Reader startup does not require inflating the whole library.

The build is deterministic: inputs are digest-pinned; dependency order,
canonical JSON key order, compression parameters, line endings, locale, and
timestamps are fixed; source paths and host metadata are excluded. Two clean
builds in different absolute directories must produce byte-identical HTML and
identical SHA-256. The separately emitted manifest records application, schema,
backup, index and model versions, input digests, license records, toolchain
versions, artifact bytes and digest. It is verification evidence, not a runtime
dependency.

Architecture budgets for the complete one-file candidate are: at most 128 MiB
on disk; Reader content visible within 2.5 seconds and interactive within 5
seconds on the release low-end phone; and no more than 512 MiB measured peak
process memory during cold startup. P0.1 must first establish the measurement
method and device. These are gates, not current results.

The sole permitted packaging fallback is core `manna.html` plus one official,
content-addressed Manna Library Pack imported once. The fallback is triggered
only when independent P0 evidence shows that the complete one-file candidate
cannot open reliably on a required target or exceeds any artifact/startup/memory
budget after focused optimization. Preference or build convenience is not a
trigger. The fallback requires an Architecture review result tied to the failed
evidence, an explicit product-governance decision confirming that the accepted
fallback condition has occurred, a signed/digested official pack manifest, and
repeat proof that the core file works alone and the pack is not needed after a
verified import. A different split-package design requires renewed product
authority.

## 5. Canonical resource, document, link, and map models

All durable canonical records carry `schemaVersion`, stable ID, source identity,
provenance, created/imported version, and content digest. Scripture text is
immutable source truth. Display names are never identifiers.

- `BibleReference` contains canon, stable book ID, chapter, verse range, optional
  versification/subverse/segment, and source module ID.
- `ResourceManifest` contains resource ID, kind, title, author, language,
  version, source locator description, original-byte digest, license status,
  attribution, adapter/version, capabilities, and import digest. Resource ID is
  the SHA-256 of its canonical identity manifest plus original-byte digest.
- `SourceDocument` contains document ID, original format/digest, immutable
  extracted text blocks, source metadata, license state, assets, extraction
  warnings, and anchors. A changed source file is a new document revision and
  does not silently retarget old anchors.
- `PersonalItem` uses a random UUID, kind, revision, content digest, timestamps,
  ordered links, tags/collection references, and tombstone. Personal items
  include notes, highlights, bookmarks, questions, observations, saved searches,
  study sessions, Study Trail, and workspace settings only.

The document anchor is `documentId + extractionVersion + locator + excerptHash`.
Locators are PDF page index/page label plus block and character span; DOCX
heading path plus paragraph/run span; Markdown heading path plus block/span; and
TXT line plus character span. Page/section labels are preserved where the
format supplies them. Immutable extracted blocks make anchors stable inside an
installed document; `excerptHash` detects corruption or adapter drift. A UI link
always opens the surrounding source context, not a detached excerpt.

`SemanticLink` contains deterministic link ID, source anchor, target typed ID,
link kind, evidence (`explicit` or `inferred`), score in `[0,1]`, tier,
explanation, algorithm/version, created-at import ID, and lifecycle state. Exact
Scripture references are active explicit links. Default inferred tiers are high
`>=0.85`, medium `>=0.60 and <0.85`, and low `<0.60`; import preview may let the
user raise future thresholds but never relabel an old score. High links activate
with an `INFERRED` label, medium links appear only in Related, and low links stay
searchable without verse attachment. Lifecycle is `ACTIVE`, `SUPPRESSED`, or
`CORRECTED`; every user action appends a reversible overlay operation. Undo or
restore changes only that overlay, never source text. Re-running an algorithm
creates a versioned proposal set and cannot silently reactivate suppressed links.

`MapPack` owns attribution and source identity and contains `MapLayer` records
plus `MapView` definitions. A layer contains typed places/routes/regions/events,
geometry only when sourced, source anchors, coordinate system, confidence,
verification status, and style tokens. A view references layers and one of
Geographic, Route/Journey, Region, Timeline, Relationship, or Source Map. Pack
and layer status is Fully Interactive, Partially Interactive, Source View Only,
or Needs Review. Adapters may extract supplied coordinates and relationships;
they never infer absent geography as fact. The original source view and anchors
are always retained, so incomplete conversion falls back to a verse-linked
Source Map rather than invented geometry.

## 6. Hostile import boundary and closed safe markup

Supported inputs are documented SWORD, OSIS, VPL/structured text, JSON and
IMP-style resources, validated documented export paths from named ecosystems,
and text-based PDF, DOCX, TXT, and Markdown documents. Resource kinds are Bible,
commentary, dictionary, lexicon, Strong's, morphology data, book, cross-reference
source, and Map Pack. Image-only/scanned PDF requires OCR and is rejected in V1
with that exact explanation.

Limits are checked before allocation where possible and throughout streaming
parse: 256 MiB maximum selected file; 512 MiB maximum total expanded bytes;
10,000 archive entries; 100:1 maximum expansion ratio; four container levels;
128 structural nesting levels; 16 MiB maximum single textual record; and five
million canonical records per import. PDF and DOCX must be text-extractable
within those same ceilings. Exceeding any ceiling fails before installation.
Adapters may impose a lower documented limit; raising a ceiling requires a new
security review and hostile fixture evidence.

Archive paths are normalized and rejected if absolute, traversal-bearing,
device-named, duplicated after normalization/case folding, or link-like. XML
forbids DTDs, external entities and network resolution. Parsers have no DOM,
storage, network, navigation, or code-evaluation capability. Original files are
never deleted. Imports follow detect, inspect, validate, preview, confirm,
staged conversion, digest verification, atomic generation activation, then
rebuildable indexing.

Rich content is represented only by this closed safe-markup AST:

- blocks: document, paragraph, heading levels 1-6, block quote, ordered/unordered
  list, list item, preformatted text, table/row/cell, thematic break, and local
  raster image;
- inlines: text, emphasis, strong, code, superscript, subscript, line break,
  Scripture reference, internal resource link, and inert external-link label;
- attributes: language/direction, table span within validated bounds, canonical
  target ID, and local asset ID/alt text.

There is no generic HTML node, style/class/id attribute, CSS, script, handler,
form, frame, plugin, SVG, executable URL, or remote asset. Imported raster images
are decoded, dimension/pixel-budget checked, re-encoded, content-addressed, and
served only from local bytes. External URLs are stored as inert text and may be
copied or opened only after explicit confirmation outside the app context.
Rendering constructs DOM nodes and text nodes from the AST; imported strings are
never assigned to HTML parser sinks.

## 7. CSP and network policy

The build emits a CSP meta policy with build-generated hashes for the exact
inline script and style, no `unsafe-eval`, `default-src 'none'`,
`connect-src 'none'`, `object-src 'none'`, `frame-src 'none'`,
`media-src 'none'`, restricted `img-src`/`font-src` for embedded local data, and
`worker-src blob:` only when the verified embedded-worker path is enabled. Each
Blob Worker contains only build-owned source and is revoked after creation.
The final syntax and source matching are verified against CSP Level 3; meta
delivery limitations mean header-only directives are not claimed as protections
([CSP Level 3](https://www.w3.org/TR/CSP/)).

Runtime code has no fetch/XHR/WebSocket/EventSource/beacon/WebRTC path. Automated
offline tests observe every request and fail on any unexpected scheme or host.
The network guard is diagnostic defense in depth, not a substitute for CSP or
removing network-capable code. File selection, backup save, printing, and an
explicit confirmed external navigation are user-mediated platform actions, not
background network permission.

## 8. IndexedDB, durable serialization, and quotas

IndexedDB is the full-support durable store. The persistence boundary uses one
database name and versioned logical stores for control/generations, resources,
resource records, source documents/blocks/assets, entities, links/link overlays,
map packs/layers/views, personal items/tombstones, settings/workspaces,
jobs/journals, and rebuildable indexes. The IndexedDB specification defines the
transactional database API; actual availability and durability remain probed
per support class ([IndexedDB 3.0](https://w3c.github.io/IndexedDB/)).

Durable interchange values use UTF-8, explicit integer/decimal rules, NFC for
derived comparison keys while retaining original text, lexicographically sorted
object keys, ordered arrays, base-10 timestamps in UTC, and SHA-256 digests over
the canonical bytes. There are no host objects, `undefined`, executable values,
locale-dependent sorts, or implicit floating-point confidence serialization.
Confidence is stored as an integer millionth.

Canonical source and personal records are durable. Search indexes, graph layout,
frequency tables, previews, decompression caches, and job scratch data are
derived and rebuildable. A schema migration is a sequence of versioned pure
transformations into a staging generation; activation is a single control-store
transaction. A future unknown schema is rejected read-only.

Before import/restore, estimated final usage plus staging and rollback space plus
32 MiB reserve must fit below 90% of the reported quota. A warning appears at
80%. Because estimates and quotas are implementation-defined, a quota error at
any point aborts, removes only the staging generation, retains the active
generation and journal, and reports no success. Persistence requests and quota
estimates follow the Storage Standard, but are never treated as guarantees.

## 9. Backup, encryption, merge, migration, and restore

`.mannabackup` V1 is a length-framed binary container: fixed magic/version,
canonical UTF-8 header, ordered section table, independently DEFLATE-compressed
section payloads, and SHA-256 for every plaintext section and the complete
logical manifest. Sections use canonical JSON Lines for records and framed raw
bytes for assets. Names, order, compressor parameters, and timestamps are fixed
for reproducible unencrypted fixtures.

A full backup contains settings/workspaces, every personal item and tombstone,
resource manifests, all imported canonical modules and documents, local source
assets, semantic links and overlays, Map Packs, license/attribution state, and
the installed base-resource identity needed to reconstruct the complete library.
It excludes rebuildable indexes, caches, scratch data, and in-progress jobs. A
Personal Data Only export contains settings/workspaces and personal items,
tombstones and links, but no imported resource payloads. The preview names every
section and omission.

Optional password encryption wraps the complete plaintext container. Web Crypto
derives a 256-bit AES key using PBKDF2-HMAC-SHA-256, a fresh 16-byte random salt,
and 600,000 iterations. AES-256-GCM encrypts independently authenticated 8 MiB
chunks using a fresh random 64-bit nonce prefix plus a 32-bit chunk counter;
associated data binds envelope version, KDF parameters, header digest, chunk
index and total. The unencrypted envelope exposes only magic, version, KDF,
salt, chunk size/count and nonce prefix. The implementation accepts 600,000 to
2,000,000 PBKDF2 iterations to bound hostile work factors. Passwords and keys
are never stored or logged, and there is no recovery route. Wrong password,
authentication failure, nonce/counter overflow, or unavailable cryptography
causes no mutation. PBKDF2, AES-GCM and secure random generation use the Web
Cryptography API and are later interoperability/security proof obligations
([Web Cryptography API](https://w3c.github.io/webcrypto/)).

Restore is inspect-only until confirmation. It validates framing, sizes,
digests, authentication, schema range, licenses, contents, conflicts and space;
then shows Merge/Replace consequences. Conflict identity is stable record ID plus
revision/content digest: equal content is a no-op; a strictly newer descendant
may advance; divergent personal records are both retained with a `conflictOf`
link and require user choice; canonical resources with the same ID but different
digest are rejected as identity corruption. No timestamp-only last-write-wins is
allowed.

Restore writes a durable journal and a new staging generation. Sequential
migrations run only there. Replace retains the old active generation until the
new one is verified and, when the file-save capability permits, first creates a
verified emergency full backup. Merge constructs a new generation from current
plus accepted incoming records. Activation is one atomic active-generation
pointer transaction. Post-activation verification precedes cleanup and success.
Interruption resumes inspection/staging or rolls back to the old pointer; quota,
digest, migration, cancellation, or verification failure deletes staging only.

## 10. Reproducibility, accessibility, performance, and storage gates

The release evidence envelope records source commit, clean build commands and
logs, locked dependency and license inventories, two-directory reproducibility
digests, artifact/manifest sizes and hashes, browser/OS/device versions,
capability probe results, storage state, fixture digests, test logs, screenshots
or recordings, timing method and sample counts, memory method, and reviewer
identity. A claim without that envelope is not release evidence.

The following budgets are frozen as acceptance thresholds, measured after a
cold launch on the named release low-end phone unless stated otherwise:

| Measure | Budget |
|---|---|
| Complete artifact / cold startup | <=128 MiB; Reader visible <=2.5 s; interactive <=5 s; peak process memory <=512 MiB |
| Cached chapter / Strong's preview | p95 <=100 ms from activation to stable visible update |
| Uncached local chapter/resource | p95 <=500 ms excluding an explicitly displayed background index build |
| Exact/reference/phrase search | first useful baseline result p95 <=750 ms; progress visible by 250 ms |
| Selection and pane synchronization | p95 <=100 ms for already loaded resources |
| Main-thread responsiveness | no application task >50 ms during background import/index/backup; cancellation acknowledged <=250 ms |
| Base-library initial indexes | Reader remains interactive; complete <=90 s on low-end phone or work is checkpointed and clearly remains in progress |
| Storage safety | warn at estimated 80% quota; block before estimated post-operation usage exceeds 90%; retain 32 MiB reserve |

Failure on a required target blocks release. A failure may be corrected inside
implementation if it preserves frozen behavior; the official Library Pack route
is available only under section 4; weakening a product requirement requires a
new product decision.

WCAG 2.2 Level AA is a whole-application requirement across every responsive
variation and shipped appearance, not a component sampling claim. Evidence must
cover keyboard, touch, screen reader, visible/unobscured focus, target size,
200% text resize/reflow, contrast, reduced motion, status messages, hover
equivalence, RTL rendering/selection/copy, progress, error/recovery, and exact
focus return on the target matrix. Automated scans supplement but do not replace
manual assistive-technology and keyboard testing. No conformance is claimed by
this record ([WCAG 2.2](https://www.w3.org/TR/WCAG22/#conformance-reqs)).

## 11. Testing, diagnostics, licensing, and recovery gates

Required proof layers are unit golden tests; canonical adapter and migration
tests; transactional persistence/import/backup/restore integration tests;
browser and real-device flows; malicious fixture tests for every rejected class
and limit; deterministic build tests; network request observation; accessibility
audit; performance/storage/quota/interruption trials; and independent review.
Deliberate failure fixtures must prove the verifier itself fails closed.

Diagnostics is local and copyable. It includes app/artifact/schema/backup/index
versions, capability class and probe outcomes, storage estimates/persistence
state, active generation and pending journal state, resource and license status,
job errors, and sanitized timing counts. It excludes note/resource content,
passwords/keys, local paths, browsing history, and stable tracking identifiers.
Nothing is uploaded.

Every bundled or officially distributed resource requires title, author,
source/version, byte digest, license, territory, redistribution/modification
permission, attribution, verification date, and verifier. Build and release fail
closed on absent, unknown, expired, territory-incompatible, or contradictory
rights. KJV PCE identity and redistribution evidence, including the recorded UK
blocker, remains a release proof obligation. Imported resources preserve user-
supplied/unknown license state and copying/printing/export restrictions; Manna
does not claim rights the user has not established.

Recovery always prefers the last verified active generation. A failed startup
migration, import, indexing job, backup, or restore leaves Reader available in
the highest safe capability class, names the failed operation and preserved
state, offers retry/rollback/diagnostic export, and never announces success
before digest and semantic verification.

## 12. Gate ledger and escalation

| Gate | Required evidence | Current status |
|---|---|---|
| P0.1 packaging/direct-file | Clean-directory one-file launch, offline request log, exact device/browser matrix, worker/fallback, import/export probes, two-directory reproducibility, size/startup/memory measurements | **NOT STARTED** |
| Persistence/upgrade | IndexedDB reopen, file move/replace/browser update matrix, persistence request, quota/eviction, backup-mediated upgrade recovery | **NOT RUN** |
| Import/security | Parser limits and attack corpus, safe-AST sink audit, CSP enforcement, Blob-worker and no-network evidence | **NOT RUN** |
| Data and backup | Canonical serialization goldens, full/personal round trips, encrypted known-answer/interoperability tests, wrong-password/tamper/key-loss behavior | **NOT RUN** |
| Restore/recovery | Merge conflicts, sequential migrations, interruption, quota exhaustion, journal resume, pointer rollback and emergency backup | **NOT RUN** |
| Product behavior | Every frozen capability and designed state on desktop/tablet/phone, including PDF/DOCX/TXT/Markdown, links and Map Packs | **DESIGN APPROVED; IMPLEMENTATION NOT RUN** |
| Accessibility | Full WCAG 2.2 AA matrix, manual keyboard/screen-reader/touch/RTL/reflow/reduced-motion evidence | **NOT RUN** |
| Performance/storage | Frozen budgets on named devices with raw measurements and repeatable method | **NOT RUN** |
| Licensing/release | Complete digest-bound registry and territory review for every distributed resource | **OPEN; KJV PCE/UK BLOCKER RECORDED** |

If a proof fails, the smallest conforming implementation correction is attempted
and retested. A failure that invalidates direct-file full support, the one-file
budget, offline privacy, a required target, source integrity, data ownership,
WCAG 2.2 AA, or a frozen V1 capability is escalated to Architecture and, where
the product promise would change, to explicit product governance. No agent may
silently relabel a failed target as supported, use the Library Pack outside its
defined trigger, or defer a frozen V1 capability to make a gate pass.
