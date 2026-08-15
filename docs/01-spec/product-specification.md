# Manna — Product Specification

**Version 0.2**

Converted from the original .docx on 2026-08-15. Content preserved; structure normalized to Markdown.

## 1. Product Vision

Manna is a powerful, visually distinctive, offline-first Bible study workstation delivered as a **single self-contained** **.html** **application**.

The same HTML file shall operate on:

Windows

macOS

Linux

Android phones

Android tablets

iPhones

iPads

modern desktop and mobile browsers

No server, account, subscription, cloud service, installation package, or Internet connection shall be required for core Bible-study functionality.

Manna combines the depth of traditional desktop Bible software with the accessibility of a modern mobile application and the visual energy of a premium graphic novel.

The long-term goal is not merely to create another Bible reader.

The goal is to create a:

**portable, offline Bible research workstation that makes deep Scripture study approachable, visual, interconnected, fast, and enjoyable.**


## 2. Core Product Philosophy

Manna shall be governed by the following principles.


### 2.1 Scripture First

Decorative presentation must never replace, rewrite, obscure, summarize, alter, or embellish Scripture.

Bible text displayed to the user must come directly from an installed Bible module.

The application must never fabricate Scripture.


### 2.2 Evidence Before Interpretation

The application should primarily help users investigate Scripture rather than tell them what Scripture means.

It should make it easy to examine:

textual context

original-language words

Strong’s entries

morphology

translation differences

cross-references

quotations

historical context

biblical geography

parallel accounts

dictionaries

commentaries

topical relationships

The software should assemble evidence and allow the user to study it.


### 2.3 Offline First

Core functionality shall operate without Internet access.

No core feature shall depend on:

cloud APIs

remote AI

analytics

tracking

authentication

remote fonts

CDNs

remote JavaScript

Internet-hosted databases


### 2.4 User Ownership

Personal Bible-study information belongs to the user.

Manna shall require:

no account

no registration

no subscription

no activation

no cloud synchronization

unless an optional future capability is deliberately added.

Users shall be able to export their information at any time.


## 3. Distribution Architecture

The primary application shall be distributed as one file:

manna.html

The HTML may internally contain:

HTML

CSS

JavaScript

SVG

icons

UI artwork

fonts where licensing permits

WebAssembly where appropriate

core Bible metadata

search logic

import logic

indexing logic

bundled legally redistributable study resources

No external files shall be required to launch the base application.


## 4. Application Data Model

The application shall distinguish between three categories of data.


### 4.1 Built-In Resources

Legally redistributable material may be embedded directly into Manna.

Potential resources include:

a public-domain Bible translation

Strong’s Hebrew dictionary

Strong’s Greek dictionary

Bible book/chapter metadata

public-domain cross-references

public-domain Bible dictionary

pericope metadata

geographical metadata

public-domain topical data

Every bundled resource must have verified redistribution rights.


### 4.2 Imported Resources

Users may import additional:

Bible translations

Strong’s-enabled Bibles

interlinear resources

commentaries

dictionaries

lexicons

devotionals

general books

topical indexes

cross-reference datasets

Bible atlases

morphology datasets

reading plans

These remain local to the user’s device.


### 4.3 Personal Study Data

Personal data includes:

notes

highlights

bookmarks

questions

prayer journal entries

reading-plan progress

verse-memory progress

flashcards

saved searches

Scripture chains

sermon projects

study sessions

custom topics

custom cross-references

application settings


## 5. Mobile-First Requirement

Mobile support is a primary architectural requirement.

Manna shall not have a separate mobile edition.

The **same HTML file and same application codebase** must adapt to desktop, tablet, and phone form factors.


## 6. Responsive Layout Model

Suggested behavior:

| Device | Default Layout |
|---|---|
| Small phone | Single pane + bottom navigation |
| Large phone | Single pane + swipe-up study drawer |
| Landscape phone | Optional two-pane |
| Tablet portrait | Reader + collapsible study pane |
| Tablet landscape | Two-pane study workspace |
| Desktop | Two to four resizable panes |

The layout must adapt without reloading the application.


## 7. Mobile Interaction Requirements

No important feature may depend exclusively on hovering.

Every hover interaction shall have a corresponding:

tap

long-press

keyboard

accessibility action

Touch targets must be appropriately sized.

The mobile application shall support:

portrait mode

landscape mode

swipe navigation

long-press actions

bottom sheets

pinch/zoom where applicable

native text selection where practical

one-handed operation

mobile file import

mobile backup/export


## 8. One-Handed Phone Interface

Primary navigation on phones should normally remain close to the bottom edge.

Example:

**READ | SEARCH | STUDY | NOTES | MORE**

Frequently used reader actions shall be reachable without requiring the user to stretch to the top of a large phone.


## 9. Main Bible Reader

The Bible reader is the heart of Manna.

The visual style should resemble a premium comic book or graphic novel while preserving exceptional Scripture readability.

