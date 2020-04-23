import React from 'react';
import {
  Grid,
  withStyles,
  createStyles,
  Typography,
  Button
} from '@material-ui/core';
import { primaryLight } from '../../../shared/colors';
import { Delete, Edit } from '@material-ui/icons';
import { connect } from 'react-redux';
import {
  deleteUserKanbanCollection,
  setCurrentEditedKanbanCollection
} from '../../../actions/kanban';
import PropTypes from 'prop-types';

const styles = createStyles({
  container: {
    display: 'flex',
    direction: 'row',
    width: '100%',
    minWidth: 450,
    borderTop: '1px solid lightgray',
    padding: 5
  },
  typoContainer: {
    width: '50%'
  },
  imgContainer: {
    width: '25%'
  },
  icons: {
    display: 'flex',
    direction: 'row'
  },
  icon: {
    color: '#f50057'
  },
  iconEdit: {
    color: primaryLight
  },
  romb: {
    background: 'rgb(233, 233, 233)',
    width: '100px',
    height: '37px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)'
  },
  button: {
    width: 20
  }
});

const CollectionsListItem = ({
  classes,
  collection,
  deleteUserKanbanCollection,
  setCurrentEditedKanbanCollection,
  setIsOpenCollectionModal
}) => {
  const handleEdit = collection => {
    setCurrentEditedKanbanCollection(collection);
    setIsOpenCollectionModal({ open: true, mode: 'edit' });
  };

  const { image, name, _id } = collection;
  return (
    <Grid className={classes.container}>
      <Grid className={classes.typoContainer}>
        <Typography>{name}</Typography>
      </Grid>
      <Grid className={classes.imgContainer}>
        <Grid
          className={classes.romb}
          style={{
            backgroundImage: `url('${image}')`
          }}
        ></Grid>
      </Grid>
      <Grid className={classes.icons}>
        <Button
          onClick={() => handleEdit(collection)}
          className={classes.button}
        >
          <Edit className={classes.iconEdit} />
        </Button>
        <Button
          onClick={() => deleteUserKanbanCollection(_id)}
          className={classes.button}
        >
          <Delete className={classes.icon} />
        </Button>
      </Grid>
    </Grid>
  );
};

CollectionsListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  collection: PropTypes.object
};

export default connect(null, {
  deleteUserKanbanCollection,
  setCurrentEditedKanbanCollection
})(withStyles(styles)(CollectionsListItem));
