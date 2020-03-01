import React, { useEffect, useState } from 'react';
import { Grid, createStyles, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { primaryExtraLight, secondaryDark } from '../../../shared/colors';
import { connect } from 'react-redux';
import { filterJobs, clearFilter } from '../../../actions/jobs';

const styles = createStyles({
  search: {
    position: 'relative',
    borderRadius: '2px',
    backgroundColor: secondaryDark,
    '&:hover': {
      backgroundColor: primaryExtraLight
    },
    marginRight: 20,
    marginLeft: 0,
    width: '100%',
    color: 'white'
  },
  searchIconContainer: {
    width: 20,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    paddingLeft: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchIcon: {
    color: 'white'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: '10px 20px 8px 35px',
    width: '100%'
  }
});

const JobFilter = ({ classes, filterJobs, clearFilter }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue !== '') {
      filterJobs(inputValue);
    } else {
      clearFilter();
    }
    // eslint-disable-next-line
  }, [inputValue]);

  const onChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <Grid className={classes.search}>
      <Grid className={classes.searchIconContainer}>
        <SearchIcon className={classes.searchIcon} />
      </Grid>
      <InputBase
        value={inputValue}
        onChange={onChange}
        placeholder='Search…'
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Grid>
  );
};

export default connect(null, { filterJobs, clearFilter })(
  withStyles(styles)(JobFilter)
);
