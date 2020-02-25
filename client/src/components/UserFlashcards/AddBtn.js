import React from 'react';
import Fab from '@material-ui/core/Fab';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import { Add, Subtitles, PhotoLibrary } from '@material-ui/icons';
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

const AddBtn = ({ classes, openFlashcardModal, openAddCategoryModal }) => {
  return (
    <Grid className={classes.primaryContainer}>
      <Fab
        onClick={() => openFlashcardModal('create')}
        style={{ background: primary, marginTop: 15 }}
      >
        <Add style={{ color: 'white', marginBottom: 15, fontSize: 19 }} />
        <Subtitles style={{ color: 'white', marginTop: 7 }} />
      </Fab>
      <Fab
        onClick={() => openAddCategoryModal()}
        style={{ background: primaryLight }}
      >
        <Add style={{ color: 'white', marginBottom: 15, fontSize: 19 }} />
        <PhotoLibrary style={{ color: 'white', marginTop: 7 }} />
      </Fab>
    </Grid>
  );
};

export default withStyles(styles)(AddBtn);
