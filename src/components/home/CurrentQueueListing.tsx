import React, { useEffect, useState } from 'react'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { ReservationDialog } from '../reservation-func/ReservationDialog'
import { CurrentQueueTable } from './CurrentQueueTable'
import { CreateReservation } from '../reservation-func/CreateReservation'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { currentQueue, getQueue, useFetch } from '../../redux/queries'
import { currentQueueData } from '../../redux/queue/queueSlice'
import { IData } from '../../redux/queue/model'

const CurrentQueueListing = () => {
  const [selectedPeople, setSelectedPeople] = useState<IData[] | null>([])
  const [open, setOpen] = useState(false)
  const [order, setOrder] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')
  const { data, isSuccess, isLoading } = useFetch(`/v1/waitinglist/today/?sort=${order}`, 'queueKey')
  const { queueData } = useAppSelector((state) => state.queueData)
  const { mutate } = getQueue()
  const dispatch = useAppDispatch()
  const { mutate: request } = currentQueue('patch')
  let searchData: IData[] | null
  if (!isLoading && queueData?.length) {
    searchData = [...queueData]
  }
  useEffect(() => {
    if (isSuccess) {
      dispatch(currentQueueData(data))
    }
  }, [isSuccess])

  useEffect(() => {
    if (mutate.isSuccess) {
      dispatch(currentQueueData(mutate?.data))
    }
  }, [mutate.isSuccess])

  useEffect(() => {
    if (request.isSuccess) {
      mutate.mutate(`/today/?sort=${order}`)
    }
  }, [request.isSuccess])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchData = queueData ? [...queueData] : null
      if (queueData) {
        if (searchTerm.length) {
          const searched = searchData?.filter((elem) =>
            elem.guest_name.toLowerCase().includes(searchTerm?.toLowerCase()),
          )
          dispatch(currentQueueData(searched))
        } else {
          mutate.mutate(`/today/?sort=${order}`)
        }
      }
    }, 1000)
    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  const handleSortBy = (type: string) => {
    setOrder(type)
    mutate.mutate(`/today/?sort=${type}`)
  }

  const handleChangeStatus = (status: string) => {
    const data = selectedPeople?.map((el) => {
      return { id: el.id, status }
    })
    request.mutate(data)
  }
  const handleSearch = (e: React.SyntheticEvent) => {
    setSearchTerm((e.target as HTMLInputElement).value)
  }
  if (!isLoading) {
    return (
      <div className='pt-[46px] flex flex-col gap-8 pl-5 pr-5 xl:pl-[43px] xl:pr-[61px]'>
        <div className='flex justify-between'>
          <h3 className='text-7 leading-10 font-semibold text-blue sm:text-[32px]'>
            Current Queue
          </h3>
          <button
            onClick={() => setOpen(true)}
            className='flex justify-center items-center bg-purple w-full rounded-[48px] max-w-[128px] h-[30px] leading-4 font-semibold text-xs text-white sm:text-base sm:max-w-[165px] sm:h-10'
          >
            New Reservation
          </button>
        </div>
        <div className='px-4 bg-grey-10 pt-4 sm:px-6 lg:px-8'>
          <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
              <span className='text-xl font-semibold leading-8 text-grey-900 sm:text-2xl'>
                Number of records
              </span>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-[6px] h-[32px] w-full max-w-[91px] bg-purple-500 text-purple text-sm font-medium shadow-sm sm:ml-[13px]'
              >
                {queueData?.length} Records
              </button>
            </div>
          </div>
          <div className='mt-3 flex flex-col gap-5 justify-between md:items-center md:flex-row md:gap-0'>
            <div className='relative w-full max-w-[407px]'>
              <input
                type='text'
                name='search'
                id='search'
                onChange={handleSearch}
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
          <div className='flex flex-col gap-[10px]'>
            {selectedPeople?.length ? (
              <>
                <h3 className='text-base font-semibold leading-5 mt-3'>
                  All {selectedPeople?.length} recordes on this page are selected.
                </h3>
                <div className='flex gap-2'>
                  <div
                    onClick={() => handleChangeStatus('SEATED')}
                    className='bg-purple w-[69px] h-9 flex justify-center items-center rounded-[64px]'
                  >
                    <span className='text-base font-semibold text-white'>Seated</span>
                  </div>
                  <div
                    onClick={() => handleChangeStatus('CANCELLED')}
                    className='border-pink border-[1px] w-[85px] h-9 flex justify-center items-center rounded-[64px]'
                  >
                    <span className='text-base font-semibold text-pink'>Cancelled</span>
                  </div>
                  <div
                    onClick={() => handleChangeStatus('NO_SHOW')}
                    className='border-grey-100 border-[1px] w-[85px] h-9 flex justify-center items-center rounded-[64px]'
                  >
                    <span className='text-base font-semibold text-light-purple'>No Show</span>
                  </div>
                </div>
              </>
            ) : (
              ''
            )}
          </div>
          <div className={`flex flex-col ${selectedPeople ? '' : 'mt-8'}`}>
            <div className='h-[calc(100vh-200px)] -my-2 -mx-4 sm:-mx-6 lg:-mx-8 overflow-y-auto'>
              <div className='inline-block min-w-full py-2 align-middle lg:px-8'>
                <div className='relative'>
                  <CurrentQueueTable
                    selectedPeople={selectedPeople}
                    setSelectedPeople={setSelectedPeople}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ReservationDialog open={open} setOpen={setOpen} title='Add Reservation manually'>
          <CreateReservation setOpen={setOpen} handleSortBy={handleSortBy} />
        </ReservationDialog>
      </div>
    )
  } else {
    return <div></div>
  }
}

export { CurrentQueueListing }
