import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import { primary } from '../../../shared/colors';
import BasicButton from '../../../shared/BasicButton';

const styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom: `1px solid ${primary}`,
    justifyContent: 'space-between',
    padding: 8,
    width: '100%',
    height: '47px',
    marginBottom: 5
  },
  button: {
    width: 100
  }
});

const BoardInformation = ({ classes, currentBoard, notes }) => {
  return (
    <Grid className={classes.container}>
      <Grid className={classes.header}>
        <Typography variant='body1' color='textSecondary'>
          Current board:{' '}
          <span style={{ color: 'black' }}>
            {currentBoard ? currentBoard.name : ''}
          </span>
        </Typography>
        <Typography variant='body1' color='textSecondary'>
          Columns:{' '}
          <span style={{ color: 'black' }}>
            {currentBoard ? currentBoard.lanes.length : ''}
          </span>
        </Typography>
        <Typography variant='body1' color='textSecondary'>
          Notes:{' '}
          <span style={{ color: 'black' }}>
            {currentBoard && notes
              ? notes.filter(note => note.boardId === currentBoard._id).length
              : ''}
          </span>
        </Typography>
        <BasicButton size='medium'>Add column</BasicButton>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(BoardInformation);
