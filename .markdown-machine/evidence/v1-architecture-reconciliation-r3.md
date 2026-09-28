---
{
  "record_type": "EXTERNAL_OBSERVATION",
  "schema_version": 1,
  "project_id": "manna",
  "observation_id": "manna-v1-architecture-reconciliation-r1",
  "observation_class": "ARCHITECTURE_DECISION",
  "observed_at": "2026-09-28T05:13:11Z",
  "observed_value": "BOUND_V1_ARCHITECTURE_RECONCILED; revision 3 closes every serialized backup alias, adds conflict lineage serialization and required durable entity/topic sections, and preserves all revision-2 architecture decisions; P0.1 and all empirical implementation proofs remain NOT STARTED or pending",
  "proof_assurance": "PEER_DECLARATION",
  "revision": 3
}
---
# Manna V1 architecture reconciliation revision 3

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

The generated document contains exactly one executable inline application
script and one inline application style block. It contains no inline event
handlers, `style` attributes, `javascript:` URLs, evaluated strings, external
scripts/styles/fonts, or runtime-created executable script except the governed
Blob Worker. Build substitution replaces the two placeholders below with the
base64 SHA-256 of the exact inline element text:

```text
default-src 'none'; base-uri 'none'; form-action 'none'; object-src 'none'; frame-src 'none'; manifest-src 'none'; media-src 'none'; connect-src 'none'; img-src data: blob:; font-src data:; script-src 'sha256-{APP_SCRIPT_SHA256_BASE64}'; script-src-elem 'sha256-{APP_SCRIPT_SHA256_BASE64}'; script-src-attr 'none'; style-src 'sha256-{APP_STYLE_SHA256_BASE64}'; style-src-elem 'sha256-{APP_STYLE_SHA256_BASE64}'; style-src-attr 'none'; worker-src blob:; child-src blob:
```

No `'self'`, `file:`, `http:`, `https:`, `unsafe-inline`, or
`unsafe-eval` source is present. Application images are only build-embedded
`data:` URLs or runtime object URLs for verified local raster bytes; fonts are
only build-embedded `data:` URLs. `blob:` is absent from `script-src` and is
allowed only by `worker-src` (with `child-src blob:` as the legacy worker
fallback). `frame-src 'none'` continues to forbid frames when `child-src`
falls back. Every Blob Worker contains only build-owned source, imports nothing,
and has its object URL revoked after construction. If the exact worker policy is
not enforced in a target, the worker is disabled and the bounded main-thread
path is used.

The enforcing element is exactly
`<meta http-equiv="Content-Security-Policy" content="…">`. In `<head>`, the
only permitted predecessor is `<meta charset="utf-8">`; the CSP element is the
first governed head content and precedes title, preload/link, style, script,
image, font, or any other governed element/resource. The build fails if this
ordering changes. This is necessary because a meta-delivered policy is not
retroactive.

