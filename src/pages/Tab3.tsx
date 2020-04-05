import React from 'react';
import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent
 } from '@ionic/react';
import './Tab3.css';
import articles from '../data/articles';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>News</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">News</IonTitle>
          </IonToolbar>
        </IonHeader>
        {
          articles.map(article => (
            <IonCard
              key={article.id}
              routerDirection="forward"
              routerLink={`/news/${article.title}/${article.id}`}
            >
              <IonCardHeader>
                <IonCardSubtitle>{article.title}</IonCardSubtitle>
                {/* <IonCardTitle>Card Title</IonCardTitle> */}
              </IonCardHeader>

              <IonCardContent>
                {article.body[0].slice(0, 150) + '....'}
              </IonCardContent>
            </IonCard>
          ))
        }
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
