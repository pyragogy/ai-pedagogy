---
id: adult_reflective_practice
title: "Epistemic Integration in Complex Arenas: Real Work and Reflective Practice"
ontogeny: 6.5
tags:
  - pyragogy
  - pyragogy/practice
aliases:
  - adult_book
type: practice
praxis_index: 8
autonomy_index: 7.5
phase: autonomy
status: operational
description: "The structural integration of cognitive friction into real-world professional environments to prevent automatic acceptance of AI outputs."
relations:
  - target: "[[collaborative_thinking]]"
    type: requires
  - target: "[[ai_over_reliance]]"
    type: contradicts
---

## 1. Definition

Reflective Practice for adults is the structural integration of cognitive friction into real-world professional environments, designed to slow down the automatic acceptance of AI outputs in high-pressure contexts.

## 2. Use Case

Activated in the production of critical professional deliverables (e.g., software architectures, strategic plans, clinical assessments) where AI agents are used to accelerate development or generate first drafts.

## 3. Human Role

Maintains mature autonomy: defines acceptance criteria _before_ generation, frames the specific domain context, validates the output, and assumes exclusive legal, ethical, and technical responsibility for the final result.

## 4. AI Role

Functions as a production accelerator and Diagnostic Checker. It operates strictly within the boundaries and constraints established by the professional, providing high-speed syntheses or variations.

## 5. Friction

Imposes an explicit "accountability checkpoint" in the workflow. The professional cannot approve or implement the generated code/text without first validating it against the pre-established parameters.

## 6. Risk

The absence of this practice in teams leads to [[cognitive_debt]] and [[automation_bias]]: professionals trust outputs blindly, gradually losing mastery of the complex systems they manage.

## 7. Observable Markers

The professional documents (in Git commits or release notes) the exact criteria by which the AI's output was validated, highlighting which portions were rejected or modified to fit the human context.

## Research around this node

**Current research state — design hypothesis / needs empirical validation.**

The accountability checkpoint is a concrete Pyragogy intervention, but this node should not be read as evidence that the checkpoint itself improves professional judgment. The intervention and the risk it is intended to address must be evaluated separately.

### Working Patterns

Three human–AI research candidates are directly relevant:

- **WP-AI001 — Friction Before Delegation** asks when a pre-delegation checkpoint improves judgment enough to justify its time and cognitive cost. Its failure hypotheses include ritual clicking and unnecessary friction.
- **WP-AI011 — Name the Accountable Human Authority** asks whether named human oversight produces real control or merely ceremonial sign-off.
- **WP-AI012 — Close the AI Advice Loop** asks groups to record what was tried and what happened, instead of treating advice as successful when it was merely accepted.

These are **research candidates, not validated best practices**. See the [Working Patterns AI research agenda](https://github.com/pyragogy/working-patterns/blob/main/data/ai-patterns/candidates.json).

### UnPeeragogy

No direct UnPeeragogy evidence has yet been identified for this specific AI intervention. Its relevance here is methodological: compare declared control with actual implementation, look for abandoned or failed checkpoints, and preserve counterevidence instead of treating the intended workflow as the observed workflow.

### Open question

> **When does an accountability checkpoint improve judgment enough to justify its cost, and when does it become ritual approval?**

See [[evidence_friction|Evidence & Friction]].
