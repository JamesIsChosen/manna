---
{
  "record_type": "KERNEL_CONTRACT",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "Review Purpose and Independence"
}
---

# Review and Independence

Every governing review has an exact ReviewPurpose and immutable review subject.

Independence is vector-based. Relevant axes may include:

- authorship independence;
- cognitive-session independence;
- author-private-reasoning exposure;
- mutable workspace isolation;
- tool/cache/retrieval state;
- prior remediation exposure;
- provider/model-family separation where required;
- endpoint separation where required.

Each ReviewPurpose marks axes REQUIRED, OPTIONAL, or IRRELEVANT.

UNKNOWN on a required axis means reviewer ineligible.

The orchestrator may provision the reviewer and route permitted context; it cannot manufacture the independent verdict.

Historical review records are immutable. Re-review does not rewrite prior FAIL/PASS chronology.
