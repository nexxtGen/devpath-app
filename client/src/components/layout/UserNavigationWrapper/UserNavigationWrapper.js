import React, { useState } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import UserSidebar from './UserSidebar/UserSidebar';
import UserAppbar from './UserAppbar/UserAppbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingPage from '../LandingPage';

const styles = createStyles({
  root: {
    display: 'flex'
  }
});

const UserNavigationWrapper = classes => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <UserAppbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <UserSidebar open={open} handleDrawerClose={handleDrawerClose} />
      <LandingPage open={open} />
    </div>
  );
};

export default withStyles(styles)(UserNavigationWrapper);
