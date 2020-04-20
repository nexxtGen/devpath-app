import { createStyles } from '@material-ui/core';

const styles = createStyles({
  rombContainer: {
    marginLeft: 20
  },
  romb: {
    background: 'rgb(233, 233, 233)',
    width: '250px',
    height: '60px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0% 100%)',
    '&:hover $triangle1': {
      background: 'rgba(0, 0, 0, 0.5)'
    },
    '&:hover $triangle2': {
      background: 'rgba(255, 255, 255, 0.3)'
    },
    '&:hover $triangle3': {
      background: 'rgba(255, 255, 255, 0.3)'
    },
    '&:hover $triangle4': {
      background: 'rgba(70, 70, 70, 0.3)'
    }
  },
  triangle1: {
    position: 'absolute',
    background: 'rgba(255, 255, 255, 0.2)',
    width: '250px',
    height: '60px',
    clipPath: 'polygon(20% 0%, 0% 100%, 40% 100%)',
    transition: 'background 0.2s linear'
  },
  triangle2: {
    position: 'absolute',
    background: 'rgba(48, 48, 48, 0.4)',
    width: '250px',
    height: '60px',
    clipPath: 'polygon(40% 100%, 20% 0, 60% 0)',
    transition: 'background 0.2s linear',
    transitionDelay: '0.1s'
  },
  triangle3: {
    position: 'absolute',
    background: 'rgba(100, 100, 100, 0.3)',
    width: '250px',
    height: '60px',
    clipPath: 'polygon(40% 100%, 80% 100%, 60% 0)',
    transition: 'background 0.2s linear',
    transitionDelay: '0.2s'
  },
  triangle4: {
    position: 'absolute',
    background: 'rgba(150, 150, 150, 0.3)',
    width: '250px',
    height: '60px',
    clipPath: 'polygon(80% 100%, 60% 0%, 100% 0)',
    transition: 'background 0.2s linear',
    transitionDelay: '0.1s'
  }
});

export default styles;
