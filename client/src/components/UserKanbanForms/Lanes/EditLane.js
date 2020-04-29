import React from 'react';
import {
  withStyles,
  createStyles,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
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
  },
  valueContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
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
      <Grid className={classes.valueContainer}>
        <Grid item xs={9}>
          <Typography
            variant='h6'
            color='textSecondary'
            className={classes.value}
            onClick={onValueClick}
          >
            {value}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          {onDelete ? renderDelete() : null}
        </Grid>
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
