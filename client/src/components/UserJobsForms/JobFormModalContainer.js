import React from 'react';
import JobForm from './JobForm';
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
import createJobValues from './utilis/createJobValues';
import { connect } from 'react-redux';

const styles = createStyles({});

const AddCategoryModal = ({ classes, open, setIsOpen, companies }) => {
  const handleSubmitCreate = values => {
    console.log(values);
    setIsOpen({ open: false, mode: '' });
  };

  const job = null;
  const initialValues = createJobValues(job);
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
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={jobSchema}
            onSubmit={values => handleSubmitCreate(values)}
          >
            {() => <JobForm setIsOpen={setIsOpen} companies={companies} />}
          </Formik>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

const jobSchema = Yup.object().shape({
  position: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(20, 'Maximum 20 characters')
    .required('Position is required'),
  city: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(30, 'Maximum 30 characters')
    .required('City is required'),
  technologies: Yup.string()
    .min(2, 'Minimum 3 characters')
    .max(200, 'Maximum 200 characters')
    .required('Technologies is required'),
  source: Yup.string()
    .min(9, 'Minimum 9 characters')
    .max(800, 'Maximum 800 characters')
    .required('Source link is required'),
  pros: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(150, 'Maximum 150 characters'),
  cons: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(150, 'Maximum 150 characters'),
  level: Yup.string().required('Level is required'),
  companyId: Yup.string().required('Company is required')
});

export default connect(null, {})(withStyles(styles)(AddCategoryModal));
