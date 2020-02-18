const createProfileValues = profileData => {
  return {
    profession: profileData ? profileData.profession : '',
    company: profileData ? profileData.company : '',
    country: profileData ? profileData.country : '',
    location: profileData ? profileData.location : '',
    website: profileData ? profileData.website : '',
    usernameservices: profileData
      ? profileData.usernameservices
      : {
          github: '',
          codewars: ''
        },
    skillname: '',
    icon: '',
    skills: profileData ? profileData.skills || [] : []
  };
};

export default createProfileValues;
