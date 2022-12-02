import { HistoryListing } from '../../components/history/HistoryListing'
import { HistoryPageHeading } from '../../components/history/HistoryPageHeading'

const DataHistory = () => {
  return (
    <div className='w-full bg-grey-100 pr-12'>
      <HistoryPageHeading />
      <div className='w-full mt-[26px] pl-[43px]'>
        <HistoryListing />
      </div>
    </div>
  )
}

export { DataHistory }
