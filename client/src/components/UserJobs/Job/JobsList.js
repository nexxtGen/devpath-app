import React from 'react';
import { Grid, withStyles, createStyles, Typography } from '@material-ui/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import JobCard from './JobCard';
import JobFilter from './JobFilter';
import { connect } from 'react-redux';
import PreloaderRelative from '../../../shared/PreloaderRelative';

const styles = createStyles({
  primaryContainer: {
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  listContainer: {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '76vh'
  }
});

const JobsList = ({
  classes,
  jobs,
  companies,
  setIsOpenJobFormModal,
  filteredJobs,
  loading
}) => {
  if (jobs.length === 0 && !loading) {
    return (
      <Grid className={classes.primaryContainer}>
        <JobFilter />
        <Typography>Jobs list is empty</Typography>
      </Grid>
    );
  }

  return (
    <Grid className={classes.primaryContainer}>
      <JobFilter />
      {jobs && companies.length > 0 ? (
        <TransitionGroup className={classes.listContainer}>
          {filteredJobs !== null
            ? filteredJobs.map(job => (
                <CSSTransition timeout={400} classNames='item' key={job._id}>
                  <JobCard
                    job={job}
                    setIsOpenJobFormModal={setIsOpenJobFormModal}
                    companies={companies}
                  />
                </CSSTransition>
              ))
            : jobs.map(job => (
                <CSSTransition timeout={400} classNames='item' key={job._id}>
                  <JobCard
                    key={job._id}
                    job={job}
                    setIsOpenJobFormModal={setIsOpenJobFormModal}
                    companies={companies}
                  />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <PreloaderRelative />
      )}
    </Grid>
  );
};
const mapStateToProps = state => ({
  companies: state.jobs.companies,
  jobs: state.jobs.jobs,
  loading: state.jobs.loading,
  filteredJobs: state.jobs.filteredJobs
});

export default connect(mapStateToProps, {})(withStyles(styles)(JobsList));
