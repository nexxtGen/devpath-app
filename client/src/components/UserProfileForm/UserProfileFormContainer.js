import React, { useEffect } from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ProfileForm from './ProfileForm';
import styles from './profileFormStyles';
import { connect } from 'react-redux';
import { getCurrentProfile, createUpdateProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import createProfileValues from './utilis/createProfileValues';
import Alert from '../layout/Alert/Alert';

const UserProfileFormContainer = ({
  classes,
  profile,
  user,
  getCurrentProfile,
  createUpdateProfile
}) => {
  const submitForm = values => {
    createUpdateProfile(values);
  };

  useEffect(() => {
    getCurrentProfile();
  }, []);

  const initialValues = createProfileValues(profile.profile);

  return (
    <Grid className={classes.formContainer}>
      <Alert />
      {user && (
        <Grid container className={classes.primaryContainer} spacing={4}>
          <Grid className={classes.formikContainer}>
            <Formik
              initialValues={initialValues}
              enableReinitialize={true}
              validationSchema={formProfileSchema}
              onSubmit={(values, actions) => submitForm(values, actions)}
            >
              {FormikBag => <ProfileForm FormikBag={FormikBag} user={user} />}
            </Formik>
          </Grid>
        </Grid>
      )}
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
        .min(10, 'Minimum 10 characters')
        .max(500, 'Maximum 500 characters')
        .required('Icon link is required')
    })
  ),
  usernameservices: Yup.object().shape({
    github: Yup.string()
      .min(2, 'Minimum 2 letters')
      .max(20, 'Maximum 20 letters'),
    codewars: Yup.string()
      .min(2, 'Minimum 2 letters')
      .max(100, 'Maximum 100 letters')
  })
});

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.profile
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  createUpdateProfile
})(withStyles(styles)(UserProfileFormContainer));
