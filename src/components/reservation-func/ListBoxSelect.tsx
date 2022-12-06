import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import { ReactComponent as ArrowIcon } from '../../assets/icons/expand_more.svg'

const ListBoxSelect = () => {
  const [selected, setSelected] = useState('Any seat')

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className='relative mt-1'>
            <Listbox.Button className='flex items-center relative w-full h-[56px] rounded-[40px] py-5 px-6 bg-perwinkle-purple border-[1px] border-grey'>
              <span className='text-purple-300 text-base leading-4 font-semibold'>{selected}</span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-8'>
                <ArrowIcon />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                <Listbox.Option
                  className={({ active }) =>
                    `${
                      active ? 'text-white bg-indigo-600' : 'text-gray-900'
                    } relative cursor-default select-none py-2 pl-3 pr-9`
                  }
                  value={selected}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${selected ? 'font-semibold' : 'font-normal'} block truncate`}
                      >
                        {selected}
                      </span>

                      {selected ? (
                        <span
                          className={`${
                            active ? 'text-white' : 'text-indigo-600'
                          } absolute inset-y-0 right-0 flex items-center pr-4`}
                        >
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

export { ListBoxSelect }
