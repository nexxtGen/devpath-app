import { createStyles } from '@material-ui/core';
import { primary, gradientPrimary } from '../../../shared/colors';
import landing_hero3 from '../../../assets/images/landing_hero3.jpg';

const styles = createStyles({
  hero: {
    width: '100%',
    height: '88vh',
    background: '#605772',
    backgroundImage: `url(${landing_hero3})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)',
    boxShadow: '3px 3px 13px black'
  },
  heroContent: {
    width: '50%',
    height: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  heroText: {
    color: 'white',
    fontFamily: 'Roboto Mono',
    textShadow: '3px 3px purple'
  },

  heroButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  heroButton: {
    color: 'white',
    border: '1px solid white',
    background: 'rgba(0, 0, 0, 0.2)',
    width: 170,
    height: 40,
    margin: '0 16px'
  },
  orText: {
    color: 'white',
    fontFamily: 'Roboto Mono',
    textShadow: '1px 1px purple'
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    transition: 'margin-left 0.3s, ease-in'
  },
  firstInfoSectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '90px 90px 130px',
    flexWrap: 'wrap',
    borderBottom: '1px solid lightgray'
  },
  infoCardContainer: {
    width: 300,
    height: 280,
    padding: '50px 45px 25px',
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '2px',
    boxShadow: '2px 2px 10px gray'
  },
  infoCardIcon: {
    color: primary,
    width: 60,
    height: 60,
    marginBottom: 15
  },
  infoCardTitle: {
    color: 'purple',
    fontSize: 22,
    marginBottom: 15
  },
  infoCardText: {
    color: 'gray',
    textAlign: 'center'
  },
  appInfoPrimaryContainer: {
    margin: '120px 30px'
  },
  appInfoSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
    padding: '20px 80px',
    marginTop: '60px'
  },
  infoImageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 400,
    width: 500
  },
  textInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 65px',
    height: 400,
    width: 500
  },
  freepikInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    fontSize: 10
  },
  freepikInfoLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: 10
  },
  appInfoImage: {
    maxWidth: 500,
    minWidth: 400
  },
  appInfoTextTitle: {
    color: 'purple',
    fontSize: 25,
    fontWeight: '700'
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    background: gradientPrimary,
    fontSize: 15,
    color: 'lightgray'
  },
  scrollUpIcon: {
    color: primary,
    width: 35,
    height: 35,
    border: `1px solid ${primary}`,
    borderRadius: '50%'
  },
  gitLink: {
    color: '#9999ff'
  }
});

export default styles;
