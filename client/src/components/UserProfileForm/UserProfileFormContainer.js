import React from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ProfileForm from './ProfileForm';
import styles from './profileFormStyles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UserProfileFormContainer = ({ classes }) => {
  const submitForm = values => {
    console.log(values);
  };

  const initialValues = {
    profession: '',
    company: '',
    country: '',
    location: '',
    website: '',
    usernameservices: {
      github: '',
      codewars: ''
    },
    skills: [
      {
        skillname: '',
        icon: ''
      }
    ]
  };
  return (
    <Grid className={classes.formContainer}>
      <Grid container className={classes.primaryContainer} spacing={4}>
        <Grid className={classes.headerContainer}>
          <Typography variant='h4' className={classes.typographyPrimary}>
            Profile Form
          </Typography>
        </Grid>
        <Grid className={classes.formikContainer}>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={formProfileSchema}
            onSubmit={(values, actions) => submitForm(values, actions)}
          >
            {FormikBag => <ProfileForm FormikBag={FormikBag} />}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
};

UserProfileFormContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

const formProfileSchema = Yup.object().shape({
  profession: Yup.string().required('Profession is required'),
  company: Yup.string()
    .min(2, 'Minimum 2 letters')
    .max(20, 'Maximum 20 letters'),
  country: Yup.string()
    .min(2, 'Minimum 2 letters')
    .max(20, 'Maximum 20 letters')
    .required('Country is required'),
  location: Yup.string()
    .min(2, 'Minimum 2 letters')
    .max(20, 'Maximum 20 letters'),
  skills: Yup.array().of(
    Yup.object().shape({
      skillname: Yup.string()
        .min(2, 'Minimum 2 letters')
        .max(20, 'Maximum 20 letters')
        .required('Name of skill is required'),
      icon: Yup.string()
        .min(2, 'Minimum 2 letters')
        .max(100, 'Maximum 100 letters')
        .required('Icon link is required')
    })
  )
});

const mapStateToProps = state => ({});

export default connect(null)(withStyles(styles)(UserProfileFormContainer));
