import { useEffect, useState } from 'react'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getDataCount, getHistoryData } from '../../redux/history/historySlice'
import { getQueue } from '../../redux/queries'
import { ReservationDialog } from '../reservation-func/ReservationDialog'
import { ViewReservation } from '../reservation-func/ViewReservation'
import { Historytable } from './Historytable'
import { Pagination } from './Pagination'

interface IHistoryListing {
  setOrder: (order: string) => void
  order: string
  setSkip: (skip: number) => void
  skip: number
}
const HistoryListing = ({ setOrder, order, setSkip, skip }: IHistoryListing) => {
  const { historyData, count } = useAppSelector((state) => state.historyData)
  const [searchTerm, setSearchTerm] = useState('')
  const [detail, setDetail] = useState<number>()
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()
  const { mutate } = getQueue()
  let searchData = historyData ? [...historyData] : null

  useEffect(() => {
    if (mutate.isSuccess) {
      dispatch(getDataCount(mutate?.data.count))
      dispatch(getHistoryData(mutate?.data.results ? mutate?.data.results : mutate?.data))
    }
  }, [mutate.isSuccess])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchData = historyData ? [...historyData] : null
      if (historyData) {
        if (searchTerm.length) {
          const searched = searchData?.filter((elem) =>
            elem.guest_name.toLowerCase().includes(searchTerm?.toLowerCase()),
          )
          dispatch(getHistoryData(searched))
        } else {
          mutate.mutate(process.env.REACT_APP_QUEUE_URL + `/?sort=${order}`)
        }
      }
    }, 1000)
    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  const handleSearchHistories = (e: React.SyntheticEvent) => {
    setSearchTerm((e.target as HTMLInputElement).value)
  }
  const handleSortBy = (sort: string) => {
    setOrder(sort)
    mutate.mutate(process.env.REACT_APP_QUEUE_URL + `/?sort=${sort}&skip=${skip * 8}&limit=8`)
  }
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
                {count} Records
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
                onChange={handleSearchHistories}
                className='block w-full px-3 h-10 rounded-full bg-purple-500 text-xs text-semibold border-[1px] border-grey placeholder:text-xs placeholder:font-semibold sm:text-sm'
                placeholder='search for reservation'
              />
              <SearchIcon className='absolute right-3 top-[11px]' />
            </div>
            <div className='flex w-full gap-2 items-center justify-center max-w-[240px]'>
              <h3 className='text-blue text-[15px] font-semibold leading-6'>Sort by:</h3>
              <div
                onClick={() => handleSortBy('asc')}
                className={`w-full max-w-[80px] h-10 flex justify-center items-center rounded-[48px] ${
                  order === 'asc' ? 'bg-grey-50 ' : ''
                }`}
              >
                <span
                  className={`text-[15px] leading-6 font-semibold ${
                    order === 'asc' ? 'text-blue' : 'text-purple-pink'
                  }`}
                >
                  Oldest
                </span>
              </div>
              <div
                onClick={() => handleSortBy('desc')}
                className={`w-full max-w-[80px] h-10  flex justify-center items-center rounded-[48px] ${
                  order === 'desc' ? 'bg-grey-50 ' : ''
                }`}
              >
                <span
                  className={`text-[15px] leading-6 font-semibold ${
                    order === 'desc' ? 'text-blue' : 'text-purple-pink'
                  }`}
                >
                  Newest
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-full overflow-y-auto'>
            <div className='inline-block min-w-full py-2 align-middle pr-4'>
              <div className='relative'>
                <Historytable setDetail={setDetail} setOpen={setOpen}/>
              </div>
            </div>
            <Pagination skip={skip} setSkip={setSkip} />
          </div>
        </div>
      </div>
      <ReservationDialog open={open} setOpen={setOpen} title='Reservation Details'>
        <ViewReservation queueData={historyData} detail={detail} setDetail={setDetail} />
      </ReservationDialog>
    </div>
  )
}

export { HistoryListing }