Possible visual elements:

inked page borders

subtle halftone textures

paper textures

chapter title panels

graphic caption boxes

panel-based section framing

restrained comic typography

dimensional page shadows

Bible text itself shall remain conventionally typeset and easy to read.


## 10. Reader Modes

Users may choose between:


### PAGE MODE

Scripture appears as discrete comic-book-style pages.


### SCROLL MODE

Scripture appears as a conventional continuous vertical reading experience.

Users shall never be forced to use page animation.


## 11. Animated Page Turning

Page Mode may provide realistic page-turn animation using:

perspective

page curl

paper bending

dynamic shadow

underlying page reveal

Controls:

swipe

tap page edge

drag page corner

keyboard arrow

previous/next buttons

Animation modes:

Full Comic Page

Simple Page Turn

Slide

Fade

None

Reduced-motion settings shall override decorative animation automatically.


## 12. Full-Screen Reading Mode

A single tap or command may hide nonessential interface elements.

The screen then contains almost exclusively Scripture.

Tapping again restores controls.

This shall be particularly important on mobile devices.


## 13. Words of Christ in Red

Manna shall support an optional traditional **red-letter Bible mode**.

Setting:

**Words of Christ**

Red

Standard Text

When enabled, words identified by the installed Bible module or a verified compatible red-letter annotation dataset as spoken by Jesus Christ shall appear in red.

The application shall never independently guess which words belong to Christ.

Red-letter metadata must originate from:

the Bible module itself, or

a verified compatible annotation dataset.

If no reliable red-letter metadata exists for the selected Bible, the application shall clearly indicate:

Red-letter data unavailable for this translation.

No automated inference shall be used to silently create red-letter boundaries.

Users shall also be able to customize the display for accessibility, including choosing a high-contrast alternative to red when necessary.


## 14. Pericopes

Editorial section headings shall be independently toggleable.

Setting:

**Pericopes: ON / OFF**

Sources may include:

Bible module headings

public-domain heading datasets

imported heading resources

user-created headings

Pericopes shall remain visually distinct from Scripture.


## 15. Verse Numbers

Users may configure:

verse numbers always shown

verse numbers subdued

verse numbers hidden

verse numbers visible on interaction

Internal reference integrity remains unchanged.


## 16. Translation Comparison

Multiple installed Bible translations may be viewed:

stacked

side-by-side

synchronized by verse

one verse at a time

chapter comparison

On phones, translations may be swiped horizontally.


## 17. Translation Difference Mode

Users may activate:

**COMPARE → SHOW DIFFERENCES**

The application highlights textual differences between translations.

Users can select a differing word or phrase and move directly into original-language study where compatible data exists.


## 18. Strong’s Concordance

Strong’s integration is a primary study capability.

Strong’s numbers may be:

displayed inline

hidden

shown on hover

shown on tap

shown only in Study Mode

Example:

beginning [H7225]


## 19. Strong’s Quick Definition

Selecting a Strong’s-tagged word opens a study card containing available information such as:

Strong’s number

Hebrew/Greek spelling

transliteration

pronunciation

lemma

part of speech

definition

occurrence count

first occurrence

translated forms

Actions:

**FULL WORD STUDY**

**FIND EVERY OCCURRENCE**

**ADD TO NOTES**

**ADD TO SERMON**


## 20. Original-Language Interlinear

Compatible Bible modules may provide an Interlinear Mode.

Possible columns or lines:

English

original-language word

transliteration

lemma

Strong’s number

morphology

gloss

On phones, information may expand beneath each selected word rather than requiring horizontal tables.


## 21. Reverse Interlinear

Users reading an English Bible may tap an English word and trace it backward.

Example:

**Word**

↓

**λόγος**

↓

Lemma: λόγος

↓

Strong’s: G3056

↓

Morphology and lexical information

This creates an approachable original-language workflow for users who do not read Greek or Hebrew.


## 22. Morphology

When appropriate datasets are installed, users may inspect:

tense

voice

mood

person

number

gender

case

grammatical role

lemma

Morphological descriptions should include plain-English explanations.


## 23. Morphology Search

Advanced search may filter by grammatical properties.

Example:

Lemma: πιστεύω
Tense: Any
Voice: Any
Mood: Participle

Search syntax shall not require users to understand database queries.


## 24. Word Study Workspace

Selecting an original-language word opens a detailed workspace containing:

spelling

lemma

Strong’s

morphology

transliteration

pronunciation

dictionary definitions

lexicons

every occurrence

frequency by Bible book

first occurrence

last occurrence

English translation distribution

related words

associated passages


## 25. Exact Bible Search

Search types shall include:


#### Exact Word

kingdom


#### Exact Phrase

kingdom of God


#### All Words

faith hope love


#### Any Word

faith OR belief


#### Exclusion

spirit -unclean


#### Wildcard

lov*


#### Proximity

faith NEAR works


#### Strong’s Search

G26


#### Reference

John 3:16


