function Clientes() {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Clientes</h1>
        <p className="text-gray-600">
          Gestiona tus clientes desde este panel. Aquí podrás ver la lista de clientes,
          agregar nuevos, editar existentes o eliminarlos.
        </p>
        
        <div className="mt-6 bg-gray-50 p-4 rounded-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Acciones rápidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
              Agregar cliente
            </button>
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300">
              Exportar lista
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  export default Clientes