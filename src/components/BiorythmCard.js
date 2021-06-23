import { 
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
} from '@ionic/react'
import dayjs from 'dayjs'
import React from 'react'

const BiorythmCard = ({targetDate}) => {
  const formatDate = (isoString) => {
    return dayjs(isoString).format('D MMM YYYY')
  }
    return(
        <IonCard className='ion-text-center'>
          <IonCardHeader>
            <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Phisical: 87%</p>
            <p>Emotioonal: 56%</p>
            <p>Intellectual: 99%</p>
          </IonCardContent>
        </IonCard>
    )
}

export default BiorythmCard 