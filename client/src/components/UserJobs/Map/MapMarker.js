import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const customMarker = new L.icon({
  iconUrl: '/leaflet/marker_blue.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -30]
});

const MapMarker = ({ company }) => {
  return (
    <Marker position={company.location.coordinates} icon={customMarker}>
      <Popup>
        {company.name}
        <br />
        <a href={company.website} target='blank'>
          {company.website}
        </a>
      </Popup>
    </Marker>
  );
};

export default MapMarker;
