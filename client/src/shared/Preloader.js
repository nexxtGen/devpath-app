import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { primary } from './colors';
import { red } from '@material-ui/core/colors';

const styles = createStyles({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
});

const Preloader = classes => {
  return (
    <div className={classes.root}>
      <CircularProgress
        style={{ color: primary }}
        className={classes.progress}
      />
    </div>
  );
};

export default withStyles(styles)(Preloader);
