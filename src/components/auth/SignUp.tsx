import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg'
import 'react-phone-number-input/style.css'
import { TelInput } from '../Input/PhoneInput'

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  return (
    <div className='flex items-center flex-col w-full max-w-[528px] gap-8'>
      <form className='w-full bg-white p-8 flex flex-col gap-6'>
        <div className='flex flex-col gap-3'>
          <label htmlFor='restaurent_name' className='text-base font-semibold text-light-purple'>
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
              <TelInput />
            </div>
            <span className='text-xs leading-4 text-light-purple'>Optional</span>
          </div>
        </div>
        <button className='w-full h-[56px] bg-purple rounded-[48px] text-white text-base font-semibold'>
          Register
        </button>
      </form>
      <div className='flex flex-col gap-4 justify-center'>
        <span className='text-base leading-6 text-light-purple'>
          Already have an account?{' '}
          <Link to='#' className='text-base leading-6 text-purple text-center'>
            Sign In
          </Link>
        </span>
      </div>
    </div>
  )
}

export { SignUp }
