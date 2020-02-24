import React from 'react';
import Fab from '@material-ui/core/Fab';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { primaryLight } from '../../shared/colors';

const styles = createStyles({
  primaryContainer: {
    position: 'fixed',
    bottom: '30px',
    right: '30px'
  }
});

const AddBtn = ({ classes, open }) => {
  return (
    <Grid className={classes.primaryContainer}>
      <Fab onClick={open} style={{ background: primaryLight }}>
        <Add style={{ color: 'white' }} />
      </Fab>
    </Grid>
  );
};

export default withStyles(styles)(AddBtn);
