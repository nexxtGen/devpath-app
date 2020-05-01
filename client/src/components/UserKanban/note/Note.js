import React, { useState } from 'react';
import { withStyles, createStyles, Grid, Button } from '@material-ui/core';
import NoteMenu from './NoteMenu';
import SettingsIcon from '@material-ui/icons/Settings';
import { Draggable } from 'react-beautiful-dnd';

const styles = createStyles({
  noteContainer: {
    border: '1px solid lightgray',
    borderRadius: 2,
    margin: '5px 0',
    padding: 5,
    width: '100%',
    background: 'white',
    display: 'flex',
    direction: 'column'
  }
});

const Note = ({ classes, note, laneId, index, setIsOpenNoteFormModal }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <Draggable draggableId={note._id} index={index}>
      {provided => (
        <Grid
          className={classes.noteContainer}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
        >
          desc:{note.description}
          <br />
          img: {note.image || ''}
          <br />
          priority: {note.priority || ''}
          <br />
          steps: {note.steps || ''}
          <br />
          currentValue: {note.progress || ''}
          <Grid>
            <Button
              aria-controls='simple-menu'
              aria-haspopup='true'
              onClick={handleOpenMenu}
              color='primary'
            >
              <SettingsIcon />
            </Button>
            <NoteMenu
              anchorEl={anchorEl}
              handleCloseMenu={handleCloseMenu}
              note={note}
              laneId={laneId}
              setIsOpenNoteFormModal={setIsOpenNoteFormModal}
            />
          </Grid>
        </Grid>
      )}
    </Draggable>
  );
};

export default withStyles(styles)(Note);
