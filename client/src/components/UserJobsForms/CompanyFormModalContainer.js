import React, { useEffect } from 'react';
import CompanyForm from './CompanyForm';
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
import { createNewUserCompany } from '../../actions/jobs';
import { updateUserCompany } from '../../actions/jobs';

const styles = createStyles({});

const AddCategoryModal = ({
  classes,
  open,
  setIsOpen,
  companies,
  currentEditedCompany,
  createNewUserCompany,
  updateUserCompany
}) => {
  const handleSubmitCreate = values => {
    values.rating = parseInt(values.rating);
    createNewUserCompany(values);
    setIsOpen({ open: false, mode: '' });
  };

  const handleSubmitUpdate = values => {
    values.rating = parseInt(values.rating);
    updateUserCompany(currentEditedCompany._id, values);
    setIsOpen({ open: false, mode: '' });
  };
  const initialValues = createCompanyValues(
    open.mode === 'edit' ? currentEditedCompany : null
  );
  return (
    <Grid>
      <Dialog
        open={open.open}
        onClose={() => setIsOpen({ open: false, mode: '' })}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          {open.mode === 'create' ? 'Create New Company' : 'Edit Company'}
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={companySchema}
            onSubmit={values =>
              open.mode === 'create'
                ? handleSubmitCreate(values)
                : handleSubmitUpdate(values, currentEditedJob._id)
            }
          >
            {() => <JobForm setIsOpen={setIsOpen} open={open} />}
          </Formik>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

const companySchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(30, 'Maximum 30 characters')
    .required('Position is required'),
  address: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 30 characters')
    .required('Adress is required')
});

const mapStateToProps = state => ({
  currentEditedJob: state.jobs.currentEditedJob
});

export default connect(mapStateToProps, { createNewUserJob, updateUserJob })(
  withStyles(styles)(AddCategoryModal)
);
