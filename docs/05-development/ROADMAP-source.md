# Codex Bible — Development Roadmap (source)

**Version 0.1**

Converted from the original .docx on 2026-08-15. Content preserved; structure normalized to Markdown.

## 1. Purpose

This roadmap converts the Codex Bible Engineering Specification v0.3 into a sequence of independently testable implementation packets.

Codex Bible is intended to become:

**a mobile-first, desktop-capable, fully offline Bible research workstation distributed as one self-contained HTML file.**

The roadmap is deliberately ordered so the riskiest platform assumptions are proven before substantial product functionality is built.

The project shall not begin with visual polish, semantic search, sermon tooling, or module compatibility.

It shall begin by proving that the fundamental product architecture is viable.


## 2. Roadmap Principles

Every implementation packet shall follow these rules.


### 2.1 One Packet, One Main Responsibility

A packet should have a clearly bounded technical objective.

Avoid combining unrelated features merely because they are convenient to implement together.


### 2.2 Independently Verifiable

Every packet shall define:

inputs

outputs

acceptance criteria

automated tests

manual tests where required

failure cases

A reviewer must be able to determine PASS or FAIL without relying on the implementer’s opinion.


### 2.3 No Hidden Forward Dependencies

A packet may depend only on completed prerequisite packets.

Do not make a current packet secretly require unfinished future architecture.


### 2.4 Mobile Is Never Deferred

A feature is not considered complete if it functions only on desktop.

Every user-facing packet shall explicitly consider:

phone portrait

phone landscape

tablet

desktop

where applicable.


### 2.5 Offline Is Never Deferred

Every core feature shall be tested with network access disabled.


### 2.6 Scripture Integrity Is Release Critical

Any defect that changes, invents, truncates, reorders, or misattributes Scripture is release blocking.


### 2.7 Imported Data Is Untrusted

Every import feature shall assume hostile input.


### 2.8 User Data Is Irreplaceable

Notes, sermons, highlights, prayer journal entries, reading progress, and other user-created information receive stronger preservation guarantees than rebuildable indexes or caches.


## 3. Packet Status Model

Each packet shall have one of these states:

NOT STARTED

DISCOVERY

IMPLEMENTING

SELF-REVIEW

INDEPENDENT REVIEW

BLOCKED

PASS

FAIL

A packet is complete only after independent review passes.


## 4. Severity Model

Suggested defect severity:


### BLOCKER

Prevents safe use or violates a non-negotiable requirement.


### HIGH

Major correctness, security, data-loss, or platform issue.


### MEDIUM

Meaningful functional or usability defect.


### LOW

Minor defect that still violates packet requirements.

For strict review environments, any unresolved finding may be treated as packet failure.


## 5. Phase Overview

Development is divided into these major phases:

P0  Platform Feasibility
P1  Core Application Foundation
P2  Scripture Reader
P3  Personal Study Data
P4  Exact Search & Concordance
P5  Strong's & Original Languages
P6  Resource Import System
P7  Verse Finder
P8  Connected Scripture
P9  People, Geography & History
P10 Advanced Personal Study
P11 Ministry Tools
P12 Interchange & Sharing
P13 Hardening, Performance & Accessibility
P14 Release Readiness


## PHASE P0 — PLATFORM FEASIBILITY

The purpose of P0 is to prove that the product concept works before substantial functionality is built.

No major Bible-study feature should begin before P0 passes.


## P0.1 — Single-HTML Execution Harness


### Goal

Prove that a production-style Codex application can be packaged into one HTML file and executed locally.


### Deliverables

minimal source project

deterministic build script

dist/codex-bible.html

embedded JavaScript

embedded CSS

embedded SVG asset

build manifest

SHA-256 output


### The artifact must:

exist as one HTML file;

require no sibling files;

open locally;

execute JavaScript;

render a test interface;

contain an embedded test Scripture fixture;

function with network disconnected.


### Acceptance Test

Place only:

codex-bible.html

into a clean directory.

Open it.

Expected:

**CODEX BIBLE PLATFORM HARNESS**

and one test passage.

No missing resources.

No runtime network dependency.


## P0.2 — Offline Network Guard


### Goal

Prove Codex Bible performs no unexpected runtime network activity.


