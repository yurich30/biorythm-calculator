import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonItem,
  IonDatetime,
} from '@ionic/react';
import React,{useState} from 'react';
import BiorythmCard from './components/BiorythmCard'

function App() {

  const targetDate = new Date().toISOString()
  const [userDateOfBirth, setUserDateOfBirth] = useState()

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position='stacked'>Date of birth:</IonLabel>
          <IonDatetime placeholder='Date of birthday' onIonChange={(e) => setUserDateOfBirth(e.detail.value)} value={userDateOfBirth} displayFormat='DD MMM YYYY' />
        </IonItem>
        <BiorythmCard targetDate={targetDate}/>
      </IonContent>
    </IonApp>
  );
}

export default App;
