import React from 'react';
import { Grid, withStyles, createStyles, Typography } from '@material-ui/core';
import { primaryLight, primaryDark } from '../../../shared/colors';

const styles = createStyles({
  primaryContainer: {
    margin: 5,
    position: 'relative',
    display: 'flex',
    direction: 'row',
    alignItems: 'center',
    borderTop: '1px solid lightgray',
    transition: 'border 0.3s',
    '&:hover': {
      cursor: 'pointer',
      borderTop: `1px solid ${primaryLight}`
    },
    '&:active': {
      borderTop: `1px solid ${primaryDark}`
    }
  },
  image: {
    width: '100px',
    height: '37px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    marginRight: 10,
    clipPath: 'polygon(0 0, 100% 0, 84% 100%, 0% 100%)'
  },
  count: {
    position: 'absolute',
    display: ' flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    width: 60,
    height: 37,
    clipPath: 'polygon(26% 0%, 100% 0, 74% 100%, 0% 100%)',
    background: primaryLight,
    paddingLeft: 5
  }
});

const CategoryItem = ({ classes, category }) => {
  return (
    <Grid className={classes.primaryContainer}>
      <Grid
        className={classes.image}
        style={{
          backgroundImage: `url('${category.image}')`
        }}
      ></Grid>

      <Typography variant='subtitle2'>{category.name}</Typography>
      <Grid className={classes.count}>
        <Typography variant='subtitle2' style={{ color: 'white' }}>
          {category.items.length}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CategoryItem);
