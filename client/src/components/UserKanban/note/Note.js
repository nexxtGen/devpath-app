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
    background: 'white'
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
          {note.name}
        </Grid>
      )}
    </Draggable>
  );
};

export default withStyles(styles)(Note);
