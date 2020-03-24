import React from 'react';
import { Grid, withStyles, createStyles, Typography } from '@material-ui/core';
import { primaryLight, primaryDark } from '../../../shared/colors';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = createStyles({
  primaryContainer: {
    margin: 5,
    display: 'flex',
    direction: 'row',
    alignItems: 'center',
    borderTop: '1px solid lightgray',
    transition: 'border 0.3s',
    '&:hover': {
      cursor: 'pointer',
      borderTop: `1px solid ${primaryLight}`
    },
    '&:active': {
      borderTop: `1px solid ${primaryDark}`
    }
  },
  image: {
    width: '200px',
    height: '140px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    marginRight: 10,
    clipPath: 'polygon(0 0, 100% 0, 84% 100%, 0% 100%)'
  },
  contentContainer: {
    width: '100%'
  }
});

const LearnItem = ({ classes, item }) => {
  return (
    <Grid className={classes.primaryContainer}>
      <Grid
        className={classes.image}
        style={{
          backgroundImage: `url(${item.image})`
        }}
      ></Grid>
      <Grid className={classes.contentContainer}>
        <Typography variant='h6'>{item.title}</Typography>
        <Typography variant='subtitle2'> {item.description}</Typography>
        <Typography variant='subtitle2'> Source: {item.sourcename}</Typography>
        <Grid>
          <Typography variant='subtitle2'>Progress</Typography>
          <LinearProgress
            variant='buffer'
            value={item.progress}
            //valueBuffer={buffer}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(LearnItem);
