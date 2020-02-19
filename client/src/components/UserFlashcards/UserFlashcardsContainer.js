import React from 'react';
import SliderContainer from './Slider/SliderContainer';
import { Grid, withStyles, createStyles } from '@material-ui/core';

const styles = createStyles({
  container: {
    display: 'flex',
    direction: 'row',
    width: '100%',
    position: 'relative'
  }
});

const UserFlashcardsContainer = ({ classes }) => {
  return (
    <Grid className={classes.container}>
      <SliderContainer />
    </Grid>
  );
};
export default withStyles(styles)(UserFlashcardsContainer);
