import React from 'react';
import { TextField, withStyles, createStyles } from '@material-ui/core';
import { primary } from '../colors';

const styles = createStyles({
  muiTextField: {
    backgroundColor: 'white',
    paddingBottom: 5
  },
  underline: {
    '&::after': {
      border: `1px solid ${primary}`
    }
  }
});

const FTextField = ({
  classes,
  fieldProps,
  label,
  disabled,
  type,
  variant,
  ...rest
}) => {
  return (
    <TextField
      label={label}
      {...fieldProps}
      disabled={disabled}
      variant={variant || 'filled'}
      type={type || null}
      InputProps={{
        disableUnderline: false,
        classes: {
          input: classes.muiTextField,
          underline: classes.underline
        }
      }}
      {...rest}
    />
  );
};

export default withStyles(styles)(FTextField);