#### Range

Romans 1-8


## 26. Exhaustive Concordance Search

Search results shall provide more than matching verses.

Results should include:

exact occurrence count

verses containing the term

count by Bible book

count by chapter

Old Testament count

New Testament count

first occurrence

last occurrence

distribution percentage

searchable verse list

Example:

**GRACE**

Total occurrences: 170
Verses: 159

Romans — 24
2 Corinthians — 18
Ephesians — 12

Exact counts shall always be calculated against the selected Bible text.


## 27. Word Frequency Explorer

Selecting any word may provide:

**EXPLORE THIS WORD**

Possible results:

total frequency

frequency by book

frequency by chapter

translation frequency

surrounding phrases

neighboring words

Strong’s association

timeline distribution

graph visualization


## 28. Repeated-Word Detection

For the current chapter, paragraph, or selected passage, the application can identify repeated significant words.

Example:

Romans 8

Spirit — 21
flesh — 13
God — 20
Christ — 15

Selecting a result highlights all corresponding occurrences.


## 29. Natural-Language Verse Finder

Users may describe a verse without knowing its exact wording.

Examples:

where does it say iron sharpens iron

verse about worrying about tomorrow

God works bad situations for good

people entertained angels without knowing

nothing can separate us from God’s love

The engine shall return actual installed Bible passages rather than generated quotations.


## 30. Verse Finder Architecture

The Verse Finder should use a deterministic hybrid ranking system where practical.

Signals may include:

exact words

normalized words

stemming

phrase similarity

synonyms

biblical concept relationships

names

places

Strong’s terms

topics

cross-references

rarity weighting

contextual proximity

optional local semantic vectors

No Internet connection shall be required.


## 31. Verse Finder Confidence Scores

Results shall include a matching-confidence score.

Suggested bands:

**90–100% — Very Strong Match**

**75–89% — Strong Match**

**55–74% — Possible Match**

**Below 55% — Related Passage**

Confidence represents confidence in matching the user’s search description.

It must not represent theological certainty.


## 32. Search Transparency

Verse Finder results should explain why they matched.

Example:

**Hebrews 13:2 — 96%**

Matched concepts:

strangers

hospitality

angels

unknowingly

This allows users to understand why a passage was suggested.


## 33. No Fabricated Scripture

Natural-language search may rank verses.

It may never synthesize Bible quotations.

Displayed Scripture must always be retrieved verbatim from the selected installed Bible module.


## 34. Global Command Bar

A universal command box shall accept:

John 3:16

G26

love

map Jerusalem

dictionary justification

commentary Romans 8

notes prayer

sermon resurrection

and natural language:

where does Jesus say I am the resurrection

The application determines the most likely intent.


## 35. Passage Inspector

Any verse may open a universal Passage Inspector.

Tabs:

**TEXT**

**WORDS**

**CROSS-REFS**

**COMMENTARY**

**NOTES**

**MAP**

**PEOPLE**

**TOPICS**

Desktop:

side panel.

Mobile:

swipe-up bottom sheet.

The Passage Inspector should become the central bridge between reading and research.


## 36. Context Guard

When a verse is opened in isolation, the interface should prominently provide:

**VIEW IN CONTEXT**

Context may include:

surrounding verses

paragraph

pericope

chapter

related argument

preceding section

following section

Search results should optionally show the recommended contextual range.


## 37. Study This Passage

Users may select a passage and choose:

**STUDY THIS PASSAGE**

The application creates a temporary research workspace containing available:

passage text

translation comparison

repeated words

original-language words

Strong’s data

morphology

cross-references

people

places

timelines

commentary

dictionary entries

existing user notes

user questions

sermon material

The system assembles study evidence without inventing a theological conclusion.


## 38. Cross References

Cross-reference indicators may appear in Scripture margins or beside verses.

Selecting one opens related passages.

Cross-reference sources may include:

installed modules

public-domain datasets

user-created relationships


## 39. Cross-Reference Graph

Users may open:

**EXPLORE CONNECTIONS**

and view Scripture references as an interactive network.

Example:

Genesis 50:20
                  │

Psalm 37:5 ─── Romans 8:28 ─── Ephesians 1:11 │ James 1:2

Users may tap a node to:

preview it

open it

expand its references

Mobile shall support pan and pinch/zoom.


## 40. Scripture Chain Builder

Users may create manually ordered Scripture chains.

Example:

**SALVATION**

Romans 3:23
↓
Romans 6:23
↓
Romans 5:8
↓
Romans 10:9
↓
Ephesians 2:8–9

Chains may include:

titles

descriptions

notes

tags

ordering

export/share


## 41. Old Testament / New Testament Quotation Explorer

When the New Testament quotes or directly references an Old Testament passage, users should be able to see the source.

Example:

Matthew 4:4

**QUOTES: Deuteronomy 8:3**

Actions:

preview source

open source

compare quotations

show Old Testament context

inspect original-language data where available