### Implement

production Content Security Policy

network-request instrumentation for tests

offline browser test harness


### Acceptance Criteria

The harness shall work with:

Wi-Fi disconnected;

browser offline mode;

outbound network blocked.

Tests shall fail if core operation attempts to retrieve:

JavaScript

CSS

fonts

images

maps

APIs

telemetry

from external locations.


## P0.3 — Persistent Storage Prototype


### Goal

Determine safe persistence behavior across target environments.


### Implement

A prototype storing:

one note

one setting

one bookmark

using the storage abstraction.


### Required Environments

At minimum investigate:

Windows Chromium

Windows Firefox

macOS Safari where available

Android Chrome

iPhone Safari

iPad Safari where available


### Test

open HTML;

create note;

close application;

reopen application;

verify note;

restart browser;

verify note again where persistence is supported.


### Output

A documented browser capability matrix.


## P0.4 — Backup Export Prototype


### Goal

Prove user data can leave the browser safely.


### Implement

**EXPORT TEST BACKUP**

containing:

note

bookmark

setting

version metadata

integrity digest


### Acceptance Criteria

Backup can be:

generated;

saved;

inspected;

imported back.


## P0.5 — Restore & Corruption Guard


### Goal

Prove backup restoration is safe.


### Test Fixtures

valid backup

truncated backup

wrong digest

malformed JSON/container

unsupported version

duplicate IDs


### Acceptance Criteria

Bad backups:

do not partially restore;

do not delete current data;

produce clear errors.


## P0.6 — File Import Capability Harness


### Goal

Prove external resource files can be selected on target platforms.


### Implement

A generic file import screen.

Display:

filename

size

detected MIME where available

byte length

SHA-256

No Bible parsing yet.


## P0.7 — Worker Capability Harness


### Goal

Prove heavy processing can be moved away from the primary UI execution path.


### Implement

Worker-based task:

calculate checksum;

tokenize large fixture;

report progress.

UI must remain interactive.


## P0.8 — Mobile Interaction Harness


### Goal

Prove the basic mobile interaction architecture.

Implement:

bottom navigation

bottom sheet

swipe

long press

orientation handling

full-screen reader

responsive pane switching

No real study functionality required.


## P0.9 — Mobile Platform Gate


### Goal

Resolve all critical findings from P0.1–P0.8.


### Exit Criteria

The project must demonstrate:

one HTML file;

direct usable execution path;

Android operation;

iPhone operation;

offline operation;

persistence behavior understood;

export/import usable;

workers understood;

responsive navigation works;

no fundamental platform blocker.

Only after P0.9 passes may the project proceed to P1.


## PHASE P1 — CORE APPLICATION FOUNDATION


## P1.1 — Application Shell

Implement the main application framework.

Primary navigation:

Read

Search

Study

Notes

More

Placeholder screens are acceptable.


## P1.2 — Capability Service

Implement centralized feature detection.

Capabilities include:

persistent storage

workers

file import

file export

speech

fullscreen

wake lock

orientation APIs

No feature should perform scattered ad hoc capability detection.


## P1.3 — Settings System

Implement versioned settings.

Initial settings:

theme

font size

line spacing

reader mode

reduced animation

red-letter preference

pericope preference


## P1.4 — Theme Engine

Implement design-token-based themes.

Initial themes:

Classic Comics

Modern Graphic Novel

Parchment

Study

Night


## P1.5 — Canonical Reference Parser

Support references such as:

John 3:16

Jn 3:16

Romans 8

Romans 8:28-39


## 1 Cor 13:4-7

Ambiguous inputs shall fail safely.


## P1.6 — Canonical Scripture Data Model

Implement:

BibleModule

Book

Chapter

Verse

Segment

Token

BibleReference

No rendering-specific assumptions should leak into the underlying data model.


## P1.7 — Baseline Bible Fixture

Add a legally verified baseline Scripture dataset for development/testing.

The resource shall include:

license record

source record

checksum

conversion provenance


## P1.8 — Scripture Integrity Harness

Automated tests shall verify:

book count

chapter boundaries

verse boundaries

selected known verse hashes

source-to-build consistency


## P1.9 — Safe Internal Link Resolver

Implement logical links for:

