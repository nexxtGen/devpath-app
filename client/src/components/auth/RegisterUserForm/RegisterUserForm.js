import React from 'react';
import { Form, Field } from 'formik';
import {
  FormControl,
  FormHelperText,
  withStyles,
  createStyles,
  Grid,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Typography
} from '@material-ui/core';
import FTextField from '../../../shared/FormikComponents/FTextField';
import BasicButton from '../../../shared/BasicButton';
import { primary } from '../../../shared/colors';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

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

const RegisterUserForm = classes => {
  return (
    <Form className={classes.form}>
      <Grid>
        <Field name='name'>
          {({ field, form }) => (
            <FormControl fullWidth style={{ height: '75px' }}>
              <FTextField label={'Name'} fieldProps={field} disabled={false} />
              <FormHelperText error>
                {form.touched.name && form.errors.name && form.errors.name}
              </FormHelperText>
            </FormControl>
          )}
        </Field>
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
        <Grid style={{ height: 60 }}>
          <Field
            name='terms'
            type='checkbox'
            render={({ field, form }) => (
              <FormGroup>
                <Grid
                  container
                  direction='column'
                  justify='flex-start'
                  alignItems='flex-start'
                >
                  <FormControlLabel
                    className={classes.checkboxForm}
                    control={
                      <Checkbox
                        color='primary'
                        icon={
                          <CheckBoxOutlineBlank
                            style={{
                              fontSize: 30
                            }}
                          />
                        }
                        checkedIcon={
                          <CheckBoxIcon
                            style={{ fontSize: 30, color: primary }}
                          />
                        }
                        {...field}
                        className={classes.checkbox}
                      />
                    }
                    label={
                      <Typography
                        variant='subtitle2'
                        style={{
                          lineHeight: '1rem',
                          display: 'flex',
                          flexDirection: 'row'
                        }}
                      >
                        <Typography style={{ marginRight: 5 }}>
                          I Agree with{' '}
                        </Typography>
                        <Typography>
                          <a
                            href='http://localhost:3000/main'
                            target='blank'
                            style={{ textDecoration: 'none' }}
                          >
                            {' '}
                            terms of service
                          </a>
                        </Typography>
                      </Typography>
                    }
                  />
                  <FormHelperText error className={classes.checkboxError}>
                    {form.touched.terms &&
                      form.errors.terms &&
                      form.errors.terms}
                  </FormHelperText>
                </Grid>
              </FormGroup>
            )}
          />
        </Grid>
      </Grid>
      <Grid container justify='center' style={{ marginTop: '45px' }}>
        <BasicButton type='submit'>Register</BasicButton>
      </Grid>
    </Form>
  );
};

export default withStyles(styles)(RegisterUserForm);
