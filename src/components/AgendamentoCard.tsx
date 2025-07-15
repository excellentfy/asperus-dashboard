
import { Tables } from "@/integrations/supabase/types";
import { formatDate, formatTime } from "@/utils/dateFormatters";

interface AgendamentoCardProps {
  agendamento: Tables<"agendamentos_robustos">;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'AGENDADO':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'REAGENDADO':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'CANCELADO':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const AgendamentoCard = ({ agendamento }: AgendamentoCardProps) => {
  return (
    <div className="bg-card rounded-lg border p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-card-foreground">{agendamento.NOME}</h3>
        <span className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(agendamento.STATUS || 'AGENDADO')}`}>
          {agendamento.STATUS}
        </span>
      </div>
      
      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="font-medium">Data:</span>
          <span>{formatDate(agendamento.DATA)}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="font-medium">Hora:</span>
          <span>{formatTime(agendamento.HORA)}</span>
        </div>
        
        {agendamento.PROFISSIONAL && (
          <div className="flex items-center gap-2">
            <span className="font-medium">Profissional:</span>
            <span>{agendamento.PROFISSIONAL}</span>
          </div>
        )}
        
        {agendamento.CONTATO && (
          <div className="flex items-center gap-2">
            <span className="font-medium">Contato:</span>
            <span>{agendamento.CONTATO}</span>
          </div>
        )}
      </div>
    </div>
  );
};
