import { 
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
} from '@ionic/react'
import dayjs from 'dayjs'
import React from 'react'
import { calculateBiorythms } from '../calculations'

const BiorythmCard = ({targetDate, userDateOfBirth}) => {
  const formatDate = (isoString) => {
    return dayjs(isoString).format('D MMM YYYY')
  }

  const {physical, emotional, intellectual} = calculateBiorythms(userDateOfBirth, targetDate)

  return(
      <IonCard className='ion-text-center'>
        <IonCardHeader>
          <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Phisical: {physical.toFixed(4)}</p>
          <p>Emotioonal: {emotional.toFixed(4)}</p>
          <p>Intellectual: {intellectual.toFixed(4)}</p>
        </IonCardContent>
      </IonCard>
  )
}

export default BiorythmCard 