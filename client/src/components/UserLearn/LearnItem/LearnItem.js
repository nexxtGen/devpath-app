import React from 'react';
import { Grid, withStyles, createStyles, Typography } from '@material-ui/core';
import { primaryLight, primaryDark } from '../../../shared/colors';

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
  }
});

const LearnItem = ({ classes }) => {
  return (
    <Grid className={classes.primaryContainer}>
      <Grid
        className={classes.image}
        style={{
          backgroundImage:
            'url(https://miro.medium.com/max/1200/1*Ww98S_CB1p5S-Wgw1H8NoA.jpeg)'
        }}
      ></Grid>

      <Typography variant='h6'>
        How to Use Typescript with React and Redux
      </Typography>
      <Typography variant='subtitle2'> Source: medium.com</Typography>
    </Grid>
  );
};

export default withStyles(styles)(LearnItem);
