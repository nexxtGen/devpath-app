import React, { useState, useEffect } from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import JobsList from './Job/JobsList';
import JobFormModalContainer from '../UserJobsForms/JobFormModalContainer';
import CompanyFormModalContainer from '../UserJobsForms/CompanyFormModalContainer';
import AppliedAndCompaniesContainer from './AppliedAndCompaniesContainer';
import AddBtn from './AddBtn';
import { connect } from 'react-redux';
import { getAllUserCompanies } from '../../actions/jobs';
import { getAllUserJobs } from '../../actions/jobs';

const styles = createStyles({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  },
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
  getAllUserJobs,
  jobs
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
    getAllUserJobs();
    //eslint-disable-next-line
  }, []);

  return (
    <Grid className={classes.primaryContainer}>
      <JobsList
        jobs={jobs.jobs}
        companies={jobs.companies}
        setIsOpenJobFormModal={setIsOpenJobFormModal}
      />

      <JobFormModalContainer
        open={isOpenJobFormModal}
        setIsOpen={setIsOpenJobFormModal}
        companies={jobs.companies}
      />
      <CompanyFormModalContainer
        open={isOpenCompanyFormModal}
        setIsOpen={setIsOpenCompanyFormModal}
      />
      <AddBtn
        openJobModal={setIsOpenJobFormModal}
        openCompanyModal={setIsOpenCompanyFormModal}
      />
      <AppliedAndCompaniesContainer
        companies={jobs.companies}
        loading={jobs.loading}
      />
    </Grid>
  );
};

const mapStateToProps = state => ({
  jobs: state.jobs
});

export default connect(mapStateToProps, {
  getAllUserCompanies,
  getAllUserJobs
})(withStyles(styles)(UserJobsContainer));
