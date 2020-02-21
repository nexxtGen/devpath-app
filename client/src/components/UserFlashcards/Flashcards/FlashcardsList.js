import React from 'react';
import Flashcard from './Flashcard';
import { Grid, withStyles, createStyles } from '@material-ui/core';

const styles = createStyles({
  container: {
    display: 'flex',
    direction: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: '80px'
  }
});

const FlashcardsList = ({ classes, flashcards }) => {
  return (
    <Grid className={classes.container}>
      {flashcards.map((card, index) => (
        <Flashcard key={index} card={card}>
          {' '}
          Flashcard item
        </Flashcard>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(FlashcardsList);
