import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import { CheckCircleOutline } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import { primary } from '../../../shared/colors';

const styles = createStyles({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderLeft: '1px solid white',
    alignItems: 'center',
    marginLeft: 10,
    paddingLeft: 10
  },
  appliedTypo: {
    color: 'white',
    fontWeight: 600
  },
  appliedButton: {
    background: primary,
    color: 'lightgreen',
    border: '1px solid lightgreen',
    padding: '3px 5px',
    borderRadius: '2px',
    marginLeft: 7,
    width: 50
  }
});

const JobApplied = ({ classes, job, setUserJobApplied }) => {
  return (
    <Grid className={classes.primaryContainer}>
      <Typography variant='subtitle2' className={classes.appliedTypo}>
        Applied?
      </Typography>
      <Tooltip title='Click to change status' placement='top'>
        <IconButton
          onClick={() =>
            setUserJobApplied(job._id, {
              ...job,
              applied: !job.applied,
              address: job.location.formattedAddress
            })
          }
          className={classes.appliedButton}
          aria-label='Applied value'
          style={
            !job.applied
              ? { color: '#ffb20a', border: '1px solid #ffb20a' }
              : {}
          }
        >
          {job.applied ? <CheckCircleOutline /> : <NotInterestedIcon />}
        </IconButton>
      </Tooltip>
    </Grid>
  );
};

export default withStyles(styles)(JobApplied);
