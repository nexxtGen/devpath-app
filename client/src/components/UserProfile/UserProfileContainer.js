import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

const UserProfileContainer = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <div>
      {auth.isAuthenticated && profile.profile ? (
        <div>
          <h3>User Profile</h3>
          <h4>Mainpage in User dashboard</h4>
          <p>{profile.profile.profession}</p>
          <p></p>
        </div>
      ) : profile.loading ? (
        <div>LOADING....</div>
      ) : (
        <div>Nie posiadasz profilu. Załóż go kudła</div>
      )}
    </div>
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
  UserProfileContainer
);
