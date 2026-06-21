#!/usr/bin/env node
const fs = require("fs")
const path = require("path")
const YAML = require("yaml")

const REPO_ROOT = path.join(__dirname, "..")
const ROOTS = [
  "content/01_foundations",
  "content/02_ontogeny",
  "content/03_praxis",
  "content/04_autonomy",
  "content/05_systemic_risks",
  "content/06_protocols",
  "content/08_references",
]

function walk(dir) {
  let results = []
  if (!fs.existsSync(dir)) return results
  const list = fs.readdirSync(dir)
  list.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath))
    } else if (file.endsWith(".md")) {
      results.push(filePath)
    }
  })
  return results
}

function audit() {
  console.log("Starting Epistemic Node Audit...")

  const files = []
  ROOTS.forEach((relRoot) => {
    const fullPath = path.join(REPO_ROOT, relRoot)
    files.push(...walk(fullPath))
  })

  let errorCount = 0
  let successCount = 0
  const titleMap = new Map()

  files.forEach((file) => {
    const relativePath = path.relative(REPO_ROOT, file)
    const content = fs.readFileSync(file, "utf-8")

    // 1. Detect consecutive or malformed frontmatter delimiters
    const delimiterRegex = /^---\s*$/gm
    let match
    const matches = []
    while ((match = delimiterRegex.exec(content)) !== null) {
      matches.push(match.index)
    }

    if (matches.length < 2) {
      console.error(`\x1b[31m✗ ${relativePath} has unclosed or missing frontmatter\x1b[0m`)
      errorCount++
      return
    }

    if (content.trim().indexOf("---") !== 0) {
      console.error(`\x1b[31m✗ ${relativePath} does not start with frontmatter delimiter\x1b[0m`)
      errorCount++
      return
    }

    if (matches.length > 2) {
      for (let idx = 1; idx < matches.length - 1; idx++) {
        const currentEnd = matches[idx] + 3
        const nextStart = matches[idx + 1]
        const between = content.substring(currentEnd, nextStart).trim()
        if (between === "") {
          console.error(
            `\x1b[31m✗ ${relativePath} has duplicate/consecutive frontmatter delimiters\x1b[0m`,
          )
          errorCount++
          return
        }
      }
    }

    // Parse YAML frontmatter
    const frontmatterText = content.substring(matches[0] + 3, matches[1])
    let data
    try {
      data = YAML.parse(frontmatterText)
    } catch (e) {
      console.error(`\x1b[31m✗ ${relativePath} has invalid YAML frontmatter: ${e.message}\x1b[0m`)
      errorCount++
      return
    }

    if (!data) {
      console.error(`\x1b[31m✗ ${relativePath} frontmatter is empty or invalid\x1b[0m`)
      errorCount++
      return
    }

    // 2. Title and Description checks
    if (!data.title) {
      console.error(`\x1b[31m✗ ${relativePath} is missing a title\x1b[0m`)
      errorCount++
      return
    }

    // Check for duplicate titles across all files (index.md files are skipped as they represent folders/sections)
    const filename = path.basename(file, ".md")
    if (filename !== "index") {
      if (titleMap.has(data.title)) {
        const otherPath = titleMap.get(data.title)
        console.error(
          `\x1b[31m✗ ${relativePath} shares duplicate title "${data.title}" with ${otherPath}\x1b[0m`,
        )
        errorCount++
        return
      }
      titleMap.set(data.title, relativePath)
    }

    if (data.description) {
      const desc = data.description
      const badRelationPatterns = [
        "**THREATENS**",
        "**REQUIRES**",
        "**CONTRADICTS**",
        "THREATENS",
        "REQUIRES",
        "CONTRADICTS",
        "STRENGTHENS",
        "REINFORCES",
      ]
      for (const relPattern of badRelationPatterns) {
        if (desc.includes(relPattern)) {
          console.error(
            `\x1b[31m✗ ${relativePath} description contains relation fragment: "${relPattern}"\x1b[0m`,
          )
          errorCount++
          return
        }
      }
      if (desc.includes("Core Analysis")) {
        console.error(
          `\x1b[31m✗ ${relativePath} description contains body text "Core Analysis"\x1b[0m`,
        )
        errorCount++
        return
      }
    }

    // 3. Scan banned strings across all files
    const bannedPatterns = [
      "Core Analysis",
      "Descriptive Title of the Node",
      "description- **",
      "description*None",
      "permanent atrophy",
      "temporarily disabling the primary user interface",
    ]
    for (const pattern of bannedPatterns) {
      if (content.includes(pattern)) {
        console.error(`\x1b[31m✗ ${relativePath} contains banned pattern: "${pattern}"\x1b[0m`)
        errorCount++
        return
      }
    }

    // Special check for "adictory" typo (must not match valid "contradictory" substring)
    if (/(?<!contr)adictory/i.test(content)) {
      console.error(
        `\x1b[31m✗ ${relativePath} contains banned typo "adictory" (not as part of "contradictory")\x1b[0m`,
      )
      errorCount++
      return
    }

    // Also scan for regex patterns for polluted description fields
    if (/description:\s*["']?- \*\*/.test(content) || /description- \*\*/.test(content)) {
      console.error(
        `\x1b[31m✗ ${relativePath} description starts with bullet/bold formatting\x1b[0m`,
      )
      errorCount++
      return
    }
    if (/description:\s*["']?\*None/.test(content) || /description\*None/.test(content)) {
      console.error(
        `\x1b[31m✗ ${relativePath} description contains default template '*None' value\x1b[0m`,
      )
      errorCount++
      return
    }

    // 4. Semantic node specific validations
    const isSemanticNode = !file.endsWith("index.md") && !file.endsWith("blueprint.md")
    if (isSemanticNode) {
      // Validate filename and title mismatch for critical files like independent_thinking
      const lowercaseTitle = data.title.toLowerCase()
      if (filename === "independent_thinking") {
        if (!lowercaseTitle.includes("independent") && !lowercaseTitle.includes("thinking")) {
          console.error(
            `\x1b[31m✗ ${relativePath} title "${data.title}" mismatches filename "${filename}.md"\x1b[0m`,
          )
          errorCount++
          return
        }
      }

      const requiredFields = [
        "id",
        "title",
        "description",
        "type",
        "phase",
        "status",
        "praxis_index",
        "autonomy_index",
        "tags",
      ]

      const missingFields = requiredFields.filter((field) => data[field] === undefined)
      if (missingFields.length > 0) {
        console.error(
          `\x1b[31m✗ ${relativePath} is missing required fields: ${missingFields.join(", ")}\x1b[0m`,
        )
        errorCount++
        return
      }

      // Validate type and tags
      if (!Array.isArray(data.tags)) {
        console.error(`\x1b[31m✗ ${relativePath} tags must be an array\x1b[0m`)
        errorCount++
        return
      }

      if (!data.tags.includes("pyragogy")) {
        console.error(`\x1b[31m✗ ${relativePath} is missing the base tag "pyragogy"\x1b[0m`)
        errorCount++
        return
      }

      // Validate relations array
      if (data.relations !== undefined && !Array.isArray(data.relations)) {
        console.error(`\x1b[31m✗ ${relativePath} relations must be an array of objects\x1b[0m`)
        errorCount++
        return
      }

      const relations = data.relations || []
      for (const rel of relations) {
        if (!rel.target || !rel.type) {
          console.error(
            `\x1b[31m✗ ${relativePath} has malformed relation: target and type required\x1b[0m`,
          )
          errorCount++
          return
        }
      }

      // Verify Risk/Mitigation anchoring
      if (data.type !== "reference" && data.type !== "foundation") {
        const hasEpistemicRelation = relations.length > 0
        if (!hasEpistemicRelation) {
          console.warn(
            `\x1b[33m⚠ ${relativePath} (type: ${data.type}) has no relations defined (missing links to mitigations/risks/foundations)\x1b[0m`,
          )
        }
      }

      // Check for the 7 required sections
      const markdownBody = content.substring(matches[1] + 3)
      const requiredSections = [
        "## 1. Definition",
        "## 2. Use Case",
        "## 3. Human Role",
        "## 4. AI Role",
        "## 5. Friction",
        "## 6. Risk",
        "## 7. Observable Markers",
      ]

      const missingSections = requiredSections.filter((section) => !markdownBody.includes(section))
      if (missingSections.length > 0) {
        console.error(
          `\x1b[31m✗ ${relativePath} is missing required sections: ${missingSections.join(", ")}\x1b[0m`,
        )
        errorCount++
        return
      }
    }

    successCount++
  })

  console.log("\n------------------------------------------------")
  if (errorCount > 0) {
    console.error(`\x1b[31mAudit Failed! Found ${errorCount} error(s) across parsed files.\x1b[0m`)
    process.exit(1)
  } else {
    console.log(`\x1b[32mAudit Succeeded! Verified ${successCount} files successfully.\x1b[0m`)
    process.exit(0)
  }
}

audit()