A local-file meta policy cannot supply the header-only protections
`frame-ancestors` or `sandbox`, cannot use `report-uri` in meta, and cannot
deploy `Content-Security-Policy-Report-Only`. None is claimed. Embedding control
therefore remains unavailable in the primary direct-file package, and violation
evidence comes from local automated request/CSP tests rather than a reporting
endpoint. These placement and limitation rules follow
[CSP Level 3 policy delivery](https://www.w3.org/TR/CSP/#meta-element);
syntax, hash and source matching remain empirical browser gates, not passed
claims.

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

### 9.1 Plaintext container and section registry

All multibyte integers are unsigned big-endian. `.mannabackup` plaintext V1 is:

1. eight ASCII bytes `MANNAB01`;
2. `uint16(1)` container version;
3. `uint32(manifestByteLength)`;
4. a canonical UTF-8 JSON manifest; and
5. one section frame per manifest entry, in manifest order:
   `uint16(idByteLength) || UTF8(id) || uint64(storedByteLength) || storedBytes`.

The manifest schema is:

```text
{format:"manna-backup",formatVersion:1,backupKind:"full"|"personal",
 createdAt:UtcString,appVersion:String,databaseSchemaVersion:UInt,
 sourceArtifactDigest:Digest,sections:[SectionDescriptor]}
SectionDescriptor =
{id:SectionId,schemaVersion:1,required:true,encoding:"canonical-jsonl",
 compression:"deflate-raw",recordCount:UInt,plainBytes:UInt,
 storedBytes:UInt,sha256:Digest}
```

The digest covers the uncompressed canonical JSON Lines bytes. Raw DEFLATE uses
the release-pinned compressor and fixed level 6. Each nonempty line is one
canonical JSON object followed by LF; empty sections have zero bytes and zero
records. Duplicate IDs, order differences, length mismatches, trailing bytes,
invalid canonical JSON, or digest mismatches fail inspection.

V1 has no optional writer sections. A full backup must contain every `F` row
below; a personal backup must contain every `P` row. Required sections may be
empty. A reader rejects a missing listed section and any unknown descriptor with
`required:true`; a future `required:false` section may be skipped only after
its frame length and digest are validated.

| Exact section ID | F | P | Exact record fields after common rules |
|---|:---:|:---:|---|
| `settings.v1` | yes | yes | mutable header; `key:String`, `value:CanonicalJson` |
| `workspaces.v1` | yes | yes | mutable header; `workspaceKind:WorkspaceKind`, `state:CanonicalJson` |
| `personal-items.v1` | yes | yes | mutable header; `itemKind:ItemKind`, `body:SafeAstOrText`, `anchors:[PersonalTarget]`, `tags:[String]`, `collectionIds:[Id]`, `conflictCopyOf:Id|null` |
| `tombstones.v1` | yes | yes | mutable header; `targetKind:TombstoneKind`, `targetId:Id`, `deletedAt:UtcString` |
| `personal-links.v1` | yes | yes | mutable header; `fromId:Id`, `to:TypedId`, `relation:PersonalRelation` |
| `link-overlays.v1` | yes | yes | mutable header; `semanticLinkId:Id`, `action:"suppress"|"restore"|"correct"`, `replacementTarget:TypedId|null` |
| `library-state.v1` | yes | no | mutable header; `resourceId:Id`, `enabled:Boolean`, `order:UInt`, `collectionIds:[Id]` |
| `resource-manifests.v1` | yes | no | `resourceId:Id`, `kind:ResourceKind`, `title:String`, `author:String|null`, `language:String`, `version:String`, `source:String`, `originalDigest:Digest`, `licenseId:Id`, `adapter:{id:String,version:String}`, `capabilities:[ResourceCapability]`, `contentDigest:Digest` |
| `resource-records.v1` | yes | no | `resourceId:Id`, `recordId:Id`, `kind:ResourceRecordKind`, `key:String`, `body:CanonicalJson`, `sourceAnchor:Anchor|null`, `contentDigest:Digest` |
| `source-documents.v1` | yes | no | `documentId:Id`, `format:DocumentFormat`, `originalDigest:Digest`, `metadata:CanonicalJson`, `licenseId:Id`, `extractionVersion:String`, `warnings:[String]`, `contentDigest:Digest` |
| `source-blocks.v1` | yes | no | `documentId:Id`, `blockId:Id`, `locator:AnchorLocator`, `text:String`, `safeAst:SafeAst`, `excerptHash:Digest`, `contentDigest:Digest` |
| `entities.v1` | yes | no | `entityId:Id`, `entityKind:"person"|"place"|"event"`, `primaryLabel:String`, `aliases:[String]`, `description:String|null`, `sourceAnchors:[Anchor]`, `provenanceResourceIds:[Id]`, `contentDigest:Digest` |
| `topics.v1` | yes | no | `topicId:Id`, `label:String`, `normalizedLabel:String`, `aliases:[String]`, `description:String|null`, `sourceAnchors:[Anchor]`, `provenanceResourceIds:[Id]`, `contentDigest:Digest` |
| `resource-assets.v1` | yes | no | `assetId:Id`, `mime:"image/png"|"image/jpeg"|"image/webp"`, `width:UInt`, `height:UInt`, `bytesBase64url:String`, `contentDigest:Digest` |
| `semantic-links.v1` | yes | no | `linkId:Id`, `sourceAnchor:Anchor`, `target:TypedId`, `kind:SemanticLinkKind`, `evidence:"explicit"|"inferred"`, `scoreMillionths:UInt|null`, `tier:"high"|"medium"|"low"|null`, `explanation:String`, `algorithm:{id:String,version:String}`, `lifecycle:"active"|"suppressed"|"corrected"`, `contentDigest:Digest` |
| `map-packs.v1` | yes | no | `packId:Id`, `resourceId:Id`, `title:String`, `attribution:String`, `status:MapStatus`, `sourceViewId:Id`, `contentDigest:Digest` |
| `map-layers.v1` | yes | no | `layerId:Id`, `packId:Id`, `kind:MapLayerKind`, `features:[CanonicalFeature]`, `sourceAnchors:[Anchor]`, `confidenceMillionths:UInt|null`, `status:MapStatus`, `contentDigest:Digest` |
| `map-views.v1` | yes | no | `viewId:Id`, `packId:Id`, `viewKind:MapViewKind`, `layerIds:[Id]`, `state:CanonicalJson`, `contentDigest:Digest` |
| `licenses.v1` | yes | no | `licenseId:Id`, `resourceId:Id`, `license:String`, `territories:[String]`, `redistribution:LicensePermission`, `modification:LicensePermission`, `attribution:String`, `verifiedAt:UtcString`, `verifier:String`, `contentDigest:Digest` |

The closed V1 full registry is exactly these 19 rows; the closed personal
registry is exactly the six rows marked `P`.

`Id` matches `^[A-Za-z0-9][A-Za-z0-9._:~-]{0,511}$`; enum values are nonempty.
`String` is a possibly empty valid Unicode scalar sequence encoded as UTF-8,
subject to the field and global bounds below. `UInt` is an integer in
`[0, 2^53-1]`; `Digest` is 64 lowercase hexadecimal SHA-256 characters;
`UtcString` is RFC 3339 UTC with seconds and trailing `Z`; arrays preserve
semantic order and contain no duplicate IDs. A field named `*Base64url` uses
only `A-Z`, `a-z`, `0-9`, `-`, and `_`, has no whitespace or `=` padding, and
must exactly equal the canonical unpadded base64url re-encoding of its decoded
bytes. The structural aliases used by these rows are closed below and refine
the domain models selected in sections 5, 6 and 8. All unknown fields are
rejected in V1.

Closed enum domains used by the table are: `WorkspaceKind` = `read`, `search`,
`study`, `notes`, `library`, or `settings`; `ItemKind` = `note`, `highlight`,
`bookmark`, `question`, `observation`, `saved-search`, `study-session`, or
`study-trail-event`; `TombstoneKind` = `personal-item`, `personal-link`,
`link-overlay`, `workspace`, or `setting`; `PersonalRelation` = `anchored-to`,
`mentions`, `related-to`, or `conflict-of`; `ResourceKind` = `bible`,
`commentary`, `dictionary`, `lexicon`, `strongs`, `morphology`, `book`,
`cross-reference`, or `map-pack`; `ResourceCapability` = `reader`,
`commentary`, `dictionary`, `lexicon`, `strongs`, `morphology`,
`cross-reference`, `document`, or `map-pack`; `ResourceRecordKind` = `verse`,
`entry`, `strongs-entry`, `morphology-record`, `cross-reference`, or
`book-block`; `DocumentFormat` = `pdf`, `docx`, `txt`, or `markdown`;
`SemanticLinkKind` = `scripture-reference`, `semantic-reference`,
`entity-reference`, or `topic-reference`; `MapLayerKind` = `places`, `routes`,
`regions`, `timeline`, `relationships`, or `source`; `MapStatus` =
`fully-interactive`, `partially-interactive`, `source-view-only`, or
`needs-review`; `MapViewKind` = `geographic`, `route-journey`, `region`,
`timeline`, `relationship`, or `source-map`; link lifecycle = `active`,
`suppressed`, or `corrected`; and `LicensePermission` =
`allowed`, `prohibited`, or `unknown`. Any enum extension requires a new format
schema version.

#### Closed serialized aliases

The following aliases are wire-format tagged unions, not implementation types.
Every object admits exactly the named keys for its selected variant; optional
keys are written explicitly as nullable values, never omitted. No object may
contain an unknown key.

Unknown-field rejection applies to every record and tagged-union schema. A
field explicitly typed `CanonicalJson` is one complete opaque value and may
contain application/user data keys under the canonical bounds; those nested
keys are data, not extensions to the enclosing record schema.

`CanonicalJson` is exactly one of `null`, Boolean, String, SafeInteger, an
array of `CanonicalJson`, or an object mapping String keys to
`CanonicalJson`. `SafeInteger` is an integer in
`[-9007199254740991,9007199254740991]`; non-integral values are represented by
a String field whose enclosing schema names its decimal meaning. Strings are
valid Unicode scalar sequences with no unpaired surrogate or NUL. Object keys
are NFC, 1–256 UTF-8 bytes, unique after NFC, and sorted by unsigned UTF-8 byte
order. Values preserve authored string spelling. Maximum nesting is 64; an
object has at most 65,535 members, an array at most 1,000,000 items, one string
at most 16 MiB UTF-8, and one JSONL record at most 32 MiB. JSON serialization is
UTF-8 without BOM or insignificant whitespace; escapes use lowercase `\\u`
hex only for mandatory JSON escapes, and integers use shortest base-10 form
with no leading zero or negative zero.

`TypedId` is exactly
`{kind:TypedIdKind,id:Id}`, where `TypedIdKind` is `bible-reference`,
`resource`, `resource-record`, `source-document`, `source-anchor`,
`strongs-entry`, `entity`, `topic`, `semantic-link`, `map-pack`,
`map-layer`, `map-view`, or `personal-item`.

`PersonalTarget` is exactly one closed `Anchor` or one closed `TypedId`.

`BibleReference` is exactly:

```text
{canon:String,bookId:String,chapter:UInt,verseStart:UInt,verseEnd:UInt,
 sourceModuleId:Id,versification:String|null,subverse:String|null,
 segment:String|null}
```

`chapter`, `verseStart`, and `verseEnd` are in `[1,1000]`, and
`verseEnd >= verseStart`. `Anchor` is exactly one of:

```text
{type:"bible",reference:BibleReference}
{type:"document",documentId:Id,extractionVersion:String,
 locator:AnchorLocator,excerptHash:Digest}
{type:"resource",resourceId:Id,recordId:Id,localKey:String|null}
```

`AnchorLocator` is exactly one of:

```text
{format:"pdf",pageIndex:UInt,pageLabel:String|null,blockIndex:UInt,
 charStart:UInt,charEnd:UInt}
{format:"docx",headingPath:[String],paragraphIndex:UInt,runIndex:UInt,
 charStart:UInt,charEnd:UInt}
{format:"markdown",headingPath:[String],blockIndex:UInt,
 charStart:UInt,charEnd:UInt}
{format:"txt",lineStart:UInt,lineEnd:UInt,charStart:UInt,charEnd:UInt}
```

Indexes are zero-based. Page/line indexes are at most 1,000,000; character
indexes at most 16,777,216; start must not exceed end. Heading paths contain at
most 32 nonempty strings, each at most 1,024 UTF-8 bytes. PDF page label is at
most 256 UTF-8 bytes. The locator must address an existing immutable extracted
block; the excerpt digest must match its selected text.

`SafeAstOrText` is exactly
`{type:"text",text:String}` or `{type:"ast",root:SafeAst}`.
`SafeAst` is a document node whose descendants use only these exact shapes:

| Tag | Exact remaining keys |
|---|---|
| `document` | `children:[Block]` |
| `paragraph` | `children:[Inline]` |
| `heading` | `level:UInt` in 1–6; `children:[Inline]` |
| `blockquote` | `children:[Block]` |
| `list` | `ordered:Boolean`, `start:UInt|null`, `children:[list-item]` |
| `list-item` | `children:[Block]` |
| `pre` | `text:String` |
| `table` | `children:[table-row]` |
| `table-row` | `children:[table-cell]` |
| `table-cell` | `header:Boolean`, `rowSpan:UInt`, `columnSpan:UInt`, `children:[Block]` |
| `thematic-break` | no remaining keys |
| `image` | `assetId:Id`, `alt:String` |
| `text` | `text:String` |
| `emphasis`, `strong`, `superscript`, `subscript` | `children:[Inline]` |
| `code` | `text:String` |
| `line-break` | no remaining keys |
| `scripture-reference` | `label:String`, `reference:BibleReference` |
| `internal-link` | `label:String`, `target:TypedId` |
| `external-link-label` | `label:String`, `urlText:String` |

Every node also has exactly `type:<Tag>`; no other key is legal. `Block` tags
are paragraph, heading, blockquote, list, pre, table, thematic-break, and image;
list-item is legal only as a list child, table-row only as a table child, and
table-cell only as a table-row child. `Inline` tags are text, emphasis, strong,
code, superscript, subscript, line-break, scripture-reference, internal-link,
and external-link-label. A document has at most 100,000 nodes,
depth 64, 16 MiB aggregate text, lists 100,000 items, tables 256 rows by 256
cells, cell spans 1–256, and images must reference a record in
`resource-assets.v1`. `urlText` is inert display/copy text and is never a URL
load target.

`CanonicalFeature` is exactly:

```text
{featureId:Id,featureKind:"place"|"route"|"region"|"event"|"relationship",
 label:String,description:String|null,geometry:Geometry|null,
 sourceAnchors:[Anchor],related:[TypedId],
 confidenceMillionths:UInt|null,verification:"verified"|"uncertain",
 timeLabel:String|null}
```

`Geometry` is exactly one of
`{type:"point",position:Position}`,
`{type:"line-string",positions:[Position]}`, or
`{type:"polygon",rings:[[Position]]}`; `Position` is
`[longitudeE6:SafeInteger,latitudeE6:SafeInteger]`, longitude in
`[-180000000,180000000]` and latitude in `[-90000000,90000000]`. A line has
2–100,000 positions. A polygon has 1–128 rings, each 4–100,000 positions, first
equals last, and at most 100,000 positions total. Place permits point or null,
route permits line-string or null, region permits polygon or null, and event or
relationship requires null. Null geometry preserves source truth and cannot be
promoted without sourced coordinates. Source anchors and related IDs each have
at most 10,000 entries; confidence is null or in `[0,1000000]`.

Every mutable record starts with:

```text
{recordId:Id,revision:UInt,revisionDigest:Digest,
 parentRevisionDigest:Digest|null,ancestorRevisionDigests:[Digest],
 contentDigest:Digest,updatedAt:UtcString}
```

At creation, revision is 1, parent is null, and ancestors is empty. On mutation,
revision increments by one, parent equals the prior `revisionDigest`, and the
prior digest is appended to the prior ancestor array. `contentDigest` hashes
the canonical domain payload excluding the mutable header.

```text
revisionDigest = SHA256(canonicalJson(
  {recordId,revision,parentRevisionDigest,
   ancestorRevisionDigests,contentDigest}))
```

The ancestor array must contain exactly `revision-1` unique digests and end in
the parent. Thus incoming is a strict descendant exactly when the current
revision digest occurs in incoming ancestors; current is newer when the reverse
is true; neither means divergence. This rule, not timestamps, decides merge
ancestry.

A full backup contains all defined full sections and therefore all imported
canonical modules, documents, assets, durable entities/topics, semantic links,
Map Packs, licenses and installed library state needed to recreate the complete
library. It excludes rebuildable indexes, caches, scratch data and jobs.
Personal Data Only is exactly the six `P` sections and contains no resource
payload. Preview names every section and omission.

### 9.2 Independently decryptable encrypted envelope

Optional password encryption wraps the complete plaintext bytes above. The
password is normalized once with Unicode NFC, is neither trimmed nor case
folded, and is encoded as UTF-8 without BOM. The normalized encoding must be
1–1024 bytes. Web Crypto derives 256 bits with PBKDF2-HMAC-SHA-256, a fresh
cryptographically random 16-byte salt and the header iteration count.

The encrypted byte layout is:

1. eight ASCII bytes `MANNAE01`;
2. `uint16(1)` envelope version;
3. `uint32(outerHeaderByteLength)`;
4. canonical UTF-8 JSON `outerHeaderBytes`; and
5. for chunk indexes `0..chunkCount-1`,
   `uint32(sealedByteLength) || sealedBytes`.

The independently parseable outer header schema is:

```text
{format:"manna-encrypted-backup",envelopeVersion:1,
 kdf:{name:"PBKDF2",hash:"SHA-256",iterations:UInt,
      saltBase64url:String},
 cipher:{name:"AES-GCM",keyBits:256,tagBits:128,
         noncePrefixBase64url:String,nonceCounterEndian:"big"},
 chunkBytes:8388608,chunkCount:UInt,plaintextBytes:UInt}
```

Salt decodes to exactly 16 bytes; nonce prefix to exactly 8 bytes; base64url has
no padding. Iterations must be 600,000–2,000,000; chunk count must equal
`ceil(plaintextBytes/chunkBytes)`, must fit uint32, and all lengths are checked
against the file before PBKDF2. Plaintext chunk length is 8,388,608 bytes except
for the final remainder (or 8,388,608 when evenly divisible), and each
`sealedByteLength` must equal that chunk's plaintext length plus the 16-byte tag.

After the outer header is fully serialized, compute

```text
outerHeaderDigest = SHA256(
  ASCII("MANNAE01") || uint16BE(1) ||
  uint32BE(outerHeaderByteLength) || outerHeaderBytes)
nonce(i) = noncePrefix[8] || uint32BE(i)
aad(i) = hex("6d616e6e612d6261636b75702d6368756e6b2d763100") ||
         outerHeaderDigest || uint32BE(i) || uint32BE(chunkCount) ||
         uint64BE(plaintextBytes)
```

The AAD prefix is the ASCII bytes of `manna-backup-chunk-v1` followed by one
zero byte. `outerHeaderDigest` is derived, not a header field. AES-GCM
`tagLength` is exactly 128 bits and Web Crypto returns
`ciphertext || 16-byte tag` as `sealedBytes`. A fresh salt and nonce prefix are
mandatory for every backup; counter overflow is rejected.

Decryption parses and bounds-checks the unauthenticated outer header, normalizes
the supplied password identically, derives the key, recomputes the header digest,
and authenticates every chunk in order into temporary storage. Only after every
tag passes and the reconstructed byte count matches does it parse and validate
the inner container, section registry and digests. Passwords and keys are never
stored or logged, and there is no recovery route. Wrong password, authentication
failure, malformed header, unsupported parameters, duplicate/missing chunk,
nonce/counter overflow, unavailable cryptography, or inner validation failure
causes no application-state mutation. PBKDF2 and AES-GCM parameters map directly
to the [Web Cryptography API](https://w3c.github.io/webcrypto/#pbkdf2) and its
[AES-GCM parameters](https://w3c.github.io/webcrypto/#aes-gcm-operations);
interoperability and security remain unexecuted proof obligations.

### 9.3 Merge, migration, and restore transaction

Restore is inspect-only until confirmation. It validates framing, sizes,
digests, authentication, exact section sets and schemas, ancestry, schema range,
licenses, contents, conflicts and space; then shows Merge/Replace consequences.
Equal revision digests are no-ops. A mechanically proven descendant advances.
Divergent personal records are both retained. The current record keeps its ID.
The incoming payload is copied into a new revision-1 personal item whose
`recordId` is
`urn:manna:conflict:<lowerHex(SHA256(UTF8(originalId) || 0x00 ||`
`hexDecode(incomingRevisionDigest) || 0x00 ||`
`hexDecode(currentRevisionDigest)))>`, whose `conflictCopyOf` is the original
ID, and whose parent and ancestor fields are empty. Its content and revision
digests are recomputed under the new record ID. A `personal-links.v1` record
from that conflict-copy ID to `{kind:"personal-item",id:<originalId>}` uses
relation `conflict-of`. The link record ID is the lowercase SHA-256 of its
canonical domain payload prefixed by `urn:manna:personal-link:`. Both items
remain until the user resolves them. Canonical resources with the same ID but
different digest are rejected as identity corruption. No timestamp-only
last-write-wins is allowed.

Restore writes a durable journal and a new staging generation. Sequential
migrations run only there. Replace retains the old active generation until the
new one is verified and, when the file-save capability permits, first creates a
verified emergency full backup. Merge constructs a new generation from current
plus accepted incoming records. Activation is one atomic active-generation
pointer transaction. Post-activation verification precedes cleanup and success.
Interruption resumes inspection/staging or rolls back to the old pointer; quota,
digest, migration, cancellation, ancestry, authentication, or verification
failure deletes staging only.
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
