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
## 1. Definition
The Friction Escalation Ladder is an adaptive protocol that applies graduated levels of cognitive resistance to the workflow, scaling the difficulty of the interface based on real-time detection of user complacency.

## 2. Use Case
Activated continuously in the background, intervening when behavioral metrics (such as rapid copy-pasting, high frequency of "do it for me" prompts, or minimal editing) indicate a lapse into passive consumption.

## 3. Human Role
The learner must recognize the increasing resistance of the system as a signal of their own cognitive disengagement and proactively step up their level of analytical effort to lower the friction state.

## 4. AI Role
The AI acts as an adaptive environmental controller, escalating resistance sequentially.
* Step 1: The AI responds with a soft clarification (e.g., "Could you specify what part of the logic you want me to expand?").
* Step 2: The AI introduces a direct contradiction to the user's premise.
* Step 3: The AI forces a structured trade-off decision before continuing.
* Step 4: The AI enacts a hard refusal of premature completion, locking code generation and demanding a manual summary.

## 5. Friction
The mechanism dynamically interrupts the path of least resistance, forcing the user to exert more raw cognitive effort to extract value from the machine the more they try to offshore their thinking.

## 6. Risk
This protocol directly attacks [[cognitive_offloading]] and prevents the accumulation of [[cognitive_debt]], ensuring the learner's analytical muscles remain under tension.

## 7. Observable Markers
System logs show the friction level escalating and then successfully de-escalating as the user returns to drafting original paragraphs, making complex edits, and formulating highly structured prompts.