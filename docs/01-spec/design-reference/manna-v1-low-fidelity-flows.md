# Manna Version 1 low-fidelity flows

**Status:** DRAFT — awaiting human flow approval  
**Review date:** 2026-08-31  
**Authority:** derived from the human-approved Version 1 product contract and UI/UX requirements  
**Implementation state:** design evidence only; no Product Freeze or application-code authorization

This document is the low-fidelity flow and state companion to the visual
baseline and IA/interaction model. It describes what the user does, what Manna
shows, what state is preserved, and how the same flow reflows across desktop,
tablet, and phone. It is deliberately not production markup, fixture data, or a
technical implementation plan.

## 1. Global rules

Every flow follows these invariants:

1. **Reader first.** A returning user opens at the last Scripture location. A
   first-run user sees the brief onboarding sequence and then Reader. Home is a
   secondary destination, never the launch screen.
2. **Scripture is source-led.** Every verse names its installed source module.
   Scripture is displayed verbatim from that module. Manna never reconstructs a
   translation, invents a mapping, or presents an inferred relationship as
   exact.
3. **One selection context.** Reader selection owns the active passage, verse,
   word, or place. Study panes subscribe to it; no pane updates another pane's
   DOM. Selecting a study result may navigate Reader, but selecting inside a
   study pane never silently changes an unrelated pane.
4. **Follow or pin.** A study surface follows the active selection unless the
   user pins it. A pinned surface is visibly marked, names the held reference,
   announces when it is stale, and always offers `RESUME FOLLOW`.
5. **Back restores context.** Back returns the exact prior workspace state:
   reference, verse, scroll position, selected token, active resource,
   comparison set, pane layout, unfinished note, and keyboard focus where
   applicable.
6. **Progress is leaveable.** Imports, indexing, backups, and restores expose
   persistent progress and safe cancellation. Reading remains available while
   background indexing runs.
7. **Failure is closed.** Warnings say what remains safe and what to do next.
   Errors say that no unsafe mutation was applied. Restore failure leaves the
   existing library untouched. No success message appears before verification.
8. **No hover dependency.** Every hover affordance has a tap and keyboard
   equivalent. Motion is disabled or reduced when the user requests reduced
   motion.

### 1.1 Shared state language

| State | Required user-facing behavior |
|---|---|
| Empty | Say what would appear and provide the one action that fills it. |
| First run | Explain local operation, Reader/Study, and imported-material handling; allow skip. |
| Loading | Show stable progress or progressive results without jumping the user's scroll position. |
| Long-running | Persist progress, allow the user to leave, and offer safe cancellation. |
| Success | Confirm only after verification; make ordinary actions undoable where possible. |
| Warning | Say what happened, what remains safe, and the next safe action; technical detail is expandable. |
| Error | Fail closed; state that existing content is unchanged before explaining the error. |
| Reduced mode | Keep unaffected features usable, name affected features, and explain how to restore capability. |
| Recovery | Preview consequences before mutation and create an emergency backup first when possible. |

### 1.2 Platform reflow

| Surface | Desktop | Tablet | Phone |
|---|---|---|---|
| Primary navigation | Restrained application navigation: Read, Search, Study, Notes, Library | Same destinations in a compact bar or menu | Bottom navigation: Read, Search, Study, Notes, More |
| Study | Scripture with panes beside it; panes can expand | Reader plus one focused, collapsible study pane | Reader plus a swipe-up focused drawer; no compressed columns |
| Long work | Dismissible progress modal/inspector with persistent status | Full-screen sequence with persistent progress row | One decision per screen; progress pinned above navigation |
| Lists and detail | List plus preview/inspector | List then focused detail | Full-screen list/detail transitions with Back |
| Primary action | Visible in toolbar or pane footer | Large focused action | Near the bottom edge, above the navigation bar |

On every platform, the visual order is the DOM/tab order, touch targets remain
comfortable, text can scale without clipping, and content reflows instead of
shrinking desktop columns onto a phone.

## 2. Flow A — startup, first run, and Reader

### A1. Returning user

1. Manna performs a quiet browser/storage capability check.
2. If supported, Manna opens **Read** at the saved book, chapter, verse, and
   scroll position. No dashboard or issue-cover Home appears first.
