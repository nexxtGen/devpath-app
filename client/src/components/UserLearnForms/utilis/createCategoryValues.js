const createCategoryValues = categoryData => {
  return {
    name: categoryData ? categoryData.name : '',
    image: categoryData ? categoryData.image : ''
  };
};

export default createCategoryValues;
