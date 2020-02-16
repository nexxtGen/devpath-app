import React from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ProfileForm from './ProfileForm';
import styles from './profileFormStyles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UserProfileFormContainer = ({ classes }) => {
  const submitForm = values => {
    console.log(values);
  };

  const initialValues = {
    profession: '',
    company: '',
    country: '',
    location: '',
    website: '',
    usernameservices: {
      github: '',
      codewars: ''
    },
    skills: [
      {
        skillname: 'React',
        icon:
          'https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png',
        edit: false
      },
      {
        skillname: 'Node.js',
        icon:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5uBi1MmG23ko8-dlCf_Y_7m3Q-2Ah9RwFoO6Lsk295p97X-T&s',
        edit: false
      },
      {
        skillname: 'HTML 5',
        icon:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1yekAb16Kh-XOlZ7A0O3WjkaaxCJQ27AfU9elJTDGPTztDhL9A&s',
        edit: false
      }
    ]
  };
  return (
    <Grid className={classes.formContainer}>
      <Grid container className={classes.primaryContainer} spacing={4}>
        <Grid className={classes.headerContainer}>
          <Typography variant='h4' className={classes.typographyPrimary}>
            Profile Form
          </Typography>
        </Grid>
        <Grid className={classes.formikContainer}>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={formProfileSchema}
            onSubmit={(values, actions) => submitForm(values, actions)}
          >
            {FormikBag => <ProfileForm FormikBag={FormikBag} />}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
};

UserProfileFormContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

const formProfileSchema = Yup.object().shape({
  profession: Yup.string().required('Profession is required'),
  company: Yup.string()
    .min(2, 'Minimum 2 letters')
    .max(20, 'Maximum 20 letters'),
  country: Yup.string()
    .min(2, 'Minimum 2 letters')
    .max(20, 'Maximum 20 letters')
    .required('Country is required'),
  location: Yup.string()
    .min(2, 'Minimum 2 letters')
    .max(20, 'Maximum 20 letters'),
  skills: Yup.array().of(
    Yup.object().shape({
      skillname: Yup.string()
        .min(2, 'Minimum 2 letters')
        .max(20, 'Maximum 20 letters')
        .required('Name of skill is required'),
      icon: Yup.string()
        .min(2, 'Minimum 2 letters')
        .max(100, 'Maximum 100 letters')
        .required('Icon link is required')
    })
  )
});

const mapStateToProps = state => ({});

export default connect(null)(withStyles(styles)(UserProfileFormContainer));