passage

Strong’s

person

place

topic

Example conceptual route:

codex://passage/JHN/3/16


## P1.10 — Foundation Closeout

Independent review of P1.

No P2 development until:

canonical references;

scripture model;

settings;

themes;

baseline data;

integrity checks

all pass.


## PHASE P2 — SCRIPTURE READER


## P2.1 — Basic Chapter Reader

Display:

book

chapter

verses

verse numbers

Requirements:

selectable Scripture text

mobile readable

keyboard navigable


## P2.2 — Book / Chapter Navigation

Implement touch-friendly navigation:

**BOOK → CHAPTER → VERSE**

Include:

recent locations

previous chapter

next chapter


## P2.3 — Scroll Mode

Implement conventional continuous reader.

Optimize for phones first.


## P2.4 — Page Mode

Implement discrete Scripture pages.

Pagination must respond to:

viewport

font size

orientation

spacing

verse number setting


## P2.5 — Basic Page Turn

Implement reliable page navigation without advanced page curl.

Acceptance comes before visual complexity.


## P2.6 — Advanced Comic Page Animation

Add optional:

page curl

perspective

shadows

page bend

Must degrade safely.


## P2.7 — Animation Performance Fallback

Automatic or selectable modes:

Full

Simple

Slide

None


## P2.8 — Pericope Rendering

Support heading metadata separately from Scripture.

Toggle:

**Pericopes ON/OFF**


## P2.9 — Red-Letter Rendering

Implement Words of Christ styling using explicit source metadata only.

Settings:

Standard

Red

accessible alternate style

No inference.


## P2.10 — Red-Letter Integrity Tests

Fixture must include:

Jesus speech

narrator

another speaker

mixed passage boundaries

Render exactly according to metadata.


## P2.11 — Full-Screen Reading

Tap/command hides interface chrome.


## P2.12 — Mobile Long-Press Actions

Initial actions:

Copy

Highlight placeholder

Note placeholder

Bookmark placeholder

Study placeholder


## P2.13 — Landscape Reader

Phone landscape may support optional two-pane layout.


## P2.14 — Tablet Reader

Support two-pane reader configurations.


## P2.15 — Reader Accessibility Review

Verify:

screen reader semantics

keyboard

focus state

high contrast

reduced motion

text resizing

color independence


## P2.16 — Reader Closeout

Independent mobile and desktop review.


## PHASE P3 — PERSONAL STUDY DATA


## P3.1 — Annotation Storage Model

Implement versioned annotation records.


## P3.2 — Notes

Attach notes to:

verse

passage

chapter


## P3.3 — Safe Notes Editor

Allow:

paragraphs

headings

bold

italic

lists

Scripture references

Do not store executable HTML.


## P3.4 — Scripture Link Detection in Notes

Recognize Bible references and turn them into internal links.


## P3.5 — Highlights

Support:

word

phrase

verse

passage


## P3.6 — Highlight Categories

Initial categories:

Important

Promise

Warning

Prayer

Prophecy

Custom


## P3.7 — Bookmark System

Support:

folders

titles

tags

notes


## P3.8 — Questions

Attach study questions to Scripture.

Statuses:

Open

Researching

Answered


## P3.9 — Personal Data Search Foundation

Index:

notes

bookmarks

questions


## P3.10 — Full Backup v1

Backup shall now preserve all P3 personal data.


## P3.11 — Restore Merge Logic

Support safe import of existing library backups.


## P3.12 — Personal Data Migration Tests

Verify version upgrades preserve annotations.


## P3.13 — P3 Closeout

No search expansion before personal data preservation is independently verified.


## PHASE P4 — EXACT SEARCH & CONCORDANCE


## P4.1 — Scripture Tokenizer

Implement deterministic tokenization.

Preserve:

original text

normalized tokens


## P4.2 — Exact Word Index

Create inverted index:

word → occurrences


## P4.3 — Exact Word Search

Example:

love

Exact mode must not silently match:

loved


## P4.4 — Phrase Search

Example:

kingdom of God


## P4.5 — Boolean Search

Support:

AND

OR

exclusion


## P4.6 — Wildcard Search

Example:

lov*

Guard against pathological expressions.


## P4.7 — Proximity Search

