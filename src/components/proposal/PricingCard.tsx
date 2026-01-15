import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  perUnit?: string;
  features: string[];
  highlighted?: boolean;
}

const PricingCard = ({ title, price, perUnit, features, highlighted = false }: PricingCardProps) => {
  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
      highlighted 
        ? "border-primary bg-gradient-to-br from-primary/5 to-accent scale-105" 
        : "border-border bg-card hover:border-primary/30"
    }`}>
      {highlighted && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-bl-lg">
          Recomendado
        </div>
      )}
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold text-primary">{price}</span>
          {perUnit && (
            <span className="text-muted-foreground text-sm ml-1">{perUnit}</span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
