import React from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';

const styles = createStyles({
  priorityBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 24,
    borderRadius: 3,
    background: 'lightgray',
    margin: 10
  }
});

const PriorityBox = ({ classes, priority }) => {
  return (
    <Grid
      className={classes.priorityBox}
      style={
        priority === 'low'
          ? { background: '#BFE8C1', color: '#47a84d' }
          : priority === 'medium'
          ? { background: '#FBE799', color: '#b8922c' }
          : { background: '#F8AFAF', color: '#DA4A4A' }
      }
    >
      <span style={{ fontWeight: 600 }}>
        {priority === 'low' ? 'Low' : priority === 'medium' ? 'Medium' : 'High'}
      </span>
    </Grid>
  );
};

export default withStyles(styles)(PriorityBox);
