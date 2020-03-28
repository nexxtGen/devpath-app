import React from 'react';
import {
  Grid,
  withStyles,
  createStyles,
  Typography,
  Button
} from '@material-ui/core';
import { primaryLight } from '../../shared/colors';
import { Delete, Edit } from '@material-ui/icons';
import { connect } from 'react-redux';
import {
  deleteLearnCategory,
  setCurrentEditedLearnCategory
} from '../../actions/learn';
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
    width: '50%'
  },
  imgContainer: {
    width: '25%'
  },
  icons: {
    display: 'flex',
    direction: 'row'
  },
  icon: {
    color: '#f50057'
  },
  iconEdit: {
    color: primaryLight
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
  },
  button: {
    width: 20
  }
});

const CategoriesListItem = ({
  classes,
  category,
  deleteLearnCategory,
  setCurrentEditedLearnCategory,
  setIsOpenCategoryFormModal
}) => {
  const handleEdit = category => {
    setCurrentEditedLearnCategory(category);
    setIsOpenCategoryFormModal({ open: true, mode: 'edit' });
  };

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
      <Grid className={classes.icons}>
        <Button
          onClick={() => deleteLearnCategory(_id)}
          className={classes.button}
        >
          <Delete className={classes.icon} />
        </Button>
        <Button onClick={() => handleEdit(category)} className={classes.button}>
          <Edit className={classes.iconEdit} />
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
  deleteLearnCategory,
  setCurrentEditedLearnCategory
})(withStyles(styles)(CategoriesListItem));
