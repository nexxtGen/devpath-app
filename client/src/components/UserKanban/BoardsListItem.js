import React from 'react';
import { Grid, withStyles, createStyles, Typography } from '@material-ui/core';
import { primaryLight, primaryDark } from '../../shared/colors';
import { connect } from 'react-redux';
import { setCurrentKanbanBoard } from '../../actions/kanban';

const styles = createStyles({
  primaryContainer: {
    margin: 5,
    position: 'relative',
    display: 'flex',
    direction: 'row',
    alignItems: 'center',
    borderTop: '1px solid lightgray',
    transition: 'border 0.3s',
    '&:hover': {
      cursor: 'pointer',
      borderTop: `1px solid ${primaryLight}`
    },
    '&:active': {
      borderTop: `1px solid ${primaryDark}`
    }
  },
  image: {
    width: '100px',
    height: '37px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    marginRight: 10,
    clipPath: 'polygon(0 0, 100% 0, 84% 100%, 0% 100%)'
  },
  count: {
    position: 'absolute',
    display: ' flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    width: 60,
    height: 37,
    clipPath: 'polygon(26% 0%, 100% 0, 74% 100%, 0% 100%)',
    background: '#ffb20a',
    paddingLeft: 5
  }
});

const BoardsListItem = ({ classes, board, setCurrentKanbanBoard }) => {
  return (
    <Grid
      className={classes.primaryContainer}
      onClick={() => setCurrentKanbanBoard(board)}
    >
      <Grid
        className={classes.image}
        style={{
          backgroundImage: `url('${board.image}')`
        }}
      ></Grid>

      <Typography variant='subtitle2'>{board.name}</Typography>
    </Grid>
  );
};

export default connect(null, { setCurrentKanbanBoard })(
  withStyles(styles)(BoardsListItem)
);