Example:

faith NEAR works


## P4.8 — Reference Search

Search box recognizes:

Romans 8:28


## P4.9 — Concordance Counts

Display:

total occurrences

verse count

book counts

chapter counts

OT/NT distribution

first

last


## P4.10 — Word Frequency Explorer

Provide distribution and frequency information.


## P4.11 — Repeated Word Analysis

Analyze selected:

paragraph

pericope

chapter

passage


## P4.12 — Search Worker

Move heavy queries and index generation away from main UI.


## P4.13 — Search Virtualization

Long result sets must not create enormous DOM trees.


## P4.14 — Search Golden Corpus

Known word and phrase counts must be encoded as tests.


## P4.15 — Search Closeout

Exact search correctness is a prerequisite for semantic search.


## PHASE P5 — STRONG’S & ORIGINAL LANGUAGES


## P5.1 — Strong’s Dictionary Model

Implement canonical Strong’s entries.


## P5.2 — Strong’s-Tagged Token Support

Bible tokens may reference:

H#####

G#####


## P5.3 — Strong’s Quick Card

Tap/hover displays:

original word

transliteration

definition

occurrence count


## P5.4 — Strong’s Occurrence Index

Fast:

**Find Every Occurrence**


## P5.5 — Strong’s Full Word Study

Display:

every occurrence

frequency by book

translated surface words


## P5.6 — Lemma Model

Introduce canonical lemma identifiers.


## P5.7 — Interlinear Data Model

Support:

English

original word

lemma

Strong’s

morphology

gloss


## P5.8 — Interlinear Reader

Desktop and mobile interfaces.


## P5.9 — Reverse Interlinear

English word → original-language data.


## P5.10 — Morphology Model

Preserve original morphology scheme.


## P5.11 — Morphology Viewer

Plain-English parsing display.


## P5.12 — Morphology Search

Search by:

lemma

POS

tense

voice

mood

case

number

gender

where applicable.


## P5.13 — Original Language Workspace

One consolidated word research interface.


## P5.14 — Translation Comparison

Parallel translation display.


## P5.15 — Translation Difference View

Highlight differences without generating interpretation.


## P5.16 — P5 Closeout


## PHASE P6 — RESOURCE IMPORT SYSTEM


## P6.1 — Module Adapter Interface

Implement:

detect

inspect

validate

convert

install


## P6.2 — Transactional Import Engine

Partial imports must never appear installed.


## P6.3 — Import Metadata Preview

Show:

type

language

format

features

license

red-letter support

Strong’s support


## P6.4 — Safe Markup Model

Implement strict allowed document structures for commentary/dictionary content.


## P6.5 — Malicious Import Fixture Suite

Include:

script

event handler

remote image

malformed XML

oversized nesting

archive traversal


## P6.6 — Plain Text / VPL Bible Adapter

Begin with the simplest external Bible format.


## P6.7 — OSIS Bible Adapter


## P6.8 — SWORD Detection

Read documented SWORD metadata safely.


## P6.9 — SWORD Uncompressed Bible Import


## P6.10 — SWORD Compressed Bible Import


## P6.11 — SWORD Strong’s Bible Import


## P6.12 — Commentary Adapter


## P6.13 — Dictionary / Lexicon Adapter


## P6.14 — Imported Module Indexing

Build required search indexes after successful conversion.


## P6.15 — License Registry Integration

Unknown license must remain visibly unknown.


## P6.16 — Module Removal

Safely remove installed resource while preserving unrelated annotations.


## P6.17 — Import Performance Tests

Large imports must maintain responsive UI.


## P6.18 — P6 Closeout


## PHASE P7 — NATURAL-LANGUAGE VERSE FINDER

Do not begin P7 until exact search is proven correct.


## P7.1 — Verse Finder Evaluation Corpus

Create hundreds of human-style queries.

Examples:

don’t worry about tomorrow

iron sharpens iron

helped angels without knowing

God uses weak things

nothing separates us from God’s love


## P7.2 — Query Normalizer

Handle:

punctuation

common stop words

spelling variants

contractions


## P7.3 — Synonym Dataset

Offline, versioned biblical/common-language synonym map.


## P7.4 — Biblical Concept Dataset

