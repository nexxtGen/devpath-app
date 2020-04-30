import React from 'react';
import { withStyles, createStyles, MenuItem, Menu } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const styles = createStyles({});

const NoteMenu = ({ classes, note, anchorEl, handleCloseMenu }) => {
  return (
    <div>
      <Menu
        id='note-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <DeleteOutlineIcon />
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};

export default withStyles(styles)(NoteMenu);
