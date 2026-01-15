import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ModuleCardProps {
  number: number;
  title: string;
  icon: LucideIcon;
}

const ModuleCard = ({ number, title, icon: Icon }: ModuleCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <span className="text-4xl font-serif font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
            {String(number).padStart(2, '0')}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg font-semibold text-foreground leading-tight">
          {title}
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;
