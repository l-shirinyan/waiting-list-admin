import { useEffect, useState } from 'react'
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrowleft.svg'
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg'
import { ReservationListbox } from './ReservationListbox'
import { IData } from '../../redux/queue/model'
import { getQueue, useFetch } from '../../redux/queries'
import { useAppSelector } from '../../hooks/redux'
import moment from 'moment'
interface IViewReservation {
  detail?: number
  setDetail: (detail: number) => void
}

interface ISiblings {
  prev: IData
  next: IData
}
let next: IData
let prev: IData
const ViewReservation = ({ detail, setDetail }: IViewReservation) => {
  const [reservation, setReservation] = useState<IData>()
  const [siblings, setSiblings] = useState<ISiblings>()
  const { queueData } = useAppSelector((state) => state.queueData)
  const { data } = useFetch(process.env.REACT_APP_QUEUE_URL + `/${detail}`)
  const { mutate } = getQueue()
  useEffect(() => {
    if (queueData) {
      const tableData = [...queueData]
      const index = tableData.findIndex((x) => x.id === detail)
      next = tableData.splice(index + 1, 1)[0]
      prev = tableData.splice(index - 1, 1)[0]
      setSiblings({ prev, next })
    }
    setReservation(data)
    mutate.mutate(process.env.REACT_APP_QUEUE_URL + `/${detail}`)
    if (mutate.isSuccess) {
      setReservation(mutate.data)
    }
  }, [detail, data])

  const handleChangeDetail = (item: string) => {
    if (item === 'prev') {
      setDetail(prev.id)
    } else if (item === 'next') {
      setDetail(next.id)
    }
  }

  return (
    <div className='mt-4 flex flex-col pb-6'>
      <div className='flex flex-col gap-12'>
        <ReservationListbox person={data} />
        <div className='w-full flex flex-col gap-12'>
          <div className='w-full min-h-[76px] items-center flex gap-[53px] flex-wrap justify-center sm:justify-start'>
            <div className='flex flex-col gap-2 items-center w-[38%]'>
              <div className='flex gap-2 items-center'>
                <div className=' w-[4px] h-[14px] bg-purple rounded'></div>
                <span className='font-semibold text-sm leading-[17px] text-light-purple'>
                  Reservation Number
                </span>
              </div>
              <span className='text-purple-blue text-base font-semibold leading-5'>
                {reservation?.guest_count}
              </span>
            </div>
            <div className='flex flex-col gap-2 items-center w-[44%]'>
              <div className='flex gap-2 items-center'>
                <div className=' w-[4px] h-[14px] bg-purple rounded'></div>
                <span className='font-semibold text-sm leading-[17px] text-light-purple'>
                  Queue number
                </span>
              </div>
              <div className='bg-yellow-100 p-[6px] flex justify-center items-center rounded'>
                <span className='text-purple-blue text-base font-semibold leading-5'>
                  {reservation?.order_in_queue} in line
                </span>
              </div>
            </div>
          </div>
          <div className='w-full min-h-[76px] items-center bg-light flex gap-[53px] flex-wrap justify-center sm:justify-start'>
            <div className='flex flex-col gap-2 w-[38%]'>
              <div className='flex gap-2 items-center'>
                <div className=' w-[4px] h-[14px] bg-purple rounded'></div>
                <span className='font-semibold text-sm leading-[17px] text-light-purple'>
                  Guest Name
                </span>
              </div>
              <span className='text-purple-blue text-base font-semibold leading-5 max-w-[146px]'>
                {reservation?.guest_name}
              </span>
            </div>
            <div className='flex flex-col gap-2 items-center w-[44%]'>
              <div className='flex gap-2 items-center'>
                <div className=' w-[4px] h-[14px] bg-purple rounded'></div>
                <span className='font-semibold text-sm leading-[17px] text-light-purple'>
                  Phone Number
                </span>
              </div>
              <span className='text-purple-blue text-base font-semibold leading-5'>
                {reservation?.phone_number}
              </span>
            </div>
          </div>
          <div className='w-full min-h-[76px] items-center flex gap-[53px] flex-wrap justify-center sm:justify-start'>
            <div className='flex flex-col gap-2 items-center w-[35%]'>
              <div className='flex gap-2 items-center'>
                <div className=' w-[4px] h-[14px] bg-purple rounded'></div>
                <span className='font-semibold text-sm leading-[17px] text-light-purple'>
                  ResearvationStatus
                </span>
              </div>
              <span className='text-purple-blue text-base font-semibold leading-5'>
                {reservation?.status}
              </span>
            </div>
            <div className='flex flex-col gap-2 items-center w-[40%]'>
              <div className='flex gap-2 items-center'>
                <div className=' w-[4px] h-[14px] bg-purple rounded'></div>
                <span className='font-semibold text-sm leading-[17px] text-light-purple'>
                  data Time
                </span>
              </div>
              <span className='text-purple-blue text-base font-semibold leading-5'>
                {moment(reservation?.added_on).format('LT')}
              </span>
            </div>
          </div>
          <div className='w-full min-h-[76px] items-center bg-light flex gap-[53px] flex-wrap justify-center sm:justify-start sm:gap-[123px]'>
            <div className='flex flex-col gap-2 items-center'>
              <div className='flex gap-2 items-center'>
                <div className=' w-[4px] h-[14px] bg-purple rounded'></div>
                <span className='font-semibold text-sm leading-[17px] text-light-purple'>
                  Seat View
                </span>
              </div>
              <span className='text-purple-blue text-base font-semibold leading-5'>Outdoor</span>
            </div>
            <div className='flex flex-col gap-2 items-center w-[48%]'>
              <div className='flex gap-2 items-center'>
                <div className=' w-[4px] h-[14px] bg-purple rounded'></div>
                <span className='font-semibold text-sm leading-[17px] text-light-purple'>
                  Number of Guest
                </span>
              </div>
              <span className='text-purple-blue text-base font-semibold leading-5'>
                {reservation?.guest_count} guest
              </span>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2 items-center'>
              <div className=' w-[4px] h-[14px] bg-purple rounded'></div>
              <span className='font-semibold text-sm leading-[17px] text-light-purple'>
                Special request
              </span>
            </div>
            <span className='text-purple-blue text-base font-semibold leading-5 pl-3'>
              {reservation?.request}
            </span>
          </div>
        </div>
      </div>
      <button className='font-semibold text-base text-white bg-purple rounded-[34px] py-[14px] mt-8 mb-[136px]'>
        Seated
      </button>
      <div className='w-full h-[76px] flex p-3 border-[1px] border-light-grey-100 items-center rounded-lg'>
        <div className='w-1/2 flex items-center border-r-[1px] border-r-light-grey-100  gap-[13px]'>
          {siblings?.prev && (
            <ArrowLeft onClick={() => handleChangeDetail('prev')} className='cursor-pointer' />
          )}
          <div className='flex flex-col max-w-[147px]'>
            <span className='text-purple-blue text-[14px] leading-4 font-semibold'>
              {siblings?.prev?.order_in_queue}
            </span>
            <span className='text-light-purple text-[14px] leading-4 font-semibold max-w-[147px]'>
              {siblings?.prev?.guest_name}
            </span>
          </div>
        </div>
        <div className='w-1/2 flex items-center gap-[13px] pl-9'>
          <div className='flex flex-col max-w-[147px]'>
            <span className='text-purple-blue text-[14px] leading-4 font-semibold'>
              {siblings?.next?.order_in_queue}
            </span>
            <span className='text-light-purple text-[14px] leading-4 font-semibold'>
              {siblings?.next?.guest_name}
            </span>
          </div>
          {siblings?.next && (
            <ArrowRight onClick={() => handleChangeDetail('next')} className='cursor-pointer' />
          )}
        </div>
      </div>
    </div>
  )
}

export { ViewReservation }
