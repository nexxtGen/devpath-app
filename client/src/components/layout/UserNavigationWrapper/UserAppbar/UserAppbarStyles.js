import { createStyles } from '@material-ui/core';

const drawerWidth = 230;

const styles = createStyles({
  root: {
    flexGrow: 1,
    background: 'none'
  },
  appBar: {
    background:
      'linear-gradient(135deg, rgba(101,74,141,1) 0%,rgba(88,62,125,1) 50%,rgba(67,39,98,1) 100%)',
    zIndex: 1,
    transition: 'width 0.3s, margin .03s, ease-in',
    height: 65
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: 'width 0.3s, margin .03s, ease-in'
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  title: {
    flexGrow: 2,
    marginRight: 100
  },
  small: {
    width: 45,
    height: 45,
    border: '1px solid rgba(121,74,141,1)'
  },
  menu: {
    marginTop: 52
  }
});

export default styles;
