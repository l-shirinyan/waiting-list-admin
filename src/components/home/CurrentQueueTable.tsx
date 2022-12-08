import { useState } from 'react'
import { IPeople } from '../../utils/constants'
import { ReservationDialog } from '../reservation-func/ReservationDialog'
import { ViewReservation } from '../reservation-func/ViewReservation'
import { CurrentQueueTableUi } from './CurrentQueueTableUi'

interface ICurrentQueueTableProps {
  selectedPeople: IPeople[]
  setSelectedPeople: (selectedPeople: IPeople[]) => void
}

const CurrentQueueTable = ({ selectedPeople, setSelectedPeople }: ICurrentQueueTableProps) => {
  const [open, setOpen] = useState(false)
  const [detail, setDetail] = useState<number>()

  return (
    <div>
      <CurrentQueueTableUi
        setDetail={setDetail}
        setOpen={setOpen}
        selectedPeople={selectedPeople}
        setSelectedPeople={setSelectedPeople}
      />
      <ReservationDialog open={open} setOpen={setOpen} title='Reservation Details'>
        <ViewReservation detail={detail} setDetail={setDetail} />
      </ReservationDialog>
    </div>
  )
}

export { CurrentQueueTable }
