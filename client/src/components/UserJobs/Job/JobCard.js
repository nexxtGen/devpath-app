import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import CompanySmallCard from '../Company/CompanySmallCard';
import {
  LocationOn,
  HighlightOff,
  CheckCircleOutline,
  Edit,
  DeleteOutline
} from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import {
  primary,
  primaryLight,
  primaryExtraLight
} from '../../../shared/colors';

const styles = createStyles({
  primaryContainer: {
    position: 'relative',
    width: '450px',
    height: '255px',
    minWidth: '450px',
    minHeight: '255px',
    margin: 15,
    boxShadow: '1px 1px 10px gray'
  },
  container: {
    maxHeight: '215px',
    overflowY: 'scroll',
    padding: 15
  },
  link: {
    color: '#1b75bc',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  commentContainer: {
    padding: '6px 0'
  },
  locationContainer: {
    alignContent: 'center'
  },
  locationIcon: {
    fontSize: 18,
    color: 'gray'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: primaryLight,
    width: '100%',
    height: 45,
    position: 'absolute',
    bottom: 0,
    borderRadius: '0 0 3px 3px',
    padding: '0 20px'
  },
  appliedTypo: {
    color: 'white',
    marginLeft: 10,
    paddingLeft: 10,
    borderLeft: '1px solid white',
    fontWeight: 600
  },
  appliedButton: {
    color: 'lightgreen',
    border: '1px solid lightgreen',
    padding: '3px 5px',
    borderRadius: '2px',
    marginLeft: 7
  },
  icon: {
    color: 'white',
    padding: 4,
    fontSize: '30px',
    background: primary,
    borderRadius: '50%',

    '&:hover': {
      background: primaryExtraLight,
      transform: 'scale(1.1)',
      cursor: 'pointer'
    }
  }
});

const JobCard = ({ classes }) => {
  return (
    <Grid className={classes.primaryContainer}>
      <Grid className={classes.container}>
        <Grid container direction='row'>
          <Grid item xs={8}>
            <a
              href='https://www.pracuj.pl/praca/junior-web-developer-warszawa,oferta,7369926?sug=sg_bestmatch_bd_3_tname_654321_tgroup_A'
              target='blank'
              className={classes.link}
            >
              <Typography variant='h6'>Junior Front End Developer</Typography>
            </a>
          </Grid>
          <Grid item xs={4} container className={classes.locationContainer}>
            <Typography variant='body2' color='textSecondary'>
              Poznań
            </Typography>
            <LocationOn className={classes.locationIcon} />
          </Grid>
        </Grid>
        <Divider />
        <Grid>
          <Typography variant='subtitle2'>
            Required Tech:{' '}
            <span style={{ color: '#00a8cc' }}>
              Javascript, React, Redux, Git, Node.js, CSS, HTML, API, Ajax
            </span>
          </Typography>
        </Grid>

        <Divider />
        <Grid style={{ padding: '6px 0' }}>
          <Typography variant='subtitle2'>
            Pros:{' '}
            <span style={{ color: '#51B148' }}>
              Technologies, posibilites, company
            </span>
          </Typography>
          <Typography variant='subtitle2'>
            Cons:{' '}
            <span style={{ color: '#c53b50' }}>
              Brak pewnych rzeczy, wielkosć firmy
            </span>
          </Typography>
        </Grid>
        <Grid container direction='row'>
          <CompanySmallCard />
          <Grid
            style={{ borderLeft: '1px solid lightgray', paddingLeft: '10px' }}
          >
            <Typography>
              lvl: <span style={{ color: 'green' }}>Junior</span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.footer}>
        <Rating
          className={classes.iconFilled}
          name='read-only'
          value={5}
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
          <IconButton aria-label='add an alarm'>
            <Edit className={classes.icon} />
          </IconButton>
          <IconButton aria-label='add an alarm'>
            <DeleteOutline className={classes.icon} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(JobCard);

const logo =
  'https://mir-s3-cdn-cf.behance.net/user/276/26a23494436.5c0e23af9216d.png';
