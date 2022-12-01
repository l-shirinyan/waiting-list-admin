import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Fragment, useLayoutEffect, useRef, useState } from 'react'
import { IPeople, people } from '../../utils/constants'
import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg'
import { ReactComponent as Visibility } from '../../assets/icons/visibility.svg'

const publishingOptions = [
  {
    title: 'Booked',
    current: true,
  },
  {
    title: 'Draft',
    current: false,
  },
  {
    title: 'Canceled',
    current: false,
  },
]

const CurrentQueueListing = () => {
  const checkbox = useRef<HTMLInputElement>(null)
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState<boolean>(false)
  const [selectedPeople, setSelectedPeople] = useState<IPeople[]>([])
  const [selected, setSelected] = useState(publishingOptions[0])
  const [seated, setSeated] = useState<number>(1)

  useLayoutEffect(() => {
    const isIndeterminate = selectedPeople?.length > 0 && selectedPeople?.length < people.length
    setChecked(selectedPeople.length === people.length)
    setIndeterminate(isIndeterminate)
  }, [selectedPeople])

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }
  return (
    <div className='pt-[46px] flex flex-col gap-8 pl-5 pr-5 xl:pl-[43px] xl:pr-[61px]'>
      <div className='flex justify-between'>
        <h3 className='text-[32px] leading-10 font-semibold text-blue'>Current Queue</h3>
        <button className='flex justify-center items-center bg-purple w-full max-w-[165px] h-10 rounded-[48px] text-base leading-4 font-semibold text-white'>
          New Reservation
        </button>
      </div>
      <div className='px-4 bg-grey-10 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <span className='text-2xl font-semibold leading-8 text-grey-900'>
              Number of records
            </span>
            <button
              type='button'
              className='inline-flex items-center ml-[13px] justify-center rounded-[6px] h-[32px] w-full max-w-[91px] bg-purple-500 text-purple text-sm font-medium shadow-sm'
            >
              312 Records
            </button>
          </div>
          <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'></div>
        </div>
        <div className='mt-3 flex justify-between items-center'>
          <div>
            <input
              type='text'
              name='search'
              id='search'
              className='block w-full px-3 max-w-[407px] h-10 rounded-full bg-purple-500 text-xs text-semibold placeholder:text-xs placeholder:font-semibold sm:text-sm'
              placeholder='search for reservation'
            />
          </div>
          <div className='flex w-full gap-2 items-center justify-center max-w-[240px]'>
            <h3 className='text-blue text-[15px] font-semibold leading-6'>Sort by:</h3>
            <div className='w-full max-w-[80px] h-10 bg-grey-50 flex justify-center items-center rounded-[48px]'>
              <span className='text-blue text-[15px] leading-6 font-semibold'>Oldest</span>
            </div>
            <div className='w-full max-w-[80px] h-10  flex justify-center items-center rounded-[48px]'>
              <span className='text-purple-pink text-[15px] leading-6 font-semibold'>Oldest</span>
            </div>
          </div>
        </div>
        <div className='mt-8 flex flex-col'>
          <div className='h-[calc(100vh-200px)] -my-2 -mx-4 sm:-mx-6 lg:-mx-8 pb-[120px] overflow-y-auto'>
            <div className='inline-block min-w-full py-2 align-middle lg:px-8'>
              <div className='relative'>
                <table className='min-w-full table-fixed divide-y divide-gray-300'>
                  <thead>
                    <tr>
                      <th scope='col' className='relative w-12 px-6 sm:w-16 sm:px-8'>
                        <input
                          type='checkbox'
                          className='absolute left-4 top-1/2 -mt-2 h-[15px] w-[15px] rounded bg-white ring-2 ring-[#5B5A87] sm:left-6'
                          ref={checkbox}
                          checked={checked}
                          onChange={toggleAll}
                        />
                      </th>
                      <th
                        scope='col'
                        className='min-w-[12rem] py-3.5 text-left text-light-purple text-[13px] leading-[14px] font-semibold'
                      >
                        Guest Name
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-light-purple'
                      >
                        Queue Number
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-light-purple'
                      >
                        Phone Number
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-light-purple'
                      >
                        Guests
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-light-purple'
                      >
                        Booking Status
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-light-purple'
                      >
                        Action view
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y bg-white'>
                    {people.map((person, idx) => (
                      <tr
                        key={idx}
                        className={`border-[1px] border-grey bg-white ${
                          selectedPeople.includes(person) ? 'bg-gray-50' : undefined
                        }`}
                      >
                        <td className='relative w-12 px-6 sm:w-16 sm:px-8'>
                          {selectedPeople.includes(person) && (
                            <div className='absolute inset-y-0 left-0 w-0.5 bg-indigo-600' />
                          )}
                          <input
                            type='checkbox'
                            className='absolute left-4 top-1/2 -mt-2 h-[15px] w-[15px] rounded bg-white ring-2 ring-[#05007A] sm:left-6'
                            value={person.guestName}
                            checked={selectedPeople.includes(person)}
                            onChange={(e) =>
                              setSelectedPeople(
                                e.target.checked
                                  ? [...selectedPeople, person]
                                  : selectedPeople.filter((p) => p !== person),
                              )
                            }
                          />
                        </td>
                        <td
                          className={`whitespace-nowrap py-4 pr-3 text-sm font-semibold leading-4 ${
                            selectedPeople.includes(person) ? 'text-indigo-600' : 'text-blue'
                          }`}
                        >
                          {person.guestName}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-blue font-semibold leading-4'>
                          <div className='bg-yellow-100 w-10 h-7 rounded-[34px] flex justify-center items-center'>
                            {person.queueNumber}
                          </div>
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-blue font-semibold leading-4'>
                          {person.phoneNamber}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-blue font-semibold leading-4'>
                          {person.guests}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-blue font-semibold leading-4'>
                          <Listbox value={selected} onChange={setSelected}>
                            {({ open }) => (
                              <>
                                <div className='relative'>
                                  <div className='inline-flex divide-x rounded-[84px] bg-perwinkle-purple'>
                                    <div className='inline-flex divide-x rounded-[84px] bg-perwinkle-purple'>
                                      <div className='inline-flex items-center rounded-l-[84px] border-[1px] border-grey border-r-0 bg-perwinkle-purple py-2 pl-3 pr-4 text-purple-blue shadow-sm'>
                                        <div
                                          aria-hidden='true'
                                          className='w-[9px] h-[9px] bg-purple rounded-[50%]'
                                        ></div>
                                        <p className='ml-2.5 text-sm font-medium'>
                                          {selected.title}
                                        </p>
                                      </div>
                                      <Listbox.Button className='inline-flex items-center rounded-l-none rounded-r-[84px] border-[1px] border-grey bg-perwinkle-purple p-2 text-sm font-medium text-purple-blue focus:outline-none focus:ring-2 focus:ring-offset-gray-50'>
                                        <span className='sr-only'>Change published status</span>
                                        <ChevronDownIcon
                                          className='h-5 w-5 text-purple-blue'
                                          aria-hidden='true'
                                        />
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
                                    <Listbox.Options className='absolute left-0 z-10 flex flex-col shadow-xl rounded-lg gap-4 justify-between mt-2 w-[173px] h-[120px]overflow-hidden bg-white ring-opacity-5 focus:outline-none'>
                                      {publishingOptions.map((option) => (
                                        <Listbox.Option
                                          key={option.title}
                                          className='cursor-default select-none text-purple-blue pl-2 py-2 pr-[10px] text-sm font-semibold'
                                          value={option}
                                        >
                                          {({ selected }) => (
                                            <div className='flex flex-col'>
                                              <div className='flex justify-between'>
                                                <p
                                                  className={`font-semibold leading-6  ${
                                                    selected ? 'text-sm' : 'text-xs'
                                                  }`}
                                                >
                                                  {option.title}
                                                </p>
                                                {selected ? (
                                                  <div className='flex justify-between items-center gap-4'>
                                                    <div className='w-full bg-purple-50 h-[18px] flex justify-center items-center'>
                                                      <span className='light-purple text-[8px] font-semibold'>
                                                        Current status
                                                      </span>
                                                    </div>
                                                    <div className='flex justify-center items-center'>
                                                      <CheckIcon />
                                                    </div>
                                                  </div>
                                                ) : null}
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
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-blue font-semibold leading-4 flex gap-2'>
                          <div
                            onClick={() => setSeated(person.id)}
                            className={`${
                              seated === person.id ? 'bg-purple ' : 'border-2 border-purple'
                            } w-[58px] h-8 flex justify-center items-center rounded-[64px]`}
                          >
                            <span
                              className={`text-xs font-semibold ${
                                seated === person.id ? 'text-white' : 'text-purple'
                              }`}
                            >
                              {person.avtive}
                            </span>
                          </div>
                          <div className='bg-grey-100 w-7 h-7 rounded-2xl flex justify-center items-center'>
                            <Visibility />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CurrentQueueListing }
