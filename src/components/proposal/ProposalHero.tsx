import heroImage from "@/assets/hero-inclusive-leadership.jpg";

const ProposalHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 border border-primary/30">
          <span className="text-primary-foreground text-sm font-medium tracking-wide">
            PROPOSTA COMERCIAL
          </span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 max-w-4xl mx-auto leading-tight">
          Programa Estratégico de Inclusão de Pessoas com Deficiência (PcD)
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 font-light">
          Arco Educação × DiverCidade Hub | 2026
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <div className="flex items-center gap-2 px-5 py-3 bg-card/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
            <span className="text-3xl font-bold text-primary-foreground">12</span>
            <span className="text-primary-foreground/70 text-sm">meses</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-card/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
            <span className="text-3xl font-bold text-primary-foreground">6</span>
            <span className="text-primary-foreground/70 text-sm">etapas</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-card/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
            <span className="text-3xl font-bold text-primary-foreground">∞</span>
            <span className="text-primary-foreground/70 text-sm">impacto</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposalHero;
