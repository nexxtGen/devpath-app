const createItemValues = itemData => {
  return {
    title: itemData ? itemData.name : '',
    image: itemData ? itemData.image : '',
    type: itemData ? itemData.type : '',
    description: itemData ? itemData.description : '',
    link: itemData ? itemData.link : '',
    sourcename: itemData ? itemData.sourcename : '',
    progress: itemData ? itemData.progress : 33,
    categoryId: itemData ? itemData.categoryId : ''
  };
};

export default createItemValues;
