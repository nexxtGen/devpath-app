import React, { useEffect } from 'react';
import SliderContainer from './Slider/SliderContainer';
import { Grid, withStyles, createStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { getFlashcardsCategories } from '../../actions/flashcardsCategories';

const styles = createStyles({
  container: {
    display: 'flex',
    direction: 'row',
    width: '100%',
    position: 'relative'
  }
});

const UserFlashcardsContainer = ({
  classes,
  flashcardsCategories,
  getFlashcardsCategories
}) => {
  useEffect(() => {
    getFlashcardsCategories();
    //eslint-disable-next-line
  }, []);

  return (
    <Grid className={classes.container}>
      {flashcardsCategories.categories && (
        <SliderContainer
          categories={flashcardsCategories.categories.categories}
        />
      )}
    </Grid>
  );
};

const mapStateToProps = state => ({
  flashcardsCategories: state.flashcardsCategories
});

export default connect(mapStateToProps, { getFlashcardsCategories })(
  withStyles(styles)(UserFlashcardsContainer)
);