Concepts such as:

hospitality

forgiveness

resurrection

worry

faith

repentance

linked to terminology and passages.


## P7.5 — Candidate Generation

Use existing exact indexes to retrieve plausible verses.


## P7.6 — Lexical Ranking

Initial deterministic ranking engine.


## P7.7 — Phrase Similarity


## P7.8 — Rare-Term Weighting

Distinctive query terms receive appropriate influence.


## P7.9 — Entity Signals

Recognize:

people

places

events


## P7.10 — Topic Signals


## P7.11 — Cross-Reference Signals


## P7.12 — Confidence Calibration

Convert ranking into user-facing confidence.


## P7.13 — Match Explanation

Display why a result matched.


## P7.14 — No-Fabrication Guard

Verse text must always be fetched from installed module.

Test deliberately malformed candidate references.


## P7.15 — Context Guard

Search results offer:

**View in Context**


## P7.16 — Quality Metrics

Track:

Top-1

Top-3

Top-5

false positives

latency

confidence calibration


## P7.17 — Search Regression Harness

Every algorithm change reruns the evaluation corpus.


## P7.18 — Optional Local Vector Investigation

Only after deterministic baseline succeeds.

This packet is research-only unless formally approved.

No cloud embedding dependency.


## P7.19 — P7 Closeout


## PHASE P8 — CONNECTED SCRIPTURE


## P8.1 — Cross-Reference Data Model


## P8.2 — Cross-Reference Panel


## P8.3 — Cross-Reference Graph Engine

Load only immediate neighbors.


## P8.4 — Mobile Graph Interaction

Pan and pinch/zoom.


## P8.5 — User Scripture Chains


## P8.6 — OT Quotation Dataset

Distinguish:

explicit quote

probable allusion

thematic relationship


## P8.7 — OT/NT Quotation Explorer


## P8.8 — Gospel Parallel Model


## P8.9 — Gospel Harmony Viewer


## P8.10 — Passage Inspector

Integrate:

Text

Words

Xrefs

Commentary

Notes

People

Places

Topics


## P8.11 — Study This Passage

Create temporary multi-resource study workspace.


## P8.12 — Topic Explorer


## P8.13 — Connecting Word Study

Support logical terms:

therefore

because

but

if

then

for

so that


## P8.14 — P8 Closeout


## PHASE P9 — PEOPLE, GEOGRAPHY & HISTORY


## P9.1 — Person Model


## P9.2 — People Dataset Import

Must preserve source and uncertainty.


## P9.3 — People Explorer


## P9.4 — Relationship Graph


## P9.5 — Genealogy Viewer


## P9.6 — Place Model


## P9.7 — Place Dataset

Coordinates include confidence.


## P9.8 — Basic Offline Atlas


## P9.9 — Scripture-to-Map Linking


## P9.10 — Journey Overlays

Examples:

Exodus

Paul’s journeys

ministry of Jesus


## P9.11 — Timeline Data Model


## P9.12 — Timeline Viewer


## P9.13 — Historical Context Card

**YOU ARE HERE**


## P9.14 — Historical Uncertainty UI

Never represent disputed chronology as settled fact.


## P9.15 — P9 Closeout


## PHASE P10 — ADVANCED PERSONAL STUDY


## P10.1 — Observation Mode

Mark:

repetitions

comparisons

contrasts

commands

promises

people

places

time

cause/effect


## P10.2 — Observation Symbol System

Optional visual markers.


## P10.3 — Study Session Model


## P10.4 — Study Trail


## P10.5 — Resume Study


## P10.6 — Reading Plan Engine


## P10.7 — Built-In Reading Plans


## P10.8 — Custom Reading Plans


## P10.9 — Scripture Memory Model


## P10.10 — Spaced Review Engine


## P10.11 — Memory Practice Modes

reveal

missing words

first letters

reference recall


## P10.12 — Flashcards


## P10.13 — Prayer Journal


## P10.14 — Prayer Privacy Rules

Exclude prayer data from normal sharing unless explicitly selected.


## P10.15 — Highlight Collections


## P10.16 — Personal Study Dashboard


## P10.17 — P10 Closeout


## PHASE P11 — MINISTRY TOOLS


