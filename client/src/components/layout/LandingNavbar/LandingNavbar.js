import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    background:
      'linear-gradient(135deg, rgba(101,74,141,1) 0%,rgba(88,62,125,1) 50%,rgba(67,39,98,1) 100%)'
  },
  link: {
    color: 'inherit',
    textDecoration: 'inherit'
  }
});

const LandingNavbar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            DevPath Logo
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
  );
};

export default withStyles(styles)(LandingNavbar);
