import { Mail, Phone, Globe, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-serif font-bold mb-2">DiverCidade Hub</h3>
          <p className="text-primary-foreground/70">
            Diversidade, Comunicação e Desenvolvimento Humano
          </p>
        </div>
        
        {/* Website */}
        <div className="flex justify-center mb-6">
          <a 
            href="https://www.divercidade.net" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-foreground hover:text-primary transition-colors text-lg font-medium"
          >
            <Globe className="w-5 h-5" />
            <span>www.divercidade.net</span>
          </a>
        </div>

        {/* Emails */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="mailto:contato@divercidade.net" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <Mail className="w-4 h-4" />
            <span>contato@divercidade.net</span>
          </a>
          <a href="mailto:tamara@divercidade.net" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <Mail className="w-4 h-4" />
            <span>tamara@divercidade.net</span>
          </a>
          <a href="mailto:Pedro@divercidade.net" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <Mail className="w-4 h-4" />
            <span>Pedro@divercidade.net</span>
          </a>
        </div>

        {/* Phones */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="tel:+5519920010580" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <Phone className="w-4 h-4" />
            <span>+55 19 920 010 580</span>
          </a>
          <a href="tel:+5519989797970" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <Phone className="w-4 h-4" />
            <span>+55 19 98979-7970</span>
          </a>
          <a href="tel:+5519998837282" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <Phone className="w-4 h-4" />
            <span>+55 19 99883-7282</span>
          </a>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://www.instagram.com/divercidade_hub" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>@divercidade_hub</span>
          </a>
          <a 
            href="https://www.linkedin.com/company/divercidade" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>divercidade</span>
          </a>
        </div>
        
        <div className="text-center text-primary-foreground/50 text-sm">
          <p>© 2025 DiverCidade Hub. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
