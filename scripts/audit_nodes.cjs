#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const YAML = require('yaml');

const CONTENT_DIR = path.join(__dirname, '..', 'content');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      results.push(filePath);
    }
  });
  return results;
}

function audit() {
  console.log("Starting Epistemic Node Audit...");
  const files = walk(CONTENT_DIR);
  let errorCount = 0;
  let successCount = 0;

  files.forEach((file) => {
    const relativePath = path.relative(path.join(__dirname, '..'), file);

    // Skip index files, templates, meta-documentation, and draft blueprint
    if (
      file.endsWith('index.md') ||
      file.includes('_templates') ||
      file.includes('00_meta') ||
      file.endsWith('blueprint.md')
    ) {
      return;
    }

    if (!file.endsWith('.md')) {
      return;
    }

    const content = fs.readFileSync(file, 'utf-8');
    const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
    
    if (!match) {
      console.error(`\x1b[31m✗ ${relativePath} is missing frontmatter\x1b[0m`);
      errorCount++;
      return;
    }

    const yamlStr = match[1];
    let data;
    try {
      data = YAML.parse(yamlStr);
    } catch (e) {
      console.error(`\x1b[31m✗ ${relativePath} has invalid YAML frontmatter: ${e.message}\x1b[0m`);
      errorCount++;
      return;
    }

    const requiredFields = [
      'id',
      'title',
      'description',
      'type',
      'phase',
      'status',
      'praxis_index',
      'autonomy_index',
      'tags',
    ];

    const missingFields = requiredFields.filter((field) => data[field] === undefined);
    
    if (missingFields.length > 0) {
      console.error(`\x1b[31m✗ ${relativePath} is missing required fields: ${missingFields.join(', ')}\x1b[0m`);
      errorCount++;
      return;
    }

    // Validate type and tags
    if (!Array.isArray(data.tags)) {
      console.error(`\x1b[31m✗ ${relativePath} tags must be an array\x1b[0m`);
      errorCount++;
      return;
    }

    if (!data.tags.includes('pyragogy')) {
      console.error(`\x1b[31m✗ ${relativePath} is missing the base tag "pyragogy"\x1b[0m`);
      errorCount++;
      return;
    }

    // Validate relations array
    if (data.relations !== undefined && !Array.isArray(data.relations)) {
      console.error(`\x1b[31m✗ ${relativePath} relations must be an array of objects\x1b[0m`);
      errorCount++;
      return;
    }

    const relations = data.relations || [];
    
    // Check typed relations format
    for (const rel of relations) {
      if (!rel.target || !rel.type) {
        console.error(`\x1b[31m✗ ${relativePath} has malformed relation: target and type required\x1b[0m`);
        errorCount++;
        return;
      }
    }

    // Verify Risk/Mitigation anchoring
    const hasEpistemicRelation = relations.length > 0;
    if (data.type !== 'reference' && data.type !== 'foundation') {
      if (!hasEpistemicRelation) {
        console.warn(`\x1b[33m⚠ ${relativePath} (type: ${data.type}) has no relations defined (missing links to mitigations/risks/foundations)\x1b[0m`);
      }
    }

    // Check for the 7 required sections
    const markdownBody = content.substring(match[0].length);
    const requiredSections = [
      "## 1. Definizione",
      "## 2. Uso",
      "## 3. Ruolo Umano",
      "## 4. Ruolo AI",
      "## 5. Frizione",
      "## 6. Rischio",
      "## 7. Marker Osservabili"
    ];

    const missingSections = requiredSections.filter(section => !markdownBody.includes(section));
    
    if (missingSections.length > 0) {
      console.error(`\x1b[31m✗ ${relativePath} is missing required sections: ${missingSections.join(', ')}\x1b[0m`);
      errorCount++;
      return;
    }

    // Ensure 'Core Analysis' is removed
    if (markdownBody.includes('## Core Analysis')) {
      console.error(`\x1b[31m✗ ${relativePath} still contains legacy '## Core Analysis' section\x1b[0m`);
      errorCount++;
      return;
    }

    successCount++;
  });

  console.log("\n------------------------------------------------");
  if (errorCount > 0) {
    console.error(`\x1b[31mAudit Failed! Found ${errorCount} error(s) across parsed files.\x1b[0m`);
    process.exit(1);
  } else {
    console.log(`\x1b[32mAudit Succeeded! Verified ${successCount} semantic nodes successfully.\x1b[0m`);
    process.exit(0);
  }
}

audit();
