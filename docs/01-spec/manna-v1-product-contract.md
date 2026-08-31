# Manna Version 1 Product Contract

**Status:** SEMANTICALLY CLOSED — UI/UX interview pending  
**Authority:** Accepted human product interview  
**Implementation state:** FROZEN until UI/UX approval and Product Freeze

## 1. Product outcome

Manna is for anyone who wants to understand the Bible more, from casual readers to pastors, teachers, seminary students, small-group leaders, and serious personal students.

Manna shall put the tools needed for casual reading and in-depth Bible study in one offline, user-owned application. It opens as a clean, uncluttered Reader. Deeper tools appear on demand through the Study Desk.

Development uses staged releases. Version 1 is a complete core study workstation; later releases extend it without weakening the Version 1 experience.

## 2. Permanent product principles

- Scripture remains primary, verbatim, source-identified, and visually distinct from all study material.
- Manna is a study aid, not a substitute for a physical Bible. It reminds users to verify Scripture and study material against their physical Bible.
- Core operation requires no server, account, subscription, cloud service, telemetry, or Internet connection.
- Personal and imported data remain local, user-owned, exportable, and recoverable.
- Imported material is untrusted data and never receives executable capability.
- Manna explains uncertainty and never fabricates Scripture, word mappings, geography, source attribution, or semantic relationships.
- Desktop, tablet, and phone are first-class targets using the same application.

## 3. Scripture and source-text policy

KJV Pure Cambridge Edition is the permanent bundled baseline and first-run default, subject to verified redistribution rights. New Testament source study follows the Textus Receptus tradition appropriate to the KJV. Old Testament source study follows the relevant Hebrew Masoretic tradition; Textus Receptus terminology is not applied to the Old Testament.

Imported Bible translations may become the active Reader translation and may participate in comparison workspaces. Every displayed verse identifies its source module. Manna never merges translations or reconstructs one translation from another.

Strong's coverage is exhaustive wherever verified word-level alignment exists. Desktop hover and mobile tap open a quick definition; deliberate expansion opens the full word-study workspace. One-to-many, many-to-one, ambiguous, translator-supplied, and unmapped words are represented honestly. An untagged translation may route the user to the KJV/Strong's verse baseline, but Manna never guesses an English-to-source-word mapping.

## 4. Version 1 study library

The Version 1 base study library includes, after source and rights verification:

- KJV Pure Cambridge Edition;
- Strong's Hebrew and Greek dictionaries and generated concordance indexes;
- Matthew Henry's Concise Commentary as the initial default;
- Matthew Henry's Complete Commentary as the depth option;
- Webster's 1828 Dictionary;
- public-domain cross-references;
- a Bible dictionary;
- verified offline atlas data and Scripture-place relationships.

Commentary, dictionary, lexicon, and imported-source content always displays its author/title/source identity and remains visually distinct from Scripture and personal notes. Commentaries from different theological traditions may be imported without being silently endorsed.

One resource is visible per category by default. The user may create a deliberate comparison workspace containing as many compatible sources as desired. Manna imposes no arbitrary comparison count. Large sets use efficient rendering, grouping, collapsing, and user-controlled focus; resources are never silently removed.

## 5. Version 1 core capabilities

Version 1 includes:

- clean Reader with book/chapter/verse navigation;
- on-demand Study Desk;
- exhaustive verified Strong's interaction and full word study;
- commentary, dictionary, lexicon, cross-reference, and atlas integration;
- exact/reference/phrase search, concordance, saved searches, and transparent Verse Finder;
- notes linked to verses, passages, words, people, places, and topics;
- highlights and highlight collections;
- bookmarks, questions, observations, study sessions, and study trail;
- local library management;
- module and document import;
- full-library backup, personal-data-only export, safe restore, and optional password encryption.

## 6. Module compatibility

Version 1 imports documented or officially exportable formats from major Bible ecosystems where technically and legally feasible. The target includes CrossWire SWORD, OSIS, VPL/structured text, JSON and IMP-style resources, plus supported export paths from e-Sword, TheWord, MyBible, STEP, and other established software.

Version 1 importable resource types include Bibles, commentaries, dictionaries, lexicons, Strong's resources, and morphology resources. Proprietary or undocumented formats are never claimed as supported without a validated adapter. Unsupported files receive an exact explanation and supported-export guidance.

Import follows detect → inspect → validate → preview → confirm → transactional conversion → indexing. Filename extensions alone are not trusted. Imported scripts, event handlers, remote assets, hostile markup, archive traversal, decompression bombs, malformed archives, and executable content fail closed.

## 7. Document ingestion

