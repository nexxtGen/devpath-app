import React, { Fragment } from 'react';
import { withStyles, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import logo from '../../../assets/images/logo.png';
import styles from './LandingNavbarStyles';

const LandingNavbar = ({ classes, auth: { isAuthenticated, loading } }) => {
  return (
    <Fragment>
      {isAuthenticated || loading ? (
        <Fragment></Fragment>
      ) : (
        <Grid className={classes.root}>
          <AppBar position='static' className={classes.appBar}>
            <Toolbar>
              <Grid style={{ width: '100%' }}>
                <Link to='/' className={classes.link}>
                  <img src={logo} className={classes.logo} alt='logo' />
                  <Typography variant='h6' className={classes.title}>
                    DevPath
                  </Typography>
                </Link>
              </Grid>
              <Link to='/login' className={classes.link}>
                <Button color='inherit'>Login</Button>
              </Link>
              <Link to='/register' className={classes.link}>
                <Button color='inherit'>Register</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Grid>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withStyles(styles)(LandingNavbar));
