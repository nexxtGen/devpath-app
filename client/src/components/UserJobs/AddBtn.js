import React from 'react';
import Fab from '@material-ui/core/Fab';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import { Add, Work, Language } from '@material-ui/icons';
import { primaryLight, primary } from '../../shared/colors';

const styles = createStyles({
  primaryContainer: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column-reverse',
    bottom: '30px',
    right: '30px'
  }
});

const AddBtn = ({ classes, openJobModal }) => {
  return (
    <Grid className={classes.primaryContainer}>
      <Fab
        onClick={() => openJobModal({ open: true, mode: 'create' })}
        style={{ background: primary, marginTop: 15 }}
      >
        <Add style={{ color: 'white', marginBottom: 15, fontSize: 19 }} />
        <Work style={{ color: 'white', marginTop: 7 }} />
      </Fab>
      <Fab style={{ background: primaryLight, marginTop: 15 }}>
        <Add style={{ color: 'white', marginBottom: 15, fontSize: 19 }} />
        <Language style={{ color: 'white', marginTop: 7, fontSize: 28 }} />
      </Fab>
    </Grid>
  );
};

export default withStyles(styles)(AddBtn);
