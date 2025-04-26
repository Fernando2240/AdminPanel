import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
    return (
      <div className="min-h-screen bg-gray-100 w-screen overflow-x-hidden">
        <Navbar />
        <main className="w-screen px-4 py-8">
          <Outlet />
        </main>
      </div>
    )
  }

export default Layout