Allusion datasets may also be supported but shall be clearly distinguished from explicit quotations.


## 42. Gospel Harmony / Parallel Accounts

When an event appears in multiple Gospels:

**PARALLEL ACCOUNT AVAILABLE**

Example:

Feeding of the 5,000

Matthew 14

Mark 6

Luke 9

John 6

Users may compare accounts:

side-by-side

stacked

synchronized

swipe on mobile


## 43. Dictionaries

Bible dictionary entries may be opened from:

selected words

people

locations

topics

global search

Multiple installed dictionaries may appear as separate tabs.


## 44. Commentary System

Commentaries shall synchronize with the current passage.

Users may display:

one commentary

multiple commentaries

commentary beside Scripture

commentary beneath Scripture on phones

Imported commentary metadata must be preserved.


## 45. Scripture Reference Hover / Tap

Bible references contained in:

notes

commentaries

dictionaries

sermon documents

study resources

shall become interactive where detected.

Desktop:

hover preview.

Mobile:

tap preview.

Opening a preview should not force the user to leave the current workspace.


## 46. Commentary Importer

Supported commentary modules should preserve:

title

author

verse association

language

metadata

license

formatting where safely supported


## 47. Bible Atlas

An integrated offline Bible atlas shall connect Scripture to geography.

Place records may contain:

ancient name

alternate names

current geographic identification where known

coordinates

description

related passages

events

associated people

nearby locations


## 48. Atlas Modes

Potential map layers:

Biblical World

Patriarchs

Exodus

Tribal Territories

United Kingdom

Divided Kingdom

Exile

Ministry of Jesus

Paul’s Missionary Journeys

Early Church

Offline vector/SVG maps should be preferred where practical.


## 49. Maps in Scripture

Known place names may display a map indicator.

Example:

**Capernaum 🗺**

Actions:

Preview

Open Atlas

All References

Events Here

Nearby Places


## 50. People Explorer

Biblical people may have structured profiles containing:

names

alternate names

family relationships

tribe

associated people

locations

events

first mention

last mention

Scripture occurrences

dictionary entries

timeline placement


## 51. Biblical Genealogies

Interactive genealogy views may support:

patriarchs

tribes of Israel

Davidic dynasty

Matthew genealogy

Luke genealogy

other structured biblical relationships

Mobile users shall be able to pinch and pan.

Selecting a person opens their profile.


## 52. Bible Timeline

Manna should include an interactive biblical chronology.

Major eras may include:

**Patriarchs → Exodus → Conquest → Judges → Kingdom → Divided Kingdom → Exile → Return → Christ → Early Church**

Layers may display:

events

kings

prophets

empires

Bible books

people

locations

Where chronology is disputed, the interface shall show uncertainty rather than presenting disputed dates as absolute fact.


## 53. Historical “You Are Here”

While reading, an optional context card can provide historical orientation.

Example:

**YOU ARE HERE — ISAIAH**

Approximate period: 8th century BC
Primary kingdom: Judah
Regional power: Assyria
Contemporary prophets: Micah
Associated kings: Uzziah, Jotham, Ahaz, Hezekiah

The source and confidence of historical information should be documented.


## 54. Topic Explorer

Users may search concepts rather than only exact words.

Example:

**FORGIVENESS**

Possible results:

key passages

exact word occurrences

related concepts

Strong’s words

people/events

dictionary entries

commentaries

personal notes

sermons

Related concepts may include:

mercy

pardon

repentance

reconciliation

grace


## 55. Observation Mode

A dedicated inductive Bible study mode may allow users to mark:

repeated words

comparisons

contrasts

commands

promises

causes

effects

questions

people

places

time references

conditional statements

conclusions

These markings shall be a separate annotation layer.


## 56. Connecting-Word Study

Manna should facilitate study of logical connectors such as:

therefore

because

but

for

if

then

so that

nevertheless

Example:

Select **therefore**

Then choose:

**Show what comes before every occurrence**

This helps users trace arguments within biblical texts.


## 57. Scripture Questions Workspace

Users may attach questions to passages.

Example:

What does “therefore” refer back to?

Where else does Paul use this phrase?

Why does this translation use a different word?

Question statuses:

Open

Researching

Answered

Questions may link to research findings.


## 58. Notes

Notes may be attached to:

word

verse

passage

chapter

book

Strong’s entry

dictionary entry

person

location

topic

sermon

study session

Notes may support:

headings

lists

bold

italics

tags

Scripture links

Typed Scripture references should automatically become interactive.


## 59. Highlighting

Users may highlight:

words

phrases

verses

passages

Possible categories:

Important

Promise

Warning

Prophecy

Growth

Prayer

Custom

Users may rename categories and customize visual styles.


## 60. Highlight Collections

Each highlight category becomes searchable.

Example:

**Promises — 87 passages**

This allows highlighting to serve as a user-created topical index.


## 61. Bookmarks

Bookmarks support:

title

verse/range

tags

