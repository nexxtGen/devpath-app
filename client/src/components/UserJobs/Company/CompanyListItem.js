import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import { LocationOn } from '@material-ui/icons';
import { secondaryDark } from '../../../shared/colors';
import { connect } from 'react-redux';
import { setCurrentCompany } from '../../../actions/jobs';

const styles = createStyles({
  companyContainer: {
    minWidth: '300px',
    width: '380px',
    boxShadow: '1px 1px 5px gray',
    display: 'flex',
    direction: 'row',
    margin: '3px 4px',
    padding: 5,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
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

const CompanyListItem = ({
  classes,
  company,
  setCurrentCompany,
  currentCompany
}) => {
  return (
    <Grid
      className={classes.companyContainer}
      onClick={() => setCurrentCompany(company)}
      style={
        currentCompany && currentCompany._id === company._id
          ? { borderLeft: `5px solid ${secondaryDark}` }
          : {}
      }
    >
      <Grid className={classes.imgContainer}>
        <Grid
          className={classes.logo}
          style={{
            backgroundImage: `url('${company.logo}')`
          }}
        ></Grid>
      </Grid>
      <Grid className={classes.infoContainer}>
        <Grid item xs={7}>
          <Typography style={{ color: secondaryDark }}>
            {company.name}
          </Typography>
        </Grid>
        <Grid container item xs={5} direction='row'>
          <Typography color='textSecondary'>{company.location.city}</Typography>
          <LocationOn className={classes.locationIcon} />
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  currentCompany: state.jobs.currentCompany
});

export default connect(mapStateToProps, { setCurrentCompany })(
  withStyles(styles)(CompanyListItem)
);
