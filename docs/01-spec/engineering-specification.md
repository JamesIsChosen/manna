# Manna — Engineering Specification

**Version 0.3**

Converted from the original .docx on 2026-08-15. Content preserved; structure normalized to Markdown.

## 1. Purpose

This specification converts the Manna product vision into an implementation-governing engineering plan.

Manna shall be a:

**mobile-first, desktop-capable, offline Bible research workstation distributed as one self-contained HTML file.**

The final distributable artifact shall be:

manna.html

The source repository may contain any number of development files, tests, fixtures, schemas, scripts, and modules.

The **release artifact**, however, shall be one HTML file.


## 2. Non-Negotiable Requirements

The following requirements override convenience, framework preference, and implementation shortcuts.


### R1 — Single Release File

Normal application distribution shall consist of one file:

manna.html

No sibling JavaScript, CSS, image, font, WASM, or configuration file may be required for core startup.


### R2 — Offline Core

After the HTML file is obtained, all core functions must operate without network access.


### R3 — Mobile First

The same release file must support:

phone portrait

phone landscape

tablet portrait

tablet landscape

desktop

No separate mobile application shall be required.


### R4 — No Server Required

Manna must not require:

Node.js

Python

PHP

local HTTP server

database server

cloud backend

during normal use.


### R5 — Scripture Integrity

Manna shall never manufacture, silently alter, or reconstruct displayed Scripture.

Displayed verse text shall come from an installed or bundled Bible module.


### R6 — User Ownership

Notes, highlights, sermons, reading progress, and other user-created data shall be locally owned and exportable.


### R7 — Safe Import

Imported modules are untrusted input.

Importing a Bible, commentary, dictionary, or study resource must never grant that resource executable capability.


### R8 — Deterministic Study Tools

Features such as:

exact search

Strong’s lookup

word counts

cross-reference lookup

morphology search

must produce deterministic results from installed data.


## 3. Development Model

The project shall maintain a conventional source tree even though it produces one file.

Suggested structure:

manna/
│
├─ src/
│  ├─ app/
│  ├─ reader/
│  ├─ search/
│  ├─ study/
│  ├─ modules/
│  ├─ storage/
│  ├─ sermon/
│  ├─ atlas/
│  ├─ timeline/
│  ├─ ui/
│  ├─ mobile/
│  ├─ security/
│  └─ workers/
│
├─ resources/
│  ├─ bibles/
│  ├─ strongs/
│  ├─ crossrefs/
│  ├─ pericopes/
│  ├─ atlas/
│  └─ licenses/
│
├─ schemas/
├─ tests/
├─ fixtures/
├─ scripts/
├─ docs/
└─ dist/
   └─ manna.html

Development readability shall not be sacrificed merely because the release is one file.

A deterministic build process shall assemble the release artifact.


## 4. Release Packaging

The production build shall inline all core runtime dependencies into manna.html.

Potential embedded resources include:

compiled JavaScript

compiled CSS

SVG icons

image assets

application manifest metadata

small public-domain datasets

fonts when legally and technically justified

worker source

optional WebAssembly payloads

Binary content may be represented using:

Base64

compressed byte arrays

embedded binary strings

generated JavaScript constants

depending on size and runtime performance.


## 5. Build Reproducibility

The build process shall be deterministic.

Two builds from identical:

source

dependencies

resources

configuration

should produce byte-identical release artifacts where technically practical.

Build output shall produce:

manna.html

SHA-256 digest

build manifest

bundled-resource license manifest

application version

schema version

backup-format version


## 6. No Runtime CDN Dependencies

The production artifact must contain no required runtime references to:

Google Fonts

npm CDN

jsDelivr

unpkg

remote map tiles

remote JavaScript

remote CSS

externally hosted icons

Network access shall not be necessary to render the application.


## 7. Application Architecture

Manna should use a layered architecture.

┌────────────────────────────────────────┐
│               UI LAYER                 │
│ Reader / Search / Study / Sermon       │
├────────────────────────────────────────┤
│           APPLICATION SERVICES         │
│ Passage / Search / Library / Notes     │
├────────────────────────────────────────┤
│             STUDY ENGINES              │
│ Concordance / Strong's / Semantic      │
├────────────────────────────────────────┤
│           RESOURCE ABSTRACTION         │
│ Bible / Commentary / Lexicon / Atlas   │
├────────────────────────────────────────┤
│              DATA LAYER                │
│ IndexedDB / Memory / Export / Import   │
├────────────────────────────────────────┤
│          PLATFORM ABSTRACTION          │
│ File APIs / Workers / Speech / Device  │
└────────────────────────────────────────┘

UI components shall never directly parse external module formats.

Import adapters convert resources into canonical Codex structures first.


