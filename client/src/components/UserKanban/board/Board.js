import React, { useState, useEffect } from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import Lane from '../lane/Lane';
import { connect } from 'react-redux';
import initialData from '../initialData';

const styles = createStyles({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  lane: {
    border: '1px solid black',
    width: 300,
    height: 500
  }
});

const Board = ({ classes }) => {
  const [data, setData] = useState(initialData);

  return (
    <Grid className={classes.primaryContainer}>
      {data.lanes.map(lane => {
        let notes = lane.notes.map(noteId => {
          data.notes.filter(note => note._id === noteId);
        });
        return (
          <Lane
            key={lane._id}
            className={classes.lane}
            lane={lane}
            notes={notes}
          />
        );
      })}
    </Grid>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(withStyles(styles)(Board));
