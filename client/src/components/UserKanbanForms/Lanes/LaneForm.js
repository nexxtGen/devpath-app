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
  Grid
} from '@material-ui/core';

const styles = createStyles({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 300
  },
  fieldsContainer: {
    padding: 15,
    height: 200
  }
});

const BoardForm = ({ classes, setIsOpen }) => {
  return (
    <Form>
      <Grid className={classes.primaryContainer}>
        <Grid item xs={12} className={classes.fieldsContainer}>
          <Field name='name'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField label={'Column Name'} fieldProps={field} />
                <FormHelperText error>
                  {form.touched.name && form.errors.name && form.errors.name}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
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
      </Grid>
    </Form>
  );
};

export default withStyles(styles)(BoardForm);
