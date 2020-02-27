import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import { primaryLight } from '../../../shared/colors';
import Rating from '@material-ui/lab/Rating';

const styles = createStyles({
  companyContainer: {
    display: 'flex',
    direction: 'row',
    alignItems: 'center',
    //background: '#e5e5e5',
    width: '60%'
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
  iconFilled: {
    color: primaryLight
  }
});

const CompanySmallCard = ({ classes }) => {
  return (
    <Grid container className={classes.companyContainer}>
      <Grid item sm={4} className={classes.logoContainer}>
        <img src={logo} className={classes.logoImage} />
      </Grid>
      <Grid item sm={8}>
        <Typography variant='body1' className={classes.companyName}>
          Merix Studio Polska
        </Typography>
        <Grid container direction='row'>
          <Rating
            className={classes.iconFilled}
            name='read-only'
            value={4}
            readOnly
            size='small'
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CompanySmallCard);

const logo =
  'https://mir-s3-cdn-cf.behance.net/user/276/26a23494436.5c0e23af9216d.png';
