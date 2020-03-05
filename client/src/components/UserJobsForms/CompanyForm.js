import React from 'react';
import Button from '@material-ui/core/Button';
import { Field, Form } from 'formik';
import FTextField from '../../shared/FormikComponents/FTextField';
import Rating from '@material-ui/lab/Rating';
import { primary } from '../../shared/colors';
import {
  withStyles,
  createStyles,
  DialogActions,
  FormControl,
  FormHelperText,
  Typography,
  Grid,
  MenuItem,
  InputLabel,
  Select
} from '@material-ui/core';

const styles = createStyles({
  underline: {
    '&::after': {
      border: `1px solid ${primary}`
    }
  },
  ratingContainer: {
    padding: 20
  }
});

const CompanyForm = ({ classes, setIsOpen }) => {
  return (
    <Form>
      <Grid container direction='row'>
        <Grid item xs={7} style={{ paddingRight: 15 }}>
          <Field name='name'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField label={'Company Name'} fieldProps={field} />
                <FormHelperText error>
                  {form.touched.name && form.errors.name && form.errors.name}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='address'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField
                  label={'Company Address (or the City Name)'}
                  fieldProps={field}
                />
                <FormHelperText error>
                  {form.touched.address &&
                    form.errors.address &&
                    form.errors.address}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='website'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField
                  label={'Company website address'}
                  fieldProps={field}
                />
                <FormHelperText error>
                  {form.touched.website &&
                    form.errors.website &&
                    form.errors.website}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='logo'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField
                  label={'Company logo image link'}
                  fieldProps={field}
                />
                <FormHelperText error>
                  {form.touched.logo && form.errors.logo && form.errors.logo}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='description'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField label={'Company description'} fieldProps={field} />
                <FormHelperText error>
                  {form.touched.description &&
                    form.errors.description &&
                    form.errors.description}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
        </Grid>
        <Grid item xs={5} style={{ paddingLeft: 15 }}>
          <Field name='size'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <InputLabel id='select-size'>Company size</InputLabel>
                <Select
                  labelId='select-size'
                  inputProps={field}
                  style={{ paddingBottom: 3 }}
                >
                  <MenuItem value='Small'>Small</MenuItem>
                  <MenuItem value='Medium'>Medium</MenuItem>
                  <MenuItem value='Big'>Big</MenuItem>
                </Select>
                <FormHelperText error>
                  {' '}
                  {form.touched.level && form.errors.level && form.errors.level}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Grid className={classes.ratingContainer}>
            <Field name='rating' type='number'>
              {({ field, form }) => (
                <FormControl fullWidth style={{ height: '75px' }}>
                  <Typography>Set company rating</Typography>
                  <Rating
                    name='rating'
                    onChange={field.onChange}
                    defaultValue={parseInt(field.value)}
                  />
                </FormControl>
              )}
            </Field>
          </Grid>
        </Grid>
      </Grid>
      <DialogActions>
        <Button
          variant='contained'
          onClick={() => setIsOpen({ open: false, mode: '' })}
          color='primary'
        >
          Cancel
        </Button>
        <Button type='submit' variant='contained' color='primary'>
          Save
        </Button>
      </DialogActions>
    </Form>
  );
};

export default withStyles(styles)(CompanyForm);
