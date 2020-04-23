import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import BasicButton from '../../../shared/BasicButton';
import styles from './sliderStyles';
import PropTypes from 'prop-types';

const SliderItem = ({ classes, collection, setCollection }) => {
  const { image, name } = collection;
  return (
    <Grid className={classes.rombContainer}>
      <Grid
        className={classes.romb}
        style={{ backgroundImage: `url('${image}')` }}
      >
        <Grid className={classes.triangle1}></Grid>
        <Grid className={classes.triangle2}></Grid>
        <Grid className={classes.triangle3}></Grid>
        <Grid className={classes.triangle4}></Grid>
      </Grid>
      <BasicButton
        style={{
          transform: 'translate(-50px, -6px)',
          fontSize: '12px'
        }}
        onClick={() => setCollection(collection)}
      >
        {name}
      </BasicButton>
    </Grid>
  );
};

SliderItem.propTypes = {
  classes: PropTypes.object.isRequired,
  collection: PropTypes.object.isRequired
};
export default withStyles(styles)(SliderItem);
