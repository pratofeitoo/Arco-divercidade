---
applyTo: 'System/Registros Operacionais/Propostas Comerciais MD + HTML/**'
---

# Metodologia de Melhoria de Propostas Comerciais — Instruções

Propósito: fornecer um conjunto de regras e templates para revisar, reescrever e transformar propostas comerciais em entregáveis "contract-ready". Estas instruções orientam revisores humanos e agentes (LLMs) sobre formato, avaliação, gaps críticos e checklist final para validação jurídica/comercial.

Quando usar:
- Toda vez que uma proposta comercial (MD/HTML) for submetida para revisão antes de envio ao cliente ou antes da conversão em contrato.

Escopo (o que cobrir):
- Objetivos e métricas 
- Escopo e exclusões
- Metodologia e QA
- Entregáveis detalhados e critérios de aceitação
- Cronograma e marcos com buffers
- Orçamento detalhado e justificativa de preço
- Riscos, pressupostos e mitigação
- Termos comerciais e pontos contratuais essenciais

Fluxo de trabalho recomendado (4 fases)
1. Formatação e limpeza
   - Normalizar título, sumário, tabelas, moeda e unidades.
   - Garantir que seções estejam claramente separadas e numeradas.
2. Avaliação crítica (diagnóstico)
   - Aplicar a matriz de avaliação de 11 seções (ver abaixo).
   - Identificar gaps, ambiguidade, suposições não declaradas e riscos.
3. Matriz de lacunas (gap matrix)
   - Mapear gap → impacto → recomendação → responsabilidade → esforço.
4. Reescrita e preparação para contrato
   - Reescrever com objetivos mensuráveis, entregáveis, critérios de aceitação, cronograma e termos comerciais claros.

Estrutura de Avaliação (11 seções)
1. Objetivos e Resultados Esperados
2. Escopo e Exclusões
3. Metodologia e Abordagem
4. Entregáveis e Critérios de Aceitação
5. Cronograma e Marcos
6. Equipe e Perfis
7. Orçamento e Precificação
8. Riscos e Mitigações
9. Métricas e KPIs de Sucesso
10. Termos Comerciais & Jurídicos
11. Qualidade, Garantia e Pós-entrega

Rubrica de pontuação (0–5)
- 0 = Ausente / Não aplicável
- 1 = Muito fraco / Ambíguo
- 2 = Insuficiente / Gaps importantes
- 3 = Satisfatório, mas precisa de clarificação
- 4 = Bom — pronto com pequenas correções
- 5 = Excelente — pronto para contrato

Critérios de aceitação para "Pronto para contrato" (checklist)
- Objetivos: SMART (Específico, Mensurável, Alcançável, Relevante, Temporal) com baseline e meta.
- Escopo: inclui entregáveis, exclusões, responsabilidades e fronteiras técnicas.
- Entregáveis: descritos por item, formato, critério de aceitação e entregável final (ex.: relatório PDF, workshop, código-fonte).
- Cronograma: marcos com datas e buffers (recomendado 10–20% do prazo total para riscos).
- Orçamento: tabela com breakdown por item, impostos, despesas reembolsáveis e justificativa de custo.
- Termos: pagamento (milestones), propriedade intelectual, confidencialidade, rescisão, controle de mudanças e limites de responsabilidade.
- Assunções e riscos: listados e com mitigação atribuída.

Template: Objetivos SMART (exemplo)

### OBJETIVOS E RESULTADOS (modelo)

| Objetivo | Resultado esperado | Métrica | Baseline | Meta (prazo) | Justificativa |
|---|---:|---:|---:|---:|---|
| Atualizar base de dados | Retrato representativo da diversidade | Taxa de participação | [inserir baseline] | ≥85% (330/390) — até Semana 4 | Garante validade estatística |
| Fortalecer cultura | Liderança com plano de ação | % líderes com plano | [inserir baseline] | ≥70% líderes engajados — até Semana 6 | Sustenta mudança comportamental |

Observação: sempre preencher baseline (medida atual), método de medição e responsável.

Boas práticas de reescrita (para LLMs e revisores)
- Preserve intenções e preços originais; preencha apenas gaps e sinalize suposições adicionadas.
- Use linguagem clara, tabelas para entregáveis e budgets, bullets para responsabilidades.
- Ao adicionar ou sugerir entregáveis/marcos, coloque as mudanças como sugestões com justificativa.
- Marque com comentários/footnotes todas as suposições que impactam preço/prazo.

Instruções específicas para LLMs
- 1) Extrair pressuposições detectadas no texto e listar separadamente.
- 2) Gerar a Matriz de Lacunas (gap matrix) com prioridade (alto/médio/baixo).
- 3) Reescrever Objetivos para formato SMART e criar a tabela de métricas.
- 4) Quebrar orçamento por entregável e incluir linha de contingência (5–15%).
- 5) Gerar 2 versões: (A) versão limpa para envio ao cliente; (B) versão contract-ready com cláusulas / termos essenciais destacados.

Exigências de formatação e commit
- Salvar arquivo em: `.github/instructions/metodologia-melhoria-proposta.instructions.md`
- Mensagem de commit sugerida: `chore(instructions): add metodologia-melhoria-proposta.instructions.md`
- Se a proposta original for alterada, crie um PR com: resumo das mudanças, matriz de lacunas e checklist de "pronto para contrato".

Observações finais — itens de alto impacto para correção imediata
- Transformar objetivos em SMART (com baseline e prazo)
- Expandir escopo com entregáveis e exclusões claras
- Detalhar metodologia e controles de qualidade
- Adicionar matriz de riscos e justificativa de preço

—
Arquivo gerado a partir do conteúdo de `METODOLOGIA_MELHORIA_PROPOSTA.md`. Use este documento como regra quando revisar propostas comerciais antes de transformá-las em contratos.
