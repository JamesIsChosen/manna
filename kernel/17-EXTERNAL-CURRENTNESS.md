---
{
  "record_type": "KERNEL_CONTRACT",
  "schema_version": 1,
  "machine_version": "SMPM-1",
  "title": "External Currentness"
}
---

# External Currentness

ExternalSubject defines stable identity for mutable external state such as repositories, branches, services, deployments, cloud resources, DNS, databases, accounts, hardware, approvals, or infrastructure.

ExternalObservation records observed state, provenance, time, and evidence.

OperationContracts define required freshness/currentness for each dependent external subject.

A Markdown statement such as “deployed” is historical evidence, not proof that the world is still deployed that way.

Cold resume refreshes only facts material to the next governing operation.
