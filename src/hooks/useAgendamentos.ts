
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";

export const useAgendamentos = () => {
  return useQuery({
    queryKey: ["agendamentos"],
    queryFn: async (): Promise<Tables<"agendamentos_robustos">[]> => {
      const { data, error } = await supabase
        .from("agendamentos_robustos")
        .select("*")
        .order("DATA", { ascending: true })
        .order("HORA", { ascending: true });

      if (error) {
        console.error("Erro ao carregar agendamentos:", error);
        throw error;
      }

      return data || [];
    },
  });
};
