import React, { useState } from 'react'
import { TelInput } from '../Input/PhoneInput'
import { ListBoxSelect } from './ListBoxSelect'
import { currentQueue } from '../../redux/queries'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { addNewQueue } from '../../redux/queue/queueSlice'

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
interface ICreateReservationProps {
  setOpen: (open: boolean) => void
  handleSortBy: (order: string) => void
}
const CreateReservation = ({ setOpen, handleSortBy }: ICreateReservationProps) => {
  const [inputValue, setInputValue] = useState('')
  const [selectedNum, setSelectedNum] = useState<number>(1)
  const { mutate } = currentQueue('post')
  const { identity_id } = useAppSelector((state) => state.isAuth)
  const dispatch = useAppDispatch()

  const handleCreateReservation = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const new_queue = {
      guest_name: (e.target as HTMLFormElement).guest_name.value,
      phone_number: inputValue,
      guest_count: selectedNum,
      request: (e.target as HTMLFormElement).request.value,
      identity_id: identity_id,
    }
    mutate.mutate(new_queue)
    setOpen(false)
    dispatch(addNewQueue(new_queue))
  }
  return (
    <div className='pt-8 flex flex-col gap-8'>
      <div className='flex flex-col gap-3'>
        <span className='text-base leading-5 font-semibold text-light-purple'>
          Number of guests
        </span>
        <div className='flex gap-2 flex-wrap'>
          {nums.map((elem) => {
            return (
              <div
                key={elem}
                onClick={() => setSelectedNum(elem)}
                className={`${
                  selectedNum === elem ? 'bg-purple' : 'border-[1px] border-grey-150'
                } w-[47px] h-[47px] rounded-[34px] flex justify-center items-center`}
              >
                <span className={`${selectedNum === elem ? 'text-white' : 'text-purple'}`}>
                  {elem}
                </span>
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <form onSubmit={handleCreateReservation} action='' className='flex flex-col gap-4'>
          <h6 className='text-xl font-semibold leading-5 text-green-900'>Guest information</h6>
          <div className='flex flex-col gap-3'>
            <label htmlFor='name' className='text-base font-semibold leading-4 text-light-purple'>
              Full name
            </label>
            <input
              type='text'
              name='guest_name'
              id='guest_name'
              required
              className='w-full h-[56px] rounded-[40px] py-5 px-6 bg-perwinkle-purple border-[1px] border-grey text-purple-300 text-base leading-4 font-semibold'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='name' className='text-base font-semibold leading-4 text-light-purple'>
              Phone Number{' '}
            </label>
            <div className='w-full relative'>
              <TelInput inputValue={inputValue} setInputValue={setInputValue} />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='name' className='text-base font-semibold leading-4 text-light-purple'>
              Seating area{' '}
            </label>
            <ListBoxSelect />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='name' className='text-base font-semibold leading-4 text-light-purple'>
              Special requests{' '}
            </label>
            <div className='w-full relative'>
              <textarea
                name='request'
                id='request'
                required
                className='resize-none w-full max-w-[438px] h-[104px] bg-perwinkle-purple border-[1px] border-grey text-purple-300 text-base leading-4 font-semibold rounded-2xl pt-4 px-6'
              ></textarea>
            </div>
          </div>
          <button
            type='submit'
            className='w-full bg-purple h-[47px] text-base font-semibold leading-5 text-white rounded-[34px]'
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  )
}

export { CreateReservation }
