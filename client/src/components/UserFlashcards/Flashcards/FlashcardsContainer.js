import React from 'react';
import FlashcardsList from './FlashcardsList';
import { Grid, withStyles, createStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    marginTop: 20
  }
});

const FlashcardsContainer = ({
  classes,
  currentFlashcards,
  currentCategory,
  filteredFlashcards,
  open,
  loading
}) => {
  return (
    <Grid className={classes.container}>
      <FlashcardsList
        loading={loading}
        currentCategory={currentCategory}
        currentFlashcards={currentFlashcards}
        open={open}
        filteredFlashcards={filteredFlashcards}
      />
    </Grid>
  );
};

FlashcardsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  currentFlashcards: PropTypes.array,
  open: PropTypes.func.isRequired,
  filteredFlashcards: PropTypes.array
};

export default withStyles(styles)(FlashcardsContainer);
