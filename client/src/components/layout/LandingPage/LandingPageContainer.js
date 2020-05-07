import React from 'react';
import {
  withStyles,
  createStyles,
  Grid,
  Typography,
  Divider,
  Button
} from '@material-ui/core';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { routes } from '../../../static/routesUrl';
import PropTypes from 'prop-types';
import landing_hero3 from '../../../assets/images/landing_hero3.jpg';
import LinkWithoutDefaultStyles from '../../../shared/LinkWithoutDefaultStyles';
import { primary } from '../../../shared/colors';
import {
  AnnouncementOutlined,
  TrendingUpOutlined,
  BuildOutlinedIcon,
  BuildOutlined
} from '@material-ui/icons';

const styles = createStyles({
  hero: {
    background: 'rgb(233, 233, 233)',
    width: '100%',
    height: '88vh',
    backgroundImage: `url(${landing_hero3})`,
    //backgroundImage:
    //  'linear-gradient(to right top, #eff3f7, #dee5f0, #d1d6e9, #c8c6e0, #c3b6d5)',
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
    padding: 60,
    transition: 'margin-left 0.3s, ease-in'
  },
  // ----------------
  firstInfoSectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 90,
    flexWrap: 'wrap'
  },
  infoCardContainer: {
    width: 310,
    height: 360,
    padding: '40px 45px 25px',
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '2px',
    boxShadow: '1px 1px 9px #827799'
  },
  infoCardIcon: {
    color: '#827799',
    width: 60,
    height: 60,
    marginBottom: 15
  },
  infoCardTitle: {
    color: primary,
    fontSize: 22,
    marginBottom: 15
  },
  infoCardText: {
    color: 'gray',
    textAlign: 'center'
  }
});

const LandingPageContainer = ({ classes, auth }) => {
  if (auth.isAuthenticated && auth.user) {
    return <Redirect to={routes.userProfile} />;
  }

  return (
    <Grid>
      <Grid className={classes.hero}>
        <Grid className={classes.heroContent}>
          <Typography variant='h3' className={classes.heroText}>
            Create your own path
          </Typography>
          <Typography variant='h3' className={classes.heroText}>
            Take control
          </Typography>
          <Divider />
          <Grid className={classes.heroButtons}>
            <LinkWithoutDefaultStyles to={routes.loginUser}>
              <Button variant='outlined' className={classes.heroButton}>
                Sign in
              </Button>
            </LinkWithoutDefaultStyles>
            <Typography className={classes.orText}>OR</Typography>
            <LinkWithoutDefaultStyles to={routes.registerUser}>
              <Button variant='outlined' className={classes.heroButton}>
                Sign up
              </Button>
            </LinkWithoutDefaultStyles>
          </Grid>
        </Grid>
      </Grid>
      <main className={classes.mainContainer}>
        <Grid className={classes.firstInfoSectionContainer}>
          <Grid className={classes.infoCardContainer}>
            <AnnouncementOutlined className={classes.infoCardIcon} />
            <Typography className={classes.infoCardTitle}>
              Title of Card
            </Typography>
            <Typography className={classes.infoCardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </Grid>
          <Grid className={classes.infoCardContainer}>
            <TrendingUpOutlined className={classes.infoCardIcon} />
            <Typography className={classes.infoCardTitle}>
              Title of Card
            </Typography>
            <Typography className={classes.infoCardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </Grid>
          <Grid className={classes.infoCardContainer}>
            <BuildOutlined className={classes.infoCardIcon} />
            <Typography className={classes.infoCardTitle}>
              Title of Card
            </Typography>
            <Typography className={classes.infoCardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </Grid>
        </Grid>
      </main>
    </Grid>
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
