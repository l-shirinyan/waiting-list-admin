import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { publishingOptions } from '../../utils/constants'
import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg'
import { ReactComponent as Visibility } from '../../assets/icons/visibility.svg'
import { useAppSelector } from '../../hooks/redux'
import { IData } from '../../redux/queue/model'
import { currentQueue, getQueue, updateQueue } from '../../redux/queries'
import { useDispatch } from 'react-redux'
import { currentQueueData } from '../../redux/queue/queueSlice'

interface ICurrentQueueTbody {
  handleSetSeated: (id: number) => void
  handleShowDetail: (person: number) => void
  seated: number[]
  selectedPeople: IData[] | null
  setSelectedPeople: (selectedPeople: IData[]) => void
}

const CurrentQueueTbody = ({
  handleSetSeated,
  handleShowDetail,
  seated,
  selectedPeople,
  setSelectedPeople,
}: ICurrentQueueTbody) => {
  const [selected, setSelected] = useState(publishingOptions[0])
  const { queueData } = useAppSelector((state) => state.queueData)
  const dispatch = useDispatch()
  const { mutate } = updateQueue('patch')
  const { mutate: request } = getQueue()

  const handleChangeBookingStatus = (status: string, id: number) => {
    mutate.mutate({
      url: `https://yqrc-api-queue.gaytomycode.com/v1/waitinglist/${id}`,
      status,
      id,
    })
  }

  useEffect(() => {
    if (mutate.isSuccess) {
      request.mutate(process.env.REACT_APP_QUEUE_URL + '/today/')
    }
  }, [mutate.isSuccess])

  useEffect(() => {
    if (request.isSuccess) {
      dispatch(currentQueueData(request.data))
    }
  }, [request.isSuccess])

  return (
    <tbody className='divide-y bg-white'>
      {queueData?.map(
        (person, idx) =>
          selectedPeople && (
            <tr
              key={idx}
              className={`border-[1px] border-grey bg-white ${
                selectedPeople?.includes(person) ? 'bg-gray-50' : undefined
              }`}
            >
              <td className='relative w-12 px-6 rounded-l- border-l-[1px] border-y-[1px] border-grey sm:w-16 sm:px-8'>
                {selectedPeople?.includes(person) && (
                  <div className='absolute inset-y-0 left-0 w-0.5 bg-indigo-600' />
                )}
                <input
                  type='checkbox'
                  className='absolute left-4 top-1/2 -mt-2 h-[15px] w-[15px] border-0 rounded bg-white ring-2 text-blue ring-[#05007A] focus:ring-transparent focus:rounde focus:outline-[#05007A] checked:bg-blue checked:ring-[#05007A] sm:left-6'
                  value={person.guest_name}
                  checked={selectedPeople?.includes(person)}
                  onChange={(e) =>
                    setSelectedPeople(
                      e.target.checked
                        ? [...selectedPeople, person]
                        : selectedPeople?.filter((p) => p !== person),
                    )
                  }
                />
              </td>
              <td
                className={`whitespace-nowrap border-y-[1px] border-grey py-4 pr-3 text-sm font-semibold leading-4 ${
                  selectedPeople?.includes(person) ? 'text-indigo-600' : 'text-blue'
                }`}
              >
                {person.guest_name}
              </td>
              <td className='whitespace-nowrap border-y-[1px] border-grey px-3 py-4 text-sm text-blue font-semibold leading-4'>
                <div className='bg-yellow-100 w-10 h-7 rounded-[34px] flex justify-center items-center'>
                  {person.order_in_queue}
                </div>
              </td>
              <td className='whitespace-nowrap border-y-[1px] border-grey px-3 py-4 text-sm text-blue font-semibold leading-4'>
                {person.phone_number}
              </td>
              <td className='whitespace-nowrap border-y-[1px] border-grey px-3 py-4 text-sm text-blue font-semibold leading-4'>
                {person.guest_count}
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
                                {person.status === 'NO_SHOW' ? 'No show' : person.status}
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
                                onClick={() => handleChangeBookingStatus(option.title, person.id)}
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
                                      {person.status === option.title ? (
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
                  } min-w-[77px] h-8 flex justify-center items-center rounded-[64px]`}
                >
                  <span
                    className={`text-xs font-semibold ${
                      seated.includes(person.id) ? 'text-white' : 'text-purple'
                    }`}
                  >
                    {person.status === 'NO_SHOW' ? 'No show' : person.status}
                  </span>
                </div>
                <div
                  onClick={() => handleShowDetail(person.id)}
                  className='bg-grey-100 w-7 h-7 rounded-2xl flex justify-center items-center cursor-pointer'
                >
                  <Visibility />
                </div>
              </td>
            </tr>
          ),
      )}
    </tbody>
  )
}

export default CurrentQueueTbody
