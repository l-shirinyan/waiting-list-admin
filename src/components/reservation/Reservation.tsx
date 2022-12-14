import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'
import { ReactComponent as BackUpIcon } from '../../assets/icons/backup.svg'
import React, { useState } from 'react'
import { getTerms, updateDetail } from '../../redux/queries'
import { useAppSelector } from '../../hooks/redux'
import { SettingsSeat } from './SettingsSeat'
import { Limitations } from './Limitations'
import { BASE_URL, SEAT_URL, TERMS_URL } from '../../utils/constants'

const Reservation = () => {
  const { identity_id } = useAppSelector((state) => state.isAuth)
  // const { data, isLoading, isSuccess } = getTerms(`?identity_id=${identity_id}`, 'get', 'termsKey')
  const [terms, setTerms] = useState(false)
  const [termsValue, setTermsValue] = useState('')
  const [fileInput, setFileInput] = useState('')
  const [seatValue, setSeatValue] = useState('')

  const [guestCounts, setGuestCounts] = useState({
    first: false,
    second: false,
    firstVal: '',
    secondVal: '',
  })
  // const [termsValue, setTermsValue] = useState(isSuccess && data?.text)
  const [addNewArea, setAddNewArea] = useState<number>(0)
  const [errors, setErrors] = useState({ new_area: '', terms: '', guests: '', file: '' })
  const { mutate } = updateDetail(SEAT_URL + '', 'post')
  const { mutate: terms_mutate } = updateDetail(TERMS_URL + '', 'patch')
  const { mutate: limit } = updateDetail(BASE_URL + '/v1/limitations', 'patch')

  const handleChangeSeatArea = (e: React.ChangeEvent) => {
    const val = (e.target as HTMLInputElement).value
    setSeatValue(val)
  }

  const handleSetNewArea = () => {
    setAddNewArea((prev) => prev + 1)
  }
  const handleEditTerms = () => {
    setTerms((prev) => !prev)
  }
  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }
    setFileInput(e?.target?.files[0]?.name)
  }
  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault()
    mutate.mutate({ name: seatValue })
    terms_mutate.mutate({ text: termsValue })
    limit.mutate({ max_guest_count: guestCounts.first, max_queue_count: guestCounts.second })
  }

  const inputsVal = (e: React.ChangeEvent<HTMLInputElement>, val: string) => {
    setGuestCounts((prev) => {
      return { ...prev, [val]: e.target.value }
    })
  }
  const handleChange = (item: string, bool: boolean) => {
    setGuestCounts((prev) => {
      return { ...prev, [item]: bool }
    })
  }
  // if (!isLoading) return <div></div>
  // else {
  return (
    <form
      onSubmit={handleSaveChanges}
      className='pt-[55px] flex flex-col gap-6 pl-5 pr-5 xl:pl-[43px] xl:pr-[61px]'
    >
      <div className='flex justify-between'>
        <h3 className='leading-10 font-semibold text-blue text-[32px]'>Reservation settings</h3>
      </div>
      <div className='w-full h-full bg-white p-6 rounded-xl'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1 border-b-[1px] border-light-blue pb-6'>
            <SettingsSeat
              err={errors.new_area}
              addNewArea={addNewArea}
              setAddNewArea={handleSetNewArea}
              handleChangeSeatArea={handleChangeSeatArea}
            />
          </div>
          <div className='flex flex-col gap-1 border-b-[1px] border-light-blue py-6'>
            <span className='text-xl font-semibold leading-6 text-purple-300'>
              Waiting List Terms & Condition
            </span>
            <div className='flex flex-col gap-3 justify-between max-w-[961px] items-stretch lg:gap-[105px] lg:flex-row'>
              <span className='text-light-purple text-base leading-5 font-semibold max-w-[360px]'>
                Add your own terms and conditions that will appear to your guests
              </span>
              <div className='flex flex-col min-w-[500px]'>
                {!terms ? (
                  <span className='text-base leading-5 font-semibold text-light-grey max-w-[600px] pb-[11px]'>
                    {termsValue}
                  </span>
                ) : (
                  <input
                    type='text'
                    value={termsValue ? termsValue : ''}
                    onChange={(e) => setTermsValue(e.target.value)}
                    className='mb-5 border-[1px] border-grey-50 rounded-[72px]'
                  />
                )}
                <button
                  onClick={handleEditTerms}
                  className='flex gap-[8px] justify-center border-[1px] border-grey-50 items-center rounded-[72px]'
                >
                  <EditIcon />
                  <span className=' font-semibold text-[15px] text-grey-900 leading-6 py-[8px]'>
                    Edit Default Terms
                  </span>
                </button>
              </div>
            </div>
          </div>
          <Limitations
            inputsVal={inputsVal}
            handleChange={handleChange}
            guestCounts={guestCounts}
          />
        </div>
      </div>
      <div className='w-full h-full bg-white rounded-xl flex flex-col gap-3 justify-between py-4 px-6 sm:items-center sm:gap-2 sm:flex-row'>
        <div className='flex flex-col gap-2'>
          <span className='text-[24px] font-semibold leading-[30px] text-dark-grey'>
            Restaurant Photo
          </span>
          <span className='text-base leading-5 text-light-purple'>
            Upload restaurant logo to present it in reservation page
          </span>
        </div>
        <div className='flex justify-center items-center rounded-[50%] h-[115px] w-[115px] bg-grey-150 self-center relative'>
          <input
            type='file'
            id='avatar'
            name='avatar'
            onChange={handleUploadFile}
            accept='image/png, image/jpeg'
            className='opacity-0 w-full h-full absolute'
          />
          <BackUpIcon />
          <span className='text-[10px] text-red font-medium'>{errors.file}</span>
        </div>
      </div>
      <div className='flex w-full justify-end'>
        <button className='bg-purple w-[217px] h-[56px] text-4 leading-4 font-semibold text-white rounded-[48px]'>
          Save Changes
        </button>
      </div>
    </form>
  )
}
// }

export { Reservation }