3. The Reader shows the active source module, compact reference controls, and
   the current chapter. Controls may recede while reading.
4. The user can choose a book/chapter/verse, use previous/next chapter, move by
   keyboard, or use the supported touch gesture.
5. An invalid book, chapter, verse, or unavailable module leaves the current
   reference unchanged and shows a local warning beside the selector.

### A2. First-run sequence

1. Show Card 1: local operation — no account, server, telemetry, or Internet
   requirement.
2. Show Card 2: Reader and Study — Scripture is primary and deeper tools open
   on demand.
3. Show Card 3: imported material — source-labelled, untrusted, and never
   executable.
4. Show the full trust statement: “Manna is a study aid, not a substitute for
   your physical Bible. Always verify Scripture and study material against your
   physical Bible.”
5. `SKIP` is available on every card. Skipping records that onboarding was
   bypassed and opens Reader; it does not disable later Help.
6. An optional tour may highlight Reader controls and Study, then returns to
   the same Scripture location.

### A3. Startup capability outcomes

- **Supported:** checks are silent; Reader opens normally.
- **Storage near capacity:** Reader opens, a non-blocking warning links to
  Storage Status, and import/backup actions explain the limit.
- **Unsupported browser feature:** Reader opens in safe reduced or read-only
  mode when possible; affected features are named with guidance.
- **Storage unavailable:** reading and installed Scripture remain usable; notes,
  settings, or imports that cannot persist are disabled with an explicit reason.
- **Unexpected startup error:** existing local data is not changed; diagnostics
  offers a copyable explanation and recovery guidance.

## 3. Flow B — Scripture reading, selection, and actions

1. The user taps, clicks, or focuses a verse. The verse is visibly selected and
   the compact action tray opens without obscuring the text.
2. The tray offers `NOTE`, `HIGHLIGHT`, `BOOKMARK`, `QUESTION`, `OBSERVATION`,
   `CROSS-REFERENCES`, `COMPARE`, and `SEND TO STUDY`.
3. Choosing an action keeps the verse and Reader context. The action opens a
   sheet or focused view only when more input is needed.
4. Selecting a different verse updates all compatible following panes. Each
   pane names the new reference, for example `SHOWING FOR MATTHEW 4:17`.
5. Selecting a tagged word or place wins over the verse click beneath it while
   also setting the verse context.
6. The footer and recent-history control expose the current context without
   adding permanent tool clutter.

### B1. Full-screen reading

1. `FULL-SCREEN READ` recedes interface chrome and presents a calm, centred
   Scripture column.
2. The user chooses `SCROLL` or `PAGE`; both preserve the current chapter and
   selected verse.
3. Verses remain tappable. Tapping one sets the Study Desk selection and shows
   the current reference in the minimal footer.
4. `EXIT` or Back returns to the exact prior Reader/Study layout and focus.

### B2. Read-aloud, copy, and print

- If a compatible device voice exists, the Reader menu offers device read-aloud
  and identifies it as the device speech system. Playback can pause and stop.
- If no voice exists, the action says so and leaves reading unaffected.
- Copy and print preserve the selected Scripture source, references, supplied-word
  marking, and any required attribution. Permissions may restrict study-source
  copying and explain the restriction.

### B3. Reader states

`RETURNING USER`, `FIRST RUN`, `INVALID REFERENCE`, `MODULE MISSING`,
`STORAGE WARNING`, `REDUCED MODE`, `WORDS OF CHRIST RED + MARK`, `MARK ONLY`,
`OFF`, `READ-ALOUD AVAILABLE`, `NO DEVICE VOICE`, and `COPY/PRINT RESTRICTED`.

## 4. Flow C — Strong's quick preview and full Word Study

1. A mapped word is a real control with a non-colour cue. Hover, tap, or
   keyboard activation opens the same quick preview.
2. The preview shows original-language form, transliteration, pronunciation,
   Strong's number, concise definition, grammar when available, and mapping
   status.
3. `OPEN WORD STUDY` expands the entry into the focused Study workspace. The
   prior Reader/Study state is recorded for exact return.
