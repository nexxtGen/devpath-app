import React, { useEffect } from 'react';
import LearnItemForm from './LearnItemForm';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Dialog, DialogContent, DialogTitle, Grid } from '@material-ui/core';
import createItemValues from './utilis/createItemValues';
import { connect } from 'react-redux';
import { createNewLearnItem, updateLearnItem } from '../../actions/learn';

const LearnItemFormModalContainer = ({
  open,
  setIsOpen,
  currentEditedItem,
  createNewLearnItem,
  updateLearnItem,
  categoriesList
}) => {
  const handleSubmitCreate = values => {
    createNewLearnItem(values);
    setIsOpen({ open: false, mode: '' });
  };

  const handleSubmitUpdate = values => {
    updateLearnItem(currentEditedItem._id, {
      ...values,
      prevCategory: currentEditedItem.categoryId
    });
    setIsOpen({ open: false, mode: '' });
  };

  const initialValues = createItemValues(
    open.mode === 'edit' ? currentEditedItem : null
  );

  return (
    <Grid>
      <Dialog
        open={open.open}
        onClose={() => setIsOpen({ open: false, mode: '' })}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          {open.mode === 'create' ? 'Create New Item' : 'Edit Item'}
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={itemSchema}
            onSubmit={values =>
              open.mode === 'create'
                ? handleSubmitCreate(values)
                : handleSubmitUpdate(values, currentEditedItem._id)
            }
          >
            {FormikBag => (
              <LearnItemForm
                setIsOpen={setIsOpen}
                open={open}
                FormikBag={FormikBag}
                categoriesList={categoriesList}
              />
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

const itemSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(30, 'Maximum 30 characters')
    .required('Title is required'),
  image: Yup.string()
    .min(10, 'Minimum 3 characters')
    .max(800, 'Maximum 800 characters')
    .required('Item image link is required'),
  type: Yup.string().required('Type is required'),
  description: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(200, 'Maximum 200 characters')
    .required('Description is required'),
  link: Yup.string()
    .min(10, 'Minimum 10 characters')
    .max(500, 'Maximum 500 characters')
    .required('Source link is required'),
  sourcename: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(20, 'Maximum 20 characters')
    .required('Source name is required'),
  categoryId: Yup.string().required('Source name is required')
});

const mapStateToProps = state => ({
  currentEditedItem: state.learn.currentEditedItem,
  categoriesList: state.learn.learnCategories
});

export default connect(mapStateToProps, {
  createNewLearnItem,
  updateLearnItem
})(LearnItemFormModalContainer);
