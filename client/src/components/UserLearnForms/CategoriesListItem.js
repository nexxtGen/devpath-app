import React from 'react';
import {
  Grid,
  withStyles,
  createStyles,
  Typography,
  Button
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { connect } from 'react-redux';
//import { deleteFlashcardsCategory } from '../../../actions/flashcards';
import PropTypes from 'prop-types';

const styles = createStyles({
  container: {
    display: 'flex',
    direction: 'row',
    width: '100%',
    minWidth: 450,
    borderTop: '1px solid lightgray',
    padding: 5
  },
  typoContainer: {
    width: '60%'
  },
  imgContainer: {
    width: '30%'
  },
  icon: {
    color: '#f50057'
  },
  romb: {
    background: 'rgb(233, 233, 233)',
    width: '100px',
    height: '37px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)'
  }
});

const CategoriesListItem = ({
  classes,
  category
  //deleteFlashcardsCategory
}) => {
  const { image, name, _id } = category;
  return (
    <Grid className={classes.container}>
      <Grid className={classes.typoContainer}>
        <Typography>{name}</Typography>
      </Grid>
      <Grid className={classes.imgContainer}>
        <Grid
          className={classes.romb}
          style={{
            backgroundImage: `url('${image}')`
          }}
        ></Grid>
      </Grid>
      <Grid className={classes.footer}>
        <Button
          //onClick={() => deleteFlashcardsCategory(_id)}
          className={classes.deleteButton}
          color='primary'
        >
          <Delete className={classes.icon} />
        </Button>
      </Grid>
    </Grid>
  );
};

CategoriesListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  category: PropTypes.object
  //deleteFlashcardsCategory: PropTypes.func.isRequired
};

export default connect(null, {
  //deleteFlashcardsCategory
})(withStyles(styles)(CategoriesListItem));
