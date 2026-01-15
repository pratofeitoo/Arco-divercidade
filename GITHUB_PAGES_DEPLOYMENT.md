# GitHub Pages Deployment Guide

## Overview

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by a GitHub Actions workflow.

## Current Configuration

✅ **Status**: Ready for deployment
- **Repository Base URL**: `/Arco-divercidade/` (configured in `vite.config.ts`)
- **Build Output**: `dist/` directory
- **Deployment Trigger**: Push to `main` branch or manual dispatch
- **Node Version**: 20 (specified in workflow)

## Prerequisites

1. **GitHub Repository**: Your project must be pushed to GitHub
2. **Repository Settings**: GitHub Pages must be configured
3. **Branch**: Your main branch must be `main`

## Step-by-Step Setup

### 1. Create/Configure GitHub Repository

If you haven't already:

```bash
cd /path/to/TEMPLATE_TO_FILL

# Initialize git (if not done)
git init

# Add remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/Arco-divercidade.git

# Set main branch
git branch -M main

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Arco divercidade proposal template"

# Push to GitHub
git push -u origin main
```

### 2. Configure GitHub Pages in Repository Settings

1. Go to **GitHub Repository** → **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - This allows the workflow to deploy automatically

### 3. Automatic Deployment

Once configured, deployment will happen automatically:

- **Trigger**: Push to `main` branch
- **Workflow File**: `.github/workflows/deploy.yml`
- **Deployment Environment**: GitHub Pages
- **URL**: `https://YOUR_USERNAME.github.io/Arco-divercidade/`

### 4. Manual Deployment (Optional)

To manually trigger deployment:

1. Go to **GitHub Repository** → **Actions**
2. Select **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** → Select `main` branch → **"Run workflow"**

## Workflow Details

The deployment workflow performs the following steps:

1. **Checkout** code from the repository
2. **Setup Node.js** version 20
3. **Install dependencies** using `npm ci`
4. **Build** the project with `npm run build`
5. **Upload** the `dist/` directory as a GitHub Pages artifact
6. **Deploy** to GitHub Pages

### Workflow Permissions

The workflow has the following permissions (required for deployment):

- `contents: read` - Read repository contents
- `pages: write` - Write to GitHub Pages
- `id-token: write` - Generate deployment token

## Deployment Status & Logs

### View Deployment Status

1. Go to **GitHub Repository** → **Actions**
2. Check the status of the latest workflow run
3. Look for the "Deploy to GitHub Pages" workflow

### Check Deployment Logs

1. Click on a workflow run
2. Expand the **"deploy"** job to see deployment details
3. The output will show the GitHub Pages URL

## Environment Variables & Configuration

### Current Configuration

```typescript
// vite.config.ts
base: "/Arco-divercidade/"  // Repository name
```

This ensures all assets are loaded from the correct base path.

### Modify Base Path

If you rename the repository, update `vite.config.ts`:

```typescript
export default defineConfig(({ mode }) => ({
  base: "/NEW_REPOSITORY_NAME/",
  // ... rest of config
}));
```

## Troubleshooting

### Issue: Workflow fails with "No commits yet"

**Solution**: Make sure your repository is properly initialized with commits pushed to GitHub.

```bash
git add .
git commit -m "Deploy configuration"
git push origin main
```

### Issue: Assets not loading (404 errors)

**Solution**: Verify the `base` path in `vite.config.ts` matches your repository name:

```bash
# Repository name should match:
# https://github.com/USERNAME/REPO_NAME

# Update vite.config.ts:
base: "/REPO_NAME/"
```

### Issue: Pages not updating after push

**Solution**: 
1. Check workflow execution in **Actions** tab
2. Verify no errors in workflow logs
3. Wait for workflow to complete (usually 1-2 minutes)
4. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
5. Clear browser cache if needed

### Issue: Custom domain setup

To use a custom domain:

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain
3. Add DNS records as instructed by GitHub
4. GitHub will create a `CNAME` file automatically

## Building Locally

To preview the production build locally:

```bash
npm run build
npm run preview
```

The preview will serve from `http://localhost:5173/Arco-divercidade/`

## Important Notes

⚠️ **GitHub Pages Limitations**:
- Only public repositories support GitHub Pages for free (unless using GitHub Pro)
- Deployment happens on push to `main` branch
- Initial deployment may take 1-2 minutes
- Each deployment creates a new release of your static site

## Files to Know

| File | Purpose |
|------|---------|
| `.github/workflows/deploy.yml` | GitHub Actions deployment workflow |
| `vite.config.ts` | Base path configuration for GitHub Pages |
| `package.json` | Build scripts and dependencies |
| `dist/` | Generated production build (not committed to git) |

## Next Steps

1. ✅ Push code to GitHub repository
2. ✅ Configure GitHub Pages in repository settings
3. ✅ Monitor first deployment in Actions tab
4. ✅ Access your live site at `https://YOUR_USERNAME.github.io/Arco-divercidade/`

## Support & Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

**Last Updated**: January 15, 2026
