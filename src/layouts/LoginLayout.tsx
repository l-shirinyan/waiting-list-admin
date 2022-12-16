import { ReactNode } from 'react'
import { ReactComponent as ArrowLeft } from '../../src/assets/icons/arrow-left.svg'
import { ReactComponent as Language } from '../../src/assets/icons/lang.svg'
import { ReactComponent as Down } from '../../src/assets/icons/down.svg'
import { ReactComponent as Whatsapp } from '../../src/assets/icons/whatsapp.svg'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'

type Prop = {
  children: ReactNode
  isLogin: string
  signIn?: boolean
}

const LoginLayout = ({ children, isLogin, signIn }: Prop) => {
  const navigate = useNavigate()
  const { isAuth } = useAppSelector((state) => state.isAuth)
  
  return (
    <>
      {isAuth ? (
        <Navigate to={'/'} replace />
      ) : (
        <div className='flex flex-col bg-grey-100 w-full h-screen pt-12 px-8 pb-[56px]'>
          <div className='flex justify-between items-center w-full max-w-[528px] mx-auto mb-4'>
            <div className='flex gap-[13px] items-center w-full'>
              {signIn && <ArrowLeft onClick={() => navigate(-1)} />}
              <h3 className='text-blue font-semibold text-[32px] leading-10'>{isLogin}</h3>
            </div>
            <div className='flex items-center gap-[5px]'>
              <Language />
              <span className='text-xs leading-4 text-light-purple'>English</span>
              <Down />
            </div>
          </div>
          {children}
          <div className='flex items-end justify-center mt-auto'>
            <div className='flex items-center gap-2'>
              <span className='text-purple '>WhatsApp helpline</span>
              <Whatsapp />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LoginLayout
