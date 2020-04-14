import React from 'react';
import { Grid, withStyles, createStyles, Typography } from '@material-ui/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BoardsListItem from './BoardsListItem';

import PreloaderRelative from '../../../shared/PreloaderRelative';

const styles = createStyles({});

const BoardsList = ({ classes, boards, loading }) => {
  if ((!boards && !loading) || (boards && boards.length === 0 && !loading)) {
    return (
      <Grid className={classes.primaryContainer}>
        <Typography>Boards list is empty</Typography>
      </Grid>
    );
  }

  return (
    <Grid className={classes.primaryContainer}>
      {boards && boards.length > 0 ? (
        <TransitionGroup className={classes.listContainer}>
          {boards.map(board => (
            <CSSTransition timeout={400} classNames='item' key={board._id}>
              <BoardsListItem board={board} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <PreloaderRelative />
      )}
    </Grid>
  );
};

export default withStyles(styles)(BoardsList);
