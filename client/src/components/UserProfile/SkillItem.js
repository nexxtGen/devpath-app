import React from 'react';
import { createStyles, withStyles, Grid, Typography } from '@material-ui/core';

const styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '33%',
    marginBottom: 7
  },
  name: {
    color: '#EFEFEF'
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
});

const SkillItem = ({ classes, skill }) => {
  return (
    <Grid className={classes.container}>
      <Grid
        className={classes.icon}
        style={{ backgroundImage: `url('${skill.icon}')` }}
      ></Grid>
      <Grid>
        <Typography className={classes.name} variant='subtitle2'>
          {skill.skillname}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default withStyles(styles)(SkillItem);
