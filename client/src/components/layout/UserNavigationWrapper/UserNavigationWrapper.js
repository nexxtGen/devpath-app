import React, { useState } from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import UserSidebar from './UserSidebar/UserSidebar';
import UserAppbar from './UserAppbar/UserAppbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const styles = createStyles({
  root: {
    display: 'flex'
  },
  content: {
    padding: '50px',
    marginTop: '64px',
    width: 'calc(100vw - 66px)',
    minHeight: 'calc(100vh - 64px)',
    overflow: 'auto'
  }
});

const UserNavigationWrapper = ({ classes, children, user }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Grid className={classes.root}>
      <CssBaseline />
      <UserAppbar open={open} handleDrawerOpen={handleDrawerOpen} user={user} />
      <UserSidebar
        open={open}
        handleDrawerClose={handleDrawerClose}
        user={user}
      />
      <Grid className={classes.content}>{children}</Grid>
    </Grid>
  );
};

UserNavigationWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any,
  user: PropTypes.object
};
const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(
  withStyles(styles)(UserNavigationWrapper)
);