folders

notes

Example folders:

Salvation

Prayer

Favorite Psalms

Memorization

Sermon Ideas

Questions


## 62. Prayer Journal

A separate prayer journal may connect prayer entries to Scripture.

Entry status:

New

Ongoing

Answered

Archived

Users may connect:

verses

people

notes

dates

topics

The prayer journal remains entirely local.


## 63. Reading Plans

Built-in plans may include:

Bible in One Year

Bible in 90 Days

Chronological Bible

New Testament in 90 Days

Psalms and Proverbs

Gospels

custom plan

Users may create their own plans.


## 64. Reading Progress

Progress may optionally use the graphic-novel concept.

Example:

**THE GOSPELS**

Matthew ✓
Mark ✓
Luke 63%
John —

Progress tracking shall avoid manipulative gamification.


## 65. Scripture Memory System

Any verse may be added to:

**MEMORY**

Review modes may include:

full reveal

missing words

first letters

first word hints

reference recall

reverse recall

A lightweight spaced-repetition system may schedule future reviews locally.


## 66. Flashcards

Flashcards may be created for:

Scripture

Strong’s words

definitions

people

places

topics

user notes

Example:

Front:

**G26**

Back:

**ἀγάπη — agapē — love**


## 67. Study Sessions

Users may create named or automatically dated study sessions.

Example:

**Romans 8 Study — August 4**

A session may record:

passages viewed

searches

Strong’s words

maps

cross-references

notes

commentary entries

questions

Users may later select:

**RESUME STUDY**


## 68. Study Trail

Manna should retain an optional navigational history that reflects study exploration rather than merely previous pages.

Example:

Romans 8:28
→ G4982
→ Genesis 50:20
→ Joseph
→ Egypt
→ Romans 8:28

Users may jump to any step.


## 69. Sermon Builder

Manna shall contain a dedicated:

**SERMON WORKSHOP**

Fields may include:

title

main passage

theme

purpose

central idea

introduction

point I

point II

point III

illustrations

applications

conclusion

invitation/response

notes

Structure must remain flexible rather than forcing three points.


## 70. Study-to-Sermon Workflow

Any study result may be added directly to an active sermon.

Actions:

Add Verse

Add Passage

Add Word Study

Add Cross Reference

Add Dictionary Entry

Add Commentary Citation

Add Note

Add Map

Add Illustration Note

Each item should retain a link to its original study source.


## 71. Sermon Preaching Mode

A sermon can be opened in a simplified mobile presentation designed for the pulpit.

Features:

oversized text

one sermon section at a time

swipe forward/back

linked Scripture

dark mode

minimal controls

screen-awake option where supported


## 72. Sermon Timer

Optional sermon timing features may include:

total target duration

elapsed time

point timing

remaining target

subtle warning when significantly over target

The timer must be optional and unobtrusive.


## 73. Presentation / Church Mode

Any passage may be opened in a clean full-screen display suitable for:

projector

television

classroom

Bible study

preaching

Presentation controls:

translation

reference

font size

dark/light

next/previous verse

full passage

Words of Christ in Red, when available


## 74. Sermon Presentation Cards

Sermon projects may eventually generate presentation cards containing:

main point

Scripture

supporting verse

quote

notes

This is optional for early releases.


## 75. Study Pack Export

Users may create portable Codex Study Packs.

A Study Pack may contain:

verse references

notes

highlights

custom Scripture chains

sermon outline

questions

topic organization

Copyrighted Bible text shall not be embedded unless redistribution rights permit it.

Where appropriate, references should resolve against the recipient’s installed Bible.


## 76. QR Sharing

Small study references or compact study payloads may be encoded as QR codes.

Potential uses:

passage

reading plan

Scripture chain

short study outline

Large studies should use exported files.


## 77. Printable Study Sheets

Study workspaces may be exported or printed as study sheets containing:

passage

observation questions

word-study results

cross-references

notes area

discussion questions

Print layouts shall use restrained styling.


## 78. “Ask the Text”

Instead of relying on an AI chatbot, Manna should provide an evidence-oriented query system.

Examples:

Where else does Paul use this word?

What words repeat in this chapter?

Where is this verse quoted?

Where else does this Greek lemma occur?

What verses mention both faith and works?

What passages mention Abraham and faith?

Where else does Jesus use this expression?

Answers should come from installed Scripture and study datasets.


## 79. Optional Future Local Study Assistant

A future fully offline assistant may be investigated if a sufficiently small and trustworthy local model becomes practical.

It must remain:

optional

offline

clearly separated from Scripture

clearly separated from commentary

clearly separated from dictionary content

source-cited

The interface must visibly distinguish:

**SCRIPTURE**

**SOURCE MATERIAL**

**LOCAL ASSISTANT OUTPUT**

The assistant may never silently rewrite or paraphrase Scripture as though it were the original text.


## 80. Module Import System

The importer should use a pluggable adapter architecture.

First priority:

