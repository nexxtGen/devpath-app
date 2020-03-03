import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import CompanySmallCard from './CompanySmallCard';
import {
  LocationOn,
  CheckCircleOutline,
  Edit,
  DeleteOutline
} from '@material-ui/icons';
import { secondaryDark } from '../../../shared/colors';

const styles = createStyles({
  companyContainer: {
    minWidth: '400px',
    boxShadow: '1px 1px 5px gray',
    display: 'flex',
    direction: 'row',
    margin: '3px 4px',
    padding: 5
  },
  imgContainer: {
    width: '30%'
  },
  logo: {
    background: 'rgb(233, 233, 233)',
    width: '50px',
    height: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    margin: 5,
    padding: 0
  },
  locationIcon: {
    color: 'gray'
  }
});

const CompanyListItem = ({ classes, company }) => {
  return (
    <Grid className={classes.companyContainer}>
      <Grid className={classes.imgContainer}>
        <Grid
          className={classes.logo}
          style={{
            backgroundImage: `url('${company.logo}')`
          }}
        ></Grid>
      </Grid>
      <Grid>
        <Typography style={{ color: secondaryDark }}>{company.name}</Typography>
        <Grid container direction='row'>
          <Typography color='textSecondary'>{company.location.city}</Typography>
          <LocationOn className={classes.locationIcon} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CompanyListItem);
