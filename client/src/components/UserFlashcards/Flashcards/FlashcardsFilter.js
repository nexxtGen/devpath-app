import React, { useEffect, useState } from 'react';
import { Grid, createStyles, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { gradientPrimary } from '../../../shared/colors';
import { connect } from 'react-redux';
import {
  filterFlashcards,
  clearFlashcardsFilter
} from '../../../actions/flashcards';

const styles = createStyles({
  search: {
    position: 'relative',
    borderRadius: '2px',
    background: gradientPrimary,
    width: '100%',
    color: 'white',
    height: 40,
    paddingLeft: 10
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

const FlashcardsFilter = ({
  classes,
  filterFlashcards,
  clearFlashcardsFilter
}) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue !== '') {
      filterFlashcards(inputValue);
    } else {
      clearFlashcardsFilter();
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

export default connect(null, { filterFlashcards, clearFlashcardsFilter })(
  withStyles(styles)(FlashcardsFilter)
);
