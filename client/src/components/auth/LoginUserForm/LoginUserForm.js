import React from 'react';
import { Form, Field } from 'formik';
import {
  FormControl,
  FormHelperText,
  withStyles,
  createStyles,
  Grid
} from '@material-ui/core';
import FTextField from '../../../shared/FormikComponents/FTextField';
import BasicButton from '../../../shared/BasicButton';

const styles = createStyles({
  form: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    marginTop: '50px'
  },
  checkboxForm: {
    margin: '0',
    marginTop: '5px'
  },
  checkbox: {
    width: '7px',
    marginRight: '10px',
    height: '20px',
    color: 'rgb(0,143, 213)'
  },
  checkboxError: {
    marginBottom: '25px'
  }
});

const LoginUserForm = classes => {
  return (
    <Form className={classes.form}>
      <Grid>
        <Field name='email'>
          {({ field, form }) => (
            <FormControl fullWidth style={{ height: '75px' }}>
              <FTextField label={'Email'} fieldProps={field} disabled={false} />
              <FormHelperText error>
                {form.touched.email && form.errors.email && form.errors.email}
              </FormHelperText>
            </FormControl>
          )}
        </Field>
        <Field name='password'>
          {({ field, form }) => (
            <FormControl fullWidth style={{ height: '75px' }}>
              <FTextField
                type={'password'}
                label={'Password'}
                fieldProps={field}
                disabled={false}
              />
              <FormHelperText error>
                {form.touched.password &&
                  form.errors.password &&
                  form.errors.password}
              </FormHelperText>
            </FormControl>
          )}
        </Field>
      </Grid>
      <Grid container justify='center' style={{ marginTop: '45px' }}>
        <BasicButton type='submit'>Login</BasicButton>
      </Grid>
    </Form>
  );
};

export default withStyles(styles)(LoginUserForm);
