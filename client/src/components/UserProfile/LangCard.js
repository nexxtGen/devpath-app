import React, { useState, Suspense } from 'react';
import { createStyles, withStyles, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import PropTypes from 'prop-types';

const styles = createStyles({
  container: {
    width: '300px',
    height: '400px',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage:
      'linear-gradient(to right bottom, #e5e5e5, #e0e0e0, #dcdcdc, #d7d7d7, #d3d3d3)',
    boxShadow: '1px 1px 8px #aaaaaa',
    margin: '30px 50px',
    padding: 10
  },
  typography: {
    padding: 8
  }
});

const LangCard = ({ classes, githubLang }) => {
  const [language, setLanguage] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e, d, i) => {
    setLanguage(d[i].label);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Grid className={classes.container}>
      <Typography variant='h6'>Git Top Languages</Typography>
      <Grid style={{ maxWidth: '80%', maxHeight: '80%' }}>
        <ReactMinimalPieChart
          animate
          animationDuration={1000}
          animationEasing='ease-out'
          cx={50}
          cy={50}
          data={githubLang}
          label={false}
          lengthAngle={360}
          lineWidth={60}
          onClick={handleClick}
          paddingAngle={0}
          radius={39}
          startAngle={0}
          viewBoxSize={[30, 30]}
          segmentsStyle={{ transition: 'stroke .3s' }}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <Typography className={classes.typography}>{language}</Typography>
        </Popover>
      </Grid>
      {githubLang.map((item, index) => {
        return (
          <Grid
            container
            direction='row'
            alignItems='center'
            style={{ paddingLeft: 35 }}
            key={index}
          >
            <div
              style={{
                backgroundColor: item.color,
                width: 30,
                height: 15,
                marginRight: 10
              }}
            ></div>
            <Typography>{item.label}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

LangCard.propTypes = {
  classes: PropTypes.object.isRequired,
  githubLang: PropTypes.object.isRequired
};
export default withStyles(styles)(LangCard);
