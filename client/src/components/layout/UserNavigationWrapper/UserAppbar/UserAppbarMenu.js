import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles, createStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = createStyles({
  menu: {
    marginTop: 52
  }
});

const UserAppbarMenu = ({ classes, anchorEl, open, handleClose, logout }) => {
  const handleLogout = () => {
    handleClose();
    logout();
  };

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
      <MenuItem onClick={handleClose}>
        <Link to='/main'>Profile</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to='/card'>Card</Link>
      </MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );
};

export default withStyles(styles)(UserAppbarMenu);
