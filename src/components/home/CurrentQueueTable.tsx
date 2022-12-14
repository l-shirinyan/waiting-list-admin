import { useState } from 'react'
import { useAppSelector } from '../../hooks/redux'
import { IData } from '../../redux/queue/model'
import { ReservationDialog } from '../reservation-func/ReservationDialog'
import { ViewReservation } from '../reservation-func/ViewReservation'
import { CurrentQueueTableUi } from './CurrentQueueTableUi'

interface ICurrentQueueTableProps {
  selectedPeople: IData[] | null
  setSelectedPeople: (selectedPeople: IData[] | null) => void
}

const CurrentQueueTable = ({ selectedPeople, setSelectedPeople }: ICurrentQueueTableProps) => {
  const [open, setOpen] = useState(false)
  const [detail, setDetail] = useState<number>()
  const { queueData } = useAppSelector((state) => state.queueData)

  return (
    <div>
      <CurrentQueueTableUi
        setDetail={setDetail}
        setOpen={setOpen}
        selectedPeople={selectedPeople}
        setSelectedPeople={setSelectedPeople}
      />
      <ReservationDialog open={open} setOpen={setOpen} title='Reservation Details'>
        <ViewReservation queueData={queueData} detail={detail} setDetail={setDetail} />
      </ReservationDialog>
    </div>
  )
}

export { CurrentQueueTable }
