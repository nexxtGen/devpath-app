import React from 'react';
import { Form, Field } from 'formik';
import {
  FormControl,
  FormHelperText,
  withStyles,
  createStyles
} from '@material-ui/core';
import FTextField from '../../../shared/FormikComponents/FTextField';
import BasicButton from '../../../shared/BasicButton';

const styles = createStyles({});

const RegisterUserForm = classes => {
  return (
    <Form>
      <Field
        name='name'
        render={({ field, form }) => (
          <FormControl fullWidth style={{ height: '75px' }}>
            <FTextField label={'Name'} fieldProps={field} disabled={false} />
            <FormHelperText error>
              {form.touched.name && form.errors.name && form.errors.name}
            </FormHelperText>
          </FormControl>
        )}
      />
      <Field
        name='email'
        render={({ field, form }) => (
          <FormControl fullWidth style={{ height: '75px' }}>
            <FTextField label={'Email'} fieldProps={field} disabled={false} />
            <FormHelperText error>
              {form.touched.email && form.errors.email && form.errors.email}
            </FormHelperText>
          </FormControl>
        )}
      />
      <Field
        name='password'
        render={({ field, form }) => (
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
      />
      <Field
        name='password2'
        render={({ field, form }) => (
          <FormControl fullWidth style={{ height: '75px' }}>
            <FTextField
              type={'password'}
              label={'Confirm Password'}
              fieldProps={field}
              disabled={false}
            />
            <FormHelperText error>
              {form.touched.password2 &&
                form.errors.password2 &&
                form.errors.password2}
            </FormHelperText>
          </FormControl>
        )}
      />
      <BasicButton type='submit'>Submit</BasicButton>
    </Form>
  );
};

export default withStyles(styles)(RegisterUserForm);
