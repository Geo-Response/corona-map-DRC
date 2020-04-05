import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import METRICS from '../geo/metrics.json'

interface DataItem {
  town: string;
  active: number;
  recovered: number;
  death: number;
}

const mapMmetrics = (m: any) => ({
  town: m.properties.name,
  active: m.properties.nombre_total_de_cas,
  recovered: m.properties.nombre_de_personnes_retablies,
  death: m.properties.nombre_de_victimes
})

const data: any[] = METRICS.map(mapMmetrics).sort((a, b) => a.active > b.active ? -1 : +1 ).filter(i => (
  i.active != 0 || i.recovered != 0 || i.death != 0
))


const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Charts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Charts</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div style={{
          left: 0,
          top: 0,
          right: 0,
          overflowX: "scroll"
        }}>
          <ResponsiveContainer
            height={300}
            width={'100%'}
          >
            <BarChart
              data={data}
              margin={{
                top: 20, right: 0, left: 0, bottom: 0
              }}

            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="town" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="active" fill="#EA8C35" />
              <Bar dataKey="death" fill="#B50122" />
              <Bar dataKey="recovered" fill="#08725F" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