## 8. Canonical Resource Architecture

Every external resource shall be converted into an internal Codex representation.

External formats must never leak throughout the application.

For example:

SWORD
    │
    ▼
SWORD Adapter
    │
    ▼
MannaModule

and:

OSIS
    │
    ▼
OSIS Adapter
    │
    ▼
MannaModule

The reader consumes BibleModule, not SWORD or OSIS directly.


## 9. Canonical Reference Model

The base reference structure shall resemble:

BibleReference {
    canon
    book
    chapter
    verseStart
    verseEnd
}

Additional optional metadata:

versification
subverse
segment

Example:

{
    canon: "protestant",
    book: "ROM",
    chapter: 8,
    verseStart: 28,
    verseEnd: 30
}

Book identifiers shall use stable machine identifiers instead of display names.


## 10. Bible Module Contract

Conceptual structure:

BibleModule {
    moduleId
    formatVersion
    title
    abbreviation
    language
    direction
    canon
    versification
    publisher
    author
    license
    copyright
    source
    features
    books
}

Features may declare:

features {
    strongs
    morphology
    redLetter
    pericopes
    footnotes
    crossReferences
    headings
}


## 11. Verse Record

Conceptual verse structure:

VerseRecord {
    reference
    plainText
    tokens
    segments
}

plainText is the canonical readable text.

tokens may contain structured study annotations.

Example:

Token {
    text
    normalized
    strongs[]
    lemma[]
    morphology[]
    speaker
}


## 12. Red-Letter Representation

Words of Christ shall be represented as explicit metadata.

Example:

Token {
    text: "I am the resurrection",
    speaker: "jesus"
}

or structured segments:

Segment {
    type: "speech",
    speaker: "jesus",
    text: "I am the resurrection..."
}

Manna shall not infer Christ’s speech from punctuation.

If the module lacks reliable speaker metadata:

redLetterAvailable = false

The application must not guess.


## 13. Red-Letter Rendering

Setting:

Words of Christ:
[ Standard ]
[ Red ]

Optional accessibility setting:

Christ Speech Style:
[ Red ]
[ Bold Accent ]
[ Underline ]
[ Custom ]

Search indexes shall use the underlying text and remain unaffected by visual styling.

Copying plain Scripture shall not inject formatting markers.


## 14. Commentary Module Contract

CommentaryModule {
    moduleId
    title
    author
    language
    license
    entries[]
}

Each entry:

CommentaryEntry {
    referenceStart
    referenceEnd
    content
}

Imported formatting shall be converted to a safe supported markup subset.


## 15. Dictionary / Lexicon Contract

DictionaryModule {
    moduleId
    title
    language
    license
    entries[]
}

Entry:

DictionaryEntry {
    key
    aliases[]
    content
    references[]
}


## 16. Strong’s Entry

StrongsEntry {
    id
    language
    original
    transliteration
    pronunciation
    lemma
    partOfSpeech
    definition
    derivation
}

Examples:

H7225
G26
G3056


## 17. Morphology Record

MorphologyRecord {
    scheme
    code
    language
    lemma
    partOfSpeech
    tense
    voice
    mood
    person
    number
    gender
    case
}

Manna shall preserve the originating morphology scheme rather than pretending all datasets use identical encoding.


## 18. Personal Annotation Model

Annotation {
    id
    type
    target
    selectedText
    body
    tags[]
    createdAt
    updatedAt
}

Possible type values:

note

highlight

question

observation

custom-reference


## 19. Bookmark Model

Bookmark {
    id
    reference
    title
    folder
    tags[]
    note
    createdAt
}


## 20. Sermon Project Model

SermonProject {
    id
    title
    primaryText
    theme
    purpose
    sections[]
    resources[]
    createdAt
    updatedAt
}

Sermon structure shall permit arbitrary sections.

Do not hard-code a three-point sermon format.


## 21. Reading Plan Model

ReadingPlan {
    id
    title
    description
    days[]
}

Each day:

ReadingPlanDay {
    ordinal
    references[]
    completed
    completedAt
}


## 22. Scripture Memory Model

MemoryItem {
    id
    reference
    translationId
    createdAt
    stage
    dueAt
    interval
    ease
}

The scheduling algorithm shall remain replaceable and versioned.


## 23. Prayer Journal Model

PrayerEntry {
    id
    title
    body
    references[]
    status
    createdAt
    answeredAt
    tags[]
}

Prayer data shall remain local and excluded from exported Study Packs unless explicitly selected.


## 24. People Database

Person {
    id
    primaryName
    aliases[]
    gender
    tribe
    familyRelations[]
    references[]
    locations[]
    events[]
    timelineRange
    dictionaryLinks[]
}

Claims that involve historical uncertainty should support:

confidence
source
notes