4. The full entry shows occurrences, related forms, usage by passage, source
   details, and limitations. Choosing an occurrence moves Reader to that verse
   and records the word-study return point.
5. Back returns to the full entry at its prior scroll position; exiting the
   expanded pane returns to the prior Study layout and selection.

### C1. Mapping states

- **Mapped:** present the verified Strong's entry and source identity.
- **One-to-many or many-to-one:** show the relationship and do not imply a
  one-to-one definition.
- **Ambiguous or partially mapped:** label the uncertainty and explain the
  limitation before offering the entry.
- **Translator-supplied:** preserve the supplied status in the data model,
  render the approved visual cue, and retain it in export.
- **Unmapped:** explain that no verified mapping exists; do not guess.
- **Untagged translation:** optionally route to the KJV/Strong's verse baseline,
  labelled as a baseline rather than an English-to-source mapping.
- **No Strong's module:** keep the verse readable and explain that the entry is
  unavailable.
- **Testament terminology:** use Textus Receptus terminology for New Testament
  entries and the relevant Masoretic terminology for Old Testament entries.

States: `MAPPED`, `AMBIGUOUS`, `PARTIALLY MAPPED`, `UNMAPPED`, `SUPPLIED WORD`,
`NO STRONG'S MODULE`, `OCCURRENCES LOADING`, `NO OCCURRENCES`, `OT/NT SOURCE
LABEL`, and `FULL-SCREEN RETURN`.

## 5. Flow D — place selection, Atlas, and Map Packs

1. A recognized place has a dotted cue and place marker. Selecting it opens a
   concise place card while preserving the current passage.
2. If Atlas is already present in Study, the selection immediately focuses or
   recentres that Atlas. No redundant `OPEN IN ATLAS` action is shown.
3. If Atlas is absent, the card offers `OPEN IN ATLAS`; choosing it adds or
   focuses the Atlas pane without changing Scripture.
4. The user switches among Geographic, Route/Journey, Region, Timeline,
   Relationship, and Source Map views. The current passage and place selection
   persist.
5. A Map Pack inspector shows attribution, source identity, layer status, and
   conversion limitations.
6. A structured layer may be interactive, partially interactive, source-view
   only, or awaiting review. Uncertain locations are visually distinct from
   verified data.
7. Back returns to the previous Atlas view, pane state, and selected place.

States: `VERIFIED`, `UNCERTAIN`, `SOURCE VIEW ONLY`, `NEEDS REVIEW`, `NO MAP
PACK`, `SCHEMATIC PLACEHOLDER`, `LAYER LOADING`, and `PLACE NOT FOUND`.

## 6. Flow E — Search, Verse Finder, and concordance

1. Search opens with one prominent field focused. Recent and saved searches sit
   below it; there is no mode picker.
2. The user enters a reference, exact phrase, word, topic, or remembered idea.
3. Manna infers the likely method and labels the results header `REFERENCE`,
   `EXACT PHRASE`, `WORD`, `TOPIC`, or `VERSE FINDER`.
4. Exact matches remain visually simple. Inferred results show confidence and a
   short explanation; they never masquerade as exact matches.
5. Results are grouped in this order: Scripture, Strong's, dictionaries,
   commentaries, cross-references, maps, notes, and imported library. Every
   result names its source.
6. Method chips rerun the same query without retyping. Advanced controls remain
   collapsed until opened.
7. A Scripture result moves Reader to the matching location. A Strong's result
   opens Word Study; a resource result opens its labelled source; a note result
   opens the linked personal item.
8. `SAVE THIS SEARCH` stores the query and method in Notes. Renaming or deleting
   it never alters the underlying source data.
9. A word result can open a concordance occurrence list. The list progressively
   loads, supports keyboard movement and paging/scrolling, and returns to the
   prior result list exactly.
10. Back returns to the result list, query, method, filters, scroll position, and
    focus.

States: `NO QUERY`, `TYPING`, `PROGRESSIVE RESULTS`, `NO RESULTS`, `EXACT
MATCH`, `INFERRED WITH CONFIDENCE`, `INDEX STILL BUILDING`, `IMPORTED LIBRARY
EXCLUDED`, `MANY OCCURRENCES`, `NO OCCURRENCES`, `SAVED`, `RENAMED`, and
`REDUCED MODE`.

