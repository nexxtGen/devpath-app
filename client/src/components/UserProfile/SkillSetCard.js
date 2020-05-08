import React from 'react';
import { createStyles, withStyles, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = createStyles({
  container: {
    width: '300px',
    height: '410px',
    minWidth: '300px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage:
      'linear-gradient(to right bottom, #664b8e, #5c4181, #523874, #482e67, #3e255b)',
    boxShadow: '1px 1px 8px #aaaaaa',
    margin: '30px 50px'
  },
  title: {
    color: 'white'
  },
  pos: {
    marginBottom: 12
  },
  avatar: {
    height: 150,
    margin: '20px 0',
    borderRadius: '50%'
  },
  codewarsContainer: {
    background: '#664b8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  codewars: {
    padding: '20px 0 25px',
    maxWidth: '90%'
  }
});

const AvatarCard = ({ classes, profile, user }) => {
  const { avatar, name } = user;
  return (
    <Grid className={classes.container}>
      <Grid
        container
        direction='column'
        alignItems='center'
        style={{ height: '100%' }}
      >
        fghfghfgj
      </Grid>
    </Grid>
  );
};
export default withStyles(styles)(AvatarCard);
