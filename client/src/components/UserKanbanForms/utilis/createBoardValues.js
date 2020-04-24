const createBoardValues = (boardData, collectionId) => {
  return {
    name: boardData ? boardData.name : '',
    description: boardData ? boardData.description : '',
    image: boardData ? boardData.image : '',
    collectionId: boardData ? boardData.collectionId : collectionId
  };
};

export default createBoardValues;
