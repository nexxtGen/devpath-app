import React from 'react';
import { Grid, withStyles, createStyles } from '@material-ui/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PreloaderRelative from '../../../shared/PreloaderRelative';
import CompanyListItem from './CompanyListItem';
import EmptyList from '../../../shared/EmptyList';

const styles = createStyles({
  primaryContainer: {
    marginBottom: 25,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  listContainer: {
    margin: '2px',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 5px 5px 5px',
    maxHeight: '300px'
  },
  preloader: {
    marginTop: 90
  }
});

const CompaniesList = ({ classes, companies, loading }) => {
  if (!loading && companies.length === 0) {
    return <EmptyList />;
  }

  return (
    <Grid className={classes.primaryContainer}>
      {!loading && companies.length > 0 ? (
        <TransitionGroup className={classes.listContainer}>
          {companies.map((company, index) => (
            <CSSTransition timeout={400} classNames='item' key={index}>
              <CompanyListItem company={company} />
            </CSSTransition>
          ))}{' '}
        </TransitionGroup>
      ) : (
        <Grid className={classes.preloader}>
          <PreloaderRelative />
        </Grid>
      )}
    </Grid>
  );
};

export default connect(null, {})(withStyles(styles)(CompaniesList));
