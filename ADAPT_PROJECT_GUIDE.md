# Project Adaptation Guide: Using TEMPLATE_TO_FILL with Proposal Files

**Date Created:** 2026-01-15  
**Status:** Guide for adapting the proposal template to your specific content

---

## Overview

This project is a **React + TypeScript + Vite** web application designed to present commercial proposals in an interactive, professional format. The current structure is based on a previous project template and needs to be customized to use content from your `proposal_files` directory.

### Available Content in `proposal_files`:
1. **DRAFT_PROPOSTA_ARCOR_EDUCACAO.md** - Main proposal markdown document
2. **RACI_ARCOR.md** - Responsibility Matrix
3. **risk_log_ARCOR.md** - Risk Log
4. **timeline_ARCOR.csv** - Project Timeline

---

## Project Structure Overview

```
TEMPLATE_TO_FILL/
├── src/
│   ├── pages/
│   │   └── Index.tsx          ← Main proposal page (NEEDS CUSTOMIZATION)
│   ├── components/
│   │   ├── proposal/          ← Proposal-specific components
│   │   │   ├── ProposalHero.tsx
│   │   │   ├── ProposalSection.tsx
│   │   │   ├── TableOfContents.tsx
│   │   │   ├── ObjectivesTable.tsx
│   │   │   ├── ModuleCard.tsx
│   │   │   ├── TimelineItem.tsx
│   │   │   ├── PricingCard.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── TeamSection.tsx
│   │   └── ui/                ← Reusable UI components
│   ├── App.tsx                ← Router setup
│   └── main.tsx               ← Entry point
├── proposal_files/            ← Your content (SHOULD NOT BE MODIFIED)
│   ├── DRAFT_PROPOSTA_ARCOR_EDUCACAO.md
│   ├── RACI_ARCOR.md
│   ├── risk_log_ARCOR.md
│   └── timeline_ARCOR.csv
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

---

## Key Customization Areas

### 1. **Index Page Content** (`src/pages/Index.tsx`)

**Current hardcoded sections that need updating:**

- **Hero Section**: Title, subtitle, organization name, dates
- **Executive Summary**: Intro paragraph (currently hardcoded for "Instituto Natura")
- **Context**: Background and problem statement
- **Smart Objectives Table**: Goals with baselines, metrics, targets
- **Methodology**: Approach and key pillars
- **Scope (Included/Excluded)**: What's in and out of scope
- **Modules/Phases**: Training modules or program phases
- **Timeline**: Key milestones and timing
- **Metrics**: Success KPIs
- **Risks**: Risk items with mitigations
- **Pricing/Budget**: Cost breakdown and total
- **Next Steps**: Action items

**How to extract from markdown:**
1. Open `DRAFT_PROPOSTA_ARCOR_EDUCACAO.md`
2. Locate each section (e.g., "## 1. RESUMO EXECUTIVO")
3. Copy text content and update corresponding hardcoded strings in `Index.tsx`

---

### 2. **Data-Driven Components to Update**

#### **ObjectivesTable Component**
- **File**: `src/components/proposal/ObjectivesTable.tsx`
- **Source**: SMART objectives table from markdown (Section 3)
- **Task**: Extract table rows and update component to display them

#### **TimelineItem Component**
- **File**: `src/components/proposal/TimelineItem.tsx`
- **Source**: `timeline_ARCOR.csv`
- **Task**: Parse CSV and populate timeline items

#### **Risk/Issues Section**
- **File**: Currently in `Index.tsx` as hardcoded `risks` array
- **Source**: `risk_log_ARCOR.md`
- **Task**: Extract risk items and update the rendering logic

#### **RACI Matrix Section**
- **File**: Not yet implemented in UI
- **Source**: `RACI_ARCOR.md`
- **Task**: Create a new `RACITable.tsx` component to display responsibility matrix

---

## Step-by-Step Customization Plan

### Phase 1: Update Hero & Basic Info
**Time: 30 min**
- [ ] Open `src/pages/Index.tsx`
- [ ] Replace organization name (search for "Instituto Natura" → "Arco Educação")
- [ ] Update hero title, subtitle, and dates
- [ ] Update "Resumo Executivo" first paragraph

### Phase 2: Update Main Sections
**Time: 1-2 hours**
- [ ] Update "Contexto" section text
- [ ] Replace hardcoded modules with Arco Educação phases from markdown
- [ ] Update timeline array with milestones from CSV
- [ ] Replace metrics array with SMART objectives
- [ ] Update risks array with risk log items

### Phase 3: Extract & Parse Table Data
**Time: 1 hour**
- [ ] Parse SMART objectives from markdown table
- [ ] Parse RACI matrix and create new component
- [ ] Parse risk log and create new component

### Phase 4: Visual Polish & Testing
**Time: 30 min**
- [ ] Run `npm run dev` to preview changes
- [ ] Adjust colors, spacing, and typography if needed
- [ ] Test responsive design on mobile/tablet

### Phase 5: Build & Deploy
**Time: 20 min**
- [ ] Run `npm run build`
- [ ] Test production build locally
- [ ] Deploy to hosting (see `deploy.sh`)

---

## Specific Code Locations to Modify

### In `src/pages/Index.tsx`:

**Lines ~65-70: Hero text**
```tsx
// CHANGE THIS:
"Esta proposta oferece uma formação prática e aplicada para líderes do Instituto Natura..."

