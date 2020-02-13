import React from 'react';
import {
  Formik,
  FormikProps,
  Form,
  Field,
  ErrorMessage,
  FieldArray
} from 'formik';
import {
  FormControl,
  FormHelperText,
  withStyles,
  createStyles,
  Grid
} from '@material-ui/core';
import FTextField from '../../shared/FormikComponents/FTextField';

const SkillsFieldArray = ({ FormikBag }) => {
  return (
    <div>
      <FieldArray
        name='skills'
        render={arrayHelpers => (
          <div>
            {FormikBag.values.skills.map((skill, index) => (
              <div
                key={index}
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <Field name={`skills[${index}].skillname`}>
                  {({ field, form }) => (
                    <FormControl fullWidth style={{ height: '75px' }}>
                      <FTextField
                        label={'Skillname'}
                        fieldProps={field}
                        disabled={false}
                      />
                      <FormHelperText error>
                        {form.touched.profession &&
                          form.errors.profession &&
                          form.errors.profession}
                      </FormHelperText>
                    </FormControl>
                  )}
                </Field>
                <Field name={`skills[${index}].icon`}>
                  {({ field, form }) => (
                    <FormControl fullWidth style={{ height: '75px' }}>
                      <FTextField
                        label={'Icon'}
                        fieldProps={field}
                        disabled={false}
                      />
                      <FormHelperText error>
                        {form.touched.profession &&
                          form.errors.profession &&
                          form.errors.profession}
                      </FormHelperText>
                    </FormControl>
                  )}
                </Field>

                {/* Remove this vehicle */}
                <button
                  type='button'
                  onClick={() => arrayHelpers.remove(index)}
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Add a new empty vehicle at the end of the list */}
            <button
              type='button'
              onClick={() => arrayHelpers.push({ skillname: '', icon: '' })}
            >
              Add Vehicle
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default SkillsFieldArray;
