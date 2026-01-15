import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const objectives = [
  {
    objetivo: "Aumentar repertório prático de liderança inclusiva",
    metrica: "% de participantes que declaram saber ao menos 3 ferramentas aplicáveis",
    meta: "≥85% até 2 semanas após programa",
    responsavel: "DiverCidade / Sponsor do cliente",
  },
  {
    objetivo: "Fortalecer tomada de decisão consciente",
    metrica: "% de participantes capazes de identificar vieses relevantes em estudos de caso",
    meta: "≥75% imediatamente após o programa",
    responsavel: "DiverCidade",
  },
  {
    objetivo: "Sustentar cultura inclusiva no dia a dia",
    metrica: "% de líderes com plano de ação individual implementado",
    meta: "≥70% em 6 semanas pós-programa",
    responsavel: "DiverCidade / RH do Instituto",
  },
];

const ObjectivesTable = () => {
  return (
    <div className="overflow-x-auto rounded-lg border border-border shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-primary/5">
            <TableHead className="font-semibold text-foreground">Objetivo</TableHead>
            <TableHead className="font-semibold text-foreground">Métrica</TableHead>
            <TableHead className="font-semibold text-foreground">Meta (Prazo)</TableHead>
            <TableHead className="font-semibold text-foreground">Responsável</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {objectives.map((obj, index) => (
            <TableRow key={index} className="hover:bg-accent/50 transition-colors">
              <TableCell className="font-medium">{obj.objetivo}</TableCell>
              <TableCell className="text-muted-foreground">{obj.metrica}</TableCell>
              <TableCell>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {obj.meta}
                </span>
              </TableCell>
              <TableCell className="text-muted-foreground">{obj.responsavel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ObjectivesTable;
