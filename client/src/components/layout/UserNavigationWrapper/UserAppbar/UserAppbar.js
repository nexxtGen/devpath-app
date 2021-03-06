import React, { useState } from 'react';
import clsx from 'clsx';
import { withStyles, Grid } from '@material-ui/core';
import logo from '../../../../assets/images/logo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import UserAppbarMenu from './UserAppbarMenu';
import styles from './UserAppbarStyles';
import { Link } from 'react-router-dom';
import { logout } from '../../../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UserAppbar = ({ classes, open, handleDrawerOpen, logout, user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      {user && (
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Grid style={{ width: '100%' }}>
              <Link to='/' className={classes.link}>
                <img src={logo} className={classes.logo} alt='logo' />
                <Typography variant='h6' className={classes.title}>
                  DevPath
                </Typography>
              </Link>
            </Grid>
            <Grid className={classes.usernameContainer}>
              <span className={classes.username}>Hello {user.name}</span>
            </Grid>
            <Grid>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <Avatar
                  alt='Avatar'
                  src={user.avatar}
                  className={classes.small}
                />
              </IconButton>
              <UserAppbarMenu
                anchorEl={anchorEl}
                open={openMenu}
                handleClose={handleClose}
                logout={logout}
              />
            </Grid>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
};

UserAppbar.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  handleDrawerOpen: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object
};

export default connect(null, { logout })(withStyles(styles)(UserAppbar));
