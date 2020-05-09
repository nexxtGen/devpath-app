import React from 'react';
import { createStyles, withStyles, Grid, Typography } from '@material-ui/core';
import SkillItem from './SkillItem';

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
    margin: '30px 50px',
    padding: '15px 15px'
  },
  skillsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
    flexWrap: 'wrap',
    overflowY: 'scroll'
  },
  skillsetText: {
    color: 'white',
    marginBottom: 16,
    borderBottom: '1px solid lightgray',
    width: '85%'
  }
});

const SkillSetCard = ({ classes, skills }) => {
  return (
    <Grid className={classes.container}>
      <Grid className={classes.skillsetText}>
        <Typography variant='h6'>Skillset</Typography>
      </Grid>

      {skills && skills.length > 0 ? (
        <Grid className={classes.skillsContainer}>
          {skills.map((skill, index) => {
            return <SkillItem skill={skill} key={index} />;
          })}
        </Grid>
      ) : (
        <Grid></Grid>
      )}
    </Grid>
  );
};
export default withStyles(styles)(SkillSetCard);
