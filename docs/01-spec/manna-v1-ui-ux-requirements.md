# Manna Version 1 UI/UX Requirements

**Status:** FLOW APPROVED — visual/layout baseline and high-fidelity reference verification recorded; appearance approval and Product Freeze pending
**Review date:** 2026-08-31
**Authority:** Human-approved UI/UX interview
**Implementation state:** FROZEN; this is a design handoff, not application-code authorization

## 1. Design objective

Manna should feel like opening a Bible first and a complete study workstation second. Scripture is visually primary. Complexity appears progressively and only when requested. The existing P0.1 mock and comic-book treatment are reference evidence, not an approved final interface.

The complete flow is human-approved. The next design gate is appearance approval
for the desktop and phone references. Production implementation, roadmap
recompilation, and Product Freeze remain prohibited until the human explicitly
approves the appearance and then grants Product Freeze.

## 2. Information architecture

Manna opens directly to the Reader at the user's last Scripture location. It does not open to a dashboard or issue-cover Home screen.

The five primary destinations are:

- **Read** — the clean Scripture Reader;
- **Search** — references, exact text, phrases, topics, remembered ideas, and Verse Finder;
- **Study** — passage-context study tools and deliberate comparison;
- **Notes** — personal study material and sessions;
- **Library** — bundled and imported resources, importing, and library management.

Settings, appearance, Backup & Restore, Trust/About, diagnostics, storage status, and help live in a secondary menu. Phones use compact bottom navigation. Larger screens use restrained application navigation.

## 3. Reader

- Use a calm single-column Scripture view, one chapter at a time, with vertical scrolling.
- Keep the reference selector and essential controls compact; allow controls to recede while reading.
- Support previous/next chapter controls, keyboard navigation, and appropriate touch gestures.
- Desktop hover and touch/keyboard activation open a concise Strong's preview for verified mapped words.
- Selecting a verse opens a compact action tray for notes, highlights, bookmarks, cross-references, comparison, and sending the passage to Study.
- Do not leave permanent tool clutter around the text.
- Full-screen reading may recede to almost only Scripture, while remaining safely escapable and preserving context.

## 4. Study workspace

Study always opens in the context of the selected passage. By default it presents one active study resource at a time: commentary, dictionary, cross-references, Atlas, word study, or an imported resource. A clear resource switcher replaces the current resource. Normal commentary use switches commentaries instead of stacking them.

The user may intentionally add, resize, reorder, collapse, or remove Study panes, and Manna remembers the layout. Every substantive pane—including commentary, dictionary, word study, map, comparison, notes, and imported sources—can expand to full screen. Exiting or pressing Back restores the exact prior layout, passage, selection, scroll positions, and focus.

On desktop, Study may sit beside Scripture or expand into its own workspace. On smaller devices, the same workspace becomes focused sequential views rather than compressed columns. The user's context must survive every transition.

## 5. Comparison

Comparison is a deliberate workspace, not the default Reader layout. Users may add as many compatible Bibles or study sources as they want; Manna imposes no arbitrary two-source limit. Large sets use grouping, collapsing, progressive rendering, and a focused-source mode. Resources are never silently removed.

Displaying several commentaries simultaneously requires an explicit Compare action. Ordinary commentary use retains one active commentary pane.

## 6. Visual character

The visual direction is reverent, book-centered, calm, and substantial: excellent typography, generous space, warm paper-like surfaces, restrained color, and clear hierarchy. Manna may retain the prototype's illustrated/editorial character selectively in onboarding, maps, section headers, and empty states. Scripture remains conventionally typeset; ornament and comic styling must never compete with it.

Version 1 appearance options are **System**, **Light**, **Sepia**, and **Dark**, with independent Scripture typeface, size, spacing, and reading-width controls. Additional prototype themes are references and ship only if they meet the same readability, contrast, and accessibility requirements. Appearance changes presentation only and never study state or resource visibility.

## 7. Search and Verse Finder

