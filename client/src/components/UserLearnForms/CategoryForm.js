import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { Field, Form } from 'formik';
import FTextField from '../../shared/FormikComponents/FTextField';
import { primary } from '../../shared/colors';
import {
  withStyles,
  createStyles,
  DialogActions,
  FormControl,
  FormHelperText,
  Grid
} from '@material-ui/core';

const styles = createStyles({
  underline: {
    '&::after': {
      border: `1px solid ${primary}`
    }
  },
  previewShape: {
    background: 'rgb(233, 233, 233)',
    width: '300px',
    height: '112px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)',
    margin: '15px auto 25px'
  }
});

const CategoryForm = ({ classes, FormikBag, setIsOpen }) => {
  return (
    <Form>
      <Grid container direction='row'>
        <Grid style={{ paddingRight: 15 }}>
          <Field name='name'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField label={'Category Name'} fieldProps={field} />
                <FormHelperText error>
                  {form.touched.name && form.errors.name && form.errors.name}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='image'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField label={'Category image link'} fieldProps={field} />
                <FormHelperText error>
                  {form.touched.image && form.errors.image && form.errors.image}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Grid container direction='column' align='center'>
            <Typography>Image preview</Typography>
            <Grid
              className={classes.previewShape}
              style={{
                backgroundImage: `url('${FormikBag.values.image}')`
              }}
            ></Grid>
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

export default withStyles(styles)(CategoryForm);
