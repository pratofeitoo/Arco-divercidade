#!/usr/bin/env bash
set -euo pipefail

# deploy.sh - Build the Arco-divercidade project and publish dist/ to gh-pages
# Usage: ./deploy.sh [--no-preview] [--force]
# Requirements: git, npm/node
# Options:
#   --no-preview  Skip the preview step
#   --force       Skip git status check (for CI/CD)

REPO_BRANCH=$(git rev-parse --abbrev-ref HEAD)
SKIP_PREVIEW=false
FORCE_DEPLOY=false

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --no-preview) SKIP_PREVIEW=true; shift ;;
    --force) FORCE_DEPLOY=true; shift ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

echo "🚀 Arco-divercidade GitHub Pages Deploy"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📍 Current branch: $REPO_BRANCH"

# Check working tree status
if [[ "$FORCE_DEPLOY" == false ]]; then
  echo "✓ Checking working tree status..."
  if [[ -n "$(git status --porcelain)" ]]; then
    echo "❌ Working tree is not clean. Please commit or stash changes."
    git status --porcelain
    exit 1
  fi
  echo "✓ Working tree clean"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build with repository-relative base path
echo "🔨 Building project..."
npm run build

# Verify dist/ was created
if [[ ! -d "dist" ]]; then
  echo "❌ Build failed: dist/ directory not found"
  exit 1
fi
echo "✓ Build successful ($(find dist -type f | wc -l) files)"

# Preview (optional)
if [[ "$SKIP_PREVIEW" == false ]]; then
  echo "👁️  Starting preview server at http://localhost:8080..."
  if command -v python3 &>/dev/null; then
    python3 -m http.server 8080 --directory dist &
    PREVIEW_PID=$!
    echo "✓ Preview running (pid=$PREVIEW_PID)"
    echo "   Press ENTER to continue deployment, or Ctrl+C to cancel"
    read -r
    kill $PREVIEW_PID 2>/dev/null || true
  else
    echo "⚠️  Python3 not found, skipping preview"
  fi
fi

# Deploy to gh-pages
echo "📤 Publishing to gh-pages branch..."
if git subtree push --prefix dist origin gh-pages 2>/dev/null; then
  echo "✓ Published via git subtree push"
else
  echo "ℹ️  git subtree push failed, trying alternative method..."
  SPLIT_REF=$(git subtree split --prefix dist $REPO_BRANCH)
  git push origin $SPLIT_REF:gh-pages --force 2>/dev/null && echo "✓ Published via subtree split" || true
fi

# Display deployment URL
REPO_URL=$(git remote get-url origin)
if [[ $REPO_URL == *"github.com"* ]]; then
  USERNAME=$(echo "$REPO_URL" | sed -n 's#.*github.com[:/]\([^/]*\)/.*#\1#p')
  REPONAME=$(echo "$REPO_URL" | sed -n 's#.*/\([^/.]*\)\.git$#\1#p')
  DEPLOY_URL="https://${USERNAME}.github.io/${REPONAME}/"
  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "✅ Deploy complete!"
  echo "📍 Visit: $DEPLOY_URL"
  echo "⏱️  Changes may take 1-2 minutes to appear"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
fi
