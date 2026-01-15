import { Target, Users, MessageSquare, Lightbulb, ClipboardCheck, AlertTriangle, Check, ArrowRight } from "lucide-react";
import ProposalHero from "@/components/proposal/ProposalHero";
import ProposalSection from "@/components/proposal/ProposalSection";
import TableOfContents from "@/components/proposal/TableOfContents";
import ObjectivesTable from "@/components/proposal/ObjectivesTable";
import ModuleCard from "@/components/proposal/ModuleCard";
import TimelineItem from "@/components/proposal/TimelineItem";
import PricingCard from "@/components/proposal/PricingCard";
import Footer from "@/components/proposal/Footer";
import { TeamSection } from "@/components/proposal/TeamSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const modules = [
  { number: 1, title: "Diagnóstico Estratégico de Inclusão PcD", icon: Target },
  { number: 2, title: "Sensibilização Institucional", icon: Users },
  { number: 3, title: "Formação de Lideranças", icon: MessageSquare },
  { number: 4, title: "Conteúdo Educacional (LMS)", icon: ClipboardCheck },
  { number: 5, title: "Consultoria Contínua", icon: Lightbulb },
  { number: 6, title: "Comitê de Aprovação Inclusiva", icon: Check },
];

const timeline = [
  { step: "1", title: "Kickoff & alignment", timing: "Semana 0 (1 semana)" },
  { step: "2", title: "Diagnóstico (Etapa 1)", timing: "Semanas 1–6" },
  { step: "3", title: "Sensibilização (bloco inicial)", timing: "Semanas 7–10 (2 sessões)" },
  { step: "4", title: "Formação de Lideranças (rollout)", timing: "Semanas 11–18" },
  { step: "5", title: "Conteúdo LMS — desenvolvimento", timing: "Semanas 9–20" },
  { step: "6", title: "Deploy LMS & validação Comitê", timing: "Semanas 21–24" },
  { step: "7", title: "Consultoria contínua (go-live)", timing: "Semanas 25–52" },
  { step: "8", title: "Revisão final & entrega contract-ready", timing: "Semanas 52–53" },
];

const metrics = [
  { label: "Evolução da maturidade cultural", value: "≥80", description: "score em survey (0–100)" },
  { label: "Engajamento de lideranças", value: "≥90%", description: "taxa de participação em ações" },
  { label: "Redução da rotatividade PcD", value: "≥20%", description: "aumento vs baseline" },
  { label: "Completude LMS", value: "≥85%", description: "taxa de conclusão de conteúdos" },
];

const risks = [
  { risk: "Baixa adesão de lideranças às ações", mitigation: "Comunicação prévia robusta, KPI de adesão e pilotos por área" },
  { risk: "Dados de People incompletos (LGPD)", mitigation: "Validar disponibilidade; acordar escopo de extração e anonimização" },
  { risk: "Conteúdo sem acessibilidade técnica", mitigation: "QA de acessibilidade por Comitê PcD antes do deploy" },
];

