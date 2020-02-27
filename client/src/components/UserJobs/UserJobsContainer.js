import React from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import JobCard from './Job/JobCard';

const styles = createStyles({
  jobCards: {
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    height: '80vh'
  }
});

const UserJobsContainer = ({ classes }) => {
  return (
    <Grid>
      <Grid className={classes.jobCards}>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(UserJobsContainer);
