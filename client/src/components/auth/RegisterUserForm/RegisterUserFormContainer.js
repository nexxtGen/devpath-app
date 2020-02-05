import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import RegisterUserForm from './RegisterUserForm';

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
    background: 'rgb(238, 249, 255)',
    padding: '30px 20px 60px',
    width: '350px',
    border: '1px solid lightgray',
    marginTop: 40,
    boxShadow: '1px 1px 16px #aaaaaa'
  },
  typographyPrimary: {
    color: 'rgb(88,62,125)',
    marginBottom: '10px'
  }
});

const RegisterUserFormContainer = ({ classes }) => {
  const submitForm = (values, actions) => {
    console.log('Reister success', values);
  };

  return (
    <Grid className={classes.formContainer}>
      <Grid className={classes.primaryContainer}>
        <Typography variant='h4' className={classes.typographyPrimary}>
          Sign Up
        </Typography>
        <Formik
          initialValues={{ name: '', email: '', password: '', password2: '' }}
          enableReinitialize={true}
          validationSchema={formUserSchema}
          onSubmit={(values, actions) => submitForm(values, actions)}
          render={FormikBag => <RegisterUserForm FormikBag={FormikBag} />}
        />
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
    .required('Password is required')
    .min(6, 'Must be 6 characters or more')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default withStyles(styles)(RegisterUserFormContainer);
