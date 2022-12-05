import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { ReactComponent as ArticleIcon } from '../../assets/icons/article.svg'
import { ReactComponent as PencilIcon } from '../../assets/icons/pencil.svg'
import { ReactComponent as DownloadIcon } from '../../assets/icons/downloadqr.svg'
import QrCode from '../../assets/images/code.png'
import { qrcode } from '../../utils/constants'

const mailingLists = [
  { id: 1, title: 'Newsletter', description: 'Last message sent an hour ago', users: '621 users' },
  {
    id: 2,
    title: 'Existing Customers',
    description: 'Last message sent 2 weeks ago',
    users: '1200 users',
  },
  { id: 3, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
]

const QrCodePage = () => {
  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

  return (
    <div className='pt-[55px] flex flex-col gap-4 pl-5 pr-5 xl:pl-[43px] xl:pr-[61px]'>
      <div className='flex justify-between'>
        <h3 className='leading-10 font-semibold text-blue text-[32px]'>QR Code</h3>
      </div>
      <div className='w-full h-full bg-white p-8 rounded-xl flex flex-col gap-8 max-w-[1047px]'>
        <div className='flex flex-col gap-6'>
          <h4 className='text-[24px] font-semibold leading-[30px] text-blue'>
            Your waiting list is ready
          </h4>
          <div className='flex gap-4 items-center flex-wrap'>
            <div className='w-[274px] h-10 bg-light-green flex justify-center items-center gap-[13px] rounded-xl'>
              <span className='text-base font-semibold leading-4 text-light-purple'>
                Link{' '}
                <span className='text-base font-semibold leading-4 text-purple'>
                  2egh0f.favecodes.io
                </span>
              </span>
              <ArticleIcon />
            </div>
            <div className='flex gap-2 items-center'>
              <span className='text-base leading-4 font-semibold text-purple'>Edit</span>
              <PencilIcon />
            </div>
          </div>
        </div>
        <div className='flex items-center gap-8 flex-wrap md:gap-0 md:flex-nowrap lg:gap-[180px] '>
          <div className='w-full max-w-[496px]'>
            <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
              <RadioGroup.Label className='text-[24px] font-semibold leading-[30px] text-blue'>
                QR Code
              </RadioGroup.Label>
              <div className='mt-4 grid grid-cols-1 gap-y-6 sm:gap-x-4'>
                {qrcode.map((item) => (
                  <RadioGroup.Option
                    key={item.id}
                    value={item}
                    className={({ checked }) => {
                      return `${
                        checked ? 'ring-2 ring-[#4A46FF] bg-perwinkle-purple' : ''
                      } relative flex cursor-pointer rounded-lg bg-white p-4 gap-[18px] focus:outline-none items-center`
                    }}
                  >
                    {({ checked }) => (
                      <>
                        <CheckCircleIcon
                          className={`${
                            !checked ? 'bg-white text-white' : 'text-purple'
                          } h-7 w-7 rounded-[50%] border-[1px] border-grey`}
                          aria-hidden='true'
                        />
                        <span className='flex flex-1'>
                          <span className='flex flex-col'>
                            <RadioGroup.Label
                              as='span'
                              className={`block text-sm font-medium ${
                                checked ? 'text-purple-300' : 'text-purple-100'
                              }`}
                            >
                              {item.title}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as='span'
                              className={`mt-1 flex items-center text-sm ${
                                checked ? 'text-purple-300' : 'text-purple-50'
                              }`}
                            >
                              {item.text}
                            </RadioGroup.Description>
                          </span>
                        </span>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
          <img src={QrCode} alt='QrCode' className='max-w-[175px] max-h-175px]' />
        </div>
        <div className='flex flex-wrap gap-3'>
          <button className='text-white bg-purple w-[209px] h-[48px] rounded-[48px] flex justify-center items-center gap-2'>
            Download QR code <DownloadIcon />
          </button>
          <button className='text-purple text-base font-semibold w-[209px] leading-4 border-[2px] border-perwinkle-purple h-[48px] rounded-[48px] flex justify-center items-center gap-2'>
            Delivery / QR Design
          </button>
        </div>
      </div>
    </div>
  )
}

export { QrCodePage }
