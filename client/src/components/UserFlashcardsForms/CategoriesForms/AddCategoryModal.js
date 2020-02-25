import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Field, Form } from 'formik';
import FTextField from '../../../shared/FormikComponents/FTextField';
import { primary } from '../../../shared/colors';
import {
  withStyles,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  Typography,
  Grid
} from '@material-ui/core';
import { connect } from 'react-redux';
import { createFlashcardsCategory } from '../../../actions/flashcards';

const styles = createStyles({
  underline: {
    '&::after': {
      border: `1px solid ${primary}`
    }
  },
  previewImg: {
    maxWidth: 200,
    minWidth: 100,
    minHeight: 100
  },
  romb: {
    background: 'rgb(233, 233, 233)',
    width: '300px',
    height: '112px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0% 100%)',
    margin: '15px auto 25px'
  }
});

const AddCategoryModal = ({
  classes,
  open,
  handleClose,
  createFlashcardsCategory
}) => {
  const handleSubmitCreate = (values, actions) => {
    createFlashcardsCategory(values);
    handleClose();
  };

  const handleCloseModal = () => {
    handleClose(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseModal}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          Add New Flashcard Category
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{ name: '', image: '' }}
            enableReinitialize={true}
            validationSchema={categorySchema}
            onSubmit={(values, actions) => handleSubmitCreate(values, actions)}
          >
            {FormikBag => (
              <Form>
                <Field name='name'>
                  {({ field, form }) => (
                    <FormControl fullWidth style={{ height: '75px' }}>
                      <FTextField
                        label={'Category Name'}
                        fieldProps={field}
                        disabled={false}
                      />
                      <FormHelperText error>
                        {form.touched.name &&
                          form.errors.name &&
                          form.errors.name}
                      </FormHelperText>
                    </FormControl>
                  )}
                </Field>
                <Field name='image'>
                  {({ field, form }) => (
                    <FormControl fullWidth style={{ height: '75px' }}>
                      <FTextField
                        label={'Image Link'}
                        fieldProps={field}
                        disabled={false}
                      />
                      <FormHelperText error>
                        {form.touched.image &&
                          form.errors.image &&
                          form.errors.image}
                      </FormHelperText>
                    </FormControl>
                  )}
                </Field>
                <Grid container direction='column' align='center'>
                  <Typography>Image preview</Typography>
                  <Grid
                    className={classes.romb}
                    style={{
                      backgroundImage: `url('${FormikBag.values.image}')`
                    }}
                  ></Grid>
                </Grid>
                <DialogActions>
                  <Button
                    variant='contained'
                    onClick={handleCloseModal}
                    color='primary'
                  >
                    Cancel
                  </Button>
                  <Button type='submit' variant='contained' color='primary'>
                    Add Category
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const categorySchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(20, 'Maximum 20 characters')
    .required('Category name is required'),
  image: Yup.string()
    .min(10, 'Minimum 10 characters')
    .max(500, 'Maximum 500 characters')
    .required('Image link is required')
});

export default connect(null, { createFlashcardsCategory })(
  withStyles(styles)(AddCategoryModal)
);
