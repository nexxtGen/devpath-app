import React from 'react';
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
import createCompanyValues from './utilis/createCompanyValues';
import { connect } from 'react-redux';
import { createNewUserCompany } from '../../actions/jobs';
import { updateUserCompany } from '../../actions/jobs';

const styles = createStyles({});

const CompanyFormModalContainer = ({
  classes,
  open,
  setIsOpen,
  currentCompany,
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
    updateUserCompany(currentCompany._id, values);
    setIsOpen({ open: false, mode: '' });
  };
  const initialValues = createCompanyValues(
    open.mode === 'edit' ? currentCompany : null
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
                : handleSubmitUpdate(values, currentCompany._id)
            }
          >
            {() => <CompanyForm setIsOpen={setIsOpen} open={open} />}
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
    .required('Company Name is required'),
  address: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(70, 'Maximum 70 characters')
    .required('Adress is required'),
  description: Yup.string()
    .min(10, 'Minimum 10 characters')
    .max(300, 'Maximum 300 characters')
    .required('Description is required'),
  rating: Yup.string().required('Rating is required'),
  size: Yup.string().required('Company size is required'),
  logo: Yup.string()
    .min(10, 'Minimum 3 characters')
    .max(800, 'Maximum 800 characters')
    .required('Company logo image link is required'),
  website: Yup.string()
    .min(8, 'Minimum 8 characters')
    .max(200, 'Maximum 200 characters')
    .required('Company website address is required')
});

const mapStateToProps = state => ({
  currentCompany: state.jobs.currentCompany
});

export default connect(mapStateToProps, {
  createNewUserCompany,
  updateUserCompany
})(withStyles(styles)(CompanyFormModalContainer));
