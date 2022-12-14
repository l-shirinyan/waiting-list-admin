import { ReactComponent as Visibility } from '../../assets/icons/visibility.svg'
import { useAppSelector } from '../../hooks/redux'

interface IHistorytableProps {
  setDetail: (detail: number) => void
  setOpen: (open: boolean) => void
}
const status = {
  CANCELLED: 'bg-pink',
  NO_SHOW: 'bg-grey-200',
  BOOKED: 'bg-green',
  SEATED: 'bg-green',
}

const Historytable = ({ setDetail, setOpen }: IHistorytableProps) => {
  const { historyData } = useAppSelector((state) => state.historyData)

  const handleViewDetail = (id: number) => {
    setOpen(true)
    setDetail(id)
  }
  return (
    <table className='min-w-full border-separate border-spacing-y-2 table-fixed'>
      <thead>
        <tr>
          <th
            scope='col'
            className='whitespace-nowrap py-3.5 text-left text-light-purple text-[13px] leading-[14px] font-semibold'
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
        {historyData &&
          historyData?.map((reservation, idx) => {
            const color = status[reservation.status as keyof typeof status]
            return (
              <tr key={idx} className='border-[1px] border-grey bg-white'>
                <td className='whitespace-nowrap border-y-[1px] border-l-[1px] rounded-l-lg border-grey pl-3 py-4 text-sm text-blue font-semibold leading-4'>
                  {reservation.order_in_queue}
                </td>
                <td className='whitespace-nowrap border-y-[1px] border-grey px-3 py-4 text-sm text-blue font-semibold leading-4'>
                  {reservation.guest_name}
                </td>
                <td className='whitespace-nowrap border-y-[1px] border-grey px-3 py-4 text-sm text-blue font-semibold leading-4'>
                  {reservation.phone_number}
                </td>
                <td className='whitespace-nowrap border-y-[1px] border-grey px-3 py-4 text-sm text-blue font-semibold leading-4'>
                  <div className='bg-yellow-100 w-10 h-7 rounded-[34px] flex justify-center items-center'>
                    {reservation.order_in_queue}
                  </div>
                </td>
                <td className='whitespace-nowrap border-y-[1px] border-grey px-3 py-4 text-sm text-blue font-semibold leading-4'>
                  {reservation.guest_count}
                </td>
                <td className='whitespace-nowrap border-y-[1px] border-grey px-3 py-4 text-sm text-blue font-semibold leading-4'>
                  <div className='bg-perwinkle-purple h-[32px] py-1 w-max px-3 border-[1px] border-grey rounded-[84px] flex gap-[6px] items-center'>
                    <div className={`${color} w-[9px] h-[9px] rounded-[50%]`}></div>
                    <span>
                      {' '}
                      {reservation?.status === 'NO_SHOW'
                        ? 'No Show'
                        : reservation?.status === 'BOOKED'
                        ? 'Booked'
                        : reservation?.status === 'SEATED'
                        ? 'Seated'
                        : reservation?.status === 'CANCELLED'
                        ? 'Cancelled'
                        : reservation?.status}{' '}
                    </span>
                  </div>
                </td>
                <td className='whitespace-nowrap border-y-[1px] border-grey border-r-[1px] rounded-r-lg px-3 pt-4 pb-[22px] text-sm text-blue font-semibold leading-4 flex gap-2'>
                  <div
                    onClick={() => handleViewDetail(reservation.id)}
                    className='bg-grey-100 w-7 h-7 rounded-2xl flex justify-center items-center'
                  >
                    <Visibility />
                  </div>
                </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export { Historytable }
