import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate = useNavigate()
  
  useEffect(() => {
    // Simular proceso de cierre de sesión
    const timer = setTimeout(() => {
      // Aquí normalmente limpiarías el estado, tokens, etc.
      navigate('/clientes')
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [navigate])
  
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow p-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Cerrando sesión</h1>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      <p className="mt-4 text-gray-600">Redirigiendo al inicio de sesión...</p>
    </div>
  )
}

export default Logout