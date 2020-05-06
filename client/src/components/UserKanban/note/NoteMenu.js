import React from 'react';
import { withStyles, createStyles, MenuItem, Menu } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { connect } from 'react-redux';
import {
  setCurrentEditedKanbanNote,
  deleteUserKanbanNote
} from '../../../actions/kanban';
import { primary } from '../../../shared/colors';

const styles = createStyles({
  icon: {
    color: primary,
    marginRight: 10
  }
});

const NoteMenu = ({
  classes,
  note,
  laneId,
  anchorEl,
  handleCloseMenu,
  setCurrentEditedKanbanNote,
  setIsOpenNoteFormModal,
  deleteUserKanbanNote
}) => {
  const handleClickEdit = () => {
    setCurrentEditedKanbanNote(note);
    handleCloseMenu();
    setIsOpenNoteFormModal({ open: true, mode: 'edit' });
  };

  const handleClickDelete = () => {
    deleteUserKanbanNote(note._id, laneId);
    handleCloseMenu();
  };

  return (
    <div>
      <Menu
        id='note-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => handleClickEdit()}>
          <EditIcon className={classes.icon} />
          Edit
        </MenuItem>
        <MenuItem onClick={() => handleClickDelete()}>
          <DeleteOutlineIcon className={classes.icon} />
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};

export default connect(null, {
  setCurrentEditedKanbanNote,
  deleteUserKanbanNote
})(withStyles(styles)(NoteMenu));
