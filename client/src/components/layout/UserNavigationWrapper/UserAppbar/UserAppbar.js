import React, { useState } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import UserAppbarMenu from './UserAppbarMenu';
import styles from './UserAppbarStyles';

const UserAppbar = ({ classes, open, handleDrawerOpen }) => {
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
          <Typography variant='h6' className={classes.title}>
            DevPath Logo
          </Typography>
          <Typography variant='h6' className={classes.title2}>
            Hello Kamil
          </Typography>
          <div>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <Avatar
                alt='Avatar'
                src='https://qph.fs.quoracdn.net/main-qimg-6cdacca8b9af4283eac60abbc764faf7.webp'
                className={classes.small}
              />
            </IconButton>
            <UserAppbarMenu
              anchorEl={anchorEl}
              open={openMenu}
              handleClose={handleClose}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(UserAppbar);
