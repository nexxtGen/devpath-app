import React from 'react';
import { Grid, withStyles, createStyles } from '@material-ui/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PreloaderRelative from '../../../shared/PreloaderRelative';
import CompanyListItem from './CompanyListItem';

const styles = createStyles({
  listContainer: {
    margin: '2px',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 5px 5px 5px',
    maxHeight: '300px'
  }
});

const CompaniesList = ({ classes, companies, loading }) => {
  if (!loading && companies.length === 0) {
    return <h4>List is empty</h4>;
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
        <PreloaderRelative />
      )}
    </Grid>
  );
};

export default connect(null, {})(withStyles(styles)(CompaniesList));
