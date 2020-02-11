import React from 'react';
import { createStyles, withStyles, Grid } from '@material-ui/core';
import GitHubCalendar from 'react-github-calendar';

const styles = createStyles({
  container: {
    maxWidth: '100%',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage:
      'linear-gradient(to right bottom, #e5e5e5, #e0e0e0, #dcdcdc, #d7d7d7, #d3d3d3)',

    boxShadow: '1px 1px 8px #aaaaaa',
    margin: '30px',
    padding: '15px 40px'
  }
});

const GithubCalendar = ({ classes, profile }) => {
  const devpathTheme = {
    background: 'transparent',
    text: '#000',
    grade4: '#351b66',
    grade3: '#5a418a',
    grade2: '#7e68a8',
    grade1: '#b29fd8',
    grade0: '#e5e5e5'
  };
  return (
    <Grid className={classes.container}>
      <GitHubCalendar
        username={profile.usernameservices.github}
        theme={devpathTheme}
      />
    </Grid>
  );
};

export default withStyles(styles)(GithubCalendar);
