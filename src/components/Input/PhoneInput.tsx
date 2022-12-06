import { useEffect, useState } from 'react'
import { ReactComponent as PhoneIcon } from '../../assets/icons/arrow-phone.svg'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const TelInput = () => {
  const [value, setValue] = useState('+966')
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const inp = document.querySelector('.PhoneInputInput')
    const handleSetValue: EventListenerOrEventListenerObject = (e) => {
      setInputValue((e.target as HTMLInputElement).value)
    }

    inp?.addEventListener('keyup', handleSetValue)

    inp?.addEventListener('keydown', handleSetValue)
    return () => {
      document.removeEventListener('keyup', handleSetValue)
      document.removeEventListener('keydown', handleSetValue)
    }
  }, [])
  return (
    <div>
      <PhoneInput
        limitMaxLength
        value={value}
        international
        defaultCountry='SA'
        onChange={(phone: string) => {
          setValue(phone)
        }}
        className={`registrPhoneInput ${inputValue.split(' ').length > 1 ? 'notSelect' : ''} text-base leading-4 font-semibold text-purple-300`}
      />
      {inputValue.split(' ').length === 1 && (
        <div className='absolute flex gap-[10px] items-center top-5 left-[50px] z-50'>
          <span className='text-purple-300 text-[14px] leading-4'>{value || inputValue}</span>
          <PhoneIcon />
        </div>
      )}
    </div>
  )
}

export { TelInput }
