---
id: critical_thinking
title: Critical Thinking
ontogeny: 6
tags:
  - pyragogy
  - pyragogy/capability
aliases: []
type: capability
praxis_index: 8.5
autonomy_index: 7
phase: autonomy
status: operational
description: "- **THREATENS**: [[unexamined_ai_answers]] (Weight: 1."
relations:
  - target: "[[unexamined_ai_answers]]"
    type: threatens
---
---
## 1. Definition
Critical Thinking is the cognitive capability to rigorously test claims, dissect underlying assumptions, evaluate primary evidence, and trace the logical implications of a given argument or dataset.

## 2. Use Case
Activated when analyzing complex texts, assessing AI-generated arguments, or preparing to integrate external information into a formal knowledge structure.

## 3. Human Role
The learner acts as a relentless forensic auditor ("Does this claim survive pressure?"). They must refuse to accept fluent prose at face value, demanding explicitly structured arguments and independently verifying the causal links between premise and conclusion.

## 4. AI Role
The AI is positioned as a logical adversary or an [[epistemic_mirror]]. It is tasked with exposing the flaws in the user's logic, or alternatively, it is intentionally instructed to present a flawed argument that the human must systematically dismantle.

## 5. Friction
The protocol prevents passive reading by implementing an [[evidence_demand]] or forcing the user to map the argument in a formal syllogism before the system allows the content to be summarized or stored.

## 6. Risk
If critical thinking is outsourced, the user falls victim to the [[fluency_heuristic]] and [[unexamined_ai_answers]], silently absorbing hallucinations, biases, and logically invalid conclusions simply because they are well-formatted.

## 7. Observable Markers
The user's dialogue history shows a high frequency of "Why?", "What is the source for this?", and "Identify the logical flaw in that statement" rather than "Summarize this for me."