**CrossWire SWORD-compatible resources**

Potential future adapters may investigate:

e-Sword

TheWord

MyBible

STEP-related formats

other established Bible software

Support is determined individually by technical and legal feasibility.


## 81. Supported Interchange Formats

Where practical:

OSIS

ThML

VPL

structured plain text

JSON

IMP-style resources

other documented free formats


## 82. Import Workflow

User selects:

**LIBRARY → IMPORT**

The application:

reads selected files;

identifies probable format;

detects resource type;

validates structure;

reads metadata;

reads copyright/license metadata;

previews resource;

requests confirmation;

imports resource;

builds required indexes;

reports unsupported features.


## 83. Imported Resource Types

Adapters may support:

Bible

commentary

dictionary

lexicon

general book

Strong’s resource

morphology resource

devotional

cross-reference resource

atlas

reading plan


## 84. Resource Licensing

Manna shall distinguish:

**Public Domain**

**Openly Licensed**

**Free to Redistribute**

**Free to Download**

These are not equivalent.

Every built-in resource requires a license record.

Imported resources retain their original metadata.


## 85. Security of Imported Modules

Imported data shall be treated as untrusted.

The application must protect against:

executable JavaScript

script injection

dangerous event handlers

malformed markup

external script loading

archive traversal

malformed archives

decompression bombs

hostile resource references

unexpected executable content

Imported commentary or dictionary formatting must not be allowed to execute arbitrary code.


## 86. Personal Library Search

Global search scopes may include:

☑ Bible
☑ Strong’s
☑ Commentaries
☑ Dictionaries
☑ Notes
☑ Sermons
☑ Bookmarks
☑ Questions
☑ Prayer Journal
☑ People
☑ Places
☑ Topics


## 87. Local Storage

Local structured data should use appropriate browser storage such as IndexedDB.

Large resource processing and search indexing should occur without freezing the main user interface.

Application design must account for differences between browser storage environments, especially when launched directly as a local file.


## 88. Backup Is Mandatory

Because notes and sermon material may represent years of work, backup/export is not optional.

The application shall prominently expose:

**EXPORT MY LIBRARY**

The export should include:

notes

highlights

bookmarks

sermons

questions

prayer journal

reading progress

memory progress

flashcards

settings

saved searches

custom topics

Scripture chains

Optional:

**Include Installed Modules**

where legally and technically appropriate.


## 89. Restore

A backup exported from one device should be importable on another compatible device.

Workflow:

copy manna.html;

open it;

import backup;

continue studying.


## 90. Backup Format

The backup format shall be:

versioned

documented

integrity checked

migration capable

portable

Future versions shall attempt to import older backup versions safely.


## 91. Performance Architecture

Large operations must not block the user interface.

Where practical:

Web Workers shall perform indexing;

long result lists shall be virtualized;

Scripture rendering shall be incremental;

indexes shall be rebuildable;

large modules shall not all remain simultaneously expanded in memory.


## 92. Search Indexes

Indexes may be maintained for:

verse text

normalized words

phrases

Strong’s

lemma

morphology

dictionary headings

commentary references

topics

people

geographical names

cross-references

notes


## 93. Performance Targets

After initialization:

chapter navigation should feel immediate;

ordinary exact search should return rapidly;

Strong’s definitions should open instantly;

note/highlight actions should appear immediate;

page animation should target smooth rendering;

long indexing jobs must show progress;

mobile interaction must remain responsive during background work.


## 94. Mobile Import

The universal import baseline shall use the device/browser’s standard file picker.

Drag-and-drop may be added on desktop as an enhancement.

Core functionality shall never require drag-and-drop.


## 95. Mobile Long-Press Actions

Long-pressing Scripture should open actions such as:

Highlight

Note

Bookmark

Copy

Compare

Strong’s

Cross References

Add to Sermon

Add to Memory

Study Passage


## 96. Mobile Text Selection

Where browser capabilities permit, users should be able to select:

word

phrase

complete verse

verse range

Actions may apply to the selected text rather than always applying to the complete verse.


## 97. Mobile Study Drawer

While reading on a phone, users may swipe upward to open:

**WORDS | XREF | NOTES | COMMENTARY**

The drawer may be dismissed by swiping downward.


## 98. Mobile Verse Picker

Reference navigation shall use large touch-friendly controls.

Example:

**BOOK → CHAPTER → VERSE**

Recent passages should be easily accessible.


## 99. Phone Landscape Mode

In landscape orientation, users may optionally use a split workspace.

Example:

| Scripture | Study |
|---|---|
| Romans 8 | Strong’s |
|  | Commentary |


## 100. Tablet Split View

Tablets should comfortably support:

Bible + Commentary

Bible + Notes

Bible + Original Language

Translation + Translation

Bible + Atlas


## 101. Text Sizing

Users may configure:

font size

line spacing

margins

paragraph spacing

verse spacing

Optional pinch-to-resize may be provided where practical.