Version 1 imports text-based PDF, DOCX, TXT, and Markdown documents. The guided flow asks the user what the resource is—such as commentary, dictionary, lexicon, book, devotional, cross-reference source, or map—while also suggesting a classification from local analysis.

Manna consumes the document into its internal library. After a verified import, the original file is not a runtime dependency. The original is never deleted automatically; Manna may tell the user it is safe to delete after successful verification.

The internal representation preserves original text, source identity, page/section anchors where available, metadata, license status, extracted references, entities, topics, and derived links. Selecting a verse can surface relevant excerpts and navigate back to the imported source context.

## 8. Intelligent linking policy

All analysis is local and offline.

- Explicit Scripture references are linked automatically.
- High-confidence semantic matches are linked automatically and labeled as inferred.
- Medium-confidence matches appear under `Related from your library` without interrupting the user.
- Low-confidence matches remain searchable but are not attached directly to a verse.
- Every inferred relationship retains a confidence score and a short explanation.
- Import summaries report explicit, high-confidence, medium-confidence, low-confidence, and unresolved counts.
- Review is optional and supports bulk filtering by confidence or source section.
- Users may adjust future import thresholds and may remove, correct, restore, or undo derived links without changing the imported source.

Version 1 does not require line-by-line approval of large imports. It does not use a remote AI service or produce opaque generated interpretations. Future `Ask the Text` or local-assistant capabilities remain separately governed and must distinguish assistant output from Scripture and source material.

## 9. Map Packs

Imported map resources become **Map Packs**. A Map Pack may contain **Map Layers** and appear through one or more **Map Views**. **Map Adapters** perform source-specific conversion.

Map Views may include Geographic Atlas, Route/Journey, Region, Timeline, Relationship, and Source Map views. Conversion may detect labels, places, Scripture references, routes, regions, and coordinates when present. Results are classified as Fully Interactive, Partially Interactive, Source View Only, or Needs Review.

Manna attempts useful interactive conversion but never invents coordinates, routes, boundaries, or geographic relationships. When structured conversion is incomplete, the imported source remains available as a verse-linked source view.

## 10. Storage, packaging, and recovery

Normal operation uses Manna's browser-local storage abstraction, expected to use IndexedDB where supported. Imported resources are normalized into this internal library; users do not manage a separate database file during ordinary use.

A normal `.mannabackup` includes personal data, settings, and imported modules by default so a restore recreates the complete library without original import files. A smaller Personal Data Only export is also available. Backups are versioned, integrity checked, migration capable, and optionally password-encrypted entirely offline. There is no account-based password recovery.

Restore inspects and validates before mutation, reports conflicts, offers merge or replacement where appropriate, creates an emergency pre-restore backup when possible, runs transactionally, verifies the result, and fails closed.

The preferred Version 1 package is one complete `manna.html` containing the verified base library. Real-device performance and storage evidence decide viability. If the complete artifact performs poorly on a required platform, the permitted fallback is a core `manna.html` plus an official Manna Library Pack imported once. The pack is not required after successful ingestion.

## 11. Trust reminder

Manna displays this permanent principle:

> **Manna is a study aid, not a substitute for your physical Bible. Always verify Scripture and study material against your physical Bible.**

The full statement appears during first-run onboarding and in Trust/About. A compact reminder appears once per study session and on commentary, imported-source, Verse Finder, inferred-link, and future assistant surfaces without interrupting every verse interaction.

## 12. Staged future capabilities

The following remain in the future roadmap rather than Version 1:

- OCR for scanned/image-only PDFs;
- reading-plan engine, built-in plans, and custom plans;
- prayer journal;
- Scripture memory, spaced review, practice modes, and flashcards;
- advanced interlinear and morphology workspaces beyond imported-resource support;
- sermon builder, preaching mode, presentation/church mode, QR sharing, and printable study sheets;
- a fully local study assistant, if a sufficiently small and trustworthy approach becomes practical.

## 13. Evidence and release gates

- KJV PCE source identity and redistribution rights must be verified; UK distribution permission remains a release blocker until resolved.
- Every bundled resource requires verified source, version, digest, license, and redistribution status.
- Storage capacity, eviction behavior, full-artifact startup/memory cost, and restore portability require evidence on all claimed target environments.
- Proprietary ecosystem support depends on documented/exportable formats and legal feasibility.
- Imported maps and semantic links expose confidence and preserve source truth.

## 14. Current product frontier

This contract supersedes assumptions that the P0.1 prototype is final UI approval. P0.1 remains implementation and feasibility evidence. The next legal product step is a UI/UX interview, followed by design verification and explicit Product Freeze. No additional production implementation begins before that freeze.
