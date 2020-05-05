import React from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
import CompanySmallCard from '../Company/CompanySmallCard';
import { LocationOn, Edit, DeleteOutline } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import styles from './jobCardStyles';
import { connect } from 'react-redux';
import {
  setCurrentEditedJob,
  deleteUserJob,
  setUserJobApplied
} from '../../../actions/jobs';
import * as moment from 'moment';
import JobApplied from './JobApplied';

const JobCard = ({
  classes,
  job,
  companies,
  setIsOpenJobFormModal,
  setCurrentEditedJob,
  deleteUserJob,
  setUserJobApplied
}) => {
  const handleEdit = () => {
    setIsOpenJobFormModal({ open: true, mode: 'edit' });
    setCurrentEditedJob(job);
  };
  return (
    <Grid className={classes.primaryContainer}>
      <Grid className={classes.container}>
        <Grid container direction='row'>
          <Grid item xs={8}>
            <a href={job.source} target='blank' className={classes.link}>
              <Typography variant='h6'>{job.position}</Typography>
            </a>
          </Grid>
          <Grid item xs={4} container className={classes.locationContainer}>
            {job.location ? (
              <Grid>
                <Typography variant='body2' color='textSecondary'>
                  {job.location.city}
                </Typography>
                <LocationOn className={classes.locationIcon} />
              </Grid>
            ) : (
              ''
            )}
          </Grid>
        </Grid>
        <Divider />
        <Grid>
          <Typography variant='subtitle2'>
            Required Tech:{' '}
            <span style={{ color: '#00a8cc' }}>{job.technologies}</span>
          </Typography>
        </Grid>
        <Divider />
        <Grid style={{ padding: '6px 0' }}>
          <Typography variant='subtitle2'>
            Pros: <span style={{ color: '#51B148' }}>{job.pros}</span>
          </Typography>
          <Typography variant='subtitle2'>
            Cons: <span style={{ color: '#c53b50' }}>{job.cons}</span>
          </Typography>
        </Grid>
        <Grid container direction='row'>
          <CompanySmallCard
            company={companies.find(obj => {
              return obj._id === job.companyId;
            })}
          />
          <Grid className={classes.lvlContainer}>
            <Typography>
              Lvl: <span style={{ color: 'green' }}>{job.level}</span>
            </Typography>
            <Typography variant='subtitle2'>
              <span style={{ color: 'gray' }}>
                Created: {moment(job.createdAt).format('MMM Do YY')}
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.footer}>
        <Rating
          className={classes.iconFilled}
          name='read-only'
          value={job.rating}
          readOnly
          size='small'
        />
        <JobApplied job={job} setUserJobApplied={setUserJobApplied} />
        <Grid container justify='flex-end'>
          <IconButton aria-label='edit' onClick={() => handleEdit()}>
            <Edit className={classes.icon} />
          </IconButton>
          <IconButton
            aria-label='delete'
            onClick={() => deleteUserJob(job._id)}
          >
            <DeleteOutline className={classes.icon} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default connect(null, {
  setCurrentEditedJob,
  deleteUserJob,
  setUserJobApplied
})(withStyles(styles)(JobCard));
