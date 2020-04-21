import React, { useState, useEffect } from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import CategoryListContainer from './LearnCategory/CategoryListContainer';
import LearnListContainer from './LearnItem/LearnListContainer';
import CategoryFormModalContainer from '../UserLearnForms/CategoryFormModalContainer';
import LearnItemFormModalContainer from '../UserLearnForms/LearnItemFormModalContainer';
import CategoriesListModal from '../UserLearnForms/CategoriesListModal';
import AddBtn from './AddBtn';
import Alert from '../../components/layout/Alert';
import { connect } from 'react-redux';
import {
  getAllUserLearnCategories,
  getAllUserLearnItems,
  setCurrentLearnCategory
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
  getAllUserLearnCategories,
  setCurrentLearnCategory
}) => {
  const [isOpenItemFormModal, setIsOpenItemFormModal] = useState({
    open: false,
    mode: ''
  });
  const [isOpenCategoryModal, setIsOpenCategoryFormModal] = useState({
    open: false,
    mode: ''
  });
  const [isOpenCategoriesListModal, setIsOpenCategoriesListModal] = useState(
    false
  );
  useEffect(() => {
    getAllUserLearnCategories();
    getAllUserLearnItems();
    //eslint-disable-next-line
  }, []);

  return (
    <Grid className={classes.primaryContainer}>
      <Alert />
      <CategoryListContainer
        categories={categories}
        loading={categoryLoading}
        setCurrentLearnCategory={setCurrentLearnCategory}
      />
      <LearnListContainer
        currentCategory={currentCategory}
        setIsOpenItemFormModal={setIsOpenItemFormModal}
      />
      <CategoryFormModalContainer
        open={isOpenCategoryModal}
        setIsOpen={setIsOpenCategoryFormModal}
      />
      <LearnItemFormModalContainer
        open={isOpenItemFormModal}
        setIsOpen={setIsOpenItemFormModal}
      />
      <CategoriesListModal
        open={isOpenCategoriesListModal}
        setIsOpen={setIsOpenCategoriesListModal}
        setIsOpenCategoryFormModal={setIsOpenCategoryFormModal}
      />
      <AddBtn
        setIsOpenCategory={setIsOpenCategoryFormModal}
        setIsOpenCategoriesListModal={setIsOpenCategoriesListModal}
        setIsOpenItemFormModal={setIsOpenItemFormModal}
      />
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
  getAllUserLearnItems,
  setCurrentLearnCategory
})(withStyles(styles)(UserLearnContainer));
