import React from 'react';
import Flashcard from './Flashcard';
import { Grid, withStyles, createStyles } from '@material-ui/core';
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
  }
});

const FlashcardsList = ({
  classes,
  currentFlashcards,
  currentCategory,
  filteredFlashcards,
  open
}) => {
  return (
    <Grid className={classes.container}>
      <FlashcardsFilter currentCategory={currentCategory} />
      {currentFlashcards.length > 0 || filteredFlashcards ? (
        <Grid>
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
