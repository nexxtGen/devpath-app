import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { Button as MuiButton } from '@material-ui/core';
import { primary, primaryLight } from './colors';

const styles = createStyles({
  button: {
    width: '250px',
    borderRadius: 0,
    borderWidth: '3px',
    boxShadow: '0px 3px 14px rgba(0, 0, 0, 0.3)',
    backgroundColor: primary,
    color: 'white',
    '&:hover': {
      backgroundColor: primaryLight
    }
  }
});

const BasicButton = ({ classes, children, variant, size, ...rest }) => {
  return (
    <MuiButton
      variant={variant || 'contained'}
      size={size || 'large'}
      className={classes.button}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

export default withStyles(styles)(BasicButton);
