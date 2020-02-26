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
import PropTypes from 'prop-types';

const styles = createStyles({
  emptyContainer: {
    width: 300,
    height: 200
  }
});

const CategoriesListModal = ({ classes, open, handleClose, flashcards }) => {
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
            <Grid className={classes.emptyContainer}>
              <Typography variant='body1'>List is empty</Typography>
            </Grid>
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

CategoriesListModal.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  flashcards: PropTypes.object
};

const mapStateToProps = state => ({
  flashcards: state.flashcards
});

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(CategoriesListModal));
