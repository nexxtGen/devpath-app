import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LoginUserForm from './LoginUserForm';
import { primaryLight } from '../../../shared/colors';
import logo from '../../../assets/images/logo.png';

const styles = createStyles({
  content: {
    display: 'flex',
    flexGrow: 1,
    padding: 60,
    transition: 'margin-left 0.3s, ease-in',
    width: '100px'
  },
  primaryContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    background: '#F3F3F8',
    width: '370px',
    border: '1px solid lightgray',
    marginTop: 40,
    marginBottom: 40,
    boxShadow: '1px 1px 16px #aaaaaa'
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: primaryLight,
    width: '100%',
    height: '190px',
    clipPath: 'polygon(100% 0, 100% 100%, 0 74%, 0 0)'
  },
  formikContainer: {
    padding: '30px 20px 60px'
  },
  typographyPrimary: {
    color: 'white',
    marginBottom: '10px'
  }
});

const LoginUserFormContainer = ({ classes }) => {
  const submitForm = values => {
    console.log('Reister success', values);
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

export default withStyles(styles)(LoginUserFormContainer);
