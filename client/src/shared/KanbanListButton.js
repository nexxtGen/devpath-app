import React from 'react';
import { withStyles, createStyles, Grid, Typography } from '@material-ui/core';
import { Button as MuiButton } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import { primaryExtraLight } from './colors';

const styles = createStyles({
  addBtn: {
    padding: '5px 8px',
    margin: '0 1px'
  },
  addIcon: {
    width: 23,
    height: 23,
    padding: '5px 13px',
    backgroundColor: primaryExtraLight,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addTypo: {
    fontWeight: 400,
    color: 'black',
    fontSize: 16,
    textTransform: 'none'
  }
});

const KanbanListButton = ({ classes, children, variant, size, ...rest }) => {
  return (
    <MuiButton
      variant={variant || 'outlined'}
      className={classes.addBtn}
      {...rest}
    >
      <Grid className={classes.addIcon}>
        <ListIcon style={{ color: 'white' }} />
      </Grid>
      <Typography className={classes.addTypo}>{children}</Typography>
    </MuiButton>
  );
};

export default withStyles(styles)(KanbanListButton);