Use one prominent search experience rather than scattered search tools. A user may enter a reference, exact phrase, word, topic, or remembered idea. Manna infers likely intent, labels how results were found, and lets the user narrow or change the method without starting over.

Results prioritize Scripture, then organize Strong's entries, dictionaries, commentaries, cross-references, maps, notes, and imported-library matches into clear sections. Advanced controls stay collapsed until requested. Confidence appears only for inferred relationships; exact matches remain visually simple.

## 8. Library and importing

Library is the single place to browse, enable, disable, organize, import, and inspect Bibles, commentaries, dictionaries, lexicons, books, maps, and other resources.

The guided import flow is:

1. Choose a module, document, or backup.
2. Detect the format and suggest its purpose.
3. Confirm or correct classification and metadata.
4. Preview what Manna can extract and connect.
5. Import with visible progress and safe cancellation.
6. Present a plain-language summary of successful links, inferred links, searchable-only content, warnings, and anything needing attention.

Review is optional. Imported resources become usable after successful verification, remain visibly source-labeled, and no longer depend on the original file. Long imports and indexing continue without blocking ordinary reading when safely possible.

## 9. Notes and personal study

Notes is one workspace for notes, highlights, bookmarks, questions, observations, saved searches, and study sessions. Users create personal material directly from a verse or study resource without losing context.

A note may link to several verses and resources. Opening it shows those connections and returns to the relevant location. Writing autosaves locally. Tags and collections are optional rather than mandatory workflow. Study Trail quietly records passages and resources visited during a session, remains hidden until opened, and can be paused or cleared.

## 10. Strong's and word study

The quick preview includes the original-language form, transliteration, pronunciation, Strong's number, concise definition, grammar when available, and mapping status. **Open Word Study** reveals the complete entry, occurrences, related forms, usage by passage, source details, and limitations.

Supplied, ambiguous, partially mapped, and unmapped words are labeled honestly. Manna never presents an uncertain alignment as an exact definition. Word Study follows the universal full-screen expansion and exact-return behavior.

## 11. Atlas and Map Packs

Selecting a recognized place presents a concise place card. If Atlas is already present in Study, selection immediately focuses or recenters that Atlas; a redundant **Open in Atlas** action must not appear. If Atlas is absent, the place card may offer **Open in Atlas**.

Atlas preserves the current passage while switching among Geographic, Route/Journey, Region, Timeline, Relationship, and Source Map views. Imported map layers retain attribution and status: Fully Interactive, Partially Interactive, Source View Only, or Needs Review. Uncertain geography must be visibly distinguishable from verified data.

## 12. Navigation memory

Each workspace preserves its own state. A user can leave a passage, search, inspect a result, enter Study, consult a map, and return without losing chapter, scroll position, selected verse, active resource, comparison set, or unfinished note.

Back means return to the exact prior context, not merely switch to the previous primary destination. A lightweight recent-history control exposes recently visited passages and study locations. Study Trail remains the fuller optional history.

## 13. First run, trust, and help

First run is brief, not a lengthy setup wizard. It explains local operation, introduces Reader and Study, describes imported-material handling, and presents:

> Manna is a study aid, not a substitute for your physical Bible. Always verify Scripture and study material against your physical Bible.

Manna then opens directly to Scripture. A short guided tour is optional. Contextual help remains available later. The approved compact session and study-surface reminders from the product contract remain in force without interrupting every verse action.

## 14. Accessibility and responsive behavior

- Meet WCAG 2.2 AA across every shipped appearance.
- Support mouse, keyboard, touch, and assistive technology for every essential function.
- Every hover interaction has tap and keyboard equivalents.
- Provide adjustable Scripture size, typeface, line spacing, and content width; high contrast; reduced motion; visible focus; screen-reader semantics; and comfortable touch targets.
- Reflow instead of shrinking desktop columns onto phones.
- Preserve passage and study context when panels become sheets or focused screens.
- No core study capability is desktop-only.
- Hebrew and other right-to-left content must render, select, and copy correctly.

