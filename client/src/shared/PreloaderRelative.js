import React from 'react';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { primary } from './colors';

const Preloader = () => {
  return (
    <Grid
      style={{
        position: 'relative',
        margin: 'auto',
        marginTop: '20%'
      }}
    >
      <CircularProgress style={{ color: primary }} />
    </Grid>
  );
};

export default Preloader;