## 25. Place Database

Place {
    id
    name
    aliases[]
    latitude
    longitude
    confidence
    modernIdentification
    references[]
    events[]
}

Coordinates must support uncertainty.

A disputed location shall never be presented as certain merely because map coordinates exist.


## 26. Timeline Event Model

TimelineEvent {
    id
    title
    dateStart
    dateEnd
    certainty
    references[]
    people[]
    places[]
    description
    sources[]
}

Approximate dates and disputed chronology must be explicitly representable.


## 27. Storage Architecture

Manna shall use a storage abstraction rather than calling browser storage APIs throughout application code.

Example:

StorageProvider
    get()
    put()
    delete()
    query()
    transaction()
    export()

Primary implementation:

**IndexedDB**

Possible limited fallback:

**in-memory session storage**

The application shall never pretend temporary storage is persistent.


## 28. Database Separation

Logical stores should be separated.

Suggested stores:

settings
modules
verses
resourceEntries
indexes
annotations
bookmarks
sermons
readingPlans
memoryItems
prayerJournal
studySessions
history
people
places
timeline

This enables selective export and migration.


## 29. Storage Health Check

At startup Manna shall perform a storage capability test.

Possible status:

**Persistent local storage available**

or:

**Limited storage mode**

If persistence is uncertain, prominently advise:

Export your study library regularly.

The application shall never silently rely on uncertain local persistence for irreplaceable user data.


## 30. Backup Architecture

Manna backup format shall have a stable extension such as:

my-library.mannabackup

The file contents should be a versioned container.

Conceptual manifest:

{
  "format": "manna-backup",
  "version": 1,
  "created": "...",
  "appVersion": "...",
  "sections": []
}


## 31. Backup Sections

Potential sections:

settings

annotations

bookmarks

sermons

readingPlans

memory

questions

prayerJournal

studySessions

customTopics

chains

Optional:

imported modules

Each section shall carry an integrity digest.


## 32. Backup Safety

Restore shall not immediately overwrite the current library.

Required workflow:

inspect backup;

validate format;

validate integrity;

show summary;

detect conflicts;

offer merge or replacement where appropriate;

create an emergency pre-restore backup where technically possible;

perform transaction;

verify result.

Malformed backups must fail closed.


## 33. Module Import Adapter Interface

Conceptually:

ModuleAdapter {
    detect()
    inspect()
    validate()
    import()
}

detect() must never mutate application state.

inspect() returns metadata.

validate() determines compatibility.

import() performs conversion.


## 34. Module Detection

File extensions alone shall not be trusted.

Detection should evaluate:

structure

magic bytes where applicable

metadata

expected directory/files

schema

content signatures

A .bible filename does not make a file a valid Bible module.


## 35. SWORD Adapter

The first substantial external ecosystem adapter should target documented CrossWire SWORD module structures.

The adapter shall support resource types individually.

Initial target sequence:

uncompressed Bible text;

compressed Bible modules;

Strong’s-enabled Bible modules;

dictionaries/lexicons;

commentaries;

general books where useful.

Each format requires independent fixtures and tests.


## 36. OSIS Adapter

OSIS support should convert XML structures into canonical Codex structures.

The importer shall explicitly process only required safe XML structures.

Imported XML must not result in arbitrary executable HTML.


## 37. Import Resource Preview

Before installation, users shall see:

RESOURCE FOUND

Name: ...
Type: Bible
Language: English
Format: SWORD
Versification: KJV
Strong's: Yes
Red Letter: Yes
Morphology: No
License: ...

[Import]
[Cancel]

Unknown license metadata shall be shown as unknown.


## 38. Import Progress

Large imports shall provide progress:

Importing Bible...

Reading module        ✓
Validating             ✓
Converting verses      ✓
Building word index    76%
Building Strong's      ...

Importing must not freeze the visible interface.


## 39. Import Transactions

Module installation shall behave transactionally.

Either:

**complete valid module installed**

or:

**no module installed**

Partial imports shall not appear in the user’s library.


## 40. Search Engine Architecture

Search shall be separated into multiple engines.

SearchCoordinator
│
├─ ReferenceSearch
├─ ExactTextSearch
├─ ConcordanceSearch
├─ StrongsSearch
├─ MorphologySearch
├─ ResourceSearch
└─ VerseFinder

The UI may expose them through one search field.


## 41. Text Normalization

Indexes should maintain both:

**original text**

and normalized searchable representations.

Normalization may include:

case folding

punctuation removal

Unicode normalization

configurable diacritic handling

tokenization

Original Scripture must never be replaced by normalized text.


## 42. Exact Word Search

Exact Word mode shall respect token boundaries.

Searching:

love

must not silently match:

loved

unless inflection/stemming mode is explicitly enabled.


