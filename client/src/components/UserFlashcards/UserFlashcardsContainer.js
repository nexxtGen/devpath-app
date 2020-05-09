import React, { useEffect, useState } from 'react';
import Alert from '../../components/layout/Alert';
import SliderContainer from './Slider/SliderContainer';
import FlashcardsContainer from './Flashcards/FlashcardsContainer';
import AddBtn from './AddBtn';
import AddFlashcardModal from './../UserFlashcardsForms/AddFlashcardModal';
import AddCategoryModal from './../UserFlashcardsForms/CategoriesForms/AddCategoryModal';
import EmptyList from '../../shared/EmptyList';
import CategoriesListModal from './CategoriesList/CategoriesListModal';
import Preloader from '../../shared/Preloader';
import { Grid, withStyles, createStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import {
  getFlashcardsCategories,
  getAllUserFlashcards,
  setCurrentFLashcardsCategory
} from '../../actions/flashcards';
import PropTypes from 'prop-types';

const styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative'
  },
  preloaderSliderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: 100,
    marginBottom: 75
  }
});

const UserFlashcardsContainer = ({
  classes,
  flashcards,
  getFlashcardsCategories,
  getAllUserFlashcards,
  setCurrentFLashcardsCategory
}) => {
  const [openFlashcardModal, setOpenFlashcardModal] = useState(false);
  const [openAddCategoryModal, setOpenAddCategoryModal] = useState(false);
  const [openCategoriesListModal, setOpenCategoriesListModal] = useState(false);
  const [formMode, setFormMode] = useState('');

  const handleClickOpenFlashcardModal = mode => {
    setFormMode(mode);
    setOpenFlashcardModal(true);
  };

  const handleCloseFlashcardModal = () => {
    setOpenFlashcardModal(false);
    setTimeout(() => setFormMode(''), 300);
  };

  useEffect(() => {
    getFlashcardsCategories();
    getAllUserFlashcards();
    //eslint-disable-next-line
  }, []);

  const {
    categories,
    currentFlashcards,
    currentCategory,
    filteredFlashcards,
    loading,
    categoriesLoading
  } = flashcards;

  return (
    <Grid className={classes.container}>
      <Alert />
      <AddFlashcardModal
        open={openFlashcardModal}
        handleClose={handleCloseFlashcardModal}
        formMode={formMode}
      />
      <AddCategoryModal
        open={openAddCategoryModal}
        handleClose={setOpenAddCategoryModal}
      />
      <CategoriesListModal
        open={openCategoriesListModal}
        handleClose={setOpenCategoriesListModal}
      />
      {categories && categories.categories ? (
        <SliderContainer
          categories={categories.categories}
          setCategory={setCurrentFLashcardsCategory}
        />
      ) : !categories && !categoriesLoading ? (
        <EmptyList />
      ) : (
        <Grid className={classes.preloaderSliderContainer}>
          <Preloader />
        </Grid>
      )}
      <Grid container direction='column' style={{ width: '100%' }}>
        {currentFlashcards && flashcards.flashcards && (
          <FlashcardsContainer
            loading={loading}
            currentCategory={currentCategory}
            filteredFlashcards={filteredFlashcards}
            currentFlashcards={currentFlashcards}
            open={handleClickOpenFlashcardModal}
          />
        )}
      </Grid>
      <AddBtn
        openFlashcardModal={handleClickOpenFlashcardModal}
        openAddCategoryModal={setOpenAddCategoryModal}
        openCategoriesListModal={setOpenCategoriesListModal}
      />
    </Grid>
  );
};

const mapStateToProps = state => ({
  flashcards: state.flashcards
});

UserFlashcardsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  flashcards: PropTypes.object,
  getFlashcardsCategories: PropTypes.func.isRequired,
  getAllUserFlashcards: PropTypes.func.isRequired,
  setCurrentFLashcardsCategory: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {
  getFlashcardsCategories,
  getAllUserFlashcards,
  setCurrentFLashcardsCategory
})(withStyles(styles)(UserFlashcardsContainer));
