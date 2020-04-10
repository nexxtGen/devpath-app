import React, { useState, useEffect } from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import Lane from '../lane/Lane';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import initialData from '../initialData';

const styles = createStyles({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});

const Board = ({ classes }) => {
  const [data, setData] = useState(initialData);

  const onDragEnd = result => {
    // TODO
  };

  return (
    <Grid className={classes.primaryContainer}>
      <DragDropContext onDragEnd={onDragEnd}>
        {data.lanes.map(lane => {
          let notes = lane.notes.map(noteId =>
            data.notes.find(e => e._id === noteId)
          );
          console.log('test:', notes);
          return <Lane key={lane._id} lane={lane} notes={notes} />;
        })}
      </DragDropContext>
    </Grid>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(withStyles(styles)(Board));
