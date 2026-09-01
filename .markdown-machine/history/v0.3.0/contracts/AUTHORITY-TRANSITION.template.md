---
{
  "record_type": "AUTHORITY_TRANSITION",
  "schema_version": 1,
  "machine_version": "0.3.0",
  "title": "AuthorityTransition Template",
  "machine_name": "Markdown Machine",
  "distribution_only": true,
  "source_class": "RECORD_FACTORY"
}
---

# AuthorityTransition Template

Structured fields for a real transition should include project/domain identity, authority epoch/sequence, transition type, predecessor digests, admission-contract ref, exact governing-contract bindings, accepted evidence/human refs, transition payload, and pre-existing PublicationMechanismPlan ref.

Do not include a post-publication receipt digest inside the transition.
