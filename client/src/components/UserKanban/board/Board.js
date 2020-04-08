import React, { useState, useEffect } from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import { connect } from 'react-redux';

const styles = createStyles({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});

const Board = ({ classes }) => {
  return <Grid className={classes.primaryContainer}>Board</Grid>;
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(withStyles(styles)(Board));
