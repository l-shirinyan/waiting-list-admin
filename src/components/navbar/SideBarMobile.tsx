import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/images/Logo.png'
import { ReactComponent as Language } from '../../assets/icons/lang.svg'
import { ReactComponent as Down } from '../../assets/icons/down.svg'
import { Link } from 'react-router-dom'
import { sideBarLinks } from '../../utils/constants'
import { SideBarViewProfile } from './SideBarViewProfile'

interface ISideBarMobile {
  sidebarOpen: boolean
  setSidebarOpen: (sidebarOpen: boolean) => void
}

const SideBarMobile = ({ sidebarOpen, setSidebarOpen }: ISideBarMobile) => {
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog as='div' className='relative z-40 xl:hidden' onClose={setSidebarOpen}>
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
            <Dialog.Panel className='flex flex-1 max-w-[263px] flex-col bg-white min-w-[200px] w-full h-full pt-8 fixed sm:max-w-[280px]'>
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
              <div className='h-0 flex-1 pt-5 pb-4 pl-10 pr-[25px]'>
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
              <SideBarViewProfile />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export { SideBarMobile }
