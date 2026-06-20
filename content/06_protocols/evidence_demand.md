---
id: evidence_demand
title: "Protocol: Evidence Demand"
description: A protocol requiring users to provide verification, primary
  sources, or replication proofs for claims before they are committed.
type: protocol
phase: protocols
status: operational
praxis_index: 1
autonomy_index: 1
tags:
  - pyragogy
  - pyragogy/protocol
relations:
  - target: "[[epistemic_dependency]]"
    type: mitigates
  - target: "[[fluency_heuristic]]"
    type: mitigates
aliases: []
---
## 1. Operational Definition
Evidence Demand is an automated or self-imposed verification step that blocks a user from saving or committing any analytical node until they have cataloged primary source citations or evidence mappings.

## 2. Theoretical Foundation
Draws from critical rationalism (Karl Popper) and evidence-based education principles, forcing the justification of beliefs through empirical testing.

## 3. Cartesian Axis Mapping
- **Ontogeny Coordinate ($X$):** 5.0
- **Praxis Coordinate ($Y$):** 4.5 (Source verification friction)
- **Autonomy Coordinate ($Z$):** 3.0

## 4. Core Mechanics / Dynamics
1. The user adds a declarative claim to the database.
2. The system flags the claim as "unsupported."
3. The user must trace the claim to:
   * A primary paper in the [[bibliography]].
   * A case log under [[cases]].
   * An external data URL.
4. Once verified, the node status is updated to "operational."

## 5. Scientific Evidence Status
> [!NOTE]
> ### Evidence Assessment
> - **Empirical Support Level:** High
> - **Primary Reference:** [[evidence_map]]
> - **Active Trials:** [Skeptical inquiry class trials]

## 6. Transition Gates / Activation Criteria
- **Activation Triggers:** Triggered when writing content nodes that make strong empirical claims.

## 7. Cognitive Risk Mitigations
- Mitigates: [[epistemic_dependency]] / [[fluency_heuristic]]
- Mechanism of defense: Replaces passive trust in fluent language with active verification, preventing the propagation of hallucinations.

## 8. Anti-Patterns
- **Circular Referencing:** Referencing secondary AI summaries or self-referential notes instead of primary external literature.

## 9. Observable Markers
- 100% of declarative nodes contain at least one valid citation key linking to `content/08_references/bibliography.bib`.
- Audit logs indicating users verified links prior to commits.