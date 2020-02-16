import React from 'react';
import { FormHelperText } from '@material-ui/core';

const validateMessage = (FormikBag, name) => {
  console.log('Formik  Bag:', FormikBag);
  const skillname = FormikBag.values.skillname;
  const icon = FormikBag.values.icon;
  const Message = 'Nazwa jest za krótka';
  /*
  if (name === 'skill' && skillname.length < 2 && skillname.length > 0) {
    return (
      <FormHelperText error>
        <span>{Message}</span>
      </FormHelperText>
    );
  } else if (name === 'icon' && icon.length < 2 && icon.length > 0) {
    return (
      <FormHelperText error>
        <span>{Message}</span>
      </FormHelperText>
    );
  }
  */
};

export default validateMessage;
