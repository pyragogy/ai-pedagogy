<p align="center">
  <img src="https://img.shields.io/badge/Pyragogy-Syllabus-10b981?style=for-the-badge" alt="Pyragogy Syllabus" />
  <img src="https://img.shields.io/badge/Built%20with-Quartz%20v5-0f172a?style=for-the-badge" alt="Built with Quartz v5" />
  <img src="https://img.shields.io/badge/Knowledge%20Base-Obsidian-6366f1?style=for-the-badge" alt="Obsidian Knowledge Base" />
  <img src="https://img.shields.io/badge/Deploy-Cloudflare%20Pages-f97316?style=for-the-badge" alt="Cloudflare Pages" />
</p>

# Pyragogy Syllabus

A living knowledge base for human-AI learning, cognitive friction, and epistemic autonomy.

## What This Is

The Pyragogy Syllabus is an operational framework and a structured graph of educational protocols. It is designed to preserve human judgment and critical thinking in an era of automated feedback loops. Rather than treating AI as a frictionless oracle, this project treats it as a cognitive partner—an interlocutor that questions, resists, and mirrors the learner's reasoning.

## Why It Exists

Modern AI interfaces are optimized for convenience, speed, and minimal user effort. While efficient for simple tasks, this absolute lack of friction presents serious cognitive risks in learning environments:
- **Automation Bias**: Uncritical trust in machine-generated outputs.
- **Cognitive Offloading**: Outsourcing memory, critical synthesis, and decision-making.
- **Convergence Bias**: The homogenization of human ideas toward the statistical median of training data.
- **Epistemic Dependency**: Inability to formulate, hold, or verify claims without algorithmic validation.

Pyragogy starts from the principle that desirable difficulties are essential for cognitive growth. This repository compiles, structures, and audits educational protocols that design intentional, pedagogically useful friction back into human-AI interactions.

## Core Idea

Learning is not about speed. It is about assimilation. When we remove all difficulty from the interface, we remove the thinking. Pyragogy designs systems that force the user to struggle with ideas, slow down before answers, and build their own epistemic agency through active resistance.

## The Three Axes

The syllabus organizes human-AI development along three fundamental axes:

- **Ontogeny**: The developmental progression of the learner, mapping how cognitive schemas are built from childhood to mature agency.
- **Praxis / Cognitive Friction**: The deliberate injection of resistance into interaction loops, forcing slow thinking, sparring, and dialectic tension.
- **Autonomy**: The transition from collaborative co-creation to independent judgment, where the learner uses AI without outsourcing their cognitive sovereignty.

## Node Anatomy

Each operational node follows:

1. **Definition**: The operational purpose of the node.
2. **Use Case**: When and under what conditions the node is activated.
3. **Human Role**: The active cognitive effort required from the human learner.
4. **AI Role**: The specific behavioral constraints and actions of the AI system.
5. **Friction Mechanism**: The mechanism that interrupts automatic, low-effort execution.
6. **Risk if Skipped**: The developmental or cognitive regression that occurs if this node is bypassed.
7. **Observable Markers**: Traceable behaviors or artifacts that prove active learning is occurring.

## Repository Structure

The files in the repository are organized logically into directories:

```text
content/
  00_meta/              Metadata, configuration, and index files
  01_foundations/       Core theoretical axes and relation grammar rules
  02_ontogeny/          Developmental pathways from childhood to early learning
  03_praxis/            Dialectic sparring, collaborative prototyping, and loops
  04_autonomy/          Independent critical thinking and professional co-agency
  05_systemic_risks/    Documented cognitive failure modes of passive AI use
  06_protocols/         Specific interventions and structural friction mechanics
  07_cases/             Real-world trials, case studies, and pedagogical logs
  08_references/        References, evidence maps, and credentials index
scripts/
  audit_nodes.cjs       Linter script to enforce frontmatter schemas and structure
quartz/
  Quartz website generator files and theme customizations
```

## Graph and Relation Grammar

The syllabus is modeled as a directed graph where nodes represent educational concepts and edges represent defined epistemic relations:
- `REQUIRES`: Baseline node needed to support another capability.
- `STRENGTHENS`: Practice reinforces a cognitive capability.
- `CONTRADICTS`: Oppotional concepts or direct conflicts.
- `MITIGATES`: Protocol that counteracts a specific systemic risk.
- `ACTIVATES`: Triggers a subsequent transition or workflow stage.
- `FAILS_INTO`: Regression path when a node is missing.

## Evidence Discipline

To maintain academic and scientific integrity, Pyragogy separates speculative design hypotheses from established cognitive science. Every claim or node is classified by its evidence status:
- `supported claim`: Backed by peer-reviewed literature.
- `theoretical synthesis`: Formulated from established pedagogical frameworks.
- `design hypothesis`: A proposed interface mechanism awaiting validation.
- `speculative extension`: Exploratory concepts.
- `needs empirical validation`: Explicitly marked for classroom or lab testing.

Empirical assertions must not be introduced as established facts without proper references.

## Working With AI Agents

The repository is open for inspection, critique, and maintenance by both humans and AI agents. Agents are welcome to parse the graph, check schemas, identify weak logical links, or propose extensions. However, all agent-proposed modifications must remain transparent, legible, and reviewable by human maintainers before merge. We do not accept uninspected automated commits.

## Local Development

```bash
npm install
npm run build
npm run serve
```

Run these commands to set up the development environment, build the static assets, and start the local preview server.

## Quality Checks

```bash
node scripts/audit_nodes.cjs
npm run build
npm run check || true
```

Before committing, run these checks to ensure that all semantic nodes comply with frontmatter schemas, tags, required sections, and contain no banned placeholder text.

## Deployment

Production deployment is managed automatically via Cloudflare Pages Git Integration. Every push to the `main` branch triggers an automated build that runs the node auditor, verifies dependencies, compiles the Quartz site, and deploys it to `syllabus.pyragogy.org`.

## Contributing

We welcome contributions that improve the clarity, evidence, and structure of the map:
- **Propose new nodes**: Ensure they follow the 7-section Node Anatomy protocol.
- **Improve existing definitions**: Clarify mechanisms, prune jargon, and make protocols more concrete.
- **Strengthen evidence claims**: Add citations to peer-reviewed literature or transition design hypotheses into supported claims using classroom data.

Submit your proposals via Pull Requests to the `main` branch.

## Status

Public working draft. Not finished. Designed to be tested.
