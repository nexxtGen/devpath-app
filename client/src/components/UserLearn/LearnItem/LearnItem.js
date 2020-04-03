import React from 'react';
import {
  Grid,
  withStyles,
  createStyles,
  Typography,
  Divider,
  IconButton
} from '@material-ui/core';
import { primaryLight, primaryDark } from '../../../shared/colors';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Edit, DeleteOutline } from '@material-ui/icons';
import { connect } from 'react-redux';
import {
  deleteLearnItem,
  setCurrentEditedLearnItem
} from '../../../actions/learn';

const styles = createStyles({
  primaryContainer: {
    margin: 5,
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
    width: '200px',
    height: '140px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    marginRight: 10,
    clipPath: 'polygon(0 0, 100% 0, 84% 100%, 0% 100%)'
  },
  contentContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderLeft: '1px solid lightgray'
  },
  iconBtn: { padding: 6, width: 37 },
  icon: {
    color: primaryLight
  },
  link: {
    color: '#1b75bc',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});

const LearnItem = ({
  classes,
  item,
  deleteLearnItem,
  setCurrentEditedLearnItem,
  setIsOpenItemFormModal
}) => {
  const handleClickEdit = () => {
    setCurrentEditedLearnItem(item);
    setIsOpenItemFormModal({ open: true, mode: 'edit' });
  };
  return (
    <Grid className={classes.primaryContainer}>
      <Grid
        className={classes.image}
        style={{
          backgroundImage: `url(${item.image})`
        }}
      ></Grid>
      <Grid className={classes.contentContainer}>
        <Grid item xs={11} style={{ paddingRight: '15px' }}>
          <a href={item.link} target='blank' className={classes.link}>
            <Typography variant='h6'>{item.title}</Typography>
          </a>
          <Typography variant='subtitle2'> {item.description}</Typography>
          <Typography variant='subtitle2'>
            {' '}
            Source: {item.sourcename}
          </Typography>
          <Grid style={{ margin: 5 }}>
            <Divider />
          </Grid>
          <Grid>
            <Typography variant='subtitle2'>Progress</Typography>
            <LinearProgress variant='determinate' value={item.progress} />
          </Grid>
        </Grid>
        <Grid item xs={1} className={classes.footerContainer}>
          <IconButton
            onClick={() => handleClickEdit()}
            aria-label='edit'
            className={classes.iconBtn}
          >
            <Edit className={classes.icon} />
          </IconButton>
          <IconButton
            onClick={() => deleteLearnItem(item._id, item.categoryId)}
            aria-label='delete'
            className={classes.iconBtn}
          >
            <DeleteOutline className={classes.icon} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default connect(null, { deleteLearnItem, setCurrentEditedLearnItem })(
  withStyles(styles)(LearnItem)
);
