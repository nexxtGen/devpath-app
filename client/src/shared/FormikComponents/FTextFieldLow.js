import React from 'react';
import { TextField, withStyles, createStyles, Grid } from '@material-ui/core';
import { primary } from '../colors';

const styles = createStyles({
  muiTextField: {
    backgroundColor: 'white',
    paddingBottom: 6,
    height: 13,
    paddingTop: 25
  },
  underline: {
    '&::after': {
      border: `1px solid ${primary}`
    }
  }
});

const FTextFieldLow = ({
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
      size='small'
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

export default withStyles(styles)(FTextFieldLow);
