import React from 'react';
import {
  withStyles,
  createStyles,
  Grid,
  Typography,
  Divider
} from '@material-ui/core';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routes } from '../../../static/routesUrl';
import BasicButton from '../../../shared/BasicButton';
import landing_hero3 from '../../../assets/images/landing_hero3.jpg';
import LinkWithoutDefaultStyles from '../../../shared/LinkWithoutDefaultStyles';

const styles = createStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: 60,
    transition: 'margin-left 0.3s, ease-in'
  },
  hero: {
    background: 'rgb(233, 233, 233)',
    width: '100%',
    height: '95vh',
    backgroundImage: `url('${landing_hero3}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
    //clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0% 100%)'
  },
  heroContent: {
    background: 'rgba(0,0,0, 0.5)',
    width: '50%',
    height: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0% 100%)'
  },
  heroText: {
    color: 'white'
  },
  heroButton: {
    marginTop: 30
  }
});

const LandingPageContainer = ({ classes, auth }) => {
  if (auth.isAuthenticated && auth.user) {
    return <Redirect to={routes.userProfile} />;
  }

  return (
    <div>
      <Grid className={classes.hero}>
        <Grid className={classes.heroContent}>
          <Typography variant='h3' className={classes.heroText}>
            Create your own path
          </Typography>
          <Typography variant='h3' className={classes.heroText}>
            Take control
          </Typography>
          <Divider />
          <Grid className={classes.heroButton}>
            <LinkWithoutDefaultStyles to={routes.registerUser}>
              <BasicButton>Get in</BasicButton>
            </LinkWithoutDefaultStyles>
          </Grid>
        </Grid>
      </Grid>
      <main className={classes.content}>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel.
        </Typography>
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

LandingPageContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object
};

export default connect(mapStateToProps)(
  withStyles(styles)(LandingPageContainer)
);
