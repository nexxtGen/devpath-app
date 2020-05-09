import React, { useEffect } from 'react';
import {
  withStyles,
  createStyles,
  Grid,
  Typography,
  Divider,
  IconButton
} from '@material-ui/core';
import { LocationOn, Edit, DeleteOutline } from '@material-ui/icons';
import { primaryLight } from '../../../shared/colors';
import Rating from '@material-ui/lab/Rating';
import { connect } from 'react-redux';
import { setCurrentCompany, deleteUserCompany } from '../../../actions/jobs';

const styles = createStyles({
  primaryContainer: {
    padding: '0 5px',
    position: 'relative'
  },
  contentContainer: {
    width: '410px',
    minHeight: '290px',
    maxHeight: '300px',
    boxShadow: '1px 1px 5px gray',
    display: 'flex',
    direction: 'column',
    margin: '3px 4px',
    padding: 15,
    marginTop: 13
  },
  container: {
    width: '100%',
    position: 'relative'
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  logo: {
    background: 'rgb(233, 233, 233)',
    width: '80px',
    height: '80px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    margin: 5,
    padding: 0
  },
  locationIcon: {
    color: 'gray'
  },
  link: {
    color: '#1b75bc',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  description: {
    overflow: 'auto',
    maxHeight: 132,
    margin: '5px 0',
    paddingRight: 5
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '98%',
    paddingTop: 5,
    paddingBottom: 4
  },
  iconBtn: { padding: 6 },
  icon: {
    color: primaryLight
  }
});

const CompanyInfo = ({
  classes,
  currentCompany,
  setCurrentCompany,
  deleteUserCompany,
  companies,
  loading,
  setIsOpenCompanyFormModal
}) => {
  useEffect(() => {
    if (!loading && companies.length > 0) {
      setCurrentCompany(companies[0]);
    }
    //eslint-disable-next-line
  }, [companies]);

  return (
    <Grid className={classes.primaryContainer}>
      <Grid className={classes.contentContainer}>
        {currentCompany && (
          <Grid className={classes.container}>
            <Grid className={classes.headerContainer}>
              <Grid item xs={8}>
                <a
                  href={currentCompany.website}
                  target='blank'
                  className={classes.link}
                >
                  <Typography variant='h6'>{currentCompany.name}</Typography>
                </a>

                <Rating
                  className={classes.iconFilled}
                  name='read-only'
                  value={currentCompany.rating}
                  readOnly
                  size='small'
                />
                <Grid container direction='row'>
                  <Typography color='textSecondary'>
                    {currentCompany.location.country},{' '}
                    {currentCompany.location.city}
                  </Typography>
                  <LocationOn className={classes.locationIcon} />
                </Grid>
              </Grid>
              <Grid container justify='flex-end' item xs={4}>
                <Grid
                  className={classes.logo}
                  style={{
                    backgroundImage: `url('${currentCompany.logo}')`
                  }}
                ></Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid container direction='row'>
              <Grid item xs={9} className={classes.description}>
                <Typography variant='body2'>
                  {currentCompany.description}
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                container
                justify='center'
                alignContent='flex-start'
              >
                <Typography
                  variant='subtitle2'
                  color='textSecondary'
                  style={{ marginTop: 8 }}
                >
                  CompanySize:
                </Typography>
                <Typography color='textSecondary'>
                  {currentCompany.size}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid className={classes.footerContainer}>
        <Grid style={{ padding: '0 8px' }}>
          <Divider />
        </Grid>
        <Grid container justify='flex-end' style={{ paddingRight: 15 }}>
          <IconButton
            onClick={() =>
              setIsOpenCompanyFormModal({ open: true, mode: 'edit' })
            }
            aria-label='edit'
            className={classes.iconBtn}
          >
            <Edit className={classes.icon} />
          </IconButton>
          <IconButton
            onClick={() => deleteUserCompany(currentCompany._id)}
            aria-label='delete'
            className={classes.iconBtn}
          >
            <DeleteOutline className={classes.icon} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  currentCompany: state.jobs.currentCompany,
  companies: state.jobs.companies,
  loading: state.jobs.loading
});
export default connect(mapStateToProps, {
  setCurrentCompany,
  deleteUserCompany
})(withStyles(styles)(CompanyInfo));
