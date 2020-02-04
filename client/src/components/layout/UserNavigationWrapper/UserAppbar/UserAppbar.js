import React from 'react';
import clsx from 'clsx';
import { withStyles, createStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 230;
const styles = createStyles({
  root: {
    flexGrow: 1,
    background: 'none'
  },
  appBar: {
    background:
      'linear-gradient(135deg, rgba(101,74,141,1) 0%,rgba(88,62,125,1) 50%,rgba(67,39,98,1) 100%)',
    zIndex: 1,
    transition: 'width 0.2s, margin .02s, ease-in',
    height: 65
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: 'width 0.2s, margin .02s, ease-in'
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  title: {
    flexGrow: 2,
    marginRight: 100
  },
  small: {
    width: 45,
    height: 45,
    border: '1px solid rgba(121,74,141,1)'
  },
  menu: {
    marginTop: 52
  }
});

const UserAppbar = ({ classes, open, handleDrawerOpen }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
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
            Photos
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
              open={openMenu}
              onClose={handleClose}
              className={classes.menu}
            >
              <MenuItem onClick={handleClose}>
                <Avatar
                  alt='Avatar'
                  src='https://qph.fs.quoracdn.net/main-qimg-6cdacca8b9af4283eac60abbc764faf7.webp'
                  className={classes.small}
                />
                Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(UserAppbar);

// background:
//'linear-gradient(135deg, rgba(101,74,141,1) 0%,rgba(88,62,125,1) 50%,rgba(67,39,98,1) 100%)',