## 102. Read Aloud

Where device/browser speech functionality exists, Manna may provide:

**READ ALOUD**

Options:

selection

verse

paragraph

chapter

The feature must gracefully disappear if unsupported.


## 103. Comic Themes

Potential themes:


### Classic Comics

Warm paper, inked outlines, bold but restrained accents.


### Golden Age

Vintage print styling and halftone texture.


### Modern Graphic Novel

Dark, cinematic, understated.


### Parchment

Classical presentation with minimal comic elements.


### Study Mode

Minimal decoration.


### Night Study

Dark reading environment.


## 104. Accessibility

Required considerations include:

keyboard navigation

screen-reader-compatible structure

large touch targets

reduced motion

high contrast

adjustable text

visible focus indicators

selectable Scripture

accessible labels

alternatives to color-only meaning

Words of Christ styling that does not rely solely on red


## 105. Visual Integrity

The comic theme must never:

alter Scripture wording

cover text

obscure verse references

imply editorial content is Scripture

make text difficult to select

prevent copying

reduce accessibility

interfere with search


## 106. Canonical Reference Model

Internal references should use a translation-independent structure where possible.

Example:

BibleReference

book

chapter

verseStart

verseEnd


## 107. Bible Module Model

Suggested abstraction:

BibleModule

id

name

abbreviation

language

versification

license

books

verses

Strong’s tags

morphology

red-letter metadata

pericope metadata


## 108. Resource Module Model

ResourceModule

id

type

name

author

language

format

license

entries

metadata


## 109. Annotation Model

Annotation

id

type

reference

selected text

content

tags

created

modified


## 110. Versification

Manna must eventually support multiple versification systems.

The data model shall not assume every translation has identical verse boundaries.

The initial implementation may target a documented Protestant 66-book KJV-style baseline while preserving an architecture that can later support alternate versification.


## 111. Application Navigation

Primary navigation:

**READ**

Bible reader.

**SEARCH**

Exact search, concordance, Verse Finder.

**STUDY**

Original languages, Strong’s, dictionaries, commentary, cross-references.

**EXPLORE**

People, topics, timeline, genealogies.

**ATLAS**

Biblical geography.

**NOTES**

Notes, highlights, questions, bookmarks, prayer journal.

**SERMON**

Sermon Workshop.

**PLANS**

Reading plans and Scripture memory.

**LIBRARY**

Resource management and imports.

On phones, less-used destinations may be grouped under **MORE**.


## 112. Suggested Home Screen

The initial home screen may resemble a premium comic-book issue cover.

Example:


## MANNA


### THE WORD

Continue Reading:

**Romans 8**

[CONTINUE]


#### FIND THE VERSE

Describe the verse you’re trying to remember…


#### QUICK STUDY

Strong’s
Concordance
Atlas
Commentary


#### MY STUDY

Reading Plan: 67%
Memory Review: 7
Sermons in Progress: 2


## 113. Signature Features

The primary features that distinguish Manna should be:


### 1. FIND THE VERSE

Describe the meaning or remembered idea.

Manna finds likely real passages with confidence scores.


### 2. EXPLORE EVERY WORD

Move from English text into:

Strong’s

Greek/Hebrew

lemma

morphology

occurrence counts

translation frequency

related passages


### 3. STUDY THIS PASSAGE

One command assembles every available research resource around the selected passage.


### 4. FOLLOW THE CONNECTIONS

Move seamlessly between:

Scripture

people

places

events

timelines

cross-references

quotations

original-language words


### 5. PASSAGE INSPECTOR

One universal interface for exploring any verse.


### 6. CONTEXT GUARD

Make reading Scripture in context effortless.


### 7. COMIC READING EXPERIENCE

Deliver all of this through a visually memorable graphic-novel interface without compromising serious study.


## 114. Initial Development Phases


### Phase 1 — Core Reader

single self-contained HTML

desktop/mobile/tablet

offline operation

responsive shell

baseline Bible

book/chapter/verse navigation

Page Mode

Scroll Mode

comic styling

page-turn animation

pericope toggle

Words of Christ in Red

accessibility

notes

highlights

bookmarks

backup/restore


### Phase 2 — Search & Strong’s

exact search

phrase search

advanced search

exhaustive word counts

frequency explorer

Strong’s integration

Strong’s definitions

occurrence search

Passage Inspector

repeated-word analysis


### Phase 3 — Original Languages

interlinear

reverse interlinear

lemma lookup

morphology

morphology search

original-language workspace

translation difference mode


### Phase 4 — Resource Library

SWORD importer

Bible importer

commentary importer

dictionary importer

lexicon importer

resource indexing

translation comparison

commentary synchronization


### Phase 5 — Intelligent Discovery

natural-language Verse Finder

confidence scoring

concept matching

synonym matching

transparent result explanations

Topic Explorer

Context Guard

Study This Passage


### Phase 6 — Connected Bible

cross-reference explorer

visual cross-reference graph

