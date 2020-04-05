import React from 'react';
import './LeftPanel.css';
import METRICS from '../geo/metrics.json'
import {
  // BrowserView,
  // MobileView,
  // isBrowser,
  isMobile
} from "react-device-detect";

interface ContainerProps { }

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

const data: any[] = METRICS.map(mapMmetrics).sort((a, b) => a.active > b.active ? -1 : +1 )

const TownListItem: React.FC<any> = ({ town, active, recovered, death}) => (
  <div className="list-container">
    <p className="town">{town}</p>
    <p className="cases">{active}</p>
    <p className="death">{death}</p>
    <p className="recovered">{recovered}</p>
  </div>
)

const LeftPanel: React.FC<ContainerProps> = () => {
  return (
    <div className={isMobile ? 'left-panel-container mobile' : 'left-panel-container'}> 
      <div className='header-container'>
        <div>
          <p className="big-text color-cases">88</p>
          <p className="small-head-text">Cases</p>
        </div>
        <div>
          <p className="big-text color-victims">02</p>
          <p className="small-head-text">Victims</p>
        </div>
        <div>
          <p className="big-text color-recovered">02</p>
          <p className="small-head-text">Recovered</p>
        </div>
      </div>
      {/* ./header-container */}

      <div className="data-list">
        {
          data.map(TownListItem)
        }
      </div>
    </div>
  );
};

export default LeftPanel;
