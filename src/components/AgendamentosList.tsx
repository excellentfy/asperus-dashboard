
import { useAgendamentos } from "@/hooks/useAgendamentos";
import { AgendamentoCard } from "./AgendamentoCard";
import { Loader2 } from "lucide-react";

export const AgendamentosList = () => {
  const { data: agendamentos, isLoading, error } = useAgendamentos();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-muted-foreground">Carregando agendamentos...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-destructive">Erro ao carregar agendamentos</p>
        <p className="text-sm text-muted-foreground mt-1">
          Tente recarregar a página
        </p>
      </div>
    );
  }

  if (!agendamentos || agendamentos.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Nenhum agendamento encontrado</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {agendamentos.map((agendamento) => (
        <AgendamentoCard key={agendamento.id} agendamento={agendamento} />
      ))}
    </div>
  );
};