## 7. Flow F — Study workspace, resources, pinning, and comparison

### F1. Open Study and switch a resource

1. `SEND TO STUDY` or `STUDY` opens at the active passage and selection.
2. One resource is visible per category by default. The resource switcher lists
   commentary, dictionary, lexicon, cross-references, word study, Atlas, and
   imported sources.
3. Choosing another resource replaces the active resource in that category;
   ordinary use never silently stacks commentaries.
4. A resource pane displays its source identity and, for editorial content,
   `EDITORIAL NOTE — NOT SCRIPTURE`.
5. The user may resize, reorder, collapse, swap sides, choose a preset, and save
   the arrangement. A manual change is `CUSTOM` until saved as `MY LAYOUT`.

### F2. Follow and pin

1. Every substantive pane starts in `FOLLOW`.
2. Choosing `PIN` holds the pane at its current reference and visibly changes
   the badge, border, saturation, and toggle state.
3. When Reader moves, a stale pinned pane says where Scripture moved and offers
   `RESUME FOLLOW`.
4. `RESUME FOLLOW` updates the pane immediately and returns it to `FOLLOW`.
5. Pane-specific pinning never prevents other following panes from updating.

### F3. Expand and exact return

1. The user expands commentary, dictionary, word study, Atlas, comparison,
   notes, or an imported source to a focused view.
2. The focused view records layout, passage, selection, resource, scroll
   positions, and focus.
3. Back or `EXIT FULL SCREEN` restores all recorded state. It is a view change,
   not a new primary-destination visit.

### F4. Comparison

1. The user explicitly chooses `COMPARE` from a verse tray, resource pane, or
   Study action. Comparison is never the default Reader layout.
2. The user adds compatible Bibles or study sources without an arbitrary count
   limit. Every column identifies its source; translations are never merged.
3. Large sets use grouping, collapsing, progressive rendering, and a focused
   source. No source is silently removed.
4. On tablet, at most two columns are visible and the remaining sources stay in
   a labelled source strip. On phone, one source is shown at a time with a
   horizontal source strip.
5. Ordinary commentary remains one active commentary. Several commentaries
   require this explicit Compare action.
6. Back exits comparison and restores the exact Study layout, passage, selection,
   source set, scroll, and focus.

States: `DEFAULT`, `CUSTOM UNSAVED`, `MY LAYOUT`, `FOLLOWING`, `PINNED`,
`PINNED AND STALE`, `RESUMED`, `ONE ACTIVE RESOURCE`, `TWO SOURCES`, `MANY
SOURCES`, `FOCUSED SOURCE`, `INCOMPATIBLE SOURCE`, `PROGRESSIVE LOADING`,
`SOURCE MISSING`, and `EXACT RETURN`.

## 8. Flow G — Notes, marks, sessions, and Study Trail

### G1. Create personal material from context

1. From the verse action tray or a study resource, choose `NOTE`, `HIGHLIGHT`,
   `BOOKMARK`, `QUESTION`, or `OBSERVATION`.
2. The editor opens in a sheet on phone, focused view on tablet, or contextual
   strip/inspector on desktop. The verse/resource context remains visible.
3. Writing autosaves locally. There is no required Save button; an explicit
   autosave status confirms persistence.
4. A note may link to multiple verses, words, people, places, topics, and
   resources. Links are shown as removable chips; tags and collections are
   optional.
5. Highlight collections use a non-colour-dependent name, pattern, icon, or
   label. Colour may supplement meaning but never carries it alone.
6. Opening a personal item shows all links. Selecting a link returns to its
   relevant Reader or source location without losing the item.

### G2. Study Trail and saved searches

1. Visited passages and resources are recorded quietly in the current session.
2. The Trail is hidden until opened. The user may pause, resume, or clear it;
   clearing confirms the consequence and does not delete notes.
3. Recent history remains a lightweight navigation aid; Study Trail is the
   fuller optional record.

### G3. Exports

