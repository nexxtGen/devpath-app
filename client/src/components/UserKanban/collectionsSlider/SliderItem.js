import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import BasicButton from '../../../shared/BasicButton';
import styles from './sliderItemStyles';
import PropTypes from 'prop-types';

const SliderItem = ({ classes, image, name, id, setCategory }) => {
  return (
    <Grid>
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
        onClick={() => setCategory(id)}
      >
        {name}
      </BasicButton>
    </Grid>
  );
};

SliderItem.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
export default withStyles(styles)(SliderItem);
