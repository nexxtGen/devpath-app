import { createStyles } from '@material-ui/core';
import {
  primaryLight,
  primary,
  primaryExtraLight,
  secondaryDark
} from '../../../shared/colors';

const styles = createStyles({
  container: {
    position: 'relative',
    width: '300px',
    height: '460px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 15,
    paddingTop: 10,
    background: 'white',
    borderRadius: '3px',
    boxShadow: '1px 2px 9px lightgray',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  },
  textContainer: {
    padding: '5px 15px 10px',
    overflow: 'auto',
    width: '100%'
  },
  header: {
    padding: '0 5px'
  },
  divider: {
    borderBottom: '1px solid lightgray',
    width: '80%',
    height: 1,
    margin: '5px 10px'
  },
  codeContainer: {
    background: 'white',
    maxHeight: '250px',
    display: 'flex',
    width: '100%'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    background: secondaryDark,
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    borderRadius: '0 0 3px 3px'
  },
  icon: {
    color: 'white',
    padding: 4,
    fontSize: '30px',
    background: primary,
    borderRadius: '50%',
    marginRight: 8,
    '&:hover': {
      background: primaryExtraLight,
      transform: 'scale(1.1)',
      cursor: 'pointer'
    }
  },
  arrow: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 0,
    height: 0,
    borderTop: `30px solid #ffb20a`,
    borderLeft: '30px solid transparent'
  }
});

export default styles;
