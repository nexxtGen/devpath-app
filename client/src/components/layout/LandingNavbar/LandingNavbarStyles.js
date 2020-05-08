import { createStyles } from '@material-ui/core';
import { gradientPrimary } from '../../../shared/colors';

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    background:
      'linear-gradient(135deg, rgba(101,74,141,1) 0%,rgba(88,62,125,1) 50%,rgba(67,39,98,1) 100%)',
    paddingLeft: '50px',
    paddingRight: '50px'
  },
  link: {
    color: 'inherit',
    textDecoration: 'inherit',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    width: '33px',
    height: '38px',
    marginRight: '10px'
  },
  loggedIn: {
    height: '64px',
    width: '100%',
    background:
      'linear-gradient(135deg, rgba(101,74,141,1) 0%,rgba(88,62,125,1) 50%,rgba(67,39,98,1) 100%)'
  }
});

export default styles;
