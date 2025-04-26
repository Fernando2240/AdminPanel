import { Link, useLocation } from 'react-router-dom'
import { UserIcon, TruckIcon, UsersIcon, LogOutIcon } from 'lucide-react'

function Navbar() {
  const location = useLocation()
  
  // Función para determinar si un enlace está activo
  const isActive = (path) => {
    return location.pathname === path || 
           (location.pathname === '/' && path === '/clientes')
  }
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg
                className="h-8 w-8 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-800">AdminPanel</span>
            </Link>
          </div>
          
          {/* Links de navegación */}
          <div className="flex space-x-4">
            <Link 
              to="/clientes"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/clientes') 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 hover:bg-indigo-100 hover:text-indigo-600'
              }`}
            >
              <UserIcon className="mr-1 h-5 w-5" />
              Clientes
            </Link>
            
            <Link 
              to="/proveedor"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/proveedor') 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 hover:bg-indigo-100 hover:text-indigo-600'
              }`}
            >
              <TruckIcon className="mr-1 h-5 w-5" />
              Proveedor
            </Link>
            
            <Link 
              to="/usuarios"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/usuarios') 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 hover:bg-indigo-100 hover:text-indigo-600'
              }`}
            >
              <UsersIcon className="mr-1 h-5 w-5" />
              Usuarios
            </Link>
            
            <Link 
              to="/logout"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/logout') 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 hover:bg-indigo-100 hover:text-indigo-600'
              }`}
            >
              <LogOutIcon className="mr-1 h-5 w-5" />
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar