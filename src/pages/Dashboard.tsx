
import { Header } from "@/components/Header";
import { AgendamentosList } from "@/components/AgendamentosList";

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Agendamentos
          </h2>
          <p className="text-muted-foreground">
            Visualize e gerencie todos os agendamentos
          </p>
        </div>
        <AgendamentosList />
      </main>
    </div>
  );
};
