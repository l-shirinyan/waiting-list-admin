import { histories } from '../../utils/constants'

const HistoryPageHeading = () => {
  return (
    <div className='pt-[46px] flex flex-col gap-5 pl-[43px]'>
      <div className='flex justify-between'>
        <h3 className='leading-10 pt-4 font-semibold text-blue text-[32px] xl:pt-0'>History</h3>
      </div>
      <div className='grid gap-8 justify-between w-max sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 2xl:grid-cols-4'>
        {histories.map((history, idx) => {
          return (
            <div key={idx} className='w-[250px] h-[130px] bg-white rounded-[8px]'>
              <div className='flex flex-col gap-[14px] pt-5 pl-4'>
                <span className='text-blue text-base font-semibold leading-5'>{history.title}</span>
                <span className='text-[27px] font-semibold leading-8 text-blue'>{history.num}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { HistoryPageHeading }
