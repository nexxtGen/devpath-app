import React from 'react';
import Flashcard from './Flashcard';
import {
  Grid,
  withStyles,
  createStyles,
  CircularProgress
} from '@material-ui/core';
import { primary } from '../../../shared/colors';
import FlashcardsFilter from './FlashcardsFilter';
import EmptyList from '../../../shared/EmptyList';
import PropTypes from 'prop-types';

const styles = createStyles({
  container: {
    display: 'flex',
    direction: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginTop: '30px'
  },
  cardsContainer: {
    display: 'flex',
    direction: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%'
  },
  progress: {
    color: primary,
    marginTop: 40,
    marginRight: 45
  }
});

const FlashcardsList = ({
  classes,
  currentFlashcards,
  currentCategory,
  filteredFlashcards,
  open,
  loading
}) => {
  return (
    <Grid className={classes.container}>
      <FlashcardsFilter currentCategory={currentCategory} />
      {currentFlashcards.length > 0 || filteredFlashcards ? (
        <Grid className={classes.cardsContainer}>
          {filteredFlashcards !== null
            ? filteredFlashcards.map(card => (
                <Grid key={card._id}>
                  <Flashcard card={card} open={open} />
                </Grid>
              ))
            : currentFlashcards.map(card => (
                <Grid key={card._id}>
                  <Flashcard card={card} open={open} />
                </Grid>
              ))}
        </Grid>
      ) : loading ? (
        <CircularProgress className={classes.progress} />
      ) : (
        <EmptyList />
      )}
    </Grid>
  );
};

FlashcardsList.propTypes = {
  classes: PropTypes.object.isRequired,
  currentFlashcards: PropTypes.array
};
export default withStyles(styles)(FlashcardsList);
