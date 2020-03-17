import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import CategoryList from './CategoryList';
import { primaryLight } from '../../../shared/colors';

const styles = createStyles({
  primaryContainer: {},
  header: {
    background: primaryLight,
    padding: 8,
    width: '400px',
    heigth: '50px'
  },
  typo: {
    color: 'white'
  },
  listContainer: {
    overflow: 'auto'
  }
});

const CategoryListContainer = ({ classes, categories, loading }) => {
  return (
    <Grid className={classes.primaryContainer}>
      <Grid className={classes.header}>
        <Typography variant='subtitle2' className={classes.typo}>
          Categories
        </Typography>
      </Grid>
      <Grid className={classes.listContainer}>
        <CategoryList categories={categories} loading={loading} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CategoryListContainer);
