import React, { useState, useEffect } from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import Board from './board/Board';
import BoardsListContainer from './BoardsListContainer';
import Alert from '../layout/Alert';
import { getAllUserKanbanBoards } from '../../actions/kanban';
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
  boardsLoading,
  getAllUserKanbanBoards
}) => {
  useEffect(() => {
    getAllUserKanbanBoards();
  }, []);

  return (
    <Grid className={classes.primaryContainer}>
      <Alert />
      <BoardsListContainer boards={boards} loading={boardsLoading} />
      <Board />
    </Grid>
  );
};

const mapStateToProps = state => ({
  boards: state.kanban.boards,
  boardsLoading: state.kanban.boardsLoading
});

export default connect(mapStateToProps, { getAllUserKanbanBoards })(
  withStyles(styles)(UserKanbanContainer)
);
