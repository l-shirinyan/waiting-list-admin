import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { IData } from '../../redux/queue/model'
import { publishingOptions } from '../../utils/constants'

interface IReservationListbox {
  person?: IData
}

const ReservationListbox = ({ person }: IReservationListbox) => {
  return (
    <Listbox>
      {({ open }) => (
        <>
          <Listbox.Label className='sr-only'> Change published status </Listbox.Label>
          <div className='relative'>
            <div className='inline-flex divide-x w-full'>
              <div className='inline-flex divide-x w-full rounded border-[1px] border-r-none border-light-grey '>
                <div className='inline-flex items-center gap-3 py-2 pl-3 pr-4 text-white shadow-sm w-full max-w-[446px] h-[53px]'>
                  <p className='ml-2.5 text-lg font-semibold leading-6 text-purple-blue'>
                    {person?.status === 'NO_SHOW'?'No Show':person?.status}
                  </p>
                  <div className='flex justify-center items-center bg-purple-50 w-[74px] h-6 rounded'>
                    <span className='text-purple text-[8px] leading-3 font-semibold'>
                      Current status
                    </span>
                  </div>
                </div>
                <Listbox.Button className='inline-flex items-center justify-center p-2 w-full max-w-[50px]'>
                  <ChevronDownIcon className='h-5 w-5 text-light-purple' aria-hidden='true' />
                </Listbox.Button>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute right-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                {publishingOptions.map((option) => (
                  <Listbox.Option key={option.title} value={option}>
                    {() => (
                      <div className='flex flex-col h-[53px]'>
                        <div className='flex justify-between py-2 pr-3 pl-4'>
                          <p className='font-medium'>{option.title}</p>
                        </div>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

export { ReservationListbox }
