import React from 'react';
import { withStyles, createStyles, Grid, TextField } from '@material-ui/core';

const styles = createStyles({
  container: {},
  delete: {}
});

const EditLane = ({
  classes,
  value,
  onDelete,
  onUpdate,
  onValueClick,
  editing
}) => {
  checkEnter = e => {
    if (e.key === 'Enter') {
      finishEdit(e);
    }
  };

  finishEdit = e => {
    const value = e.target.value;

    if (onUpdate) {
      onUpdate(value.trim());
    }
  };

  renderDelete = () => {
    return (
      <button className={classes.delete} onClick={onDelete}>
        x
      </button>
    );
  };

  renderValue = () => {
    return (
      <Grid>
        <span className={classes.value} onClick={onValueClick}>
          {value}
        </span>
        {onDelete ? renderDelete() : null}
      </Grid>
    );
  };

  renderEdit = () => {
    return (
      <TextField
        type='text'
        autoFocus
        defaultValue={value}
        onBlur={finishEdit}
        onKeyPress={checkEnter}
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
