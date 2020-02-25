import React from 'react';
import FlashcardsList from './FlashcardsList';
import { Grid, withStyles, createStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = createStyles({
  container: {
    display: 'flex',
    direction: 'column',
    width: '100%',
    position: 'relative'
  }
});

const FlashcardsContainer = ({ classes, flashcards, open }) => {
  return (
    <Grid className={classes.container}>
      <FlashcardsList flashcards={flashcards} open={open} />
    </Grid>
  );
};

FlashcardsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  flashcards: PropTypes.array
};

export default withStyles(styles)(FlashcardsContainer);
