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

const JobForm = ({ classes, setIsOpen, companies, open }) => {
  return (
    <Form>
      <Grid container direction='row'>
        <Grid item xs={7} style={{ paddingRight: 15 }}>
          <Field name='position'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField label={'Position'} fieldProps={field} />
                <FormHelperText error>
                  {form.touched.position &&
                    form.errors.position &&
                    form.errors.position}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='source'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField label={'Source link'} fieldProps={field} />
                <FormHelperText error>
                  {form.touched.source &&
                    form.errors.source &&
                    form.errors.source}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='address'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField label={'Address'} fieldProps={field} />
                <FormHelperText error>
                  {form.touched.address &&
                    form.errors.address &&
                    form.errors.address}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='technologies'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField
                  label={'Required technologies'}
                  fieldProps={field}
                />
                <FormHelperText error>
                  {form.touched.technologies &&
                    form.errors.technologies &&
                    form.errors.technologies}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='pros'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField label={'Pros'} fieldProps={field} />
                <FormHelperText error>
                  {form.touched.pros && form.errors.pros && form.errors.pros}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='cons'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField label={'Cons'} fieldProps={field} />
                <FormHelperText error>
                  {form.touched.cons && form.errors.cons && form.errors.cons}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
        </Grid>
        <Grid item xs={5} style={{ paddingLeft: 15 }}>
          <Field name='companyId'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <InputLabel id='select-company'>Company*</InputLabel>
                <Select
                  labelId='select-company'
                  inputProps={field}
                  style={{ paddingBottom: 3 }}
                  disabled={open.mode === 'edit' ? true : false}
                >
                  {companies.map((company, index) => {
                    return (
                      <MenuItem key={index} value={company._id}>
                        {company.name}
                      </MenuItem>
                    );
                  })}
                </Select>
                <FormHelperText error>
                  {' '}
                  {form.touched.companyId &&
                    form.errors.companyId &&
                    form.errors.companyId}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='level'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <InputLabel id='select-level'>Level</InputLabel>
                <Select
                  labelId='select-level'
                  inputProps={field}
                  style={{ paddingBottom: 3 }}
                >
                  <MenuItem value='Trainee'>Trainee</MenuItem>
                  <MenuItem value='Junior'>Junior</MenuItem>
                  <MenuItem value='Mid'>Mid</MenuItem>
                  <MenuItem value='Senior'>Senior</MenuItem>
                  <MenuItem value='Expert'>Expert</MenuItem>
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
                  <Typography>Set job offer rating</Typography>
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

export default withStyles(styles)(JobForm);
