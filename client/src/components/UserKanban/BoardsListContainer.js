import React, { useEffect } from 'react';
import {
  withStyles,
  createStyles,
  Grid,
  Typography,
  Button
} from '@material-ui/core';
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
    justifyContent: 'space-between',
    borderBottom: `1px solid ${primary}`,
    padding: 8,
    width: '100%',
    height: '47px',
    marginBottom: 5
  },
  typo: {
    color: 'gray'
  },
  listContainer: {
    overflow: 'auto'
  }
});

const BoardsListContainer = ({
  classes,
  boards,
  currentCollection,
  loading,
  setCurrentKanbanBoard,
  setIsOpenBoardFormModal,
  setIsOpenBoardsListModal
}) => {
  useEffect(() => {
    if (currentCollection && !loading && boards && boards.length > 0) {
      let collectionBoards = boards.filter(
        item => item.collectionId === currentCollection._id
      );
      setCurrentKanbanBoard(collectionBoards[0]);
    }
  }, [currentCollection, boards]);

  return (
    <Grid className={classes.primaryContainer}>
      <Grid className={classes.header}>
        <Typography
          variant='body1'
          color='textSecondary'
          className={classes.typo}
        >
          Boards
        </Typography>
        <Button
          onClick={() =>
            setIsOpenBoardFormModal({ open: true, mode: 'create' })
          }
          size='medium'
          variant='outlined'
        >
          Add
        </Button>
        <Button
          onClick={() => setIsOpenBoardsListModal(true)}
          size='medium'
          variant='outlined'
        >
          List
        </Button>
      </Grid>
      <Grid className={classes.listContainer}>
        <BoardsList
          currentCollection={currentCollection}
          boards={boards}
          loading={loading}
          setCurrentKanbanBoard={setCurrentKanbanBoard}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(BoardsListContainer);
