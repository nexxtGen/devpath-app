import React from 'react';
import {
  withStyles,
  Button,
  FormHelperText,
  FormControl,
  Input,
  Grid,
  createStyles
} from '@material-ui/core';
import { Field, ErrorMessage, FieldProps } from 'formik';
import PersonAddOutlined from '@material-ui/icons/PersonAddOutlined';
import addNewSkill from '../utilis/addNewSkill';
import confirmFinishSkillEdit from '../utilis/confirmFinishSkillEdit';
import validateMessage from '../utilis/validateMessage';

const styles = createStyles({
  personOutline: {
    width: '34px',
    height: '34px',
    color: 'rgb(0,143, 213)',
    marginTop: '5px',
    marginRight: '6px'
  },
  addMemberButton: {
    padding: '0',
    paddingBottom: '8px'
  },
  muiTextFieldLow: {
    paddingLeft: '15px',
    backgroundColor: 'white',
    borderBottom: '2px solid rgb(0,143, 213)',
    height: '45px'
  }
});

const AddSkill = ({
  classes,
  FormikBag,
  arrayHelpers,
  skillNameProps,
  iconNameProps,
  index,
  editMode,
  setEditMode
}) => {
  return (
    <Grid
      container
      direction='row'
      style={{ marginTop: '5px' }}
      justify='flex-start'
    >
      <Grid item xs={2}>
        <Field
          render={({ field, form }) => {
            return (
              <Button
                name={skillNameProps}
                className={classes.addMemberButton}
                type='button'
                onClick={
                  index === ''
                    ? () => addNewSkill(FormikBag, arrayHelpers, form)
                    : () => {
                        confirmFinishSkillEdit(
                          FormikBag,
                          form,
                          index,
                          setEditMode
                        );
                      }
                }
              >
                <PersonAddOutlined className={classes.personOutline} />
              </Button>
            );
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Field
          name={skillNameProps}
          render={({ field, form }) => {
            return (
              <FormControl fullWidth>
                <Input
                  className={classes.muiTextFieldLow}
                  {...field}
                  disableUnderline={true}
                  placeholder='Skill Name'
                />
                {index !== '' ? (
                  <FormHelperText error>
                    <ErrorMessage name={skillNameProps}>
                      {msg => <span>{msg}</span>}
                    </ErrorMessage>
                  </FormHelperText>
                ) : (
                  <Grid style={{ height: '20px' }}>
                    {validateMessage(FormikBag, 'skill')}
                  </Grid>
                )}
              </FormControl>
            );
          }}
        />
        <Field
          name={iconNameProps}
          render={({ field, form }) => {
            return (
              <FormControl fullWidth>
                <Input
                  className={classes.muiTextFieldLow}
                  {...field}
                  disableUnderline={true}
                  placeholder='Icon link'
                />
                {index !== '' ? (
                  <FormHelperText error>
                    <ErrorMessage name={iconNameProps}>
                      {msg => <span>{msg}</span>}
                    </ErrorMessage>
                  </FormHelperText>
                ) : (
                  <Grid style={{ height: '20px' }}>
                    {validateMessage(FormikBag, 'icon')}
                  </Grid>
                )}
              </FormControl>
            );
          }}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(AddSkill);
