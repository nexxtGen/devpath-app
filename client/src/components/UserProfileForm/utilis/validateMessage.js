import React from 'react';
import { FormHelperText } from '@material-ui/core';

const validateMessage = (FormikBag, name) => {
  const skillname = FormikBag.values.skillname;
  const icon = FormikBag.values.icon;
  const shortMessage = 'Minimum 2 letters';
  const longMessage = 'Maximum 20 letters';
  const linkMessageTooShort = 'Minimum 10 characters';
  const linkMessageTooLong = 'Maximum 500 characters';

  if (name === 'skill' && skillname.length < 2 && skillname.length > 0) {
    return (
      <FormHelperText error>
        <span>{shortMessage}</span>
      </FormHelperText>
    );
  } else if (name === 'skill' && skillname.length > 20) {
    return (
      <FormHelperText error>
        <span>{longMessage}</span>
      </FormHelperText>
    );
  } else if (name === 'icon' && icon.length < 10 && icon.length > 0) {
    return (
      <FormHelperText error>
        <span>{linkMessageTooShort}</span>
      </FormHelperText>
    );
  } else if (name === 'icon' && icon.length > 500) {
    return (
      <FormHelperText error>
        <span>{linkMessageTooLong}</span>
      </FormHelperText>
    );
  }
};

export default validateMessage;
