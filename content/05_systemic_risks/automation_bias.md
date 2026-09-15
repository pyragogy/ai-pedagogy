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

## Research around this node

**Current research state — the risk and the proposed remedy must be separated.**

Automation bias is an established research construct in human–automation interaction. The specific Pyragogy remedies proposed in this node — deliberately introduced deficits, mandatory source checks, explanation roadblocks — are **design hypotheses** unless separately supported by evidence.

### Working Patterns

Relevant human–AI research candidates include:

- **WP-AI002 — Provenance Before Persuasion** asks which provenance displays actually change verification behaviour rather than simply making an answer look more credible.
- **WP-AI007 — Separate Observation, Interpretation, and Recommendation** asks whether making those layers explicit improves error detection and disagreement quality.
- **WP-AI001 — Friction Before Delegation** tests the broader assumption that forcing an explicit pause can improve judgment, while recording the risk of friction fatigue and ritual compliance.

These are **research candidates, not validated best practices**. See the [Working Patterns AI research agenda](https://github.com/pyragogy/working-patterns/blob/main/data/ai-patterns/candidates.json).

### UnPeeragogy

No direct UnPeeragogy evidence has yet been identified for automation bias in AI-mediated learning. The useful connection is methodological: search for cases where a declared review process failed in practice, where authority was accepted without scrutiny, or where a supposed mitigation created a new failure mode.

### Open question

> **Which interventions actually change verification behaviour — and which merely add friction or increase the appearance of credibility?**

See [[evidence_friction|Evidence & Friction]].
