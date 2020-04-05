import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton,
  IonButtons
} from '@ionic/react';
import './Tab3.css';
import articles from '../data/articles';
import { RouteComponentProps } from 'react-router';

const getArticle: any = (params: any) => {
  console.log(params)
  return articles.filter(a => a.id != params.id)[0]
}

const Article: React.FC<RouteComponentProps> = ({ match, history, location}) => {
  let [article, setArticle] = useState({title: '', id: '', body: []})

  useEffect(() => {
    try {
      let data = getArticle(match.params)
      console.log(data)
      setArticle(data)
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/news" />
          </IonButtons>
          <IonTitle>{article && article.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/news" />
            </IonButtons>
            <IonTitle size="large">{article && article.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {article && article.body.map((text, index) => (
          <p 
            style={{
              fontSize: "18px",
              lineHeight: "24px",
              paddingLeft: "8px",
              paddingRight: "8px"
            }}
            key={index}>{text}</p>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Article;