## 43. Phrase Search

Phrase search shall preserve word order.

Example:

kingdom of God

shall return verses containing the phrase according to the selected normalization rules.


## 44. Wildcard Search

Wildcard support may include:

lov*

Search complexity shall be bounded to prevent pathological queries from freezing the application.


## 45. Proximity Search

Example syntax:

faith NEAR works

Internal representation should support configurable token distance.

Example:

NEAR/5

may mean within five tokens.


## 46. Concordance Engine

For each normalized searchable token, indexes may store:

word
totalOccurrences
verseCount
references[]
bookCounts{}
chapterCounts{}

Counts shall be computed from the currently selected Bible module.


## 47. Strong’s Index

Index:

StrongId -> occurrences[]

Each occurrence may contain:

reference
tokenPosition
surfaceText
lemma
morphology

This allows fast:

**Find Every Occurrence**


## 48. Lemma Index

Where source data permits:

Lemma -> occurrences[]

This index powers original-language search independent of English translation choices.


## 49. Morphology Index

Morphological dimensions may be indexed separately.

Example:

lemma = logos
partOfSpeech = noun
case = nominative
number = singular

Advanced query operations should intersect indexed sets rather than scan an entire corpus.


## 50. Search Worker

Heavy search and indexing operations should execute outside the primary UI execution path where platform support permits.

Potential worker responsibilities:

building indexes

large concordance queries

Verse Finder scoring

module conversion

backup compression

graph layout calculations

If a worker capability is unavailable, Manna shall provide a safe degraded implementation.


## 51. Verse Finder Architecture

The first implementation shall favor a transparent offline hybrid engine over an opaque large AI model.

Conceptual scoring:

score =
    lexicalSimilarity
  + synonymSimilarity
  + conceptSimilarity
  + phraseSimilarity
  + rareTermBonus
  + crossReferenceSignal
  + topicSignal
  + entitySignal

Weights shall be configuration-versioned.


## 52. Verse Finder Query Processing

Query:

people helped angels without knowing

Possible processing:

tokens:
people
helped
angels
knowing

concept expansion:
hospitality
strangers
entertain
unaware
angel

Candidate verses are retrieved.

Candidates are scored.

Actual verse text is then retrieved from the selected Bible module.


## 53. Confidence Score

The displayed percentage shall be a calibrated ranking confidence rather than raw internal score.

Codex should distinguish:

match score

from:

theological confidence

The latter shall not exist.


## 54. Verse Finder Explanation

Each result should preserve contributing signals.

Example:

Hebrews 13:2 — 96%

Why:
✓ angels
✓ strangers
✓ hospitality concept
✓ unaware concept
✓ close semantic phrase match

This explanation makes the system inspectable.


## 55. Verse Finder Evaluation Corpus

A dedicated test dataset shall contain natural-language prompts.

Each test record:

query
expectedPrimary[]
acceptableSecondary[]
forbiddenFabrication

Example:

query:
"don't worry about tomorrow"

expectedPrimary:
Matthew 6:34


## 56. Search Quality Metrics

Verse Finder evaluation should track:

Top-1 accuracy

Top-3 recall

Top-5 recall

false-positive frequency

confidence calibration

query latency

Quality regression shall be testable across versions.


## 57. Bible Knowledge Graph

Manna shall treat interconnected study information as a graph.

Node types may include:

verse

passage

person

place

event

topic

Strong’s word

lemma

commentary entry

Edges may include:

cross-reference

quotes

occurs-at

parent-of

child-of

associated-with

contemporary-of

translation-of

discusses

user-created


## 58. Graph Integrity

Machine-generated graph edges must preserve provenance.

Example:

Edge {
    from
    to
    relation
    source
    confidence
}

A user-created connection must be distinguishable from a published cross-reference dataset.


## 59. Cross-Reference Graph UI

Graph rendering shall be lazy.

Do not attempt to render the entire Bible graph simultaneously.

Start with:

current verse
+ immediate neighbors

Users expand nodes on demand.

This is especially important on phones.


## 60. Atlas Architecture

Maps should use an offline vector-based rendering strategy.

Preferred resource types:

SVG

compact geometry

internally stored coordinates

The application shall not require Internet map tiles.


## 61. Atlas Projection

The initial atlas may use simplified purpose-built biblical maps rather than a full modern web-mapping engine.

Primary goals:

clarity

offline operation

small size

pinch/zoom

Scripture linkage


## 62. Historical Uncertainty

Map records must allow:

certainty:
confirmed
probable
possible
disputed
unknown

The interface shall represent uncertainty visually.


## 63. Timeline Architecture

Timeline data should remain independent of rendering.

The rendering layer receives:

events within requested range

rather than loading the entire historical dataset into the DOM.


