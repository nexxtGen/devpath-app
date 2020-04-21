import React, { useEffect } from 'react';
import { Grid, withStyles, createStyles, Typography } from '@material-ui/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CategoryItem from './CategoryItem';
import PreloaderRelative from '../../../shared/PreloaderRelative';

const styles = createStyles({});

const CategoryList = ({
  classes,
  categories,
  loading,
  setCurrentLearnCategory
}) => {
  useEffect(() => {
    if (!loading && categories && categories.length > 0) {
      setCurrentLearnCategory(categories[0]);
    }
  }, [categories]);

  if (
    (!categories && !loading) ||
    (categories && categories.length === 0 && !loading)
  ) {
    return (
      <Grid className={classes.primaryContainer}>
        <Typography>Category list is empty</Typography>
      </Grid>
    );
  }

  return (
    <Grid className={classes.primaryContainer}>
      {categories && categories.length > 0 ? (
        <TransitionGroup className={classes.listContainer}>
          {categories.map(cat => (
            <CSSTransition timeout={400} classNames='item' key={cat._id}>
              <CategoryItem
                category={cat}
                setCurrentLearnCategory={setCurrentLearnCategory}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <PreloaderRelative />
      )}
    </Grid>
  );
};

export default withStyles(styles)(CategoryList);
