import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import { Button as MuiButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { primaryExtraLight } from './colors';

const styles = createStyles({
  addBtn: {
    padding: '5px 8px',
    margin: '0 5px'
  },
  addIcon: {
    width: 23,
    height: 23,
    padding: 5,
    backgroundColor: primaryExtraLight,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  addTypo: {
    fontWeight: 400,
    color: 'black',
    fontSize: 16,
    textTransform: 'none'
  }
});

const KanbanAddButton = ({ classes, children, variant, size, ...rest }) => {
  return (
    <MuiButton
      variant={variant || 'outlined'}
      className={classes.addBtn}
      {...rest}
    >
      <Grid className={classes.addIcon}>
        <AddIcon style={{ color: 'white' }} />
      </Grid>
      <Typography className={classes.addTypo}>{children}</Typography>
    </MuiButton>
  );
};

export default withStyles(styles)(KanbanAddButton);
