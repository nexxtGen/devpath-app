import React from 'react';
import { withStyles, createStyles, MenuItem, Menu } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { connect } from 'react-redux';
import {
  setCurrentEditedKanbanNote,
  deleteUserKanbanNote
} from '../../../actions/kanban';

const styles = createStyles({});

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
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={() => handleClickDelete()}>
          <DeleteOutlineIcon />
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
