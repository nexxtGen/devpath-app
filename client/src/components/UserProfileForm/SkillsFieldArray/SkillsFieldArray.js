import React, { useState } from 'react';
import { FieldArray } from 'formik';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import SkillsList from './SkillsList';
import AddSkill from './AddSkill';

const styles = createStyles({
  listContainer: {
    flexDirection: 'column',
    maxWidth: 800
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    paddingLeft: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 25
  }
});

const SkillsFieldArray = ({ classes, FormikBag }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <FieldArray
      name='skills'
      render={arrayHelpers => (
        <Grid container className={classes.listContainer}>
          <Typography variant='h5' className={classes.headerContainer}>
            Skills List
          </Typography>
          <SkillsList
            FormikBag={FormikBag}
            arrayHelpers={arrayHelpers}
            editMode={editMode}
            setEditMode={setEditMode}
          />
          {editMode === false ? (
            <Grid style={{ padding: '0 70px 0 28px' }}>
              <AddSkill
                FormikBag={FormikBag}
                arrayHelpers={arrayHelpers}
                skillNameProps={`skillname`}
                iconNameProps={`icon`}
                index={''}
                editMode={editMode}
                setEditMode={setEditMode}
              />
            </Grid>
          ) : (
            ''
          )}
        </Grid>
      )}
    />
  );
};

SkillsFieldArray.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SkillsFieldArray);
