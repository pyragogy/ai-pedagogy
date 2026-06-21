# Pyragogy Syllabus

**Pyragogy Syllabus** is a living operational framework for learning with AI without becoming passive in front of it.

The project explores how human learners, educators, researchers, and builders can use AI as a peer-like cognitive partner: not as an oracle, not as a shortcut machine, but as a source of structured resistance, reflection, and constructive friction.

The live syllabus is published at:

**[https://syllabus.pyragogy.org/](https://syllabus.pyragogy.org/)**

---

## What this project is

Pyragogy Syllabus is an open, evolving knowledge system built with Quartz and Markdown.

It translates the theoretical foundations of Pyragogy and Cognitive Rhythm Theory into a practical graph of operational nodes. Each node describes a learning capability, risk, protocol, transition, or governance principle for human-AI co-learning.

The goal is not to make AI use smoother at all costs.

The goal is to preserve human judgment while using AI to challenge, mirror, perturb, and strengthen thinking.

---

## Why it exists

Most AI interfaces are designed to reduce friction:

* faster answers;
* shorter summaries;
* fluent completions;
* instant generation;
* less effort from the user.

This can be useful, but in learning contexts it can also produce dangerous patterns:

* automation bias;
* cognitive offloading;
* convergence bias;
* epistemic dependency;
* performative understanding;
* unexamined AI answers.

Pyragogy starts from a different premise:

> Some forms of difficulty are not obstacles to learning. They are where learning happens.

This syllabus is an attempt to design AI-supported learning environments where friction is intentional, constructive, and pedagogically meaningful.

---

## Core idea

AI should not simply complete the learner’s thought.

It should sometimes resist it.

Inside the Pyragogy framework, AI can act as:

* a cognitive partner;
* a Socratic opponent;
* an epistemic mirror;
* a pattern perturbator;
* a source of counterexamples;
* a protocol executor;
* a friction generator.

But the human remains responsible for judgment.

The learner must still define criteria, evaluate evidence, accept or reject outputs, revise assumptions, and carry responsibility for the final synthesis.

---

## Repository structure

The syllabus is organized as a graph of semantic folders:

```text
content/
  01_foundations/        Core architecture, axes, and relation grammar
  02_ontogeny/           Early development and embodied foundations
  03_praxis/             Co-agency, sparring, reasoning trails, and friction
  04_autonomy/           Independent judgment and mature human-AI practice
  05_systemic_risks/     Failure modes of passive AI use
  06_protocols/          Operational interventions and friction protocols
  07_cases/              Future case studies and applied examples
  08_references/         Evidence discipline and claim-status mapping
scripts/
  audit_nodes.cjs        Structural audit for semantic nodes
quartz/
  Quartz site engine and theme customization
```

---

## The 7-section node protocol

Every semantic node follows the same operational structure:

```markdown
## 1. Definition

## 2. Use Case

## 3. Human Role

## 4. AI Role

## 5. Friction

## 6. Risk

## 7. Observable Markers
```

This structure prevents the syllabus from becoming a narrative wiki.

Each node must answer:

* What does this concept do inside the framework?
* When is it activated?
* What must the human still do?
* What role can AI play without replacing judgment?
* What kind of friction interrupts passive automation?
* What failure mode appears if this node is missing?
* What observable behavior proves that learning or judgment is actually happening?

---

## How the graph works

The graph is not just visual decoration.

It is intended as a reasoning instrument.

Nodes are connected through epistemic relations such as:

* `REQUIRES`
* `STRENGTHENS`
* `CONTRADICTS`
* `MITIGATES`
* `ACTIVATES`
* `FAILS_INTO`

These relations help show how learning capacities, risks, protocols, and autonomy thresholds interact.

A good node should not only explain itself. It should clarify how it affects other nodes in the system.

---

## Evidence discipline

Pyragogy is an evolving framework, not a finished empirical doctrine.

Claims should be clearly marked by evidence status where appropriate:

* `supported claim`
* `theoretical synthesis`
* `design hypothesis`
* `speculative extension`
* `needs empirical validation`

Do not invent citations.

Do not present speculative educational design as established cognitive science.

The `Evidence Map` exists to keep the framework intellectually honest as it grows.

---

## How to contribute

Contributions are welcome from:

* educators;
* students;
* researchers;
* learning designers;
* AI builders;
* developers;
* writers;
* people experimenting with human-AI co-learning.

Useful contributions include:

* improving existing nodes;
* adding missing epistemic relations;
* proposing case studies;
* testing protocols in real learning contexts;
* strengthening evidence status;
* improving accessibility and readability;
* reporting broken links or unclear concepts;
* helping turn the syllabus into a usable research and teaching resource.

Before adding a new node, ask:

1. Does this node describe a real learning function, risk, protocol, or capability?
2. Does it fit one of the existing folders?
3. Does it use the 7-section format?
4. Does it preserve human judgment instead of outsourcing it?
5. Does it connect meaningfully to other nodes?
6. Are its claims properly qualified?

---

## Local development

Install dependencies:

```bash
npm ci
```

Run the semantic node audit:

```bash
node scripts/audit_nodes.cjs
```

Build the site locally:

```bash
npm run build
```

Run formatting/type checks:

```bash
npm run check
```

Clean-build test:

```bash
rm -rf .quartz public
npm ci
node scripts/audit_nodes.cjs
npm run build
```

---

## Deployment

The project is deployed through **Cloudflare Pages Git Integration**.

The intended pipeline is:

```text
git push origin main
        ↓
Cloudflare Pages
        ↓
node scripts/audit_nodes.cjs && npm run build
        ↓
deploy to syllabus.pyragogy.org
```

Cloudflare Pages settings:

```text
Production branch: main
Build command: node scripts/audit_nodes.cjs && npm run build
Build output directory: public
Root directory: /
```

Do not deploy manually with Wrangler unless there is an emergency.

Do not commit the generated `public/` directory.

Do not use GitHub Actions for deployment unless the pipeline is intentionally redesigned.

---

## Quality checks

Before pushing to `main`, run:

```bash
node scripts/audit_nodes.cjs
npm run build
npm run check || true
```

The audit currently checks for:

* malformed frontmatter;
* missing required fields;
* duplicate or polluted titles;
* corrupted descriptions;
* legacy `Core Analysis` sections;
* banned placeholder strings;
* missing 7-section protocol headers;
* relation schema problems.

A node should not pass because it sounds good.

It should pass because it is structurally useful.

---

## Roadmap

Near-term priorities:

* add practical case studies;
* improve the homepage onboarding path;
* expand the evidence map;
* refine the graph relation grammar;
* create contributor guidelines;
* document real classroom or research use cases;
* develop applied protocols for teachers, students, and AI tool builders.

Longer-term possibilities:

* interactive graph improvements;
* structured datasets of node relations;
* research collaborations;
* protocol testing in real learning environments;
* integration with other open learning projects.

---

## Project status

This is an early but operational research framework.

It is stable enough to read, explore, critique, and extend.

It is not finished.

The project needs careful collaborators more than passive users.

---

## License and citation

License and formal citation information should be added here as the project stabilizes.

For now, cite the live syllabus as:

```text
Pyragogy Syllabus. A living operational framework for human-AI learning, cognitive friction, and peer-like co-creation. https://syllabus.pyragogy.org/
```
