import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/redux'
import { getStatsCount } from '../../redux/history/historySlice'
import { useFetch } from '../../redux/queries'

const HistoryPageHeading = () => {
  const { data, isLoading, isSuccess } = useFetch('/stats/', 'statsData')
  const dispatch = useDispatch()
  const { stats } = useAppSelector((state) => state.historyData)
  useEffect(() => {
    if (isSuccess) {
      dispatch(getStatsCount(data))
    }
  }, [data])

  if (!isLoading) {
    return (
      <div className='pt-[46px] flex flex-col gap-5 pl-[43px]'>
        <div className='flex justify-between'>
          <h3 className='leading-10 pt-4 font-semibold text-blue text-[32px] xl:pt-0'>History</h3>
        </div>
        <div className='grid gap-8 justify-between w-max sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 2xl:grid-cols-4'>
          {stats?.map((stat, idx) => {
            return (
              <div key={idx} className='w-[250px] h-[130px] bg-white rounded-[8px]'>
                <div className='flex flex-col gap-[14px] pt-5 pl-4'>
                  <span className='text-blue text-base font-semibold leading-5'>
                    {stat?.status === 'NO_SHOW'
                      ? 'No Show'
                      : stat?.status === 'BOOKED'
                      ? 'Booked'
                      : stat?.status === 'SEATED'
                      ? 'Seated'
                      : stat?.status === 'CANCELLED'
                      ? 'Cancelled'
                      : stat?.status}{' '}
                    Reservations
                  </span>
                  <span className='text-[27px] font-semibold leading-8 text-blue'>
                    {stat?.count}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

export { HistoryPageHeading }
