import React from 'react';
import { Grid } from '@material-ui/core';
import LearnItem from './LearnItem';

const LearnList = ({ currentCategory, type }) => {
  return (
    <Grid>
      {currentCategory &&
        currentCategory.items.map(item =>
          item.type === type ? (
            <Grid key={item._id}>TEST: {item.title}</Grid>
          ) : (
            ''
          )
        )}
    </Grid>
  );
};

export default LearnList;
