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
  MenuItem,
  InputLabel,
  Select,
  Typography
} from '@material-ui/core';

const styles = createStyles({
  fieldsContainer: {
    paddingRight: 15
  },
  romb: {
    background: 'rgb(233, 233, 233)',
    width: '250px',
    height: '80px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0% 100%)',
    margin: '15px auto 25px'
  }
});

const CollectionForm = ({ classes, setIsOpen, FormikBag }) => {
  return (
    <Form>
      <Grid container direction='row'>
        <Grid item xs={7} className={classes.fieldsContainer}>
          <Field name='name'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField label={'Collection Name'} fieldProps={field} />
                <FormHelperText error>
                  {form.touched.name && form.errors.name && form.errors.name}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='description'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField
                  label={'Collection description'}
                  fieldProps={field}
                />
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
                  label={'Collection image image link'}
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
          <Field name='type'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <InputLabel id='select-type'>Collection Type</InputLabel>
                <Select
                  labelId='select-type'
                  inputProps={field}
                  style={{ paddingBottom: 3 }}
                >
                  <MenuItem value='project'>Project</MenuItem>
                  <MenuItem value='work'>Work</MenuItem>
                  <MenuItem value='study'>Study</MenuItem>
                  <MenuItem value='life'>Life</MenuItem>
                  <MenuItem value='other'>Other</MenuItem>
                </Select>
                <FormHelperText error>
                  {' '}
                  {form.touched.type && form.errors.type && form.errors.type}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
        </Grid>
        <Grid container direction='column' align='center'>
          <Typography>Image preview</Typography>
          <Grid
            className={classes.romb}
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

export default withStyles(styles)(CollectionForm);
