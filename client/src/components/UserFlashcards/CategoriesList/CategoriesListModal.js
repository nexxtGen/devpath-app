import React from 'react';
import Button from '@material-ui/core/Button';
import {
  withStyles,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Grid
} from '@material-ui/core';
import CategoriesListItem from './CategoriesListItem';
import { connect } from 'react-redux';

const styles = createStyles({});

const CategoriesListModal = ({ classes, open, handleClose, flashcards }) => {
  const handleDelete = categoryId => {};
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Categories List</DialogTitle>
        <DialogContent>
          {!flashcards.loading && flashcards.categories ? (
            flashcards.categories.categories.map((category, index) => {
              return <CategoriesListItem key={index} category={category} />;
            })
          ) : (
            <Typography>List is empty</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            variant='contained'
            onClick={() => handleClose(false)}
            color='primary'
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
const mapStateToProps = state => ({
  flashcards: state.flashcards
});

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(CategoriesListModal));
