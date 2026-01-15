const sections = [
  { id: "resumo", label: "Resumo Executivo" },
  { id: "contexto", label: "Contexto" },
  { id: "objetivos", label: "Objetivos SMART" },
  { id: "escopo", label: "Escopo" },
  { id: "programa", label: "Programa" },
  { id: "cronograma", label: "Cronograma" },
  { id: "investimento", label: "Investimento" },
  { id: "metricas", label: "Métricas" },
  { id: "equipe", label: "Equipe" },
  { id: "proximos-passos", label: "Próximos Passos" },
];

const TableOfContents = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-6 py-4 overflow-x-auto scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TableOfContents;
