import React, { useEffect } from 'react';
import LearnItemForm from './LearnItemForm';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Dialog, DialogContent, DialogTitle, Grid } from '@material-ui/core';
import createItemValues from './utilis/createCategoryValues';
import { connect } from 'react-redux';
import { createNewLearnItem, updateLearnItem } from '../../actions/learn';

const LearnItemFormModalContainer = ({
  open,
  setIsOpen,
  currentEditedItem,
  createNewLearnItem,
  updateLearnItem
}) => {
  const handleSubmitCreate = values => {
    console.log(values);
    createNewLearnItem(values);
    setIsOpen({ open: false, mode: '' });
  };

  const handleSubmitUpdate = values => {
    updateLearnItem(currentEditedItem._id, values);
    setIsOpen({ open: false, mode: '' });
  };

  const initialValues = createCategoryValues(
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
    .required('Description is required')
});

const mapStateToProps = state => ({
  currentEditedItem: state.learn.currentEditedItem
});

export default connect(mapStateToProps, {
  createNewLearnItem,
  updateLearnItem
})(LearnItemFormModalContainer);
