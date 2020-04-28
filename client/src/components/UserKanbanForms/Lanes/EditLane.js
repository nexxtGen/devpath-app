import React from 'react';
import { withStyles, createStyles, Grid, TextField } from '@material-ui/core';
import { primary } from '../../../shared/colors';
const styles = createStyles({
  container: {},
  delete: {},
  muiTextField: {
    backgroundColor: 'white',
    paddingBottom: 5
  },
  underline: {
    '&::after': {
      border: `1px solid ${primary}`
    }
  }
});

const EditLane = ({
  classes,
  value,
  onDelete,
  onUpdate,
  onValueClick,
  editing
}) => {
  const checkEnter = e => {
    if (e.key === 'Enter') {
      finishEdit(e);
    }
  };

  const finishEdit = e => {
    const value = e.target.value;

    if (onUpdate) {
      onUpdate(value.trim());
    }
  };

  const renderDelete = () => {
    return (
      <button className={classes.delete} onClick={onDelete}>
        x
      </button>
    );
  };

  const renderValue = () => {
    return (
      <Grid>
        <span className={classes.value} onClick={onValueClick}>
          {value}
        </span>
        {onDelete ? renderDelete() : null}
      </Grid>
    );
  };

  const renderEdit = () => {
    return (
      <TextField
        type='text'
        autoFocus
        defaultValue={value}
        onBlur={finishEdit}
        onKeyPress={checkEnter}
        InputProps={{
          disableUnderline: false,
          classes: {
            input: classes.muiTextField,
            underline: classes.underline
          }
        }}
      />
    );
  };

  return (
    <Grid className={classes.container}>
      {editing ? renderEdit() : renderValue()}
    </Grid>
  );
};

export default withStyles(styles)(EditLane);
