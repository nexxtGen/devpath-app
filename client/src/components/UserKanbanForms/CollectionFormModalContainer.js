import React, { useEffect } from 'react';
import CollectionForm from './CollectionForm';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  withStyles,
  createStyles,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid
} from '@material-ui/core';
import createCollectionValues from './utilis/createCollectionValues';
import { connect } from 'react-redux';
import {
  createNewUserKanbanCollection,
  updateUserKanbanCollection
} from '../../actions/kanban';

const styles = createStyles({});

const CollectionFormModalContainer = ({
  classes,
  open,
  setIsOpen,
  currentCollection,
  createNewUserKanbanCollection,
  updateUserKanbanCollection
}) => {
  const handleSubmitCreate = values => {
    createNewUserKanbanCollection(values);
    setIsOpen({ open: false, mode: '' });
  };

  const handleSubmitUpdate = values => {
    updateUserKanbanCollection(currentCollection._id, values);
    setIsOpen({ open: false, mode: '' });
  };
  const initialValues = createCollectionValues(
    open.mode === 'edit' ? currentCollection : null
  );
  return (
    <Grid>
      <Dialog
        open={open.open}
        onClose={() => setIsOpen({ open: false, mode: '' })}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          {open.mode === 'create' ? 'Create New Collection' : 'Edit Collection'}
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={collectionSchema}
            onSubmit={values =>
              open.mode === 'create'
                ? handleSubmitCreate(values)
                : handleSubmitUpdate(values, currentCollection._id)
            }
          >
            {FormikBag => (
              <CollectionForm
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

const collectionSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(30, 'Maximum 30 characters')
    .required('Collection Name is required'),
  description: Yup.string()
    .min(10, 'Minimum 10 characters')
    .max(100, 'Maximum 100 characters')
    .required('Description is required'),
  image: Yup.string()
    .min(10, 'Minimum 3 characters')
    .max(800, 'Maximum 800 characters')
    .required('Collection image link is required'),
  type: Yup.string().required('Select collection type')
});

const mapStateToProps = state => ({
  currentCollection: state.kanban.currentCollection
});

export default connect(mapStateToProps, {
  createNewUserKanbanCollection,
  updateUserKanbanCollection
})(withStyles(styles)(CollectionFormModalContainer));
