/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import token from '../../config/mapToken';

import 'mapbox-gl/dist/mapbox-gl.css';

class Main extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
  };

  render() {
    const { viewport } = this.state;
    return (
      <ReactMapGL
        {...viewport}
        onViewportChange={view => this.setState({ viewport: view })}
        mapboxApiAccessToken={token}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        onClick={this.handleMapClick}
      >
        <Marker latitude={-23.5439948} longitude={-46.6065452} offsetLeft={-20} offsetTop={-10}>
          <div>You are here</div>
        </Marker>
      </ReactMapGL>
    );
  }
}

export default Main;
