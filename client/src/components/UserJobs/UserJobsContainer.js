import React, { useState } from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import JobCard from './Job/JobCard';
import JobFormModalContainer from '../UserJobsForms/JobFormModalContainer';
import AddBtn from './AddBtn';

const styles = createStyles({
  jobCards: {
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    height: '80vh'
  }
});

const UserJobsContainer = ({ classes }) => {
  const [isOpenJobFormModal, setIsOpenJobFormModal] = useState({
    open: false,
    mode: ''
  });
  const [isOpenCompanyFormModal, setIsOpenCompanyFormModal] = useState({
    open: false,
    mode: ''
  });

  return (
    <Grid>
      <Grid className={classes.jobCards}>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Grid>
      <JobFormModalContainer
        open={isOpenJobFormModal}
        setIsOpen={setIsOpenJobFormModal}
      />
      <AddBtn openJobModal={setIsOpenJobFormModal} />
    </Grid>
  );
};

export default withStyles(styles)(UserJobsContainer);