Scripture chains

OT/NT quotation explorer

Gospel harmony

People Explorer

genealogies

historical context


### Phase 7 — Atlas & Timeline

interactive atlas

map overlays

geographical linking

people/place relationships

timeline

historical “You Are Here”


### Phase 8 — Personal Study

Observation Mode

Scripture questions

prayer journal

study sessions

study trail

flashcards

Scripture memory

reading plans


### Phase 9 — Ministry Tools

sermon builder

study-to-sermon workflow

preaching mode

sermon timer

presentation mode

printable study sheets

Study Pack export

QR sharing


### Phase 10 — Expanded Compatibility

Investigate additional legally and technically supportable module ecosystems.


## 115. Core Acceptance Workflow

A mature Manna release must allow a user to perform the following completely offline:

Open manna.html on a computer or phone.

Navigate to a Bible passage.

Read in Page Mode.

Swipe to turn pages.

Switch to Scroll Mode.

Toggle pericope headings.

Toggle Words of Christ in Red where metadata exists.

Open Strong’s information.

Inspect the underlying Greek/Hebrew word.

Find every occurrence.

Search an exact word.

Obtain accurate occurrence counts.

Search an exact phrase.

Describe a verse from memory.

Receive ranked real Scripture suggestions.

Inspect why a Verse Finder result matched.

View the verse in context.

Compare translations.

View cross-references.

Explore a visual cross-reference network.

Open commentary.

Open dictionary information.

Inspect a biblical person.

Inspect a biblical location.

Open the atlas.

View historical context.

Compare Gospel parallels.

inspect an OT quotation.

highlight Scripture.

write a note.

create a bookmark.

create a study question.

add a verse to memory review.

add material to a sermon.

use preaching mode on a phone.

create a reading plan.

import another supported Bible module.

import a commentary module.

create a Study Pack.

export all personal study information.

close the application.

reopen it offline.

find the user’s information intact.

restore the same backup on another compatible device.


## 116. Search Acceptance Tests

Examples:

Query:

iron makes another piece of iron sharper

Expected:

**Proverbs 27:17** ranks at or near the top.

Query:

don’t worry about tomorrow

Expected:

**Matthew 6:34** ranks highly.

Query:

people helped angels and didn’t know it

Expected:

**Hebrews 13:2** ranks highly.

Query:

God makes bad situations work for good

Expected:

**Romans 8:28** ranks highly.

Query:

nothing can separate us from God’s love

Expected:

**Romans 8:38–39** ranks highly.

Exact search acceptance testing shall separately verify known corpus word counts.


## 117. Red-Letter Acceptance Tests

For Bible modules containing red-letter metadata:

known sayings of Jesus render using the selected Words-of-Christ style;

non-Christ narration remains standard;

quoted speech boundaries remain consistent with module metadata;

toggle immediately changes presentation;

copying Scripture does not inject formatting metadata into the copied words unless rich copy is explicitly selected;

Search remains unaffected;

Study Mode remains usable with red letters disabled;

accessibility mode can provide a non-red visual distinction.

For Bible modules without red-letter metadata:

Manna must not guess;

the setting must clearly report that red-letter data is unavailable.


## 118. Mobile Acceptance Tests

The same HTML file shall be independently tested for:

small phone portrait

small phone landscape

large phone portrait

tablet portrait

tablet landscape

desktop

Core workflows must function without hover.

Tests should include:

navigation

page turning

scrolling

text selection

long press

bottom sheets

imports

search

Strong’s lookup

notes

backup/export

restore

orientation change

memory pressure

large search result lists

reduced-motion mode


## 119. Product Positioning

Manna should occupy the space between:

conventional desktop Bible study software,

simplified mobile Bible readers,

academic original-language tools,

sermon preparation software,

and visual interactive learning tools.

Its central proposition is:

**Deep Bible study with the discovery power of a concordance, the research depth of a desktop Bible workstation, and the visual energy of a graphic novel—offline, portable, private, and usable from the same HTML file on a computer or phone.**


## 120. Long-Term Vision

A mature Manna user should be able to begin with:

“Where is that verse about God choosing weak things?”

Manna identifies:

**1 Corinthians 1:27**

The user then taps the passage and can immediately:

view it in context;

turn on Words of Christ in Red when applicable elsewhere;

compare translations;

inspect Greek words;

see Strong’s numbers;

inspect morphology;

count every occurrence;

explore related concepts;

open cross-references;

visualize Scripture connections;

inspect people;

inspect locations;

open maps;

view historical context;

read installed commentaries;

examine dictionaries;

create personal notes;

mark observations;

ask study questions;

add the passage to memory review;

add it to a Scripture chain;

add it to a sermon;

save the study;

export the study;

and continue reading—

all from one offline HTML application running locally on a phone, tablet, or computer.

Manna should feel like carrying an entire Bible research desk in one’s pocket while retaining the beauty, movement, and visual identity of a graphic novel.