const nextSteps = [
  "Alinhamento final de escopo",
  "Ajustes de investimento por bloco",
  "Aprovação executiva",
  "Planejamento detalhado e kick-off",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProposalHero />
      <TableOfContents />

      {/* Resumo Executivo */}
      <ProposalSection id="resumo" number="01" title="Resumo Executivo">
        <Card className="border-l-4 border-l-primary bg-card">
          <CardContent className="p-6 md:p-8">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Esta proposta tem como objetivo apoiar a <strong>Arco Educação</strong> na estruturação de um <strong>Programa Estratégico de Inclusão de Pessoas com Deficiência (PcD)</strong>, com foco em <strong>cultura, liderança, processos, produtos educacionais e sustentabilidade dos resultados</strong>. O programa atua <strong>antes da ampliação de contratações</strong>, preparando a organização para atrair, desenvolver e reter talentos PcD de forma consistente, alinhada à cultura de alta performance, inovação e impacto educacional da Arco.
            </p>
          </CardContent>
        </Card>
      </ProposalSection>

      {/* Contexto */}
      <ProposalSection id="contexto" number="02" title="Contexto" variant="accent">
        <div className="max-w-3xl">
          <p className="text-lg text-foreground/90 leading-relaxed">
            A Arco Educação reconhece que a inclusão de PcD vai além do cumprimento de cotas legais e envolve desafios estruturais como: <strong>preparo das lideranças, acessibilidade nos processos e conteúdos, cultura organizacional, risco de rotatividade, e impacto direto na qualidade dos produtos educacionais</strong>. Este programa nasce em um momento em que <strong>diversidade passa a ocupar espaço na agenda executiva</strong>, exigindo especialização técnica, dados, governança e apoio externo qualificado.
          </p>
        </div>
      </ProposalSection>

      {/* Objetivos SMART */}
      <ProposalSection id="objetivos" number="03" title="Objetivos SMART">
        <ObjectivesTable />
        <div className="mt-6 p-4 bg-accent rounded-lg border border-primary/20">
          <p className="text-sm text-accent-foreground flex items-start gap-2">
            <Target className="w-5 h-5 shrink-0 mt-0.5" />
            <span>
              <strong>Observação:</strong> Baselines serão definidos por meio de pré-survey (diagnóstico rápido) 
              antes do início do programa.
            </span>
          </p>
        </div>
      </ProposalSection>

      {/* Escopo */}
      <ProposalSection id="escopo" number="04" title="Escopo e Exclusões" variant="muted">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                <Check className="w-5 h-5" />
                Incluído no escopo
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  Diagnóstico organizacional completo
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  Sensibilização institucional modular
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  Formação escalável de lideranças
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  Conteúdo LMS acessível e escalável
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  Consultoria contínua e Comitê de Aprovação
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-destructive mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Exclusões
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                  Implantação de políticas em larga escala
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                  Programas para colaboradores não-líderes (sob proposta)
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                  Custos de deslocamento e hospedagem — reembolsáveis
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </ProposalSection>

      {/* Programa */}
      <ProposalSection id="programa" number="03" title="Etapas do Programa (Escopo)">
        <div className="mb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {modules.map((module) => (
              <ModuleCard key={module.number} {...module} />
            ))}
          </div>
          
          <Card className="bg-accent/50 border-primary/20">
            <CardContent className="p-6">
              <h4 className="font-semibold text-foreground mb-4">Princípios-Chave</h4>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-foreground/80">
                  <Check className="w-4 h-4 text-primary" />
                  Participação direta de PcDs
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Check className="w-4 h-4 text-primary" />
                  Abordagem estrutural e progressiva
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Check className="w-4 h-4 text-primary" />
                  Baseado em evidências e dados
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Check className="w-4 h-4 text-primary" />
                  Conectado à estratégia de negócio
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ProposalSection>

      {/* Cronograma */}
      <ProposalSection id="cronograma" number="05" title="Cronograma (12 Meses)" variant="accent">
        <div className="max-w-3xl">
          {timeline.map((item, index) => (
            <TimelineItem 
              key={index} 
              {...item} 
              isLast={index === timeline.length - 1} 
            />
          ))}
        </div>
      </ProposalSection>

      {/* Investimento */}
      <ProposalSection id="investimento" number="06" title="Modelo de Investimento">
          <div className="grid lg:grid-cols-1 gap-8 mb-12">
            <div>
              <div className="grid gap-4">
                <PricingCard
                  title="BLOCO 1 — Diagnóstico Estratégico"
                  price="R$ 60.000"
                  perUnit="projeto fechado"
                  features={[
                    "Análise integrada e leitura organizacional",
                    "Diagnóstico completo + roadmap",
                    "Base técnica para todas as decisões",
                    "Recomendações estratégicas priorizadas",
                  ]}
                  highlighted
                />
                
                <PricingCard
                  title="BLOCO 2 — Sensibilização Institucional"
                  price="R$ 12.500"
                  perUnit="por sessão (1h30 a 2h)"
                  features={[
                    "Conteúdo adaptado ao contexto educacional",
                    "Participação de PcDs como especialistas",
                    "Abordagem sobre legislação e impacto",
                    "Pacote 2 sessões: R$ 23.000 | Pacote 4: R$ 44.000",
                  ]}
                />
              </div>
            </div>
          </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <PricingCard
            title="BLOCO 3 — Formação de Lideranças"
            price="R$ 18.000"
            perUnit="por treinamento (3h, até 30 pessoas)"
            features={[
              "Liderança inclusiva e gestão de vieses",
              "Segurança psicológica e tomada de decisão",
              "Materiais e recomendações práticas",
              "Pacote 2: R$ 34.000 | Pacote 4: R$ 64.000 | Pacote 6: R$ 90.000",
            ]}
          />
          <PricingCard
            title="BLOCO 4 — Conteúdo LMS"
            price="R$ 80.000"
            perUnit="projeto + horas adicionais R$ 550/h"
            features={[
              "Roteirização e curadoria pedagógica",
              "Conteúdos sobre PcD e inclusão",
              "Participação de PcDs como conteudistas",
              "Apoio à produção com time interno",
            ]}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <PricingCard
            title="BLOCO 5 — Consultoria Contínua"
            price="R$ 600"
            perUnit="por hora consultiva"
            features={[
              "Apoio a recrutamento e benefícios",
              "Suporte ao comitê de diversidade",
              "Recomendações estratégicas contínuas",
              "40h: R$ 24.000 | 80h: R$ 48.000",
            ]}
          />
          <PricingCard
            title="BLOCO 6 — Comitê de Aprovação"
            price="R$ 22.000"
            perUnit="ciclo completo"
            features={[
              "Governança de conteúdos inclusivos",
              "Garantia de qualidade pedagógica",
              "Segurança psicológica e acessibilidade",
              "Rodada extra: R$ 6.000",
            ]}
          />
        </div>

        <div className="mt-12 p-6 bg-accent/20 rounded-lg border border-primary/20">
          <h4 className="text-lg font-semibold text-foreground mb-4">Modelos de Combinação (Referência)</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-semibold text-primary mb-2">Programa Essencial</p>
              <ul className="text-sm space-y-1 text-foreground/80 mb-3">
                <li>• Bloco 1</li>
                <li>• 2 Sensibilizações</li>
                <li>• 2 Treinamentos</li>
              </ul>
              <p className="text-xl font-bold text-foreground">R$ 117.000</p>
            </div>
            <div>
              <p className="font-semibold text-primary mb-2">Programa Estratégico</p>
              <ul className="text-sm space-y-1 text-foreground/80 mb-3">
                <li>• Bloco 1</li>
                <li>• 4 Sensibilizações</li>
                <li>• 4 Treinamentos</li>
                <li>• Bloco 4 (LMS)</li>
                <li>• 40h Consultoria</li>
              </ul>
              <p className="text-xl font-bold text-foreground">R$ 225.000</p>
            </div>
            <div>
              <p className="font-semibold text-primary mb-2">Programa Completo</p>
              <ul className="text-sm space-y-1 text-foreground/80 mb-3">
                <li>• Todos os blocos</li>
                <li>• 6 Treinamentos</li>
                <li>• 80h Consultoria</li>
                <li>• Comitê ativo</li>
              </ul>
              <p className="text-xl font-bold text-foreground">R$ 325.000</p>
            </div>
          </div>
        </div>
      </ProposalSection>

      {/* Métricas */}
      <ProposalSection id="metricas" number="07" title="KPIs e Indicadores de Sucesso" variant="muted">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="font-semibold text-foreground mb-1">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-accent-foreground" />
              Riscos, Pressupostos e Mitigações
            </h4>
            <div className="space-y-4">
              {risks.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 bg-accent/30 rounded-lg">
                  <span className="font-medium text-foreground shrink-0">{item.risk}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground hidden sm:block" />
                  <span className="text-sm text-muted-foreground">{item.mitigation}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </ProposalSection>

      {/* Equipe */}
      <ProposalSection id="equipe" number="08" title="Equipe e Credenciais">
        <TeamSection />
      </ProposalSection>

      {/* Próximos Passos */}
      <ProposalSection id="proximos-passos" number="09" title="Próximos Passos">
        <Card className="bg-gradient-to-br from-primary/5 to-accent border-primary/20">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <ol className="space-y-4">
                  {nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-foreground/90 pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="text-center md:text-right">
                <p className="text-muted-foreground mb-6">
                  Estamos prontos para iniciar essa jornada de transformação com a Arco Educação, preparando a organização para atrair, desenvolver e reter talentos PcD de forma consistente e impactante.
                </p>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Entrar em Contato
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </ProposalSection>

      <Footer />
    </div>
  );
};

export default Index;
