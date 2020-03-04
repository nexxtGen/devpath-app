import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Grid } from '@material-ui/core';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customMarker = new L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [-25, 0]
});

export default class MapLeaflet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 51.108978,
      lng: 17.032669,
      zoom: 13
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div id='map'>
        <Map
          style={{ minHeight: '400px', width: '100%' }}
          center={position}
          zoom={6}
        >
          <TileLayer
            url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customMarker}>
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}
