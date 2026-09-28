---
{
  "record_type": "EXTERNAL_OBSERVATION",
  "schema_version": 1,
  "project_id": "manna",
  "observation_id": "manna-v1-architecture-capability-matrix-r1",
  "observation_class": "ARCHITECTURE_CAPABILITY_MATRIX",
  "observed_at": "2026-09-28T05:13:11Z",
  "observed_value": "COMPLETE_FROZEN_V1_TRACE; revision 3 traces closed serialized backup aliases, conflict-of lineage, and durable entity/topic sections while preserving every frozen V1 capability and honest unexecuted-proof status",
  "proof_assurance": "PEER_DECLARATION",
  "revision": 3
}
---
# Manna V1 architecture capability matrix revision 3

## Status legend

- **FROZEN/DESIGNED** means product and flow authority exists; it is not working
  software evidence.
- **NOT RUN** means implementation or empirical evidence does not exist yet.
- **NOT STARTED** is retained for P0.1 exactly.
- Gate IDs refer to the gate ledger in
  `v1-architecture-reconciliation-r3.md`: `P0.1`, `PERSIST`, `SEC`, `DATA`,
  `RESTORE`, `BEHAVIOR`, `A11Y`, `PERF`, and `LICENSE`.

| Frozen V1 capability | Owner/component | Canonical durable or exchange format | Offline/security boundary | Proof gate | Current evidence status |
|---|---|---|---|---|---|
| Direct Reader launch; book/chapter/verse navigation; last location | Shell, PassageService, workspace state | `BibleReference`, source module ID, workspace snapshot | Bundled bytes; no network; invalid references do not mutate state | P0.1, BEHAVIOR, A11Y, PERF | FROZEN/DESIGNED; P0.1 NOT STARTED |
| Verbatim, source-identified Scripture and physical-Bible reminder | Canonical resources, Reader, Trust service | immutable verse records, `ResourceManifest`, reminder-session flag | Scripture distinct from editorial/inferred content; no reconstruction | DATA, BEHAVIOR, LICENSE, A11Y | FROZEN/DESIGNED; implementation NOT RUN; rights OPEN |
| Reader selection and compact action tray | SelectionService, Reader actions | typed passage/verse/word/place selection event | No pane-to-pane DOM coupling; keyboard/tap equivalents | P0.1, BEHAVIOR, A11Y, PERF | FROZEN/DESIGNED; P0.1 NOT STARTED |
| Full-screen, scroll/page reading and exact return | Navigation/workspace state, Reader projection | return frame with reference, selection, scroll, focus | Presentation-only change; safely escapable | BEHAVIOR, A11Y, PERF | FROZEN/DESIGNED; NOT RUN |
| Device read-aloud | Platform capability, Reader | ephemeral speech request; no durable audio | Local device voice only; optional capability; no download | BEHAVIOR, A11Y | FROZEN/DESIGNED; device evidence NOT RUN |
| Copy, print, PDF/DOCX/plain-text readable export | Export service, rights policy | attributed export document model; PDF, DOCX, UTF-8 text | Bundled generators; permission filtering; explicit local save | DATA, BEHAVIOR, LICENSE, A11Y | FROZEN/DESIGNED; format proofs NOT RUN |
| On-demand Study Desk in selected-passage context | Study coordinator, workspace state | selection plus pane/layout snapshot | Same state model on desktop/tablet/phone | P0.1, BEHAVIOR, A11Y, PERF | FROZEN/DESIGNED; P0.1 NOT STARTED |
| One resource per category by default; switch, follow and pin | ResourceService, SelectionService | pane state: resource ID, follow/pin, held reference, stale flag | Source identity always visible; no silent stacking | P0.1, BEHAVIOR, A11Y | FROZEN/DESIGNED; P0.1 NOT STARTED |
| Resize/reorder/collapse/presets; full-screen pane and exact return | Workspace state, responsive projection | versioned layout and return frames | Reflow, not phone column shrink; focus preserved | BEHAVIOR, A11Y, PERF | FROZEN/DESIGNED; NOT RUN |
| Deliberate unlimited compatible-source comparison | Comparison service, progressive renderer | ordered resource-ID set, grouping/collapse/focus state | Never merges translations or silently removes sources | BEHAVIOR, A11Y, PERF | FROZEN/DESIGNED; scale evidence NOT RUN |
| Commentary integration | Resource query and Study pane | canonical commentary entries keyed by passage/source | Editorial label; one active by default; rights-aware export | DATA, BEHAVIOR, LICENSE | FROZEN/DESIGNED; initial sources/rights OPEN |
| Dictionary and Bible-dictionary integration | Resource query and Study pane | keyed canonical dictionary entries and source manifest | Source-labelled safe AST only | DATA, SEC, BEHAVIOR, LICENSE | FROZEN/DESIGNED; NOT RUN |
| Lexicon and verified Strong's dictionary integration | WordStudyEngine | Strong's entry, lemma/form, grammar, provenance | Verified resource mapping only; no guessed alignment | DATA, BEHAVIOR, LICENSE | FROZEN/DESIGNED; datasets/rights NOT RUN |
| Exhaustive verified Strong's quick preview and Word Study | WordStudyEngine, concordance indexes | mapping edges with mapped/one-many/many-one/ambiguous/supplied/unmapped state | Hover has tap/keyboard equivalent; KJV baseline route labelled | DATA, BEHAVIOR, A11Y, PERF | FROZEN/DESIGNED; golden corpus NOT RUN |
| Imported morphology resources without advanced V1 workspace | Resource adapters/query | source-labelled morphology records | Data is inert; unsupported claims are not inferred | DATA, SEC, LICENSE | V1 boundary FROZEN; adapter proof NOT RUN |
| Cross-reference integration | CrossReferenceEngine, Study pane | typed source-labelled reference edges | Exact links distinguished from inferred links | DATA, BEHAVIOR, LICENSE | FROZEN/DESIGNED; public-domain source proof OPEN |
| Exact, reference, phrase and word search | SearchEngine, rebuildable indexes | normalized query AST, source result IDs, saved-search record | Entirely local; indexes rebuildable; source text immutable | DATA, BEHAVIOR, PERF | FROZEN/DESIGNED; golden/performance tests NOT RUN |
| Concordance and occurrence navigation | ConcordanceEngine | word/Strong's occurrence index and canonical references | Local progressive query; exact counts tied to source digest | DATA, BEHAVIOR, PERF | FROZEN/DESIGNED; golden counts NOT RUN |
| Transparent Verse Finder / remembered-idea search | VerseFinderEngine | query tokens, result score millionths, explanation, model/version | Deterministic/local; confidence shown; never fabricated Scripture | DATA, BEHAVIOR, PERF | FROZEN/DESIGNED; evaluation corpus NOT RUN |
| Saved and recent searches | SearchService, personal store | personal saved-query records and ephemeral/recent history | Local only; delete does not alter sources | DATA, BEHAVIOR, RESTORE | FROZEN/DESIGNED; NOT RUN |
| Notes linked to verses, passages, words, people, places, topics and resources | PersonalStudyService | closed `TypedId`/`Anchor`; UUID personal item with ancestry, links and tombstone; full backup carries `entities.v1` and `topics.v1` | Autosave local; source/entity/topic records immutable | DATA, BEHAVIOR, RESTORE, A11Y | FROZEN revision-3 serialization; persistence/round trip NOT RUN |
| Highlights and named collections | PersonalStudyService, Reader | range anchors, collection ID, color plus non-color cue | Meaning never color-only; source text unchanged | DATA, BEHAVIOR, A11Y, RESTORE | FROZEN/DESIGNED; NOT RUN |
| Bookmarks, questions, and observations | PersonalStudyService | typed personal items with source anchors | Local, exportable, independently removable | DATA, BEHAVIOR, RESTORE | FROZEN/DESIGNED; NOT RUN |
| Study sessions and pausable/clearable Study Trail | Session/Trail service | session records and ordered visit events | Local only; clear Trail does not delete notes | DATA, BEHAVIOR, RESTORE, A11Y | FROZEN/DESIGNED; NOT RUN |
| Workspace navigation memory, recent history, exact Back | Navigation/workspace state | per-workspace return stack and bounded recent history | No cross-workspace silent state loss; local only | BEHAVIOR, A11Y | FROZEN/DESIGNED; interruption proof NOT RUN |
| Library browse, inspect, enable/disable and organize | LibraryService, canonical resources | manifests, installation state, optional collections | Disable never deletes; all sources/licenses visible | DATA, BEHAVIOR, LICENSE, A11Y | FROZEN/DESIGNED; NOT RUN |
| Module import: SWORD, OSIS, VPL/structured text, JSON, IMP and validated ecosystem exports | Import boundary and format adapters | original digest to canonical resource records plus adapter/version | Hostile bytes; bounded parse; detect/preview read-only; transactional activation | SEC, DATA, BEHAVIOR, PERF, LICENSE | FROZEN; technical/legal feasibility and fixtures NOT RUN |
| Module kinds: Bibles, commentaries, dictionaries, lexicons, Strong's, morphology | Resource adapters and canonical domain | type-specific canonical records plus `ResourceManifest` | Unsupported/proprietary format fails closed with export guidance | SEC, DATA, BEHAVIOR, LICENSE | FROZEN; adapters/rights NOT RUN |
| Text-based PDF ingestion | Document adapter, SourceDocument service | immutable page-index/page-label block/span anchors and extracted text | No scripts/remote assets; image-only PDF rejected as OCR-deferred | SEC, DATA, BEHAVIOR, PERF | FROZEN; parser/anchor fixtures NOT RUN |
| DOCX ingestion | Document adapter, SourceDocument service | heading-path plus paragraph/run anchors, local raster assets | Bounded archive; no macros/external relationships/active content | SEC, DATA, BEHAVIOR, PERF | FROZEN; hostile DOCX fixtures NOT RUN |
| TXT ingestion | Document adapter, SourceDocument service | encoding decision, immutable lines and character spans | Size/record limits; no executable interpretation | SEC, DATA, BEHAVIOR | FROZEN; encoding/anchor fixtures NOT RUN |
| Markdown ingestion | Document adapter, safe-markup converter | heading-path/block/span anchors and closed safe AST | Raw HTML/CSS/URLs never become executable DOM or network loads | SEC, DATA, BEHAVIOR | FROZEN; parser/sink audit NOT RUN |
| Guided classification, preview, progress, cancel and verified import summary | Import coordinator, job service, Library UI | staged import job/journal, preview model, counts/warnings | User confirms metadata; cancellation leaves active generation verified | SEC, DATA, BEHAVIOR, PERF, A11Y | FROZEN/DESIGNED; NOT RUN |
| Explicit and inferred Scripture linking with confidence/explanation | SemanticLinkEngine | deterministic `SemanticLink` over closed `Anchor`/`TypedId`, durable entity/topic targets, integer score, tier and algorithm/version | Local only; exact vs inferred visually/semantically distinct | DATA, BEHAVIOR, A11Y, PERF | FROZEN revision-3 serialization; algorithm corpus NOT RUN |
| Optional review; remove/correct/restore/undo derived links | Link overlay service | append-only reversible overlay operations and proposal sets | Never changes imported source; rerun cannot silently reactivate suppression | DATA, BEHAVIOR, RESTORE | FROZEN/DESIGNED; lifecycle/undo tests NOT RUN |
| Place cards and verified/uncertain geography | AtlasEngine, entity index | place/entity records with provenance, confidence and source anchors | No invented coordinates/relationships; uncertainty non-color cue | DATA, BEHAVIOR, A11Y, LICENSE | FROZEN/DESIGNED; atlas source proof OPEN |
| Map Pack import and inspection | Map adapter, MapPack service | `MapPack` manifest with layers/views/source view and attribution | Hostile source; geometry only when supplied/verified | SEC, DATA, BEHAVIOR, LICENSE | FROZEN/DESIGNED; adapters/rights NOT RUN |
| Map Layers and Geographic, Route/Journey, Region, Timeline, Relationship, Source Map views | AtlasEngine, progressive map renderer | `MapLayer` typed geometry/entities and `MapView` layer references | Local assets only; verified/uncertain/source-only status explicit | DATA, BEHAVIOR, A11Y, PERF | FROZEN/DESIGNED; rendering/performance NOT RUN |
| Map fallback states: Fully/Partially Interactive, Source View Only, Needs Review | MapPack service, SourceDocument viewer | conversion status, warnings, source anchors and retained source view | Incomplete conversion falls back; never fabricates geometry | DATA, BEHAVIOR, RESTORE | FROZEN/DESIGNED; conversion fixtures NOT RUN |
| Full `.mannabackup` | BackupService | `MANNAB01`; 19 required full sections including entities/topics, closed alias shapes, canonical JSONL, DEFLATE and SHA-256 descriptors | Entirely local; complete imported canonical library; unknown fields/required sections fail closed; indexes excluded/rebuilt | DATA, RESTORE, PERF | FROZEN revision-3 schema; round-trip/capacity proof NOT RUN |
| Personal Data Only export | BackupService | `MANNAB01`; exactly six required personal sections with closed mutable-lineage, `SafeAstOrText`, `TypedId` and `Anchor` shapes | No imported payloads or optional V1 sections; preview names omissions | DATA, RESTORE | FROZEN revision-3 schema; round trip NOT RUN |
| Optional password-encrypted backup | Crypto boundary, BackupService | `MANNAE01`; NFC/UTF-8 password, independently parsed canonical header, derived header digest, exact AAD/nonces and 128-bit-tag AES-256-GCM chunks | Header bounds checked before KDF; password/key never stored; no recovery; all chunks and inner digests verify before mutation | SEC, DATA, RESTORE, PERF | FROZEN revision-2 envelope; crypto interoperability NOT RUN |
| Safe Merge/Replace restore, migrations and conflicts | RestoreService, generation store | stable ID plus revision/parent/ancestor digests; divergent retained records joined by closed `conflict-of` personal link; staging generation/journal | Descendant/divergence is mechanically decided; no mutation before confirm; no timestamp-only overwrite; unknown future schema rejected | DATA, RESTORE, PERF | FROZEN revision-3 lineage; failure/interruption suite NOT RUN |
| Emergency backup, quota rollback and verified recovery | RestoreService, StorageProvider | external emergency backup when possible, old active generation, durable journal | Atomic pointer activation; quota/error deletes staging only | PERSIST, RESTORE, PERF | FROZEN architecture; quota/device proof NOT RUN |
| System, Light, Sepia, Dark; Scripture type/size/spacing/width | Theme/appearance service | design tokens and presentation settings | Presentation only; does not change resources/study state | BEHAVIOR, A11Y | FROZEN/DESIGNED; all-theme audit NOT RUN |
| Words of Christ: Red+Mark, Mark Only, Off; supplied-word marking | Reader renderer, source metadata | immutable speech/supplied markers plus presentation preference | Source-driven; meaning not color-only; preserved in export | DATA, BEHAVIOR, A11Y | FROZEN/DESIGNED; golden/accessibility tests NOT RUN |
| First run, Trust/About, compact session/study reminders and Help | Shell, Trust service | onboarding completion and session-only reminder state | Explains local operation/import trust; reminder does not obscure Scripture | BEHAVIOR, A11Y | FROZEN/DESIGNED; NOT RUN |
| Startup capability check and explicit reduced/read-only modes | Capability service, Shell | capability report, class, sanitized probe outcomes | No silent persistence claim; mutating features disabled when unsafe | P0.1, PERSIST, BEHAVIOR, A11Y | FROZEN architecture; P0.1 NOT STARTED |
| Storage status, backup status and local diagnostics | StorageProvider, Diagnostics service | local estimates, persistence state, versions, sanitized job/errors | No content, secret, path, tracking ID or upload | PERSIST, SEC, BEHAVIOR, A11Y | FROZEN/DESIGNED; browser proof NOT RUN |
| Persistent progress for import, indexing, backup and restore | Job service, owning UI surfaces | checkpointed idempotent job and durable journal | Leaveable/cancellable; Reader stays usable; success only after verification | DATA, RESTORE, BEHAVIOR, A11Y, PERF | FROZEN/DESIGNED; interruption tests NOT RUN |
| Same complete core on desktop, tablet and phone | Responsive projection, all feature owners | shared domain/workspace state; platform-specific presentation only | No desktop-only core capability; reflow and exact context preservation | P0.1, BEHAVIOR, A11Y, PERF | FROZEN/DESIGNED; real-device proof NOT RUN |
| Mouse, keyboard, touch, screen reader, reduced motion, RTL and scalable text | Accessible UI and responsive projection | semantic DOM/state announcements; language/direction metadata | WCAG 2.2 AA whole-app target; no hover/color-only essential action | A11Y, BEHAVIOR | FROZEN/DESIGNED; conformance NOT CLAIMED/NOT RUN |
| Offline/no-account/no-telemetry operation and local ownership | Build, CSP/network policy, persistence/export services | self-contained artifact, local stores, user-controlled exports, exact hash-based CSP meta immediately after charset | Exact `default/connect/object/frame/media/manifest/base/form` deny policy; `img-src data: blob:`, `font-src data:`, hash-only app script/style, Blob Worker only; header-only protections not claimed | P0.1, SEC, DATA | FROZEN revision-2 CSP; P0.1 NOT STARTED; enforcement NOT RUN |
| Deterministic one-file distribution and conditional official Library Pack | Build/release tooling, Import boundary | `manna.html`, digest manifest; official content-addressed pack if governed trigger occurs | Pack imported once; no runtime dependency; fallback requires failed evidence and decision | P0.1, PERF, LICENSE | Preferred one-file FROZEN; P0.1 NOT STARTED; fallback not triggered |
| Base study library: KJV PCE, Strong's, two Matthew Henry depths, Webster 1828, cross-references, Bible dictionary, atlas | Canonical resources, build/release registry | embedded resource manifests/data with per-resource digest/license | No release with unresolved required source or territorial rights | DATA, LICENSE, P0.1, PERF | Product FROZEN; source/license verification OPEN |

## Explicit non-capabilities in V1

OCR; reading plans; prayer journal; Scripture memory/spaced review/flashcards;
sermon, preaching, presentation/church and QR-sharing tools; printable study
sheets; bundled narration/downloadable audio; cloud sharing/collaboration; local
assistant/Ask the Text; and advanced interlinear/morphology workspaces have no V1
owner, durable store, route, or proof gate. Their absence is intentional and
prevents the older engineering specification from reintroducing deferred scope.

