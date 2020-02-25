import React, { useEffect, useState } from 'react';
import SliderContainer from './Slider/SliderContainer';
import FlashcardsContainer from './Flashcards/FlashcardsContainer';
import AddBtn from './AddBtn';
import AddFlashcardModal from './../UserFlashcardsForms/AddFlashcardModal';
import { Grid, withStyles, createStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import {
  getFlashcardsCategories,
  getAllUserFlashcards,
  setCurrentFLashcardsCategory
} from '../../actions/flashcards';
import PropTypes from 'prop-types';

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
  const [open, setOpen] = useState(false);
  const [formMode, setFormMode] = useState('');

  const handleClickOpen = mode => {
    setFormMode(mode);
    setOpen(true);
    console.log('Mode', mode);
  };

  const handleClose = () => {
    setOpen(false);
    setFormMode('');
  };

  useEffect(() => {
    getFlashcardsCategories();
    getAllUserFlashcards();
    //eslint-disable-next-line
  }, []);

  return (
    <Grid className={classes.container}>
      <AddFlashcardModal open={open} handleClose={handleClose} />
      {flashcards.categories && (
        <SliderContainer
          categories={flashcards.categories.categories}
          setCategory={setCurrentFLashcardsCategory}
        />
      )}
      <Grid container direction='column' style={{ width: '100%' }}>
        {flashcards.currentFlashcards && (
          <FlashcardsContainer
            flashcards={flashcards.currentFlashcards}
            open={handleClickOpen}
          />
        )}
      </Grid>
      <AddBtn open={handleClickOpen} />
    </Grid>
  );
};

const mapStateToProps = state => ({
  flashcards: state.flashcards
});

UserFlashcardsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  flashcards: PropTypes.object,
  getFlashcardsCategories: PropTypes.func.isRequired,
  getAllUserFlashcards: PropTypes.func.isRequired,
  setCurrentFLashcardsCategory: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {
  getFlashcardsCategories,
  getAllUserFlashcards,
  setCurrentFLashcardsCategory
})(withStyles(styles)(UserFlashcardsContainer));
