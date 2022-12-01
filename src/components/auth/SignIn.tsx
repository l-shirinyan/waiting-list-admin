import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg'

const SignIn = () => {
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  return (
    <div className='flex items-center flex-col w-full max-w-[528px] gap-8'>
      <form className='w-full bg-white p-8 flex flex-col gap-6'>
        <div className='flex flex-col gap-3'>
          <span className='text-base font-semibold text-grey-200'>Your e-mail</span>
          <input
            type='email'
            autoComplete='email'
            className='border-[1px] border-grey h-[56px] rounded-[40px] bg-perwinkle-purple outline-none pl-6'
          />
        </div>
        <div className='flex flex-col gap-3'>
          <span className='text-base font-semibold text-grey-200'>Password</span>
          <div className='w-full relative'>
            <input
              type={passwordShown ? 'text' : 'password'}
              autoComplete='current-password'
              name='password'
              className='border-[1px] border-grey h-[56px] w-full rounded-[40px] bg-perwinkle-purple outline-none pl-6'
            />
            <EyeIcon onClick={togglePassword} className='absolute right-5 top-5' />
          </div>
        </div>
        <button className='w-full h-[56px] bg-purple rounded-[48px] text-white text-base font-semibold'>
          Log In
        </button>
      </form>
      <div className='flex flex-col gap-4 justify-center'>
        <Link to='#' className='text-base leading-6 text-purple text-center'>
          Forgot password?
        </Link>
        <span className='text-base leading-6 text-grey-200'>
          {`Don't have an account? `}
          <Link to='#' className='text-base leading-6 text-purple text-center'>
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  )
}

export { SignIn }
