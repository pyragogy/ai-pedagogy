#!/bin/bash
# Build script for Cloudflare Pages / local builds
# Generates Quartz plugins, SEO/GEO assets, and the static site.
#
# Signed: Fabrizio Terzi

set -euo pipefail

echo "→ Installing Quartz plugins..."
npm run install-plugins

echo "→ Generating llms-full.txt..."
node scripts/generate-llms-full.mjs

echo "→ Building Quartz..."
npx quartz build "$@"

echo "→ Copying root static files (robots.txt, llms.txt, CNAME)..."
mkdir -p public
cp -r quartz/root/* public/ 2>/dev/null || true

echo "✅ Build complete — output in ./public"
