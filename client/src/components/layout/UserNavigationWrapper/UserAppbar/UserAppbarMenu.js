import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles, createStyles } from '@material-ui/core';

const styles = createStyles({
  menu: {
    marginTop: 52
  }
});

const UserAppbarMenu = ({ classes, anchorEl, open, handleClose }) => {
  return (
    <Menu
      id='menu-appbar'
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={open}
      onClose={handleClose}
      className={classes.menu}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  );
};

export default withStyles(styles)(UserAppbarMenu);
