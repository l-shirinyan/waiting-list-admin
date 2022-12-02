import { ReactComponent as QueueIcon } from '../assets/icons/queue.svg'
import { ReactComponent as HistoryIcon } from '../assets/icons/history.svg'
import { ReactComponent as Settings } from '../assets/icons/settings.svg'
import { ReactComponent as QrCodeIcon } from '../assets/icons/qr-code.svg'
import { FunctionComponent, SVGProps } from 'react'

interface ISideBarLinks {
  link: string
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
  title: string
}
export interface IPeople {
  guestName: string
  queueNumber: string
  phoneNamber: string
  guests: string
  bookingStatus: string
  avtive: string
  id: number
}

interface IHistories {
  title: string
  num: number
}

interface IReservations {
  reservationNumber: string
  guestName: string
  phoneNamber: string
  queueNumber: string
  guests: string
  bookingStatus: string
  id: number
}

export const sideBarLinks: ISideBarLinks[] = [
  {
    link: '',
    Icon: QueueIcon,
    title: 'Current Queue',
  },
  {
    link: 'history',
    Icon: HistoryIcon,
    title: 'History',
  },
  {
    link: 'settings',
    Icon: Settings,
    title: 'Settings',
  },
  {
    link: 'qr-ode',
    Icon: QrCodeIcon,
    title: 'QR Code',
  },
]

export const people: IPeople[] = [
  {
    guestName: 'Ahmed Goudaa Moham..',
    queueNumber: '13th',
    phoneNamber: '+2 010 765 599 98',
    guests: '4 Guest',
    bookingStatus: 'Booked',
    avtive: 'Seated',
    id: 1,
  },
  {
    guestName: 'Ahmed Goudaa Moham..',
    queueNumber: '13th',
    phoneNamber: '+2 010 765 599 98',
    guests: '4 Guest',
    bookingStatus: 'Booked',
    avtive: 'Seated',
    id: 10,
  },
  {
    guestName: 'Ahmed Goudaa Moham..',
    queueNumber: '13th',
    phoneNamber: '+2 010 765 599 98',
    guests: '4 Guest',
    bookingStatus: 'Booked',
    avtive: 'Seated',
    id: 2,
  },
  {
    guestName: 'Ahmed Goudaa Moham..',
    queueNumber: '13th',
    phoneNamber: '+2 010 765 599 98',
    guests: '4 Guest',
    bookingStatus: 'Booked',
    avtive: 'Seated',
    id: 3,
  },
  {
    guestName: 'Ahmed Goudaa Moham..',
    queueNumber: '13th',
    phoneNamber: '+2 010 765 599 98',
    guests: '4 Guest',
    bookingStatus: 'Booked',
    avtive: 'Seated',
    id: 4,
  },
  {
    guestName: 'Ahmed Goudaa Moham..',
    queueNumber: '13th',
    phoneNamber: '+2 010 765 599 98',
    guests: '4 Guest',
    bookingStatus: 'Booked',
    avtive: 'Seated',
    id: 5,
  },
]

export const histories: IHistories[] = [
  {
    title: 'Booked Reservations',
    num: 7632,
  },
  {
    title: 'Seated Reservations',
    num: 7632,
  },
  {
    title: 'Canceled Reservations',
    num: 7632,
  },
  {
    title: 'No Show Reservations',
    num: 7632,
  },
]

export const reservations: IReservations[] = [
  {
    reservationNumber: '87465574',
    guestName: 'Ahmed Goudaa Moham..',
    phoneNamber: '+2 010 765 599 98',
    queueNumber: '13th',
    guests: '4 Guest',
    bookingStatus: 'Cancelled',
    id: 2,
  },
  {
    reservationNumber: '87465574',
    guestName: 'Ahmed Goudaa Moham..',
    phoneNamber: '+2 010 765 599 98',
    queueNumber: '13th',
    guests: '4 Guest',
    bookingStatus: 'No Show',
    id: 1,
  },
  {
    reservationNumber: '87465574',
    guestName: 'Ahmed Goudaa Moham..',
    phoneNamber: '+2 010 765 599 98',
    queueNumber: '13th',
    guests: '4 Guest',
    bookingStatus: 'Seated',
    id: 5,
  },
  {
    reservationNumber: '87465574',
    guestName: 'Ahmed Goudaa Moham..',
    phoneNamber: '+2 010 765 599 98',
    queueNumber: '13th',
    guests: '4 Guest',
    bookingStatus: 'Seated',
    id: 7,
  },
  {
    reservationNumber: '87465574',
    guestName: 'Ahmed Goudaa Moham..',
    phoneNamber: '+2 010 765 599 98',
    queueNumber: '13th',
    guests: '4 Guest',
    bookingStatus: 'No Show',
    id: 8,
  },
  {
    reservationNumber: '87465574',
    guestName: 'Ahmed Goudaa Moham..',
    phoneNamber: '+2 010 765 599 98',
    queueNumber: '13th',
    guests: '4 Guest',
    bookingStatus: 'Cancelled',
    id: 6,
  },
]
