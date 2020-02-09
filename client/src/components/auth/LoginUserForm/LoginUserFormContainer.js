import React from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LoginUserForm from './LoginUserForm';
import logo from '../../../assets/images/logo.png';
import styles from './loginUserFormContainerStyles';
import { Redirect } from 'react-router-dom';
import Alert from '../../layout/Alert/Alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';

const LoginUserFormContainer = ({ classes, login, isAuthenticated }) => {
  const submitForm = values => {
    login(values);
  };

  if (isAuthenticated) {
    return <Redirect to='/main' />;
  }

  return (
    <Grid className={classes.formContainer}>
      <Alert />
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
              email: '',
              password: ''
            }}
            enableReinitialize={true}
            validationSchema={formUserSchema}
            onSubmit={(values, actions) => submitForm(values, actions)}
          >
            {FormikBag => <LoginUserForm FormikBag={FormikBag} />}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
};

const formUserSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is Required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Must be 6 characters or more')
});

LoginUserFormContainer.propTypes = {
  login: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(
  withStyles(styles)(LoginUserFormContainer)
);
