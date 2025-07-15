
export const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard ASPERUS</h1>
            <p className="text-primary-foreground/80 mt-1">Painel de controle para agendamentos</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-primary-foreground/80">Sistema de Agendamentos</p>
          </div>
        </div>
      </div>
    </header>
  );
};
