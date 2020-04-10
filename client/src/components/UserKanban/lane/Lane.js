import React from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import { Droppable } from 'react-beautiful-dnd';
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
    padding: 10
  },
  notesContainer: {
    width: '100%'
  }
});

const Lane = ({ classes, lane, notes }) => {
  console.log('notes in lane:', notes);
  return (
    <Grid className={classes.lane}>
      <p>{lane.name}</p>
      <Droppable droppableId={lane._id}>
        {provided => (
          <Grid
            className={classes.notesContainer}
            innerRef={provided.innerRef}
            {...provided.droppableProps}
          >
            {notes.map((note, index) => (
              <Note key={note._id} note={note} index={index} />
            ))}
            {provided.placeholder}
          </Grid>
        )}
      </Droppable>
    </Grid>
  );
};

export default withStyles(styles)(Lane);
