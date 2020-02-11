import React from 'react';
import { createStyles, withStyles, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { primaryLight } from '../../shared/colors';

const styles = createStyles({
  container: {
    width: '300px',
    height: '400px',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    backgroundImage:
      'linear-gradient(to right bottom, #664b8e, #5c4181, #523874, #482e67, #3e255b)',

    boxShadow: '1px 1px 8px #aaaaaa',
    margin: '30px'
  },
  title: {
    //fontSize: 14,
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
  codewars: {
    padding: '20px 0',
    maxWidth: '90%'
  }
});

const AvatarCard = ({ classes, profile, user }) => {
  const { avatar, name } = user;
  return (
    <Grid className={classes.container}>
      <img src={avatar} alt='User Avatar' className={classes.avatar} />
      <Typography className={classes.title} variant='h6' gutterBottom>
        {user.name}
      </Typography>
      <Typography className={classes.title} variant='subtitle2' gutterBottom>
        {profile.profession}
      </Typography>
      <Typography className={classes.title} variant='subtitle2' gutterBottom>
        {profile.country}
      </Typography>
      <Typography className={classes.title} variant='subtitle2' gutterBottom>
        {profile.location}
      </Typography>
      <Typography className={classes.title} variant='subtitle2' gutterBottom>
        {profile.website}
      </Typography>
      <img
        src='https://www.codewars.com/users/nexxtGen/badges/large?logo=false'
        alt='Codewars'
        className={classes.codewars}
      />
    </Grid>
  );
};
export default withStyles(styles)(AvatarCard);
