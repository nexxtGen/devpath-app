import React from 'react';
import JobForm from './JobForm';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { primary } from '../../shared/colors';
import {
  withStyles,
  createStyles,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Grid
} from '@material-ui/core';
import { connect } from 'react-redux';

const styles = createStyles({});

const AddCategoryModal = ({ classes, open, setIsOpen }) => {
  const handleSubmitCreate = (values, actions) => {};

  return (
    <Grid>
      <Dialog
        open={open.open}
        onClose={() => setIsOpen({ open: false, mode: '' })}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Add Job</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{ name: '', image: '' }}
            enableReinitialize={true}
            validationSchema={jobSchema}
            onSubmit={(values, actions) => handleSubmitCreate(values, actions)}
          >
            {FormikBag => <JobForm setIsOpen={setIsOpen} />}
          </Formik>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

const jobSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(20, 'Maximum 20 characters')
    .required('Category name is required'),
  image: Yup.string()
    .min(10, 'Minimum 10 characters')
    .max(500, 'Maximum 500 characters')
    .required('Image link is required')
});

export default connect(null, {})(withStyles(styles)(AddCategoryModal));
