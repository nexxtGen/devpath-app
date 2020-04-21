import React, { useEffect } from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import BoardsList from './BoardsList';
import { primary } from '../../shared/colors';

const styles = createStyles({
  primaryContainer: {
    width: '20%',
    minWidth: '250px',
    margin: '10px 20px'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${primary}`,
    padding: 8,
    width: '100%',
    height: '47px',
    //boxShadow: '0 3px 5px gray',
    marginBottom: 5
  },
  typo: {
    color: 'gray'
    //textTransform: 'uppercase'
  },
  listContainer: {
    overflow: 'auto'
  }
});

const BoardsListContainer = ({
  classes,
  boards,
  loading,
  setCurrentKanbanBoard
}) => {
  useEffect(() => {
    if (!loading && boards && boards.length > 0) {
      setCurrentKanbanBoard(boards[0]);
    }
  }, [boards]);

  return (
    <Grid className={classes.primaryContainer}>
      <Grid className={classes.header}>
        <Typography variant='h6' color='textSecondary' className={classes.typo}>
          Boards
        </Typography>
      </Grid>
      <Grid className={classes.listContainer}>
        <BoardsList
          boards={boards}
          loading={loading}
          setCurrentKanbanBoard={setCurrentKanbanBoard}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(BoardsListContainer);
