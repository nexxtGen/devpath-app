import React from 'react';
import { Grid } from '@material-ui/core';
import JobCard from './JobCard';

const JobsList = ({ jobs, companies, setIsOpenJobFormModal }) => {
  return (
    <div>
      {jobs.map(job => (
        <Grid key={job._id}>
          <JobCard
            job={job}
            setIsOpenJobFormModal={setIsOpenJobFormModal}
            companies={companies}
          />
        </Grid>
      ))}
    </div>
  );
};

export default JobsList;
