import React from 'react';
import Flashcard from './Flashcard';
import { Grid, withStyles, createStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = createStyles({
  container: {
    display: 'flex',
    direction: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginTop: '80px'
  }
});

const FlashcardsList = ({ classes, flashcards, open }) => {
  return (
    <Grid className={classes.container}>
      {flashcards.map((card, index) => (
        <Flashcard key={index} card={card} open={open} />
      ))}
    </Grid>
  );
};

FlashcardsList.propTypes = {
  classes: PropTypes.object.isRequired,
  flashcards: PropTypes.array
};
export default withStyles(styles)(FlashcardsList);
