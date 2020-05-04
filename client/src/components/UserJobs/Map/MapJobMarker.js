import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import L from 'leaflet';

const styles = createStyles({
  popupContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const customMarker = new L.icon({
  iconUrl: '/leaflet/marker_green.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -30]
});

const MapMarker = ({ classes, job }) => {
  return (
    <Marker position={job.location.coordinates} icon={customMarker}>
      <Popup>
        <Grid className={classes.popupContainer}>
          <a href={job.source} target='blank'>
            {job.position}
          </a>
          {job.location.city}
        </Grid>
      </Popup>
    </Marker>
  );
};

export default withStyles(styles)(MapMarker);
