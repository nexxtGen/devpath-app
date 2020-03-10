import React, { useState, useEffect } from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import { connect } from 'react-redux';

const styles = createStyles({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap'
  }
});

const UserLearnContainer = ({ classes }) => {
  const [isOpenItemFormModal, setIsOpenItemFormModal] = useState({
    open: false,
    mode: ''
  });
  const [isOpenCategoryModal, setIsOpenCategoryFormModal] = useState({
    open: false,
    mode: ''
  });

  useEffect(() => {
    //eslint-disable-next-line
  }, []);

  return (
    <Grid className={classes.primaryContainer}>
      <h4>User Learn</h4>
    </Grid>
  );
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(UserLearnContainer));
