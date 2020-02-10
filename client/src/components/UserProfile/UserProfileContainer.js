import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Preloader from '../../shared/Preloader';
import { withStyles, createStyles, Grid } from '@material-ui/core';

const styles = createStyles({
  container: {
    display: 'flex',
    width: '100%'
  },
  preloader: {
    position: 'absolute',
    top: '50%',
    left: '50%'
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
  }, []);

  return (
    <Grid>
      {auth.isAuthenticated && profile.profile ? (
        <div>
          <h3>User Profile</h3>
          <h4>Mainpage in User dashboard3</h4>
          <p>{profile.profile.profession}</p>
          <p></p>
        </div>
      ) : profile.loading ? (
        <Preloader className={classes.preloader} />
      ) : (
        <div>Nie posiadasz profilu. Załóż go kudła</div>
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