## 64. Reader Rendering

Bible chapters should not be rendered as enormous uncontrolled HTML strings.

Render structured passage blocks.

Suggested hierarchy:

Book
  Chapter
    Pericope
      Paragraph
        Verse
          Segment
            Token

Not every layer must physically exist in the DOM simultaneously.


## 65. Virtualized Rendering

For long:

search results

commentary lists

occurrence lists

concordance lists

Manna shall render only the visible region plus a reasonable buffer.

This is critical for mobile memory use.


## 66. Page Mode Pagination

Comic Page Mode shall paginate Scripture according to the current:

viewport

font size

line height

margins

verse-number mode

Strong’s display mode

orientation

Pagination shall be recalculated when these change.

Pagination state must not affect Scripture references.


## 67. Page-Turn Animation

The animation layer shall operate on completed page surfaces rather than modifying Scripture content.

Animation must be interruptible.

Rapid user interaction must not create a queue of dozens of page animations.


## 68. Performance Degradation

If device performance falls below acceptable limits:

Full Page Curl
     ↓
Simple Turn
     ↓
Slide
     ↓
No Animation

The reader remains functional regardless of GPU performance.


## 69. Mobile Navigation

Phone primary bar:

READ
SEARCH
STUDY
NOTES
MORE

Context actions belong in bottom sheets rather than desktop-style modal windows where practical.


## 70. Passage Inspector Responsive Behavior

Desktop:

Bible | Passage Inspector

Phone:

Bible
───────
Swipe-up Inspector

Tablet:

user-selectable side or bottom panel.


## 71. Touch Action Model

Tap verse:

select verse.

Long press:

open verse action sheet.

Tap Strong’s marker:

open Strong’s quick card.

Swipe horizontally in Page Mode:

navigate.

Swipe vertically from study handle:

open Study Drawer.

Pinch:

reserved for zoomable maps/graphs and optionally text sizing.


## 72. Hover Equivalence Rule

Every hover feature must have a touch equivalent.

Examples:

Desktop hover Strong's
=
Mobile tap Strong's

Desktop hover Scripture reference
=
Mobile tap reference

A feature failing this rule is not considered mobile complete.


## 73. Desktop Workspace

Desktop users may arrange up to four major panes.

Potential configurations:

Bible | Commentary

Bible | Interlinear | Commentary

Bible | Notes | Atlas

Pane state should be preserved as a preference.


## 74. Mobile Memory Constraints

Manna shall assume phones have substantially tighter usable memory than desktop systems.

Therefore:

never load all commentary entries into DOM;

never decode all map assets simultaneously;

release obsolete temporary buffers;

paginate large imports;

build indexes incrementally;

virtualize long result lists.


## 75. Application State

Current navigation state should resemble:

AppState {
    activeBible
    currentReference
    readerMode
    panels
    activeCommentary
    activeSearch
}

Personal persistent data shall remain separate from transient UI state.


## 76. Study Trail

The study history should use semantic navigation entries.

Example:

{
  type: "passage",
  reference: "ROM.8.28"
}

or:

{
  type: "strongs",
  id: "G26"
}

This enables meaningful backward traversal.


## 77. Internal Link Protocol

Codex resources shall use an internal logical route syntax.

Examples:

codex://passage/ROM/8/28
codex://strongs/G26
codex://person/paul
codex://place/jerusalem

These are conceptual internal identifiers and need not invoke external browser protocols.


## 78. Scripture Reference Detection

Notes and imported resources may contain references such as:

Romans 8:28
Jn 3:16
1 Cor 13:4-7

The parser shall convert recognized references into internal links.

Ambiguous references should not be silently rewritten.


## 79. Notes Editor

The notes editor should use a constrained internal document format.

Avoid storing arbitrary executable HTML.

Suggested model:

paragraphs

headings

bold

italic

lists

links

Scripture references


## 80. Sermon Editor

The sermon editor may use the same safe structured-document engine as notes.

This reduces:

attack surface

code duplication

backup complexity

formatting inconsistency


## 81. Printing

Print output shall use a dedicated print stylesheet.

Comic visual effects should be reduced by default to conserve ink and maximize readability.

Users may optionally choose:

**Print Comic Styling**


## 82. Presentation Mode

Presentation Mode shall render into a clean full-screen surface.

It must not depend on PowerPoint.

Controls:

next passage

previous passage

font size

theme

red-letter mode

blackout

reference visibility


## 83. Security Boundary

The browser runtime containing Manna code is trusted.

Imported data is not.

This distinction shall govern all parsing.


## 84. Prohibited Imported Behaviors

Imported resources must not be allowed to execute:

JavaScript

inline event handlers

remote scripts

arbitrary CSS affecting the application

