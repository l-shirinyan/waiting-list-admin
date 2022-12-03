import { Link, useLocation } from 'react-router-dom'
import { sideBarLinks } from '../../utils/constants'
import logo from '../../assets/images/Logo.png'
import { ReactComponent as Language } from '../../assets/icons/lang.svg'
import { ReactComponent as Down } from '../../assets/icons/down.svg'

const SideBarLinks = () => {
  const location = useLocation()
  return (
    <>
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
                  <Icon fill='#5B5A87' />
                </span>
                <span className='text-[12px] font-medium'>{item.title}</span>
              </div>
              <div className='bg-purple w-[6px] h-[6px] rounded-[50%] dot hidden'></div>
            </Link>
          )
        })}
      </nav>
    </>
  )
}

export { SideBarLinks }
