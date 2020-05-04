const createJobValues = jobData => {
  return {
    position: jobData ? jobData.position : '',
    source: jobData ? jobData.source : '',
    address:
      jobData && jobData.formattedAddress
        ? jobData.location.formattedAddress
        : '',
    technologies: jobData ? jobData.technologies : '',
    pros: jobData ? jobData.pros : '',
    cons: jobData ? jobData.cons : '',
    level: jobData ? jobData.level : '',
    rating: jobData ? jobData.rating : 3,
    companyId: jobData ? jobData.companyId : ''
  };
};

export default createJobValues;
