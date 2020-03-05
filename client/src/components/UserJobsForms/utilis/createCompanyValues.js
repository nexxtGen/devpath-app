const createCompanyValues = companyData => {
  return {
    name: companyData ? companyData.name : '',
    address: companyData ? companyData.address : '',
    description: companyData ? companyData.description : '',
    size: companyData ? companyData.size : '',
    logo: companyData ? companyData.logo : '',
    website: companyData ? companyData.website : '',
    rating: companyData ? companyData.rating : 3
  };
};

export default createCompanyValues;
