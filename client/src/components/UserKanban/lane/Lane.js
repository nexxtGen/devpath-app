import React from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Note from '../note/Note';

const styles = createStyles({
  lane: {
    border: '1px solid black',
    width: 300,
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 10,
    margin: '0 10px'
  },
  notesContainer: {
    width: '100%',
    minHeight: 200,
    background: 'lightgray'
  }
});

const Lane = ({ classes, lane, laneNotes, index }) => {
  return (
    <Draggable draggableId={lane._id} index={index}>
      {provided => (
        <Grid
          className={classes.lane}
          {...provided.draggableProps}
          innerRef={provided.innerRef}
        >
          <p {...provided.dragHandleProps}>{lane.name}</p>
          <Droppable droppableId={lane._id} type='note'>
            {provided => (
              <Grid
                className={classes.notesContainer}
                innerRef={provided.innerRef}
                {...provided.droppableProps}
              >
                {laneNotes.map((note, index) => (
                  <Note key={note._id} note={note} index={index} />
                ))}
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>
        </Grid>
      )}
    </Draggable>
  );
};

export default withStyles(styles)(Lane);
