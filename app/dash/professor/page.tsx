export default function Dashboard() {
    return (
      <div className="p-6 space-y-6">
        {/* Adicionar Projeto */}
        <button className="w-full p-4 bg-[#00B8A5] text-white font-bold rounded-lg shadow hover:bg-[#009F95] transition">
          + Adicionar Projeto
        </button>
  
        {/* Indicadores de Desempenho */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#333432] text-white rounded-lg shadow">
            <h3 className="text-sm font-medium">Quantidade de Alunos</h3>
            <p className="text-2xl font-bold">150</p>
          </div>
          <div className="p-4 bg-[#333432] text-white rounded-lg shadow">
            <h3 className="text-sm font-medium">Aulas Realizadas</h3>
            <p className="text-2xl font-bold">20</p>
          </div>
          <div className="p-4 bg-[#333432] text-white rounded-lg shadow">
            <h3 className="text-sm font-medium">Projetos Ativos</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
          <div className="p-4 bg-[#333432] text-white rounded-lg shadow">
            <h3 className="text-sm font-medium">Avaliação Média</h3>
            <p className="text-2xl font-bold">4.8</p>
          </div>
        </div>
  
        {/* Meus Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-[#222221] rounded-lg overflow-hidden shadow">
            <img
              src="https://via.placeholder.com/300x150"
              alt="Imagem do Projeto"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-white font-bold">Nome do Projeto</h3>
              <p className="text-sm text-gray-400">Descrição breve do projeto</p>
            </div>
          </div>
          {/* Repetir cards aqui */}
        </div>
      </div>
    );
  }
  
  