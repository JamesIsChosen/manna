---
{
  "record_type": "HUMAN_CONTROL_PROFILE",
  "schema_version": 1,
  "machine_name": "Markdown Machine",
  "machine_version": "0.4.0",
  "profile_id": "MM-HUMAN-CONTROL/1",
  "authoritative_contract": true,
  "project_output_eligible": true,
  "materialization_rule": "EXACT_EXPORT_REQUIRED",
  "reserved_human_command_vocabulary": false,
  "control_intents": [
    "NEW_PROJECT_START",
    "SESSION_END_GRACEFUL",
    "SESSION_END_IMMEDIATE_EXTERNAL",
    "SESSION_RESUME",
    "LOCAL_SCOPE_STOP_OR_REDIRECT",
    "READ_ONLY_WHILE_STOPPED",
    "NO_CONTROL_CHANGE",
    "AMBIGUOUS_CONTROL_SCOPE"
  ],
  "interpretation_basis": [
    "EXACT_CURRENT_HUMAN_STATEMENT",
    "CONVERSATIONAL_CONTEXT",
    "RECOVERED_PROJECT_STATE",
    "CURRENT_STOP_STATE",
    "CURRENT_TASK_AND_EFFECT_SCOPE"
  ],
  "exact_statement_preservation": "REQUIRED",
  "keyword_matching_as_decision_rule": "FORBIDDEN",
  "ambiguous_more_authority": "DENY_NEW_SUBSTANTIVE_COMMENCEMENT_UNTIL_RESOLVED",
  "session_end_action": "CREATE_STOP_STATEMENT_AND_EXECUTE_GRACEFUL_CLOSEOUT",
  "immediate_external_end_action": "CREATE_STOP_STATEMENT_AND_EXECUTE_IMMEDIATE_EXTERNAL_STOP",
  "stopped_substantive_continue_action": "CREATE_RESUME_STATEMENT_AND_REQUIRE_ADMITTED_RESUME_BEFORE_EXECUTION",
  "stopped_read_only_action": "REMAIN_STOPPED",
  "active_continue_action": "CONTINUE_UNDER_CURRENT_AUTHORITY_NO_SYNTHETIC_RESUME",
  "canonical_handoff_path": ".markdown-machine/HANDOFF.md"
}
---
# Human Control Profile

This exact runtime export governs the human-facing control surface. It does not replace the exact transition/recovery evaluators; it determines when ordinary human language supplies the semantic basis for their `STOP` or `RESUME` statements.

## 1. No magic words

Humans communicate naturally. No reserved token is required to start a new project, end a work session, pause, resume, or continue. Examples are acceptance fixtures only and MUST NOT be implemented as a closed phrase list.

Preserve the exact human statement as provenance. Classification is agent interpretation constrained by current conversational and recovered project context.

## 2. Start

For a new project, an ordinary project goal plus selection of Markdown Machine is sufficient to begin bootstrap. Do not ask the human to issue `START`.

For an already-active project with no STOP barrier, normal directives to continue/proceed operate under current authority and do not create `RESUME` merely because of wording.

## 3. End the session

When the human clearly communicates that the current substantive work session should end, pause, defer until later, or be made safe for host/session shutdown, classify the exact statement as `STOP` and execute `GRACEFUL_STOP` plus bounded closeout automatically.

This includes semantically equivalent ordinary language such as being done for the day, stopping for tonight, continuing tomorrow, calling it here, or shutting the host down. The human does not need to add "close out cleanly".

Local-scope language that stops only a named activity while directing other work to continue is not a session STOP. Contextual meaning and scope dominate isolated words.

If material ambiguity remains after using context, deny new substantive commencement while resolving it. Do not guess toward additional execution authority.

## 4. Immediate external stop

When the human clearly forbids another intentional external action, use `IMMEDIATE_EXTERNAL_STOP`. Local truth may be preserved, but repository/network activity performed solely for closeout is prohibited.

## 5. Resume

When a STOP barrier is active, a clear request for substantive governed work to continue is semantic basis for a `RESUME` HumanStatement even if the word "resume" is absent. The exact statement must satisfy the existing current-human and subject-binding rules, and substantive execution remains denied until the admitted descendant `RESUME` transition releases the barrier.

A greeting, presence statement, question about status, request to inspect state, or other read-only request does not by itself release STOP.

A narrowed continuation request may resume only within the already-authorized and newly stated scope/effect boundary.

## 6. Clean-closeout gate

After `SESSION_END_GRACEFUL`, the agent MUST NOT report `CLOSED_CLEANLY`, `STOPPED`, or `STOPPED_SYNCED` merely because processes were stopped, a Git worktree is clean, or a handoff file exists.

Before claiming clean continuation, the agent must establish all applicable conditions:

1. no new substantive Task/Attempt commencement after STOP intent;
2. active Attempts/children/effects/resources/convergence reservations are terminal, quiesced, safely partial, or explicitly unknown under existing recovery contracts;
3. every meaningful transient continuation surface (including `/tmp`, browser/session-only state, preview state, unsaved editor state, generated scratch state, or other host-ephemeral work) is either durably preserved, exactly reconstructible from durable governed state, or explicitly classified as unresolved/unknown;
4. `.markdown-machine/STATE.md` reflects the closeout result;
5. the prior handoff is semantically consumed/superseded and the one canonical `.markdown-machine/HANDOFF.md` is regenerated for this closeout;
6. the regenerated handoff is based on the current recovered authority/state and exposes the exact next legal continuation route plus partial/unknown state;
7. repository synchronization is classified and completed/read back when required and legally permitted by the RepositoryBinding;
8. no claim of synchronized closure is made from local cleanliness or push success alone;
9. after the immutable closeout commit is fixed, no project mutation is made merely to record its later sync observation.

If any required condition is unproven, report the exact partial/blocking/unknown classification instead of clean closure.

## 7. Handoff currentness

The canonical project handoff path is `.markdown-machine/HANDOFF.md`.

A handoff created before subsequent governed progress is stale navigation evidence. File existence is never sufficient currentness evidence. When a session resumes from a prior handoff, that projection is semantically consumed for continuation purposes. At the next bounded closeout, it MUST be replaced/regenerated from the resulting current state.

A closeout is invalid if meaningful work occurred after the handoff's basis state and the agent merely points to the old file without regenerating it.
