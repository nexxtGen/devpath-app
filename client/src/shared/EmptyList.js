import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';

const styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 30,
    margin: 'auto'
  },
  text: {
    fontSize: 18,
    color: '#191919'
  }
});

const Preloader = ({ classes }) => {
  return (
    <Grid className={classes.container}>
      <Typography className={classes.text}>List is Empty</Typography>
    </Grid>
  );
};

export default withStyles(styles)(Preloader);
