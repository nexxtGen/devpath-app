import React from 'react';
import {
  withStyles,
  createStyles,
  Grid,
  Avatar,
  Typography
} from '@material-ui/core';
import { Form } from 'formik';
import BasicButton from '../../shared/BasicButton';
import BasicInfoForm from './BasicInfoForm';
import SkillsFieldArray from './SkillsFieldArray/SkillsFieldArray';
import PropTypes from 'prop-types';

const styles = createStyles({
  form: {
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  basicInfoForm: {
    borderRight: '1px solid lightgray',
    margin: '10px 25px 10px 0',
    minWidth: 500
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatarBox: {
    height: '100%'
  },
  avatarImg: {
    width: 80,
    height: 80,
    marginBottom: 15
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    paddingLeft: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 18
  }
});

const ProfileForm = ({ classes, FormikBag, user }) => {
  return (
    <Form>
      <Grid container className={classes.form}>
        <Grid container item xs={5} className={classes.basicInfoForm}>
          <Grid className={classes.headerContainer}>
            <Typography variant='h5' className={classes.typographyPrimary}>
              Your Profile
            </Typography>
          </Grid>
          <Grid container>
            <Grid item xs={3} className={classes.avatarContainer}>
              <Grid className={classes.avatarBox}>
                <Avatar src={user.avatar} className={classes.avatarImg} />
                <Typography>{user.name}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <BasicInfoForm />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={4} style={{ margin: 10, minWidth: 500 }}>
          <SkillsFieldArray FormikBag={FormikBag} />
        </Grid>
      </Grid>
      <Grid container justify='center' style={{ marginTop: '45px' }}>
        <BasicButton type='submit'>save</BasicButton>
      </Grid>
    </Form>
  );
};

ProfileForm.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object
};

export default withStyles(styles)(ProfileForm);
