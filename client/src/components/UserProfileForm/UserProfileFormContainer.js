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
      <Grid className={classes.primaryContainer}>
        <Grid className={classes.headerContainer}>
          <Typography variant='h4' className={classes.typographyPrimary}>
            Profile Form
          </Typography>
        </Grid>
        <Grid className={classes.formikContainer}>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={formUserSchema}
            onSubmit={(values, actions) => submitForm(values, actions)}
          >
            {FormikBag => <ProfileForm FormikBag={FormikBag} />}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
};

const formUserSchema = Yup.object().shape({});

UserProfileFormContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({});

export default connect(null)(withStyles(styles)(UserProfileFormContainer));