1. From a note, collection, or study selection choose `EXPORT`.
2. Preview the readable output with references, source attribution, selected
   content, and any permission restrictions.
3. Choose PDF, DOCX, or plain text. Full `.mannabackup` remains a separate
   Library/Settings action.
4. If a source cannot be exported, the preview says what is omitted and why;
   personal content remains exportable where possible.

States: `NO NOTES YET`, `UNFINISHED DRAFT`, `AUTOSAVED`, `LINK TARGET MISSING`,
`NO HIGHLIGHTS`, `COLLECTION`, `COLOURLESS ALTERNATIVE`, `BOOKMARKED`,
`QUESTION`, `OBSERVATION`, `TRAIL HIDDEN`, `TRAIL PAUSED`, `TRAIL EMPTY`,
`EXPORT PREVIEW`, `PERMISSION RESTRICTED`, and `EXPORT VERIFIED`.

## 9. Flow H — Library, import, and inferred-link review

### H1. Browse and inspect

1. Library lists bundled and imported Bibles, commentaries, dictionaries,
   lexicons, books, and Map Packs by kind.
2. Each row names source/title, size, status, license or attribution state, and
   whether it is enabled. Enable/disable and inspect never delete a resource.
3. Optional sorting and collections remain secondary; the basic browse flow
   works without organizing anything.

### H2. Guided import

1. Choose a module, document, or backup. The file extension is only a hint;
   content is inspected.
2. Detect the format and suggest a purpose. Supported module/document targets
   include SWORD, OSIS, VPL/structured text, JSON, IMP-style resources, PDF,
   DOCX, TXT, and Markdown where technically and legally feasible.
3. Confirm or correct classification and metadata: Bible, commentary,
   dictionary, lexicon, book, cross-reference source, Map Pack, or another
   supported type.
4. Preview extractable text, entries, page/section anchors, Scripture
   references, entities, places, routes, metadata, attribution, and links.
5. Confirm import. Manna validates untrusted content, rejects executable or
   hostile material, and runs a transactional conversion.
6. Show persistent progress with percentage/phase, current item, cancel, and
   `KEEP READING`/Back. Cancellation leaves a verified existing library and
   reports whether a resumable job remains.
7. Indexing may continue in the background without blocking Reader.
8. Summary reports explicit links, high-confidence inferred links, medium-
   confidence related links, low-confidence searchable-only material, unresolved
   items, warnings, and anything needing attention.
9. Review is optional. If opened, filters include confidence tier and source
   section; users can remove, correct, restore, or undo derived links without
   changing imported source text.

### H3. Import outcomes

- **Unsupported:** no mutation; exact reason and supported-export guidance.
- **Malformed or hostile:** fail closed; existing library unchanged; technical
  details expandable.
- **Capacity warning:** before mutation, show estimated space and alternatives.
- **Partial success:** only verified content becomes available; summary names
  skipped/unresolved material.
- **Verified success:** resource is source-labelled, internally stored, and no
  longer depends on the original file. The original file is never deleted.
- **Indexing:** Reader remains available and progress persists in Library.

States: `EMPTY LIBRARY`, `POPULATED`, `DISABLED RESOURCE`, `INSPECTING`,
`DETECTING`, `CLASSIFICATION SUGGESTED`, `CLASSIFICATION CORRECTED`,
`PREVIEW`, `IMPORTING`, `CANCELLED`, `INDEXING BACKGROUND`, `UNSUPPORTED`,
`FAILED CLOSED`, `PARTIAL SUCCESS`, `CAPACITY WARNING`, `NEEDS REVIEW`, and
`VERIFIED`.

## 10. Flow I — Backup and Restore

### I1. Create a backup

1. Open Backup & Restore from Library or Settings.
2. Choose full `.mannabackup` (personal data, settings, and imported modules)
   or Personal Data Only.
3. Optionally enable offline password encryption. Explain that there is no
   account-based password recovery.
4. Preview contents, creation metadata, size, encryption state, and any space
   warning. Confirm destination through the platform's local save action.
5. Show leaveable progress. Verify integrity before reporting success and add
   the backup to the local list.

### I2. Restore safely

1. Choose a listed backup or local backup file. Inspect and validate it before
   changing the library.
