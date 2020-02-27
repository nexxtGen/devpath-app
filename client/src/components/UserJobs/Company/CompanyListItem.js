import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import { LocationOn } from '@material-ui/icons';

//import Rating from '@material-ui/lab/Rating';

const styles = createStyles({
  companyContainer: {
    display: 'flex',
    direction: 'row',
    alignItems: 'center',
    background: '#e5e5e5',
    width: '50%'
  },
  logoImage: {
    width: 45,
    height: 45,
    padding: 0,
    margin: 0
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  locationIcon: {
    color: 'gray',
    fontSize: 18,
    paddingTop: 4
  }
});

const CompanyListItem = ({ classes }) => {
  return (
    <Grid container className={classes.companyContainer}>
      <Grid item sm={4} className={classes.logoContainer}>
        <img src={logo} className={classes.logoImage} />
      </Grid>
      <Grid item sm={8}>
        <Typography variant='subtitle2'>Merix Studio</Typography>
        <Grid container direction='row'>
          <Typography variant='body2' color='textSecondary'>
            Poznań
          </Typography>
          <LocationOn className={classes.locationIcon} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CompanyListItem);

const logo =
  'https://mir-s3-cdn-cf.behance.net/user/276/26a23494436.5c0e23af9216d.png';
