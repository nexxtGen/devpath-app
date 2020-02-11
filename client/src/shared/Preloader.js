import React from 'react';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { primary } from './colors';

const Preloader = classes => {
  return (
    <Grid
      style={{
        position: 'absolute',
        top: 'calc(50% - 50px)',
        left: 'calc(50% - 50px)'
      }}
    >
      <CircularProgress style={{ color: primary }} />
    </Grid>
  );
};

export default Preloader;
