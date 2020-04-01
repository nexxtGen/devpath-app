import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import LearnItem from './LearnItem';

const LearnList = ({ currentCategory, type, setIsOpenItemFormModal }) => {
  if (!currentCategory) {
    return (
      <Grid>
        <Typography variant='h6'>Select category</Typography>
      </Grid>
    );
  }
  return (
    <Grid>
      {currentCategory && currentCategory.items.length > 0 ? (
        currentCategory.items.map(item =>
          item.type === type ? (
            <LearnItem
              item={item}
              key={item._id}
              setIsOpenItemFormModal={setIsOpenItemFormModal}
            />
          ) : (
            ''
          )
        )
      ) : (
        <Typography>List is empty</Typography>
      )}
    </Grid>
  );
};

export default LearnList;
