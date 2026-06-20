---
id: automation_bias
title: Automation Bias
description: The systemic cognitive bias where users favor machine-generated
  suggestions and ignore contradictory raw evidence.
type: risk
phase: systemic_risks
status: operational
praxis_index: 1
autonomy_index: 1
tags:
  - pyragogy
  - pyragogy/risk
relations:
  - target: "[[cartesian_axes]]"
    type: contradicts
aliases: []
---
## 1. Definition
Automation Bias is the cognitive failure mode where a user accepts an AI-generated answer as inherently correct due to the machine's authoritative tone, bypassing active human verification.

## 2. Use Case
Activated as a diagnostic warning when a learner rapidly accepts complex syntheses, code, or strategic recommendations without cross-referencing primary sources or testing edge cases.

## 3. Human Role
The user must actively notice their own suspension of disbelief, interrupt the reflexive acceptance of confident algorithmic prose, and reclaim the responsibility of fact-checking.

## 4. AI Role
The AI system should expose this failure pattern by occasionally injecting "pedagogically useful deficits" or explicitly requiring the user to cite external sources before accepting its output as final.

## 5. Friction
The interruption mechanism involves structural roadblocks, such as demanding the human to verbally explain the AI's logic or explicitly confirm the underlying data sources before proceeding.

## 6. Risk
If this pattern continues, the user suffers severe domain knowledge erosion, becoming incapable of spotting dangerous hallucinations or systemic errors in the output they approve.

## 7. Observable Markers
Recovery is signaled when the user explicitly queries the AI's logic (e.g., "What are the sources for this claim?"), runs independent tests on the output, or rejects a plausible-sounding but flawed suggestion.