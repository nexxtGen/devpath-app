import React from 'react';
import { Grid, withStyles, createStyles, Typography } from '@material-ui/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BoardsListItem from './BoardsListItem';
import PreloaderRelative from '../../shared/PreloaderRelative';

const styles = createStyles({});

const BoardsList = ({ classes, boards, loading, currentCollection }) => {
  if ((!boards && !loading) || (boards && boards.length === 0 && !loading)) {
    return (
      <Grid className={classes.primaryContainer}>
        <Typography>Boards list is empty</Typography>
      </Grid>
    );
  }

  return (
    <Grid className={classes.primaryContainer}>
      {currentCollection && boards && boards.length > 0 ? (
        <TransitionGroup className={classes.listContainer}>
          {currentCollection.boards.map(boardId => {
            const boardItem = boards.find(board => board._id === boardId);
            return (
              <CSSTransition
                timeout={400}
                classNames='item'
                key={boardItem._id}
              >
                <BoardsListItem board={boardItem} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      ) : (
        <PreloaderRelative />
      )}
    </Grid>
  );
};

export default withStyles(styles)(BoardsList);
