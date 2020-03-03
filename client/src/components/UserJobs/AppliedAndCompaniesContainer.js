import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import CompaniesList from './Company/CompaniesList';
import MapContainer from './Map/MapContainer';
import { secondaryDark } from '../../shared/colors';

const styles = createStyles({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  listContainer: {
    display: 'flex',
    marginLeft: '30px',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  listHeader: {
    width: '420px',
    background: secondaryDark,
    margin: '0 3px'
  },
  mapContainer: {
    width: '100%',
    margin: 20
  }
});

const AppliedAndCompaniesContainer = ({ classes, companies, loading }) => {
  return (
    <Grid className={classes.primaryContainer}>
      <Grid className={classes.listContainer}>
        <Grid>
          <Grid className={classes.listHeader}>
            <Typography style={{ padding: 6, color: 'white' }}>
              Companies List
            </Typography>
          </Grid>
          <CompaniesList companies={companies} loading={loading} />
        </Grid>
        <Grid>
          <Grid className={classes.listHeader}>
            <Typography style={{ padding: 6, color: 'white' }}>
              Company Information
            </Typography>
          </Grid>
          <CompaniesList companies={companies} loading={loading} />
        </Grid>
      </Grid>
      <Grid className={classes.mapContainer}>
        <MapContainer />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(AppliedAndCompaniesContainer);
