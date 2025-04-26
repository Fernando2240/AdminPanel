function Usuarios() {
    const usuarios = [
      { id: 1, nombre: 'Ana López', email: 'ana@ejemplo.com', rol: 'Administrador' },
      { id: 2, nombre: 'Carlos Rojas', email: 'carlos@ejemplo.com', rol: 'Editor' },
      { id: 3, nombre: 'María Gómez', email: 'maria@ejemplo.com', rol: 'Visor' },
    ]
    
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Usuarios</h1>
        <p className="text-gray-600 mb-6">
          Gestiona los usuarios que tienen acceso al panel administrativo.
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rol
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {usuarios.map(usuario => (
                <tr key={usuario.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{usuario.nombre}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{usuario.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      usuario.rol === 'Administrador' ? 'bg-red-100 text-red-800' : 
                      usuario.rol === 'Editor' ? 'bg-blue-100 text-blue-800' : 
                      'bg-green-100 text-green-800'
                    }`}>
                      {usuario.rol}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">Editar</button>
                    <button className="text-red-600 hover:text-red-900">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  export default Usuarios