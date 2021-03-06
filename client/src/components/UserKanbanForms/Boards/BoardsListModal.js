import React from 'react';
import {
  withStyles,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
  Typography
} from '@material-ui/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BoardsListItem from './BoardsListItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = createStyles({
  emptyContainer: {
    width: 300,
    height: 200
  },
  dialogContent: {
    minHeight: 120,
    minWidth: 300
  }
});

const BoardsListModal = ({
  classes,
  open,
  setIsOpen,
  boards,
  currentCollection,
  boardsLoading,
  setIsOpenBoardFormModal
}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setIsOpen(false)}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Boards list</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          {currentCollection &&
          boards &&
          currentCollection.boards.length > 0 ? (
            <TransitionGroup className={classes.listContainer}>
              {currentCollection.boards.map(boardId => {
                const boardItem = boards.find(board => board._id === boardId);
                return (
                  <CSSTransition
                    timeout={400}
                    classNames='item'
                    key={boardItem._id}
                  >
                    <BoardsListItem
                      board={boardItem}
                      setIsOpenBoardFormModal={setIsOpenBoardFormModal}
                    />
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          ) : (
            <Grid>
              <Typography color='textSecondary' variant='h6'>
                List is empty
              </Typography>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            variant='contained'
            onClick={() => setIsOpen(false)}
            color='primary'
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

BoardsListModal.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  boards: state.kanban.boards,
  currentCollection: state.kanban.currentCollection,
  boardsLoading: state.kanban.boardsLoading
});

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(BoardsListModal));
