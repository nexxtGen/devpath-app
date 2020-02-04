import React, { Fragment } from 'react';
import UserAppbar from './UserAppbar/UserAppbar';
import UserSidebar from './UserSidebar/UserSidebar';

const UserNavigationWrapper = () => {
  return (
    <div>
      <UserSidebar />
      <h1>Navigation Wrapper</h1>
    </div>
  );
};

export default UserNavigationWrapper;
