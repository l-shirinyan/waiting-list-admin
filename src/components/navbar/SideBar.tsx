import { useLocation, Link } from 'react-router-dom'

import logo from '../../assets/images/Logo.png'
import { sideBarLinks } from '../../utils/constants'
import { ReactComponent as Language } from '../../assets/icons/lang.svg'
import { ReactComponent as Down } from '../../assets/icons/down.svg'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <div className=''>
        {/* <div className='flex justify-between items-center'>
          <img src={logo} alt='logo' className='h-8 object-cover' />
          <div className='flex items-center gap-[5px]'>
            <Language />
            <span className='text-xs leading-4 text-light-purple'>En</span>
            <Down />
          </div>
        </div>
        <div className='mt-14 flex flex-col gap-8 pr-1'>
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
        </div>
      </div>
      <div> */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as='div' className='relative z-40 lg:hidden' onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>

            <div className='fixed inset-0 z-40 flex'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='flex flex-1 flex-col bg-white max-w-[280px] min-w-[200px] w-full h-full pl-10 pr-[25px] pt-8 fixed'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute top-0 right-0 -mr-12 pt-2'>
                      <button
                        type='button'
                        className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className='sr-only'>Close sidebar</span>
                        <XMarkIcon className='h-6 w-6 text-white' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='h-0 flex-1 pt-5 pb-4'>
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <div className='hidden max-w-[280px] min-w-[200px] w-full h-full pl-10 pr-[25px] pt-8 fixed lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col'>
          <div className='flex min-h-0 flex-1 flex-col bg-white'>
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
        </div>
      </div>
      <div className='flex flex-1 flex-col absolute left-[50px] lg:static lg:left-auto lg:pl-64'>
        <div className='sticky top-0 z-10pl-1 pt-1 sm:pl-3 sm:pt-3 lg:hidden'>
          <button
            type='button'
            className='-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
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
