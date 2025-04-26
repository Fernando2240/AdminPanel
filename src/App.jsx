import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Clientes from './pages/Clientes'
import Proveedor from './pages/Proveedor'
import Usuarios from './pages/Usuarios'
import Logout from './pages/Logout'

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Clientes />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="proveedor" element={<Proveedor />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App