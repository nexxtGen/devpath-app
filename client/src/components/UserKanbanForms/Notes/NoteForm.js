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
  MobileStepper,
  Divider,
  FormControlLabel,
  FormGroup,
  Checkbox
} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
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
  },
  checkbox: {
    width: '7px',
    marginRight: '10px',
    height: '20px',
    color: 'rgb(0,143, 213)'
  },
  checkboxError: {
    marginBottom: '25px'
  },
  progressPrimaryContainer: {
    padding: '18px 0 5px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderTop: '1px solid lightgray',
    borderBottom: '1px solid lightgray',
    marginBottom: 15
  },
  progressContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  }
});

const StyledRating = withStyles({
  iconFilled: {
    color: '#3f51b5'
  },
  iconHover: {
    color: '#3f51b5'
  }
})(Rating);

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
        </Grid>
        <Divider />
        <Grid className={classes.progressPrimaryContainer}>
          <Grid style={{ height: 60, marginLeft: 10 }}>
            <Field name='setProgress' type='checkbox'>
              {({ field, form }) => (
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
                                fontSize: 30,
                                color: '#3f51b5'
                              }}
                            />
                          }
                          checkedIcon={
                            <CheckBoxIcon style={{ fontSize: 30 }} />
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
                            Use progress bar
                          </Typography>
                        </Typography>
                      }
                    />
                    <FormHelperText error className={classes.checkboxError}>
                      {form.touched.setProgress &&
                        form.errors.setProgress &&
                        form.errors.setProgress}
                    </FormHelperText>
                  </Grid>
                </FormGroup>
              )}
            </Field>
          </Grid>
          <Grid className={classes.progressContainer}>
            <Field name='steps' type='number'>
              {({ field, form }) => (
                <FormControl fullWidth style={{ height: '75px' }}>
                  <Typography>Progress steps</Typography>
                  <StyledRating
                    disabled={!FormikBag.values.setProgress}
                    name='steps'
                    onChange={field.onChange}
                    defaultValue={parseInt(field.value)}
                    max={6}
                    icon={<FiberManualRecordIcon fontSize='inherit' />}
                  />
                </FormControl>
              )}
            </Field>
            <Field name='progress' type='number'>
              {({ field, form }) => (
                <FormControl fullWidth style={{ height: '75px' }}>
                  <Typography style={{ paddingLeft: 25 }}>
                    Task progress:
                    {parseInt(field.value) > FormikBag.values.steps - 1
                      ? 0
                      : parseInt(field.value)}
                    /{parseInt(FormikBag.values.steps) - 1}
                  </Typography>
                  <MobileStepper
                    name={field.name}
                    variant='progress'
                    steps={parseInt(FormikBag.values.steps)}
                    position='static'
                    activeStep={
                      parseInt(field.value) > FormikBag.values.steps - 1
                        ? 0
                        : parseInt(field.value)
                    }
                    className={classes.root}
                    nextButton={
                      <Button
                        size='small'
                        onClick={(e, value) =>
                          form.setFieldValue(field.name, field.value + 1)
                        }
                        disabled={
                          parseInt(field.value) >=
                            parseInt(FormikBag.values.steps) - 1 ||
                          !FormikBag.values.setProgress
                        }
                      >
                        +
                        <KeyboardArrowRight />
                      </Button>
                    }
                    backButton={
                      <Button
                        size='small'
                        onClick={(e, value) =>
                          form.setFieldValue(field.name, field.value - 1)
                        }
                        disabled={
                          field.value === 0 || !FormikBag.values.setProgress
                        }
                      >
                        <KeyboardArrowLeft />-
                      </Button>
                    }
                  />
                </FormControl>
              )}
            </Field>
          </Grid>
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