// TO THIS:
"Esta proposta tem como objetivo apoiar a Arco Educação na estruturação de um Programa Estratégico de Inclusão de Pessoas com Deficiência (PcD)..."
```

**Lines ~14-19: Modules array**
```tsx
// CHANGE THIS array to match phases from DRAFT_PROPOSTA:
const modules = [
  { number: 1, title: "Liderança inclusiva...", icon: Users },
  ...
];

// TO THIS (example):
const modules = [
  { number: 1, title: "Diagnóstico", icon: Target },
  { number: 2, title: "Sensibilização Institucional", icon: Users },
  ...
];
```

**Lines ~21-27: Timeline array**
```tsx
// CHANGE FROM hardcoded timeline
// TO DATA FROM timeline_ARCOR.csv:
const timeline = [
  { step: "1", title: "Kickoff & alignment", timing: "Week 0–1" },
  { step: "2", title: "Diagnóstico (Etapa 1)", timing: "Week 1–6" },
  ...
];
```

**Lines ~29-34: Metrics array**
```tsx
// REPLACE with SMART objectives from markdown table
const metrics = [
  { label: "Objetivo A", value: "≥90%", description: "de participação das lideranças" },
  ...
];
```

---

## Files to Create (Optional Enhancements)

### 1. **Data Extraction Utility**
**File**: `src/utils/contentLoader.ts`
```typescript
// Helper to parse markdown tables and CSV
export const parseMarkdownTable = (md: string): TableRow[] => { ... }
export const parseCSV = (csv: string): TimelineItem[] => { ... }
```

### 2. **New Components**

#### **RACITable.tsx**
```tsx
// Component to display RACI matrix from parsed data
interface RACIEntry {
  deliverable: string;
  responsible: string;
  accountable: string;
  consulted: string;
  informed: string;
}

export default function RACITable({ data }: { data: RACIEntry[] }) { ... }
```

#### **RiskLog.tsx**
```tsx
// Component to display risk log with filtering/sorting
interface RiskItem {
  id: string;
  risk: string;
  impact: string;
  probability: string;
  priority: string;
  mitigation: string;
  owner: string;
  status: string;
}

export default function RiskLog({ data }: { data: RiskItem[] }) { ... }
```

---

## Content Mapping Reference

### From DRAFT_PROPOSTA_ARCOR_EDUCACAO.md:

| Markdown Section | Component/Code Location | Current Content |
|---|---|---|
| 1. RESUMO EXECUTIVO | Index.tsx line ~65 | Hardcoded for Instituto Natura |
| 2. CONTEXTO | Index.tsx "Contexto" section | Hardcoded for Instituto Natura |
| 3. OBJETIVOS DO PROGRAMA (SMART table) | ObjectivesTable.tsx | Hardcoded metrics |
| 4. METODOLOGIA | Index.tsx "Metodologia" section | Not yet implemented |
| 5. ETAPAS DO PROGRAMA | modules array | Hardcoded modules |
| Timeline milestones | timeline array | Hardcoded timeline |
| Riscos | risks array | Hardcoded risks |

---

## Environment Setup

### Install Dependencies
```bash
npm install
# or
bun install
```

### Development Server
```bash
npm run dev
# Open: http://localhost:5173/proposal-presenter/
```

### Production Build
```bash
npm run build
npm run preview
```

### Deploy
```bash
./deploy.sh
```

---

## Tips for Success

1. **Keep proposal_files untouched** - These are your source of truth
2. **Use consistent naming** - Match section names from markdown exactly
3. **Test incrementally** - Update one section at a time and preview
4. **Preserve component structure** - Don't delete existing components; reuse them
5. **Mobile-first mindset** - Test on mobile as you go (Tailwind responsive classes already in place)
6. **Color consistency** - Use existing Tailwind color tokens (primary, accent, muted, etc.)

---

## Next Steps

1. **Immediate**: Review this guide and the proposal files
2. **Short-term**: Update Index.tsx with Arco content (1-2 hours)
3. **Medium-term**: Extract and parse table data into components (1-2 hours)
4. **Polish**: Test, refine styling, and deploy

---

## Questions?

Refer to:
- **Project structure**: `/README.md`
- **Component library**: `/src/components/ui/`
- **Tailwind tokens**: `/tailwind.config.ts`
- **TypeScript types**: `/src/types/` (if needed)

---

**Last Updated:** 2026-01-15  
**Author**: System Guide  
**Status**: Ready for customization
