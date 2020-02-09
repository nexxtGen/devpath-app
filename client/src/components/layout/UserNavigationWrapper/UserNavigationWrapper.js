import React, { useState } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import UserSidebar from './UserSidebar/UserSidebar';
import UserAppbar from './UserAppbar/UserAppbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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

const UserNavigationWrapper = ({ classes, children, auth }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (!auth.isAuthenticated && !auth.loading) {
    return <Redirect to='/' />;
  }

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

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(
  withStyles(styles)(UserNavigationWrapper)
);