## P11.1 — Sermon Project Model


## P11.2 — Sermon Editor

Uses same safe structured editor as notes.


## P11.3 — Study-to-Sermon Actions

Add:

verse

word study

note

commentary reference

cross-reference


## P11.4 — Sermon Outline Flexibility

No forced three-point structure.


## P11.5 — Mobile Preaching Mode

Large touch-friendly interface.


## P11.6 — Screen-Awake Enhancement

Use only where capability exists.


## P11.7 — Sermon Timer


## P11.8 — Scripture Presentation Mode


## P11.9 — Red-Letter Presentation Support


## P11.10 — Projector / Fullscreen Testing


## P11.11 — Print Sermon


## P11.12 — P11 Closeout


## PHASE P12 — INTERCHANGE & SHARING


## P12.1 — Backup Format v2

Finalize long-term backup structure.


## P12.2 — Selective Export

Choose:

notes

sermons

bookmarks

prayer journal

modules


## P12.3 — Study Pack Format

Example:

romans-8.codexstudy


## P12.4 — Study Pack Licensing Guard

Do not include copyrighted Bible text unless redistribution is permitted.


## P12.5 — Study Pack Import


## P12.6 — QR Passage Sharing


## P12.7 — QR Compact Study Payload


## P12.8 — Printable Study Sheet


## P12.9 — Portable Device Migration Test

Export from one device.

Restore on another.


## P12.10 — P12 Closeout


## PHASE P13 — HARDENING, PERFORMANCE & ACCESSIBILITY


## P13.1 — Low-End Phone Benchmark


## P13.2 — Memory Profiling


## P13.3 — Search Performance Profiling


## P13.4 — Large Commentary Benchmark


## P13.5 — Large Library Benchmark


## P13.6 — Virtualization Audit


## P13.7 — Worker Failure Fallback


## P13.8 — Storage Quota Handling


## P13.9 — Database Recovery Paths


## P13.10 — Accessibility Audit

Include:

screen reader

keyboard

contrast

reduced motion

text enlargement

non-color indicators


## P13.11 — Mobile Accessibility Audit


## P13.12 — Red-Letter Accessibility Audit


## P13.13 — Import Fuzzing


## P13.14 — Backup Fuzzing


## P13.15 — Reference Parser Fuzzing


## P13.16 — CSP Hardening


## P13.17 — Runtime Network Audit


## P13.18 — P13 Closeout


## PHASE P14 — RELEASE READINESS


## P14.1 — Reproducible Release Build

Clean source checkout shall create the final artifact deterministically.


## P14.2 — Clean Directory Test

Directory contains only:

codex-bible.html

Core application must work.


## P14.3 — Offline Release Test

No network.

Complete representative workflow.


## P14.4 — Scripture Integrity Audit

Verify:

source checksums

selected verse hashes

book/chapter/verse structure

red-letter metadata


## P14.5 — License Audit

Every bundled resource has documented redistribution authority.


## P14.6 — Security Audit

Verify:

CSP

importer sanitization

malformed resources

network blocking

backup validation


## P14.7 — Mobile Release Matrix

Required final validation:

Android phone

iPhone

tablet

desktop Chromium

desktop Firefox

Safari where applicable


## P14.8 — User Data Upgrade Test

Upgrade from representative older Codex database/backup versions.

No user data loss.


## P14.9 — Full Feature Acceptance Workflow

A final tester shall be able to:

open one HTML file;

read Scripture;

turn comic pages;

scroll conventionally;

toggle pericopes;

toggle Words of Christ in Red;

search exact text;

obtain concordance counts;

use Strong’s;

inspect original-language data;

use Verse Finder;

view confidence;

view context;

compare translations;

open commentary;

open dictionary;

follow cross-references;

explore connection graph;

inspect person;

inspect map;

inspect timeline;

create note;

highlight text;

bookmark passage;

create study question;

use reading plan;

practice memory verse;

use prayer journal;

create sermon;

preach from phone;

present Scripture fullscreen;

import supported Bible;

import commentary;

export backup;

restore backup;

create Study Pack;

close app;

reopen offline;

verify user data.


## P14.10 — Release Candidate Review

Final independent review.

Any release-blocking issue returns the project to the appropriate packet.