2. If encrypted, request the password. A wrong password makes no changes and
   offers retry or cancel; there is no recovery bypass.
3. Show contents, version/migration status, conflicts, available space, and
   plain-language consequences of `MERGE` and `REPLACE`.
4. If Replace is selected, create an emergency pre-restore backup first when
   possible and show its location/status.
5. Confirm the selected operation. Run transactionally with persistent progress;
   the user may leave and return.
6. Verify the result. Only then report success and refresh Library/Notes state.

### I3. Restore outcomes

- **No backups:** explain how to create one.
- **Migration required:** show the version transition and whether any content
  cannot be migrated before confirmation.
- **Conflicts:** list the affected items and the Merge/Replace consequences.
- **Insufficient space:** do not mutate; offer Personal Data Only, cleanup
  guidance, or cancel.
- **Failure:** stop before unsafe mutation where possible, state that the
  existing library is unchanged, and expose diagnostic detail.
- **Verified:** show restored counts, warnings, and the emergency backup status.

States: `NO BACKUPS`, `CREATING`, `ENCRYPTED`, `WRONG PASSWORD`, `VERSION
MIGRATION`, `CONFLICTS FOUND`, `INSUFFICIENT SPACE`, `FAILED CLOSED`,
`EMERGENCY BACKUP`, and `VERIFIED`.

## 11. Flow J — Settings, appearance, trust, storage, and diagnostics

1. Open Settings from the secondary menu; it never replaces a primary
   destination in navigation.
2. Appearance offers System, Light, Sepia, and Dark. Scripture typeface, size,
   line spacing, and reading width are independent controls with a live Reader
   preview.
3. Words of Christ offers `RED + MARK`, `MARK ONLY`, and `OFF`. Meaning never
   depends on colour alone.
4. Applying appearance changes presentation only. It does not alter study
   layout, resource visibility, selection, notes, or Reader location.
5. Trust/About explains local operation, source responsibility, storage use,
   backup status, browser limitations, and the permanent physical-Bible
   reminder.
6. Storage Status reports used/available/estimated capacity and safe actions.
   Diagnostics reports capability checks and copyable details without exposing
   developer paths or secrets.
7. Help explains core controls contextually. It remains available after first
   run.

States: `DEFAULTS`, `MODIFIED`, `SYSTEM APPEARANCE`, `HIGH CONTRAST`, `REDUCED
MOTION`, `TEXT SCALED`, `STORAGE NEAR CAPACITY`, `UNSUPPORTED FEATURE`,
`READ-ONLY`, and `DIAGNOSTIC DETAILS EXPANDED`.

## 12. Cross-flow accessibility and recovery behavior

- **Keyboard:** landmarks, primary navigation, reference fields, verse rows,
  tokens, tabs, trays, dialogs, and result rows have a logical focus order.
  Enter/Space activates controls; Escape closes a tray, sheet, or full-screen
  view and returns focus to its opener.
- **Touch:** all essential actions have tap targets; hover-only previews become
  tap sheets; swipe is supplementary and never the only way to navigate.
- **Screen reader:** selected verse uses a current-state announcement; token
  controls announce type and mapping status; pinned panes announce held
  reference and stale status; progress announces phase and completion only
  after verification.
- **Reduced motion:** drawer, crosshair, and page transitions become immediate
  or near-static while preserving state and focus.
- **Text scaling/high contrast:** controls reflow, cues retain non-colour
  meaning, and Scripture remains selectable and copyable. Right-to-left source
  text keeps correct direction, selection, and copy behavior.
- **Interrupted work:** reload, leaving a workspace, or losing focus preserves
  safe progress where possible. A resumable import/index/backup/restore appears
  in its owning destination with a clear next action.
- **Recovery:** a failed or cancelled operation leaves the last verified state
  available. The user can retry, inspect details, export diagnostics, or return
  to reading without a dead end.

## 13. Capability coverage matrix

Every Version 1 capability has a flow, state coverage, and desktop/tablet/phone
route. `A`–`J` refer to the flows above; `X` is the cross-flow behavior in §12.