iframe content

plugin objects

executable URLs


## 85. Safe Markup

Commentary and dictionary content shall be transformed into a strict internal markup model.

Supported concepts might include:

paragraph

bold

italic

heading

list

Scripture reference

simple table

safe image where supported

Everything else is discarded or converted to plain text.


## 86. URL Policy

Imported modules must not silently cause network requests.

External hyperlinks may be:

displayed

copied

manually opened after explicit user action

Remote images shall not automatically load.


## 87. Content Security Policy

The release artifact should employ the strictest Content Security Policy compatible with:

embedded scripts

embedded styles

required runtime-generated workers

local file execution

The production build must explicitly test that external network execution is blocked.


## 88. Network Guard

Development tests shall verify the finished app can perform core workflows while network access is denied.

Unexpected runtime network requests constitute a defect.


## 89. Privacy

Manna shall include no hidden:

telemetry

analytics

advertising identifier

crash-report uploader

behavioral tracking

A future optional online capability must receive explicit consent and remain isolated from core operation.


## 90. License Registry

Every bundled dataset shall have an entry resembling:

Resource ID
Title
Author
Source
Version
License
Redistribution allowed
Modification allowed
Attribution requirements
Verification date

The release process must fail if a required built-in resource lacks licensing metadata.


## 91. Accessibility Requirements

Minimum:

semantic HTML

keyboard navigation

focus visibility

screen-reader labels

reduced-motion support

adjustable text

high contrast

non-color-only indicators

keyboard equivalents for touch actions

touch equivalents for hover actions


## 92. Christ’s Words Accessibility

Words of Christ must not be identifiable solely by red color.

Optional parallel distinction:

subtle weight

marker

underline

accessibility label

The default visual presentation may still use traditional red lettering.


## 93. Theme Architecture

Theme variables should use design tokens.

Example:

--paper
--ink
--accent
--christ-speech
--highlight
--panel-border
--shadow

Theme logic shall not be embedded throughout reader code.


## 94. Built-In Themes

Initial targets:

Classic Comics

Golden Age

Modern Graphic Novel

Parchment

Study Mode

Night Study


## 95. Graphic Effects Budget

Decorative features shall have a performance budget.

Avoid:

enormous textures

video backgrounds

unnecessary canvas animation

continuously running effects

Favor:

CSS

vector art

compact SVG

procedural halftone effects


## 96. Core Browser Capability Layer

Platform-dependent features shall be accessed through a capability service.

Conceptually:

Capabilities {
    persistentStorage
    fileImport
    fileExport
    workers
    speech
    fullscreen
    wakeLock
    orientation
}

UI features shall degrade gracefully according to capability.


## 97. Unsupported Capability Rule

A missing optional browser capability must not crash the application.

Example:

If Wake Lock is unavailable:

**Preaching Mode still works.**

Only automatic screen-awake behavior disappears.


## 98. Mobile Browser Compatibility Gate

Before implementation expands deeply, Manna shall perform an explicit compatibility investigation on actual or representative:

Android Chrome

Android Firefox

iPhone Safari

iPad Safari

Windows Chromium

Windows Firefox

macOS Safari

The investigation must verify direct execution of the intended self-contained artifact and identify browser-specific storage/file limitations.

The architecture shall be adjusted based on observed behavior rather than assumptions.


## 99. iOS Gate

Because local-file behavior on mobile operating systems can differ materially from desktop browsers, **iPhone/iPad execution shall be treated as a Phase-0 engineering gate**.

The project must demonstrate:

how the HTML file is opened;

whether JavaScript executes normally;

whether imported files can be selected;

whether IndexedDB persists;

whether exported backups can be saved;

whether orientation changes work;

whether large resource usage is viable.

If any browser imposes limitations, Manna shall document and safely accommodate them while preserving the one-file release goal.


## 100. Testing Layers

The project shall contain:


### Unit Tests

For:

reference parsing

tokenization

search

Strong’s

morphology

serializers

schema migration


### Integration Tests

For:

module import

database operations

backup/restore

reader/navigation

cross-resource linking


### Browser Tests

For:

desktop

tablet

phone emulation

actual mobile validation where required


### Security Tests

For malicious import fixtures.


### Reproducibility Tests

For build artifact stability.


## 101. Search Golden Tests

Exact search shall use a baseline Bible fixture with known counts.

Tests must prove:

occurrence counts

phrase counts

book counts

case handling

punctuation handling

wildcard handling

exclusions

proximity


## 102. Red-Letter Golden Tests

A known fixture shall explicitly mark:

Christ speech

narrator text

other speakers

nested quotations

boundary cases

Tests shall confirm red-letter rendering exactly follows supplied metadata.


## 103. Import Attack Fixtures

Security fixtures shall include:

