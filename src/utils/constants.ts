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

export interface IPeople {
  guestName: string
  queueNumber: string
  phoneNamber: string
  guests: string
  bookingStatus: string
  avtive: string
  id: number
}

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
  {
    guestName: 'Ahmed Goudaa Moham..',
    queueNumber: '13th',
    phoneNamber: '+2 010 765 599 98',
    guests: '4 Guest',
    bookingStatus: 'Booked',
    avtive: 'Seated',
    id: 6,
  },
  {
    guestName: 'Ahmed Goudaa Moham..',
    queueNumber: '13th',
    phoneNamber: '+2 010 765 599 98',
    guests: '4 Guest',
    bookingStatus: 'Booked',
    avtive: 'Seated',
    id: 7,
  },
  {
    guestName: 'Ahmed Goudaa Moham..',
    queueNumber: '13th',
    phoneNamber: '+2 010 765 599 98',
    guests: '4 Guest',
    bookingStatus: 'Booked',
    avtive: 'Seated',
    id: 8,
  },
]
