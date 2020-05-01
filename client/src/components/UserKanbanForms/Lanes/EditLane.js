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
  container: {
    display: 'flex',
    direction: 'row',
    alignItems: 'center',
    padding: 4
  },
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
  },
  value: {
    color: '#585858',
    fontSize: 20,
    fontWeight: 700
  }
});

const EditLane = ({ classes, value, onUpdate, onValueClick, editing }) => {
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
  const renderValue = () => {
    return (
      <Grid className={classes.valueContainer}>
        <Typography className={classes.value} onClick={onValueClick}>
          {value}
        </Typography>
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
