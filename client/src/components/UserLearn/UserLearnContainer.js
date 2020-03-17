import React, { useState, useEffect } from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import CategoryListContainer from './LearnCategory/CategoryListContainer';
import LearnListContainer from './LearnItem/LearnListContainer';
import { connect } from 'react-redux';
import { getAllUserLearnCategories } from '../../actions/learn';

const styles = createStyles({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap'
  }
});

const UserLearnContainer = ({
  classes,
  categories,
  categoryLoading,
  getAllUserLearnCategories
}) => {
  const [isOpenItemFormModal, setIsOpenItemFormModal] = useState({
    open: false,
    mode: ''
  });
  const [isOpenCategoryModal, setIsOpenCategoryFormModal] = useState({
    open: false,
    mode: ''
  });

  useEffect(() => {
    getAllUserLearnCategories();
    //eslint-disable-next-line
  }, []);

  return (
    <Grid className={classes.primaryContainer}>
      <CategoryListContainer
        categories={categories}
        loading={categoryLoading}
      />
      <LearnListContainer />
    </Grid>
  );
};

const mapStateToProps = state => ({
  categories: state.learn.learnCategories,
  categoryLoading: state.learn.categoryLoading
});

export default connect(mapStateToProps, { getAllUserLearnCategories })(
  withStyles(styles)(UserLearnContainer)
);
