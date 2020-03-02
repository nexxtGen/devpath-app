const createCompanyValues = companyData => {
  return {
    position: jobData ? jobData.position : '',
    source: jobData ? jobData.source : '',
    city: jobData ? jobData.city : '',
    technologies: jobData ? jobData.technologies : '',
    pros: jobData ? jobData.pros : '',
    cons: jobData ? jobData.cons : '',
    level: jobData ? jobData.level : '',
    rating: jobData ? jobData.rating : 3,
    companyId: jobData ? jobData.companyId : ''
  };
};

export default createCompanyValues;
