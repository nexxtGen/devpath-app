import React, { useEffect } from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import CompanySmallCard from './CompanySmallCard';
import { LocationOn } from '@material-ui/icons';
import { secondaryDark } from '../../../shared/colors';
import Rating from '@material-ui/lab/Rating';
import { connect } from 'react-redux';
import { setCurrentCompany } from '../../../actions/jobs';

const styles = createStyles({
  primaryContainer: {
    minWWid: '300px',
    minHeight: '290px',
    boxShadow: '1px 1px 5px gray',
    display: 'flex',
    direction: 'row',
    margin: '3px 4px',
    padding: 5,
    marginTop: 13
  },
  logo: {
    background: 'rgb(233, 233, 233)',
    width: '100px',
    height: '100px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    margin: 5,
    padding: 0
  },
  imgContainer: {
    width: '30%'
  },
  link: {
    color: '#1b75bc',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});

const CompanyInfo = ({
  classes,
  currentCompany,
  setCurrentCompany,
  companies,
  loading
}) => {
  useEffect(() => {
    if (!loading && companies.length > 0) {
      setCurrentCompany(companies[0]);
    }
  }, [companies]);

  return (
    <Grid className={classes.primaryContainer}>
      {currentCompany && (
        <Grid>
          <Grid>
            <Grid item xs={8}>
              <a
                href={currentCompany.website}
                target='blank'
                className={classes.link}
              >
                <Typography variant='h6'>{currentCompany.name}</Typography>
              </a>
            </Grid>
          </Grid>

          <Rating
            className={classes.iconFilled}
            name='read-only'
            value={currentCompany.rating}
            readOnly
            size='small'
          />
          <Grid className={classes.imgContainer}>
            <Grid
              className={classes.logo}
              style={{
                backgroundImage: `url('${currentCompany.logo}')`
              }}
            ></Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

const mapStateToProps = state => ({
  currentCompany: state.jobs.currentCompany,
  companies: state.jobs.companies,
  loading: state.jobs.loading
});
export default connect(mapStateToProps, { setCurrentCompany })(
  withStyles(styles)(CompanyInfo)
);
