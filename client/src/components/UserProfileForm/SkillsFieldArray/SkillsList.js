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
import { primary } from '../../../shared/colors';

const styles = createStyles({
  typograpfySubtitle: {
    marginTop: '10px',
    paddingLeft: '30px',
    color: 'gray'
  },
  editSkillButton: {
    width: '25px',
    height: '35px',
    color: primary,
    padding: '8px',
    paddingLeft: '15px'
  },
  removeSkillButton: {
    minWidth: '30px',
    height: '35px',
    padding: '8px',
    marginLeft: 10
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
      style={{ paddingRight: '0', marginLeft: '40px' }}
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
                  xs={8}
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
                <Grid item xs={1}>
                  <Field>
                    {({ field, form }) => (
                      <Button
                        className={classes.editSkillButton}
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
                  </Field>
                </Grid>
                <Grid item xs={1}>
                  <Button
                    disabled={false}
                    className={classes.removeSkillButton}
                    type='button'
                    color='secondary'
                    onClick={() => arrayHelpers.remove(index)}
                  >
                    <DeleteForeverOutlinedIcon />
                  </Button>
                </Grid>
              </Grid>
            ) : (
              <Grid style={{ paddingRight: '75px' }}>
                <AddSkill
                  FormikBag={FormikBag}
                  arrayHelpers={arrayHelpers}
                  skillNameProps={`skills.${index}.skillname`}
                  iconNameProps={`skills.${index}.icon`}
                  index={index}
                  editMode={editMode}
                  setEditMode={setEditMode}
                />
              </Grid>
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
