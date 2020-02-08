import React, { useState } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import UserSidebar from './UserSidebar/UserSidebar';
import UserAppbar from './UserAppbar/UserAppbar';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = createStyles({
  root: {
    display: 'flex'
  },
  content: {
    display: 'flex',
    flexGrow: 1,
    padding: 60
  }
});

const UserNavigationWrapper = ({ classes, children }) => {
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
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default withStyles(styles)(UserNavigationWrapper);
