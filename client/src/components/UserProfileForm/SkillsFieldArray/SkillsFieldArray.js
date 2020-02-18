import React, { useState } from 'react';
import { FieldArray } from 'formik';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import SkillsList from './SkillsList';
import AddSkill from './AddSkill';

const styles = createStyles({
  listContainer: {
    flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'center',
    maxWidth: 800
  }
});

const SkillsFieldArray = ({ classes, FormikBag }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <FieldArray
      name='skills'
      render={arrayHelpers => (
        <Grid container className={classes.listContainer}>
          <Typography variant='h4' className={classes.typographyPrimary}>
            Skills List
          </Typography>
          <SkillsList
            FormikBag={FormikBag}
            arrayHelpers={arrayHelpers}
            editMode={editMode}
            setEditMode={setEditMode}
          />
          {editMode === false ? (
            <AddSkill
              FormikBag={FormikBag}
              arrayHelpers={arrayHelpers}
              skillNameProps={`skillname`}
              iconNameProps={`icon`}
              index={''}
              editMode={editMode}
              setEditMode={setEditMode}
            />
          ) : (
            ''
          )}
        </Grid>
      )}
    />
  );
};

SkillsFieldArray.propTypes = {
  classes: PropTypes.object.isRequired,
  FormikBag: PropTypes.object.isRequired
};

export default withStyles(styles)(SkillsFieldArray);
