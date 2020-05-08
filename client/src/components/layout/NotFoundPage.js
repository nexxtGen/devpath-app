import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import not_found from '../../assets/images/not_found.jpg';

const styles = createStyles({
  container: {
    width: '100%',
    heigth: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  notFound: {
    maxWidth: 800
  }
});

const NotFoundPage = ({ classes }) => {
  return (
    <Grid className={classes.container}>
      <img src={not_found} className={classes.notFound} />
      <p style={{ textAlign: 'center' }}>
        <Link to='/'>Go to Home </Link>
      </p>
    </Grid>
  );
};
export default withStyles(styles)(NotFoundPage);
