import React from 'react';
import {
  withStyles,
  createStyles,
  Grid,
  Button,
  Typography
} from '@material-ui/core';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import EditLane from '../../UserKanbanForms/Lanes/EditLane';
import Note from '../note/Note';

const styles = createStyles({
  lane: {
    border: '1px solid black',
    width: 325,
    minHeight: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 10,
    margin: '0 10px 15px 10px'
  },
  laneName: {
    width: '100%',
    minHeight: 40
  },
  notesContainer: {
    width: '100%',
    minHeight: 200,
    background: 'lightgray'
  }
});

const Lane = ({
  classes,
  lane,
  laneNotes,
  index,
  setIsOpenNoteFormModal,
  editUserKanbanLane,
  updateUserKanbanLane,
  deleteUserKanbanLane,
  currentBoard,
  setCurrentKanbanLane
}) => {
  const handleOpenNoteForm = () => {
    setCurrentKanbanLane(lane);
    setIsOpenNoteFormModal({ open: true, mode: 'create' });
  };

  return (
    <Draggable draggableId={lane._id} index={index}>
      {provided => (
        <Grid
          className={classes.lane}
          {...provided.draggableProps}
          innerRef={provided.innerRef}
        >
          <Grid className={classes.laneName}>
            <EditLane
              editing={lane.editing}
              value={lane.name}
              onValueClick={() => editUserKanbanLane(lane._id)}
              onUpdate={name =>
                updateUserKanbanLane(lane._id, {
                  ...lane,
                  name,
                  editing: false
                })
              }
              onDelete={() => deleteUserKanbanLane(lane._id, currentBoard._id)}
            />
          </Grid>
          <p {...provided.dragHandleProps}>DRAGME</p>
          <Droppable droppableId={lane._id} type='note'>
            {provided => (
              <Grid
                className={classes.notesContainer}
                innerRef={provided.innerRef}
                {...provided.droppableProps}
              >
                {laneNotes.map((noteItem, index) =>
                  noteItem ? (
                    <Note
                      key={noteItem._id}
                      note={noteItem}
                      index={index}
                      setIsOpenNoteFormModal={setIsOpenNoteFormModal}
                    />
                  ) : (
                    <Typography key={index}>
                      Note is Undefined. Data error.
                    </Typography>
                  )
                )}
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>
          <Button onClick={() => handleOpenNoteForm()}>Add Note</Button>
        </Grid>
      )}
    </Draggable>
  );
};

export default withStyles(styles)(Lane);
