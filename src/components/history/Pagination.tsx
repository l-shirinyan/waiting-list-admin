import { useAppSelector } from '../../hooks/redux'

interface IPaginationProps {
  setSkip: (skip: number) => void
  skip: number
}
const Pagination = ({ setSkip, skip }: IPaginationProps) => {
  const { count } = useAppSelector((state) => state.historyData)
  const new_arr = new Array(Math.ceil(count ? count / 8 : 0)).fill(null)

  return (
    <nav className='flex items-center justify-center px-4 sm:px-0'>
      <div className='hidden h-[44px] rounded-[48px] border-[1px] border-grey bg-perwinkle-purple md:-mt-px md:flex'>
        {new_arr?.map((el, idx) => {
          return (
            <div
              key={idx}
              onClick={() => setSkip(idx)}
              className={`inline-flex items-center justify-center border-t-2 ${
                skip === idx
                  ? 'bg-purple text-white hover:text-gray-700'
                  : 'text-light-purple  hover:text-gray-700'
              }  border-transparent w-10 h-10 rounded-[50%] text-base font-medium  hover:border-gray-300`}
              aria-current='page'
            >
              {idx + 1}
            </div>
          )
        })}
      </div>
    </nav>
  )
}

export { Pagination }
