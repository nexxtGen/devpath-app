import React from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';

const styles = createStyles({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});

const Board = ({ classes, lane, notes }) => {
  return <Grid className={classes.primaryContainer}>{lane.name}</Grid>;
};

const mapStateToProps = state => ({});

export default withStyles(styles)(Board);
