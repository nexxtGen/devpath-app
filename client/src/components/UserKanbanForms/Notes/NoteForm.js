import React from 'react';
import Button from '@material-ui/core/Button';
import { Field, Form } from 'formik';
import FTextField from '../../../shared/FormikComponents/FTextField';
import {
  withStyles,
  createStyles,
  DialogActions,
  FormControl,
  FormHelperText,
  Grid,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  MobileStepper
} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Rating from '@material-ui/lab/Rating';

const styles = createStyles({
  fieldsContainer: {
    paddingRight: 15
  },
  imagePreview: {
    background: 'rgb(233, 233, 233)',
    width: '210px',
    height: '80px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    margin: '15px auto 25px'
  }
});

const BoardForm = ({ classes, setIsOpen, FormikBag }) => {
  return (
    <Form>
      <Grid container direction='row'>
        <Grid item xs={7} className={classes.fieldsContainer}>
          <Field name='description'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField label={'Note description'} fieldProps={field} />
                <FormHelperText error>
                  {form.touched.description &&
                    form.errors.description &&
                    form.errors.description}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='image'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField
                  label={'Note image link (not required)'}
                  fieldProps={field}
                />
                <FormHelperText error>
                  {form.touched.image && form.errors.image && form.errors.image}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
        </Grid>
        <Grid item xs={5} style={{ paddingLeft: 15 }}>
          <Field name='priority'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <InputLabel id='select-type'>Priority</InputLabel>
                <Select
                  labelId='select-type'
                  inputProps={field}
                  style={{ paddingBottom: 3 }}
                >
                  <MenuItem value='low'>Low</MenuItem>
                  <MenuItem value='medium'>Medium</MenuItem>
                  <MenuItem value='high'>High</MenuItem>
                </Select>
                <FormHelperText error>
                  {' '}
                  {form.touched.priority &&
                    form.errors.priority &&
                    form.errors.priority}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='progress' type='number'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <Typography>Task progress</Typography>
                <Rating
                  name='progress'
                  onChange={field.onChange}
                  defaultValue={parseInt(field.value)}
                  max={FormikBag.values.steps}
                />
              </FormControl>
            )}
          </Field>
          <Field name='steps' type='number'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <Typography>Progress steps:{field.value}</Typography>
                <MobileStepper
                  name={field.name}
                  variant='progress'
                  steps={6}
                  position='static'
                  activeStep={parseInt(field.value)}
                  className={classes.root}
                  nextButton={
                    <Button
                      size='small'
                      onClick={(e, value) =>
                        form.setFieldValue(field.name, field.value + 1)
                      }
                      disabled={field.value === 5}
                    >
                      Next
                      <KeyboardArrowRight />
                    </Button>
                  }
                  backButton={
                    <Button
                      size='small'
                      onClick={(e, value) =>
                        form.setFieldValue(field.name, field.value + -1)
                      }
                      disabled={field.value === 0}
                    >
                      <KeyboardArrowLeft />
                      Back
                    </Button>
                  }
                />
              </FormControl>
            )}
          </Field>
        </Grid>
        <Grid container direction='column' align='center'>
          <Typography>Image preview</Typography>
          <Grid
            className={classes.imagePreview}
            style={{
              backgroundImage: `url('${FormikBag.values.image}')`
            }}
          ></Grid>
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

export default withStyles(styles)(BoardForm);
