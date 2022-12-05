import { useState } from 'react'

import { Bars3Icon } from '@heroicons/react/24/outline'
import { SideBarViewProfile } from './SideBarViewProfile'
import { SideBarMobile } from './SideBarMobile'
import { SideBarLinks } from './SideBarLinks'

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <SideBarMobile sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className='hidden max-w-[270px] min-w-[200px] w-full h-full pt-8 fixed sm:max-w-[280px] xl:fixed xl:inset-y-0 xl:flex xl:w-64 xl:flex-col'>
        <div className='flex min-h-0 flex-1 flex-col bg-white pl-10 pr-[25px]'>
          <div className='flex flex-1 flex-col pt-5 pb-4'>
            <SideBarLinks />
          </div>
        </div>
        <SideBarViewProfile />
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
