---
id: evidence_friction
title: "Evidence & Friction: How the Syllabus Learns"
description: "A simple bridge between Syllabus proposals, UnPeeragogy friction, Working Patterns evidence, and human-reviewed revision."
type: reference
phase: references
status: operational
praxis_index: 1
autonomy_index: 1
tags:
  - pyragogy
  - pyragogy/reference
relations:
  - target: "[[evidence_map]]"
    type: requires
aliases:
  - evidence and friction
---

## 1. Definition

Evidence & Friction is the bridge between what the Pyragogy Syllabus currently proposes and what the wider Pyragogy research ecosystem can challenge, qualify, or revise.

The roles stay distinct:

- **Syllabus** — the current map of concepts, risks, practices, and protocols;
- **Cognitive Interview Protocol (CIP-KGE)** — a human-gated route for turning expert knowledge into reviewable change proposals;
- **UnPeeragogy** — a friction lens for finding failure modes, counterevidence, boundary conditions, and gaps between declared practice and lived practice;
- **Working Patterns** — an evidence-aware map of organisational interventions, including a separate set of human–AI research candidates.

No layer is allowed to certify itself simply by pointing at another Pyragogy project.

## 2. Use Case

Use this layer when a Syllabus node makes a claim about a risk, intervention, mechanism, or desirable practice and a reader needs to know its current research state.

The question is not only “is there a source?” but:

- what exactly is being claimed;
- whether the evidence concerns the problem or the proposed solution;
- whether the intervention was actually implemented;
- what outcomes were observed;
- what it costs and who bears that cost;
- what evidence complicates the claim;
- what remains unknown.

## 3. Human Role

The human decides whether a source, incident, pattern, or interview actually bears on the node.

They remain responsible for distinguishing evidence from analogy, deciding whether a proposed Knowledge Patch should enter the graph, and preserving disagreement when the material does not justify a single conclusion.

## 4. AI Role

AI can retrieve related material, compare claims, identify possible tensions, separate observation from interpretation, and propose bounded changes.

It must not silently strengthen a claim, treat a research candidate as a validated practice, invent a missing source, or write a contested interpretation into the map as fact.

For interview-derived changes, the AI produces a proposal. A human reviews the diff.

## 5. Friction

Before a node is strengthened, the research loop should force a few uncomfortable questions:

> What would make this claim wrong?
>
> Do we have evidence for the intervention, or only evidence that the problem exists?
>
> Is “human oversight” real authority or ceremonial approval?
>
> Did the practice happen as described?
>
> Which costs disappear from the success story?
>
> What do we still not know?

The friction is not there to block revision. It is there to make revision more local, inspectable, and reversible.

## 6. Risk

The main failure mode is **false synthesis**: making several internal Pyragogy projects appear to corroborate one another when they are actually sharing assumptions, analogies, or research lineage.

Two safeguards matter in this pilot:

1. **UnPeeragogy is not direct evidence for an AI-learning claim unless a traceable case or source actually supports that relation.** It may instead provide a method for looking for failure and counterevidence.
2. **Working Patterns AI records are research candidates.** They may sharpen a question or suggest an intervention to test, but they are not validated answers.

## 7. Observable Markers

This layer is working when:

- a reader can tell whether a node is a supported claim, theoretical synthesis, design hypothesis, or unresolved question;
- cross-project links say why they matter rather than merely listing related pages;
- counterevidence and implementation failures remain visible;
- research candidates are visibly labelled as candidates;
- a proposed graph change can be reviewed before it is accepted;
- an interview can end with a clear account of **what changed, what did not, and why**.

## The research loop

```text
Syllabus
what do we currently propose?
        ↓
CIP-KGE
what new knowledge is being proposed?
        ↓
UnPeeragogy
where does the theory break or need qualification?
        ↓
Working Patterns
what evidence, alternatives, conditions, and costs are relevant?
        ↓
Human review
accept · revise · contest · reject
        ↓
Syllabus
change the map
        ↺
```

The loop does not require every project to contribute to every node. An honest “no direct evidence identified here yet” is more useful than a decorative link.

## Pilot nodes

The first small evidence-layer pilot is attached to three nodes:

- [[adult_reflective_practice]] — whether accountability checkpoints create meaningful review or ritual approval;
- [[automation_bias]] — separating the documented risk from unvalidated Pyragogy interventions intended to mitigate it;
- [[ai_over_reliance]] — distinguishing the broad over-reliance hypothesis from proposed high-friction remedies.

The pilot is intentionally small. If these links make the map easier to understand and challenge, the same pattern can later be extended to other nodes.

## Pyragogy Interviews

The interview format is one way this loop can receive new human experience.

An AI Research Teammate can enter a conversation with a relevant Syllabus subgraph, ask for concrete incidents rather than generic opinions, preserve evidence and interpretation separately, and finish by proposing a reviewable Knowledge Patch.

The public output is not just a video. It can include a final question:

> **What changed in the map because of this conversation?**

A proposed change remains a proposal until a human validates it.
