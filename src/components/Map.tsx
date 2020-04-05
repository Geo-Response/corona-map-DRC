import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

interface ContainerProps { }

interface State {
  viewport: ViewPort;
}

interface ViewPort {
  width?: number;
  height?: number;
  latitude: number;
  longitude: number;
  zoom: number;
}

class Map extends React.Component<ContainerProps, State, null>  {

  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 3,
      longitude: 11.5,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
        // className="map"
        {...this.state.viewport}
        height='100%'
        width='100%'
        ref={console.log}
        onViewportChange={(viewport: ViewPort) => this.setState({ viewport })}
        mapboxApiAccessToken="pk.eyJ1Ijoia2FtaXJ1dmljZSIsImEiOiJjazgweHZxaWgwMTQzM2ZzM3c0djl1dXlrIn0.JnPVXLFeeQ_FgSjiC9El0w"
      >
        <Marker {...this.state.viewport} />
      </ReactMapGL>
    );
  }
}

export default Map;
