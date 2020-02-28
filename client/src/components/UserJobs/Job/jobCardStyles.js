import { createStyles } from '@material-ui/core';
import {
  primary,
  primaryLight,
  primaryExtraLight
} from '../../../shared/colors';

const styles = createStyles({
  primaryContainer: {
    position: 'relative',
    width: '450px',
    height: '255px',
    minWidth: '450px',
    minHeight: '255px',
    margin: 15,
    boxShadow: '1px 1px 10px gray'
  },
  container: {
    maxHeight: '215px',
    overflowY: 'scroll',
    padding: 15
  },
  link: {
    color: '#1b75bc',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  commentContainer: {
    padding: '6px 0'
  },
  locationContainer: {
    alignContent: 'center'
  },
  locationIcon: {
    fontSize: 18,
    color: 'gray'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: primaryLight,
    width: '100%',
    height: 45,
    position: 'absolute',
    bottom: 0,
    borderRadius: '0 0 3px 3px',
    padding: '0 20px'
  },
  appliedTypo: {
    color: 'white',
    marginLeft: 10,
    paddingLeft: 10,
    borderLeft: '1px solid white',
    fontWeight: 600
  },
  appliedButton: {
    color: 'lightgreen',
    border: '1px solid lightgreen',
    padding: '3px 5px',
    borderRadius: '2px',
    marginLeft: 7
  },
  icon: {
    color: 'white',
    padding: 4,
    fontSize: '30px',
    background: primary,
    borderRadius: '50%',

    '&:hover': {
      background: primaryExtraLight,
      transform: 'scale(1.1)',
      cursor: 'pointer'
    }
  }
});

export default styles;