## P14.11 — Version 1.0

Only after all mandatory acceptance gates pass may the artifact be designated:

**Codex Bible 1.0**


## 6. Optional Post-1.0 Roadmap

The following features should remain outside the initial mandatory 1.0 scope unless development capacity proves unusually strong.


## P15 — Expanded Module Ecosystems

Investigate:

additional SWORD resource classes

e-Sword-compatible import where legally and technically appropriate

TheWord-compatible resources

MyBible formats

other open Bible study formats

Each adapter requires independent format and licensing investigation.


## P16 — Advanced Original-Language Research

Potential additions:

syntax trees

semantic domains

root-family exploration

manuscript-related metadata

richer lexical relationships

Only with properly licensed datasets.


## P17 — Advanced Atlas

Potential additions:

terrain

elevation

animated journeys

political boundary changes

synchronized timeline/map mode


## P18 — Local Study Assistant

Research-only until requirements are independently approved.

Rules:

offline only

optional

source cited

never presented as Scripture

no theological certainty score

no silent Scripture paraphrasing

clear distinction between assistant output and source material


## P19 — Audio Bible Support

Potential support for:

imported audio

verse synchronization

read-along highlighting

Audio licensing must be handled separately.


## P20 — Advanced Teaching Tools

Potential:

lesson builder

small-group worksheets

quiz generation from deterministic study data

classroom presentation layouts


## 7. Recommended Initial Implementation Sequence

The first practical development sequence should be:

P0.1  Single-HTML Execution Harness
  ↓
P0.2  Offline Network Guard
  ↓
P0.3  Persistent Storage Prototype
  ↓
P0.4  Backup Export Prototype
  ↓
P0.5  Restore & Corruption Guard
  ↓
P0.6  File Import Capability Harness
  ↓
P0.7  Worker Capability Harness
  ↓
P0.8  Mobile Interaction Harness
  ↓
P0.9  Mobile Platform Gate
  ↓
P1.1  Application Shell

Do not skip directly to the Bible reader.


## 8. Highest-Risk Assumptions

The following assumptions require proof as early as possible.


### Risk 1 — Local Mobile HTML Execution

The application must have a practical execution workflow on iPhone and Android.


### Risk 2 — Persistent Storage

Locally opened HTML behavior may vary between browser environments.

Codex must never assume persistence without testing it.


### Risk 3 — Mobile Export / Restore

Years of user study cannot depend on browser state alone.

Backup must work early.


### Risk 4 — Single-File Size

Bundled assets may eventually make codex-bible.html large.

Phase P0 must determine practical thresholds.


### Risk 5 — Large Library Performance

Imported commentaries and Bibles may contain significant data.

The application must store and index them incrementally.


### Risk 6 — iOS Memory Pressure

Large in-memory processing may fail on mobile Safari sooner than desktop systems.


### Risk 7 — Resource Licensing

Technically available content is not automatically redistributable.


### Risk 8 — Module Complexity

SWORD and other study-resource ecosystems contain multiple module structures.

Support must expand incrementally.


### Risk 9 — Semantic Search Quality

The Verse Finder must be useful without becoming an opaque hallucination engine.

Exact search infrastructure must precede it.


## 9. Mandatory Technical Proofs Before Feature Expansion

The following must all be demonstrated before the project is considered architecturally validated:

single self-contained release file;

clean-directory execution;

desktop execution;

Android execution;

iPhone execution path;

offline startup;

persistent-data behavior understood;

user backup;

safe restore;

file import;

background processing;

responsive mobile interface;

no external dependency.


## 10. Project Definition of “Offline”

Offline means more than simply loading the reader without Wi-Fi.

A core workflow should remain usable after network access is physically unavailable.

Required offline functionality ultimately includes:

Scripture

search

Strong’s

installed dictionaries

installed commentaries

Verse Finder

notes

bookmarks

highlights

sermons

reading plans

memory tools

atlas data already installed

timeline data

backup


## 11. Project Definition of “Mobile Supported”

Mobile supported does not mean the desktop interface technically fits on a small screen.

It means:

important controls are thumb accessible;

no hover requirement exists;

layouts intentionally collapse;

long lists are virtualized;

memory is bounded;

