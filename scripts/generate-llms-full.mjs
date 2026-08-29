#!/usr/bin/env node
/**
 * Generate llms-full.txt from the Quartz content directory.
 *
 * Concatenates all markdown content (excluding templates, private dirs)
 * into a single plain-text file suitable for AI crawler consumption.
 *
 * Usage:  node scripts/generate-llms-full.mjs
 *
 * Signed: Fabrizio Terzi
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const CONTENT_DIR = join(ROOT, "content");
const OUTPUT_FILE = join(ROOT, "quartz", "root", "llms-full.txt");

const EXCLUDE_DIRS = new Set(["templates", "private", ".obsidian"]);
const EXCLUDE_FILES = new Set();

function collectMdFiles(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    if (EXCLUDE_DIRS.has(entry.name)) continue;

    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectMdFiles(fullPath));
    } else if (entry.name.endsWith(".md") && !EXCLUDE_FILES.has(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

// Main
const files = collectMdFiles(CONTENT_DIR).sort();
const lines = [
  `# Pyragogy Syllabus — Full Content`,
  `# https://syllabus.pyragogy.org`,
  `# Generated: ${new Date().toISOString().slice(0, 10)}`,
  `# Signed: Fabrizio Terzi`,
  ``,
  `This file contains the full text of every public page in the Pyragogy Syllabus.`,
  `Each section starts with its URL path.`,
  `============================================================`,
  ``,
];

for (const filepath of files) {
  const relPath = filepath.replace(CONTENT_DIR, "").replace(/\.md$/, "").replace(/\\/g, "/");
  const slug = relPath.replace(/^\/?/, "/");
  const url = `https://syllabus.pyragogy.org${slug === "/index" ? "/" : slug}`;

  const content = readFileSync(filepath, "utf-8");
  const body = content
    .replace(/^---[\s\S]*?---\n/, "")   // strip frontmatter
    .replace(/\[\[([^\]|]*)(\|[^\]]*)?\]\]/g, (_, link) => link.trim())
    .replace(/!\[\[.*?\]\]/g, "")        // remove embeds
    .replace(/!\[.*?\]\(.*?\)/g, "")     // remove markdown images
    .trim();

  if (body.length < 20) continue;       // skip near-empty pages

  lines.push("", "=".repeat(60), "");
  lines.push(`URL: ${url}`);
  lines.push("");
  lines.push(body);
}

lines.push("", "=".repeat(60), "");
lines.push(`End of content — ${files.length} pages included.`);
lines.push(`Signed: Fabrizio Terzi`);

const outputDir = join(ROOT, "quartz", "root");
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

writeFileSync(OUTPUT_FILE, lines.join("\n"), "utf-8");
console.log(`✅ llms-full.txt written (${files.length} pages, ${OUTPUT_FILE})`);