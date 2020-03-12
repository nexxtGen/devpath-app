import React from 'react';
import { Grid, withStyles, createStyles, Typography } from '@material-ui/core';

const styles = createStyles({});

const CategoryItem = ({ classes, category }) => {
  return (
    <Grid className={classes.primaryContainer}>
      <Typography>{category.name}</Typography>
    </Grid>
  );
};

export default withStyles(styles)(CategoryItem);
