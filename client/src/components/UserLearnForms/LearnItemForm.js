import React, { useState } from 'react';
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
  Select,
  Slider,
  Tooltip,
  Button,
  Typography
} from '@material-ui/core';

const styles = createStyles({
  underline: {
    '&::after': {
      border: `1px solid ${primary}`
    }
  },
  selectField: {}
});

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip
      open={open}
      enterTouchDelay={0}
      placement='top'
      title={`${value}%`}
    >
      {children}
    </Tooltip>
  );
}

const LearnItemForm = ({ classes, FormikBag, setIsOpen, categoriesList }) => {
  const { sliderValue, setSliderValue } = useState(88);
  return (
    <Form>
      <Grid container direction='row'>
        <Grid container direction='row'>
          <Grid item xs={8} style={{ paddingRight: 20 }}>
            <Field name='title'>
              {({ field, form }) => (
                <FormControl fullWidth style={{ height: '75px' }}>
                  <FTextField label={'Item title'} fieldProps={field} />
                  <FormHelperText error>
                    {form.touched.title &&
                      form.errors.title &&
                      form.errors.title}
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
                    {form.touched.image &&
                      form.errors.image &&
                      form.errors.image}
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
          <Grid item xs={4}>
            <Field name='categoryId' className={classes.selectField}>
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
            <Field name='progress'>
              {({ field, form }) => (
                <FormControl fullWidth style={{ height: '75px' }}>
                  <Typography>Course progress</Typography>
                  <Slider
                    ValueLabelComponent={ValueLabelComponent}
                    aria-label='custom thumb label'
                    name={field.name}
                    value={field.value}
                    onChange={(e, value) =>
                      form.setFieldValue(field.name, value)
                    }
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

export default withStyles(styles)(LearnItemForm);
