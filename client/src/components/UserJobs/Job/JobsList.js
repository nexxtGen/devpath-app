import React from 'react';
import { Grid } from '@material-ui/core';
import JobCard from './JobCard';

const JobsList = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job, index) => (
        <Grid key={index}>
          <JobCard job={job} />
        </Grid>
      ))}
    </div>
  );
};

export default JobsList;
