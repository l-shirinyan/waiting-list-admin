import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginLayout from '../layouts/LoginLayout'
import { Login } from '../pages/auth/Login'
import { Registration } from '../pages/auth/Registration'

const RootRouter = () => {
  const routes = createBrowserRouter([
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
