import React, { useState, useEffect } from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import Lane from '../lane/Lane';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import initialData from '../initialData';

const styles = createStyles({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  lanes: {
    display: 'flex',
    direction: 'row'
  }
});

const Board = ({ classes }) => {
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
      const newLaneOrder = data.lanes;
      const movedLane = data.lanes.find(lane => lane._id === draggableId);
      newLaneOrder.splice(source.index, 1);
      newLaneOrder.splice(destination.index, 0, movedLane); //

      const newData = {
        ...data,
        lanes: newLaneOrder
      };

      setData(newData);
      return;
    }

    const start = data.lanes.find(lane => lane._id === source.droppableId);
    const finish = data.lanes.find(
      lane => lane._id === destination.droppableId
    );

    if (start === finish) {
      const newNoteIds = Array.from(start.notes);

      newNoteIds.splice(source.index, 1);
      newNoteIds.splice(destination.index, 0, draggableId);

      const newLane = {
        ...start,
        notes: newNoteIds
      };

      const newData = {
        ...data,
        lanes: [
          ...data.lanes.map(lane => (lane._id === newLane._id ? newLane : lane))
        ]
      };

      setData(newData);
      return;
    }

    // Moving from one list to another
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

    const newData = {
      ...data,
      lanes: data.lanes.map(lane => {
        if (lane._id === newStart._id) {
          return {
            ...lane,
            notes: newStart.notes
          };
        } else if (lane._id === newFinish._id) {
          return {
            ...lane,
            notes: newFinish.notes
          };
        }
        return lane;
      })
    };

    setData(newData);
    return;
  };

  return (
    <Grid className={classes.primaryContainer}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='all-columns' direction='horizontal' type='lane'>
          {provided => (
            <Grid
              {...provided.droppableProps}
              innerRef={provided.innerRef}
              className={classes.lanes}
            >
              {data.lanes.length > 0 &&
                data.lanes.map((lane, index) => {
                  let notes = lane.notes.map(noteId =>
                    data.notes.find(e => e._id === noteId)
                  );
                  return (
                    <Lane
                      key={lane._id}
                      lane={lane}
                      notes={notes}
                      index={index}
                    />
                  );
                })}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </DragDropContext>
    </Grid>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(withStyles(styles)(Board));
