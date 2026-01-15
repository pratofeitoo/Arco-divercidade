# Quick Start: Adapt This Project to Your Content (15-30 minutes)

## 🎯 Goal
Replace the hardcoded "Instituto Natura" proposal with your "Arco Educação" proposal content from `/proposal_files`.

## �� Files You Need to Edit
**Primary file**: `src/pages/Index.tsx` (this is 95% of the work)

---

## Step 1: Open Index.tsx and Find These Sections

### Section 1: Organization Name (Search & Replace)
**Find**: `Instituto Natura`  
**Replace with**: `Arco Educação`

### Section 2: Modules Array (Lines ~14-20)
**Current**:
```tsx
const modules = [
  { number: 1, title: "Liderança inclusiva na prática", icon: Users },
  { number: 2, title: "Feedback e desenvolvimento de pessoas diversas", icon: MessageSquare },
  { number: 3, title: "Vieses, conflitos e tomada de decisão", icon: Lightbulb },
  { number: 4, title: "Ferramentas de sustentação e planos de ação", icon: ClipboardCheck },
];
```

**Replace with** (from Etapa 2-5 in DRAFT_PROPOSTA_ARCOR_EDUCACAO.md):
```tsx
const modules = [
  { number: 1, title: "Diagnóstico", icon: Target },
  { number: 2, title: "Sensibilização Institucional", icon: Users },
  { number: 3, title: "Formação de Lideranças", icon: Lightbulb },
  { number: 4, title: "Conteúdo LMS", icon: ClipboardCheck },
];
```

### Section 3: Timeline Array (Lines ~21-27)
**Current**:
```tsx
const timeline = [
  { step: "1", title: "Assinatura do contrato / Kick-off", timing: "T0" },
  { step: "2", title: "Pré-survey e diagnóstico", timing: "T0 + 1–2 semanas" },
  { step: "3", title: "Customização e preparação", timing: "T0 + 2–3 semanas" },
  { step: "4", title: "Execução (4 encontros)", timing: "T0 + 4–6 semanas" },
  { step: "5", title: "Entrega do relatório executivo", timing: "Até 2 semanas após último encontro" },
  { step: "6", title: "Check-in de acompanhamento", timing: "6 semanas após última sessão" },
];
```

**Replace with** (from timeline_ARCOR.csv):
```tsx
const timeline = [
  { step: "1", title: "Kickoff & alignment", timing: "Week 0–1" },
  { step: "2", title: "Diagnóstico (Etapa 1)", timing: "Week 1–6" },
  { step: "3", title: "Sensibilização (bloco inicial)", timing: "Week 7–10" },
  { step: "4", title: "Formação de Lideranças", timing: "Week 11–18" },
  { step: "5", title: "Conteúdo LMS — desenvolvimento", timing: "Week 9–20" },
  { step: "6", title: "Deploy LMS & validação", timing: "Week 21–24" },
];
```

### Section 4: Metrics Array (Lines ~29-34)
**Current**:
```tsx
const metrics = [
  { label: "Confiança do líder", value: "≥85%", description: "aumento na capacidade de aplicar ferramentas" },
  { label: "Uso de ferramentas", value: "≥70%", description: "líderes aplicando ≥1 ferramenta em 4 semanas" },
  { label: "Planos implementados", value: "≥70%", description: "em 6 semanas pós-programa" },
  { label: "Satisfação geral", value: "≥80%", description: "no programa" },
];
```

**Replace with** (from SMART objectives table in DRAFT_PROPOSTA_ARCOR_EDUCACAO.md):
```tsx
const metrics = [
  { label: "Objetivo A", value: "≥90%", description: "de participação das lideranças convidadas" },
  { label: "Objetivo B", value: "≥15%", description: "redução do time-to-hire para PcD" },
  { label: "Objetivo C", value: "≥20%", description: "aumento de retention rate em comparação ao baseline" },
  { label: "Engajamento", value: "≥75", description: "média de engajamento (0-100)" },
];
```

### Section 5: Risks Array (Lines ~36-39)
**Current**:
```tsx
const risks = [
  { risk: "Baixa adesão às sessões", mitigation: "Alinhamento com RH e program owners, janelas alternativas e buffer" },
  { risk: "Conteúdo não adaptado", mitigation: "Diagnóstico prévio e adaptação de casos ao contexto específico" },
  { risk: "Escopo expandido", mitigation: "Processo de change control e aprovação prévia de custos adicionais" },
];
```

**Replace with** (from risk_log_ARCOR.md):
```tsx
const risks = [
  { risk: "Baixa adesão de lideranças às ações", mitigation: "Comunicação prévia com líderes, envolvimento de sponsor, pilotos por área" },
  { risk: "Dados de People incompletos ou inconsistentes (LGPD)", mitigation: "Validar disponibilidade de dados no alinhamento; acordar processo de extração" },
  { risk: "Conteúdo não cumprir requisitos de acessibilidade", mitigation: "QA técnico de acessibilidade; validação pelo Comitê PcD" },
];
```

