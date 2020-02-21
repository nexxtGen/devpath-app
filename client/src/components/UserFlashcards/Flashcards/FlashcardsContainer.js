import React from 'react';
import FlashcardsList from './FlashcardsList';
import { Grid, withStyles, createStyles } from '@material-ui/core';

const styles = createStyles({
  container: {
    display: 'flex',
    direction: 'column',
    width: '100%'
  }
});

const FlashcardsContainer = ({ classes, flashcards }) => {
  return (
    <Grid className={classes.container}>
      Flashcards Container
      <FlashcardsList flashcards={flashcards} />
    </Grid>
  );
};

export default withStyles(styles)(FlashcardsContainer);
