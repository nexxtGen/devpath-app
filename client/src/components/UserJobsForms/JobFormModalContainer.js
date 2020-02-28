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
import { connect } from 'react-redux';

const styles = createStyles({});

const AddCategoryModal = ({ classes, open, setIsOpen, companies }) => {
  const handleSubmitCreate = values => {
    console.log(values);
    setIsOpen({ open: false, mode: '' });
  };

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
            initialValues={{
              position: '',
              city: '',
              technologies: '',
              pros: '',
              cons: '',
              level: '',
              rating: 3,
              companyId: ''
            }}
            enableReinitialize={true}
            validationSchema={jobSchema}
            onSubmit={(values, actions) => handleSubmitCreate(values)}
          >
            {FormikBag => (
              <JobForm setIsOpen={setIsOpen} companies={companies} />
            )}
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
    .required('City is required')
});

export default connect(null, {})(withStyles(styles)(AddCategoryModal));
