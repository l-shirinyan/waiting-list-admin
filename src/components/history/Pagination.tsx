const Pagination = () => {
  return (
    <nav className='flex items-center justify-center px-4 sm:px-0'>
      <div className='hidden max-w-[259px] h-[44px] rounded-[48px] border-[1px] border-grey bg-perwinkle-purple md:-mt-px md:flex'>
        <a
          href='#'
          className='inline-flex items-center justify-center border-t-2 bg-purple text-white border-transparent w-10 h-10 rounded-[50%] text-base font-medium hover:border-gray-300 hover:text-gray-700'
        >
          1
        </a>
        <a
          href='#'
          className='inline-flex items-center justify-center w-10 h-10 rounded-[50%] text-base font-medium text-light-purple hover:border-gray-300 hover:text-gray-700'
          aria-current='page'
        >
          2
        </a>
        <a
          href='#'
          className='inline-flex items-center justify-center border-t-2 border-transparent w-10 h-10 rounded-[50%] text-base font-medium text-light-purple hover:border-gray-300 hover:text-gray-700'
        >
          3
        </a>
        <a
          href='#'
          className='inline-flex items-center justify-center border-t-2 border-transparent w-10 h-10 rounded-[50%] text-base font-medium text-light-purple hover:border-gray-300 hover:text-gray-700'
        >
          4
        </a>
        <a
          href='#'
          className='inline-flex items-center justify-center border-t-2 border-transparent w-10 h-10 rounded-[50%] text-base font-medium text-light-purple hover:border-gray-300 hover:text-gray-700'
        >
          5
        </a>
        <a
          href='#'
          className='inline-flex items-center justify-center border-t-2 border-transparent w-10 h-10 rounded-[50%] text-base font-medium text-light-purple hover:border-gray-300 hover:text-gray-700'
        >
          6
        </a>
      </div>
    </nav>
  )
}

export { Pagination }