text selection works;

orientation change works;

imports work;

exports work;

bottom sheets replace inappropriate desktop panels;

performance is acceptable.


## 12. Project Definition of “Self-Contained”

The application release shall not require:

a web server;

installation;

external scripts;

remote fonts;

remote stylesheet;

companion database file;

separate images;

sibling WASM file.

Imported user libraries and backups are user data, not required release dependencies.


## 13. Project Definition of “Scripture Integrity”

Scripture integrity means:

source wording is preserved;

book/chapter/verse identity is preserved;

copy operation returns correct text;

search indexes map to actual source text;

red-letter styling does not alter text;

headings are visually editorial;

commentary is visually editorial;

generated content cannot masquerade as Scripture.


## 14. Release Artifact Expectations

The final build process should eventually produce something resembling:

dist/
├─ codex-bible.html
├─ codex-bible.html.sha256
├─ BUILD-MANIFEST.json
└─ LICENSE-MANIFEST.json

Only codex-bible.html is necessary for application execution.

The additional files exist for release verification and distribution provenance.


## 15. Packet Documentation Template

Every packet should eventually have its own implementation document.

Suggested structure:

Packet ID
Title
Status
Goal
Dependencies
Scope
Out of Scope
Architecture
Files Allowed to Change
Security Considerations
Mobile Considerations
Offline Considerations
Data Migration Considerations
Acceptance Criteria
Automated Verification
Manual Verification
Failure Fixtures
Rollback / Recovery
Reviewer Notes
Verdict


## 16. Review Requirement

The implementer shall not be the final authority on packet success.

For substantial packets, independent review should verify:

actual source changes;

stated acceptance criteria;

negative/failure tests;

mobile behavior where relevant;

clean-tree build;

offline operation;

security boundaries;

no unintended dependency additions.


## 17. Negative Testing Requirement

Packets must deliberately test failures.

Examples:

Import packet:

Import malformed Bible.

Expected:

**Rejected without partial installation.**

Backup packet:

Restore corrupted backup.

Expected:

**Rejected without data loss.**

Search packet:

Search malformed proximity expression.

Expected:

**Clear safe error.**

Red-letter packet:

Bible without speaker metadata.

Expected:

**Red-letter unavailable—not guessed.**


## 18. Reproducibility Requirement

At major phase boundaries, builds should be tested under intentionally different environments where practical, such as:

different source path;

different locale;

different timezone.

The release should not accidentally depend on a developer’s filesystem or environment.


## 19. Security Requirement

Any packet adding an external-input pathway must answer:

What data is trusted?

What data is untrusted?

What parser handles it?

What limits exist?

Can it cause network access?

Can it execute?

Can failure mutate existing user data?

How is rollback handled?


## 20. Data Preservation Requirement

Any packet altering stored personal data must provide:

schema version change if required;

migration path;

backup compatibility analysis;

rollback strategy;

destructive-operation guard.


## 21. UI Requirement

Any user-facing feature shall define:

desktop behavior;

phone portrait behavior;

phone landscape behavior;

keyboard interaction;

reduced-motion behavior where applicable;

screen-reader semantics.


## 22. Final Product Goal

The roadmap is complete when Codex Bible can truthfully be described as:

**A single offline HTML file that gives a phone, tablet, or computer a serious Bible research environment—including Scripture reading, comic-book page navigation, Words of Christ in Red, Strong’s, original-language study, exhaustive concordance search, natural-language verse discovery, dictionaries, commentaries, cross-references, maps, timelines, notes, reading plans, prayer journal, Scripture memory, sermon preparation, presentation tools, and portable user-owned study data.**

The product shall achieve that without requiring:

a server;

cloud account;

subscription;

tracking;

external runtime resources;

remote AI;

surrender of user study data.


## 23. Immediate Next Packet

The first implementation packet shall be:


## P0.1 — SINGLE-HTML MOBILE FEASIBILITY HARNESS

Its sole objective is to answer:

**Can Codex Bible’s fundamental deployment model actually work as intended before we build anything expensive on top of it?**

P0.1 should not attempt to build the real Bible reader.

It should instead create the smallest credible production-style self-contained artifact and establish the build, test, and review structure that every later packet will inherit.
