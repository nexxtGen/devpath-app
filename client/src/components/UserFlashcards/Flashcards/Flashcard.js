import React from 'react';
import { Grid, withStyles, createStyles, Typography } from '@material-ui/core';

const styles = createStyles({
  container: {
    width: '300px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid black',
    margin: 15,
    background: 'lightgray'
  }
});

const Flashcard = ({ classes, card }) => {
  const { title, description, code } = card;
  return (
    <Grid className={classes.container}>
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
      <Typography>{code}</Typography>
    </Grid>
  );
};

export default withStyles(styles)(Flashcard);
