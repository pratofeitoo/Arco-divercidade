#!/bin/bash

# GitHub Pages Quick Setup Script
# This script helps configure the project for GitHub Pages deployment

set -e

echo "🚀 GitHub Pages Deployment Setup"
echo "=================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git not initialized. Running: git init"
    git init
else
    echo "✅ Git repository found"
fi

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo ""
    echo "⚠️  No remote configured"
    read -p "Enter your GitHub repository URL (e.g., https://github.com/username/repo): " REPO_URL
    git remote add origin "$REPO_URL"
    echo "✅ Remote added: $REPO_URL"
else
    REPO_URL=$(git remote get-url origin)
    echo "✅ Remote found: $REPO_URL"
fi

# Check branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")
if [ "$CURRENT_BRANCH" != "main" ] && [ -n "$CURRENT_BRANCH" ]; then
    echo ""
    read -p "Current branch is '$CURRENT_BRANCH'. Rename to 'main'? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git branch -M main
        echo "✅ Branch renamed to: main"
    fi
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo ""
    echo "📝 Uncommitted changes detected:"
    git status --short | head -10
    echo ""
    read -p "Commit changes now? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter commit message: " COMMIT_MSG
        git add .
        git commit -m "$COMMIT_MSG"
        echo "✅ Changes committed"
    fi
fi

# Check if any commits exist
if ! git rev-parse HEAD > /dev/null 2>&1; then
    echo ""
    echo "⚠️  No commits found. Creating initial commit..."
    git add .
    git commit -m "Initial commit: Arco divercidade proposal template"
    echo "✅ Initial commit created"
fi

# Push to remote
echo ""
echo "📤 Pushing to GitHub..."
if git push -u origin main; then
    echo "✅ Successfully pushed to GitHub"
else
    echo "⚠️  Push failed. Make sure your repository is set up correctly."
    exit 1
fi

echo ""
echo "=================================="
echo "✅ Setup Complete!"
echo "=================================="
echo ""
echo "Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Navigate to Settings → Pages"
echo "3. Under 'Build and deployment', select 'GitHub Actions'"
echo "4. Your site will be available at: https://$(echo $REPO_URL | sed 's/.*\///g' | sed 's/\.git//g')"
echo ""
echo "📖 Full guide: See GITHUB_PAGES_DEPLOYMENT.md"
echo ""
