import { createStyles } from '@material-ui/core';
import { primaryLight } from '../../../shared/colors';

const styles = createStyles({
  content: {
    display: 'flex',
    flexGrow: 1,
    padding: 60,
    transition: 'margin-left 0.3s, ease-in',
    width: '100px'
  },
  primaryContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    background: '#F3F3F8',
    width: '370px',
    border: '1px solid lightgray',
    marginTop: 40,
    marginBottom: 40,
    boxShadow: '1px 1px 16px #aaaaaa'
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: primaryLight,
    width: '100%',
    height: '190px',
    clipPath: 'polygon(100% 0, 100% 100%, 0 74%, 0 0)'
  },
  formikContainer: {
    padding: '30px 20px 60px'
  },
  typographyPrimary: {
    color: 'white',
    marginBottom: '10px'
  }
});

export default styles;
