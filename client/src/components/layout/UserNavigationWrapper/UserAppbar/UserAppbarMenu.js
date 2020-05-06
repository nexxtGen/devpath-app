import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles, createStyles, Typography, Grid } from '@material-ui/core';
import LinkWithoutDefaultStyles from '../../../../shared/LinkWithoutDefaultStyles';
import PersonIcon from '@material-ui/icons/Person';
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { routes } from '../../../../static/routesUrl';
import { primary } from '../../../../shared/colors';

const styles = createStyles({
  menu: {
    marginTop: 52
  },
  icon: {
    color: primary,
    marginRight: 8,
    borderRight: '1px solid lightgray',
    paddingRight: 5
  },
  menuItems: {
    display: 'flex',
    flexDirection: 'row'
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
          <Grid className={classes.menuItems}>
            <PersonIcon className={classes.icon} />
            <Typography>Profile</Typography>
          </Grid>
        </LinkWithoutDefaultStyles>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <LinkWithoutDefaultStyles to={routes.createEditProfile}>
          <Grid className={classes.menuItems}>
            <EditIcon className={classes.icon} />
            <Typography>Edit Profile</Typography>
          </Grid>
        </LinkWithoutDefaultStyles>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <Grid className={classes.menuItems}>
          <ExitToAppIcon className={classes.icon} />
          <Typography>Logout</Typography>
        </Grid>
      </MenuItem>
    </Menu>
  );
};

export default withStyles(styles)(UserAppbarMenu);
