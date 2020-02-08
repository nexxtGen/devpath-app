import React from 'react';
import { connect } from 'react-redux';
import { withStyles, Grid, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import RegisterUserForm from './RegisterUserForm';
import logo from '../../../assets/images/logo.png';
import styles from './registerUserFormContainerStyles';
import { register } from '../../../actions/auth';
import PropTypes from 'prop-types';

const RegisterUserFormContainer = ({ classes, register }) => {
  const submitForm = async values => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
      terms: values.terms
    };

    register(user);
  };

  return (
    <Grid className={classes.formContainer}>
      <Grid className={classes.primaryContainer}>
        <Grid className={classes.headerContainer}>
          <Grid>
            <img
              src={logo}
              style={{ width: '50px', height: '58px' }}
              alt='logo'
            />
          </Grid>
          <Typography variant='h4' className={classes.typographyPrimary}>
            DevPath
          </Typography>
        </Grid>
        <Grid className={classes.formikContainer}>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              password2: '',
              terms: false
            }}
            enableReinitialize={true}
            validationSchema={formUserSchema}
            onSubmit={(values, actions) => submitForm(values, actions)}
          >
            {FormikBag => <RegisterUserForm FormikBag={FormikBag} />}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
};

const formUserSchema = Yup.object().shape({
  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Must be 6 characters or more'),
  password2: Yup.string()
    .required('Confirm Password is required')
    .min(6, 'Must be 6 characters or more')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  terms: Yup.boolean().oneOf([true], 'Please accept Terms')
});

RegisterUserFormContainer.propTypes = {
  register: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default connect(null, { register })(
  withStyles(styles)(RegisterUserFormContainer)
);
