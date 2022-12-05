import ProfilePicture from '../../assets/images/profile.png'
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg'

const SideBarViewProfile = () => {
  return (
    <div className='pl-2 pr-2 pb-9'>
      <div className='flex flex-shrink-0 rounded-[56px] border-[1px] border-grey p-1 w-[241px]'>
        <a href='#' className='group block flex-shrink-0'>
          <div className='flex items-center gap-1'>
            <div>
              <img
                className='inline-block h-10 w-10 rounded-full'
                src={ProfilePicture}
                alt='ProfilePicture'
              />
            </div>
            <div className='flex gap-3 items-center'>
              <div>
                <p className='text-base text-light-purple leading-4 font-semibold'>Queen Sheb...</p>
                <p className='text-base text-light-purple leading-4 mt-2'>Queen@gmail.com</p>
              </div>
              <LogoutIcon />
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export { SideBarViewProfile }
