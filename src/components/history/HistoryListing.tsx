import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { Historytable } from './Historytable'
import { Pagination } from './Pagination'

const HistoryListing = () => {
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
                512 Records
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
                className='block w-full px-3 h-10 rounded-full bg-purple-500 text-xs text-semibold border-[1px] border-grey placeholder:text-xs placeholder:font-semibold sm:text-sm'
                placeholder='search for reservation'
              />
              <SearchIcon className='absolute right-3 top-[11px]' />
            </div>
            <div className='flex w-full gap-2 items-center justify-center max-w-[240px]'>
              <h3 className='text-[15px] font-semibold leading-6'>Sort by:</h3>
              <div className='w-full max-w-[80px] h-10 bg-grey-50 flex justify-center items-center rounded-[48px]'>
                <span className='text-[15px] leading-6 font-semibold'>Oldest</span>
              </div>
              <div className='w-full max-w-[80px] h-10  flex justify-center items-center rounded-[48px]'>
                <span className='text-grey-300 text-[15px] leading-6 font-semibold'>Newest</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-full overflow-y-auto'>
            <div className='inline-block min-w-full py-2 align-middle pr-4'>
              <div className='relative'>
                <Historytable />
              </div>
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}

export { HistoryListing }
