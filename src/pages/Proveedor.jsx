function Proveedor() {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Proveedor</h1>
        <p className="text-gray-600">
          Administra tus proveedores. Revisa los servicios contratados, gestiona pagos
          y mantén actualizada la información de contacto.
        </p>
        
        <div className="mt-6 bg-gray-50 p-4 rounded-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Estadísticas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded shadow">
              <p className="text-sm text-gray-500">Total proveedores</p>
              <p className="text-2xl font-bold">24</p>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <p className="text-sm text-gray-500">Activos</p>
              <p className="text-2xl font-bold">18</p>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <p className="text-sm text-gray-500">Pendientes de pago</p>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Proveedor