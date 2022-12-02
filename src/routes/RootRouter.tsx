import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginLayout from '../layouts/LoginLayout'
import { MainLayout } from '../layouts/MainLayout'
import { Login } from '../pages/auth/Login'
import { Registration } from '../pages/auth/Registration'
import { DataHistory } from '../pages/data-history/DataHistory'
import { CurrentQueue } from '../pages/home/CurrentQueue'

const RootRouter = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <CurrentQueue />,
        },
        {
          path: 'history',
          element: <DataHistory />,
        },
      ],
    },
    {
      children: [
        {
          path: '/registration',
          element: (
            <LoginLayout isLogin={'Registration'}>
              <Registration />
            </LoginLayout>
          ),
        },
        {
          path: '/login',
          element: (
            <LoginLayout signIn isLogin={'Log In with e-mail'}>
              <Login />
            </LoginLayout>
          ),
        },
      ],
    },
  ])

  return <RouterProvider router={routes} />
}
export default RootRouter
