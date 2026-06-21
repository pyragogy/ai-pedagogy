# Pyragogy Syllabus

**Pyragogy Syllabus** is an operational framework and structured repository of practices, protocols, and cognitive patterns designed for human-AI learning. 

Rather than treating AI as a frictionless oracle or a shortcut machine, this project models AI as a peer-like cognitive partner that introduces structured resistance, reflection, and constructive friction to preserve human epistemic agency and judgment.

The live syllabus is hosted at: **[https://syllabus.pyragogy.org/](https://syllabus.pyragogy.org/)**

---

## 1. Why It Exists

Modern AI interfaces are optimized for convenience, speed, and minimal user effort. While efficient for simple tasks, this absolute lack of friction presents serious cognitive risks in learning environments:
- **Automation Bias**: Uncritical trust in machine-generated outputs.
- **Cognitive Offloading**: Outsourcing memory, critical synthesis, and decision-making.
- **Convergence Bias**: The homogenization of human ideas toward the statistical median of the training data.
- **Epistemic Dependency**: Inability to formulate, hold, or verify claims without algorithmic validation.

Pyragogy starts from the principle that **desirable difficulties are essential for cognitive growth**. This repository exists to compile, structure, and audit educational protocols that design intentional, pedagogically useful friction back into human-AI interactions.

---

## 2. The 7-Section Operational Node Protocol

To prevent the syllabus from turning into an unstructured wiki, every core semantic node must follow a strict 7-section protocol. This ensures that every entry represents an actionable educational design:

1. **Definition**: The operational purpose of the node.
2. **Use Case**: When and under what conditions the node is activated.
3. **Human Role**: The active cognitive effort required from the human learner.
4. **AI Role**: The specific behavioral constraints and actions of the AI system.
5. **Friction**: The mechanism that interrupts automatic, low-effort execution.
6. **Risk**: The developmental or cognitive regression that occurs if this node is bypassed.
7. **Observable Markers**: Traceable behaviors or artifacts that prove active learning is occurring.

---

## 3. How the Graph Works

The syllabus is modeled as a directed graph where nodes represent educational components and edges represent defined **epistemic relations**. Nodes connect to show how capabilities, risks, and protocols interact:
- `REQUIRES`: Denotes a baseline node needed to support another capacity.
- `STRENGTHENS`: Shows how a practice reinforces a cognitive capability.
- `CONTRADICTS`: Highlights oppositional concepts or direct conflicts.
- `MITIGATES`: Indicates a protocol that counteracts a specific systemic risk.
- `ACTIVATES`: Triggers a subsequent transition or workflow stage.
- `FAILS_INTO`: Captures the regression path when a node is missing.

---

## 4. Repository Structure

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

---

## 5. Evidence Discipline

To maintain academic and scientific integrity, Pyragogy separates speculative design hypothesis from established cognitive science. Every claim or node is classified by its evidence status:
- `supported claim`: Backed by peer-reviewed literature.
- `theoretical synthesis`: Formulated from established pedagogical frameworks.
- `design hypothesis`: A proposed interface mechanism awaiting validation.
- `speculative extension`: Exploratory concepts.
- `needs empirical validation`: Explicitly marked for classroom or lab testing.

Do not introduce unsupported empirical assertions as established facts.

---

## 6. How to Contribute

We welcome contributions from researchers, educators, developers, and learners. You can contribute by:
1. **Improving Nodes**: Refining existing nodes to make them more concrete or revising claims to match evidence.
2. **Adding Relations**: Mapping missing connections in the graph between protocols, risks, and capabilities.
3. **Proposing Case Studies**: Adding logs and examples under `content/07_cases/` showing real outcomes of these protocols.
4. **Fixing Code/Aesthetics**: Enhancing the local building tools or Quartz interface.

Before submitting a pull request, verify that new files follow the 7-section protocol and pass the local audit.

---

## 7. Local Development

### 1. Install Dependencies
Initialize node modules and tools:
```bash
npm ci
```

### 2. Run the Node Auditor
Verify that all semantic markdown files comply with frontmatter schemas, tags, required sections, and contain no banned placeholder text:
```bash
node scripts/audit_nodes.cjs
```

### 3. Build the Website
Generate the static HTML build directory (`public/`):
```bash
npm run build
```

### 4. Run Quality Checks
Verify typescript type safety and code formatting (via Prettier):
```bash
npm run check
```

---

## 8. Deployment

This project is deployed automatically via **Cloudflare Pages Git Integration**.
- **Production Branch**: `main`
- **Build Command**: `node scripts/audit_nodes.cjs && npm run build`
- **Build Output Directory**: `public`

Every push to the `main` branch on GitHub triggers Cloudflare to fetch dependencies, execute the node auditor, build the static site, and deploy it to `syllabus.pyragogy.org`.

---

## 9. Quality Checks Before Pushing

To ensure the deployment build does not fail, run the following sequence locally before pushing any changes to the remote repository:

```bash
node scripts/audit_nodes.cjs
npm run build
npm run check || true
git status --short
```
