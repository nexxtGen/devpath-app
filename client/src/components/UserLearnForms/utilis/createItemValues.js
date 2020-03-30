const createItemValues = itemData => {
  return {
    name: itemData ? itemData.name : '',
    image: itemData ? itemData.image : ''
  };
};

export default createItemValues;
