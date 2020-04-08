import React, { useState, useEffect } from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import Board from './board/Board';
import Alert from '../layout/Alert';
import { connect } from 'react-redux';

const styles = createStyles({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});

const UserKanbanContainer = ({ classes }) => {
  return (
    <Grid className={classes.primaryContainer}>
      <Alert />
      <Board />
    </Grid>
  );
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(UserKanbanContainer));
