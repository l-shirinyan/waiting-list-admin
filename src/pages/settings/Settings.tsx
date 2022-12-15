import { Reservation } from '../../components/reservation/Reservation'
import { useAppSelector } from '../../hooks/redux'
import { getTerms } from '../../redux/queries'

const Settings = () => {
  const { identity_id } = useAppSelector((state) => state.isAuth)
  const { data: termsData, isLoading } = getTerms(`?identity_id=${identity_id}`, 'get', 'termsKey')

  if (isLoading) return <div></div>
  else {
    return (
      <div className='w-full h-max bg-grey-100 pb-[69px]'>
        <Reservation termsData={termsData} />
      </div>
    )
  }
}

export { Settings }
