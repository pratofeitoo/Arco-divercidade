# 📋 GitHub Pages Deployment Checklist

## Pre-Deployment Checklist

### Repository Setup
- [ ] Project has been initialized with git
- [ ] Remote repository URL is set
- [ ] Local branch is named `main`
- [ ] All code is committed
- [ ] No sensitive data in repository

### Configuration Verification
- [ ] `vite.config.ts` has `base: "/Arco-divercidade/"`
- [ ] `package.json` has build script: `npm run build`
- [ ] `.github/workflows/deploy.yml` exists
- [ ] Workflow has correct permissions (pages: write)
- [ ] Node.js version in workflow is 20

### Build Testing
- [ ] Local build succeeds: `npm run build`
- [ ] `dist/` folder is created
- [ ] No build warnings or errors
- [ ] All assets are present in `dist/`

### GitHub Setup
- [ ] Repository is public (required for free Pages)
- [ ] GitHub Actions is enabled
- [ ] No branch protection rules blocking actions
- [ ] Repository access is properly configured

---

## Deployment Steps

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push -u origin main
```
- [ ] Code successfully pushed to GitHub
- [ ] Repository shows latest commit

### Step 2: Enable GitHub Pages
1. Go to Repository → Settings → Pages
2. Select "GitHub Actions" as source
3. Save settings
- [ ] GitHub Pages source is set to "GitHub Actions"
- [ ] No custom domain conflicts

### Step 3: Monitor Workflow
1. Go to Repository → Actions
2. Find "Deploy to GitHub Pages" workflow
3. Monitor the workflow run
- [ ] Workflow started automatically
- [ ] Build job completed successfully
- [ ] Deploy job completed successfully
- [ ] No errors in job logs

---

## Post-Deployment Checklist

### Verify Deployment
- [ ] Site is live at deployment URL
- [ ] All pages load without 404 errors
- [ ] Navigation works correctly
- [ ] Images and assets load properly
- [ ] Styling is applied correctly
- [ ] Forms/interactive elements work

### Browser Testing
- [ ] Works in Chrome/Chromium
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Mobile responsiveness is working
- [ ] No console errors in browser dev tools

### Performance Check
- [ ] Page loads within 2-3 seconds
- [ ] No broken links in console
- [ ] All assets have correct MIME types
- [ ] Gzip compression is working

### SEO & Metadata
- [ ] Page title is correct
- [ ] Meta description is set
- [ ] Favicon is displaying
- [ ] Open Graph tags are correct (if applicable)

---

## Troubleshooting Checklist

### Build Failures
- [ ] Check build logs in Actions tab
- [ ] Verify Node.js version compatibility
- [ ] Check for missing dependencies
- [ ] Ensure no syntax errors in source code
- [ ] Verify `base` path in vite.config.ts

### Asset Loading Issues
- [ ] Inspect network tab (F12 → Network)
- [ ] Check Console tab for 404 errors
- [ ] Verify `base` path matches repository name
- [ ] Clear browser cache and hard refresh
- [ ] Check CSS is loading from correct path

### Deployment Not Triggering
- [ ] Verify workflow has `main` branch trigger
- [ ] Check GitHub Actions is enabled
- [ ] Verify workflow file syntax (YAML)
- [ ] Ensure commit is to `main` branch
- [ ] Check for branch protection rules

### Site Not Updating
- [ ] Hard refresh browser (Ctrl+Shift+R)
- [ ] Clear browser cache completely
- [ ] Wait for workflow to complete (1-2 min)
- [ ] Check workflow completed successfully
- [ ] Verify new deployment in Pages settings

---

## Maintenance Checklist

### Regular Updates
- [ ] Keep Node.js dependencies up to date
- [ ] Review workflow for deprecated actions
- [ ] Monitor GitHub Pages service notifications
- [ ] Check for security alerts in repository
- [ ] Review deployment logs for errors

### Content Updates
- [ ] Test changes locally first
- [ ] Build locally before pushing
- [ ] Verify no console errors after build
- [ ] Push to main branch
- [ ] Monitor deployment workflow

### Monitoring
- [ ] Check Actions tab monthly
- [ ] Review site analytics (if enabled)
- [ ] Monitor for 404 errors in pages
- [ ] Check mobile responsiveness
- [ ] Test critical user flows

---

## Quick Reference

### Important URLs
```
GitHub Repository:
  https://github.com/YOUR_USERNAME/Arco-divercidade

GitHub Pages Settings:
  https://github.com/YOUR_USERNAME/Arco-divercidade/settings/pages

GitHub Actions:
  https://github.com/YOUR_USERNAME/Arco-divercidade/actions

Live Site:
  https://YOUR_USERNAME.github.io/Arco-divercidade/
```

### Common Commands
```bash
# Local development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Commit and push
git add .
git commit -m "message"
git push origin main
```

### Key Files
- `.github/workflows/deploy.yml` - Deployment configuration
- `vite.config.ts` - Build configuration  
- `package.json` - Dependencies and scripts
- `GITHUB_PAGES_DEPLOYMENT.md` - Full documentation

---

## Support Resources

- 📖 **GitHub Pages Docs**: https://docs.github.com/pages
- 📖 **GitHub Actions Docs**: https://docs.github.com/actions
- 📖 **Vite Docs**: https://vitejs.dev/
- 📖 **React Docs**: https://react.dev/

---

**Last Updated**: January 15, 2026  
**Status**: ✅ Ready for Deployment
