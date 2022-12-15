interface ILimitations {
  inputsVal: (e: React.ChangeEvent<HTMLInputElement>, val: string) => void
  handleChange: (val: string, bool: boolean) => void
  guestCounts: { first: boolean; second: boolean; firstVal: string; secondVal: string }
}

const Limitations = ({ inputsVal, handleChange, guestCounts }: ILimitations) => {
  return (
    <div className='flex flex-col gap-1 border-b-[1px] border-light-blue py-6'>
      <span className='text-xl font-semibold leading-6 text-purple-300'>Seats Availability</span>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3 flex-col justify-between w-full max-w-[912px] lg:flex-row lg:gap-[85px]'>
          <span className='text-light-purple text-base leading-5 font-semibold w-full max-w-[343px]'>
            Set how many bookings could be done on your waiting
          </span>
          <div className='flex flex-col gap-3 sm:gap-2 sm:flex-row'>
            {!guestCounts.first ? (
              <div
                onClick={() => handleChange('first', true)}
                className='flex flex-col border-[1px] border-grey-200 rounded-xl py-3 w-full h-16 pl-4 pt-3 pb-10'
              >
                <span className='font-medium text-xs text-light-grey leading-3'>
                  Max number of Wait list booking
                </span>
                <span className='font-semibold text-[15px] leading-6'>
                  {guestCounts.firstVal} Guest
                </span>
              </div>
            ) : (
              <input
                type='number'
                value={guestCounts.firstVal}
                onChange={(e) => inputsVal(e, 'firstVal')}
                onBlur={() => handleChange('first', false)}
                className='flex flex-col border-[1px] border-grey-200 rounded-xl py-3 w-full h-16 pl-4 pt-3 pb-10'
              />
            )}
            {!guestCounts.second ? (
              <div
                onClick={() => handleChange('second', true)}
                className='flex flex-col border-[1px] border-grey-200 rounded-xl py-3 w-full h-16 pl-4 pt-3 pb-10'
              >
                <span className='font-medium text-xs text-light-grey leading-3'>
                  Max number of guests per booking
                </span>
                <span className='font-semibold text-[15px] leading-6'>
                  {guestCounts.secondVal} Guests
                </span>
              </div>
            ) : (
              <input
                type='number'
                value={guestCounts.secondVal}
                onChange={(e) => inputsVal(e, 'secondVal')}
                onBlur={() => handleChange('second', false)}
                className='flex flex-col border-[1px] border-grey-200 rounded-xl py-3 w-full h-16 pl-4 pt-3 pb-10'
              />
            )}
          </div>
        </div>
      </div>
      <span className='text-red text-sm font-medium self-center'>
        {!guestCounts.secondVal && !guestCounts.firstVal && 'There are no limitation'}
      </span>
    </div>
  )
}
export { Limitations }
