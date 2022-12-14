import { useCallback, useEffect, useState } from 'react'
import { HistoryListing } from '../../components/history/HistoryListing'
import { HistoryPageHeading } from '../../components/history/HistoryPageHeading'
import { useAppDispatch } from '../../hooks/redux'
import { getDataCount, getHistoryData } from '../../redux/history/historySlice'
import { getQueue, useFetch } from '../../redux/queries'

const DataHistory = () => {
  const [order, setOrder] = useState('asc')
  const [skip, setSkip] = useState(0)
  const { data, isSuccess, isLoading } = useFetch(
    `/?sort=${order}&skip=${skip * 8}&limit=8`,
    'historyTable',
  )
  const dispatch = useAppDispatch()
  const { mutate } = getQueue()

  useEffect(() => {
    if (isSuccess) {
      dispatch(getHistoryData(data.results))
      dispatch(getDataCount(data.count))
    }
    if (mutate.isSuccess) {
      dispatch(getHistoryData(mutate.data.results))
      dispatch(getDataCount(mutate.data.count))
    }
  }, [mutate])

  const handleChangePage = useCallback((page: number) => {
    mutate.mutate(`/?sort=${order}&skip=${page * 8}&limit=8`)
    setSkip(page)
  }, [])

  if (!isLoading) {
    return (
      <div className='w-full h-max bg-grey-100 pr-12 2xl:h-screen'>
        <HistoryPageHeading />
        <div className='w-full mt-[26px] pl-[43px]'>
          <HistoryListing
            skip={skip}
            setSkip={handleChangePage}
            setOrder={setOrder}
            order={order}
          />
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

export { DataHistory }
