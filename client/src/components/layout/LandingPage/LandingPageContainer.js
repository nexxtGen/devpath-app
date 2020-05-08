import React from 'react';
import {
  withStyles,
  Grid,
  Typography,
  Divider,
  Button
} from '@material-ui/core';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { routes } from '../../../static/routesUrl';
import PropTypes from 'prop-types';
import LinkWithoutDefaultStyles from '../../../shared/LinkWithoutDefaultStyles';
import info_app_01 from '../../../assets/images/info_app_01.png';
import info_app_02 from '../../../assets/images/info_app_02.png';
import info_app_03 from '../../../assets/images/info_app_03.png';

import {
  AnnouncementOutlined,
  TrendingUpOutlined,
  ListAltOutlined
} from '@material-ui/icons';
import styles from './LandingPageStyles';

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
              Sources Collecting
            </Typography>
            <Typography className={classes.infoCardText}>
              Support your professional development by collecting all the things
              you need to become a specialist in the industry. DevPath tools
              will help you with this.
            </Typography>
          </Grid>
          <Grid className={classes.infoCardContainer}>
            <ListAltOutlined className={classes.infoCardIcon} />
            <Typography className={classes.infoCardTitle}>
              Task management
            </Typography>
            <Typography className={classes.infoCardText}>
              Manage your projects or just daily activities through the kanban
              board.
            </Typography>
          </Grid>
          <Grid className={classes.infoCardContainer}>
            <TrendingUpOutlined className={classes.infoCardIcon} />
            <Typography className={classes.infoCardTitle}>
              Still Being Improved
            </Typography>
            <Typography className={classes.infoCardText}>
              The application is constantly developing to become an even better
              tool. New tools are also planned that will significantly develop
              application capabilities.
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.appInfoPrimaryContainer}>
          <Grid container className={classes.appInfoSection}>
            <Grid className={classes.textInfoContainer}>
              <Grid container justify='flex-end'>
                <Typography className={classes.appInfoTextTitle}>
                  First Title
                </Typography>
              </Grid>
              <Typography
                color='textSecondary'
                variant='body2'
                style={{ textAlign: 'right' }}
              >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
            </Grid>
            <Grid className={classes.infoImageContainer}>
              <img src={info_app_03} className={classes.appInfoImage} />
              <Grid className={classes.freepikInfo}>
                <a
                  href='https://pl.freepik.com/darmowe-zdjecie-wektory/projekt'
                  target='blank'
                >
                  Shared by freepik.com
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.appInfoSection}>
            <Grid className={classes.infoImageContainer}>
              <img src={info_app_01} className={classes.appInfoImage} />
              <Grid
                container
                justify='flex-start'
                className={classes.freepikInfoLeft}
              >
                <a
                  href='https://pl.freepik.com/darmowe-zdjecie-wektory/projekt'
                  target='blank'
                >
                  Shared by freepik.com
                </a>
              </Grid>
            </Grid>
            <Grid className={classes.textInfoContainer}>
              <Grid container justify='flex-start'>
                <Typography className={classes.appInfoTextTitle}>
                  Second Title
                </Typography>
              </Grid>
              <Typography color='textSecondary' variant='body2'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            className={classes.appInfoSection}
            style={{ marginBottom: 100 }}
          >
            <Grid className={classes.textInfoContainer}>
              <Grid container justify='flex-end'>
                <Typography className={classes.appInfoTextTitle}>
                  Third title
                </Typography>
              </Grid>
              <Typography
                color='textSecondary'
                variant='body2'
                style={{ textAlign: 'right' }}
              >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
            </Grid>
            <Grid className={classes.infoImageContainer}>
              <img src={info_app_02} className={classes.appInfoImage} />
              <Grid className={classes.freepikInfo}>
                <a
                  href='https://pl.freepik.com/darmowe-zdjecie-wektory/projekt'
                  target='blank'
                >
                  Shared by freepik.com
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
      <footer>
        <Grid className={classes.footerContainer}>
          <Typography variant='subtitle2'>
            Copyright DevPath 2020, contact with author: kszczypior1@gmail.com
          </Typography>
        </Grid>
      </footer>
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

/*
<a href='https://pl.freepik.com/darmowe-zdjecie-wektory/projekt'>
  Projekt plik wektorowy utworzone przez upklyak - pl.freepik.com
</a>;

*/
