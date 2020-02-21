import React, { useEffect } from 'react';
import SliderContainer from './Slider/SliderContainer';
import FlashcardsContainer from './Flashcards/FlashcardsContainer';
import { Grid, withStyles, createStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import {
  getFlashcardsCategories,
  getAllUserFlashcards,
  setCurrentFLashcardsCategory
} from '../../actions/flashcards';

const styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative'
  }
});

const UserFlashcardsContainer = ({
  classes,
  flashcards,
  getFlashcardsCategories,
  getAllUserFlashcards,
  setCurrentFLashcardsCategory
}) => {
  useEffect(() => {
    getFlashcardsCategories();
    getAllUserFlashcards();
    //eslint-disable-next-line
  }, []);

  return (
    <Grid className={classes.container}>
      {flashcards.categories && (
        <SliderContainer
          categories={flashcards.categories.categories}
          setCategory={setCurrentFLashcardsCategory}
        />
      )}
      <Grid container direction='column' style={{ width: '100%' }}>
        {flashcards.currentFlashcards && (
          <FlashcardsContainer flashcards={flashcards.currentFlashcards} />
        )}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  flashcards: state.flashcards
});

export default connect(mapStateToProps, {
  getFlashcardsCategories,
  getAllUserFlashcards,
  setCurrentFLashcardsCategory
})(withStyles(styles)(UserFlashcardsContainer));
