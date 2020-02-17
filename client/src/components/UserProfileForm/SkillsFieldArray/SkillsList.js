import React from 'react';
import {
  withStyles,
  Button,
  FormHelperText,
  Grid,
  createStyles
} from '@material-ui/core';
import DeleteForeverOutlinedIcon from '@material-ui/icons/Delete';
import Create from '@material-ui/icons/Create';
import { Field, ErrorMessage } from 'formik';
import checkSkillsExist from '../utilis/checkSkillsExist';
import Typography from '@material-ui/core/Typography';
import AddSkill from './AddSkill';

const styles = createStyles({
  personOutline: {
    width: '34px',
    height: '34px',
    color: 'rgb(0,143, 213)',
    marginTop: '5px',
    marginRight: '6px'
  },
  typograpfySubtitle: {
    marginTop: '10px',
    paddingLeft: '30px',
    color: 'gray'
  },
  editMemberButton: {
    width: '25px',
    height: '35px',
    color: 'rgb(0,143, 213)',
    padding: '8px',
    paddingLeft: '15px'
  },
  removeMemberButton: {
    minWidth: '30px',
    height: '35px',
    color: 'black',
    padding: '8px'
  }
});

const SkillsList = ({
  classes,
  FormikBag,
  arrayHelpers,
  editMode,
  setEditMode
}) => {
  return (
    <Grid
      container
      direction='column'
      justify='center'
      style={{ paddingRight: '0' }}
    >
      {checkSkillsExist(FormikBag) ? (
        FormikBag.values.skills.map((skill, index) => (
          <Grid key={index}>
            {skill.edit === false ? (
              <Grid
                container
                direction='row'
                justify='flex-start'
                alignItems='center'
              >
                <Grid
                  item
                  xs={7}
                  container
                  direction='row'
                  justify='flex-start'
                  alignItems='center'
                >
                  <img
                    src={skill.icon}
                    alt='Icon'
                    style={{ width: '40px', height: '40px' }}
                  />
                  <Typography
                    variant='subtitle1'
                    gutterBottom
                    className={classes.typograpfySubtitle}
                  >
                    {skill.skillname + ' '}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Field
                    render={({ field, form }) => (
                      <Button
                        className={classes.editMemberButton}
                        disabled={editMode}
                        name={`skills.${index}.edit`}
                        color='primary'
                        onClick={() => {
                          form.setFieldValue(`skills.${index}.edit`, true);
                          setEditMode(true);
                        }}
                      >
                        <Create />
                      </Button>
                    )}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    disabled={false}
                    className={classes.removeMemberButton}
                    type='button'
                    color='primary'
                    onClick={() => arrayHelpers.remove(index)}
                  >
                    <DeleteForeverOutlinedIcon />
                  </Button>
                </Grid>
              </Grid>
            ) : (
              <AddSkill
                FormikBag={FormikBag}
                arrayHelpers={arrayHelpers}
                skillNameProps={`skills.${index}.skillname`}
                iconNameProps={`skills.${index}.icon`}
                index={index}
                editMode={editMode}
                setEditMode={setEditMode}
              />
            )}
          </Grid>
        ))
      ) : (
        <Grid>
          <FormHelperText
            error
            style={{ marginBottom: '20px', textAlign: 'center' }}
          >
            <ErrorMessage name={`skills`}>
              {msg => <span>{msg}</span>}
            </ErrorMessage>
          </FormHelperText>
        </Grid>
      )}
    </Grid>
  );
};

export default withStyles(styles)(SkillsList);
