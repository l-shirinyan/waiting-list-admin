import { Toggle } from './Toggle'
import { ReactComponent as PlusIcon } from '../../assets/icons/add.svg'
import { ReactComponent as SitIcon } from '../../assets/icons/airline_seat_recline_normal.svg'
import React, { useEffect, useState } from 'react'
import { getSeatAreas } from '../../redux/queries'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchSeatAreas } from '../../redux/queue/queueSlice'

interface ISettingsSeat {
  addNewArea: number
  setAddNewArea: () => void
  handleChangeSeatArea: (e: React.ChangeEvent) => void
  err: string
}
const SettingsSeat = ({ addNewArea, setAddNewArea, handleChangeSeatArea, err }: ISettingsSeat) => {
  const { identity_id } = useAppSelector((state) => state.isAuth)
  const { seatingAreas } = useAppSelector((state) => state.queueData)
  const [enabled, setEnabled] = useState(false)
  const [enabledDoor, setEnabledDoor] = useState(false)
  // const areas = new Array(addNewArea).fill(null)
  const dispatch = useAppDispatch()
  const { data, isLoading, isSuccess } = getSeatAreas(`?identity_id=${identity_id}`)

  useEffect(() => {
    if (isSuccess) {
      dispatch(fetchSeatAreas(data))
    }
  }, [data])
  if (!isLoading) {
    return (
      <>
        <div className='flex flex-col gap-4'>
          <span className='font-semibold text-[24px] text-dark-grey leading-[30px]'>
            Waitinglist Settings
          </span>
          <div className='flex flex-col gap-1 border-b-[1px] border-light-blue pb-6'>
            <span className='text-xl font-semibold leading-6 text-purple-300'>
              Waiting List Avialability
            </span>
            <div className='flex justify-between max-w-[508px] gap-[92px] items-end'>
              <span className='text-light-purple text-base leading-5 font-semibold max-w-[375px]'>
                Set restaurant availability if your restaurant is busy
              </span>
              <Toggle setEnabled={setEnabled} enabled={enabled} />
            </div>
          </div>
          <div className='flex flex-col border-b-[1px] border-light-blue py-6'>
            <span className='text-xl font-semibold leading-6 text-purple-300'>
              Seating View Area
            </span>
            <div
              className={`${
                addNewArea ? 'max-w-[1040px]' : 'max-w-[637px]'
              } flex justify-between flex-wrap flex-col gap-3 lg:items-end lg:flex-row lg:gap-0`}
            >
              <span className='text-light-purple text-base leading-5 font-semibold max-w-[400px]'>
                Manage available areas, that could be selected by guests
              </span>
              <div className='flex gap-2 flex-wrap'>
                {addNewArea !== 0 &&
                  seatingAreas?.map((el, idx) => {
                    if (idx <= addNewArea - 1) {
                      return (
                        <div key={idx} className='flex gap-2'>
                          <div className='w-[175px] h-[68px] bg-light-grey border-[1px] border-grey-300 rounded-lg gap-3 flex justify-center items-center'>
                            <span className='text-base leading-5 font-semibold text-purple'>
                              {el.name}
                            </span>
                            <Toggle setEnabled={setEnabledDoor} enabled={enabledDoor} />
                          </div>
                          <div className='w-[188px] h-[68px] flex justify-center items-center border-grey-400 border-[1px] rounded-lg gap-[10px]'>
                            <SitIcon />
                            <div className='flex flex-col gap-1'>
                              <input
                                type='text'
                                onChange={handleChangeSeatArea}
                                className='w-[146px] h-9 placeholder:text-[#9292A6] placeholder:text-[13px] placeholder:font-semibold border-[1px] border-grey-500 rounded-lg'
                                placeholder='type a view name'
                              />
                              <span className='text-[10px] text-red font-medium'>{err}</span>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  })}
                <div className='flex items-center gap-[13px] ml-4' onClick={setAddNewArea}>
                  <PlusIcon />
                  <span className='text-xl leading-5 font-semibold text-purple'>Add New Area</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return <div></div>
  }
}

export { SettingsSeat }
