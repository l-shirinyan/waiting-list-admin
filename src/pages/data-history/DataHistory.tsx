import { HistoryListing } from '../../components/history/HistoryListing'
import { HistoryPageHeading } from '../../components/history/HistoryPageHeading'

const DataHistory = () => {
  return (
    <div className='w-full h-max bg-grey-100 pr-12 2xl:h-screen'>
      <HistoryPageHeading />
      <div className='w-full mt-[26px] pl-[43px]'>
        <HistoryListing />
      </div>
    </div>
  )
}

export { DataHistory }
