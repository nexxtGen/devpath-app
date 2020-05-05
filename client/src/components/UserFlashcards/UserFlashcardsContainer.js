import React, { useEffect, useState } from 'react';
import Alert from '../../components/layout/Alert';
import SliderContainer from './Slider/SliderContainer';
import FlashcardsContainer from './Flashcards/FlashcardsContainer';
import AddBtn from './AddBtn';
import AddFlashcardModal from './../UserFlashcardsForms/AddFlashcardModal';
import AddCategoryModal from './../UserFlashcardsForms/CategoriesForms/AddCategoryModal';
import CategoriesListModal from './CategoriesList/CategoriesListModal';
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
      {flashcards.categories && (
        <SliderContainer
          categories={flashcards.categories.categories}
          setCategory={setCurrentFLashcardsCategory}
        />
      )}
      <Grid container direction='column' style={{ width: '100%' }}>
        {flashcards.currentFlashcards && flashcards.flashcards && (
          <FlashcardsContainer
            currentCategory={flashcards.currentCategory}
            filteredFlashcards={flashcards.filteredFlashcards}
            currentFlashcards={flashcards.currentFlashcards}
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