script tags

event handlers

malformed XML

deeply nested structures

huge expansion payloads

external image references

external stylesheets

path traversal attempts

malformed archives

Expected result:

safe rejection or safe sanitization.


## 104. Backup Failure Tests

Test:

truncated backup

incorrect digest

unknown version

missing required section

corrupted record

duplicate IDs

Restore shall fail safely without destroying existing user data.


## 105. Mobile Interaction Tests

Verify:

touch target size

long press

swipe

orientation

bottom sheets

text selection

virtual keyboard

file picker

export

reader resize

reduced motion


## 106. Performance Tests

Define representative devices:

**Low-end phone**

**Mid-range phone**

**Tablet**

**Desktop**

Measure:

startup

chapter navigation

search latency

Strong’s lookup

Verse Finder

commentary loading

module import

indexing

graph expansion


## 107. Initial Performance Goals

Targets should initially include:

visible reader UI rapidly after startup;

cached chapter navigation effectively immediate;

Strong’s quick card under perceptible-delay threshold;

ordinary exact search well below one second for baseline corpus;

user interface remains responsive during indexing;

page-turn animation maintains smooth visual motion on supported hardware.

Exact quantitative thresholds shall be established after Phase-0 benchmark discovery.


## 108. Error Philosophy

Errors shall be:

visible

specific

recoverable

non-destructive

Bad:

Something went wrong.

Better:

Commentary import stopped because 17 entries contain an unsupported compressed format. No resource was installed.


## 109. Diagnostic Export

Manna may provide:

**EXPORT DIAGNOSTICS**

Containing only technical information such as:

application version

browser capability summary

installed module metadata

database schema version

error log

It shall exclude personal study text unless explicitly requested.


## 110. Versioning

Independent versions shall exist for:

Application
Database Schema
Backup Format
Module Cache
Search Index
Verse Finder Model

Example:

App: 0.3.0
DB: 2
Backup: 1
Index: 3
VerseFinder: 1


## 111. Schema Migration

Database upgrades shall be migration-based.

Never delete user information merely because the application schema changed.

Migration must occur transactionally where possible.


## 112. Search Index Migration

Search indexes are rebuildable and shall not be considered irreplaceable user data.

If an index format changes:

preserve resource data;

invalidate old index;

rebuild.


## 113. Derived Data Principle

The following are considered derived and rebuildable:

word indexes

phrase indexes

Strong’s occurrence caches

graph layout caches

search frequency tables

Personal notes are never derived.


## 114. Phase 0 — Platform Feasibility

Before major feature implementation:

prove one-file packaging;

prove local desktop execution;

prove Android execution;

prove iPhone/iPad execution path;

verify storage behavior;

verify import/export;

verify worker strategy;

determine realistic maximum embedded artifact size;

benchmark IndexedDB;

test orientation;

test mobile memory behavior;

document browser limitations.


#### Phase 0 Exit Criteria

A minimal single HTML artifact can:

open;

display Scripture fixture;

store a note;

close/reopen with note retained where persistence is supported;

import a file;

export a backup;

operate offline;

work on target phone and desktop environments.


## 115. Phase 1 — Reader Foundation

Implement:

canonical Bible model

baseline Bible

responsive UI

Page Mode

Scroll Mode

chapter navigation

verse navigation

pericope toggle

red-letter mode

themes

notes

highlights

bookmarks

backup/restore

mobile navigation


#### Phase 1 Exit Criteria

A user can comfortably read and annotate Scripture on phone and desktop completely offline.


## 116. Phase 2 — Search & Strong’s

Implement:

tokenizer

exact word index

phrase search

concordance counts

wildcard

proximity

Strong’s dictionary

Strong’s tags

occurrence lookup

repeated-word detection

Passage Inspector


#### Exit Criteria

Known corpus search tests match expected counts exactly.


## 117. Phase 3 — Original Language

Implement:

lemma model

interlinear

reverse interlinear

morphology model

morphology search

original-language workspace

translation differences


## 118. Phase 4 — Resource Import

Implement:

adapter interface

import transaction engine

SWORD Bible support

commentary import

dictionary import

resource license display

module indexing


## 119. Phase 5 — Verse Finder

Implement:

query normalization

synonyms

biblical concept vocabulary

candidate generation

scoring

confidence calibration

explanation

quality corpus

Context Guard


## 120. Phase 6 — Connected Scripture

Implement:

cross-reference graph

Scripture chains

OT quotations

Gospel harmony

People Explorer

Topic Explorer

Study This Passage


## 121. Phase 7 — Geography & History

Implement:

atlas

people/location linkage

timeline

genealogies

historical context cards

journey overlays


## 122. Phase 8 — Personal Study System

Implement:

Observation Mode

