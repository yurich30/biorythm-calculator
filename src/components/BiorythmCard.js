import { 
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
} from '@ionic/react'
import dayjs from 'dayjs'
import React from 'react'
import BiorythmChart from './BiorythmChart'
import { calculateBiorythms } from '../calculations'
import './BiorythmCard.css'

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
          <BiorythmChart targetDate={targetDate} userDateOfBirth={userDateOfBirth} />
          <p className='green'>Phisical: {physical.toFixed(4)}</p>
          <p className='red'>Emotioonal: {emotional.toFixed(4)}</p>
          <p className='blue'>Intellectual: {intellectual.toFixed(4)}</p>
        </IonCardContent>
      </IonCard>
  )
}

export default BiorythmCard 