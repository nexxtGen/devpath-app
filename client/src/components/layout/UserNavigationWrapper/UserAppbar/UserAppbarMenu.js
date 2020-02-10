import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles, createStyles } from '@material-ui/core';
import LinkWithoutDefaultStyles from '../../../../shared/LinkWithoutDefaultStyles';
import { routes } from '../../../../static/routesUrl';

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
        <LinkWithoutDefaultStyles to={routes.userProfile}>
          Profile
        </LinkWithoutDefaultStyles>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <LinkWithoutDefaultStyles to={routes.userFlashcards}>
          Card
        </LinkWithoutDefaultStyles>
      </MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );
};

export default withStyles(styles)(UserAppbarMenu);
