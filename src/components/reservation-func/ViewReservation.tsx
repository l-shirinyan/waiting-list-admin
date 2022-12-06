import { useEffect, useState } from 'react'
import { IPeople, people as data } from '../../utils/constants'
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrowleft.svg'
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg'
import { ReservationListbox } from './ReservationListbox'

interface IViewReservation {
  detail?: number
  setDetail: (detail: number) => void
}

interface ISiblings {
  prev: IPeople
  next: IPeople
}

const ViewReservation = ({ detail, setDetail }: IViewReservation) => {
  const [person, setPerson] = useState<IPeople>()
  const [siblings, setSiblings] = useState<ISiblings>()
  const [detailData, setDetailData] = useState([...data])

  useEffect(() => {
    setDetailData([...data])
    const item = detailData.find((el) => {
      return el.id === detail
    })
    setPerson(item)
    const index = detailData.findIndex((x) => x.id === detail)
    const next = detailData.splice(index + 1, 1)[0]
    const prev = detailData.splice(index - 1, 1)[0]
    setSiblings({ prev, next })
  }, [detail])

  const handleChangeDetail = (item: string) => {
    if (item === 'prev') {
      const index = detailData.findIndex((x) => x.id === siblings?.prev.id)
      setDetail(index)
    } else if (item === 'next') {
      const index = detailData.findIndex((x) => x.id === siblings?.next.id)
      setDetail(index)
    }
  }

  return (
    <div className='mt-4 flex flex-col pb-6'>
      <div className='flex flex-col gap-12'>
        <ReservationListbox person={person} />
        <div className='w-full flex flex-col gap-12'>
          <div className='w-full min-h-[76px] items-center flex gap-[53px] flex-wrap justify-center sm:justify-start'>
            <div className='flex flex-col gap-2 items-center'>
              <div className='flex gap-2 items-center'>
                <div className=' w-[4px] h-[14px] bg-purple rounded'></div>
                <span className='font-semibold text-sm leading-[17px] text-light-purple'>
                  Reservation Number
                </span>
              </div>
              <span className='text-purple-blue text-base font-semibold leading-5'>
                {person?.reservation_number}
              </span>
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <div className='flex gap-2 items-center'>
                <div className=' w-[4px] h-[14px] bg-purple rounded'></div>
                <span className='font-semibold text-sm leading-[17px] text-light-purple'>
                  Queue number
                </span>
              </div>
              <div className='bg-yellow-100 p-[6px] flex justify-center items-center rounded'>
                <span className='text-purple-blue text-base font-semibold leading-5'>
                  {person?.queueNumber} in line
                </span>
              </div>
            </div>
          </div>
          <div className='w-full min-h-[76px] items-center bg-light flex gap-[53px] flex-wrap justify-center sm:justify-start'>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2 items-center'>
                <div className=' w-[4px] h-[14px] bg-purple rounded'></div>
                <span className='font-semibold text-sm leading-[17px] text-light-purple'>
                  Guest Name
                </span>
              </div>
              <span className='text-purple-blue text-base font-semibold leading-5 max-w-[146px]'>
                {person?.guestName}
              </span>
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <div className='flex gap-2 items-center'>
                <div className=' w-[4px] h-[14px] bg-purple rounded'></div>
                <span className='font-semibold text-sm leading-[17px] text-light-purple'>
                  Phone Number
                </span>
              </div>
              <span className='text-purple-blue text-base font-semibold leading-5'>
                {person?.phoneNamber}
              </span>
            </div>
          </div>
          <div className='w-full min-h-[76px] items-center flex gap-[53px] flex-wrap justify-center sm:justify-start'>
            <div className='flex flex-col gap-2 items-center'>
              <div className='flex gap-2 items-center'>
                <div className=' w-[4px] h-[14px] bg-purple rounded'></div>
                <span className='font-semibold text-sm leading-[17px] text-light-purple'>
                  ResearvationStatus
                </span>
              </div>
              <span className='text-purple-blue text-base font-semibold leading-5'>
                {person?.bookingStatus}
              </span>
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <div className='flex gap-2 items-center'>
                <div className=' w-[4px] h-[14px] bg-purple rounded'></div>
                <span className='font-semibold text-sm leading-[17px] text-light-purple'>
                  Reservation Time
                </span>
              </div>
              <span className='text-purple-blue text-base font-semibold leading-5'>11:34 pm</span>
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
            <div className='flex flex-col gap-2 items-center'>
              <div className='flex gap-2 items-center'>
                <div className=' w-[4px] h-[14px] bg-purple rounded'></div>
                <span className='font-semibold text-sm leading-[17px] text-light-purple'>
                  Number of Guest
                </span>
              </div>
              <span className='text-purple-blue text-base font-semibold leading-5'>6 guest</span>
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
              Need my seats of a table in center established fact that a reader will be distracted
              by the readable content
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
              {siblings?.prev?.reservation_number}
            </span>
            <span className='text-light-purple text-[14px] leading-4 font-semibold max-w-[147px]'>
              {siblings?.prev?.guestName}
            </span>
          </div>
        </div>
        <div className='w-1/2 flex items-center gap-[13px] pl-9'>
          <div className='flex flex-col max-w-[147px]'>
            <span className='text-purple-blue text-[14px] leading-4 font-semibold'>
              {siblings?.next?.reservation_number}
            </span>
            <span className='text-light-purple text-[14px] leading-4 font-semibold'>
              {siblings?.next?.guestName}
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
