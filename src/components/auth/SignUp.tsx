import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg'
import 'react-phone-number-input/style.css'
import { TelInput } from '../Input/PhoneInput'
import { useSignUp } from '../../redux/queries'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setIdentity_id, setIsAuthenticated } from '../../redux/auth/authSlice'
import { IDetail } from '../../redux/model'

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false)
  const { isAuth } = useAppSelector((state) => state.isAuth)
  const [inputValue, setInputValue] = useState('')
  const [err, setErr] = useState<string>()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { mutate } = useSignUp({
    onError: (err: object) => {
      console.log(err)
    },
    onSuccess: (data: object) => {
      console.log(data)
    },
  })

  useEffect(() => {
    if (mutate.isSuccess) {
      localStorage.setItem('_token', mutate.data?.auth)
      localStorage.setItem('identity_id', mutate.data?.identity_id)
      dispatch(setIsAuthenticated(true))
      dispatch(setIdentity_id(mutate.data?.identity_id))
      navigate('/')
    }
    if (mutate.isError) {
      const error = (mutate?.error?.response?.data?.detail[0] as IDetail)?.msg
      if (error) {
        setErr(error)
      } else {
        setErr(mutate?.error?.response?.data?.detail as string)
      }
    }
  }, [mutate])

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const new_user = {
      sign: {
        email: form.email.value,
        password: form.password.value,
      },
      resturant: {
        name: form.restaurent_name.value,
      },
    }
    mutate.mutate(new_user)
  }
  return (
    <>
      {isAuth ? (
        <Navigate to={'/'} replace />
      ) : (
        <div className='flex items-center flex-col w-full max-w-[528px] gap-8'>
          <form onSubmit={handleSubmit} className='w-full bg-white p-8 flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
              <label
                htmlFor='restaurent_name'
                className='text-base font-semibold text-light-purple'
              >
                Restaurent Name
              </label>
              <input
                type='text'
                autoComplete='text'
                id='restaurent_name'
                name='restaurent_name'
                className='border-[1px] border-grey h-[56px] rounded-[40px] bg-perwinkle-purple outline-none pl-6'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='email' className='text-base font-semibold text-light-purple'>
                Your e-mail
              </label>
              <input
                type='email'
                autoComplete='email'
                id='email'
                name='email'
                className='border-[1px] border-grey h-[56px] rounded-[40px] bg-perwinkle-purple outline-none pl-6'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='password' className='text-base font-semibold text-light-purple'>
                Password
              </label>
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
              <div>
                <label htmlFor='phone-number' className='text-base font-semibold text-light-purple'>
                  Mobile number
                </label>
                <div className='w-full relative'>
                  <TelInput inputValue={inputValue} setInputValue={setInputValue} />
                </div>
                <span className='text-xs leading-4 text-light-purple'>Optional</span>
              </div>
            </div>
            <span className='text-sm text-red font-medium'>{err}</span>
            <button className='w-full h-[56px] bg-purple rounded-[48px] text-white text-base font-semibold'>
              Register
            </button>
          </form>
          <div className='flex flex-col gap-4 justify-center'>
            <span className='text-base leading-6 text-light-purple'>
              Already have an account?{' '}
              <Link to='/login' className='text-base leading-6 text-purple text-center'>
                Sign In
              </Link>
            </span>
          </div>
        </div>
      )}
    </>
  )
}

export { SignUp }
