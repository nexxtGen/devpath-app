import React, { useState, useEffect } from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import JobCard from './Job/JobCard';
import JobFormModalContainer from '../UserJobsForms/JobFormModalContainer';
import AddBtn from './AddBtn';
import { connect } from 'react-redux';
import { getAllUserCompanies } from '../../actions/jobs';

const styles = createStyles({
  jobCards: {
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    height: '80vh'
  }
});

const UserJobsContainer = ({
  classes,
  getAllUserCompanies,
  jobs: { loading, companies, jobs }
}) => {
  const [isOpenJobFormModal, setIsOpenJobFormModal] = useState({
    open: false,
    mode: ''
  });
  const [isOpenCompanyFormModal, setIsOpenCompanyFormModal] = useState({
    open: false,
    mode: ''
  });

  useEffect(() => {
    getAllUserCompanies();
    //eslint-disable-next-line
  }, []);

  return (
    <Grid>
      <Grid className={classes.jobCards}>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Grid>
      {!loading && companies.length > 0 ? (
        <JobFormModalContainer
          open={isOpenJobFormModal}
          setIsOpen={setIsOpenJobFormModal}
          companies={companies}
        />
      ) : (
        <Grid></Grid>
      )}
      <AddBtn openJobModal={setIsOpenJobFormModal} />
    </Grid>
  );
};

const mapStateToProps = state => ({
  jobs: state.jobs
});

export default connect(mapStateToProps, { getAllUserCompanies })(
  withStyles(styles)(UserJobsContainer)
);
