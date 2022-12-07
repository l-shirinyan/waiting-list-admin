import { Navigate, Outlet } from 'react-router-dom'
import { Sidebar } from '../components/navbar/SideBar'
import { useAppSelector } from '../hooks/redux'

const MainLayout = () => {
  const { isAuth } = useAppSelector((state) => state.isAuth)

  return (
    <>
      {!isAuth ? (
        <Navigate to={'login'} />
      ) : (
        <div className='h-screen w-full flex'>
          <Sidebar />
          <div className='w-full'>
            <Outlet />
          </div>
        </div>
      )}
    </>
  )
}

export { MainLayout }
