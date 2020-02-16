import React from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import { Form } from 'formik';
import BasicButton from '../../shared/BasicButton';
import BasicInfoForm from './BasicInfoForm';
import SkillsFieldArray from './SkillsFieldArray/SkillsFieldArray';

const styles = createStyles({
  form: {
    maxWidth: '100%'
  }
});

const ProfileForm = ({ classes, FormikBag }) => {
  return (
    <Form className={classes.form}>
      <Grid container spacing={3}>
        <Grid
          container
          item
          xs={6}
          style={{ boxShadow: '2px 2px 5px gray', margin: 10 }}
        >
          <BasicInfoForm />
        </Grid>
        <Grid
          container
          item
          xs={4}
          style={{ boxShadow: '2px 2px 5px gray', margin: 10 }}
        >
          <SkillsFieldArray FormikBag={FormikBag} />
        </Grid>
      </Grid>
      <Grid container justify='center' style={{ marginTop: '45px' }}>
        <BasicButton type='submit'>save</BasicButton>
      </Grid>
    </Form>
  );
};

export default withStyles(styles)(ProfileForm);
