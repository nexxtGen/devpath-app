const createCollectionValues = collectionData => {
  return {
    name: collectionData ? collectionData.name : '',
    description: collectionData ? collectionData.description : '',
    image: collectionData ? collectionData.image : '',
    type: collectionData ? collectionData.type : ''
  };
};

export default createCollectionValues;
