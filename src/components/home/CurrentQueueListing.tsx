import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Fragment, useLayoutEffect, useRef, useState } from 'react'
import { IPeople, people } from '../../utils/constants'
import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg'
import { ReactComponent as Visibility } from '../../assets/icons/visibility.svg'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'

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
  const [seated, setSeated] = useState<number[]>([1])

  useLayoutEffect(() => {
    const isIndeterminate = selectedPeople?.length > 0 && selectedPeople?.length < people.length
    setChecked(selectedPeople.length === people.length)
    setIndeterminate(isIndeterminate)
  }, [selectedPeople])

  const toggleAll = () => {
    setSelectedPeople(checked || indeterminate ? [] : people)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

  const handleSetSeated = (id: number) => {
    setSeated((prev) => {
      const item = [...prev]
      if (item.includes(id)) {
        return item.filter((el) => el !== id)
      } else {
        setSeated((prev) => [...prev, id])
      }
      return item
    })
  }
  return (
    <div className='pt-[46px] flex flex-col gap-8 pl-5 pr-5 xl:pl-[43px] xl:pr-[61px]'>
      <div className='flex justify-between'>
        <h3 className='text-7 leading-10 font-semibold text-blue sm:text-[32px]'>Current Queue</h3>
        <button className='flex justify-center items-center bg-purple w-full rounded-[48px] max-w-[128px] h-[30px] leading-4 font-semibold text-xs text-white sm:text-base sm:max-w-[165px] sm:h-10'>
          New Reservation
        </button>
      </div>
      <div className='px-4 bg-grey-10 pt-4 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <span className='text-xl font-semibold leading-8 text-grey-900 sm:text-2xl'>
              Number of records
            </span>
            <button
              type='button'
              className='inline-flex items-center justify-center rounded-[6px] h-[32px] w-full max-w-[91px] bg-purple-500 text-purple text-sm font-medium shadow-sm sm:ml-[13px]'
            >
              312 Records
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
            <h3 className='text-blue text-[15px] font-semibold leading-6'>Sort by:</h3>
            <div className='w-full max-w-[80px] h-10 bg-grey-50 flex justify-center items-center rounded-[48px]'>
              <span className='text-blue text-[15px] leading-6 font-semibold'>Oldest</span>
            </div>
            <div className='w-full max-w-[80px] h-10  flex justify-center items-center rounded-[48px]'>
              <span className='text-purple-pink text-[15px] leading-6 font-semibold'>Newest</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-[10px]'>
          {selectedPeople.length ? (
            <>
              <h3 className='text-base font-semibold leading-5 mt-3'>
                All {selectedPeople.length} recordes on this page are selected.
              </h3>
              <div className='flex gap-2'>
                <div className='bg-purple w-[69px] h-9 flex justify-center items-center rounded-[64px]'>
                  <span className='text-base font-semibold text-white'>Seated</span>
                </div>
                <div className='border-pink border-[1px] w-[85px] h-9 flex justify-center items-center rounded-[64px]'>
                  <span className='text-base font-semibold text-pink'>Canceled</span>
                </div>
                <div className='border-grey-100 border-[1px] w-[85px] h-9 flex justify-center items-center rounded-[64px]'>
                  <span className='text-base font-semibold text-light-purple'>No Show</span>
                </div>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
        <div className={`flex flex-col ${selectedPeople ? '' : 'mt-8'}`}>
          <div className='h-[calc(100vh-200px)] -my-2 -mx-4 sm:-mx-6 lg:-mx-8 overflow-y-auto'>
            <div className='inline-block min-w-full py-2 align-middle lg:px-8'>
              <div className='relative'>
                <table className='min-w-full border-separate border-spacing-y-2 table-fixed'>
                  <thead>
                    <tr>
                      <th scope='col' className='relative w-12 px-6 sm:w-16 sm:px-8'>
                        <input
                          type='checkbox'
                          className='absolute left-4 top-1/2 -mt-2 h-[15px] w-[15px] border-0 rounded bg-white ring-2 text-dark-grey ring-[#5B5A87] focus:ring-transparent focus:rounded focus:outline-[#5B5A87] checked:ring-[#1C1B1F] checked:bg-dark-grey sm:left-6'
                          ref={checkbox}
                          checked={checked}
                          onChange={toggleAll}
                        />
                      </th>
                      <th
                        scope='col'
                        className='py-3.5 text-left text-light-purple text-[13px] leading-[14px] font-semibold'
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
                        <td className='relative w-12 px-6 rounded-l- border-l-[1px] border-y-[1px] border-grey sm:w-16 sm:px-8'>
                          {selectedPeople.includes(person) && (
                            <div className='absolute inset-y-0 left-0 w-0.5 bg-indigo-600' />
                          )}
                          <input
                            type='checkbox'
                            className='absolute left-4 top-1/2 -mt-2 h-[15px] w-[15px] border-0 rounded bg-white ring-2 text-blue ring-[#05007A] focus:ring-transparent focus:rounde focus:outline-[#05007A] checked:bg-blue checked:ring-[#05007A] sm:left-6'
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
                          className={`whitespace-nowrap border-y-[1px] border-grey py-4 pr-3 text-sm font-semibold leading-4 ${
                            selectedPeople.includes(person) ? 'text-indigo-600' : 'text-blue'
                          }`}
                        >
                          {person.guestName}
                        </td>
                        <td className='whitespace-nowrap border-y-[1px] border-grey px-3 py-4 text-sm text-blue font-semibold leading-4'>
                          <div className='bg-yellow-100 w-10 h-7 rounded-[34px] flex justify-center items-center'>
                            {person.queueNumber}
                          </div>
                        </td>
                        <td className='whitespace-nowrap border-y-[1px] border-grey px-3 py-4 text-sm text-blue font-semibold leading-4'>
                          {person.phoneNamber}
                        </td>
                        <td className='whitespace-nowrap border-y-[1px] border-grey px-3 py-4 text-sm text-blue font-semibold leading-4'>
                          {person.guests}
                        </td>
                        <td className='whitespace-nowrap border-y-[1px] border-grey px-3 py-4 text-sm text-blue font-semibold leading-4'>
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
                        <td className='whitespace-nowrap border-y-[1px] border-grey border-r-[1px] rounded-r-[8px] px-3 pt-4 pb-[22px] text-sm text-blue font-semibold leading-4 flex gap-2'>
                          <div
                            onClick={() => handleSetSeated(person.id)}
                            className={`${
                              seated.includes(person.id) ? 'bg-purple ' : 'border-2 border-purple'
                            } w-[58px] h-8 flex justify-center items-center rounded-[64px]`}
                          >
                            <span
                              className={`text-xs font-semibold ${
                                seated.includes(person.id) ? 'text-white' : 'text-purple'
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
