import React, { useState, useEffect } from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import Board from './board/Board';
import BoardsListContainer from './BoardsListContainer';
import Alert from '../layout/Alert';
import {
  getAllUserKanbanBoards,
  getAllUserKanbanLanes,
  getAllUserKanbanNotes,
  setCurrentKanbanBoard
} from '../../actions/kanban';
import { connect } from 'react-redux';

const styles = createStyles({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});

const UserKanbanContainer = ({
  classes,
  boards,
  lanes,
  notes,
  currentBoard,
  boardsLoading,
  lanesLoading,
  notesLoading,
  getAllUserKanbanBoards,
  getAllUserKanbanLanes,
  getAllUserKanbanNotes,
  setCurrentKanbanBoard
}) => {
  useEffect(() => {
    getAllUserKanbanBoards();
    getAllUserKanbanLanes();
    getAllUserKanbanNotes();
  }, []);

  return (
    <Grid className={classes.primaryContainer}>
      <Alert />
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
  );
};

const mapStateToProps = state => ({
  boards: state.kanban.boards,
  lanes: state.kanban.lanes,
  notes: state.kanban.notes,
  currentBoard: state.kanban.currentBoard,
  boardsLoading: state.kanban.boardsLoading,
  lanesLoading: state.kanban.lanesLoading,
  notesLoading: state.kanban.notesLoading
});

export default connect(mapStateToProps, {
  getAllUserKanbanBoards,
  getAllUserKanbanLanes,
  getAllUserKanbanNotes,
  setCurrentKanbanBoard
})(withStyles(styles)(UserKanbanContainer));
