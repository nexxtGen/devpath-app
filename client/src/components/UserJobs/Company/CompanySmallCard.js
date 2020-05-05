import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import { primaryLight } from '../../../shared/colors';
import Rating from '@material-ui/lab/Rating';

const styles = createStyles({
  companyContainer: {
    display: 'flex',
    direction: 'row',
    alignItems: 'center',
    width: '60%'
  },
  logoContainer: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center'
  },
  logo: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    width: 45,
    height: 45,
    padding: 0,
    margin: 0
  },
  iconFilled: {
    color: primaryLight
  }
});

const CompanySmallCard = ({ classes, company: { logo, name, rating } }) => {
  return (
    <Grid container className={classes.companyContainer}>
      <Grid item sm={4} className={classes.logoContainer}>
        <Grid
          style={{ backgroundImage: `url('${logo}')` }}
          className={classes.logo}
        ></Grid>
      </Grid>
      <Grid item sm={8}>
        <Typography variant='body1' className={classes.companyName}>
          {name}
        </Typography>
        <Grid container direction='row'>
          <Rating
            className={classes.iconFilled}
            name='read-only'
            value={rating}
            readOnly
            size='small'
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CompanySmallCard);