### Section 6: Next Steps Array (Lines ~41-44)
**Current**:
```tsx
const nextSteps = [
  "Confirmação do escopo e modalidade (presencial / remoto / híbrido)",
  "Aprovação comercial",
  "Assinatura do contrato e kick-off",
  "Aplicação do pré-survey e customização de casos",
];
```

**Replace with** (from DRAFT_PROPOSTA, section Próximas Etapas or use these generic ones):
```tsx
const nextSteps = [
  "Confirmação do escopo e modalidade com Arco",
  "Aprovação comercial e orçamento",
  "Assinatura do contrato e kick-off",
  "Iniciação do Diagnóstico (Etapa 1)",
];
```

### Section 7: Executive Summary (Lines ~60-75)
**Find this paragraph**:
```tsx
<p className="text-lg text-foreground/90 leading-relaxed">
  Esta proposta oferece uma <strong>formação prática e aplicada</strong> para líderes do Instituto Natura...
</p>
```

**Replace with** (from RESUMO EXECUTIVO in DRAFT_PROPOSTA_ARCOR_EDUCACAO.md):
```tsx
<p className="text-lg text-foreground/90 leading-relaxed">
  Esta proposta tem como objetivo apoiar a <strong>Arco Educação</strong> na estruturação de um <strong>Programa Estratégico de Inclusão de Pessoas com Deficiência (PcD)</strong>, com foco em <strong>cultura, liderança, processos, produtos educacionais e sustentabilidade dos resultados</strong>. 
  O programa atua antes da ampliação de contratações, preparando a organização para atrair, desenvolver e reter talentos PcD de forma consistente.
</p>
```

### Section 8: Context Section (Lines ~85-95)
**Find**:
```tsx
<p className="text-lg text-foreground/90 leading-relaxed">
  O Instituto Natura já demonstrou maturidade no reconhecimento da importância...
</p>
```

**Replace with** (from CONTEXTO in DRAFT_PROPOSTA_ARCOR_EDUCACAO.md):
```tsx
<p className="text-lg text-foreground/90 leading-relaxed">
  A Arco Educação reconhece que a inclusão de PcD vai além do cumprimento de cotas legais e envolve desafios estruturais como: 
  preparo das lideranças, acessibilidade nos processos e conteúdos, cultura organizacional, risco de rotatividade, 
  e impacto direto na qualidade dos produtos educacionais.
</p>
```

---

## Step 2: Test Your Changes

```bash
# Navigate to project directory
cd "/Users/paulorezende/Library/CloudStorage/GoogleDrive-paulo@divercidade.net/Shared drives/DiverCidade HUB/2026/Client Management/Clientes/Arcor Educação/04_documents/proposals/TEMPLATE_TO_FILL"

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Open browser to: http://localhost:5173/proposal-presenter/
```

## Step 3: Build for Production

```bash
npm run build
npm run preview
```

---

## 📊 Content Checklist

After making changes, verify:
- [ ] Organization name changed from "Instituto Natura" to "Arco Educação"
- [ ] Modules reflect Arco program phases (Diagnóstico, Sensibilização, Formação, LMS)
- [ ] Timeline milestones match timeline_ARCOR.csv
- [ ] Metrics/objectives match SMART table from proposal
- [ ] Risks match risk_log_ARCOR.md
- [ ] Executive summary text updated
- [ ] Context section updated
- [ ] Website loads without console errors
- [ ] Mobile responsiveness works (test on phone-sized viewport)

---

## ⏱️ Time Estimate

| Task | Time |
|------|------|
| Find & replace "Instituto Natura" | 2 min |
| Update modules array | 3 min |
| Update timeline array | 3 min |
| Update metrics array | 3 min |
| Update risks array | 2 min |
| Update next steps | 2 min |
| Update hero/context text | 5 min |
| Test in browser | 5 min |
| Build for production | 3 min |
| **TOTAL** | **~28 minutes** |

---

## 🐛 Troubleshooting

**Problem**: "Module not found" error  
**Solution**: Make sure you didn't delete any imports at the top of Index.tsx

**Problem**: Styling looks broken  
**Solution**: Clear browser cache (Cmd+Shift+R on Mac) and restart dev server

**Problem**: Content not showing  
**Solution**: Check browser console for errors; make sure array syntax is valid TypeScript

---

## Next Enhancements (Optional)

Once basic content is updated, consider:
1. Extract RACI matrix table into a separate component
2. Parse CSV timeline programmatically
3. Create RiskLog component with filtering
4. Add "Download PDF" functionality
5. Add dark mode support

But these are **not** required for a working proposal.

---

**Good luck! Your proposal should be ready to share in ~30 minutes. 🚀**
