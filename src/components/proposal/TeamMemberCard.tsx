import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award, Star } from "lucide-react";

interface TeamMemberProps {
  name: string;
  title: string;
  summary?: string;
  education: string[];
  experience: {
    years: string;
    current: string;
    previous: string[];
  };
  certifications?: string[];
  specialties: string[];
  highlights?: string[];
  teaching?: string[];
}

export function TeamMemberCard({
  name,
  title,
  summary,
  education,
  experience,
  certifications,
  specialties,
  highlights,
  teaching,
}: TeamMemberProps) {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 pb-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold text-foreground">{name}</h3>
          <p className="text-primary font-medium">{title}</p>
          {summary && (
            <p className="text-muted-foreground text-sm mt-2">{summary}</p>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        {/* Experience */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-primary">
            <Briefcase className="h-5 w-5" />
            <h4 className="font-semibold">Experiência Profissional</h4>
          </div>
          <div className="space-y-2 text-sm">
            <Badge variant="secondary" className="mb-2">{experience.years}</Badge>
            <p className="font-medium text-foreground">{experience.current}</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
              {experience.previous.slice(0, 5).map((exp, index) => (
                <li key={index} className="text-xs">{exp}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-primary">
            <GraduationCap className="h-5 w-5" />
            <h4 className="font-semibold">Formação Acadêmica</h4>
          </div>
          <ul className="list-disc list-inside text-muted-foreground text-xs space-y-1 ml-2">
            {education.slice(0, 4).map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Award className="h-5 w-5" />
              <h4 className="font-semibold">Certificações</h4>
            </div>
            <div className="flex flex-wrap gap-1">
              {certifications.slice(0, 6).map((cert, index) => (
                <Badge key={index} variant="outline" className="text-xs">{cert}</Badge>
              ))}
            </div>
          </div>
        )}

        {/* Teaching */}
        {teaching && teaching.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <GraduationCap className="h-5 w-5" />
              <h4 className="font-semibold">Docência</h4>
            </div>
            <ul className="list-disc list-inside text-muted-foreground text-xs space-y-1 ml-2">
              {teaching.map((t, index) => (
                <li key={index}>{t}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Star className="h-5 w-5" />
              <h4 className="font-semibold">Destaques</h4>
            </div>
            <ul className="list-disc list-inside text-muted-foreground text-xs space-y-1 ml-2">
              {highlights.map((h, index) => (
                <li key={index}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Specialties */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-primary">
            <Star className="h-5 w-5" />
            <h4 className="font-semibold">Especialidades</h4>
          </div>
          <div className="flex flex-wrap gap-1">
            {specialties.map((specialty, index) => (
              <Badge key={index} className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
