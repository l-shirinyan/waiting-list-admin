import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/navbar/SideBar'

const MainLayout = () => {
  return (
    <div className='h-screen w-full flex'>
      <Sidebar />
      <div className='w-full'>
        <Outlet />
      </div>
    </div>
  )
}

export { MainLayout }