## 15. Progress, errors, and recovery

Use quiet, undoable feedback for ordinary actions. Imports, indexing, backups, and restores receive persistent progress that users can leave and revisit. Warnings explain what happened, what remains safe, and the next safe action; technical detail is expandable. Never claim success before verification.

Backup & Restore is discoverable from both Library and Settings. Show backup contents, creation date, and encryption state. Restore previews contents, conflicts, available space, and Merge versus Replace consequences. Replace creates an emergency recovery backup first when possible. Failure leaves the existing library untouched.

## 16. Privacy, ownership, compatibility, and performance

Manna requires no account, login, subscription, server, telemetry, or Internet connection. Personal data and imported resources remain on-device until explicit export or backup. Settings and Trust/About explain local storage, capacity, backup status, and browser limitations in plain language.

At startup, quietly check required browser and storage capabilities. Supported environments show no technical gate. Unsupported conditions identify affected features and guidance; Manna remains available in a safe reduced or read-only mode when possible.

Reader becomes usable immediately even while a large library is indexing. Large resources and comparisons load progressively without unstable scrolling. Manna warns before an import exceeds safe capacity and offers practical alternatives.

## 17. Export and read-aloud

User-facing sharing exports prioritize **PDF**, **DOCX**, and **plain text**, with clean preview, references, and source attribution. Copying and printing respect resource permissions. Full Manna backups remain separate from readable study exports. Cloud sharing and collaboration are outside Version 1.

Version 1 may expose device-provided read-aloud when a compatible local voice exists and must identify it as the device speech system. Bundled professional narration and downloadable audio modules remain future capabilities.

## 18. Complexity and language boundary

Manna uses one consistent experience rather than permanent beginner and expert modes. Progressive disclosure keeps Reader simple while deeper controls appear in Study, advanced search, comparison, and source inspection. Contextual explanation supports new users; shortcuts support experienced users.

The Version 1 interface is English. The design and data model should remain localization-ready, including future right-to-left interfaces. Imported translations and resources may use any supported language and font representation.

## 19. Required design deliverables and approval sequence

The next design effort must produce:

1. complete low-fidelity flows for every Version 1 function;
2. empty, first-run, loading, long-running, success, warning, error, reduced-mode, and recovery states;
3. desktop and phone flows, with tablet behavior derived and demonstrated where layout changes materially;
4. keyboard, touch, screen-reader, reduced-motion, and text-scaling behavior;
5. a reviewed information architecture and reusable interaction model;
6. a visual system honoring the approved quiet Reader direction;
7. a high-fidelity interactive mock for desktop and phone;
8. a coverage matrix mapping every product-contract capability to a designed flow and state.

**Design progress, 2026-08-31:** deliverable 6 (visual system) and the
layout half of deliverable 7 (interactive mock) are baselined for every V1
surface — Read, Search, Study, Notes, Library, plus Settings, First run, and
Backup & Restore. See
[design-reference/baseline-mock-handoff.md](design-reference/baseline-mock-handoff.md)
for what exists, what is excluded, and the open conflicts it does not resolve.
Deliverables 1, 2, and 4 (flows, full state coverage, and non-pointer
interaction beyond the original prototype) were approved by the human on
2026-08-31 in
[design-reference/manna-v1-low-fidelity-flows.md](design-reference/manna-v1-low-fidelity-flows.md).
The companion
[design-reference/manna-v1-phone-interactive-mock.html](design-reference/manna-v1-phone-interactive-mock.html)
now provides the phone reference for the remaining V1 surfaces. Desktop and
phone reference interactions were exercised in the local browser; independent
human appearance approval remains the next gate.

Approval gates are sequential:

`approved product contract → approved UI/UX interview (current) → approved flows → approved appearance and interactive mock → explicit Product Freeze → roadmap recompilation → implementation authorization`

The next agent must not infer Product Freeze from approval of this interview.
