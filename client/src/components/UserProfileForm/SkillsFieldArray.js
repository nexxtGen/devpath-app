import React from 'react';
import { Field, FastField, FieldArray, ErrorMessage } from 'formik';
import {
  FormControl,
  FormHelperText,
  withStyles,
  createStyles,
  Grid
} from '@material-ui/core';
import FTextFieldLow from '../../shared/FormikComponents/FTextFieldLow';
import PropTypes from 'prop-types';

const styles = createStyles({
  listItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    //boxShadow: '1px 1px 4px gray',
    marginBottom: 5,
    height: 60
  }
});

const SkillsFieldArray = ({ classes, FormikBag }) => {
  return (
    <Grid>
      <FieldArray
        name='skills'
        render={arrayHelpers => (
          <Grid>
            {FormikBag.values.skills.map((skill, index) => (
              <Grid key={index} className={classes.listItemContainer}>
                <FastField name={`skills[${index}].skillname`}>
                  {({ field, form }) => (
                    <FormControl fullWidth style={{ height: '75px' }}>
                      <FTextFieldLow
                        label={'SkillName'}
                        fieldProps={field}
                        disabled={false}
                      />
                      <FormHelperText error>
                        <ErrorMessage name={`skills.${index}.skillname`}>
                          {msg => <span>{msg}</span>}
                        </ErrorMessage>
                      </FormHelperText>
                    </FormControl>
                  )}
                </FastField>
                <FastField name={`skills[${index}].icon`}>
                  {({ field, form }) => (
                    <FormControl fullWidth style={{ height: '75px' }}>
                      <FTextFieldLow
                        label={'Img link'}
                        fieldProps={field}
                        disabled={false}
                      />
                      <FormHelperText error>
                        <ErrorMessage name={`skills.${index}.icon`}>
                          {msg => <span>{msg}</span>}
                        </ErrorMessage>
                      </FormHelperText>
                    </FormControl>
                  )}
                </FastField>

                <button
                  type='button'
                  onClick={() => arrayHelpers.remove(index)}
                >
                  X
                </button>
              </Grid>
            ))}

            <button
              type='button'
              onClick={() => arrayHelpers.push({ skillname: '', icon: '' })}
            >
              Add Skill
            </button>
          </Grid>
        )}
      />
    </Grid>
  );
};

SkillsFieldArray.propTypes = {
  classes: PropTypes.object.isRequired,
  FormikBag: PropTypes.object.isRequired
};

export default withStyles(styles)(SkillsFieldArray);
