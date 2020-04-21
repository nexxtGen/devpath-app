import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import { primary } from '../../../shared/colors';

const styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${primary}`,
    padding: 8,
    width: '100%',
    height: '47px',
    //boxShadow: '0 3px 5px gray',
    marginBottom: 5
  }
});

const BoardInformation = ({ classes, currentBoard }) => {
  return (
    <Grid className={classes.container}>
      <Grid className={classes.header}>
        <Typography variant='h6' color='textSecondary'>
          Current board:{' '}
          <span style={{ color: 'black' }}>
            {currentBoard ? currentBoard.name : ''}
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(BoardInformation);
