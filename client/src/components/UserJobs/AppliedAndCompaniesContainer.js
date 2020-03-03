import React from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import CompaniesList from './Company/CompaniesList';

const styles = createStyles({
  primaryContainer: {
    width: '100%',
    display: 'flex',
    marginLeft: '15px',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

const AppliedAndCompaniesContainer = ({ classes, companies, loading }) => {
  return (
    <Grid className={classes.primaryContainer}>
      <Grid>
        <CompaniesList companies={companies} loading={loading} />
      </Grid>
      <Grid>
        <CompaniesList companies={companies} loading={loading} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(AppliedAndCompaniesContainer);
