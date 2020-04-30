import React from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
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

const Note = ({ classes, note, index }) => {
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
        </Grid>
      )}
    </Draggable>
  );
};

export default withStyles(styles)(Note);
