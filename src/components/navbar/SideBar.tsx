import { useState } from 'react'

import { useLocation, Link } from 'react-router-dom'

import logo from '../../assets/images/Logo.png'
import { sideBarLinks } from '../../utils/constants'
import { ReactComponent as Language } from '../../assets/icons/lang.svg'
import { ReactComponent as Down } from '../../assets/icons/down.svg'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { SideBarViewProfile } from './SideBarViewProfile'
import { SideBarMobile } from './SideBarMobile'

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <div>
        <SideBarMobile sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className='hidden max-w-[263px] min-w-[200px] w-full h-full pt-8 fixed sm:max-w-[280px] xl:fixed xl:inset-y-0 xl:flex xl:w-64 xl:flex-col'>
          <div className='flex min-h-0 flex-1 flex-col bg-white pl-10 pr-[25px]'>
            <div className='flex flex-1 flex-col pt-5 pb-4'>
              <div className='flex justify-between items-center'>
                <img src={logo} alt='logo' className='h-8 object-cover' />
                <div className='flex items-center gap-[5px]'>
                  <Language />
                  <span className='text-xs leading-4 text-light-purple'>En</span>
                  <Down />
                </div>
              </div>
              <nav className='mt-14 flex flex-col gap-8 pr-1'>
                {sideBarLinks.map(({ Icon, ...item }) => {
                  const clone = { ...item }
                  if (clone.link) {
                    clone.link = `${item.link}`
                  }
                  return (
                    <Link
                      key={item.title}
                      to={item.link}
                      className={`flex items-center text-base text-light-purple leading-4 justify-between ${
                        clone.link
                          ? location.pathname.includes(`/${clone.link}`)
                            ? 'activeLink'
                            : ''
                          : location.pathname === `/${clone.link}`
                          ? 'activeLink'
                          : ''
                      }`}
                    >
                      <div className='flex items-center'>
                        <span className='mr-3'>
                          <Icon />
                        </span>
                        <span className='text-[12px] font-medium'>{item.title}</span>
                      </div>
                      <div className='bg-purple w-[6px] h-[6px] rounded-[50%] dot hidden'></div>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
          <SideBarViewProfile />
        </div>
      </div>
      <div className='flex flex-1 flex-col absolute left-[50px] xl:static xl:left-auto xl:pl-64'>
        <div className='sticky top-0 z-10 pl-1 pt-1 sm:pl-3 sm:pt-3 xl:hidden'>
          <button
            type='button'
            className='-ml-9 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none sm:-ml-10'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
      </div>
    </>
  )
}

export { Sidebar }
