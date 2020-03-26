import React, { useEffect } from 'react';
import CategoryForm from './CategoryForm';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Dialog, DialogContent, DialogTitle, Grid } from '@material-ui/core';
import createCategoryValues from './utilis/createCategoryValues';
import { connect } from 'react-redux';
import { createNewLearnCategory } from '../../actions/learn';
//import { updateLearnCategory } from '../../actions/learn';

const CategoryFormModalContainer = ({
  open,
  setIsOpen,
  currentEditedCategory,
  createNewLearnCategory
  //updateLearnCategory
}) => {
  const handleSubmitCreate = values => {
    createNewLearnCategory(values);
    setIsOpen({ open: false, mode: '' });
  };

  const handleSubmitUpdate = values => {
    //updateLearnCategory(currentCategory._id, values);
    setIsOpen({ open: false, mode: '' });
  };

  const initialValues = createCategoryValues(
    open.mode === 'edit' ? currentEditedCategory : null
  );

  return (
    <Grid>
      <Dialog
        open={open.open}
        onClose={() => setIsOpen({ open: false, mode: '' })}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          {open.mode === 'create' ? 'Create New Category' : 'Edit Category'}
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={categorySchema}
            onSubmit={values =>
              open.mode === 'create'
                ? handleSubmitCreate(values)
                : handleSubmitUpdate(values, currentEditedCategory._id)
            }
          >
            {FormikBag => (
              <CategoryForm
                setIsOpen={setIsOpen}
                open={open}
                FormikBag={FormikBag}
              />
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

const categorySchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(30, 'Maximum 30 characters')
    .required('Category Name is required'),
  image: Yup.string()
    .min(10, 'Minimum 3 characters')
    .max(800, 'Maximum 800 characters')
    .required('Category image link is required')
});

const mapStateToProps = state => ({
  currentEditedCategory: state.learn.currentEditedCategory
});

export default connect(mapStateToProps, {
  createNewLearnCategory
  //updateLearnCategory
})(CategoryFormModalContainer);
