import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme, Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../../shared/TabPanel';
import LearnList from './LearnList';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  appBar: {
    background:
      'linear-gradient(135deg, rgba(101,74,141,1) 0%,rgba(88,62,125,1) 50%,rgba(67,39,98,1) 100%)'
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    minWidth: 400,
    maxWidth: 800,
    width: '100%'
  },
  indicator: {
    backgroundColor: '#ffb20a'
  }
}));

const LearnListContainer = ({ currentCategory }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor='inherit'
          variant='fullWidth'
          aria-label='full width tabs example'
          classes={{ indicator: classes.indicator }}
        >
          <Tab label='Articles' {...a11yProps(0)} />
          <Tab label='Courses' {...a11yProps(1)} />
          <Tab label='Other' {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <LearnList currentCategory={currentCategory} type='article' />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <LearnList currentCategory={currentCategory} type='tutorial' />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <LearnList currentCategory={currentCategory} type='other' />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

export default LearnListContainer;
