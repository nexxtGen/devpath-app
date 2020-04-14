import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import BoardsList from './BoardsList';

const styles = createStyles({
  primaryContainer: {
    marginRight: '50px'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    background:
      'linear-gradient(-135deg, rgba(101,74,141,1) 0%,rgba(88,62,125,1) 50%,rgba(67,39,98,1) 100%)',
    padding: 8,
    width: '400px',
    height: '47px',
    boxShadow: '0 3px 5px gray',
    marginBottom: 5
  },
  typo: {
    color: 'white',
    textTransform: 'uppercase'
  },
  listContainer: {
    overflow: 'auto'
  }
});

const BoardsListContainer = ({ classes, boards, loading }) => {
  return (
    <Grid className={classes.primaryContainer}>
      <Grid className={classes.header}>
        <Typography variant='subtitle2' className={classes.typo}>
          Boards
        </Typography>
      </Grid>
      <Grid className={classes.listContainer}>
        <BoardsList boards={boards} loading={loading} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(BoardsListContainer);
