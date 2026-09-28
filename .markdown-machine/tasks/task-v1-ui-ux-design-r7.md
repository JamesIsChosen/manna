---
{
  "record_type": "TASK_CONTRACT",
  "schema_version": 1,
  "project_id": "manna",
  "task_id": "V1-UI-UX-design-verification",
  "intent_baseline_ref": {"ref":"sha256:260501e4c677a61b70db2e0d57d010e27e9a5ae3e97f33a5104da85e8348f608","path":".markdown-machine/intent/intent-baseline-manna.md"},
  "capability_binding_ref": {"ref":"sha256:b1d72fc11359dbfcbb6a1344d3b12787336181ee14c5284b42fc65d3af5d2e2d","path":".markdown-machine/capabilities/capability-binding-software-product-r2.md"},
  "operation_contract_ref": {"ref":"sha256:893ace33928958c00140ad7fbb1f235897974529977e6d1f09e76d8d9bce90cd","path":".markdown-machine/authority/operation-contract-design-realization-v01024.md"},
  "purpose": "Perform exactly one bounded design-realization correction iteration for the two verified Product Freeze r6 navigation defects and prepare exact renewed-review evidence.",
  "scope": [
    "Correct the phone mock so visual primary-navigation order equals DOM/tab order: Read, Search, Study, Notes, More.",
    "Correct the iPad mock so every route change sets exactly aria-current=page on the active primary destination and removes aria-current from inactive destinations.",
    "Preserve all unrelated markup, behavior, styling, responsive layouts, and approved product requirements; live-verify the corrected paths and record exact evidence.",
    "Present the final changed phone and iPad bytes for a fresh human appearance decision, then synchronize the approved-mock registry and prepare a new exact-subject independent Product Freeze review."
  ],
  "prohibited_scope": [
    "No redesign, new feature, desktop change, backend work, schema change, network integration, production implementation, architecture, release, unrelated mock change, or Product Freeze acceptance.",
    "No work outside this one admitted correction iteration and no inference of human appearance approval from correction authorization."
  ],
  "completion_conditions": [
    "Both exact navigation defects are corrected with minimal diffs and direct behavioral verification.",
    "The changed phone and iPad artifacts are presented for a fresh human appearance decision.",
    "Exact evidence and synchronized approved-mock registry bytes are prepared for a renewed independent Product Freeze review."
  ],
  "convergence_root_ref": {"ref":"sha256:35747db3327ed8b0156cd734d98d7dbaf42e8f37dbd7b40be4a357b05838587d","path":".markdown-machine/authority/convergence-root-manna.md"},
  "lifecycle_node_id": "DESIGN_VERIFICATION",
  "project_context": [
    {"path":"docs/01-spec/manna-v1-ui-ux-requirements.md","source_digest":"c1d3e261b1461bb51fb3ea66410858e321bc24f19160ffeabcd246804b9658df"},
    {"path":"docs/01-spec/design-reference/manna-v1-low-fidelity-flows.md","source_digest":"909d806e4ad798def0a9e6081eba5ccbc570a3e8a2836f1ca5a577234fb2fb29"},
    {"path":"docs/01-spec/design-reference/manna-v1-phone-interactive-mock.html","source_digest":"fadd926be6bbb7e6852fb933a078b046bf014969c434ffca49d6040b6991b816"},
    {"path":"docs/01-spec/design-reference/manna-v1-ipad-interactive-mock.html","source_digest":"be1e8f58e573cfdbfb38588acca23776282d2358740a6ba187b05e9dee82447b"},
    {"path":"docs/01-spec/design-reference/APPROVED-MOCKS.md","source_digest":"c57b4c65c24faa6d71d4fb2e165f8c3e52dbb6ee4e651d4f4b1474e104be7d7d"},
    {"path":".markdown-machine/reviews/review-result-v1-ui-ux-r6.md","source_digest":"0c4aa233eec0458feb0541fecbdfe2f21c2ea8854b2bfe9ff81eb6dc78d76130"}
  ],
  "subtree_context": [],
  "exact_path_context": [],
  "compiled_under_authority_ref": {"ref":"sha256:22b0c8901dfa323f5bde1b0cae5f779fd45e008dc1b67b789e04c04a700b5078","path":".markdown-machine/authority/authority-transition-product-freeze-navigation-extend.md"},
  "revision": 7
}
---
# V1 UI/UX navigation correction task revision 7

This revision authorizes only the admitted one-unit phone/iPad navigation
correction slice, exact verification, fresh appearance presentation, registry
synchronization, and renewed Product Freeze review preparation.
