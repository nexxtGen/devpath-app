import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import CompaniesList from './Company/CompaniesList';
import CompanyInfo from './Company/CompanyInfo';
import MapContainer from './Map/MapContainer';
import { gradientPrimary } from '../../shared/colors';

const styles = createStyles({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  listContainer: {
    display: 'flex',
    marginLeft: '30px',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  listHeader: {
    display: 'flex',
    alignItems: 'center',
    width: '410px',
    background: gradientPrimary,
    margin: '0 6px',
    height: 40,
    paddingLeft: 10
  },
  listHeaderInfo: {
    display: 'flex',
    alignItems: 'center',
    width: '420px',
    background: gradientPrimary,
    margin: '0 3px',
    height: 40,
    paddingLeft: 10
  },
  mapContainer: {
    width: '100%',
    maxWidth: '870px',
    height: '400px',
    padding: 15,
    position: 'relative'
  }
});

const CompaniesContainer = ({
  classes,
  companies,
  loading,
  setIsOpenCompanyFormModal
}) => {
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
          <Grid className={classes.listHeaderInfo}>
            <Typography style={{ padding: 6, color: 'white' }}>
              Company Information
            </Typography>
          </Grid>
          <CompanyInfo
            companies={companies}
            loading={loading}
            setIsOpenCompanyFormModal={setIsOpenCompanyFormModal}
          />
        </Grid>
        <Grid className={classes.mapContainer}>
          <MapContainer />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CompaniesContainer);
