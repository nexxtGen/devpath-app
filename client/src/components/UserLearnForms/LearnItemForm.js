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
  previewShape: {
    background: 'rgb(233, 233, 233)',
    width: '300px',
    height: '112px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    margin: '15px auto 25px'
  }
});

const LearnItemForm = ({ classes, FormikBag, setIsOpen, categoriesList }) => {
  const ref = React.createRef();
  return (
    <Form>
      <Grid container direction='row'>
        <Grid style={{ paddingRight: 15 }}>
          <Field name='categoryId'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <InputLabel id='select-category'>Category*</InputLabel>
                <Select
                  labelId='select-category'
                  inputProps={field}
                  style={{ paddingBottom: 3 }}
                  //disabled={open.mode === 'edit' ? true : false}
                >
                  {categoriesList.map((category, index) => {
                    return (
                      <MenuItem key={index} value={category._id}>
                        {category.name}
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
          <Field name='type'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <InputLabel id='select-type'>Type</InputLabel>
                <Select
                  labelId='select-type'
                  inputProps={field}
                  style={{ paddingBottom: 3 }}
                >
                  <MenuItem value='article'>Article</MenuItem>
                  <MenuItem value='tutorial'>Tutorial</MenuItem>
                  <MenuItem value='other'>Other</MenuItem>
                </Select>
                <FormHelperText error>
                  {' '}
                  {form.touched.type && form.errors.type && form.errors.type}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='title'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField label={'Item title'} fieldProps={field} />
                <FormHelperText error>
                  {form.touched.title && form.errors.title && form.errors.title}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='description'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField label={'Item description '} fieldProps={field} />
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
                <FTextField label={'Item image link'} fieldProps={field} />
                <FormHelperText error>
                  {form.touched.image && form.errors.image && form.errors.image}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='link'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField label={'Item link '} fieldProps={field} />
                <FormHelperText error>
                  {form.touched.link && form.errors.link && form.errors.link}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='sourcename'>
            {({ field, form }) => (
              <FormControl fullWidth style={{ height: '75px' }}>
                <FTextField label={'Item sourcename '} fieldProps={field} />
                <FormHelperText error>
                  {form.touched.sourcename &&
                    form.errors.sourcename &&
                    form.errors.sourcename}
                </FormHelperText>
              </FormControl>
            )}
          </Field>
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

export default withStyles(styles)(LearnItemForm);
