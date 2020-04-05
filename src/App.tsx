import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { map, analytics, statsChart, newspaper } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Home from './pages/Home';
import Article from './pages/Article';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/:tab(map)" component={Home} exact={true} />
          <Route path="/:tab(statistics)" component={Tab1} exact={true} />
          <Route path="/:tab(charts)" component={Tab2} exact={true} />
          <Route path="/:tab(news)" component={Tab3} exact={true} />
          <Route path="/:tab(news)/:title/:id" component={Article} />
          <Route path="/" render={() => <Redirect to="/map" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="map" href="/map">
            <IonIcon icon={map} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>
          <IonTabButton tab="statistics" href="/statistics">
            <IonIcon icon={analytics} />
            <IonLabel>Statistics</IonLabel>
          </IonTabButton>
          <IonTabButton tab="charts" href="/charts">
            <IonIcon icon={statsChart} />
            <IonLabel>Charts</IonLabel>
          </IonTabButton>
          <IonTabButton tab="news" href="/news">
            <IonIcon icon={newspaper} />
            <IonLabel>News</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
