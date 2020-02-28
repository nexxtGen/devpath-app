import React from 'react';
import moment from 'moment';
import { withStyles, Grid, Typography } from '@material-ui/core';
import CompanySmallCard from '../Company/CompanySmallCard';
import {
  LocationOn,
  CheckCircleOutline,
  Edit,
  DeleteOutline
} from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './jobCardStyles';
import { connect } from 'react-redux';
import { setCurrentEditedJob } from '../../../actions/jobs';
import { deleteUserJob } from '../../../actions/jobs';

const JobCard = ({
  classes,
  job,
  companies,
  setIsOpenJobFormModal,
  setCurrentEditedJob,
  deleteUserJob
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
            <Typography variant='body2' color='textSecondary'>
              {job.city}
            </Typography>
            <LocationOn className={classes.locationIcon} />
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

        <Typography variant='subtitle2' className={classes.appliedTypo}>
          Applied?
        </Typography>
        <Tooltip title='Click to change status' placement='top'>
          <IconButton
            className={classes.appliedButton}
            aria-label='Applied value'
          >
            <CheckCircleOutline />
          </IconButton>
        </Tooltip>
        <Grid container justify='flex-end'>
          <IconButton aria-label='edit' onClick={() => handleEdit()}>
            <Edit className={classes.icon} />
          </IconButton>
          <IconButton
            aria-label='delete'
            onClick={() => deleteUserJob(job._id, job.companyId)}
          >
            <DeleteOutline className={classes.icon} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default connect(null, { setCurrentEditedJob, deleteUserJob })(
  withStyles(styles)(JobCard)
);
