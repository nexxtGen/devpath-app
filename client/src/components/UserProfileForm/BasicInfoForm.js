import React from 'react';
import {
  FormControl,
  FormHelperText,
  withStyles,
  createStyles,
  Grid
} from '@material-ui/core';
import { Field } from 'formik';
import FTextField from '../../shared/FormikComponents/FTextField';

const styles = createStyles({
  container: {
    marginRight: 50,
    marginLeft: 10
  }
});

const BasicInfoForm = ({ classes, FormikBag }) => {
  return (
    <Grid className={classes.container}>
      <Field name='profession'>
        {({ field, form }) => (
          <FormControl fullWidth style={{ height: '75px' }}>
            <FTextField
              label={'Profession'}
              fieldProps={field}
              disabled={false}
            />
            <FormHelperText error>
              {form.touched.profession &&
                form.errors.profession &&
                form.errors.profession}
            </FormHelperText>
          </FormControl>
        )}
      </Field>
      <Field name='company'>
        {({ field, form }) => (
          <FormControl fullWidth style={{ height: '75px' }}>
            <FTextField label={'Company'} fieldProps={field} disabled={false} />
            <FormHelperText error>
              {form.touched.company &&
                form.errors.company &&
                form.errors.company}
            </FormHelperText>
          </FormControl>
        )}
      </Field>
      <Field name='country'>
        {({ field, form }) => (
          <FormControl fullWidth style={{ height: '75px' }}>
            <FTextField label={'Country'} fieldProps={field} disabled={false} />
            <FormHelperText error>
              {form.touched.country &&
                form.errors.country &&
                form.errors.country}
            </FormHelperText>
          </FormControl>
        )}
      </Field>
      <Field name='location'>
        {({ field, form }) => (
          <FormControl fullWidth style={{ height: '75px' }}>
            <FTextField
              label={'Location'}
              fieldProps={field}
              disabled={false}
            />
            <FormHelperText error>
              {form.touched.location &&
                form.errors.location &&
                form.errors.location}
            </FormHelperText>
          </FormControl>
        )}
      </Field>
      <Field name='website'>
        {({ field, form }) => (
          <FormControl fullWidth style={{ height: '75px' }}>
            <FTextField label={'Website'} fieldProps={field} disabled={false} />
            <FormHelperText error>
              {form.touched.website &&
                form.errors.website &&
                form.errors.website}
            </FormHelperText>
          </FormControl>
        )}
      </Field>
      <Grid container direction='row'>
        <Field name='usernameservices.github'>
          {({ field, form }) => (
            <FormControl fullWidth style={{ height: '75px' }}>
              <FTextField
                label={'Github username'}
                fieldProps={field}
                disabled={false}
              />
              <FormHelperText error>
                {form.touched.usernameservices &&
                  form.errors.usernameservices &&
                  form.errors.usernameservices.github}
              </FormHelperText>
            </FormControl>
          )}
        </Field>
        <Field name='usernameservices.codewars'>
          {({ field, form }) => (
            <FormControl fullWidth style={{ height: '75px' }}>
              <FTextField
                label={'Codewars username'}
                fieldProps={field}
                disabled={false}
              />
              <FormHelperText error>
                {form.touched.usernameservices &&
                  form.errors.usernameservices &&
                  form.errors.usernameservices.codewars}
              </FormHelperText>
            </FormControl>
          )}
        </Field>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(BasicInfoForm);
