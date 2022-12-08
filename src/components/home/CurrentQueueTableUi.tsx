import { useLayoutEffect, useRef, useState } from 'react'
import { IPeople, people } from '../../utils/constants'
import CurrentQueueTbody from './CurrentQueueTbody'

interface CurrentQueueTableUiProps {
  selectedPeople: IPeople[]
  setSelectedPeople: (selectedPeople: IPeople[]) => void
  setOpen: (open: boolean) => void
  setDetail: (detail: number) => void
}

const CurrentQueueTableUi = ({
  setOpen,
  selectedPeople,
  setSelectedPeople,
  setDetail,
}: CurrentQueueTableUiProps) => {
  const checkbox = useRef<HTMLInputElement>(null)
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState<boolean>(false)
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

  const handleShowDetail = (person: number) => {
    setDetail(person)
    setOpen(true)
  }
  return (
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
          <th scope='col' className='px-3 py-3.5 text-left text-sm font-semibold text-light-purple'>
            Queue Number
          </th>
          <th scope='col' className='px-3 py-3.5 text-left text-sm font-semibold text-light-purple'>
            Phone Number
          </th>
          <th scope='col' className='px-3 py-3.5 text-left text-sm font-semibold text-light-purple'>
            Guests
          </th>
          <th scope='col' className='px-3 py-3.5 text-left text-sm font-semibold text-light-purple'>
            Booking Status
          </th>
          <th scope='col' className='px-3 py-3.5 text-left text-sm font-semibold text-light-purple'>
            Action view
          </th>
        </tr>
      </thead>
      <CurrentQueueTbody
        handleSetSeated={handleSetSeated}
        handleShowDetail={handleShowDetail}
        seated={seated}
        setSelectedPeople={setSelectedPeople}
        selectedPeople={selectedPeople}
      />
    </table>
  )
}

export { CurrentQueueTableUi }
