import { reservations } from '../../utils/constants'
import { ReactComponent as Visibility } from '../../assets/icons/visibility.svg'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { Pagination } from './Pagination'

const status = {
  Cancelled: 'bg-pink',
  'No Show': 'bg-grey-150',
  Seated: 'bg-green',
}

const HistoryListing = () => {
  return (
    <div className='w-full h-full bg-white'>
      <div className='flex flex-col gap-8'>
        <div className='pl-4 bg-grey-10 pt-4'>
          <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
              <span className='text-xl font-semibold leading-8 text-grey-900 sm:text-2xl'>
                Data History
              </span>
              <button
                type='button'
                className='inline-flex ml-[13px] items-center justify-center rounded-[6px] h-[32px] w-full max-w-[91px] bg-purple-500 text-purple text-sm font-medium shadow-sm'
              >
                512 Records
              </button>
            </div>
            <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'></div>
          </div>
          <div className='mt-3 flex flex-col gap-5 justify-between md:items-center md:flex-row md:gap-0'>
            <div className='relative w-full max-w-[407px]'>
              <input
                type='text'
                name='search'
                id='search'
                className='block w-full px-3 h-10 rounded-full bg-purple-500 text-xs text-semibold border-[1px] border-grey placeholder:text-xs placeholder:font-semibold sm:text-sm'
                placeholder='search for reservation'
              />
              <SearchIcon className='absolute right-3 top-[11px]' />
            </div>
            <div className='flex w-full gap-2 items-center justify-center max-w-[240px]'>
              <h3 className='text-[15px] font-semibold leading-6'>Sort by:</h3>
              <div className='w-full max-w-[80px] h-10 bg-grey-50 flex justify-center items-center rounded-[48px]'>
                <span className='text-[15px] leading-6 font-semibold'>Oldest</span>
              </div>
              <div className='w-full max-w-[80px] h-10  flex justify-center items-center rounded-[48px]'>
                <span className='text-grey-300 text-[15px] leading-6 font-semibold'>Newest</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col h-[calc(100vh-200px)] w-full overflow-y-auto'>
            <div className='inline-block min-w-full py-2 align-middle pr-4'>
              <div className='relative'>
                <table className='min-w-full border-separate border-spacing-y-2 table-fixed'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='whitespace-nowrap min-w-[12rem] py-3.5 text-left text-light-purple text-[13px] leading-[14px] font-semibold'
                      >
                        Reservation #
                      </th>
                      <th
                        scope='col'
                        className='whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-light-purple lg:px-0 2xl:px-3'
                      >
                        Guest Name
                      </th>
                      <th
                        scope='col'
                        className='whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-light-purple lg:px-0 2xl:px-3'
                      >
                        Phone Number
                      </th>
                      <th
                        scope='col'
                        className='whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-light-purple lg:px-0 2xl:px-3'
                      >
                        Queue Number
                      </th>
                      <th
                        scope='col'
                        className='whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-light-purple lg:px-0 2xl:px-3'
                      >
                        Num. Guest
                      </th>
                      <th
                        scope='col'
                        className='whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-light-purple lg:px-0 2xl:px-3'
                      >
                        Booking Status
                      </th>
                      <th
                        scope='col'
                        className='whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-light-purple lg:px-0 2xl:px-3'
                      >
                        Action view
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y bg-white'>
                    {reservations.map((reservation, idx) => {
                      const color = status[reservation.bookingStatus as keyof typeof status]
                      return (
                        <tr key={idx} className='border-[1px] border-grey bg-white'>
                          <td className='whitespace-nowrap border-y-[1px] border-l-[1px] rounded-l-lg border-grey pl-3 py-4 text-sm text-blue font-semibold leading-4'>
                            {reservation.reservationNumber}
                          </td>
                          <td className='whitespace-nowrap border-y-[1px] border-grey px-3 py-4 text-sm text-blue font-semibold leading-4'>
                            {reservation.guestName}
                          </td>
                          <td className='whitespace-nowrap border-y-[1px] border-grey px-3 py-4 text-sm text-blue font-semibold leading-4'>
                            {reservation.phoneNamber}
                          </td>
                          <td className='whitespace-nowrap border-y-[1px] border-grey px-3 py-4 text-sm text-blue font-semibold leading-4'>
                            <div className='bg-yellow-100 w-10 h-7 rounded-[34px] flex justify-center items-center'>
                              {reservation.queueNumber}
                            </div>
                          </td>
                          <td className='whitespace-nowrap border-y-[1px] border-grey px-3 py-4 text-sm text-blue font-semibold leading-4'>
                            {reservation.guests}
                          </td>
                          <td className='whitespace-nowrap border-y-[1px] border-grey px-3 py-4 text-sm text-blue font-semibold leading-4'>
                            <div className='bg-perwinkle-purple h-[32px] py-1 w-max px-3 border-[1px] border-grey rounded-[84px] flex gap-[6px] items-center'>
                              <div className={`${color} w-[9px] h-[9px] rounded-[50%]`}></div>
                              <span>{reservation.bookingStatus}</span>
                            </div>
                          </td>
                          <td className='whitespace-nowrap border-y-[1px] border-grey border-r-[1px] rounded-r-lg px-3 pt-4 pb-[22px] text-sm text-blue font-semibold leading-4 flex gap-2'>
                            <div className='bg-grey-100 w-7 h-7 rounded-2xl flex justify-center items-center'>
                              <Visibility />
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}

export { HistoryListing }
