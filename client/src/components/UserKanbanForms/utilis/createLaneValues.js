const createLaneValues = (laneData, collectionId, boardId) => {
  return {
    name: laneData ? laneData.name : '',
    collectionId: laneData ? laneData.collectionId : collectionId,
    boardId: laneData ? laneData.boardId : boardId
  };
};

export default createLaneValues;
