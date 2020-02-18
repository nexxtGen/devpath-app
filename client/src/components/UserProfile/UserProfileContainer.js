import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Preloader from '../../shared/Preloader';
import { Link } from 'react-router-dom';
import { routes } from '../../static/routesUrl';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import AvatarCard from './AvatarCard';
import LangCard from './LangCard';
import GithubCalendar from './GithubCalendar';
import checkGitLanguagesExist from './utilis/checkGitLanguagesExist';

const styles = createStyles({
  container: {
    display: 'flex',
    width: '100%'
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexShrink: 1
  },
  gitCalendar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const UserProfileContainer = ({
  getCurrentProfile,
  auth,
  profile,
  classes
}) => {
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line
  }, []);

  return (
    <Grid style={{ padding: '30px' }}>
      {auth.isAuthenticated && profile.profile ? (
        <Grid>
          <Grid className={classes.profileContainer}>
            <AvatarCard profile={profile.profile} user={auth.user} />
            {checkGitLanguagesExist(profile.githubLang) ? (
              <Grid>
                <LangCard githubLang={profile.githubLang} />
              </Grid>
            ) : (
              <Grid>Check Github username. </Grid>
            )}
          </Grid>
          {profile.profile.usernameservices.github && (
            <Grid className={classes.gitCalendar}>
              <GithubCalendar profile={profile.profile} />
            </Grid>
          )}
        </Grid>
      ) : profile.loading ? (
        <Preloader />
      ) : (
        <Grid>
          You do not have a profile. Create it{' '}
          <Link to={routes.createEditProfile}>here</Link>.
        </Grid>
      )}
    </Grid>
  );
};

UserProfileContainer.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(mapStateToProps, { getCurrentProfile })(
  withStyles(styles)(UserProfileContainer)
);
