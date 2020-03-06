import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const customMarker = new L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png',
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
        {company.website}
      </Popup>
    </Marker>
  );
};

export default MapMarker;
