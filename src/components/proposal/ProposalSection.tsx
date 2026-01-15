import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ProposalSectionProps {
  id?: string;
  number?: string;
  title: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "muted";
}

const ProposalSection = ({ 
  id, 
  number, 
  title, 
  children, 
  className,
  variant = "default"
}: ProposalSectionProps) => {
  const bgClasses = {
    default: "bg-background",
    accent: "bg-accent",
    muted: "bg-card",
  };

  return (
    <section 
      id={id} 
      className={cn(
        "py-16 md:py-20",
        bgClasses[variant],
        className
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-8">
          {number && (
            <span className="text-6xl font-serif font-bold text-primary/20">
              {number}
            </span>
          )}
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default ProposalSection;
