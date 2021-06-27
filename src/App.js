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
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {

  const [targetDate, setTargetDate] = useState(new Date().toISOString() )
  const [userDateOfBirth, setUserDateOfBirth] = useLocalStorage('birthDate', '')

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color='secondary'>
          <IonTitle>Biorythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      {userDateOfBirth && <BiorythmCard targetDate={targetDate} userDateOfBirth={userDateOfBirth}/>}
        <IonItem>
          <IonLabel position='fixed'>Birth Date:</IonLabel>
          <IonDatetime placeholder='Date of birthday' onIonChange={(e) => setUserDateOfBirth(e.detail.value)} value={userDateOfBirth} displayFormat='DD MMM YYYY' />
        </IonItem>
        <IonItem>
          <IonLabel position='fixed'>Target date:</IonLabel>
          <IonDatetime placeholder='Date of birthday' onIonChange={(e) => setTargetDate(e.detail.value)} value={targetDate} displayFormat='DD MMM YYYY' />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
