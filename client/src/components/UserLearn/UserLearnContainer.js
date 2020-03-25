import React, { useState, useEffect } from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import CategoryListContainer from './LearnCategory/CategoryListContainer';
import LearnListContainer from './LearnItem/LearnListContainer';
import CategoryFormModalContainer from '../UserLearnForms/CategoryFormModalContainer';
import AddBtn from './AddBtn';
import { connect } from 'react-redux';
import {
  getAllUserLearnCategories,
  getAllUserLearnItems
} from '../../actions/learn';

const styles = createStyles({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});

const UserLearnContainer = ({
  classes,
  categories,
  currentCategory,
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
    getAllUserLearnItems();
    //eslint-disable-next-line
  }, []);

  return (
    <Grid className={classes.primaryContainer}>
      <CategoryListContainer
        categories={categories}
        loading={categoryLoading}
      />
      <LearnListContainer currentCategory={currentCategory} />
      <CategoryFormModalContainer
        open={isOpenCategoryModal}
        setIsOpen={setIsOpenCategoryFormModal}
      />
      <AddBtn />
    </Grid>
  );
};

const mapStateToProps = state => ({
  categories: state.learn.learnCategories,
  categoryLoading: state.learn.categoryLoading,
  currentCategory: state.learn.currentCategory
});

export default connect(mapStateToProps, {
  getAllUserLearnCategories,
  getAllUserLearnItems
})(withStyles(styles)(UserLearnContainer));