Questions

Prayer Journal

reading plans

Scripture memory

flashcards

Study Sessions

Study Trail


## 123. Phase 9 — Ministry

Implement:

Sermon Workshop

study-to-sermon

preaching mode

sermon timer

presentation mode

study sheets

Study Packs

QR sharing


## 124. Phase 10 — Expanded Import Ecosystem

Investigate additional module formats only after the canonical resource system and security model are mature.

Every new adapter shall require:

legal review

format documentation

fixtures

malformed fixtures

round-trip validation where possible

resource metadata preservation

performance testing


## 125. Definition of Done for Every Feature

A feature is not done merely because it works on one desktop browser.

It requires:

functional implementation;

unit tests where applicable;

mobile behavior;

keyboard behavior where applicable;

offline behavior;

accessibility;

error handling;

backup implications;

security consideration;

documentation;

performance consideration;

no regression to one-file packaging.


## 126. Global Release Gate

A release candidate must demonstrate:

NETWORK DISABLED

and still support:

Bible reading

chapter navigation

search

Strong’s

notes

highlighting

bookmarks

installed commentary

installed dictionaries

sermon editing

reading plans

Verse Finder

atlas resources already installed

backup/export


## 127. Single-File Integrity Gate

The release shall be tested from a clean directory containing only:

manna.html

The application must not depend on leftover build files.


## 128. No Hidden Runtime Dependencies Gate

Automated verification should reject unexpected references such as:

https://
http://
cdnjs
unpkg
jsdelivr
googleapis

unless the reference exists strictly as inert user-visible documentation and cannot be automatically requested.


## 129. Scripture Integrity Gate

For each bundled Bible:

randomly sample verses;

compare release text against canonical source fixture;

verify hashes where practical;

verify chapter/verse boundaries;

verify red-letter metadata independently of verse text.

Any altered Scripture text is a release-blocking defect.


## 130. User Data Integrity Gate

Tests must prove that upgrading Manna does not silently destroy:

notes

bookmarks

highlights

sermons

prayer journal

reading progress

memory progress


## 131. Product Safety Rule for Study Assistance

Manna may organize and expose study evidence.

It must visibly distinguish:

SCRIPTURE

from:

EDITORIAL DATA

from:

COMMENTARY

from:

USER NOTES

from any future:

ASSISTANT-GENERATED CONTENT

No generated material may visually masquerade as Bible text.


## 132. Suggested Development Technology Principles

The implementation should favor:

standards-based browser APIs

compact dependencies

deterministic behavior

simple internal interfaces

inspectable data

progressive enhancement

Avoid unnecessarily heavy frameworks if they materially increase:

release size

startup time

memory use

single-file packaging complexity

The framework is subordinate to the product constraints.


## 133. Recommended Application Philosophy

Manna should behave less like a website and more like a **portable document-based application**.

The HTML file is the executable shell.

Imported modules are the library.

Backups are the user’s portable data.

This conceptual model keeps the product understandable:

MANNA
    │
    ├── Scripture Library
    ├── Study Library
    └── My Study Data


## 134. Target User Experience

The user should be able to place:

manna.html

on a phone or computer, open it, and immediately see:


## MANNA

**Continue Reading**

Romans 8

**Find the Verse**

Describe what you remember…

**Quick Study**

Strong’s
Search
Atlas
Commentary

Then, without Internet access, they can move from:

**Romans 8:28**

to:

**context**

to:

**Greek word**

to:

**every occurrence**

to:

**cross-reference**

to:

**Joseph**

to:

**Genesis 50:20**

to:

**Egypt**

to:

**map**

to:

**commentary**

to:

**personal note**

to:

**sermon**

without leaving Manna.


## 135. Engineering North Star

Every major technical decision should be evaluated against this question:

**Does this make it easier to carry a trustworthy, powerful Bible research library in one offline HTML application on a phone or computer without surrendering the user’s Scripture, study data, privacy, or ownership?**

If the answer is no, the design should be reconsidered.


## 136. Next Governance Document

The next implementation document should be:

**MANNA DEVELOPMENT ROADMAP v0.1**

It should convert this engineering specification into independently testable development packets beginning with:

**P0.1 — Single-HTML Mobile Feasibility Harness**

followed by:

**P0.2 — Offline Security & Network Guard**

**P0.3 — Persistent Storage + Backup Prototype**

**P0.4 — Canonical Scripture Data Model**

**P0.5 — Mobile Reader Shell**

and then progress toward search, Strong’s, module importing, Verse Finder, connected Scripture, atlas, and ministry tooling.

No substantial Bible-study feature should be implemented before the Phase-0 platform assumptions—especially direct mobile HTML execution, persistence, file import/export, and one-file packaging—have been independently demonstrated.
