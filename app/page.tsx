export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Sistema de Gestão de Credenciamento
      </h1>

      <p className="mb-6">
        Plataforma de acompanhamento comercial Vegas 🚀
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Credenciamentos</h2>
          <p>120 no mês</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Comissões</h2>
          <p>R$ 35.000</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Empresas</h2>
          <p>18 ativas</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Ativação</h2>
          <p>72%</p>
        </div>
      </div>
    </div>
  );
}