| Product capability | Flow | Designed states |
|---|---|---|
| Reader book/chapter/verse navigation | A, B | Returning, first run, invalid reference, module missing, reduced |
| Verse selection updates compatible panes | B, F2 | Selected verse, following pane, pinned pane, stale pane, resumed |
| Follow/pin per study surface | F2 | Following, pinned, pinned and stale, resumed |
| Study layout resize/reorder/swap/presets/save | F1 | Default, custom unsaved, saved My Layout |
| Commentary, one active by default | F1 | Active, switched, pinned, editorial-not-Scripture label |
| Cross-reference integration | B, F1 | Rows available, no rows, source-labelled |
| Strong's quick preview | C | Mapped, ambiguous, partially mapped, unmapped, supplied |
| Full Word Study | C | Full entry, occurrences loading, no occurrences, no module, exact return |
| Dictionary and lexicon integration | F1, H | Active, none installed, imported source, source-labelled |
| Atlas place selection and centering | D | Verified, uncertain, no Map Pack, source-view only |
| Map Packs and six map views | D, H | Fully/partially interactive, source view only, needs review |
| Exact/reference/phrase search | E | No query, typing, exact match, no results, index building |
| Verse Finder for remembered ideas | E | Inferred, confidence shown, no results, reminder surface |
| Concordance occurrences | E, C | Many, progressive, paged/scrolling, none, exact return |
| Saved and recent searches | E, G2 | None saved, saved, renamed, deleted |
| Notes linked to verses/words/people/places/topics | G1 | Empty, draft, autosaved, link target missing |
| Highlights and collections | G1 | None, collection, colourless alternative |
| Bookmarks, questions, observations | G1 | None, listed, filtered by intent |
| Study sessions and Study Trail | G2 | Hidden, open, paused, empty, cleared |
| Unlimited comparison workspace | F4 | Two, many, focused, incompatible, progressive, missing |
| Library browse/enable/disable/inspect | H1 | Empty, populated, disabled, inspecting |
| Module import | H2 | Detecting, unsupported, preview, importing, summary, failed closed |
| Document ingestion | H2 | Suggested class, corrected class, text-only unsupported/OCR excluded |
| Inferred-link review | H3 | Explicit, high, medium, low, unresolved, needs review |
| Source identity on verses/resources | A, F1, H | Bundled, imported, editorial, inferred |
| Full backup and personal-data-only export | I1 | No backups, creating, encrypted, verified |
| Safe Merge/Replace restore | I2 | Conflicts, space warning, migration, failed closed, verified |
| Offline password encryption | I1, I2 | Encrypted, wrong password, no recovery path |
| System/Light/Sepia/Dark and type controls | J | Defaults, modified, high contrast, reduced motion, scaled text |
| Words of Christ without colour dependence | B, J | Red+mark, mark only, off |
| First run and trust statement | A2 | First run, skipped, returning, session reminder, reduced first run |
| Trust/About, storage, diagnostics | J | Normal, near capacity, unsupported feature, expanded details |
| Startup capability check and reduced mode | A3, J | Supported/silent, degraded, read-only, unavailable storage |
| Readable PDF/DOCX/plain-text exports | G3 | Preview, permissions restricted, attribution, verified |
| Device read-aloud | B2 | Available, no voice, playing, stopped |
| Navigation memory and exact Back | B, E, F3, G1 | Exact return, history, trail, unfinished note |
| Supplied-word rendering | B, C | Supplied present, legend, export preserved |
| Full-screen expansion and exact return | B1, C, F3, D | Expanded, exited, prior layout/selection restored |

## 14. Approval boundary

This draft is ready for human review of the flow sequence, states, platform
reflow, and accessibility rules. Approval should specifically confirm:

- the five-destination IA and direct-to-Reader launch;
- the four open IA proposals recorded in the companion artifact, especially
  supplied-word rendering;
- the action vocabulary and consequences for Merge/Replace, import, and
  inferred-link review;
- the required exact-return behavior and the mobile drawer/sheet model.

Human approval of this document is approval of the flows only. It does not
approve Product Freeze. The next design stage is appearance and high-fidelity
interactive mock verification, followed by a separate explicit Product Freeze
decision.
