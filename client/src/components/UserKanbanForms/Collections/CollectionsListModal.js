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
import CollectionsListItem from './CollectionsListItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = createStyles({
  emptyContainer: {
    width: 300,
    height: 200
  }
});

const CollectionsListModal = ({
  classes,
  open,
  setIsOpen,
  collections,
  collectionsLoading,
  setIsOpenCollectionModal
}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setIsOpen(false)}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          Kanban Collections List
        </DialogTitle>
        <DialogContent>
          {!collectionsLoading && collections ? (
            collections.map((collection, index) => {
              return (
                <CollectionsListItem
                  key={index}
                  collection={collection}
                  setIsOpenCollectionModal={setIsOpenCollectionModal}
                />
              );
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

CollectionsListModal.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  collections: state.kanban.collections,
  collectionsLoading: state.kanban.collectionsLoading
});

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(CollectionsListModal));
