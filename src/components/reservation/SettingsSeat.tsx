import { Toggle } from './Toggle'
import { ReactComponent as PlusIcon } from '../../assets/icons/add.svg'
import { ReactComponent as SitIcon } from '../../assets/icons/airline_seat_recline_normal.svg'
import React, { useEffect, useState } from 'react'
import { getSeatAreas } from '../../redux/queries'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchSeatAreas } from '../../redux/queue/queueSlice'
import { updateDetail } from '../../redux/queries'
import { SEAT_URL } from '../../utils/constants'
import { ISeat } from '../../redux/queue/model'

interface ISettingsSeat {
  addNewArea: boolean
  setAddNewArea: () => void
}

interface IArea {
  enabled?: boolean
  id?: number
  is_active?: boolean
}

const SettingsSeat = ({ addNewArea, setAddNewArea }: ISettingsSeat) => {
  const { identity_id } = useAppSelector((state) => state.isAuth)
  const [seatValue, setSeatValue] = useState('')
  const { data, isLoading, isSuccess } = getSeatAreas(
    `?identity_id=${identity_id}`,
    'get',
    'areaKey',
  )
  const { seatingAreas } = useAppSelector((state) => state.queueData)
  const [enabled, setEnabled] = useState(false)
  const [area, setArea] = useState<IArea>({ id: 0, is_active: true })
  const [success, setSuccess] = useState('')
  const { mutate } = updateDetail(SEAT_URL + `${area.id}`, 'patch')
  const { mutate: seatMutate } = updateDetail(SEAT_URL + '', 'post', addSeatArea)
  const dispatch = useAppDispatch()

  function addSeatArea() {
    setSuccess('Successfuly created')
    const time = setTimeout(() => {
      setSuccess('')
    }, 2000)

    return clearTimeout(time)
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(fetchSeatAreas(data))
    }
  }, [data])

  useEffect(() => {
    if (area.id) {
      const dataArea = JSON.parse(JSON.stringify(seatingAreas))
      mutate.mutate({ is_active: !area.is_active })
      const index = dataArea.findIndex((item: ISeat) => item.id === area.id)
      dataArea[index].is_active = !area.is_active

      dispatch(fetchSeatAreas(dataArea))
    }
  }, [area])

  const handleChangeAreaActive = (is_active?: boolean, id?: number) => {
    setArea({ id, is_active })
  }
  const handleChangeSeatArea = (e: React.ChangeEvent) => {
    const val = (e.target as HTMLInputElement).value
    setSeatValue(val)
  }

  const handleSendSeatValue = () => {
    if (seatValue) {
      seatMutate.mutate({ name: seatValue })
      const dataArea = JSON.parse(JSON.stringify(seatingAreas))
      dataArea.push({
        name: seatValue,
        is_active: true,
        identity_id: identity_id,
      })
      dispatch(fetchSeatAreas(dataArea))
      setSeatValue('')
    }
  }
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
              <Toggle setEnabled={() => setEnabled((prev) => !prev)} enabled={enabled} />
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
                {addNewArea && (
                  <div className='flex gap-2 flex-wrap'>
                    {seatingAreas?.map((el) => {
                      return (
                        <div
                          key={el.id}
                          className='w-[175px] h-[68px] bg-light-grey border-[1px] border-grey-300 rounded-lg gap-3 flex justify-center items-center'
                        >
                          <span className='text-base leading-5 font-semibold text-purple'>
                            {el.name}
                          </span>
                          <Toggle
                            setEnabled={handleChangeAreaActive}
                            enabled={el.is_active}
                            el={el}
                          />
                        </div>
                      )
                    })}
                    <div className='w-[188px] h-[68px] flex justify-center items-center border-grey-400 border-[1px] rounded-lg gap-[10px]'>
                      <SitIcon />
                      <div className='flex flex-col gap-1'>
                        <input
                          type='text'
                          value={seatValue}
                          onChange={handleChangeSeatArea}
                          onBlur={handleSendSeatValue}
                          className='w-[146px] h-9 placeholder:text-[#9292A6] placeholder:text-[13px] placeholder:font-semibold border-[1px] border-grey-500 rounded-lg'
                          placeholder='type a view name'
                        />
                        <span className='text-[10px] text-green font-medium'>{success}</span>
                      </div>
                    </div>
                  </div>
                )}
                {!addNewArea && (
                  <div className='flex items-center gap-[13px] ml-4' onClick={setAddNewArea}>
                    <PlusIcon />
                    <span className='text-xl leading-5 font-semibold text-purple'>
                      Add New Area
                    </span>
                  </div>
                )}
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
