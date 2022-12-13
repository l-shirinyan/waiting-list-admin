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

interface IReservations {
  reservationNumber: string
  guestName: string
  phoneNamber: string
  queueNumber: string
  guests: string
  bookingStatus: string
  id: number
}

interface IQrCode {
  title: string
  text: string
  id: number
}

interface IPublishingOptions {
  title: string
  current: boolean
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
    link: 'qr-code',
    Icon: QrCodeIcon,
    title: 'QR Code',
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

export const qrcode: IQrCode[] = [
  {
    id: 1,
    title: 'Basic QR Code',
    text: '.svg file type of your QR',
  },
  {
    id: 2,
    title: 'Sticker',
    text: '7x7cm sticker with customizable colours',
  },
  {
    id: 3,
    title: 'Table tent',
    text: '8x12cm foldable stand with customizable colours',
  },
]

export const publishingOptions: IPublishingOptions[] = [
  {
    title: 'BOOKED',
    current: true,
  },
  {
    title: 'SEATED',
    current: false,
  },
  {
    title: 'CANCELLED',
    current: false,
  },
]
