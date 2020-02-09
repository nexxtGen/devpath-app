import React, { Fragment } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    background:
      'linear-gradient(135deg, rgba(101,74,141,1) 0%,rgba(88,62,125,1) 50%,rgba(67,39,98,1) 100%)',
    height: 200
  },
  link: {
    color: 'inherit',
    textDecoration: 'inherit'
  }
});

const LandingNavbar = ({ classes, auth: { isAuthenticated, loading } }) => {
  return (
    <Fragment>
      {isAuthenticated || loading ? (
        <Fragment></Fragment>
      ) : (
        <div className={classes.root}>
          <AppBar position='static' className={classes.appBar}>
            <Toolbar>
              <Typography variant='h6' className={classes.title}>
                <Link to='/' className={classes.link}>
                  DevPath
                </Link>
              </Typography>
              <Link to='/login' className={classes.link}>
                <Button color='inherit'>Login</Button>
              </Link>
              <Link to='/register' className={classes.link}>
                <Button color='inherit'>Register</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withStyles(styles)(LandingNavbar));
