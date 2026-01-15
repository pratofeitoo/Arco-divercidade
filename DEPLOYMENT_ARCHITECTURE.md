# Deployment Architecture

## Project Structure

```
Arco-divercidade/
├── src/                    # React source code
├── public/                 # Static assets
├── dist/                   # Production build (generated)
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── vite.config.ts          # Vite configuration with base path
├── package.json            # Project dependencies & build scripts
└── index.html              # Entry point
```

## Build & Deployment Flow

### Local Development
```
npm install → npm run dev
           ↓
      http://localhost:5173/Arco-divercidade/
```

### Production Build
```
npm run build
    ↓
[Vite processes code]
    ↓
dist/ folder created:
  - index.html (1.16 KB)
  - index-[hash].js (349.55 KB)
  - index-[hash].css (66.30 KB)
  - hero-inclusive-leadership-[hash].jpg (192.31 KB)
```

### GitHub Pages Deployment

```
┌─────────────────────────────────────────────────────────┐
│              Push to main branch                        │
└──────────────────────┬──────────────────────────────────┘
                       │
        ┌──────────────▼──────────────┐
        │  GitHub Actions Triggered   │
        │  (deploy.yml workflow)      │
        └──────────────┬──────────────┘
                       │
        ┌──────────────▼──────────────┐
        │  1. Checkout code           │
        │  2. Setup Node.js v20       │
        │  3. npm install             │
        │  4. npm run build           │
        │  5. Upload dist/ artifact   │
        └──────────────┬──────────────┘
                       │
        ┌──────────────▼──────────────┐
        │  Deploy Job                 │
        │  Actions Deploy Pages v4    │
        └──────────────┬──────────────┘
                       │
        ┌──────────────▼──────────────┐
        │  GitHub Pages Server        │
        │  (github.io)                │
        └──────────────┬──────────────┘
                       │
        ┌──────────────▼──────────────┐
        │ https://USERNAME.github.io  │
        │ /Arco-divercidade/          │
        └─────────────────────────────┘
```

## Configuration Details

### Vite Configuration (`vite.config.ts`)

```typescript
export default defineConfig(({ mode }) => ({
  base: "/Arco-divercidade/",  // Matches repository name
  server: {
    host: "localhost",
    port: 5173,
    hmr: { overlay: false },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

**Key Setting**: `base: "/Arco-divercidade/"`
- Required for GitHub Pages sub-path deployment
- Ensures all assets load from correct path
- Must match repository name

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]      # Triggered on main branch
  workflow_dispatch:      # Manual trigger available

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Environment Details

### Build Environment
- **OS**: Ubuntu Latest (GitHub Actions hosted runner)
- **Node.js**: v20
- **Package Manager**: npm
- **Runtime**: ~3-5 minutes per deployment

### Deployment Target
- **Platform**: GitHub Pages
- **Protocol**: HTTPS only
- **Storage**: Unlimited for public repositories
- **Bandwidth**: Unlimited for public repositories

## Asset Optimization

### Current Build Output

| Asset | Size | Gzip | Type |
|-------|------|------|------|
| index.html | 1.16 KB | 0.50 KB | HTML |
| index-[hash].js | 349.55 KB | 108.78 KB | JavaScript |
| index-[hash].css | 66.30 KB | 11.56 KB | CSS |
| hero image | 192.31 KB | - | JPEG |
| **Total** | **609 KB** | **121 KB** | - |

### Load Time Estimates
- First Load: ~2-3 seconds (includes image)
- Subsequent: <1 second (browser cache)
- Mobile 3G: ~5-7 seconds

## Security & Access Control

### GitHub Pages Security
- ✅ HTTPS enforced
- ✅ DDoS protection included
- ✅ Public read access only
- ✅ No sensitive data in repository

### GitHub Actions Security
- ✅ Signed artifacts
- ✅ OIDC token authentication
- ✅ Minimal permissions per job
- ✅ No secrets required for deployment

## Performance Considerations

### Optimization Strategies
1. **Code Splitting**: Vite automatically handles
2. **Image Optimization**: JPEG compression applied
3. **CSS Purging**: Tailwind unused styles removed
4. **JavaScript Minification**: Production build only
5. **Browser Caching**: GitHub Pages caches aggressively

### Monitoring Deployment
```
GitHub Dashboard → Repository → Actions
└─ Deploy to GitHub Pages
   ├─ Workflow Runs (shows status)
   ├─ Build Logs (npm output)
   └─ Deployment URL (live site)
```

## Rollback Strategy

### Quick Rollback
1. Previous deployments preserved automatically
2. Push previous commit to trigger rollback
3. Or use GitHub Actions manual dispatch with specific branch

### Disaster Recovery
```
Issue detected → Revert commit → Push → Redeploy
              (< 2 minutes)
```

## Monitoring & Logging

### Available Logs
- **Build Logs**: GitHub Actions workflow run
- **Deployment Logs**: Pages deployment status
- **Runtime**: Browser console (no server logs available)

### Check Deployment Status
```
GitHub → Repository → Actions → Deploy to GitHub Pages
├─ Completed ✓ (green checkmark)
├─ In Progress ⟳ (spinner)
└─ Failed ✗ (red x)
```

## Limitations & Constraints

### GitHub Pages Limitations
- Static files only (no server-side processing)
- 10 GB repository size limit
- 100 GB bandwidth/month per user
- 4 GB file size limit

### Project Constraints
- React SPA (Single Page Application)
- Client-side routing only
- No backend API integration
- No database access

## Integration Points

### Current Integrations
- None (static site)

### Possible Future Integrations
- Third-party APIs (frontend calls)
- Analytics (Google Analytics, etc.)
- Forms (Formspree, Basin, etc.)

---

**Diagram Last Updated**: January 15, 2026
