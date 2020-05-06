import { createStyles } from '@material-ui/core';
import { primaryLight, primaryDark } from '../../../shared/colors';

const styles = createStyles({
  viewContainer: {
    minHeight: 'calc(100vh - 64px)',
    backgroundImage:
      'linear-gradient(to top, #534292, #58448f, #5d468c, #61488a, #644a87)'
  },
  formContainer: {
    padding: '70px 0'
  },
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
    border: `1px solid ${primaryDark}`,
    boxShadow: '1px 1px 16px black'
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
