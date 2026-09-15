#!/bin/bash
# Build script for Cloudflare Pages / local builds
# Generates Quartz plugins, SEO/GEO assets, and the static site.
#
# Signed: Fabrizio Terzi

set -euo pipefail

echo "→ Installing Quartz plugins..."
npm run install-plugins

# Dependabot moved @quartz-community/utils to a GitHub source revision that
# advertises dist/index.js but does not ship the compiled dist/ directory.
# Use the published, reproducible npm artifact that contains the build output.
echo "→ Ensuring a buildable Quartz utility package..."
npm install --no-save --package-lock=false @quartz-community/utils@0.1.0

echo "→ Generating llms-full.txt..."
node scripts/generate-llms-full.mjs

echo "→ Building Quartz..."
npx quartz build "$@"

echo "→ Copying root static files (robots.txt, llms.txt, CNAME)..."
mkdir -p public
cp -r quartz/root/* public/ 2>/dev/null || true

echo "✅ Build complete — output in ./public"
