import React from 'react';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          p={3}
          style={{ overflow: 'auto', maxHeight: 'calc(100vh - 220px)' }}
        >
          {children}
        </Box>
      )}
    </Typography>
  );
};

export default TabPanel;
