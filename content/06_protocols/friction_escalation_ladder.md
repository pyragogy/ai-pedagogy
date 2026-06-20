---
id: friction_escalation_ladder
title: "Protocol: Friction Escalation Ladder"
description: A dynamic framework to dial up task difficulty and interface
  friction in response to user complacency markers.
type: protocol
phase: protocols
status: operational
praxis_index: 1
autonomy_index: 1
tags:
  - pyragogy
  - pyragogy/protocol
relations:
  - target: "[[cognitive_offloading]]"
    type: mitigates
  - target: "[[cognitive_debt]]"
    type: mitigates
aliases: []
---
## 1. Operational Definition
The Friction Escalation Ladder is an interface protocol that increases cognitive obstacles (e.g., locking copy-paste, introducing typos, forcing manual summaries) when user metrics suggest passive offloading.

## 2. Theoretical Foundation
Based on Bjork's "Desirable Difficulties" and Vygotsky's Zone of Proximal Development, dynamically adjusting cognitive challenge to maximize learning retention.

## 3. Cartesian Axis Mapping
- **Ontogeny Coordinate ($X$):** 4.5
- **Praxis Coordinate ($Y$):** 6.0 (Adaptive friction scaling)
- **Autonomy Coordinate ($Z$):** 3.0

## 4. Core Mechanics / Dynamics
The ladder consists of four steps based on complacency detection:
- **Step 1 (Low Compliance):** Normal workspace behavior.
- **Step 2 (Medium Compliance):** Copy-paste functionality is disabled on generated code blocks.
- **Step 3 (High Compliance):** The AI answers only in Socratic questions, refusing to generate direct answers.
- **Step 4 (Atrophy detected):** The user's screen is locked for a 3-minute reflection interval, requiring them to write a manual summary of their progress.

## 5. Scientific Evidence Status
> [!NOTE]
> ### Evidence Assessment
> - **Empirical Support Level:** High
> - **Primary Reference:** [[evidence_map]]
> - **Active Trials:** [Adaptive workspace stress trials]

## 6. Transition Gates / Activation Criteria
- **Activation Triggers:** Activated when typing speeds or edit-distance metrics fall below baseline thresholds during study blocks.

## 7. Cognitive Risk Mitigations
- Mitigates: [[cognitive_offloading]] / [[cognitive_debt]]
- Mechanism of defense: Prevents habituation to zero-friction automation, keeping the brain in an active, plastic state.

## 8. Anti-Patterns
- **Frustration Attrition:** Escalating friction too high or too quickly, causing the learner to quit the application entirely out of frustration.

## 9. Observable Markers
- Dynamic changes in workspace friction levels logged during user sessions.
- Stable or rising long-term recall rates in student test logs.