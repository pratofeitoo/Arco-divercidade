import { TeamMemberCard } from "./TeamMemberCard";
import { Users } from "lucide-react";

const teamMembers = [
  {
    name: "Aline Messias",
    title: "Especialista em Diversidade e Inclusão — Foco em Pessoas com Deficiência",
    education: [
      "10 anos na indústria de cosméticos; 7 anos em Marketing e Negócio",
      "Atuação em Gestão de Orçamento, Eventos e Treinamento Comercial",
    ],
    experience: {
      years: "10 anos de experiência",
      current: "Consultora em Diversidade e Inclusão (foco em Pessoas com Deficiência)",
      previous: [
        "Atuação em Marketing e Negócio — indústrias de cosméticos",
        "Gestão de Orçamento",
        "Eventos e Treinamento Comercial",
      ],
    },
    specialties: [
      "Acessibilidade e inclusão operacional",
      "Construção de ambientes acessíveis",
      "Desenvolvimento de oportunidades para pessoas com deficiência",
    ],
  },
  {
    name: "Milca da Silva",
    title: "Consultora Sênior em Diversidade e Inclusão — Coordenadora de Diversidade, Instituto XP Inc",
    education: [
      "20+ anos de carreira com foco em consultoria, mentoria e estratégias de D&I",
    ],
    experience: {
      years: "20+ anos de experiência",
      current: "Coordenadora de Diversidade — Instituto XP Inc",
      previous: [
        "Consultoria e mentoria em D&I",
        "Atuação em empresas como Paraná Banco e Nubank",
      ],
    },
    specialties: [
      "Desenvolvimento de processos e políticas de inclusão",
      "Mentoria e formação de lideranças inclusivas",
      "Inclusão de Pessoas com Deficiência",
    ],
  },
  {
    name: "Thierry Marcondes",
    title: "Especialista em Inovação, Acessibilidade e Futurismo — Founder Evolucar & Ávitus",
    education: [
      "Engenharia Mecânica — Unicamp",
      "Formação e atuação em inovação e acessibilidade",
    ],
    experience: {
      years: "Atuação consolidada em acessibilidade e inovação",
      current: "Professor convidado — Fundação Dom Cabral; Founder — Evolucar & Ávitus",
      previous: [
        "Liderança de Programas de Acessibilidade — Accenture",
        "Líder de Transformação Digital e Indústria 4.0 — L'Oréal",
      ],
    },
    specialties: [
      "Acessibilidade e inovação de produtos e serviços",
      "Futurismo e tendências",
      "Estratégia de negócios com foco em inclusão",
    ],
  },
  {
    name: "Priscila Siqueira",
    title: "Psicóloga e Especialista em Acessibilidade — Fundadora do Vale PCD",
    education: [
      "Psicologia e especialização em acessibilidade e inclusão",
    ],
    experience: {
      years: "Atuação focada em direitos e inclusão de Pessoas com Deficiência",
      current: "Fundadora — Vale PCD",
      previous: [
        "Consultoria de diversidade e inovação — Globo",
        "Mentora de carreira e palestrante (TEDx)",
      ],
    },
    highlights: [
      "TEDx Speaker",
      "Participação em projetos de inclusão e conteúdo acessível na Globo",
    ],
    specialties: [
      "Acessibilidade e inclusão para PcD",
      "Mentoria e desenvolvimento de carreira",
      "Construção de práticas inclusivas",
    ],
  },
  {
    name: "Caio Bogos",
    title: "Empreendedor Social — Fundador da aTip e Mindversa",
    education: [
      "Empreendedorismo e ativismo em neurodiversidade",
    ],
    experience: {
      years: "3+ anos de atuação em neurodiversidade e inclusão",
      current: "Founder — aTip & Mindversa",
      previous: [
        "Desenvolvimento da maior base de talentos autistas do Brasil",
      ],
    },
    highlights: [
      "Forbes Under 30",
      "100 Startups to Watch 2024",
      "Vencedor do Prêmio Líderes de Acessibilidade",
    ],
    specialties: [
      "Neurodiversidade e recrutamento afirmativo",
      "Capacitação e inteligência organizacional",
      "Soluções para inclusão prática",
    ],
  },
  {
    name: "Noah Scheffel",
    title: "Especialista em Recursos Humanos, Cultura Organizacional e DE&I — Consultor",
    education: [
      "Experiência em People Analytics, Talent Acquisition e HRBP",
    ],
    experience: {
      years: "Atuação em RH, cultura e tecnologia",
      current: "Consultor em Recursos Humanos e DE&I",
      previous: [
        "Estruturação de áreas de RH e práticas de People Analytics",
        "Projetos em Employer Branding e programas de mentoria",
      ],
    },
    specialties: [
      "People Analytics e Employer Branding",
      "Programas de mentoria e desenvolvimento de carreira",
      "Estratégias de inclusão orientadas por dados",
    ],
  },
];

export function TeamSection() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Users className="h-8 w-8 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Facilitadores Principais</h3>
        </div>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Nossa equipe é composta por especialistas com vasta experiência em diversidade, inclusão,
          liderança e desenvolvimento organizacional, trazendo expertise de empresas líderes do mercado.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
}
