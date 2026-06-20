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
## 1. Definition
Evidence Demand is a rigorous validation protocol that forces the user to anchor AI-generated claims or independent hypotheses to verifiable primary evidence, source quality, and explicit degrees of uncertainty.

## 2. Use Case
Activated whenever the user attempts to integrate a strong empirical claim, a complex factual synthesis, or a controversial statement into their final deliverable.

## 3. Human Role
The learner must act as a forensic auditor: they must leave the AI interface, locate primary external sources, evaluate the quality of the evidence, and explicitly link the claim to its epistemological foundation.

## 4. AI Role
The AI introduces structured resistance by shifting from a generative to a skeptical stance.
* The AI flags a declarative statement as "unsupported."
* It refuses to elaborate further on the topic.
* It demands the user provide a primary source, quote, or data set before unlocking the next phase of the discussion.

## 5. Friction
The mechanism interrupts the flow of fluent text generation, imposing a hard stop that requires the high-effort, analog task of reading primary literature and weighing source credibility.

## 6. Risk
This protocol mitigates [[epistemic_dependency]] and the [[fluency_heuristic]], ensuring the user does not mistake the AI's confident tone for verified objective truth.

## 7. Observable Markers
All major claims in the final output are accompanied by explicit citations linking to primary literature or verified external data. The user's prompts reflect uncertainty mapping (e.g., "What is the confidence interval for this claim?").