import React, { useState, useEffect } from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import KanbanSliderContainer from './collectionsSlider/KanbanSliderContainer';
import Board from './board/Board';
import BoardsListContainer from './BoardsListContainer';
import Alert from '../layout/Alert';
import {
  getAllUserKanbanCollections,
  getAllUserKanbanBoards,
  getAllUserKanbanLanes,
  getAllUserKanbanNotes,
  setCurrentKanbanCollection,
  setCurrentKanbanBoard
} from '../../actions/kanban';
import { connect } from 'react-redux';

const styles = createStyles({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  boardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left'
  }
});

const UserKanbanContainer = ({
  classes,
  collections,
  boards,
  lanes,
  notes,
  currentCollection,
  currentBoard,
  collectionsLoading,
  boardsLoading,
  lanesLoading,
  notesLoading,
  getAllUserKanbanCollections,
  getAllUserKanbanBoards,
  getAllUserKanbanLanes,
  getAllUserKanbanNotes,
  setCurrentKanbanCollection,
  setCurrentKanbanBoard
}) => {
  useEffect(() => {
    getAllUserKanbanCollections();
    getAllUserKanbanBoards();
    getAllUserKanbanLanes();
    getAllUserKanbanNotes();
  }, []);

  return (
    <Grid className={classes.primaryContainer}>
      <Alert />
      <KanbanSliderContainer collections={collections} />
      <Grid className={classes.boardsContainer}>
        <BoardsListContainer
          boards={boards}
          loading={boardsLoading}
          setCurrentKanbanBoard={setCurrentKanbanBoard}
        />
        <Board
          lanesLoading={lanesLoading}
          notesLoading={notesLoading}
          currentBoard={currentBoard}
          lanes={lanes}
          notes={notes}
        />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  collections: state.kanban.collections,
  boards: state.kanban.boards,
  lanes: state.kanban.lanes,
  notes: state.kanban.notes,
  currentCollection: state.kanban.currentCollection,
  currentBoard: state.kanban.currentBoard,
  collectionsLoading: state.kanban.collectionsLoading,
  boardsLoading: state.kanban.boardsLoading,
  lanesLoading: state.kanban.lanesLoading,
  notesLoading: state.kanban.notesLoading
});

export default connect(mapStateToProps, {
  getAllUserKanbanCollections,
  getAllUserKanbanBoards,
  getAllUserKanbanLanes,
  getAllUserKanbanNotes,
  setCurrentKanbanCollection,
  setCurrentKanbanBoard
})(withStyles(styles)(UserKanbanContainer));
