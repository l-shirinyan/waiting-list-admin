import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setIsAuthenticated } from '../../redux/auth/authSlice'
import { useSignIn } from '../../redux/queries'

const SignIn = () => {
  const [passwordShown, setPasswordShown] = useState(false)
  const { isAuth } = useAppSelector((state) => state.isAuth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { mutate } = useSignIn({
    onError: (err: object) => {
      console.log(err)
    },
    onSuccess: (data: object) => {
      console.log(data)
    },
  })

  useEffect(() => {
    if (mutate.isSuccess) {
      localStorage.setItem('_token', mutate.data.id)
      dispatch(setIsAuthenticated(true))
      navigate('/')
    }
  }, [mutate])

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  const handleSubmitLogin = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const login = {
      email: (e.target as HTMLFormElement).email.value,
      password: (e.target as HTMLFormElement).password.value,
    }
    mutate.mutate(login)
  }

  return (
    <>
      {isAuth ? (
        <Navigate to={'/'} replace />
      ) : (
        <div className='flex items-center flex-col w-full max-w-[528px] gap-8'>
          <form onSubmit={handleSubmitLogin} className='w-full bg-white p-8 flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
              <span className='text-base font-semibold text-light-purple'>Your e-mail</span>
              <input
                type='email'
                autoComplete='email'
                name='email'
                id='email'
                className='border-[1px] border-grey h-[56px] rounded-[40px] bg-perwinkle-purple outline-none pl-6'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <span className='text-base font-semibold text-light-purple'>Password</span>
              <div className='w-full relative'>
                <input
                  type={passwordShown ? 'text' : 'password'}
                  autoComplete='current-password'
                  name='password'
                  id='password'
                  className='border-[1px] border-grey h-[56px] w-full rounded-[40px] bg-perwinkle-purple outline-none pl-6'
                />
                <EyeIcon onClick={togglePassword} className='absolute right-5 top-5' />
              </div>
            </div>
            <span className='text-sm text-red font-medium'>
              {mutate.isError ? mutate?.error?.response?.data?.detail : ''}
            </span>
            <button className='w-full h-[56px] bg-purple rounded-[48px] text-white text-base font-semibold'>
              Log In
            </button>
          </form>
          <div className='flex flex-col gap-4 justify-center'>
            <Link to='#' className='text-base leading-6 text-purple text-center'>
              Forgot password?
            </Link>
            <span className='text-base leading-6 text-light-purple'>
              {`Don't have an account? `}
              <Link to='/registration' className='text-base leading-6 text-purple text-center'>
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      )}
    </>
  )
}

export { SignIn }
