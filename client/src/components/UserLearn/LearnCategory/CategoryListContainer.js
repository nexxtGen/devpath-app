import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import CategoryList from './CategoryList';
import { primaryLight } from '../../../shared/colors';

const styles = createStyles({
  primaryContainer: {
    marginRight: '50px'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    background:
      'linear-gradient(-135deg, rgba(101,74,141,1) 0%,rgba(88,62,125,1) 50%,rgba(67,39,98,1) 100%)',
    padding: 8,
    width: '400px',
    height: '47px'
  },
  typo: {
    color: 'white',
    textTransform: 'uppercase'
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
