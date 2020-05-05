import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const customMarker = new L.icon({
  iconUrl: '/leaflet/marker_blue.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -30]
});

const activeMarker = new L.icon({
  iconUrl: '/leaflet/marker_active.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -30]
});

const MapMarker = ({ company, currentCompany }) => {
  return (
    <Marker
      position={company.location.coordinates}
      icon={
        currentCompany && currentCompany._id === company._id
          ? activeMarker
          : customMarker
      }
    >
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
