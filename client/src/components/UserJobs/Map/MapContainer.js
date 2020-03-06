import React, { Component, useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import MarkersList from './MarkersList';

const MapLeaflet = ({ companies }) => {
  const [zoom, setZoom] = useState(13);

  return (
    <Grid id='map'>
      {companies.length > 0 && (
        <Map
          style={{ minHeight: '400px', width: '100%' }}
          center={companies[0].location.coordinates}
          zoom={6}
        >
          <TileLayer
            url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MarkersList companies={companies} />
        </Map>
      )}
    </Grid>
  );
};

const mapStateToProps = state => ({
  companies: state.jobs.companies
});

export default connect(mapStateToProps, {})(MapLeaflet);
