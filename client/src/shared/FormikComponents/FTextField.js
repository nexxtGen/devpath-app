import React from 'react';
import { TextField, withStyles, createStyles } from '@material-ui/core';
import { primary } from '../colors';

const styles = createStyles({
  muiTextField: {
    backgroundColor: 'white',
    borderBottom: `1px solid ${primary}`,
    paddingBottom: 3
  }
});

const FTextField = ({ classes, fieldProps, label, disabled, type }) => {
  return (
    <TextField
      label={label}
      {...fieldProps}
      disabled={disabled}
      variant='filled'
      type={type || null}
      InputProps={{
        disableUnderline: true,
        classes: {
          input: classes.muiTextField
        }
      }}
    />
  );
};

export default withStyles(styles)(FTextField);
