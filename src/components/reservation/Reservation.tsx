import { Toggle } from './Toggle'
import { ReactComponent as PlusIcon } from '../../assets/icons/add.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'
import { ReactComponent as BackUpIcon } from '../../assets/icons/backup.svg'
import { ReactComponent as SitIcon } from '../../assets/icons/airline_seat_recline_normal.svg'
import { useState } from 'react'

const Reservation = () => {
  const [addNewArea, setAddNewArea] = useState<boolean>(false)
  return (
    <div className='pt-[55px] flex flex-col gap-6 pl-5 pr-5 xl:pl-[43px] xl:pr-[61px]'>
      <div className='flex justify-between'>
        <h3 className='leading-10 font-semibold text-blue text-[32px]'>Reservation settings</h3>
      </div>
      <div className='w-full h-full bg-white p-6 rounded-xl'>
        <div className='flex flex-col gap-4'>
          <span className='font-semibold text-[24px] text-dark-grey leading-[30px]'>
            Waitinglist Settings
          </span>
          <div className='flex flex-col gap-1 border-b-[1px] border-light-blue pb-6'>
            <span className='text-xl font-semibold leading-6 text-purple-300'>
              Waiting List Avialability
            </span>
            <div className='flex justify-between max-w-[508px] gap-[92px] items-end'>
              <span className='text-light-purple text-base leading-5 font-semibold max-w-[375px]'>
                Set restaurant availability if your restaurant is busy
              </span>
              <Toggle />
            </div>
          </div>
          <div className='flex flex-col border-b-[1px] border-light-blue py-6'>
            <span className='text-xl font-semibold leading-6 text-purple-300'>
              Seating View Area
            </span>
            <div
              className={`${
                addNewArea ? 'max-w-[1030px] ' : 'max-w-[637px]'
              } flex justify-between flex-col gap-3 lg:items-end lg:flex-row lg:gap-0`}
            >
              <span className='text-light-purple text-base leading-5 font-semibold max-w-[400px]'>
                Manage available areas, that could be selected by guests
              </span>
              <div className='flex gap-2'>
                {addNewArea && (
                  <>
                    <div className='w-[175px] h-[68px] bg-light-grey border-[1px] border-grey-300 rounded-lg gap-3 flex justify-center items-center'>
                      <span className='text-base leading-5 font-semibold text-purple'>
                        Indoor View{' '}
                      </span>
                      <Toggle />
                    </div>
                    <div className='w-[188px] h-[68px] flex justify-center items-center border-grey-400 border-[1px] rounded-lg gap-[10px]'>
                      <SitIcon />
                      <input
                        type='text'
                        className='w-[146px] h-9 placeholder:text-[#9292A6] placeholder:text-[13px] placeholder:font-semibold border-[1px] border-grey-500 rounded-lg'
                        placeholder='type a view name'
                      />
                    </div>
                  </>
                )}
                <div
                  className='flex items-center gap-[13px] ml-4'
                  onClick={() => setAddNewArea(true)}
                >
                  <PlusIcon />
                  <span className='text-xl leading-5 font-semibold text-purple'>Add New Area</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1 border-b-[1px] border-light-blue py-6'>
            <span className='text-xl font-semibold leading-6 text-purple-300'>
              Waiting List Terms & Condition
            </span>
            <div className='flex flex-col gap-3 justify-between max-w-[1067px] items-stretch lg:gap-[105px] lg:flex-row'>
              <span className='text-light-purple text-base leading-5 font-semibold max-w-[360px]'>
                Add your own terms and conditions that will appear to your guests
              </span>
              <div className='flex flex-col'>
                <span className='text-base leading-5 font-semibold text-light-grey max-w-[600px] pb-[11px]'>
                  50% of new customers explore products because the author sharing the work on the
                  social media network. Gain your earnings right now! 🔥
                </span>
                <button className='flex gap-[8px] justify-center border-[1px] border-grey-50 items-center rounded-[72px]'>
                  <EditIcon />
                  <span className=' font-semibold text-[15px] text-grey-900 leading-6 py-[8px]'>
                    Edit Default Terms
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1 border-b-[1px] border-light-blue py-6'>
            <span className='text-xl font-semibold leading-6 text-purple-300'>
              Seats Availability
            </span>
            <div className='flex justify-between items-center'>
              <div className='flex gap-3 flex-col justify-between w-full max-w-[912px] lg:flex-row lg:gap-[85px]'>
                <span className='text-light-purple text-base leading-5 font-semibold w-full max-w-[343px]'>
                  Set how many bookings could be done on your waiting
                </span>
                <div className='flex flex-col gap-3 sm:gap-2 sm:flex-row'>
                  <div className='flex flex-col border-[1px] border-grey-200 rounded-xl py-3 w-full h-16 pl-4 pt-3 pb-10'>
                    <span className='font-medium text-xs text-light-grey leading-3'>
                      Max number of Wait list booking
                    </span>
                    <span className='font-semibold text-[15px] leading-6'>30 Guest</span>
                  </div>
                  <div className='flex flex-col border-[1px] border-grey-200 rounded-xl py-3 w-full h-16 pl-4 pt-3 pb-10'>
                    <span className='font-medium text-xs text-light-grey leading-3'>
                      Max number of guests per booking
                    </span>
                    <span className='font-semibold text-[15px] leading-6'>6 Guests</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-full bg-white rounded-xl flex flex-col gap-3 justify-between py-4 px-6 sm:items-center sm:gap-2 sm:flex-row'>
        <div className='flex flex-col gap-2'>
          <span className='text-[24px] font-semibold leading-[30px] text-dark-grey'>
            Restaurant Photo
          </span>
          <span className='text-base leading-5 text-light-purple'>
            Upload restaurant logo to present it in reservation page
          </span>
        </div>
        <div className='flex justify-center items-center rounded-[50%] h-[115px] w-[115px] bg-grey-150 self-center relative'>
          <input type='file' id='avatar' name='avatar' accept='image/png, image/jpeg' className='opacity-0 w-full h-full absolute'/>
          <BackUpIcon />
        </div>
      </div>
      <div className='flex w-full justify-end'>
        <button className='bg-purple w-[217px] h-[56px] text-4 leading-4 font-semibold text-white rounded-[48px]'>
          Save Changes
        </button>
      </div>
    </div>
  )
}

export { Reservation }
