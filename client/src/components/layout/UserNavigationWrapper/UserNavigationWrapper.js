import React, { useState } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import UserSidebar from './UserSidebar/UserSidebar';
import UserAppbar from './UserAppbar/UserAppbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';

const styles = createStyles({
  root: {
    display: 'flex'
  },
  content: {
    //display: 'flex',
    //flexGrow: 1,
    padding: 50,
    marginTop: '64px',
    width: '100%',
    minHeight: 'calc(100vh - 64px)'
    //justifyContent: 'center',
    //alignItems: 'center'
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

UserNavigationWrapper.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserNavigationWrapper);
