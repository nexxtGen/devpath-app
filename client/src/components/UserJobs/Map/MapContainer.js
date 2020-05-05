import React, { useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import MarkersList from './MarkersList';

const MapLeaflet = ({ companies, jobs, currentCompany }) => {
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
          <MarkersList
            companies={companies}
            jobs={jobs}
            currentCompany={currentCompany}
          />
        </Map>
      )}
    </Grid>
  );
};

const mapStateToProps = state => ({
  companies: state.jobs.companies,
  jobs: state.jobs.jobs,
  currentCompany: state.jobs.currentCompany
});

export default connect(mapStateToProps, {})(MapLeaflet);
