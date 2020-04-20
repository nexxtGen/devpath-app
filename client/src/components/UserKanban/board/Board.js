import React, { useState } from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import Lane from '../lane/Lane';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { moveNoteInLane, moveNoteBetweenLanes } from '../../../actions/kanban';
import { connect } from 'react-redux';
import initialData from '../initialData';

const styles = createStyles({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%'
  },
  lanes: {
    display: 'flex',
    direction: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
});

const Board = ({
  classes,
  currentBoard,
  lanes,
  notes,
  moveNoteInLane,
  moveNoteBetweenLanes
}) => {
  const [data, setData] = useState(initialData);

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'lane') {
      const newLaneOrder = currentBoard.lanes;
      const movedLane = currentBoard.lanes.find(
        laneId => laneId === draggableId
      );
      newLaneOrder.splice(source.index, 1);
      newLaneOrder.splice(destination.index, 0, movedLane); //

      setData(newLaneOrder, currentBoard._id);
      return;
    }

    // Move note in Lane
    const start = lanes.find(lane => lane._id === source.droppableId);
    const finish = lanes.find(lane => lane._id === destination.droppableId);

    if (start === finish) {
      const newNoteIds = Array.from(start.notes);

      newNoteIds.splice(source.index, 1);
      newNoteIds.splice(destination.index, 0, draggableId);

      const newLane = {
        ...start,
        notes: newNoteIds
      };

      moveNoteInLane(newLane);
      return;
    }

    // Moving Note from one Lane to another
    const startNoteIds = Array.from(start.notes);
    startNoteIds.splice(source.index, 1);

    const newStart = {
      ...start,
      notes: startNoteIds
    };

    const finishNoteIds = Array.from(finish.notes);
    finishNoteIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      notes: finishNoteIds
    };

    moveNoteBetweenLanes(newStart, newFinish);
    return;
  };

  return (
    <Grid className={classes.primaryContainer}>
      <Grid>
        <Typography variant='h5' color='textSecondary'>
          Kanban board
        </Typography>
      </Grid>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='all-columns' direction='horizontal' type='lane'>
          {provided => (
            <Grid
              {...provided.droppableProps}
              innerRef={provided.innerRef}
              className={classes.lanes}
            >
              {currentBoard &&
              lanes &&
              notes &&
              currentBoard.lanes.length > 0 ? (
                currentBoard.lanes.map((laneId, index) => {
                  let lane = lanes.find(lane => lane._id === laneId);
                  let laneNotes = lane.notes.map(noteId =>
                    notes.find(e => e._id === noteId)
                  );

                  return (
                    <Lane
                      key={lane._id}
                      lane={lane}
                      laneNotes={laneNotes}
                      index={index}
                    />
                  );
                })
              ) : (
                <Typography variant='subtitle2' color='textSecondary'>
                  List is empty
                </Typography>
              )}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </DragDropContext>
    </Grid>
  );
};

export default connect(null, { moveNoteInLane, moveNoteBetweenLanes })(
  withStyles(styles)(Board)
);
