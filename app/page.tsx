export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h1 className="text-xl font-bold mb-8">Vegas Card</h1>

        <nav className="space-y-3">
          <p>Dashboard</p>
          <p>Empresas</p>
          <p>Solicitações</p>
          <p>Credenciamentos</p>
          <p>Movimentações</p>
          <p>Consultores</p>
        </nav>
      </aside>

      <section className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-2">
          Sistema de Gestão de Credenciamento
        </h2>

        <p className="text-gray-600 mb-8">
          Acompanhamento comercial, performance e ativação da rede credenciada.
        </p>

        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">Credenciamentos</p>
            <strong className="text-2xl">120</strong>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">Comissões</p>
            <strong className="text-2xl">R$ 35.000</strong>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">Empresas Ativas</p>
            <strong className="text-2xl">18</strong>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">Ativação</p>
            <strong className="text-2xl">72%</strong>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-4">Credenciamentos Recentes</h3>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Estabelecimento</th>
                <th>Cidade</th>
                <th>Consultor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">Mercado Central</td>
                <td>Americana</td>
                <td>João</td>
                <td>Ativado</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Farmácia Popular</td>
                <td>Campinas</td>
                <td>Maria</td>
                <td>Pendente</td>
              </tr>
              <tr>
                <td className="py-3">Restaurante Bom Prato</td>
                <td>Santa Bárbara</td>
                <td>Carlos</td>
                <td>Sem Movimento</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
